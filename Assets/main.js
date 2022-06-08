let ranInt = Math.floor(Math.random() * 5) + 1;
let num = 0;
function genInt() {
    ranInt = Math.floor(Math.random() * 5) + 1;
}

function genHome(num) {
    if (num == 0) {
        genInt();
        console.log(`Random num gen: ${ranInt}`);
    } else {
        ranInt = num;
        console.log(`User num gen: ${ranInt}`);
    }
    if (ranInt  == 1) {
        document.getElementById('home1').style.visibility = 'visible';
        console.log(`Displaying home: ${ranInt}`);
    } else if (ranInt == 2) {
        document.getElementById('home2').style.visibility = 'visible';
        console.log(`Displaying home: ${ranInt}`);
    } else if (ranInt == 3) {
        document.getElementById('home3').style.visibility = 'visible';
        console.log(`Displaying home: ${ranInt}`);
    } else if (ranInt == 4) {
        document.getElementById('home4').style.visibility = 'visible';
        console.log(`Displaying home: ${ranInt}`);
    } else if (ranInt == 5) {
        document.getElementById('home5').style.visibility = 'visible';
        console.log(`Displaying home: ${ranInt}`);
    }
}    
genHome(num);
console.log('You can use genHome(num) to change the home displayed!');