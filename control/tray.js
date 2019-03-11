function addToTray(beverage){

    //here we should get the tray-element instead, have to create it in the menu.HTML
    var ul = document.getElementById("tray");

    var li = document.createElement("li");
    li.id = beverage[3];
    li.innerHTML = "<span class=brand>" + beverage[0] + "</span>" + " " + beverage[1] + " " + "<span class=price>" + beverage[4] + "kr" + "</span>";
    li.className = "trayItem";
    li.addEventListener('click', () => removeFromTray(li));
    //ul.value = "";
    ul.appendChild(li);

};

function removeFromTray(beverage){
    var ul = document.getElementById("tray");
    ul.removeChild(beverage)
}

