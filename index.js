let form  = document.getElementById('akan-form')
let birthday=document.getElementById('birthday')
let gender=document.getElementById('gender')
let submitbtn=document.getElementById('submit')
let results=document.getElementById("result-name")

// var myName= document.getElementById("Bel")
// document.getElementById("Bel").innerHTML=Date();
// document.write(Date());

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

    submitbtn.onclick = (event) => {
      event.preventDefault();
      let genderValue = gender.option[gender.selectedIndex].value;
      let birthdayValue = birthday.value;
  
      if (!birthdayValue || !genderValue) {
          alert("all fields are required!")
      }
  
      else {
          // get day of the week from the birthday
          let officialBirthDay = new Date(birthdayValue)
          let day = DAYS[officialBirthDay.getDay()];
  
          if (genderValue === "male") {
              let akanName = NAMES.male[day];
              // console.log(akanName);
              results.innerHTML = akanName;
          }
  
          else {
              let akanName = NAMES.female[day];
              // console.log(akanName);
              results.innerHTML = akanName;
          }
      }
  }