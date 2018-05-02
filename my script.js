/* draggble texts */
var display;
$( function() {
  $( "#draggableLaptopComputerText" ).draggable( {
    revert: true
  });
});

$( function() {
  $( "#draggableStaplerText" ).draggable( {
    revert: true
  });
});

$( function() {
  $( "#draggablePaperClipText" ).draggable( {
    revert: true
  });
});

$( function() {
  $( "#draggableDiaryText" ).draggable( {
    revert: true
  });
});

$( function() {
  $( "#draggableHighlighterText" ).draggable( {
    revert: true
  });
});

$( function() {
  $( "#draggableFolderText" ).draggable( {
    revert: true
  });
});

$( function() {
  $( "#draggablePunchText" ).draggable( {
    revert: true
  });
});

$( function() {
  $( "#draggableNotepadText" ).draggable( {
    revert: true
  });
});


// jQuery that allows elements to be dropped
$( function() {
$( "#droppableStaplerPicture" ).droppable( {
  // we specify what happens when something is dropped
 // https://api.jqueryui.com/droppable/#event-drop
  drop: function (event, ui) {
    // store the ID of the source element that was dropped
    var id = ui.draggable.attr("id");
    // make sure it's the correct corresponding text
    if (id === 'draggableStaplerText') {
      // count correct number
      increaseNumberCorrect();
      // hide the stapler picture
      $(this).hide();
      // hide the stapler text
      $("#draggableStaplerText").hide();
    }
  }
});
});
//
$( function() {
$( "#draggableLaptopComputerPicture" ).droppable( {
  drop: function (event, ui) {
    var id = ui.draggable.attr("id");
    if (id === 'draggableLaptopComputerText') {
      increaseNumberCorrect();
      $(this).hide();
      $("#draggableLaptopComputerText").hide();
    }
  }
});
});

$( function() {
$( "#draggablePaperClipPicture" ).droppable( {
  drop: function (event, ui) {
    var id = ui.draggable.attr("id");
    if (id === 'draggablePaperClipText') {
      increaseNumberCorrect();
      $(this).hide();
      $("#draggablePaperClipText").hide();
    }
  }
});
});

$( function() {
$( "#draggableDiaryPicture" ).droppable( {
  drop: function (event, ui) {
    var id = ui.draggable.attr("id");
    if (id === 'draggableDiaryText') {
      increaseNumberCorrect();
      $(this).hide();
      $("#draggableDiaryText").hide();
    }
  }
});
});

$( function() {
$( "#draggableHighlighterPicture" ).droppable( {
  drop: function (event, ui) {
    var id = ui.draggable.attr("id");
    if (id === 'draggableHighlighterText') {
      increaseNumberCorrect();
      $(this).hide();
      $("#draggableHighlighterText").hide();
    }
  }
});
});

$( function() {
$( "#draggableFolderPicture" ).droppable( {
  drop: function (event, ui) {
    var id = ui.draggable.attr("id");
    if (id === 'draggableFolderText') {
      increaseNumberCorrect();
      $(this).hide();
      $("#draggableFolderText").hide();
    }
  }
});
});

$( function() {
$( "#draggablePunchPicture" ).droppable( {
  drop: function (event, ui) {
    var id = ui.draggable.attr("id");
    if (id === 'draggablePunchText') {
      increaseNumberCorrect();
      $(this).hide();
      $("#draggablePunchText").hide();
    }
  }
});
});

$( function() {
$( "#draggableNotepadPicture" ).droppable( {
  drop: function (event, ui) {
    var id = ui.draggable.attr("id");
    if (id === 'draggableNotepadText'){
      increaseNumberCorrect();
      $(this).hide();
      $("#draggableNotepadText").hide();
    }
  }
});
});

//correct answers
var numberCorrect = 0;
function increaseNumberCorrect (){
    numberCorrect++;
    if (numberCorrect == 8){
        setCookie ("bestTime", display.textContent);
        console.log (getCookie("bestTime"));


        var r = confirm("Congratulation! You finished the game!");
        if (r == true){
          window.open("Homepage.html");
    }

  }
 }

 function setCookie(name,value){
  var expires = "; expires=" + Date.now() + 100000;
  document.cookie = name + "=" + (value || "") + expires+ "; path=/";
}

 function getCookie(name){
   var nameEQ = name + "=";
   var ca = document.cookie.split(';');
   for(var i=0; i< ca.length ; i++){
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if(c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
   }
   return null;
 }

 function eraseCookie(name){
   document.cookie = name+ '=; Max-Age=-99999999;';
 }

//Timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    document.getElementById("lastTime").innerHTML = getCookie("bestTime");
    var fiveMinutes = 60 * 2;
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
