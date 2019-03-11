function addToTray(beverage){

    //here we should get the tray-element instead, have to create it in the menu.HTML
    var ul = document.getElementById("tray");

    var li = document.createElement("li");
    li.innerHTML = "<span class=brand>" + beverage[0] + "</span>" + " " + beverage[1] + " " + "<span class=price>" + beverage[4] + "kr" + "</span>";
    li.className = "trayItem";
    //ul.value = "";
    ul.appendChild(li);
    console.log(li);

    console.log(beverage);
    console.log(ul);

};

function removeFromTray(beverage){
    var ul = document.getElementById("tray");
    var item = document.getElementById(beverage.value);
    ul.removeChild(item);
}

