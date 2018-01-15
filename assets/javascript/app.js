$(document).ready(function () {

var questions = [{
	question: "Who was the only President to serve more than two terms?",
    answerList: ["Franklin D. Roosevelt", "Ulysses S. Grant", "Theodore Roosevelt", "George Washington"],
    info: "Franklin D. Roosevelt served as President for over 12 years, the longest time in office. He is the only president to serve more than two terms; he died shortly into his fourth term in 1945.",
    answer: 0,
    image:"assets/images/fdr.jpg"
},{
	question: "Who was the only President to serve two non-consecutive terms?",
    answerList: ["Woodrow Wilson", "Ronald Reagan", "Theodore Roosevelt", "Grover Cleveland"],
    info:"Grover Cleveland served two non-consecutive terms and is counted chronologically as both the twenty-second and the twenty-fourth president",
	answer: 3
},{
	question: "Who was the oldest elected President?",
    answerList: ["James Buchanan","Donald Trump", "Ronald Reagan", "Dwight D. Einserhower"],
    info:"Donald Trump was 70 years and 7 months old when he was inaugurated on January 20, 2017.",
	answer: 1
},{
	question: "Who was the first President to live in the White House?",
    answerList: ["Thomas Jefferson","John Adams", "George Washington", "Andrew Jackson"],
    info:"On Saturday, November 1, 1800, John Adams became the first president to take residence in the White House.",
	answer: 1
},{
	question: "Who was the first President born outside the contiguous United States?",
    answerList: ["William Howard Taft","Benjamin Harrison", "Barack Obama", "Franklin Pierce"],
    info:"Barack Obama was born in Honolulu, Hawaii, to Stanley Ann Dunham, an American of predominantly English descent from Wichita, Kansas, and Barack Obama, Sr., a Luo from Nyang’oma Kogelo, Nyanza Province, Kenya Colony. Obama is the first President to have been born in Hawaii.",
	answer: 2
},{
	question: "Who was the first President to appear on TV?",
    answerList: ["Franklin D. Roosevelt","Harry S. Truman", "John F. Kennedy", "Dwight D. Einserhower"],
    info:"The first President to appear on black and white television was Franklin D. Roosevelt on April 30, 1939 at the opening ceremonies for the World's Fair.",
	answer: 0
},{
	question: "Who is the only President to resign from office?",
    answerList: ["Fandrew Johnson","Bill Clinton", "Richard Nixon", "Franklin Pierce"],
    info:"Richard Nixon was the 37th President and 36th Vice President of the United States. Nixon was the only President to resign the office.",
	answer: 2
},{
	question: "Who awarded Rosa Parks the Presidential Medal of Freedom?",
    answerList: ["Lyndon Johnson","Jimmy Carter", "Barack Obama", "Bill Clinton"],
    info:"On September 9, 1996, Rosa Parks was presented, by President Bill Clinton, with the Presidential Medal of Freedom. This is the highest honor that can be bestowed upon a civilian by the United States Government.",
	answer: 3
},{
	question: "Which President was the first to use an armored limousine, and who 'donated' it for the President's use?",
    answerList: ["Harry Truman; from Howard Hughes ","Woodrow Wilson; from Henry Ford", "Franklin Roosevelt; from Al Capone", "Dwight Eisenhower; from Wiston Churchill"],
    info:"Secret Service needed a car to drive Roosevelt to Congress to make his speech on Pearl Harbor the day after the attack. Luckily the Treasury Dept. had impounded Capone's armored car years earlier",
	answer: 2
},{
	question: "Who was the first President to be impeached?",
    answerList: ["Bill Clinton", "Andrew Johnson", "Donald Trump", "Richard Nixon"],
    info:"Johnson was impeached on February 24, 1868 in the U.S. House of Representatives on eleven articles of impeachment detailing his 'high crimes and misdemeanors', in accordance with Article Two of the United States Constitution.",
	answer: 1
}];

var selection;
var time;
var correctAnswer = 0;
var incorrectAnswer = 0;
var unanswered = 0;
var currentQuestion = 0;
var messages = {
	correct: "Yes, that's right!",
	incorrect: "No, that's not it.",
	endTime: "Out of time!",
	finished: "Alright! Let's see how well you did."
}


$("#start").on("click", function () {
    $(".welcome-page").hide();
    trivia();
});

function trivia(){
    $('#message').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
    unanswered = 0;
	triviaQuestion();
}

function triviaQuestion(){
    $('.message').empty();
	$('.info').empty();
	$(".currentQuestion").html(" <h2> Question # " + (currentQuestion+1) + " / " + questions.length + "</h2>");

	for(var i = 0; i < 4; i++){
		var options = $("<div>");
		options.text(questions[currentQuestion].answerList[i]);
		options.attr({"data-index": i });
		options.addClass("choice");
		$(".options-List").append(options);
	}
	countdown();
	//clicking an answer will pause the time and setup answerPage
	$(".choice").on('click',function(){
		selection = $(this).data('index');
		clearInterval(time);
		answerPage();
    })
}

});