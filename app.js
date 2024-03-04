"use strict";
import fs from "node:fs"

// Create a new .txt file

const content = `# README \n\n this is a readme file but not the original readme file. it is a tribute`
/*
fs.writeFile('./test.md', content, (err) => {
  if (err) {
    console.error(err)
    return
  }
})
*/
fs.readFile("./test.md", 'utf8',  (error, data) => {
  if (error) {
    console.error(error)
    return
  }
  console.log(data)
})


