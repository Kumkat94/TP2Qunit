module.exports = function (numeroSecu) {
    //** myPattern = '^[1-2][0-9]{2}[0-1][0-9](2[A-B]|[0-9]{2})[0-9]{3}[0-9]{3}[0-9]{2}$';
    //**var patt = new RegExp(myPattern);
    //**return patt.test(numeroSecu);

    var key = parseInt(numeroSecu.substring(13,15));
    return key==(97 - (parseInt(numeroSecu.substring(0,13)) % 97)) && numeroSecu.length ==15;
}