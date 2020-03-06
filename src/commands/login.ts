import {Command, flags} from '@oclif/command'
import { setElliotCredentials } from '../lib/auth';
import { elliotDisplay } from '../lib/helpers';
import Configstore from 'configstore';


const conf = new Configstore('elliot-cli');

export default class Login extends Command {
  static description = 'Authenticate with elliot api'

  static flags = {
    help: flags.help({
      char: 'h'
    })
  }

  async run() {
    const {args, flags} = this.parse(Login)
    elliotDisplay()
    conf.delete('elliot.token')
    await setElliotCredentials()
  }
}


