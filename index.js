/* OOPS OVERLAY */
function overlayOn(){
  var instagramBut = document.getElementById("instagram"),
      twitterBut = document.getElementById("twitter"),
      youtubeBut = document.getElementById("youtube"),
      twitchBut = document.getElementById("twitch"),
      overlay = document.getElementById("overlay"),
      messageBox = document.getElementById("oopsMessage");

  instagramBut.addEventListener("click",function() {
      overlay.style.display = "block",
      messageBox.style.border = "5px solid purple";
  }) 
  twitterBut.addEventListener("click",function() {
    overlay.style.display = "block",
    messageBox.style.border = "5px solid dodgerblue";
})   
youtubeBut.addEventListener("click",function() {
  overlay.style.display = "block",
  messageBox.style.border = "5px solid red";
})   
twitchBut.addEventListener("click",function() {
  overlay.style.display = "block",
  messageBox.style.border = "5px solid rebeccapurple";
})   
}

function overlayOff() {
  document.getElementById("overlay").style.display = "none";
}

/* HOME BANNER */

function header() {
    document.querySelector(".headerTxt").style.transform = "translateX(0vw)";
    document.querySelector(".skillset").style.transform = "translateX(0px)";
    // console.log("hi");
}

/* ACCORDION MENU IN FAQ */
var accmenu = document.getElementsByClassName("question");
var i;

for (i = 0; i < accmenu.length; i++) {
  accmenu[i].addEventListener("click", function() {
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/* GO TO TOP BUTTON */
window.onscroll = function(){scrolled()};

function scrolled() {
  if (document.documentElement.scrollTop > 10 ){
    document.getElementById("topButton").style.display = "block";
  } else {
    document.getElementById("topButton").style.display = "none";
  }
}

function gotoTop() {
  document.documentElement.scrollTop = 0;
}

