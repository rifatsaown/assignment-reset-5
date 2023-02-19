// serial number initial value
let count = 0;
// for triangle area calculation
document.getElementById('triangle-calculate').addEventListener('click', function(){
    const triangleBase = getElement('triangle-base');
    const triangleHeight = getElement('triangle-height');
    if(isNaN(triangleBase) || isNaN(triangleHeight) || triangleBase<0 || triangleHeight < 0){
        window.alert("Please give a positive number value as Input");
    }
    else{
        count++;
        const triangleAreaFraction = .5 * triangleBase * triangleHeight;
        const triangleAreaFixed = triangleAreaFraction.toFixed(2);
        const triangleArea = parseFloat(triangleAreaFixed);
        const triangleTitle = document.getElementById('triangle-title').innerText;
        areaDisplay(count, triangleArea, triangleTitle);
    }
});
// for rectangle area calculation
document.getElementById('rectangle-calculate').addEventListener('click', function(){
    const rectangleWidth = getElement('rectangle-width');
    const rectangleLength = getElement('rectangle-length');
    if(isNaN(rectangleWidth) || isNaN(rectangleLength) || rectangleWidth<0 || rectangleLength < 0){
        window.alert("Please give a positive number value as Input");
    }
    else{
        count++;
        const rectangleAreaFraction = rectangleLength * rectangleWidth;
        const rectangleAreaFixed = rectangleAreaFraction.toFixed(2);
        const rectangleArea = parseFloat(rectangleAreaFixed);
        const rectangleTitle = document.getElementById('rectangle-title').innerText;
        areaDisplay(count, rectangleArea, rectangleTitle);
    }
});
// for parallelogram area calculation
document.getElementById('parallelogram-calculate').addEventListener('click', function(){
    const parallelogramBase = getElement('parallelogram-base');
    const parallelogramHeight = getElement('parallelogram-height');
    if(isNaN(parallelogramBase) || isNaN(parallelogramHeight) || parallelogramBase<0 || parallelogramHeight < 0){
        window.alert("Please give a positive number value as Input");
    }
    else{
        count++;
        const parallelogramAreaFraction = parallelogramBase * parallelogramHeight;
        const parallelogramAreaFixed = parallelogramAreaFraction.toFixed(2);
        const parallelogramArea = parseFloat(parallelogramAreaFixed);
        const parallelogramTitle = document.getElementById('parallelogram-title').innerText;
        areaDisplay(count, parallelogramArea, parallelogramTitle);
    }
});
// for rhombus area calculation
document.getElementById('rhombus-calculate').addEventListener('click', function(){
    const rhombusDiagonalOne = getElement('rhombus-diagonal-one');
    const rhombusDiagonalTwo = getElement('rhombus-diagonal-two');
    if(isNaN(rhombusDiagonalOne) || isNaN(rhombusDiagonalTwo) || rhombusDiagonalOne<0 || rhombusDiagonalTwo < 0){
        window.alert("Please give a positive number value as Input");
    }
    else{
        count++;
        const rhombusAreaFraction = .5 * rhombusDiagonalOne * rhombusDiagonalTwo;
        const rhombusAreaFixed = rhombusAreaFraction.toFixed(2);
        const rhombusArea = parseFloat(rhombusAreaFixed);
        const rhombusTitle = document.getElementById('rhombus-title').innerText;
        areaDisplay(count, rhombusArea, rhombusTitle);
    }
});
// for pentagon area calculation
document.getElementById('pentagon-calculate').addEventListener('click', function(){
    const pentagonSideOne = getElement('pentagon-side-one');
    const pentagonSideTwo = getElement('pentagon-side-two');
    if(isNaN(pentagonSideOne) || isNaN(pentagonSideTwo) || pentagonSideOne<0 || pentagonSideTwo < 0){
        window.alert("Please give a positive number value as Input");
    }
    else{
        count++;
        const pentagonAreaFraction = .5 * pentagonSideOne * pentagonSideTwo;
        const pentagonAreaFixed = pentagonAreaFraction.toFixed(2);
        const pentagonArea = parseFloat(pentagonAreaFixed);
        const pentagonTitle = document.getElementById('pentagon-title').innerText;
        areaDisplay(count, pentagonArea, pentagonTitle);
    }
});
// for ellipse area calculation
document.getElementById('ellipse-calculate').addEventListener('click', function(){
    const ellipseSideOne = getElement('ellipse-side-one');
    const ellipseSideTwo = getElement('ellipse-side-two');
    if(isNaN(ellipseSideOne) || isNaN(ellipseSideTwo) || ellipseSideOne<0 || ellipseSideTwo < 0){
        window.alert("Please give a positive number value as Input");
    }
    else{
        count++;
        const ellipseAreaFraction = Math.PI * ellipseSideOne * ellipseSideTwo;
        const ellipseAreaFixed = ellipseAreaFraction.toFixed(2);
        const ellipseArea = parseFloat(ellipseAreaFixed);
        const ellipseTitle = document.getElementById('ellipse-title').innerText;
        areaDisplay(count, ellipseArea, ellipseTitle);
    }
});

// random background color generator for each cart

// all the color for the cart
const colors = ['slate', 'gray', 'zinc', 'neutral', 'stone', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'];

// color generator for triangle cart
document.getElementById('triangle-cart').addEventListener('mouseenter',function(){
    document.getElementById('triangle-cart').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
})

// color generator for rectangle cart
document.getElementById('rectangle-cart').addEventListener('mouseenter',function(){
    document.getElementById('rectangle-cart').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
})

// color generator for parallelogram cart
document.getElementById('parallelogram-cart').addEventListener('mouseenter',function(){
    document.getElementById('parallelogram-cart').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
})

// color generator for rhombus cart
document.getElementById('rhombus-cart').addEventListener('mouseenter',function(){
    document.getElementById('rhombus-cart').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
})

// color generator for pentagon cart
document.getElementById('pentagon-cart').addEventListener('mouseenter',function(){
    document.getElementById('pentagon-cart').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
})

// color generator for ellipse cart
document.getElementById('ellipse-cart').addEventListener('mouseenter',function(){
    document.getElementById('ellipse-cart').style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
})




