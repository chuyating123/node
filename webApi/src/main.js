
const {
    APP_PORT
} = require('./config/config.js')

const app=require('./app/index.js')

//监听端口
app.listen(APP_PORT, () => {
    console.log(`server is running${APP_PORT}`)
})