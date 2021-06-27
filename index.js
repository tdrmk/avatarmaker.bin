#!/usr/bin/env node

const { generateAvatar } = require("@tdrmk/avatarmaker");

const { program } = require("commander");

program
  .option("-m, --male", "generate a random male avatar")
  .option("-f, --female", "generate a random female avatar");

program.parse(process.argv);
const options = program.opts();

let gender;
if (options.male) {
  gender = "male";
} else if (options.female) {
  gender = "female";
} else {
  gender = Math.floor(Math.random() * 2) === 0 ? "male" : "female";
}

const { svg } = generateAvatar({ gender });
console.log(svg);
