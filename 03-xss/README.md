# Cross-Site Scripting (XSS) Attacks

> In this article, you will learn about Cross-Site Scripting (XSS) and how prevent them.

Cross-Site Scripting (XSS) is a common web application vulnerability that occurs when a web application renders unsanitized input to the front end of an application. An attacker takes advantage of this vulnerability by injecting malicious code, generally in the form of JavaScript, through the browser. They can trick a benign website into executing this code for other users. This enables an attacker to steal information from another user’s client-side data, redirect a user to malicious pages, or take control of their browser!

We will walk through different types of such attacks: Stored XSS, Reflected XSS, and DOM-Based XSS.

## Stored XSS

A stored XSS vulnerability occurs when a web server stores and unsanitized user input and display it to other users. In a worst-case scenario, an attacker can input malicious script and store it to the vulnerable website, making the script for all other users on that page.


**TODO: add image stored**

Let’s walk through the example in the image above.

Let’s say a website has a poorly designed comment function where the backend does not sanitize user comments. It may be possible for an attacker to add dangerous JavaScript to their comment. Now, any time another user loads the page and the server displays the comment with the bad code to the HTML, that user’s browser will execute the JavaScript code. This is an example of a Stored XSS attack.

This effect makes Stored XSS attacks some of the most serious XSS attacks.

## Reflected XSS

Reflected XSS occurs when a user’s input is immediately returned back to the user. This return may come in the form of an error message, a popup, or a search term. In these instances, the malicious code is never stored by the server. Rather, it exists as a value in the URL or request.

Despite the bad code not being stored in the database and executed by all victims’ browsers, the attacker can use Reflected XSS to target certain users, forcing them to execute the malicious script. Take a look at the example below where an attacker tricks a user into clicking a script-injected link, set up to steal that user’s credentials!

**TODO: add reflected xss image**

## DOM-Based XSS

The DOM, short for Document Object Model, is used to help scripts and the underlying webpage interact. When user input is interpreted by the DOM, an attacker is able to inject malicious code there. These types of vulnerabilities do not cause any changes in how the server responds. Rather, these attacks are completely client-side.

For example, a web page may use client-side Javascript to customize a welcome page, displaying their name based on a value in the URL. Depending on how the Javascript runs, a DOM-Based XSS attack may be able to replace the name value with a malicious script. If a victim loaded the page with the attacker’s code, the vulnerable webpage may execute the code!

**TODO: add DOM-based  xss image**

## Identifiying XSS Vulnerabilities

Let’s look at how we can uncover XSS vulnerabilities in a web application.

As with any vulnerability, it is important that we investigate any potential input areas. When looking at the application, consider all possible fields. Comments, usernames, custom settings, and parameters all provide great starting points.

Once we have identified a potential injection point, we can begin testing various inputs to create a proof-of-concept payload (POC). A POC payload will demonstrate that an issue exists, without causing damage. The most basic POC payload is shown below.

```html
<script> alert(1); </script>
```

If a web server is not properly sanitizing user input, this will return a pop-up box similar to the below image.

**TODO: add DOM-based  xss image**

If this payload does not work, that does not necessarily mean the system is secure. In fact, many systems will take a flawed approach to protection and block certain words. If a blocklist is in effect your request may be blocked, or your `<script>` tags could be removed. There are numerous other ways we can execute code, without ever using a `<script>` tag. Below are some potential workarounds that could be used by an attacker.

```html
<img src="X" onerror=alert(1);>
```

```html
<b onmouseover=alert(1);>click me!</b>
```

```html
<body onload=alert('test1')>
```

## Preventing XSS Vulnerabilities

Similar to SQL Injections, XSS is preventable with input sanitization and application-level firewalls

### Sanitization

Sanitization is the process of removing/replacing problematic characters with safe versions. Depending on the backend language, there may or may not be built-in functions to aid in this process.

However, if these functions do not exist, we can generally succeed in preventing XSS attacks by removing characters such as `<`, `>`, `"`, `=`, and potentially dangerous keywords.

Rather than remove characters, we can also replace them with HTML-encoded versions of the characters. This allows us to retain the characters, but remove their capacity to affect the page’s HTML.

For example, the `<` character would be converted to the “<” string. The browser will render this string as the “<” character, but it will not interpret it as actual HTML, preventing the attack.

It is important to note, however, that depending on how the data is used, this type of escaping may not be enough. It’s important to consider all potential avenues for an attack.

There are also JavaScript packages like **sanitize-html** that help sanitizer user inputs!

## Conclusion

Cross-site scripting attacks are some of the most common attacks on the web. Make sure that when you are building any web application that you employ techniques to counter the many clever ways attackers can exploit user input vulnerabilities. [OWASP has a great cheatsheet you can refer to](https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html).

This security should be at the foundation of how you write any web code!

## Review

XSS Attacks are still very common and it’s important to be aware of them so you don’t fall victim to one. We’ve looked at what can happen behind the scenes if an attacker successfully injects malicious code into a vulnerable site, but that’s not the only way to create an XSS attack. That’s why it’s important to never click suspicious links or submit private data into any unknown application!

Let’s break down what we’ve learned so far:

- How DOM-Based, Reflected, and Stored XSS attacks are different from each other and how they can be used to retrieve vulnerable data.

- How an attacker can inject malicious code into a vulnerable application using `<script>` tags and Javascript.

- How a user can be tricked into submitting their private information using cookies.

- How to use `express-validator` and its built-in methods in order to validate input data.

- Why it’s important to use data validation packages in order to sanitize data in an application to prevent malicious code injection.

- How to use secure cookies in `express-session` to prevent an XSS attack.

- How to use `helmet` to secure HTTP headers and protect yourself from numerous types of attacks, including XSS attacks.

When creating an application, there is no silver bullet. It’s important to consider all possible ways an attacker might inject malicious code into your app, and take the appropriate measures to protect yourself and your users.
