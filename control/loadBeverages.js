
// TODO; More load functions for different beverages and filter duplicate entries.

/**
 * Load Ciders
 */
function loadCider(){

    var all = allBeverages();
    var cider = [];


    for (i = 0; i < all.length; i++) {
        if (all[i].includes("Cider")) {
            cider.push(all[i]);
        }
    }
    cider = cider.slice(1, 12);
    cider.sort();
    return cider;
}

/**
 * Load Stouts
 */
function loadStout(){

    var all = allBeverages();
    var stout = [];


    for (i = 0; i < all.length; i++) {
        if (all[i].includes("\u00c3\u2013l, Porter och Stout")) {
            stout.push(all[i]);

        }
    }
    stout = stout.slice(20, 37);
    stout.sort();

    return stout;
}

/**
 * Load Ale
 */
function loadAle(){

    var all = allBeverages();
    var ale = [];


    for (i = 0; i < all.length; i++) {
        if (all[i].includes("\u00c3\u2013l, Ale")) {
            ale.push(all[i]);
        }
    }
    ale  = ale.slice(20, 37);
    ale.sort();

    return ale;
}

/**
 * Load Lager
 */
function loadLager(){

    var all = allBeverages();
    var lager = [];


    for (i = 0; i < all.length; i++) {
        if (all[i].includes("\u00c3\u2013l, Ljus lager")) {
            lager.push(all[i]);
        }
    }
    lager  = lager.slice(20, 37);
    lager.sort();

    return lager;
}

/**
 * Load Red Wine
 */
function loadRedWine() {

    var all = allBeverages();
    var redWine = [];


    for (i = 0; i < all.length; i++) {
        if (all[i].includes("R\u00c3\u00b6tt vin")) {
            redWine.push(all[i]);
        }
    }

    redWine  = redWine.slice(20, 30);
    redWine.sort();

    return redWine;
}

/**
 * Load White Wine
 */
function loadWhiteWine() {

    var all = allBeverages();
    var whiteWine = [];


    for (i = 0; i < all.length; i++) {
        if (all[i].includes("Vitt vin")) {
            whiteWine.push(all[i]);
        }
    }


    whiteWine  = whiteWine.slice(0, 10);
    whiteWine.sort();

    return whiteWine;
}

/**
 * Load Rose Wine
 */
function loadRoseWine() {

    var all = allBeverages();
    var roseWine = [];


    for (i = 0; i < all.length; i++) {
        if (all[i].includes("Ros\u00c3\u00a9vin")) {
            roseWine.push(all[i]);
        }
    }

    roseWine  = roseWine.slice(20, 30);
    roseWine.sort();

    return roseWine;
}

/**
 * Load Spirits
 */
function loadWhiskey() {

    var all = allBeverages();
    var whiskey = [];


    for (i = 0; i < all.length; i++) {
        if (all[i].includes("Whisky, Malt")) {
            whiskey.push(all[i]);
        }
    }

    whiskey  = whiskey.slice(10, 17);
    whiskey.sort();

    return whiskey;
}