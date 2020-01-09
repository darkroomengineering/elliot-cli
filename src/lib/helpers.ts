import chalk from 'chalk';
import figlet from 'figlet';
import clear from 'clear';

export const elliotDisplay = () => {
  clear();
  console.log(
    chalk.green(
      figlet.textSync('Elliot cli', { horizontalLayout: 'full' })
    )
  );
}