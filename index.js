function validate() {

let form  = document.getElementById('akan-form')
let date=document.getElementById('date')
let gender=document.akannames.gender;
// let submitbtn=document.getElementById('submit')
// let results=document.getElementById("result-name")

// var myName= document.getElementById("Bel")
// document.getElementById("Bel").innerHTML=Date();
// document.write(Date());

let date=new Date(document.getElementById("date").value);
let dateday=date.getDay();

    let akan_names = {
      male:{
        sunday:"Kwasi",
        monday:"Kwadwo",
        tuesday:"Kwabena",
        wednesday:"Kwaku",
        thursday:"Yaw",
        friday:"Kofi",
        saturday:"Kwame",
      },
      female:{
        sunday:"Akosua",
        monday:"Adwoa",
        tuesday:"Abenaa",
        wednesday:"Akua",
        thursday:"Yaa",
        friday:"Afua",
        saturday:"Ama",
      }
    }

    let weekdays = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    let valid=false

    let dateerror=document.getElementById("dateerror");
    let gendererror=document.getElementById("gendererror");

    let result=document.getElementById("result");

    if(document.getElementById("date").value==""){
      dateerror.innerHTML= "Kindly enter a valid date";
      return false;
    }else{
      // validating gender
      for(let i=0;i<gender.length;i++){
        if(gender[i].checked){
          valid=true;
          break
        }
      }
      if(valid){
        if(gender[i].value=="male"){
          result.innerHTML="You were born on a "+day+".<br>"+"Your Akan Name is" + male[dateday];
        }else{
          if(gender[i].value=="female"){
            result.innerHTML="You were born on a "+day+".<br>"+"Your Akan Name is " + female[dateday];
          }
        }
      }else{
        gendererror.innerHTML="Kindly select gender";
        return false;
      }
    }
    function refresh(){
      document.getElementById("dateerror").innerHTML= "";
      document.getElementById("gendererror").innerHTML= "";
      document.getElementById("result").innerHTML= "";
      date.value= "";
      let else=document.getElementById("gender");

      for(let j=0; j<gender.length;j++)
      gender[j].checked=false;
    }

    // submitbtn.onclick = (event) => {
    //   event.preventDefault();
    //   let genderValue = gender.option[gender.selectedIndex].value;
    //   let birthdayValue = birthday.value;
  
  //     if (!birthdayValue || !genderValue) {
  //         alert("all fields are required!")
  //     }
  
  //     else {
  //         // get day of the week from the birthday
  //         let officialBirthDay = new Date(birthdayValue)
  //         let day = DAYS[officialBirthDay.getDay()];
  
  //         if (genderValue === "male") {
  //             let akanName = NAMES.male[day];
  //             // console.log(akanName);
  //             results.innerHTML = akanName;
  //         }
  
  //         else {
  //             let akanName = NAMES.female[day];
  //             // console.log(akanName);
  //             results.innerHTML = akanName;
  //         }
  //     }
  // }