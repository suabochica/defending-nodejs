# Quiz

1. How does the csurf npm package respond by default in the case of an invalid or missing CSRF token in a user request?

a. It responds with an error message and shows the stack trace from the server.
b. It does nothing. The applications continues to function like normal.
c. The application asks the user to log in.
d. The application redirects to th default route.

2. Incorporate the CSRF token into the following HTML so that the token from the client is submitted automatically with the contents of the form.

```js
<form action="/submit" method="POST">
    <input type="___" name="___" value="<%= csrfToken %>" />
  <label for="body">Enter username: </label>
  <input id="body" name="username" type="text" />
  <input type="submit" value="Submit" />
</form>
```

`crsfToken`, `hidden`, `notVisible` `_csrf`, `visible`, `crsf`

3. When configuring `csurf` using `app.use()`, all `csurf` functions and values are available on all Express `get`, `post`, and `all` routes.

a. True.
b. False.

4. The npm package, `csurf`, protects Node.js / Express applications against CSRF attacks by validating the IP addresses attached to web requests.

a. False.
b. True.

5. Which of the following is NOT true about Cross-Site Request Forgery (CSRF) attacks?

a. They trick users into submitting malicious requests without them realizing.
b. The attacks exclusively use scripts to control session and change user information.
c. They make use of session-related information such as cookies and HTTP authentication.
d. They allow attackers to assume the session identity of the user.

6. Complete the following middleware function for an Express application with csurf npm package to create a custom error message, “The form was tampered with”, for invalid or missing CSRF tokens.

```js
app.use((err, req, res, next) => {
  if (err.___ === "EBADCSRFTOKEN") {
    res.status(403);
    res.send("___");
  } else {
    next();
  }
})
```

`code`, `the form was tempered with!`, `status`, `status_code`, `error`, `an error has ocurred`.

7. Configure the `csurf` npm package to have the following cookie options:

  - Set `maxAge` property to `500000000` seconds
  - Set `secure` attribute to `true`

Then set Express application to use the csurf middleware at the router level.

```js
const express = require('express');
const csurf = require('csurf');
const app = express();
const csrfMiddleware = csurf({

___: {
    ___: 500000000,

    ___: true
  }
});
app.use(___);
```

`cookie-parser`, `cookie`, `maxAge`, `secure`, `secureCookie`, `csfrMiddleware`, `nextExpiration`, `cookies`
