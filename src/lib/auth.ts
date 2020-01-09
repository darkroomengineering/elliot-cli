import Configstore from 'configstore';
import cli from 'cli-ux'
import pkg from '../../package.json';
import { askElliotCredentials } from './inquirer';
import { login } from '../api/query';


const conf = new Configstore(pkg.name);
const Spinner = cli.action

export const getStoredElliotToken = () => {
  return conf.get('elliot.token');
}

export const setElliotCredentials = async () => {
  let token = await getStoredElliotToken();
  if (!token) {
    const credentials = await askElliotCredentials();
    token = await login(credentials)
    conf.set('elliot.token', token);
  }
  return token
}

