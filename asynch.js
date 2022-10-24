//set pf numbers
//filter = even, odd
//3
//list of numbers = array []

//even function
function even(num){
    return num %2 ==0; //true = even
}

function odd(num) {
    return num %2 != 0; //true = odd
}

function less_than_five(num) {
    return num < 5;
}
//filter function #3

function filter(lahat_ng_numbers,filtered_numbers){
    let final_list = []; //odd or even
    
    for (isang_number of lahat_ng_numbers){
        if (filtered_numbers(isang_number)){
            final_list.push(isang_number);
        }

    }
    return final_list;
}

let gagamitin_numbers_to_test = [1,2,3,4,5,6,7,8,9,10];

//filter, odd, even
setTimeout (even, 2000);
function even() {
    alert(filter(gagamitin_numbers_to_test,even));
}

// setTimeout (odd, 2000);
// function odd() {
//     alert(filter(gagamitin_numbers_to_test,odd));
// }

// setTimeout (less_than_five, 2000);
// function less_than_five() {
//     alert(filter(gagamitin_numbers_to_test,less_than_five));
// }

// alert(filter(gagamitin_numbers_to_test,odd));
// alert(filter(gagamitin_numbers_to_test,less_than_five));

// setTimeout(myFunction, 5000);

// function myFunction() {
//     alert("Hello Batch 20!");
// }



// function interval() {
//     document.getElementById('for_interval_sample').innerHTML += "Merry Christmas <br>";

// }

// let interval2 = setInterval(interval, 100);

// function stop_interval() {
//     clearInterval(interval2);
// }

// function sparkling() {
//     let text = document.getElementById('pasko'); // kinuha ung text
//     let colors = ["red","green","blue"]; // color choices
//     let red = Math.floor(Math.random(255) );
//     let green = Math.floor(Math.random(255) );
//     let blue = Math.floor(Math.random(255) );
//     let a = (255,255,255)
//     a = document.getElementById('rgb').innerText = "rgb";
//     let generateColor = Math.floor(Math.random() *3); // bassis for the color
//     text.style.color = colors[generateColor]; // final color
// }


// function start(){
//     start_color = setInterval(sparkling, 100);
// }

// function stop(){
//     clearInterval(start_color);
// }



function tree () {
    let rows = 10;
    let stand = 5;

for (let i=0; i<=rows; i++) 
{
    for (let j=0; j<=(10-i); j++) 
    {
        document.getElementById("pasko").innerHTML =+ "&nbsp;";
    }
    for (let k=1; k<=stand; k++) 
    {
        document.getElementById("pasko").innerHTML =+ "*"
    }
    document.getElementById("pasko").innerHTML += "<br/>";

}
}



function sparkling() {
    let text = document.getElementById('pasko'); // kinuha ung text
    let red = Math.floor(Math.random(255) *256 );
    let green = Math.floor(Math.random(255) *256 );
    let blue = Math.floor(Math.random(255) *256 );
    a = document.getElementById('rgb').innerText = `rgb(${red},${green},${blue})`;
    text.style.color = `rgb(${red},${green},${blue})`; // final color
}


function start(){
    start_color = setInterval(sparkling, 100);
}

function stop(){
    clearInterval(start_color);
}
