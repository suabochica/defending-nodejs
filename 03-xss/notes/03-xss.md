# Cross-Site Scripting (XSS) Attacks

> In this article, you will learn about Cross-Site Scripting (XSS) and how prevent them.

Cross-Site Scripting (XSS) is a common web application vulnerability that occurs when a web application renders unsanitized input to the front end of an application. An attacker takes advantage of this vulnerability by injecting malicious code, generally in the form of JavaScript, through the browser. They can trick a benign website into executing this code for other users. This enables an attacker to steal information from another user’s client-side data, redirect a user to malicious pages, or take control of their browser!

We will walk through different types of such attacks: Stored XSS, Reflected XSS, and DOM-Based XSS.

## Stored XSS

A stored XSS vulnerabiliy occurs when a web server stores and unsanitized user inpyt and displas it to other users. In a worst-case scenario, an attacker can input malicious script and store it to the vulnarable website, making the script for all other users on that page.

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
