ohanapi.org
===========

The ohanapi.org website for the [Ohana API](https://github.com/codeforamerica/ohana-api) project.

## Requirements

**NodeJS & npm**
Use the how-to on [installing NodeJS & npm](https://github.com/codeforamerica/howto/blob/master/Node.js.md).

**GruntJS**
Check that the `grunt` command works from a terminal window. If not, you will need to install the grunt command-line tool. Type `sudo npm install -g grunt-cli` to do this.

## Instructions

  This project uses Grunt to automatically deploy the ohanapi.org website from the `src` directory in the `master` branch to the root directory of the `gh-pages` branch, where it's served at [ohanapi.org](http://ohanapi.org) using GitHub project pages.

  From the terminal, type `npm install` to install the required node modules for grunt.

**To work on developing the site:**

  - Type `grunt watch` to compile the SASS into CSS when it changes.

  - Type `grunt development` to compile the project into a `www` directory. This directory is what will be deployed to the `gh-pages` branch in the production task.

  - Type `grunt clean` to remove the `www` directory.

**To perform production deployments from the master branch, from the terminal:**

  - Type `grunt production -m="Commit message"` to compile a production deploy and push to the `gh-pages` branch. The `-m="message"` flag is optional, but the commit will have a generic commit message if a custom one is not provided.

