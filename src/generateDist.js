"use strict";
import fs from "node:fs";
import path from "node:path";
// create a "distribution folder" for output files to go into

export default function generateDist() {
  if (fs.existsSync("./dist")) {
    console.log("dist exists");
  } else {
      fs.mkdir("./dist", (err) => {
        return console.error("Log Error:", err);
      });
      console.log("Success! dist created");
  }
}
