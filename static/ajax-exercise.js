"use strict";


// PART 1: SHOW A FORTUNE

function showFortune(result) {
    var fortuneText = result;
    $('#fortune-text').html(fortuneText);
    // TODO: get the fortune and show it in the #fortune-text div

}
function getFortune(evt) {
    $.get('/fortune', showFortune);
}

$('#get-fortune-button').on('click', getFortune);





// PART 2: SHOW WEATHER

function showWeather(results) {
    evt.preventDefault();

    var url = "/weather?zipcode=" + $("#zipcode-field").val();

    // TODO: request weather with that URL and show the forecast in #weather-info
}
function getWeather(evt){
    $.get('/weather.json')
}
$("#weather-form").on('submit', getWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


