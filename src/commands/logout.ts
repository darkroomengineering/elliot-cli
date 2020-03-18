import {Command, flags} from '@oclif/command'
import { elliotDisplay } from '../lib/helpers';
import Configstore from 'configstore';
import chalk from 'chalk';

const conf = new Configstore('elliot-cli');

export default class Login extends Command {
  static description = 'Logout from your account'

  static flags = {
    help: flags.help({
      char: 'h'
    })
  }

  async run() {
    const {args, flags} = this.parse(Login)
    elliotDisplay()
    conf.delete('elliot.token')
    
    console.log(
      chalk.green(
        chalk.green.bold("Logout successful")
      )
    );
  }
}
