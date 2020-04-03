import { flags } from '@oclif/command'
import Conf from 'conf';
import chalk from 'chalk';
import Base from '../base';


const config = new Conf();

export default class Login extends Base {
  static description = 'Logout from your account'

  static flags = {
    help: flags.help({
      char: 'h'
    })
  }

  async run() {
    const {args, flags} = this.parse(Login)

    config.delete('elliot.token')
    
    console.log(
      chalk.green(
        chalk.green.bold("Logout successful")
      )
    );
  }
}
