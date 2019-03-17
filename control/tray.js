// Tray functionality

/**
 * Add beverage to tray
 * @param beverage Beverage name
 */
function addToTray(beverage){

    //here we should get the tray-element instead, have to create it in the menu.HTML
    var ul = document.getElementById("tray");
    var li = document.createElement("li");

    li.id = beverage[3];
    li.innerHTML = "<span class=brand>" + beverage[0] + "</span>" + " " + beverage[1] + " " + "<span class=price>" + beverage[4] + "kr" + "</span>";
    li.className = "trayItem";
    li.addEventListener('click', () => {removeFromTray(li);subAmount(beverage[4])});
    //ul.value = "";
    ul.appendChild(li);

};

/**
 * Remove beverage from tray
 * @param beverage Beverage name
 */
function removeFromTray(beverage){
    var ul = document.getElementById("tray");
    ul.removeChild(beverage)
}

/**
 * Add up price of beverage
 * @param beverage Beverage name
 */
function addAmount(beverage){

    var previousAmount = document.getElementById("amount").innerHTML;
    console.log(previousAmount);
    var totalAmount = +previousAmount + +beverage[4];
    totalAmount = Math.round(totalAmount * 10)/10;

    document.getElementById("amount").innerHTML = totalAmount;
    console.log(totalAmount);

}

/**
 * Substract price from removed beverage
 * @param beverage beverage
 */
function subAmount(beverage){

    var previousAmount = document.getElementById("amount").innerHTML;
    console.log(beverage);
    console.log(previousAmount);
    var totalAmount = +previousAmount - +beverage;
    totalAmount = Math.round(totalAmount * 10)/10;

    document.getElementById("amount").innerHTML = totalAmount;
    console.log(totalAmount);

}

