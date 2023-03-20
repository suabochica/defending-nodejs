# Quiz: Defending Node.js Applications

What can linters like `ESLint` do?

a. Warn of potential security flaws.
b. Find syntax errors and bugs.
c. All the choices listed.
d. Automatically fix programmin patterns.

Which of the following is the correct syntax for enforcing strict mode in JavaScript?

a. `"use strict";`
b. `use strict;`
c. `"strict mode on";`
d. `use "strict";`

Implement the statement `exec(`ping -c 1 ${ip}`)` using the `execFile()` method.

```
execFile(___, [___, ___])
```

What causes a regular expression in JavaScript to become unresponsive and thus potentially be used to trigger a Regular expression Denial of Service (ReDoS)?

a. The lengt of the input string.
b. The location of the unmatched character in an input string.
c. The length of a regular exprssio.
d. Regular expressions that perform exponentially worse on certain input strings than others.

What Node.js module can lead to both path traversal and file inclusion vulnerabilities?

a. `process`
b. `child_process`
c. `fs`
d. `console`

How does the npm package safe-eval mitigate the risk of using eval()?

a. `safe-eval` check whether the JavaScript code is safe to execute.
b. `safe-eval` prevents the Node process from crashing.
c. `safe-eval` executes all code while preventing malicius code from being executed.
d. `safe-eval` limits the methods and properties available to th code being executed.

How can we ensure bad actors cannot exploit the fs module vulnerabilities when using user input as an argument?

a. Define a path restrict `fs`'s file traversal scope.
b. Change the permissions of the files and directories you don't want the attacker to access.
c. Use `path.join(user_input)` as the argument instead.
d. Use the asynchronous version of `fs` methods.

Which of the following is NOT true about the functions exec() and execFile()?

a. The command string `"ls -al"` is a valid argumen for both functions.
b. `exec()` is used to execute commands while `execFile()` is used to execute files.
c. `exec()` spawns a shell for execution, whereas `execFile()` does not.

Which of the following functions does NOT use eval() in their implementations?

a. `new Function()`
b. `setInterval()`
c. `setTimeout()`
d. `safeEval()`

Which of the following code statements will execute properly in JavaScript’s strict mode?

a. `royalty = "Prince";`
b. `const eval = "2+2";`
c. `delete foobar;`
d. `let name = "Sonia"`

Which of the following are built-in JS functions/modules that can easily be used as vectors of attack by a malicious user input?

a. `lint()`, `strict()`
b. `eval()`, `fs`, `exec()`
c. `execFile()`, `console.time()`
d. `regex()`, `fs()`

