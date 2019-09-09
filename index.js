

STORE = [
    
{
    question: 'Who was the first Roman Emperor?jj',
    questionOptions: ['a.) Julius Caesarjj', 'b.) Mark Antonyjj', 'c.) Augustusjj', 'd.) Cleopatrajj'],
    correct: 'c'
},

{
    question: 'Who was the longest serving Roman Emperor?',
    questionOptions: ['a.) Augustus', 'b.) Trajan', 'c.) Agrippa', 'd.) Constantine'],
    correct: 'a'
},

{
    question: 'Who was the first Christian Roman Emperor?',
    questionOptions: ['a.) Maxentius', 'b.) Licinius I', 'c.) Vedius', 'd.) Constantine'],
    correct: 'd'
},

{
    question: 'Which Emperor Initiated the Construction of the Colosseum?',
    questionOptions: ['a.) Titus', 'b.) Domitian', 'c.) Vespasian', 'd.) Toto'],
    correct: 'c'
},

{
    question: 'Which Emperor began the Conquest of Britain?',
    questionOptions: ['a.) Domitian', 'b.) Claudius', 'c.) Maxentius', 'd.) Agrippa'],
    correct: 'b'
},

{
    question: 'Which Roman General defeated the Carthaginians in the First Punic War?',
    questionOptions: ['a.) Marcus Vipsanius', 'b.) Gnaeus Julius Agricola', 'c.) Diocletas', 'd.) Scipio Africanus'],
    correct: 'd'
},

{
    question: 'Which modern day nation did the Roman General Gnaeus Julius Agricola Conquer?',
    questionOptions: ['a.) Norway', 'b.) South Africa', 'c.) France', 'd.) Britain'],
    correct: 'd'
},

{
    question: 'Nero Claudius Drusus was the First Roman General to mount successful campaigns east of what River?',
    questionOptions: ['a.) Rhine', 'b.) Danube', 'c.) Nile', 'd.) Medes'],
    correct: 'a'
},

{
    question: 'In what Manner did the Roman General Mark Antony Die?',
    questionOptions: ['a.) Old Age', 'b.) Assassination', 'c.) Suicide', 'd.) Poison'],
    correct: 'c'
},

{
    question: 'In what Manner did the Roman General Nero Claudius Drusus Die?',
    questionOptions: ['a.) Assassination', 'b.) Falling from his horse', 'c.) Slipping on a Wet Floor', 'd.) Cuts from his Wife\'s Dagger'],
    correct: 'b'
},

];


var qey = ["one"];
var tally = [];
var k = [];


var i = k.length;
var query = qey.length;
var score = tally.length;


var y = 2;

// goes through the questions


$(document).ready( function() {
    
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




function generateQuestion() {
    var i = k.length;
    var query = qey.length;
    var score = tally.length;
    $(".questionQh").replaceWith(STORE[i].question);
    $(".answerA").replaceWith(STORE[i].questionOptions[0]);
    $(".answerB").replaceWith(STORE[i].questionOptions[1]);
    $(".answerC").replaceWith(STORE[i].questionOptions[2]);
    $(".answerD").replaceWith(STORE[i].questionOptions[3]);
    console.log(`generateQuestion ran`);
    $("p.question-status").replaceWith(`Question ${query} out of 10`);
    $("p.current-score").replaceWith(`Score is ${score} out of 10`);
    console.log(`Question # ${query}`);
    console.log(`Score is ${score}`);
    console.log(`Store place is ${i}`);
};




function selectAnswer() {
    $("#gotcha").on('click', 'label', function (event) {
    console.log(`ANSWER IS SELECTED`);
    let ya = $('input[name=option]:checked', '#gotcha').val();
    console.log(ya);
    if (ya===(STORE[i].correct)) {
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
    var i = k.length;
    var query = qey.length;
    var score = tally.length;
    console.log(`Question # ${query}`);
    console.log(`Score is ${score}`);
    console.log(`Store place is ${i}`);
    
    

});

function rr() {
    tally.push("one");
    k.push("one");
    qey.push("one");
};



$('.question-page').on('click', '.select-answer-wrong', function () {
    $('.correct-feedback-page').show();
    query ++;
    console.log(query);
    console.log(score);

});








function correct() {
    $("div.two").replaceWith(`
        <button type='button' class="select-answer-right" role="selected-answer">Submit Answer</button>
        `);
        let y = 1;
        console.log('correct');
        console.log(y);

};

function wrong() {
    $("div.two").replaceWith(`
        <button type='button' class="select-answer-wrong" role="selected-answer">Submit Answer</button>
        `);
        let y = 0;
        console.log('not correct');
        console.log(y);
};



$('.correct-feedback-page').on('click', '.buttonNextr', function () {
      
    $('.button-startq').off('click');
    $("#gotcha").off('click');
    $('.question-page').off('click');

    if (i<10) {

        generateQuestion();
        $('.correct-feedback-page').hide();
        $('.question-page').show();
        $('.status-score').show();
        
        
    }

    else {
        $('.final-page').show();
    };
    
});






function makeQuiz() {
    generateQuestion();
    selectAnswer();
    }
    
    $(makeQuiz);

});