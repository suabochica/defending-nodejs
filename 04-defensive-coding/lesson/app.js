import http from "http";
import fs from "fs";
// Import the default export named "safeEval" from the "safe-eval" package below


const hostname = "localhost";
const port = process.env.PORT || 4001;

const server = http.createServer((req, res) => {
	const baseURL = "http://" + req.headers.host + "/";
	const reqUrl = new URL(req.url, baseURL);
	const cmd = reqUrl.searchParams.get("cmd");
	let content = "";

	if (cmd) {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html");
		try {
			content = eval(cmd);	// Dangerous function
		} catch (e) {
			content = fs.readFileSync("web_page.html", "utf8");
		}
		res.end("" + content);
	} else {
		res.statusCode = 200;
		res.setHeader("Content-Type", "text/html");
		try {
			content = fs.readFileSync("web_page.html", "utf8");
		} catch (e) {
			console.log("Error:", e.stack);
		}
		res.end(content);
	}
});

server.listen(port, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

