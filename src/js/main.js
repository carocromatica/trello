function addList() {
  let newlist = document.createElement("div"); //div para lista de tareas
  let texto = document.createTextNode("nueva lista");
  newlist.appendChild(texto);
 
  let list = document.getElementById("listas");
  list.appendChild(newlist);
 

}