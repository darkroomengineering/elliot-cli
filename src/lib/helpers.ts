import chalk from 'chalk';
import figlet from 'figlet';
import clear from 'clear';
import cowsay from 'cowsay';
import path from 'path';


export const elliotDisplay = () => {
  clear();
  console.log(
    chalk.green(
      cowsay.say({
        text : "Hello, I am elliot",
        f: `${path.join(__dirname, '../../cows/cowfile')}`
      })
    )
  );
}