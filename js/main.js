"use strict"

var list_contactes=document.getElementsByClassName('list_contacts') ;
var contact_Local=JSON.parse(localStorage.getItem('les_contactes'));


async function get(){
  const response= await fetch("../Json/resultats.json");
  const data = await response.json();

  var MayContact=data.results;
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
      for(let ele of contact_Local){
       if(ele.name==Name){
         console.log('walot g json');
        FullName=ele.name;
        Telphone=ele.telephone;
        Gender=ele.gender;
        Gmail=ele.email;
        // Picture=ele.picture;
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




console.log(contact_Local);

if(contact_Local!=null){
  for(var ele of contact_Local){
    let mydiv=`<div class="card d-flex flex-row"><img id="" src="images/profil.png"><p>${ele.name}</p></div>`;
    list_contactes[0].innerHTML +=mydiv ; 
  }
}



function get_Info_From_LocalStorage(nom){
  //  for(let ele of contact_Local){
    
    //  console.log(ele);
    

  //  }
}

// for(let element of list_contactes[0].children){
//   console.log(element);
//      element.addEventListener('click',function(){
//         get_Info_From_LocalStorage(this.children[1].textContent);//recoire le nom de contact en parametre

        // let text=`<div class="card">
        //                  <img id="photo_personne" src="images/profil.png">
        //                  <p>${FullName}</p>

        //                  <div class="email">
        //                      <img id="icon_email" src="images/email.png">
        //                      <p>${Gender}</p>
        //                  </div>

        //                  <div class="telephone">
        //                      <img id="icon_appel" src="images/appel.png">
        //                      <p>${Telphone}</p>
        //                  </div>
                     
                         
        //                  <div class="email">
        //                      <img id="icon_email" src="images/email.png">
        //                      <p>${Gmail}</p>
        //                  </div>
        //           </div>`;

        //     Afiche_contact[0].innerHTML=text;
        //     Afiche_contact[0].style.display='block';    
        //     ligne_vertical[0].style.display='block';

//      });  
// }


