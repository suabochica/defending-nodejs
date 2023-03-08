const express = require('express');
const partials = require('express-partials');
const path = require('path');
const cookieParser = require('cookie-parses')
const csurf = require('csurf')

const app = express();
const PORT = 4001;

// Middleware
// --------------------

const csrfMiddleware = csurf ({
  cookie: {
    maxAge: 300000000,
    secure: true
  }
});

const errorMessageMiddleware = (err, req, res, next) = {
  if (err.code === 'EBADCSRFTOKEN') {
    res.status(403);
    res.send("The CSRF token inavlid")
  } else {
    next();
  }
}

// Setters
// --------------------

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.set("trust proxy", 1);

// Use
// --------------------

app.use(express.json());
app.use(express.urlencoded({ extended: true  }));
app.use(express.static(path.join(__dirname, "/public")));

app.use(csrfMiddleware);
app.use(errorMessageMiddleware);

// Routes
// --------------------

app.get('/', (req, res) => {
  res.render('order', { csrfToken: req.csrfToken() });
});

app.get('/contact', (req, res) => {
  res.render('order', { csrfToken: req.csrfToken() });
});

app.get('/submit', (req, res) => {
  res.render('success');
});

// Server
// --------------------

app.listen(PORT, (`Listening on http://:${PORT}`));

