const fs = require('fs') //FileSystem

const path = require('path')

const filePathToTxt = path.join(__dirname, "fsNewFolder", "newTxt.txt")

//Creates folder
fs.mkdir(path.join(__dirname, "fsNewFolder"), err => err == null ? console.log("Folder created") : console.log("Folder already exists"))

// create new file and write
fs.writeFile(filePathToTxt, "I am superb!",
        err => err == null ? console.log("File ", filePathToTxt, " rewrited") : console.log("Something wrong with the ", filePathToTxt))

//Add text to existing file
fs.appendFile(filePathToTxt, "\nLets not rewrite but add something",
    err => err == null ? console.log("File ", filePathToTxt, " text added") : console.log("Something wrong with the ", filePathToTxt))

// READ FILE AS BUFFER
fs.readFile(filePathToTxt, (err, content) =>
    err == null ? console.log("Output from file: ", Buffer.from(content).toString()) : console.log("Something wrong with the ", filePathToTxt))

//UTF-8
fs.readFile(filePathToTxt, "utf-8",(err, content) =>
    err == null ? console.log("Output from file: ", content) : console.log("Something wrong with the ", filePathToTxt))

