//toggle var
var fade_state = true;
//on btn click
function fade() {
  //get the button and div
  let div = document.getElementById("frontpage");
  let div2 = document.getElementById("page2")
  let btn = document.getElementById("buttonfront");
  //if faded in or out
  if (fade_state == true) {
    //trigers animation
    div.style.animation = "fade-out 0.3s forwards";
    div.hidden = true
    div2.hidden=false
    div2.style.animation = "fade-in 0.5s forwards";
    
    //sets the text
    btn.innerHTML = "fade-in";
    //sets fade_state
    fade_state = false;
  } else if (fade_state == false) {
    //trigers animation
    div.hidden=false
    div.style.animation = "fade-in 0.5s forwards";
    div2.style.animation = "fade-out 0.3s forwards";
    div2.hidden = true

    
    //sets the text
    btn.innerHTML = "fade-out";
    //sets fade_state
    fade_state = true;
  }
}