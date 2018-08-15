function addList() {
  let newlist = document.createElement("div"); //div para lista de tareas
  let newinput=document.createElement("input");
  let newBtn=document.createElement("button")
  let texto = document.createTextNode("nueva lista");
  newlist.appendChild(newinput);
  newinput.appendChild(texto);
  newlist.appendChild(newBtn);

  let list = document.getElementById("listas");
  list.appendChild(newlist);
 
  
 

}
