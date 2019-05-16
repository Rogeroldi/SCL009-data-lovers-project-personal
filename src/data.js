
//tiene dos parametros data y rol
//realiza el metodo filter para acceder a el elemento del arreglo
//return entrega los roles(tag) y el includes retorna verdadero o falso si encuentra el elemento
//por ejemplo mage

const filterData = (dataLol, rol) => {
  const filterRol = dataLol.filter(element => {


    return element.tags.includes(rol);
  })
  return filterRol
  
};
window.filterData = filterData;