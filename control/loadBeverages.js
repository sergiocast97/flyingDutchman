
// TODO; More load functions for different beverages and filter duplicate entries.

// Ciders

function loadCider(){

    var all = allBeverages();
    var cider = [];


    for (i = 0; i < all.length; i++) {
        if (all[i].includes("Cider")) {
            cider.push(all[i][0]);
        }
    }
    cider.sort();
    return cider;
}

// Beers

function loadStout(){

    var all = allBeverages();
    var stout = [];


    for (i = 0; i < all.length; i++) {
        if (all[i].includes("\u00c3\u2013l, Porter och Stout")) {
            stout.push(all[i][0]);
        }
    }

    stout = stout.slice(20, 37);
    stout.sort();

    return stout;
}

function loadAle(){

    var all = allBeverages();
    var ale = [];


    for (i = 0; i < all.length; i++) {
        if (all[i].includes("\u00c3\u2013l, Ale")) {
            ale.push(all[i][0]);
        }
    }
    ale  = ale.slice(20, 37);
    ale.sort();

    return ale;
}

function loadLager(){

    var all = allBeverages();
    var lager = [];


    for (i = 0; i < all.length; i++) {
        if (all[i].includes("\u00c3\u2013l, Ljus lager")) {
            lager.push(all[i][0]);
        }
    }
    lager  = lager.slice(20, 37);
    lager.sort();

    return lager;
}

//Wines


function loadRedWine() {

    var all = allBeverages();
    var redWine = [];


    for (i = 0; i < all.length; i++) {
        if (all[i].includes("R\u00c3\u00b6tt vin")) {
            redWine.push(all[i][0]);
        }
    }

    redWine  = redWine.slice(20, 37);
    redWine.sort();

    return redWine;
}

function loadWhiteWine() {

    var all = allBeverages();
    var whiteWine = [];


    for (i = 0; i < all.length; i++) {
        if (all[i].includes("Vitt vin")) {
            whiteWine.push(all[i][0]);
        }
    }


    whiteWine  = whiteWine.slice(0, 10);
    window.sort();

    return whiteWine;
}

function loadRoseWine() {

    var all = allBeverages();
    var roseWine = [];


    for (i = 0; i < all.length; i++) {
        if (all[i].includes("Ros\u00c3\u00a9vin")) {
            roseWine.push(all[i][0]);
        }
    }

    roseWine  = roseWine.slice(20, 37);
    roseWine.sort();

    return roseWine;
}

// Spirits

function loadWhiskey() {

    var all = allBeverages();
    var whiskey = [];


    for (i = 0; i < all.length; i++) {
        if (all[i].includes("Whisky, Malt")) {
            whiskey.push(all[i][0]);
        }
    }

    whiskey  = whiskey.slice(20, 37);
    whiskey.sort();

    return whiskey;
}