# Quiz: Defending Node.js Applications

What can linters like `ESLint` do?

1. Warn of potential security flaws.
2. Find syntax errors and bugs.
3. All the choices listed.
4. Automatically fix programming patterns.

Which of the following is the correct syntax for enforcing strict mode in JavaScript?

1. `"use strict";`
2. `use strict;`
3. `"strict mode on";`
4. `use "strict";`

Implement the statement `exec(`ping -c 1 ${ip}`)` using the `execFile()` method.

```
execFile(___, [___, ___])
```

What causes a regular expression in JavaScript to become unresponsive and thus potentially be used to trigger a Regular expression Denial of Service (ReDoS)?

1. The length of the input string.
2. The location of the unmatched character in an input string.
3. The length of a regular expression.
4. Regular expressions that perform exponentially worse on certain input strings than others.

What Node.js module can lead to both path traversal and file inclusion vulnerabilities?

1. `process`
2. `child_process`
3. `fs`
4. `console`

How does the npm package safe-eval mitigate the risk of using eval()?

1. `safe-eval` check whether the JavaScript code is safe to execute.
2. `safe-eval` prevents the Node process from crashing.
3. `safe-eval` executes all code while preventing malicius code from being executed.
4. `safe-eval` limits the methods and properties available to th code being executed.

How can we ensure bad actors cannot exploit the fs module vulnerabilities when using user input as an argument?

1. Define a path restrict `fs`'s file traversal scope.
2. Change the permissions of the files and directories you don't want the attacker to access.
3. Use `path.join(user_input)` as the argument instead.
4. Use the asynchronous version of `fs` methods.

Which of the following is NOT true about the functions exec() and execFile()?

1. The command string `"ls -al"` is a valid argumen for both functions.
2. `exec()` is used to execute commands while `execFile()` is used to execute files.
3. `exec()` spawns a shell for execution, whereas `execFile()` does not.

Which of the following functions does NOT use eval() in their implementations?

1. `new Function()`
2. `setInterval()`
3. `setTimeout()`
4. `safeEval()`

Which of the following code statements will execute properly in JavaScript’s strict mode?

1. `royalty = "Prince";`
2. `const eval = "2+2";`
3. `delete foobar;`
4. `let name = "Sonia"`

Which of the following are built-in JS functions/modules that can easily be used as vectors of attack by a malicious user input?

1. `lint()`, `strict()`
2. `eval()`, `fs`, `exec()`
3. `execFile()`, `console.time()`
4. `regex()`, `fs()`
