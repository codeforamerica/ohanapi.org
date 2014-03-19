ohanapi.org
===========

The ohanapi.org website for the [Ohana API](https://github.com/codeforamerica/ohana-api) project.

## Instructions

  This project uses Grunt to automatically deploy the ohanapi.org website from the `src` directory in the `master` branch to the root directory of the `gh-pages` branch, where it's served at [ohanapi.org](http://ohanapi.org) using GitHub project pages.

**To perform production deployments from the master branch, from the terminal:**

  - Type `npm install` to install the required node modules for grunt.

  - Type `grunt production -m="Commit message"` to compile a production deploy and push to the `gh-pages` branch. The `-m="message"` flag is optional, but the commit will have a generic commit message if a custom one is not provided.

**To work on developing the site:**

  - Type `grunt watch` to compile the SASS into CSS when it changes.

  - Type `grunt development` to compile the project into a `www`. This directory is what will be deployed to the `gh-pages` branch in the production task.

  - Type `grunt clean` to remove the `www` directory.
