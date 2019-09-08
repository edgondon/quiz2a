
$(document).ready( function() {
    
    console.log('ready');
    $('.question-page').hide();
    $('.status-score').hide();
    $('.correct-feedback-page').hide();
    $('.incorrect-feedback-page').hide();
    $('.final-page').hide();

});

$('.button-startq').click(function () { //begin quiz and questions
    $('.intro').hide();
    $('.question-page').show();
    $('.status-score').show();
    generateQuestion();

   
});



STORE = [
    
{
    question: 'Who was the first Roman Emperor?',
    questionOptions: ['a.) Julius Caesar', 'b.) Mark Antony', 'c.) Augustus', 'd.) Cleopatra'],
    correct: 'c.) Augustus'
},

{
    question: 'Who was the longest serving Roman Emperor?',
    questionOptions: ['a.) Augustus', 'b.) Trajan', 'c.) Agrippa', 'd.) Constantine'],
    correct: 'a.) Augustus'
},

{
    question: 'Who was the first Christian Roman Emperor?',
    questionOptions: ['a.) Maxentius', 'b.) Licinius I', 'c.) Vedius', 'd.) Constantine'],
    correct: 'd.) Constantine'
},

{
    question: 'Which Emperor Initiated the Construction of the Colosseum?',
    questionOptions: ['a.) Titus', 'b.) Domitian', 'c.) Vespasian', 'd.) Toto'],
    correct: 'c.) Vespasian'
},

{
    question: 'Which Emperor began the Conquest of Britain?',
    questionOptions: ['a.) Domitian', 'b.) Claudius', 'c.) Maxentius', 'd.) Agrippa'],
    correct: 'b.) Claudius'
},

{
    question: 'Which Roman General defeated the Carthaginians in the First Punic War?',
    questionOptions: ['a.) Marcus Vipsanius', 'b.) Gnaeus Julius Agricola', 'c.) Diocletas', 'd.) Scipio Africanus'],
    correct: 'd.) Scipio Africanus'
},

{
    question: 'Which modern day nation did the Roman General Gnaeus Julius Agricola Conquer?',
    questionOptions: ['a.) Norway', 'b.) South Africa', 'c.) France', 'd.) Britain'],
    correct: 'd.) Britain'
},

{
    question: 'Nero Claudius Drusus was the First Roman General to mount successful campaigns east of what River?',
    questionOptions: ['a.) Rhine', 'b.) Danube', 'c.) Nile', 'd.) Medes'],
    correct: 'a.) Rhine'
},

{
    question: 'In what Manner did the Roman General Mark Antony Die?',
    questionOptions: ['a.) Old Age', 'b.) Assassination', 'c.) Suicide', 'd.) Poison'],
    correct: 'c.) Suicide'
},

{
    question: 'In what Manner did the Roman General Nero Claudius Drusus Die?',
    questionOptions: ['a.) Assassination', 'b.) Falling from his horse', 'c.) Slipping on a Wet Floor', 'd.) Cuts from his Wife\'s Dagger'],
    correct: 'b.) Falling from his horse'
},


];






function tally() {
    let query = 1;
    return query;
};

function score() {
    let score = 0;
    return score;
};

let i = 0;


// goes through the questions
function generateQuestion() {
    $(".questionQh").replaceWith(STORE[i].question);
    $(".answerA").replaceWith(STORE[i].questionOptions[0]);
    $(".answerB").replaceWith(STORE[i].questionOptions[1]);
    $(".answerC").replaceWith(STORE[i].questionOptions[2]);
    $(".answerD").replaceWith(STORE[i].questionOptions[3]);
    console.log(`generateQuestion ran`);
    $("p.question-status").replaceWith(`Question ${tally()} out of 10`);
    $("p.current-score").replaceWith(`Score is ${score()} out of 10`);
};


function selectAnswer() {
    $(".options").on('change', function (event) {
    console.log(`ANSWER IS SELECTED`);
    let ya = $('input[name=option]:checked', '#gotcha').val();
    console.log(ya);
    if (aa=(STORE[i].correct)) {
        correct();
        
    }
    else {
        wrong();
    };
    });



};


function correct() {
    $("div.two").replaceWith(`
        <input type="button" value="Submit Answer" class="select-answer-right" role="submit-selected-answer">
        `);
        console.log('correct');

};

function wrong() {
    $("div.two").replaceWith(`
        <input type="button" value="Submit Answer" class="select-answer-wrong" role="submit-selected-answer">
        `);
        console.log('not correct');
};




function makeQuiz() {
    selectAnswer();
    generateQuestion();
    tally();
    submittedAnswer();
    }
    
    $(makeQuiz);