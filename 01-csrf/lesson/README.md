# Codey's Confectionery: Preventing Cross-Site Request Forgery (CSRF) Attacks

A bakery owner uses a website to let customers make orders on desserts. Recently there have been kids pranking the website and taking advantage of CSRF’s, tricking adults into ordering big batches.

Fix the CSRF vulnerabilities on the Ordering form and the Contact form.

    Note: The way that the workspace interacts with stored cookies may be affected by your browser’s security settings. Please try using Chrome or Firefox for best results. 

## Trying Out the Form!

Great work! The website now has secure forms that are protected by CSRF tokens. Throughout the project you practiced:

- Requiring csrf
- Configuring the csurf cookie
- Set up a middleware function
- Pass the CSRF token to the template
- Use the CSRF token inside a form

Restart the web server and then test out the form! Try opening a new terminal and using submitting a cURL request without a CSRF token:

```
curl -x POST http://localhost:4001/submit
```
