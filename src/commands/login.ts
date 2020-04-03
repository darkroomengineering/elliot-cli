import { flags } from '@oclif/command'
import { setElliotCredentials } from '../lib/auth';
import Conf from 'conf';
import Base from '../base';

const config = new Conf();

export default class Login extends Base {
  static description = 'Authenticate with elliot api'

  static flags = {
    help: flags.help({
      char: 'h'
    })
  }

  async run() {
    const {args, flags} = this.parse(Login)
    
    config.delete('elliot.token');
    await setElliotCredentials()
  }
}