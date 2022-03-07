let myForm = document.getElementById("form");
let myDay = document.getElementById("day");
let myMonth = document.getElementById("month");
let myYear = document.getElementById("year");

let akanName = document.querySelector(".Akan");

myForm.addEventListener("submit", (e) =>{
  e.preventDefault();

  let myGender = form.gender.value;

  if (myDay.value === ""){
    alert("Please enter the day you were born");
}else{
    if(myDay.value <= 0 || myDay.value >31){
        alert("Enter a valid date")
    }
}

if (myMonth.value === ""){
  alert("Please enter the month you were born");
}else{
  if(myMonth.value <= 0 || myMonth.value >12){
      alert("Enter a valid month")
  }
}

if (myYear.value === ""){
  alert("Please enter the year you were born");
}else{
  if(myYear.value <= 0 || myYear.value >2022){
      alert("Enter a valid year")
  }
}
  // console.log(`${myDay.value}
  // ${myMonth.value}
  // ${myYear.value}
  // ${myGender}`)

  var yourAkanName = myFunction(myDay.value, myMonth.value, myYear.value, myGender);
  akanName.innerHTML = `Your Akan name is ${yourAkanName}`;
})

function myFunction(day, month, year, gender){
  var female = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
var male = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

if (gender==="male"){
  var date = new Date(parseInt(year), (parseInt(month)-1), parseInt(day))
  var dayOfWeek = weekday [date.getDay()];
  return male [date.getDay()];

}else if (gender==="female"){
  var date = new Date(parseInt(year), (parseInt(month)-1), parseInt(day))
  var dayOfWeek = weekday [date.getDay()];
  return female [date.getDay()];
}

}