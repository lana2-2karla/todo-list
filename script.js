let buttonTag = document.getElementById("criar-tarefa");
buttonTag.addEventListener("click", addValue);

function addValue() {
    let textValue = document.querySelector("#texto-tarefa").value;
    let listTag = document.createElement("li")
    listTag.innerHTML = textValue;
    document.getElementById("lista-tarefas").appendChild(listTag);
   //Remove/exclui "value" do input(barra de digitação)
    document.getElementById("texto-tarefa").value = "";  
    listTag.addEventListener("click", colorValue);
    listTag.addEventListener("dblclick", stripeValue);
 }

 function colorValue(event) {
    let elementGray = document.querySelector(".grey");
    
    if (elementGray) {
        elementGray.classList.remove("grey");  
    }
    event.target.classList.add("grey");
   
}

function stripeValue (event) {
    let elementStripe = document.querySelector(".completed");
    
    event.target.classList.add("completed");
    if (elementStripe) {
        elementStripe.classList.remove("completed");
    }
}




//event.target.classList.remove("completed");
//if (elementStripe) {
    //elementStripe.classList.remove("completed");
//