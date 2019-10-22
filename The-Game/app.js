$(() => {
    console.log('this works');

    const $shape = $('.row div')

    const shapeArr = ['empty','x', 'o'];

    let counter = 0;
    const changeShape = (event) => {
        if (counter <= shapeArr.length - 1) {
            $(event.currentTarget).attr('class', shapeArr[counter]);
                counter++;
        } else {
            counter = 0;
            $(event.currentTarget).attr('class', shapeArr[counter]);
            counter++;
        }
    };

    $shape.on('click', changeShape); 

});