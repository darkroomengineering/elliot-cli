import * as inquirer from 'inquirer';
import chalk = require('chalk');

export const askElliotCredentials = () => {
  const questions = [
    {
      name: 'email',
      type: 'input',
      message: 'Enter your elliot email address',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your elliot email address.';
        }
      }
    },
    {
      name: 'password',
      type: 'password',
      message: 'Enter your password:',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your password.';
        }
      }
    }
  ];
  return inquirer.prompt(questions);
}

export const selectDomain = (domainList) => {
  const questions = [
    {
      type: 'rawlist',
      name: 'domain',
      message: 'Select the domain you want to use',
      choices: domainList
    }
  ];
  return inquirer.prompt(questions);
}

export const selectCheckout = (checkOutList) => {
  if (checkOutList === undefined || checkOutList.length == 0) {
     return console.log(chalk.yellow("You have no storefront for this domain"))
  }
  const questions = [
    {
      type: 'rawlist',
      name: 'storefront',
      message: 'Select the storefront to deploy to ZEIT',
      choices: checkOutList
    }
  ];
  return inquirer.prompt(questions);
}