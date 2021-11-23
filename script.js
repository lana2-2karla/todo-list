let buttonTag = document.getElementById("criar-tarefa");
buttonTag.addEventListener("click", addValue);

function addValue() {
    let textValue = document.querySelector("#texto-tarefa").value;
    let listTag = document.createElement("li");
    listTag.innerHTML = textValue;
    document.getElementById("lista-tarefas").appendChild(listTag);
   //Remove/exclui "value" do input(barra de digitação)
    document.getElementById("texto-tarefa").value = "";   
}
