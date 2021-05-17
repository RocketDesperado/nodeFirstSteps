const http = require("http")
const fs = require("fs")
const path = require("path")


const server = http.createServer((req, res) => {

    // if(req.url === "/") {
    //     fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
    //         res.writeHead(200, {
    //             "Content-Type": "text/html"
    //         })
    //         res.end(data)
    //     })
    // } else if (req.url === "/contact") {
    //     fs.readFile(path.join(__dirname, "public", "contact.html"), (err, data) => {
    //         res.writeHead(200, {
    //             "Content-Type": "text/html"
    //         })
    //         res.end(data)
    //     })
    // }

    let contentType = "text/html"

    let filePath = path.join(__dirname, "public", req.url == "/" ? "index.html" : req.url)
    const ext = path.extname(filePath)

    switch (ext) {
        case ".css" :
            contentType = "text/css"
            break
        case ".js" :
            contentType = "text/js"
            break
        case ".html" :
            break
        default:
            filePath = filePath + ".html"
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            fs.readFile(path.join(__dirname, "public", "error.html"), (err1, data1) => {
                if (err1) {
                    res.writeHead(500, "Bad boi")
                    res.end("Error")
                } else {
                    res.writeHead(200, {
                        "Content-Type": contentType
                    })
                    // console.log(path.join(__dirname, "public", "error.html"))
                    res.end(data1)
                }
            })
        } else {
            res.writeHead(200, {
                "Content-Type": contentType
            })
            res.end(data)
        }
    })
})

server.listen(3000, () => {
    console.log("Server has started")
})


//const chalk = require('chalk')
//const dataJs = require('./data')
//console.log(chalk.blue ('Hello NodeJS and Sergey') +"\n" +chalk.red(dataJs))