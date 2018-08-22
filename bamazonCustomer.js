var mysql = require("mysql");
var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "root",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  createProduct();
});

var questions = [{
    message:"What would you like to buy?", 
    type:"input",
    name:"itemToBuy",
},
{
    message:"How much do you want to buy?",
    type:"input",
    name:"quantity"
}

]

inquirer.prompt(questions)
.then(answer =>{console.log(answer)});
