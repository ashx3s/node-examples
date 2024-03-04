"use strict";
import  fs from 'node:fs';
// create a "distribution folder" for output files to go into

export default function generateDist() {
  // TODO: verify if dist is already created and don't do it if it is

  // this all would go into an else clause
  fs.mkdir('./dist', (err) => {
    return console.error("Log Error", err)
  })
  console.log("Success! dist created")
}