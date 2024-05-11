$(document).ready(function() {
    $(".move").draggable({ revert: "invalid" });

    $(".target1").droppable({
        drop: function(event, ui) {
            if (ui.draggable.hasClass("pineapple")) {
                alert("You Win!");
            }
        }
    });

    $(".target2").droppable({
        drop: function(event, ui) {
            if (ui.draggable.hasClass("pineapple")) {
                alert("You Lose!");
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const goHomeButton = document.getElementById('goHomeButton');

    goHomeButton.addEventListener('click', function() {
        window.location.href = 'pineapplefinal.html'; // Corrected file extension
    });
});






  
