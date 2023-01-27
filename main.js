let Exercise = function(pWhich, pLength, pCalories){
   this.which = pWhich;
   this.length = pLength;
   this.calories = pCalories;
   this.work1 = function() {
      return "Which: " + this.which + " Length: " + this.length + " Calories: " + this.calories
   };
} // Constructor for each workout

workArr = []; 


function Workout() {
   let minutes = document.getElementById("minutes").value;
   let sitUps = document.getElementById("sitUp");
   let pushUps = document.getElementById("pushUp");
   let jumpRopes = document.getElementById("jumpRope");

   // These make sure which exercise the values get pushed into the array.
   if(sitUps.checked==true){
      workArr.push(new Exercise("Sit Ups", minutes, 10 * minutes));
      console.log(workArr);
   }
   else if(pushUps.checked==true){
      workArr.push(new Exercise("Push Ups", minutes, 15 * minutes));
      console.log(workArr);
   }
   else if(jumpRopes.checked==true){
      workArr.push(new Exercise("Jump Rope", minutes, 18 * minutes));
      console.log(workArr);
   }
} // Onclick Button for add

document.getElementById('mostBurned').addEventListener('click', mostBurned);

function mostBurned() {
    let winner = 0
    for (i = 0; i < workArr.length; i++) {
    if  (workArr[i].calories > workArr[winner].calories);
    {
        winner = i;
    }
    }
    document.getElementById("outputMostBurned").value = workArr[winner].which + ' ' + workArr[winner].calories;
}
document.addEventListener("DOMContentLoaded", function (event) {
});

document.getElementById('showAll').addEventListener('click', showAll);

function showAll(){
    document.getElementById('outputAll').innerText = '';
    for (i = 0; i < workArr.length; i++) {
        let list = document.createElement('li');
        list.innerText = workArr[i].which + ' for ' + workArr[i].length + ' minutes' + ' and burned ' + workArr[i].calories + ' calories';
        document.getElementById('outputAll').append(list);
        console.log(workArr[i]);
    }
    
}
