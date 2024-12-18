function fade(id) {
  const sections = ['about', 'education', 'experience', 'skills'];
  const currentVisibleDiv = sections.find((el) => !document.getElementById(el).hidden); 
  document.getElementById(currentVisibleDiv).animation= "fade-out 0.3s forwards";
  document.getElementById(currentVisibleDiv).hidden=true;
  window.scrollTo(0, 0);
  document.getElementById(id).hidden=false
  document.getElementById(id).style.animation = "fade-in 0.5s forwards";

}
function hide(id, par){
    div = document.getElementById(id);
    div.hidden = !div.hidden
    if(div.hidden){par.innerHTML = "<u>"+par.innerText.replace("hide","show")+"</u>";}
    if(!div.hidden){par.innerHTML = "<u>"+par.innerText.replace("show","hide")+"</u>";}

}
function scrooll(id){
    // Find the target element by ID
    const element = document.getElementById(id);
    
    // Scroll the page to the target element with an offset
    if (element) {
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - 175; // Adjust the offset as needed

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
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
let slideIndex0 = 0;
let slideIndex1 = 0;
function showSlides(id) {
    if(id=="about-slides"){slideIndex=slideIndex0;}
    if(id=="exp-slides"){slideIndex=slideIndex1;}
    const slides = document.getElementsByClassName(id);
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex - 1].style.display = "block";

    if(id=="about-slides"){slideIndex0=slideIndex;}
    if(id=="exp-slides"){slideIndex1=slideIndex;}
}
function changeSlide(n,id) {
    if(id=="about-slides"){slideIndex=slideIndex0;}
    if(id=="exp-slides"){slideIndex=slideIndex1;}
    slideIndex += n;
    const slides = document.getElementsByClassName(id);
    if (slideIndex > slides.length) {slideIndex = 1}    
    if (slideIndex < 1) {slideIndex = slides.length}    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex - 1].style.display = "block";  
    if(id=="about-slides"){slideIndex0=slideIndex;}
    if(id=="exp-slides"){slideIndex1=slideIndex;}
}
showSlides("about-slides");
showSlides("exp-slides")
//-------------------------------------------------Invert Color-----------------------------------------------------------
function darkmode() {
    // Set up color properties to iterate through
    const colorProperties = ['color', 'background-color'];

    // Get all elements in the document
    const elements = document.querySelectorAll('*');

    // Iterate through every element
    elements.forEach(element => {
        colorProperties.forEach(prop => {
            // Get the current color property value from CSS
            const currentColor = window.getComputedStyle(element).getPropertyValue(prop);

            // If the color is transparent or not a valid color, continue
            if (!currentColor || currentColor === 'transparent') return;

            // Try to parse the color using regular expressions for RGB and RGBA
            const rgbMatch = currentColor.match(/^rgba?\((\d+), (\d+), (\d+)/);

            if (rgbMatch) {
                // Extract the RGB components from the match
                const r = parseInt(rgbMatch[1]);
                const g = parseInt(rgbMatch[2]);
                const b = parseInt(rgbMatch[3]);

                // Invert each color component
                const invertedColor = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;

                // Set the inverted color back to the element's inline style (only for the current color property)
                element.style.setProperty(prop, invertedColor);
            }
        });
    });
}
