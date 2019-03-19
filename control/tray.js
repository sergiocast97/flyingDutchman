
// TODO: Make dragNdrop available in tablet mode and add "kr" to the prices

// Tray functionality

/**
 * Remove beverage from tray
 * @param beverage Beverage name
 */
function removeFromTray(beverage){
    var ul = document.getElementById("tray");
    ul.removeChild(beverage);
}

/**
 * Add up price of beverage
 * @param beverage Beverage name
 */


function addAmount(price){

    var previousAmount = document.getElementById("amount").innerHTML;
    console.log(previousAmount);
    var totalAmount = +previousAmount + +price;
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
    var price = beverage.lastElementChild.textContent;

    var totalAmount = +previousAmount - +price;
    totalAmount = Math.round(totalAmount * 10)/10;

    document.getElementById("amount").innerHTML = totalAmount;

}

/** These functions are used for Drag n Drop in the menu**/


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


    var newTrayItem = document.getElementById(data);
    newTrayItem.className = "trayItem";

    newTrayItem.addEventListener('click', () => {removeFromTray(newTrayItem);subAmount(newTrayItem)});
    console.log(newTrayItem);

    tray = document.getElementById("tray");
    tray.appendChild(newTrayItem);

    var tray_ul= document.getElementById("trayTempList");
    var tray_li = document.createElement("tray_li");
    tray_li.id = li.id;
    alert(tray_li.id);
    tray_li.innerHTML = li.innerHTML;
    //alert(tray_li.innerHTML);
    tray_li.className = "trayListCopy";
    tray_ul.appendChild(tray_li); //tray_ul save the items in tray as a copy, which can be retrieve after reset the tray


}

function resetTray(){
    var ul = document.getElementById("tray");
    while (ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
    document.getElementById("amount").innerHTML = 0;
}


/**
 * Add beverage to tray by click
 * @param beverage Beverage name

 function addToTray(beverage){

    //here we should get the tray-element instead, have to create it in the menu.HTML
    var ul = document.getElementById("tray");
    var li = document.createElement("li");

    li.id = beverage[3];
    li.innerHTML = "<span class=brand>" + beverage[0] + "</span>" + " " + beverage[1] + " " + "<span class=price id='price'>" + beverage[4] + "</span>";
    li.className = "trayItem";
    li.addEventListener('click', () => {removeFromTray(li);subAmount(beverage[4])});
    //ul.value = "";
    ul.appendChild(li);

};
 */
