var totalsale = document.getElementById('total');
var moneytendered = document.getElementById('tender');
var form = document.getElementById('myForm');

form.onsubmit = function() {
    var total = totalsale.value;
    var tendered = moneytendered.value;
    var owed = tendered - total;

    var dollhairs = Math.floor(owed);
    var coins = owed - dollhairs;
    var actualchange = Math.round(coins * 100);
    var change = Math.floor(actualchange);

    var message = 'Your change is ' + dollhairs + ' dollars and ' + actualchange + ' cents.';
    output.innerHTML = message;

    var coinchange = [
        { quarters: 25 },
        { dimes: 10 },
        { nickles: 5 },
        { pennies: 1 }
    ];

    var dollars = [
        { fifties: 50 },
        { twenties: 20 },
        { tens: 10 },
        { fives: 5 },
        { ones: 1 }
    ]

    for (var i = 0; i < dollars.length; i++) {
        var currentDollar = dollars[i]; // { fifties: 50 }
        var keysOfTheCurrentDollarObject = Object.keys(currentDollar); // ['fifties']
        var elementName = keysOfTheCurrentDollarObject[0]; // 'fifties'
        var j = dollhairs / currentDollar[elementName]; // number of times the selected variable can go into the change due
        var h = Math.floor(j); // the number of decimals is TOO DAMN HIGH
        var dollhairs = dollhairs - (h * currentDollar[elementName]); // subtracting the "used" change
        document.getElementById(elementName).innerHTML = h; //updating the ammount left to split up
    }
    for (var i = 0; i < coinchange.length; i++) {
        var currentCoin = coinchange[i];
        var keysOfTheCurrentCoinObject = Object.keys(currentCoin);
        var elementName = keysOfTheCurrentCoinObject[0];
        var j = change / currentCoin[elementName];
        var h = Math.floor(j);
        var change = change - (h * currentCoin[elementName]);
        document.getElementById(elementName).innerHTML = h;
    }
    return false;
}
