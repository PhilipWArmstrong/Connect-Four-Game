$(() => {
    console.log('this works');

    const $shape = $('.row div')

    const shapeArr = ['redPlayer','yellowPlayer'];

    let counter = 0;



    // Empty Player
    const changeShapeEmpty = (event) => {
        $(event.currentTarget).attr('id', 'empty');
    };
    $shape.on('click', changeShapeEmpty);

    // Red Player
    const changeShapeRed = (event) => {
        $(event.currentTarget).attr('id', 'redPlayer');
    };
    $shape.on('click', changeShapeRed); 

    // Yellow Player
    const changeShapeYellow = (event) => {
        $(event.currentTarget).attr('id', 'yellowPlayer');
    };
    $shape.on('click', changeShapeYellow); 

    

    // start my if statement to incorporate players 
    
    // const start = (event) => {
    //     if (let something = changeShapeEmpty)
    // }




    // I think I want to create an if / else if that takes in .on's of red, yellow, and empty 














    ///////////////////////////////////////////////
// I know this works up to a certain point. Keep in case you need to start over.
// const $shape = $('.row div')

//     const shapeArr = ['redPlayer','yellowPlayer'];

//     let counter = 0;
//     const changeShape = (event) => {
//         if (counter <= shapeArr.length - 1) {
//             $(event.currentTarget).attr('id', shapeArr[counter]);
//                 counter++;
//         } else {
//             counter = 0;
//             $(event.currentTarget).attr('id', shapeArr[counter]);
//             counter++;
//         }
//     };

//     $shape.on('click', changeShape); 
    /////////////////////////////////////////////////

   


});