var rightNow;
//input Ids for jquery 
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
//input ids for local storage
var input9= document.getElementById('0900')
var input10= document.getElementById('1000')
var input11= document.getElementById('1100')
var input12= document.getElementById('1200')
var input1= document.getElementById('1300')
var input2= document.getElementById('1400')
var input3= document.getElementById('1500')
var input4= document.getElementById('1600')
var input5= document.getElementById('1700')


 btn9.onclick = function() {
    var val9 = input9.value;
    console.log(val9)
    if(val9){
         localStorage.setItem('nine', val9)
     }
 }; 
 //key 6 in the storage array is where value 9 is located
 var key9 = localStorage.key(6);
 var value9 = localStorage.getItem(key9)
 //place value in placeholder
 timeIs9.attr('placeholder',`${value9}`)
 btn10.onclick = function() {
    var val10 = input10.value;
    console.log(val10)
    if(val10){
         localStorage.setItem('ten', val10)
     }
 }; 
 //
 var key10 = localStorage.key(3);
 var value10 = localStorage.getItem(key10)
 timeIs10.attr('placeholder',`${value10}`)

 btn11.onclick = function() {
    var val11 = input11.value;
    console.log(val11)
    if(val11){
         localStorage.setItem('eleven', val11)
     }
 }; 
 //
 var key11 = localStorage.key(0);
 var value11 = localStorage.getItem(key11)
 timeIs11.attr('placeholder',`${value11}`)

 btn12.onclick = function() {
    var val12 = input12.value;
    console.log(val12)
    if(val12){
         localStorage.setItem('twelve', val12)
     }
 }; 
 var key12 = localStorage.key(7);
 var value12 = localStorage.getItem(key12)
 timeIs12.attr('placeholder',`${value12}`)

 btn1.onclick = function() {
    var val1 = input1.value;
    console.log(val1)
    if(val1){
         localStorage.setItem('one', val1)
     }
 }; 
 var key1 = localStorage.key(4);
 var value1 = localStorage.getItem(key1)
 timeIs1.attr('placeholder',`${value1}`)

 btn2.onclick = function() {
    var val2 = input2.value;
    console.log(val2)
    if(val2){
         localStorage.setItem('two', val2)
     }
 }; 
 var key2 = localStorage.key(5);
 var value2 = localStorage.getItem(key2)
 timeIs2.attr('placeholder',`${value2}`)

 btn3.onclick = function() {
    var val3 = input3.value;
    console.log(val3)
    if(val3){
         localStorage.setItem('three', val3)
     }
 }; 
 var key3 = localStorage.key(2);
 var value3 = localStorage.getItem(key3)
 timeIs3.attr('placeholder',`${value3}`)

 btn4.onclick = function() {
    var val4 = input4.value;
    console.log(val4)
    if(val4){
         localStorage.setItem('four', val4)
     }
 }; 
 var key4 = localStorage.key(1);
 var value4 = localStorage.getItem(key4)
 timeIs4.attr('placeholder',`${value4}`)

 btn5.onclick = function() {
    var val5 = input5.value;
    console.log(val5)
    if(val5){
         localStorage.setItem('five', val5)
     }
 }; 
 var key5 = localStorage.key(8);
 var value5 = localStorage.getItem(key5)
 timeIs5.attr('placeholder',`${value5}`)




console.log(localStorage)
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


