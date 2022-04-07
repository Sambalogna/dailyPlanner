var rightNow;
var timeIs9 = $("#0900")
var timeIs10 = $("#1000")
var timeIs11 = $("#1100")
var timeIs12 = $("#1200")
var timeIs1 = $("#1300")
var timeIs2 = $("#1400")
var timeIs3 = $("#1500")
var timeIs4 = $("#1600")
var timeIs5 = $("#1700")
//button event listener
document.getElementById('delete').addEventListener('click', consoleCool)
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


function checkTime(){
    // grab time
    var currentTime = moment().format('H')
    //make currentTime a number
    currentTime = Number(currentTime) 
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
        console.log('now you gotta change color')
    }
    else if(currentTime > 15 ){
        console.log('change the color at 4?')
        timeIs3.css("background-color", "#grey")   
    }
    else{
        timeIs3.css("background-color", "#50c878")
    }
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
        console.log('now you gotta change color')
    }
    else if(currentTime > 17 ){
        console.log('change the color at 4?')
        timeIs5.css("background-color", "#grey")   
    }
    else{
        timeIs5.css("background-color", "#50c878")
    }
}
checkTime();
setInterval(checkTime, 60000);