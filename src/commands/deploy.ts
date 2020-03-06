import {Command, flags} from '@oclif/command'
import { elliotDisplay } from '../lib/helpers';
import { setElliotCredentials } from '../lib/auth';
import { getDomains, getCheckout } from '../api/query';
import { selectDomain, selectCheckout } from '../lib/inquirer';
import Configstore from 'configstore';
import chalk from 'chalk';
import execa from 'execa';
import Listr from 'listr';
import path from 'path';

const conf = new Configstore('elliot-cli');

export default class Deploy extends Command {
  static description = 'describe the command here'

  async run() {
    elliotDisplay()

    const login = await setElliotCredentials()
    const insDir = `${path.join(__dirname, '../../install.sh')}`

    try {
      if (login) {
        const domains = await getDomains()
        const params = await selectDomain(domains)
        const selectedDomain = domains.filter(domain => domain.name === params.domain);
        const checkout = await getCheckout(selectedDomain[0].id)
        if (checkout === undefined || checkout.length === 0) {
          return console.log(chalk.yellow("You have no storefront for this domain"))
        } else {
          await selectCheckout(checkout)
          const tasks = new Listr([
            {
              title: 'Cloning zeit-boilerplate-directory',
              task: () => execa('git', ['clone', 'https://github.com/helloiamelliot/zeit-checkout-boilerplate'])
            },
            {
              title: 'Install package dependencies with Yarn',
              task: (ctx, task) => execa(insDir)
                .catch(() => {
                  ctx.yarn = false;
          
                  task.title = `${task.title} (or not)`;
                  task.skip('Yarn not available');
                })
            },
            {
              title: 'Install package dependencies with npm',
              skip: ctx => ctx.yarn !== false && 'Dependencies already installed with Yarn',
              task: (ctx, task) => {
                task.output = 'Installing dependencies...';
          
                return execa(insDir, ['npm'])
              }
            }
          ]);
          
          tasks.run().catch(err => {
              console.error(err);
          });
        }
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


 
