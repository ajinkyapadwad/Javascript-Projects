// Simple console quiz

var Questions = [];

Questions[1] = "Is JavaScript object oriented ?";
Questions[2] = "Python is scripting language only."
Questions[3] = "Is JavaScript a class-A language ?"

function Question(number, option1, option2, option3, target)
{	

	this.Question = Questions[number];

	this.option3 = option3;
	this.option2 = option2;
	this.option1 = option1;

	this.target = target;

	console.log(Question);
	
	console.log("1. " + this.option1);
	console.log("1. " + this.option1);
	console.log("1. " + this.option1);


	this.answer = prompt(Question);
	console.log("Your answer: " + answer);
	console.log("Correct answer: "+ target);

	if(target===answer)
	{
		console.log("CORRECT !");
		score++;
	}

}

var Question1 = new Question(1);
var Question2 = new Question(2);
var Question3 = new Question(3)

