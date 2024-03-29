const express = require('express')
const path = require('path')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const fileUpload = require('express-fileupload')
const cors = require('cors')

const app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.use(logger('dev'))
app.use(cors())
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(cookieParser())
app.use(fileUpload())
app.use('/public', express.static(__dirname + '/public'))
app.use(express.static('public'))

app.post('/upload', (req, res, next) => {
  let uploadFile = req.files.file
  uploadFile.mv(
    `./public/IMG.jpg`,
    function (err) {
      if (err) {
        return res.status(500).send(err)
      }

      const spawn = require( 'child_process' ).spawnSync
      const vbs = spawn( 'cscript.exe', [ './public/ImageToPDF.vbs', 'one' ] )
      console.log( `status: ${vbs.status}` );

      res.json({
        file: `public/${req.files.file.name}`,
      })
    }
  )
})

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app