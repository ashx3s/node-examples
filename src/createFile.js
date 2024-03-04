"use strict";

import fs from "node:fs";
import path from "node:path"

export default function createFile(fileName, content) {
  // if check - make sure that the file has an extension
  if (!path.extname(fileName)) {
   return console.error('There is no file extension, please input one') 
  }

  // TODO: Make the file be created in dist instead of ./
fs.writeFile(fileName, content, (err) => {
  if (err) {
    console.error(err)
    return
  }
  console.log("success, file created")
})
}