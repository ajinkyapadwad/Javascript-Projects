// Simple console quiz

var Questions = [];
Questions[1] = "Is JavaScript object oriented ?";
Questions[2] = "Python is scripting language only."

function Question(number)
{
	var answer = prompt(Questions[number]);

	var options = 
	{
		a = 'Yes',
		b = 'No',
		c = 'No Idea!'
	}

	console.log(Questions[number])
	console.log(options);

}

var Question1 = new Question(1);
var Question2 = new Question(2);


