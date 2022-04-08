# dailyPlanner

##Description
This is a webpage designed to keep track of your daily tasks. Save the tasks while also having a live timer. The webpage will responsively update to the time of day between the hours of 9AM and 5PM. Green depicts hours in the future, red is the present hour, and grey are the hours in the past.

![DailyPlanner](/assets/Images/DailyPlanner.PNG)
[Quiz](https://sambalogna.github.io/dailyPlanner/)


## Key Coding Snippets
The timer for the hours to change color based on the time. I utilized the imported moment.js to take the time and format it into 'H' for hours out of the 24 hour clock. 0100,0200,...0900,1000,1100, and so on. In this format those numbers came in as 1,2,...,9,10,11. This made them easily comparable via if/else statements.
````Javascript
//checks time to change color
function checkTime(){
    // grab time
    var currentTime = moment().format('H')
    //make currentTime a number
    currentTime = Number(currentTime) 
    if(currentTime === 9){
        timeIs9.css("background-color", "red");
    }else if(currentTime > 9){
        timeIs9.css("background-color", "grey");
    }else{
        timeIs9.css("background-color", "#50c878");
    }if(currentTime === 10){
        timeIs10.css("background-color", "red");
    }else if(currentTime > 10){
        timeIs10.css("background-color", "grey");
    }else{
        timeIs10.css("background-color", "#50c878");
    }if(currentTime === 11){
        timeIs11.css("background-color", "red");
    }else if(currentTime > 11){
        timeIs11.css("background-color", "grey");
    }else{
        timeIs11.css("background-color", "#50c878");
    }if(currentTime === 12){
        timeIs12.css("background-color", "red");
    } else if(currentTime > 12){
        timeIs12.css("background-color", "grey");
    }else{
        timeIs12.css("background-color", "#50c878");
    }if(currentTime === 13){
        timeIs1.css("background-color", "red");
    }else if(currentTime > 13){
        timeIs1.css("background-color", "grey");
    }else{
        timeIs1.css("background-color", "#50c878");
    }if(currentTime === 14){
        timeIs2.css("background-color", "red");
    }else if(currentTime > 14){
        timeIs2.css("background-color", "grey");
    }else{
        timeIs2.css("background-color", "#50c878");
    }if(currentTime === 15){
        timeIs3.css("background-color", "red")
    }else if(currentTime > 15 ){
        timeIs3.css("background-color", "grey")   
    }else{
        timeIs3.css("background-color", "#50c878")
    }if(currentTime === 16){
        timeIs4.css("background-color", "red");
    } else if(currentTime > 16){
        timeIs4.css("background-color", "grey");
    }else{
        timeIs4.css("background-color", "#50c878");
    }if(currentTime === 17){
        timeIs5.css("background-color", "red")
        
    }else if(currentTime > 17 ){
        timeIs5.css("background-color", "grey")   
    }else{
        timeIs5.css("background-color", "#50c878")
    }
}
checkTime();
setInterval(checkTime, 60000);

````

````Javascript


````