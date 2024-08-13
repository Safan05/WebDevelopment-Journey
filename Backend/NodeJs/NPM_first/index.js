// to use a specific npm package get it's cmd code from the website and put in the cmd
// then we require as we did with modules.
// then go to deocumentation of the package to know how to use it 
// more about npm packages:https://docs.npmjs.com/cli/v10/configuring-npm/package-json
const moment=require("moment");
console.log(moment().add(1,'months').format("MMM"));    // you'll get the next months.
console.log(moment().format("MMM"));
/**
 * ~version “Approximately equivalent to version”,
 *  will automatically update you to all future patch versions that are backwards-compatible,
 *  without incrementing the minor version. ~1.2.3 will use releases from 1.2.3 to < 1.3.0.
 * 
 *  ^version “Compatible with version”, 
 *  will automatically update you to all future minor/patch versions that are backwards-compatible, 
 *  without incrementing the major version. ^1.2.3 will use releases from 1.2.3 to < 2.0.0.
 */

/**
 * npm commands:
 *  1-npm init: Create your main package
 *  2-npm i: generate all dependancies on your package
 *  3- -g: it's a flag used after installation command of any package so it's installed globally on the whole machine ,
 *         also it won't be added in package.json file so we will add it manually in the dependancies.
 *  4-npm i packagename: install specific package on the target folder.
 *  5-npm i packagename@specificversion: install the package name of the wanted version.
 *  6-npm view packagename version: shows u all the versions of a specific package.
 *  7-npm upadate: update all dependancies but with restrictions we've put above with ^ or ~.
 *  8-npm list -g: all installed packages view.
 *  9-npm list -g--depth=0: just the modules view not all detailes like 8.
 *  10-npm outdated -g: lists the outdated packages globally.
 *  11-npm view packagename dependancies: lists the dependancies of specific package.
 *  12-npm i packagename --save-dev: will be saved as developement dependancy which is used during development.
 *  13-npm un packagename: uninstall specific package.
 * 
 *  Get more commands from link below:
 *  --> https://docs.npmjs.com/cli/v6/commands
 */