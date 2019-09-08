
$(document).ready( function() {
    
    console.log('ready');
    $('.question-page').hide();
    $('.status-score').hide();
    $('.correct-feedback-page').hide();
    $('.incorrect-feedback-page').hide();
    $('.final-page').hide();

});


STORE = [
    
{
    question: 'Who was the first Roman Emperor?',
    questionOptions: ['Julius Caesar', 'Mark Antony', 'Augustus', 'Cleopatra'],
    correct: 'Augustus'
},

{
    question: 'Who was the longest serving Roman Emperor?',
    questionOptions: ['Augustus', 'Trajan', 'Agrippa', 'Constantine'],
    correct: 'Augustus'
},

{
    question: 'Who was the first Christian Roman Emperor?',
    questionOptions: ['Maxentius', 'Licinius I', 'Vedius', 'Constantine'],
    correct: 'Constantine'
},

{
    question: 'Which Emperor Initiated the Construction of the Colosseum?',
    questionOptions: ['Titus', 'Domitian', 'Vespasian', 'Toto'],
    correct: 'Vespasian'
},

{
    question: 'Which Emperor began the Conquest of Britain?',
    questionOptions: ['Domitian', 'Claudius', 'Maxentius', 'Agrippa'],
    correct: 'Claudius'
},

{
    question: 'Which Roman General defeated the Carthaginians in the First Punic War?',
    questionOptions: ['Marcus Vipsanius', 'Gnaeus Julius Agricola', 'Diocletas', 'Scipio Africanus'],
    correct: 'Scipio Africanus'
},

{
    question: 'Which modern day nation did the Roman General Gnaeus Julius Agricola Conquer?',
    questionOptions: ['Norway', 'South Africa', 'France', 'Britain'],
    correct: 'Britain'
},

{
    question: 'Nero Claudius Drusus was the First Roman General to mount successful campaigns east of what River?',
    questionOptions: ['Rhine', 'Danube', 'Nile', 'Medes'],
    correct: 'Rhine'
},

{
    question: 'In what Manner did the Roman General Mark Antony Die?',
    questionOptions: ['Old Age', 'Assassination', 'Suicide', 'Poison'],
    correct: 'Suicide'
},

{
    question: 'In what Manner did the Roman General Nero Claudius Drusus Die?',
    questionOptions: ['Assassination', 'Falling from his horse', 'Slipping on a Wet Floor', 'Cuts from his Wife\'s Dagger'],
    correct: 'Falling from his horse'
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




// goes through the questions
function generateQuestion() {
    let i = 0;
    $("div.one").replaceWith(STORE[i]);
    console.log(`generateQuestion ran`);
    $("p.question-status").replaceWith(`Question ${tally()} out of 10`);
    $("p.current-score").replaceWith(`Score is ${score()} out of 10`);
};


function selectAnswer() {
    $("section.question-page").click(function (event) {
    console.log(`ANSWER IS SELECTED`);

    if ($('input[class=yes]').is(':checked')) {
        correct();
        
    }
    else {
        wrong();
    };
    });



};


function correct() {
    $("div.two").replaceWith(`
        <a href="feedbackYES.html" type="submit" class="button" role="start-button">          Submit</a>
        <input type="radio" type="submit" class="reset-button" role="unknown"><span> Reselect Answer </span>
        `);
        console.log('correct');

};

function wrong() {
    $("div.two").replaceWith(`
        <a href="feedbackNO.html" type="submit" class="button" role="start-button">          Submit</a>
        <input type="radio" type="submit" class="reset-button" role="unknown"><span> Reselect Answer </span>
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