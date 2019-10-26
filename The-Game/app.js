
// 1. Create players 
let red = 0;
let yellow = 0;
const start = () => {
    // alert ('Lets make some money');
    winner();
}
//2. Start keeping track of winners 
const winner = () => {
    const choice = prompt('Who won the game?', 'Red/Yellow');
    if (choice === 'Red'){
        keepRed();
    } else if (choice === 'Yellow'){
        keepYellow();
    } else {
        areYouSure();
    }
};
const keepRed = () => {
    red++;
    alert ('Red has won' + red +' times.');
    if (red === 2){
        redChamp();
    } else if (red !== 2){
        alert('Keep playing');
    }
}
const keepYellow = () => {
    yellow++;
    alert ('Yellow has won' + yellow +' times.');
    if (yellow === 2){
        yellowChamp();
    } else if (yellow !== 2){
        alert('Keep playing');
    }
}
const areYouSure = () => {
    alert ('It was a tie. That rounf did not count');
    start();
}
const redChamp = () => {
    alert ('Red player is the Champion. Yellow is the loser.');
}
const yellowChamp = () => {
    alert ('Yellow player is the Champion. Red is the loser.');
}

////////////////////////////////////////////////////////////////
// JQuery Starts 

$(() => {


// hold the list of winners and resets the board 
const list = [];

$('form').on('submit', (event) => {

    event.preventDefault();
    $(event.currentTarget).trigger('reset');


    back();

    start();
});

// makes sure all circles can default back to start state so a new game can begin 
const back = () => {
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    $('#yellowPlayer').attr('id', 'square');
    $('#redPlayer').attr('id', 'square');
    // $('.empty2 div').attr('id', 'redPlayer');
};
/////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////
// I know this works up to a certain point. Keep in case you need to start over.

// Creates the ability to click the circle and change color 
const $shape = $('.row div')

    const shapeArr = ['redPlayer','yellowPlayer'];
    const shapeArr2 = ['yellowPlayer', 'redPlayer'];

    let counter = 0;
    const changeShape = (event) => {
        if (counter % 2 == 0) {
            $(event.currentTarget).attr('id', shapeArr[counter]);
            $('#redPlayer').attr('id', shapeArr2[counter]);
            counter++;
        } else {
            $(event.currentTarget).attr('id', shapeArr[counter]);
            counter = 1;
            $('#yellowPlayer').attr('id', shapeArr2[counter]);
            counter = 0;
        }
    };
    

    $shape.on('click', changeShape); 
    /////////////////////////////////////////////////

   


});