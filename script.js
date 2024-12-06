function fade(id) {
  const sections = ['about', 'education', 'experience', 'skills'];
  const currentVisibleDiv = sections.find((el) => !document.getElementById(el).hidden); 
  document.getElementById(currentVisibleDiv).animation= "fade-out 0.3s forwards";
  document.getElementById(currentVisibleDiv).hidden=true;
  document.getElementById(id).hidden=false
  document.getElementById(id).style.animation = "fade-in 0.5s forwards";

}