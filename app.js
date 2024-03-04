"use strict";
import path from "node:path"
import  createFile  from "./src/createFile.js";
import generateDist from "./src/generateDist.js";
import  logFile  from "./src/logFile.js";

const content = `# README \n\n this is a readme file but not the original readme file. it is a tribute`;
const fileName = "wassup.txt"
const dirName = "./dist/"
// log the dist folder dir


// generateDist()

createFile(fileName, content);