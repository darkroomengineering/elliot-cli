import {Command, flags} from '@oclif/command'
import { elliotDisplay } from '../lib/helpers';
import { setElliotCredentials } from '../lib/auth';
import { getDomains, getCheckout } from '../api/query';
import { selectDomain, selectCheckout } from '../lib/inquirer';
import Configstore from 'configstore';
import pkg from '../../package.json';
import chalk from 'chalk';

const conf = new Configstore(pkg.name);

export default class Deploy extends Command {
  static description = 'describe the command here'

  async run() {
    elliotDisplay()
    const login = await setElliotCredentials()
    try {
      if (login) {
        const domains = await getDomains()
        const params = await selectDomain(domains)
        const selectedDomain = domains.filter(domain => domain.name === params.domain);
        const checkout = await getCheckout(selectedDomain[0].id)
        await selectCheckout(checkout)
      }   
    } catch(e) {
      conf.delete('elliot.token')
      console.log(
        chalk.red(
          "Authentication token expired. Rerun 'elliot deploy' command to login"
        )
      );
    }
    
  }
}
