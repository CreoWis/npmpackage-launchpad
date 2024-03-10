#!/usr/bin/env node

import { getHelloWorld } from "./services/helloword.services";

(async function chuckJokes() {
  const args = process.argv.splice(2);
  const arg = args[0];

  if (args.length > 1) {
    return console.info("You can only pass one argument");
  }

  if (!arg) {
    return console.info("You need to pass a string");
  }
  const joke = await getHelloWorld(arg);
  console.info(joke.value);
})();
