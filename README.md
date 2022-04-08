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
//instantly checks values
checkTime();
//makes the hour colors refresh every minute
setInterval(checkTime, 60000);

````

I didn't access local storage in the most efficient way, but I accessed it based on the inputs position on the storage array. I initially took the value of the first input and console logged it to ensure I was recieving the value, then I would set that item to the key value pair 'nine', val9. Through trial and error I found that to be that my input for 9AM was the 6th key out of the 9 item array.I did this for each input. 
````Javascript
 btn9.onclick = function() {
    var val9 = input9.value;
    console.log(val9)
    if(val9){
         localStorage.setItem('nine', val9)
     }
 }; 
 var key9 = localStorage.key(6);
 var value9 = localStorage.getItem(key9)

 //jquery made positioning the value very simple.  
 timeIs9.attr('placeholder',`${value9}`)

````
I utilized bootstrap to get the containers and inputs. I made a class of container for an initial div row. Then utilizing a template for input boxes that had a single span tag label on the left of the input box, I duplicated it to mirror the styling for the save area. Then Repeteadly used this styling for ever hour. 
````HTML
    <div class="container">
      <!-- Timeblocks go here -->
      <div class="row">
        <!-- 9AM -->
        <div class="input-group input-group-sm mb-3">
          <div class="input-group input-group-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg">09:00AM</span>
            <input id="0900" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg"><button id="delete9"><img src="assets/images/png-transparent-computer-icons-icon-design-iconfinder-save-icon-miscellaneous-saving-rectangle.png" height="40px" width="40px"/></button></span>
          </div>
        </div>
        <!-- 10AM -->
        <div class="input-group input-group-sm mb-3">
          <div class="input-group input-group-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg">10:00AM</span>
            <input id = "1000" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg">
            <span class="input-group-text" id="inputGroup-sizing-lg"><button id="delete10"><img src="/Assets/Images/png-transparent-computer-icons-icon-design-iconfinder-save-icon-miscellaneous-saving-rectangle.png" height="40px" width="40px"/></button></span>
          </div>
        </div>
````