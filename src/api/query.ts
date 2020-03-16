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
export const login = async (params) => {
  const login = await fetch({
    query: loginMutation,
    variables: { email: params.email, password: params.password}
  })
  return login.data.tokenAuth.token
}

export const getDomains = async () => {
  authorization()
  const domain = await fetch({
    query: domainMutaion
  })
​
  let id;
  const domainArray = domain.data.domains.edges.map(company => ({
    name: company.node.company.name,
    value: company.node.company.name,
    id: company.node.company.id,
  }))
  return domainArray
}
​
export const getCheckout = async (params) => {
  authorization()
  const storefront = await fetch({
    query: checkoutQuery,
    variables: { id: params }
  })
​
  const storefrontArray = storefront.data.domains.edges.map(checkout => {
    return checkout.node.checkouts.edges
  })
  const checkouts = storefrontArray[0].map(data => ({
    id: data.node.id,
    name: data.node.name
  }))
  return checkouts
}