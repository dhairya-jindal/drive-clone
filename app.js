const express = require("express")
const userRouter = require("./routes/user.routes")
const dotenv = require("dotenv")
const connectToDB = require("./config/db")
const cookieParser = require("cookie-parser")

dotenv.config()

const app = express()
const indexRouter = require('./routes/index.routes')
const uploadRouter = require("./routes/upload.routes")   // ✅ NEW

app.set("view engine","ejs")
app.use(cookieParser())
connectToDB()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', indexRouter)
app.use("/user", userRouter)
app.use("/", uploadRouter)   

app.listen(3000, ()=>{
    console.log('Server running on port 3000')
})
