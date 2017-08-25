//defined functions here

function getIt() {
    $('p').on('click', function() {
        alert("Hey!")
    })
}

function frameIt() {
    $('img').on('load', function() {
        $('img').addClass("tasty")
    })
}

$(document).ready(function(){

    getIt()
    frameIt()
});
