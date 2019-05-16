/* DESIGN BUCKET LIST */
var headings = ["Write a Comic", "Create an Animated Action Series with After Effects", "Create a Fully Interactive Portfolio Website", "Run My Own Online Course", "Make a Game"]

var bucketlstContent = ["Ever since I was a teenager, I have followed several web comic creators and have always wanted to follow in their steps. As a person with an imagination that runs wild on the daily, I have yet to output my creative energy in this medium. My drawing skills are still lacking, but I'm going to do my best to improve to achieve this lifelong goal.", "I'm a sucker for cartoons, especially action cartoons and anime. Inspired by Monty Oum, the creator of RWBY, I have been drawn to animation and want to take a self teaching route towards this passion, mirroring Monty's actions. After discovering how After Effects works, I want to push the boundaries to see how far this program can go. I believe that it is possible to create a 2D animated action series using motion graphics software (and their counterparts), and am excited to challenge myself through this process.", "In D3 I was introduced to web programming. As someone who emjoys motion, a static portfolio site doesn't seem to satisfy me. While I still have a lot to learn, I one day want to independently program my portfolio website to be completely interactive.", "It's no secret that I love teaching, and try to lend a helping hand whenever I can. While I want to ultimately teach in a college environment, post-secondary can be expensive, and may not be suitable for everyone. That's why I want to create my own online content so I can teach on a global scale.", "While I've only started playing games in my adult years, I have always wanted to be part of the process of making a meaningful game. While I don't expect this to be an independent effort, I still want to contribute to my fullest capacity, and maybe learn a thing or two in the process."]


var bucketHeading = document.getElementById("bucketlistTitle"),
    bucketBody = document.getElementById("bucketlistText");
var TxtNum = 0;

function bucketList() {
  document.getElementById("bucketlistTitle").innerHTML = headings[TxtNum];
  document.getElementById("bucketlistText").innerHTML = bucketlstContent[TxtNum];
}

document.querySelector("#rightBut").addEventListener("click", function() {
      document.getElementById("bucketlistTitle").innerHTML = headings[TxtNum];
      document.getElementById("bucketlistText").innerHTML = bucketlstContent[TxtNum];
      TxtNum = TxtNum+1;
      if(TxtNum == headings.length){
        TxtNum = 0;
      }
      // console.log("next");
  });

  document.querySelector("#leftBut").addEventListener("click", function() {
    document.getElementById("bucketlistTitle").innerHTML = headings[TxtNum];
    document.getElementById("bucketlistText").innerHTML = bucketlstContent[TxtNum];
    TxtNum = TxtNum-1;
    if(TxtNum < 0){
      TxtNum = 4;
    }
    console.log(TxtNum);
})
