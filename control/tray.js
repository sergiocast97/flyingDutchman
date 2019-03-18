
// TODO: Change to dragNdrop on every beverage type. Make dragNdrop available in tablet mode

function addToTray(beverage){

    //here we should get the tray-element instead, have to create it in the menu.HTML
    var ul = document.getElementById("tray");
    var li = document.createElement("li");
    console.log(beverage);

    li.id = beverage[3];
    li.innerHTML = "<span class=brand>" + beverage[0] + "</span>" + " " + beverage[1] + " " + "<span class=price id='price'>" + beverage[4] + "kr" + "</span>";
    li.className = "trayItem";
    li.addEventListener('click', () => {removeFromTray(li);subAmount(beverage[4])});
    //ul.value = "";
    ul.appendChild(li);

};

function removeFromTray(beverage){
    var ul = document.getElementById("tray");
    ul.removeChild(beverage);
    console.log("removed");
    console.log(ul);
}

function addAmount(beverage){

    var previousAmount = document.getElementById("amount").innerHTML;
    console.log(previousAmount);
    var totalAmount = +previousAmount + +beverage[4];
    totalAmount = Math.round(totalAmount * 10)/10;

    document.getElementById("amount").innerHTML = totalAmount;
    console.log(totalAmount);

}

function addAmount2(price){

    var previousAmount = document.getElementById("amount").innerHTML;
    console.log(previousAmount);
    var totalAmount = +previousAmount + +price;
    totalAmount = Math.round(totalAmount * 10)/10;

    document.getElementById("amount").innerHTML = totalAmount;
    console.log(totalAmount);

}

function subAmount(beverage){

    var previousAmount = document.getElementById("amount").innerHTML;
    console.log(beverage);
    console.log(previousAmount);
    var totalAmount = +previousAmount - +beverage;
    totalAmount = Math.round(totalAmount * 10)/10;

    document.getElementById("amount").innerHTML = totalAmount;
    console.log(totalAmount);

}

function subAmount2(price){

    var previousAmount = document.getElementById("amount").innerHTML;
    console.log(price);
    console.log(previousAmount);
    var totalAmount = +previousAmount - +price;
    totalAmount = Math.round(totalAmount * 10)/10;

    document.getElementById("amount").innerHTML = totalAmount;
    console.log(totalAmount);

}

function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("Beverage", event.target.id);
}


function drop(event){
    console.log(event);

    event.preventDefault();
    var data = event.dataTransfer.getData("Beverage");
    console.log(data);

    var price = document.getElementById("price").innerHTML;
    console.log(price);
    addAmount2(price);

    var newTrayItem = document.getElementById(data);
    newTrayItem.className = "trayItem";
    newTrayItem.addEventListener('click', () => {removeFromTray(newTrayItem);subAmount2(price);});
    console.log(newTrayItem);

    tray = document.getElementById("tray");
    tray.appendChild(newTrayItem);


    /*
    //$selectedElement.innerHTML = "<span class=brand>" + beverage[0] + "</span>" + " " + beverage[1] + " " + "<span class=price>" + beverage[4] + "kr" + "</span>";
    $selectedElement.className = "trayItem";
    $selectedElement.addEventListener('click', () => {removeFromTray($selectedElement);subAmount2(price);});
    console.log($selectedElement);
    console.log($targetElement);
    $targetElement.appendChild($selectedElement); */
}

