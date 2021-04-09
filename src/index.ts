#!/usr/bin/env node

import { Generator } from "./generator";
import { Welcome } from "./welcome";
const program = require('commander');

// Display welcome message. 
Welcome.startUp();
  
const options = program.opts();

if (options.basic) {
  new Generator().generate();
}
