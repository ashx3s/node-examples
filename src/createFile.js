"use strict";

import fs from "node:fs";
import path from "node:path";

export default function createFile(fileName, content) {
  // if check - make sure that the file has an extension
  if (!path.extname(fileName)) {
    return console.error("There is no file extension, please input one");
  }
  const newPath = path.join("./dist", fileName);
  fs.writeFile(newPath, content, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`success, file created: ${newPath}`);
  });
}
