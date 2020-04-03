import { Command } from '@oclif/command';
import updateNotifier from 'update-notifier';
import { elliotDisplay } from './lib/helpers';

const pkg = require('../package.json')


export default abstract class Base extends Command {

  async init() {
    elliotDisplay()

    const notifier = updateNotifier({
      pkg,
      updateCheckInterval: 1000,
      shouldNotifyInNpmScript: true
    });
    notifier.notify();
  }
}