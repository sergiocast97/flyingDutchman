function addToTray(beverage){

    //here we should get the tray-element instead, have to create it in the menu.HTML
    var ul = document.getElementById("beverageList");

    var li = document.createElement("li");
    li.innerHTML = beverage;
    ul.value = "";
    ul.appendChild(li);
    console.log(li);

    console.log(beverage);
    console.log(ul);

};
