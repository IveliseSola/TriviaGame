$(document).ready(function () {

    var questions = [{
        question: "Who was the only President to serve more than two terms?",
        answerList: ["Franklin D. Roosevelt", "Ulysses S. Grant", "Theodore Roosevelt", "George Washington"],
        info: "Franklin D. Roosevelt served as President for over 12 years, the longest time in office. He is the only president to serve more than two terms; he died shortly into his fourth term in 1945.",
        answer: 0,
        image: "assets/images/fdr.jpg"
    }, {
        question: "Who was the only President to serve two non-consecutive terms?",
        answerList: ["Woodrow Wilson", "Ronald Reagan", "Theodore Roosevelt", "Grover Cleveland"],
        info: "Grover Cleveland served two non-consecutive terms and is counted chronologically as both the twenty-second and the twenty-fourth president",
        answer: 3,
        image: "assets/images/gc.jpg"
    }, {
        question: "Who was the oldest elected President?",
        answerList: ["James Buchanan", "Donald Trump", "Ronald Reagan", "Dwight D. Einserhower"],
        info: "Donald Trump was 70 years and 7 months old when he was inaugurated on January 20, 2017.",
        answer: 1,
        image: "assets/images/dt.jpg"
    }, {
        question: "Who was the first President to live in the White House?",
        answerList: ["Thomas Jefferson", "John Adams", "George Washington", "Andrew Jackson"],
        info: "On Saturday, November 1, 1800, John Adams became the first president to take residence in the White House.",
        answer: 1,
        image: "assets/images/ja.jpg"
    }, {
        question: "Who was the first President born outside the contiguous United States?",
        answerList: ["William Howard Taft", "Benjamin Harrison", "Barack Obama", "Franklin Pierce"],
        info: "Barack Obama was born in Honolulu, Hawaii, to Stanley Ann Dunham, an American of predominantly English descent from Wichita, Kansas, and Barack Obama, Sr., a Luo from Nyang’oma Kogelo, Nyanza Province, Kenya Colony. Obama is the first President to have been born in Hawaii.",
        answer: 2,
        image: "assets/images/bo.jpg"
    }, {
        question: "Who was the first President to appear on TV?",
        answerList: ["Franklin D. Roosevelt", "Harry S. Truman", "John F. Kennedy", "Dwight D. Einserhower"],
        info: "The first President to appear on black and white television was Franklin D. Roosevelt on April 30, 1939 at the opening ceremonies for the World's Fair.",
        answer: 0,
        image: "assets/images/fdr.jpg"
    }, {
        question: "Who is the only President to resign from office?",
        answerList: ["Fandrew Johnson", "Bill Clinton", "Richard Nixon", "Franklin Pierce"],
        info: "Richard Nixon was the 37th President and 36th Vice President of the United States. Nixon was the only President to resign the office.",
        answer: 2,
        image: "assets/images/rn.jpg"
    }, {
        question: "Who awarded Rosa Parks the Presidential Medal of Freedom?",
        answerList: ["Lyndon Johnson", "Jimmy Carter", "Barack Obama", "Bill Clinton"],
        info: "On September 9, 1996, Rosa Parks was presented, by President Bill Clinton, with the Presidential Medal of Freedom. This is the highest honor that can be bestowed upon a civilian by the United States Government.",
        answer: 3,
        image: "assets/images/bc.jpg"
    }, {
        question: "Which President was the first to use an armored limousine, and who 'donated' it for the President's use?",
        answerList: ["Harry Truman; from Howard Hughes ", "Woodrow Wilson; from Henry Ford", "Franklin Roosevelt; from Al Capone", "Dwight Eisenhower; from Wiston Churchill"],
        info: "Secret Service needed a car to drive Roosevelt to Congress to make his speech on Pearl Harbor the day after the attack. Luckily the Treasury Dept. had impounded Capone's armored car years earlier",
        answer: 2,
        image: "assets/images/fdr.jpg"
    }, {
        question: "Who was the first President to be impeached?",
        answerList: ["Bill Clinton", "Andrew Johnson", "Donald Trump", "Richard Nixon"],
        info: "Johnson was impeached on February 24, 1868 in the U.S. House of Representatives on eleven articles of impeachment detailing his 'high crimes and misdemeanors', in accordance with Article Two of the United States Constitution.",
        answer: 1,
        image: "assets/images/aj.jpg"
    }];

    var playerChoice;
    var time;
    var correctAnswer = 0;
    var incorrectAnswer = 0;
    var unanswered = 0;
    var anwsered;
    var currentQuestion = 0;
    var messages = {
        correct: "Yes, that's right!",
        incorrect: "No, that's not it.",
        endTime: "Out of time!",
        finished: "Alright! Let's see how well you did."
    }

    $(".trivia").hide();
    $(".answer-section").hide();

    $("#start").on("click", function () {
        $(".welcome-section").hide();
        trivia();
        
    });

    function trivia() {
        $(".trivia").show();
        $(".final-message").empty();
        $(".correct-answers").empty();
        $(".incorrect-answers").empty();
        $(".unanswered").empty();
        currentQuestion = 0;
        correctAnswer = 0;
        incorrectAnswer = 0;
        unanswered = 0;
        showTriviaQuestion();
    }

    function showTriviaQuestion() {
        $(".answer-section").hide();
        $(".trivia").show();
        $(".message").empty();
        $(".info").empty();
        $(".image").empty();
        $(".current-question").html(" <h3> Question # " + (currentQuestion + 1) + " / " + questions.length + "</h3>");
        $(".question").html("<h2>" + questions[currentQuestion].question + "</h2>");

        for (var i = 0; i < 4; i++) {
            var options = $("<div>");
            options.text(questions[currentQuestion].answerList[i]);
            //options.attr({ "data-index": i });
            options.attr("data-index", i);
            options.addClass("choice");
            $(".options-list").append(options);
        }
        countdown();

        $(".choice").on("click", function () {
            playerChoice = $(this).data('index');
            clearInterval(time);
            answerSection();
        })
    }

    function countdown() {
        seconds = 15;
        $(".time-left").html("<h3>Time Remaining: " + seconds + "</h3>");
        answered = true;
        time = setInterval(showCountdown, 1000);
    }

    function showCountdown() {
        seconds--;
        $(".time-left").html("<h3>Time Remaining: " + seconds + "</h3>");
        if (seconds < 1) {
            clearInterval(time);
            answered = false;
            answerSection();
        }
    }

    function answerSection() {
        $(".trivia").hide();
        $(".answer-section").show();
        $(".current-question").empty();
        $(".choice").empty();
        $(".question").empty();

        var rightAnswerText = questions[currentQuestion].answerList[questions[currentQuestion].answer];
        var rightAnswerIndex = questions[currentQuestion].answer;
        var fact = questions[currentQuestion].info;

        if ((playerChoice == rightAnswerIndex) && (answered == true)) {
            correctAnswer++;
            $(".message").html(messages.correct);
            $(".info").html(" <br> <br> " + fact);
            $(".image").append('<img src="' + questions[currentQuestion].image + '" style="height:200px;"/>');
        } else if ((playerChoice != rightAnswerIndex) && (answered == true)) {
            incorrectAnswer++;
            $(".message").html(messages.incorrect);
            $(".info").html("The correct answer was: " + rightAnswerText + "<br> <br>" + fact);
            $(".image").append('<img src="' + questions[currentQuestion].image + '" style="height:200px;"/>');
        } else {
            unanswered++;
            $(".message").html(messages.endTime);
            $(".info").html("The correct answer was: " + rightAnswerText + "<br> <br>" + fact);
            $(".image").append('<img src="' + questions[currentQuestion].image + '" style="height:200px;"/>');
            answered = true;
        }

        if (currentQuestion == (questions.length - 1)) {
            setTimeout(scoreboard, 5000)
        } else {
            currentQuestion++;
            setTimeout(showTriviaQuestion, 6000);
        }
    }

    function scoreboard() {
        $(".time-left").empty();
        $(".message").empty();
        $(".info").empty();
        $(".image").empty();

        $(".final-message").html(messages.finished);
        $(".correct-answers").html("Correct Answers: " + correctAnswer);
        $(".incorrect-answers").html("Incorrect Answers: " + incorrectAnswer);
        $(".unanswered").html("Unanswered: " + unanswered);
        $(".start-over").addClass("reset");
        $(".start-over").show();
        $(".start-over").html("Start Over");
    }

    $(".start-over").on("click", function () {
        $(this).hide();
        trivia();
    });

});