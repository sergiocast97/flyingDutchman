function addToTray(){

    var ul = document.getElementById("stout");
    var product = document.getElementById("listItem");
    var li = document.createElement("li");

    li.setAttribute('id', product);
    li.appendChild(document.createTextNode(product));
    ul.appendChild(li);
    console.log(ul);
    console.log(li);

};
