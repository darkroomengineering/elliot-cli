import * as inquirer from 'inquirer';
import chalk = require('chalk');
import Conf from 'conf';
import colors from 'ansi-colors';

const config = new Conf();


export const askElliotCredentials = () => {
  const questions = [
    {
      name: 'email',
      type: 'input',
      message: 'Enter your elliot email address:',
      default: config.get('email'),
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
      message: 'Enter your password: ',
      validate: function(value) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter your password.';
        }
      }
    }
  ];
  return inquirer.prompt(questions).then((result) => {
    config.set('email', result.email)
    return result
  });
}

export const selectDomain = (domainList) => {
  const priorChoices = Array.from(new Set(config.get('domainChoices'))) || [];

  const separator = priorChoices &&
    priorChoices.length && { role: 'seperator', value: colors.dim('-------------') };
  const domainChoices = [
    ...priorChoices,
    separator,
    ...domainList.filter((x) => x.name !== priorChoices.includes(x.name))
  ].filter(Boolean)
  
  const questions = [
    {
      type: 'list',
      name: 'domain',
      message: 'Select the domain you want to use',
      default: config.get('domainChoices'),
      choices: domainChoices
    }
  ];
  return inquirer.prompt(questions).then((result) => {
    config.set('domainChoices', [result.domain, ...priorChoices].slice(0, 3));
    return result
  });
}

export const selectCheckout = (checkOutList) => {
  const priorChoices = Array.from(new Set(config.get('checkoutChoices'))) || [];
  const separator = priorChoices &&
    priorChoices.length && { role: 'seperator', value: colors.dim('-------------') };
  const checkoutChoices = [
    ...priorChoices,
    separator,
    ...checkOutList.filter((x) => x.name !== priorChoices.includes(x.name))
  ].filter(Boolean)

  const questions = [
    {
      type: 'list',
      name: 'storefront',
      message: 'Select the storefront to deploy to ZEIT',
      default: config.get('checkout'),
      choices: checkoutChoices
    }
  ];
  return inquirer.prompt(questions).then((result) => {
    config.set('checkoutChoices', [result.storefront, ...priorChoices].slice(0, 3))
    return result
  });;
}