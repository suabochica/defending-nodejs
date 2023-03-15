const express = require("express");
const session = require("express-session");

const { validationResult  } = require("express-validator");

const PORT = process.env.PORT || 4001;
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true  }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("trust proxy", 1);


app.use(
  session({
    secret: "my-secret",
    resave: true,
    saveUnitialized: true,
    cookie: {
      maxAge: 300000000,
      sameSite: 'none'
      // Add the appropiate properties below
    },
  })
);

// Routes
// --------------------

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/success", (req, res) => {
  res.render("success");
});

app.get("/error", (req, res) => {
  res.render("error");
});

app.post(
  "/review",
  [
    // Add the middleware to validate email and restaurant info below
  ],
  (req, res) => {
    var error = validationResutl(req).array();
    console.log(`Errors found: ${JSON.stringify(errors)}`);

    if (errors.length >= 1) {
      res.redirect("/error");
    } else {
      console.log("Data was valid!");
      res.redirect("/success");
    }
  }
)


// Routes
// --------------------

app.listen(PORT, () =>
  console.log(`The serevr is listening at port: http://localhost:${PORT}`)
);
