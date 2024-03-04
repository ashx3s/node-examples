"use strict";

import fs from "node:fs";
export default function createFile(fileName, content) {
  // TODO: Make the file be created in dist instead of ./
fs.writeFile(fileName, content, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("success, file created")
})
}