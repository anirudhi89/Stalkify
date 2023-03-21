const express = require('express')
const port = process.env.PORT || 3000;
const app = express()


// app.use() --> set root name


app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public/views' })
})




app.listen(port, function() {
    console.log(`running on local host at port ${port}`)
})