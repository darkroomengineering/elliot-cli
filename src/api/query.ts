import { createApolloFetch } from 'apollo-fetch';
import { getStoredElliotToken } from '../lib/auth';
​
const fetch = createApolloFetch({
  uri: 'https://admin-dev.elliot.store/api',
});
​
const loginMutation = `
  mutation($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
        token
    }
  }`
​
const domainMutaion = `query {
  domains {
      edges {
          node {
              company {
                name
                id
              }
          }
      }
  }
}`
​
const checkoutQuery = `
  query($id: ID!) {
    domains(id : $id) {
      edges {
        node {
          checkouts {
            edges {
              node {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`

const apiKeyQuery = `
  query($id: ID!) {
    domains(id: $id)  {
      edges {
        node {
          apiKeys {
            edges {
              node {
                id
                key
                type
              }
            }
          }
        }
      }
    }
  }
`
const authorization = () => {
  let token = getStoredElliotToken()
​
  fetch.use(({ request, options }, next) => {
    if (!options.headers) {
      options.headers = {}; 
    }
​
​
    options.headers['authorization'] = `JWT ${token}`;
​
    next();
  })
  
}
​
​
export const login = async (userData) => {
  const login = await fetch({
    query: loginMutation,
    variables: { email: userData.email, password: userData.password}
  })
  return login.data.tokenAuth.token
}

export const getDomains = async () => {
  authorization()

  try {
    const domain = await fetch({
      query: domainMutaion
    })
  ​
    let id;

    const domainArray = domain.data.domains.edges.map(({ node: { company } }) => {
      if (company) {
        const { name = '', id = '' } = company;

        return ({
          name,
          id,
          value: name,
        })
      }
    }).filter(domain => domain);

    return domainArray

  } catch (error) {
    console.error(error)
  }
  
}
​
export const getCheckout = async (domainId) => {
  authorization()
  const storefrontFetch = await fetch({
    query: checkoutQuery,
    variables: { id: domainId }
  })
​
  const storefrontArray = storefrontFetch.data.domains.edges.map(checkout => {
    return checkout.node.checkouts.edges
  })
  const checkouts = storefrontArray[0].map(data => ({
    id: data.node.id,
    name: data.node.name
  }))
  return checkouts
}

export const getApiKey = async (domainId) => {
  authorization()

  try {
    const apiKeysFetch = await fetch({
      query: apiKeyQuery,
      variables: { id: domainId }
    })

    const apiKeyArray = apiKeysFetch.data.domains.edges.map(keys => {
      return keys.node.apiKeys.edges
    })

    const prodKey = 1
    const apiKeys = apiKeyArray[0].filter(data => data.node.type === prodKey)

    return apiKeys
    
  } catch (error) {
    console.error(error)
  }
}