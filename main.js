var Excercise = function(pWhich, pLength, pCalories){
   this.which = pWhich;
   this.length = pLength;
   this.calories = pCalories;
   this.work1 = function() {
      return "Which: " + this.which + " Length: " + this.length + " Calories: " + this.calories
   };
} // Constructor for each workout

workArr = []; 


function Workout() {
   var minutes = document.getElementById("minutes").value;
   var sitUps = document.getElementById("sitUp");
   var pushUps = document.getElementById("pushUp");
   var jumpRopes = document.getElementById("jumpRope");

   // These make sure which exercise the values get pushed into the array.
   if(sitUps.checked==true){
      workArr.push(new Excercise("Sit Ups", minutes, 10 * minutes));
      console.log(workArr);
   }
   else if(pushUps.checked==true){
      workArr.push(new Excercise("Push Ups", minutes, 15 * minutes));
      console.log(workArr);
   }
   else if(jumpRopes.checked==true){
      workArr.push(new Excercise("Jump Rope", minutes, 18 * minutes));
      console.log(workArr);
   }
} // Onclick Button for add

document.addEventListener("DOMContentLoaded", function (event) {
});


    //let workout = {
     //  which: "",
     //  length: "", //The professor adds the length in his video. We may not need this one.
     //  calories: "",  
    //};