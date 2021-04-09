#!/usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var generator_1 = require("./generator");
var welcome_1 = require("./welcome");
var program = require('commander');
// Display welcome message. 
welcome_1.Welcome.startUp();
var options = program.opts();
if (options.basic) {
    new generator_1.Generator().generate();
}
