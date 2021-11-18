require('dotenv').config()
const express = require('express')
const app = express()
const ejsLayouts = require('express-ejs-layouts')
const session = require('express-session')
const passport = require('./config/ppConfig')
const flash = require('connect-flash')
const isLoggedIn = require('./middleware/isLoggedIn')
const db = require('./models')
//adding method override which allows you to override methods with a query parameter
const methodOverride = require('method-override')

// views (ejs and layouts) set up
app.set('view engine', 'ejs')
app.use(ejsLayouts)

// body parser middelware
app.use(express.urlencoded({extended:false}))
// app.use(bodyParser.json())

// session middleware
app.use(session({
    secret: process.env.SUPER_SECRET_SECRET,
    resave: false,
    saveUninitialized: true
}))

// passport middleware
app.use(passport.initialize())
app.use(passport.session())

// flash middleware (must go AFTER session middleware)
app.use(flash())

// custom middleware
app.use((req, res, next) => {
    // before every route, attach the flash messages and current user to res.locals
    res.locals.alerts = req.flash();
    res.locals.currentUser = req.user;
    next()
})

//adds some logging to each request
// app.use(require('morgan')('dev'))

// controllers middleware 
app.use('/auth', require('./controllers/auth'))
//added to troubleshoot login redirect
app.use('/main', require('./controllers/main'))
//controller for add place view
app.use('/addplace', require('./controllers/main'))
//controller for comment view
app.use('/comment', require('./controllers/comment'))
//controller for profile view
app.use('/profile', require('./controllers/profile'))


// home route
app.get('/', (req, res)=>{
    res.render('home')
})


app.listen(3000, ()=>{
    console.log('App running')
})