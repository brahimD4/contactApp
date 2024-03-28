

// async function get(){
//   const response=  fetch("https://randomuser.me/api/?results=5000");
//  const data=await response.JSON();

//   // const obj = JSON.parse(data);
//    console.log(obj);

// }

//  get();


// fetch("https://randomuser.me/api/")
// .then(function(response){
  
//   console.log(response);
//   return response.json();
// }).then(function(data){
//   console.log(data); 
// });
//  async function getDataFromAPI(url) {
//   return fetch(url)
//       .then(response => {
//           if (!response.ok) {
//               throw new Error('Erreur HTTP ' + response.status);
//           }
//           return response.json();
//       })
//       .catch(error => {
//           console.error('Erreur lors de la récupération des données depuis l\'API:', error);
//       });
// }
// // var obj=getDataFromAPI("https://randomuser.me/api/");
// getDataFromAPI("https://randomuser.me/api/")
//     .then(data => {
//         // Traiter les données et les transformer en objets
//         const objects = data.map(item => {
//             return {
//                 attribute1: item.attribute1,
//                 attribute2: item.attribute2
//             };
//         });
   