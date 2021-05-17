const path = require('path')

console.log("Filename: ", path.basename(__filename)) //path.js
console.log("Filename without extension: ", path.basename(__filename, ".js")) //path

console.log("Directory name: ", path.dirname(__filename)) //C:\Users\User\WebstormProjects\nodeFirstSteps\nodeJsModulesExample
console.log("Directory name2: ", __dirname) //C:\Users\User\WebstormProjects\nodeFirstSteps\nodeJsModulesExample

console.log("File Extension: " +path.extname(__filename)) //.js

let fileStuff = path.parse(__filename); //Object
console.log(fileStuff) //Object like toString stuff
//console.log(fileStuff.name)
//console.log(fileStuff.dir)
//console.log(fileStuff.base)

console.log("New Directory String: ", path.join(__dirname, "NewFolder"))

