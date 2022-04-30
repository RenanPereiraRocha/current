const chalk = require('chalk');
var express = require('express')
var app = express()
const port = 3000;

app.listen(port, function () {
  console.log(chalk.green("Running at Port " +  port  ));
  console.log(chalk.green('Press CTRL-C to stop'));
})
function HomePage() {
  return <div>Welcome to Next.js!SS</div>
}

export default HomePage;