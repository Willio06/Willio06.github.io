function fade(id) {
  const sections = ['about', 'education', 'experience', 'skills'];
  const currentVisibleDiv = sections.find((el) => !document.getElementById(el).hidden); 
  document.getElementById(currentVisibleDiv).animation= "fade-out 0.3s forwards";
  document.getElementById(currentVisibleDiv).hidden=true;
  document.getElementById(id).hidden=false
  document.getElementById(id).style.animation = "fade-in 0.5s forwards";

}
//----------------------------------------------------------------------AGE----------------------------------------------------------
function calculateExactAge(birthDate) {
  const today = new Date(); // Get current date
  const birth = new Date(birthDate); // Convert birth date to Date object
  
  let years = today.getFullYear() - birth.getFullYear(); // Calculate year difference
  let months = today.getMonth() - birth.getMonth(); // Calculate month difference
  let days = today.getDate() - birth.getDate(); // Calculate day difference

  // Adjust for negative days (when current day < birth day in the same month)
  if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0); // Last day of the previous month
      days += lastMonth.getDate();
  }

  // Adjust for negative months (when current month < birth month in the same year)
  if (months < 0) {
      years--;
      months += 12;
  }

  return `${years} years, ${months} months, and ${days} days`;
}
document.getElementById("ageCalc").innerText = calculateExactAge("2004-02-06");
//-------------------------------------------------------------------SLide show---------------------------------------------------------------------
let slideIndex = 0;
function showSlides() {
    const slides = document.getElementsByClassName("about-slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";  
}
function changeSlide(n) {
    slideIndex += n;
    const slides = document.getElementsByClassName("about-slides");
    if (slideIndex > slides.length) {slideIndex = 1}    
    if (slideIndex < 1) {slideIndex = slides.length}    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
}
showSlides();