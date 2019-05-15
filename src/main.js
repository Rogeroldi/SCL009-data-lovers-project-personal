

//obteniendo array que contiene los valores de las propiedades de los objetos
const dataLol = Object.values(window.LOL.data);
const container = document.getElementById("root");
for(let i= 0; i < dataLol.length; i++){
    container.innerHTML+=`<p>${dataLol[i].name}</p>
    <img src="${dataLol[i].img}">`
} 
    

