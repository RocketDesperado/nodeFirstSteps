const EventEmmitter = require('events')

const emmiter = new EventEmmitter()

emmiter.on("anything", args => console.log(args))

emmiter.emit("anything", {a: 2})