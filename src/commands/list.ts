import {Command, flags} from '@oclif/command'
import { elliotDisplay } from '../lib/helpers';
import { getDomains, getCheckout } from '../api/query';
import Table  from 'cli-table';
import chalk from 'chalk';
import { setElliotCredentials } from '../lib/auth';





export default class List extends Command {
  static description = 'List all domains or storefronts within a domain'

  static flags = {
    help: flags.help({
      char: 'h'
    }),
    domain_id: flags.string({
      char: 'd',
      description: 'Pass in domain id to list all storefronts with the domain'
    }),
    storefront: flags.boolean({
      char: 's',
      description: 'List all storefronts in a domain',
      dependsOn: ['domain_id']
    }),
  }

  async run() {
    const {args, flags} = this.parse(List)
    elliotDisplay()
    const login = await setElliotCredentials()

    try {
      if (login) {
        const domains = await getDomains()

        if (!flags.storefront && !flags.domain_id) {
          const table = new Table({
            head: [
              chalk.blueBright('Domains'),
              chalk.blueBright('Domains_id')
            ],
            chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
            , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
            , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
            , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
          });

          domains.map((domain) => {
            table.push([
              domain.name, domain.id
            ])
          })

          this.log(table.toString())
        }

        if (flags.storefront && flags.domain_id) {
          const storefronts = await getCheckout(flags.domain_id)
          const table = new Table({
            head: [
              chalk.blueBright('Storefront'),
              chalk.blueBright('Storefront_id')
            ],
            chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
            , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
            , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
            , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
          });
          
          if (storefronts === undefined || storefronts.length == 0) {
            table.push(["You have no storefronts for this domain", "empty"])
            return this.log(table.toString())
          }
          storefronts.map((storefront) => {
            table.push([
              storefront.name, storefront.id
            ])
          })
          this.log(table.toString())
        }
      }
    } catch (error) {
      console.log(
        chalk.red(
          "Authentication token expired. Rerun 'elliot login' command to login"
        )
      );
    }
  }
}
