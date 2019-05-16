

//constante para englobar la data 
//object values para acceder a los valores de los objetos
const dataLol = Object.values(window.LOL.data);
//constante para llamar un elemento llamado root del html
const container = document.getElementById("root");


//recorriendo nombre e imagen 
//itera por cada elemento 
for (let i = 0; i < dataLol.length; i++) {
  container.innerHTML += `<p>${dataLol[i].name}</p>
    <img src="${dataLol[i].img}">`
}
//constante para llamar un elemento llamado rol
const selectRol = document.getElementById("rol"); 
//add event listener escucha un evento y change significa que cuando el usuario va a hacer
//un cambio en el select detectara change
selectRol.addEventListener("change", () => {
  //accediendo al valor que escoge el usuario
  const valueRol = document.getElementById("rol").value 
 //variable que va filtrando la data y accede al value tiene 2 parametros(data,valor(rol))
  let result = window.filterData(dataLol, valueRol);
  //imprimiendo el filtro en el root vacío
  container.innerHTML="";

//for each recorre cada nombre e imagen
   result.forEach(element => {
     container.innerHTML += `<p>${element.name}</p>
   <img src="${element.img}">`
     
   });
    

});