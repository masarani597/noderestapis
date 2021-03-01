const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.json({message :'Hello World'})
});

app.get('/users', (req, res) => {
    res.json({message :'Hello World: This is user route'})
})



let server = app.listen(port, ()=> {
    console.log(`Example app listening at ${port}`)
})

function stop() {
    server.close();
}

module.exports = server;
module.exports.stop = stop;