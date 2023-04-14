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