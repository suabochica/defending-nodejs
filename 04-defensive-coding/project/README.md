# Trey Coding: Defensive Coding in JavaScript

Congrats! You were just hired as a junior web developer at Trey Corp! Trey Corp has been around for several decades. Over the years, developers rarely had the opportunity to maintain their code. That’s where you come in - your first assignment at Trey Corp is to update some of the legacy code.

The code you’ve been tasked to update is a Node.js express server that hosts web pages consisting of various utilities. Senior devs want you to find and fix any vulnerabilities you come across to improve overall security. Good luck!

## Tasks

### Surveying the Code

1. Each utility in this project is powered by its own JavaScript file. Take a look at each file.

- Main menu: main.js
- Calculator: calculator.js
- Contact form: formValidator.js
- Linux emulator: linux.js
- Regex evaluator: regex.js

### Static Code Analysis

2. Use ESLint to analyze the code and find any potential issues.

3. Run eslint --fix . to automatically fix most of the issues found. We will manually fix the remaining issues in the code!

### Strict Mode

4. In this project, JavaScript Strict mode is already enabled by default for all JavaScript files executed by Node.js.

Run npm start to see which errors have been triggered. in strict mode and fix them. Once all issues are resolved, no strict mode errors should occur and the Node.js server should launch.

5. Run the app by running npm start in the terminal. The front end of the main menu has a drop-down enabling you to choose a tool. Choosing “Other” in the drop-down allows you to load any file on the file system by typing its path.

### Fixing file system vulnerability in the main menu

6. In main.js, the user input combined with fs is dangerous. Enforce the file path to include the current working directory using the path module.

### Fixing vulnerabilities in the Calculator

7. The calculator features uses eval to evaluate JavaScript expressions and display the result. Not great! Use the safe-eval npm package to replace eval in calculator.js.

Note: Remember to research new packages you use to see if they are exposing your application to vulnerabilities. safe-eval is safer than eval, but even it isn’t 100% safe. Always stop and think: is there a safer and better way to implement this feature?

### Fixing vulnerabilities in the Linux Emulator

8. The Linux Emulator utility uses the exec method of the child_process module, which isn’t great. Replace the exec instances with the execFile method instead.

### Fixing vulnerabilities in the Contact Form

9. The Contact Form uses some risky regular expressions to validate user input.

Thankfully, one of the senior devs has provided a Regex Evaluator tool that returns whether a regular expression is risky. Use the Regex Evaluator to verify whether each regular expression defined in formValidator.js is safe.

10. Replace all unsafe regular expressions you found with the regular expression `.*.` A senior developer will later replace this with a better alternative.

Congrats! Your tasks for this project are complete.

