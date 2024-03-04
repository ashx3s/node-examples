"use strict"

import fs from "node:fs";
export default function logFile(file, encoding="utf8") {
  fs.readFile(file, encoding,  (error, data) => {
    if (error) {
      console.error(error)
      return
    }
    console.log(data)
  })
}
  