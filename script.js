var rightNow;
//input Ids
var timeIs9 = $("#0900")
var timeIs10 = $("#1000")
var timeIs11 = $("#1100")
var timeIs12 = $("#1200")
var timeIs1 = $("#1300")
var timeIs2 = $("#1400")
var timeIs3 = $("#1500")
var timeIs4 = $("#1600")
var timeIs5 = $("#1700")
//button Ids
var btn5 = document.getElementById('delete5')
var btn4 = document.getElementById('delete4')
var btn3 = document.getElementById('delete3')
var btn2 = document.getElementById('delete2')
var btn1 = document.getElementById('delete1')
var btn12 = document.getElementById('delete12')
var btn11 = document.getElementById('delete11')
var btn10 = document.getElementById('delete10')
var btn9 = document.getElementById('delete9')
btn9.addEventListener('click', consoleCool)
btn10.addEventListener('click', consoleCool)
btn11.addEventListener('click', consoleCool)
btn12.addEventListener('click', consoleCool)
btn1.addEventListener('click', consoleCool)
btn2.addEventListener('click', consoleCool)
btn3.addEventListener('click', consoleCool)
btn4.addEventListener('click', consoleCool)
btn5.addEventListener('click', consoleCool)

// function store9(){
//     var val9 = timeIs9.value
// }

function consoleCool() {
console.log('yo you deleted something')
}

//timer
timeDisplay = $("#currentDay")
function displayTime() {
    rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplay.text(rightNow);
    
}
//loads immediately
displayTime();
//loads again after 1 second repeatedly
setInterval(displayTime,1000)

//checks time to change color
function checkTime(){
    // grab time
    var currentTime = moment().format('H')
    //make currentTime a number
    currentTime = Number(currentTime) 
    console.log(currentTime)
    if(currentTime === 9){
        timeIs9.css("background-color", "red");
    }//red 
    else if(currentTime > 9){
        timeIs9.css("background-color", "grey");
    }//grey
    else{
        timeIs9.css("background-color", "#50c878");
    }//green
    if(currentTime === 10){
        timeIs10.css("background-color", "red");
    }//red 
    else if(currentTime > 10){
        timeIs10.css("background-color", "grey");
    }//grey
    else{
        timeIs10.css("background-color", "#50c878");
    }//green
    if(currentTime === 11){
        timeIs11.css("background-color", "red");
    }//red 
    else if(currentTime > 11){
        timeIs11.css("background-color", "grey");
    }//grey
    else{
        timeIs11.css("background-color", "#50c878");
    }//green
    if(currentTime === 12){
        timeIs12.css("background-color", "red");
    }//red 
    else if(currentTime > 12){
        timeIs12.css("background-color", "grey");
    }//grey
    else{
        timeIs12.css("background-color", "#50c878");
    }//green
    if(currentTime === 13){
        timeIs1.css("background-color", "red");
    }//red 
    else if(currentTime > 13){
        timeIs1.css("background-color", "grey");
    }//grey
    else{
        timeIs1.css("background-color", "#50c878");
    }//green
    if(currentTime === 14){
        timeIs2.css("background-color", "red");
    }//red 
    else if(currentTime > 14){
        timeIs2.css("background-color", "grey");
    }//grey
    else{
        timeIs2.css("background-color", "#50c878");
    }//green
    if(currentTime === 15){
        timeIs3.css("background-color", "red")
    }//red
    else if(currentTime > 15 ){
        timeIs3.css("background-color", "grey")   
    }//grey
    else{
        timeIs3.css("background-color", "#50c878")
    }//green
    if(currentTime === 16){
        timeIs4.css("background-color", "red");
    }//red 
    else if(currentTime > 16){
        timeIs4.css("background-color", "grey");
    }//grey
    else{
        timeIs4.css("background-color", "#50c878");
    }//green
    if(currentTime === 17){
        timeIs5.css("background-color", "red")
        
    }//red
    else if(currentTime > 17 ){
        timeIs5.css("background-color", "grey")   
    }//grey
    else{
        timeIs5.css("background-color", "#50c878")
    }//emerald
}
checkTime();
setInterval(checkTime, 60000);

//LocalStorage


