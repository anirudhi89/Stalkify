const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 3000;
const app = express()


// app.use() --> set root name
app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public/views' })
})


app.get('/getmusic', async (req, res) => {
    const sp_dc = req.query.spdc;
    // res.send({
    //   'apikey': sp_dc,
    // });
    res.send( await getActivityDriver(sp_dc));
})



app.listen(port, function() {
    console.log(`Running on http://localhost:${port}`)
})

// HELPER FUCNTIONS
const buddyList = require('./spotify.js')
async function getActivityDriver (spdcKey) {
    const spDcCookie = spdcKey

    const { accessToken } = await buddyList.getWebAccessToken(spDcCookie)
    const friendActivity = await buddyList.getFriendActivity(accessToken)
    // console.log(JSON.stringify(friendActivity, null, 2))
    return JSON.stringify(friendActivity, null, 2)
}
