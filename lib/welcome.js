"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Welcome = void 0;
var chalk = require("chalk");
var clear = require("clear");
var figlet = require("figlet");
var program = require("commander");
var Welcome = /** @class */ (function () {
    function Welcome() {
    }
    /**
     * Generate welcome & info messages.
     *
     * @returns void
     */
    Welcome.startUp = function () {
        clear();
        console.log(chalk.red(figlet.textSync("Angulacia", {
            horizontalLayout: "full",
        })));
        program
            .version("1.0.0")
            .description("Create a good structured folder architecture in your Angular project.")
            .option("-b, --basic", "Create basic folder structure")
            .parse(process.argv);
        // Display options. 
        if (!process.argv.slice(2).length) {
            program.outputHelp();
        }
    };
    return Welcome;
}());
exports.Welcome = Welcome;
