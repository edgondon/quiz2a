

STORE = [

    {
        question: 'Who was the first Roman Emperor?',
        questionOptions: ['a.) Julius Caesar', 'b.) Mark Antony', 'c.) Augustus', 'd.) Cleopatra'],
        correct: 'c',
        corrdescript: 'c.) Augustus'
    },

    {
        question: 'Who was the longest serving Roman Emperor?',
        questionOptions: ['a.) Augustus', 'b.) Trajan', 'c.) Agrippa', 'd.) Constantine'],
        correct: 'a',
        corrdescript: 'a.) Augustus'
    },

    {
        question: 'Who was the first Christian Roman Emperor?',
        questionOptions: ['a.) Maxentius', 'b.) Licinius I', 'c.) Vedius', 'd.) Constantine'],
        correct: 'd',
        corrdescript: 'd.) Constantine'
    },

    {
        question: 'Which Emperor Initiated the Construction of the Colosseum?',
        questionOptions: ['a.) Titus', 'b.) Domitian', 'c.) Vespasian', 'd.) Toto'],
        correct: 'c',
        corrdescript: 'c.) Vespasian'
    },

    {
        question: 'Which Emperor began the Conquest of Britain?',
        questionOptions: ['a.) Domitian', 'b.) Claudius', 'c.) Maxentius', 'd.) Agrippa'],
        correct: 'b',
        corrdescript: 'c.) Claudius'
    },

    {
        question: 'Which Roman General defeated the Carthaginians in the First Punic War?',
        questionOptions: ['a.) Marcus Vipsanius', 'b.) Gnaeus Julius Agricola', 'c.) Diocletas', 'd.) Scipio Africanus'],
        correct: 'd',
        corrdescript: 'd.) Scipio Africanus'
    },

    {
        question: 'Which modern day nation did the Roman General Gnaeus Julius Agricola Conquer?',
        questionOptions: ['a.) Norway', 'b.) South Africa', 'c.) France', 'd.) Britain'],
        correct: 'd',
        corrdescript: 'd.) Britain'
    },

    {
        question: 'Nero Claudius Drusus was the First Roman General to mount successful campaigns east of what River?',
        questionOptions: ['a.) Rhine', 'b.) Danube', 'c.) Nile', 'd.) Medes'],
        correct: 'a',
        corrdescript: 'a.) Rhine'
    },

    {
        question: 'In what Manner did the Roman General Mark Antony Die?',
        questionOptions: ['a.) Old Age', 'b.) Assassination', 'c.) Suicide', 'd.) Poison'],
        correct: 'c',
        corrdescript: 'c.) Suicide'
    },

    {
        question: 'In what Manner did the Roman General Nero Claudius Drusus Die?',
        questionOptions: ['a.) Assassination', 'b.) Falling from his horse', 'c.) Slipping on a Wet Floor', 'd.) Cuts from his Wife\'s Dagger'],
        correct: 'b',
        corrdescript: 'b.) Falling from his horse'
    },



];

let currentQuestion = 0;


let qey = ["one"];
let tally = [];
let k = [];


function i() {
    return k.length;
};



function query() {
    return qey.length;
};

function score() {
    return tally.length;
};




let y = 2;

// goes through the questions


$(document).ready(function () {

    console.log('ready');
    $('.question-page').hide();
    $('.status-score').hide();
    $('.correct-feedback-page').hide();
    $('.incorrect-feedback-page').hide();
    $('.final-page').hide();




    $('.button-startq').click(function () { //begin quiz and questions
        $('.intro').hide();
        $('.question-page').show();
        $('.status-score').show();


    });




    function generateQuestion(currentQuestion) {
        console.log(currentQuestion, `current question`);
        console.log(STORE[currentQuestion].question);
        $(".questionQh").text(STORE[currentQuestion].question);
        $(".answerA").text(STORE[currentQuestion].questionOptions[0]);
        $(".answerB").text(STORE[currentQuestion].questionOptions[1]);
        $(".answerC").text(STORE[currentQuestion].questionOptions[2]);
        $(".answerD").text(STORE[currentQuestion].questionOptions[3]);
        // console.log(`generateQuestion ran`);
        $("p.question-status").text(`Question ${query()} out of 10`);
        $("p.current-score").text(`Score is ${score()} out of 10`);

    };




    function selectAnswer() {
        $("#gotcha").on('click', 'label', function (event) {
            // console.log(`ANSWER IS SELECTED`);
            let ya = $('input[name=option]:checked', '#gotcha').val();
            // console.log(ya);
            if (ya === (STORE[currentQuestion].correct)) {
                correct();

            }
            else {
                wrong();
            };
        });



    };


    $('.question-page').on('click', '.select-answer-right', function () {
        $('.correct-feedback-page').show();
        $('.question-page').hide();
        $('.status-score').hide();
        rr();


    });

    function rr() {
        tally.push("one");
        k.push("one");
        qey.push("one");
    };

    function ww() {
        k.push("one");
        qey.push("one");
    };



    $('.question-page').on('click', '.select-answer-wrong', function () {
        $("h2.pressyWrong").html(`Incorrect Answer. The answer is ${STORE[currentQuestion].corrdescript}`);


        $('.incorrect-feedback-page').show();

        $('.question-page').hide();
        $('.status-score').hide();
        ww();




    });








    function correct() {
        $("div.two").html(`
        <button type='button' class="select-answer-right" role="selected-answer">Submit Answer</button>
        `);
        let y = 1;
        // console.log('correct');
        // console.log(y);

    };

    function wrong() {
        $("div.two").html(`
        <button type='button' class="select-answer-wrong" role="selected-answer">Submit Answer</button>
        `);
        let y = 0;
        // console.log('not correct');
        // console.log(y);
    };



    $('.correct-feedback-page').on('click', '.buttonNextr', function () {
        console.log(`Question # ${currentQuestion + 1}`);
        console.log(`Score is ${score()}`);
        console.log(`Store place is ${currentQuestion}`);
        $('input[name="option"]').prop('checked', false);


        if (currentQuestion < 9) {
            currentQuestion++;
            generateQuestion(currentQuestion);
            $('.correct-feedback-page').hide();
            $('.question-page').show();
            $('.status-score').show();


        }

        else {
            $('.final-page').show();
            $('.finally').html(`${score()} out of 10`);
            $('.correct-feedback-page').hide();
        };

    });

    $('.incorrect-feedback-page').on('click', '.buttonNextw', function () {
        console.log(`Question # ${currentQuestion + 1}`);
        console.log(`Score is ${score()}`);
        console.log(`Store place is ${currentQuestion}`);
        $('input[name="option"]').prop('checked', false);


        if (currentQuestion < 9) {
            currentQuestion++;
            generateQuestion(currentQuestion);
            $('.incorrect-feedback-page').hide();
            $('.question-page').show();
            $('.status-score').show();


        }

        else {
            $('.final-page').show();
            $('.finally').html(`${score()} out of 10`);
            $('.incorrect-feedback-page').hide();
        };

    });

    $('.final-page').on('click', '.buttonend', function () {
        $("h2.pressyWrong").html(`Incorrect Answer. The answer is ${STORE[currentQuestion].corrdescript}`);
        location.reload();





    });


    function makeQuiz() {
        generateQuestion(currentQuestion);
        selectAnswer();
    }

    $(makeQuiz);

});