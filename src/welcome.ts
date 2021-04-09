const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const program = require("commander");

export class Welcome {
  
  /**
   * Generate welcome & info messages.
   * 
   * @returns void
   */
  public static startUp(): void {
    clear();
    console.log(
      chalk.red(
        figlet.textSync("Angulacia", {
          horizontalLayout: "full",
        })
      )
    );
        
    program
      .version("1.0.0")
      .description(
        "Create a good structured folder architecture in your Angular project."
      )
      .option("-b, --basic", "Create basic folder structure")
      .parse(process.argv);
    
      // Display options. 
      if (!process.argv.slice(2).length) {
        program.outputHelp();
      }
  }
}
