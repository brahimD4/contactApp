"use strict"


async function get(){
  const response= await fetch("../Json/resultats.json");
  const data = await response.json();

  MayContact=data.results;
  let langeur= data.results.length ;

  var list_contactes=document.getElementsByClassName('list_contacts') ;
  var Afiche_contact=document.getElementsByClassName('Achiche_contact');
  var ligne_vertical=document.getElementsByClassName('hr');

  console.log(data);
  console.log(MayContact);
  console.log(langeur);
   var FullName;
   var Picture;
   var Telphone;
   var Gmail;
   var Gender;

  for(let ele of MayContact){
    var mydiv=`<div class="card d-flex flex-row"><img id="" src="images/profil.png"><p>${ele.name}</p></div>`;
     list_contactes[0].innerHTML +=mydiv;

  }

  function get_Info_From_Json(Name){
    for(let ele of MayContact){
        if(ele.name==Name){
            console.log('oui mojod');

            FullName=ele.name;
            Telphone=ele.phone;
            Gender=ele.gender;
            Gmail=ele.email;
            Picture=ele.picture;
            console.log(Telphone,Gender,Gmail,Picture,FullName);
            break;
      }
   }
  }

for(let element of list_contactes[0].children){
     console.log(element);
        element.addEventListener('click',function(){
           get_Info_From_Json(this.children[1].textContent);//recoire le nom de contact en parametre
   
           let text=`<div class="card">
                            <img id="photo_personne" src="images/profil.png">
                            <p>${FullName}</p>

                            <div class="email">
                                <img id="icon_email" src="images/email.png">
                                <p>${Gender}</p>
                            </div>

                            <div class="telephone">
                                <img id="icon_appel" src="images/appel.png">
                                <p>${Telphone}</p>
                            </div>
                        
                            
                            <div class="email">
                                <img id="icon_email" src="images/email.png">
                                <p>${Gmail}</p>
                            </div>
                     </div>`;

               Afiche_contact[0].innerHTML=text;
               Afiche_contact[0].style.display='block';    
               ligne_vertical[0].style.display='block';

        });  
}



   return data;
}

get();


const form = document.getElementById('form');
const inputFullName=document.getElementById('FullName');
const inputTelephone=document.getElementById('Telephone'); 
const inputEmail=document.getElementById('Email');

console.log(inputFullName);
console.log(inputTelephone);
console.log(inputEmail);

var valide_mail = /\w+@gmail.com\b/g;
var valide_tele=/\b(06|07)\d{8}\b/g ;

console.log(valide_tele.test(inputTelephone.value));

inputEmail.onclick=function(){
  inputEmail.style.border='';
}
inputTelephone.onclick=function(){
   inputTelephone.style.border='';
}

form.onsubmit=function(event){
if(valide_mail.test(inputEmail.value)==true && valide_tele.test(inputTelephone.value)==true){
  console.log('valid');
return;
}else{
  if(valide_mail.test(inputEmail.value)==false){
    inputEmail.style.border='1px solid red';
  }
  if(valide_tele.test(inputTelephone.value)==false){
    console.log(inputTelephone.value);
    inputTelephone.style.border='1px solid red';
   
  }

   event.preventDefault();
}

}


var gmail="0632536365";
var grx=/\b(06|07)\d{8,8}\b/g ;


console.log(gmail.match(grx));
console.log(grx.test(gmail));



