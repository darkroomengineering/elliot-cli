import Conf from 'conf';
import chalk from 'chalk';
import { askElliotCredentials } from './inquirer';
import { login } from '../api/query';



const config = new Conf();

export const getStoredElliotToken = () => {
  return config.get('elliot.token');
}

export const setElliotCredentials = async () => {
  let token = await getStoredElliotToken();

  if (!token) {
    try {
      const credentials = await askElliotCredentials();
      token = await login(credentials)
      config.set('elliot.token', token);
      console.log(
        chalk.green(
          "Successfully authenticated"
        )
      )
    } catch (error) {
      console.log(
        chalk.red(
          "Invalid username or password"
        )
      )
    }
  }
  return token
}

