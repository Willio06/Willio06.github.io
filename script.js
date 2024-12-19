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
function HSV2RGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0:
            r = v, g = t, b = p;
            break;
        case 1:
            r = q, g = v, b = p;
            break;
        case 2:
            r = p, g = v, b = t;
            break;
        case 3:
            r = p, g = q, b = v;
            break;
        case 4:
            r = t, g = p, b = v;
            break;
        case 5:
            r = v, g = p, b = q;
            break;
    }
    var n = 255;
    return [Math.round(r * n) / n, Math.round(g * n) / n, Math.round(b * n) / n];
}
function rgb2hsv (r, g, b) {
    let rabs, gabs, babs, rr, gg, bb, h, s, v, diff, diffc, percentRoundFn;
    rabs = r / 255;
    gabs = g / 255;
    babs = b / 255;
    v = Math.max(rabs, gabs, babs),
    diff = v - Math.min(rabs, gabs, babs);
    diffc = c => (v - c) / 6 / diff + 1 / 2;
    percentRoundFn = num => Math.round(num * 100) / 100;
    if (diff == 0) {
        h = s = 0;
    } else {
        s = diff / v;
        rr = diffc(rabs);
        gg = diffc(gabs);
        bb = diffc(babs);

        if (rabs === v) {
            h = bb - gg;
        } else if (gabs === v) {
            h = (1 / 3) + rr - bb;
        } else if (babs === v) {
            h = (2 / 3) + gg - rr;
        }
        if (h < 0) {
            h += 1;
        }else if (h > 1) {
            h -= 1;
        }
    }
    return {
        h: Math.round(h * 360),
        s: percentRoundFn(s * 100),
        v: percentRoundFn(v * 100)
    };
}
let darkBool = false
function darkmode(){
    if(!darkBool){
        document.getElementById('thh').innerText="light mode"
        const sep = document.querySelectorAll(".work_sep div")
        sep.forEach((fr) => {
            fr.style.color = "rgb(186, 186, 186)";
            });
        const tocs = document.querySelectorAll(".internal-toc ")
        tocs.forEach((fr) => {
            fr.style.backgroundColor = "rgba(4, 4, 4, 0.5)";
            fr.style.border = "1px solid rgb(127, 127, 127)";
            });
        const fraaams = document.querySelectorAll(".school .fileButton button")
        fraaams.forEach((fr) => {
            fr.style.color = "rgb(186, 186, 186)"
            });

        const frams = document.querySelectorAll(".school .timeperiod")
        frams.forEach((fr) => {
            fr.style.color = "rgb(213, 178, 150)"
            });

        const fram = document.querySelectorAll(".school")
        fram.forEach((fr) => {
            fr.style.backgroundColor = "rgb(0, 0, 0)";
            fr.style.border = "1px solid rgb(34, 34, 34)";
            });
        document.getElementsByClassName("footer-container")[0].style.background = "linear-gradient(145deg, rgb(53,53,53,0.8), rgba(91,72,61,0.8))"
        const btns = document.querySelectorAll(".nav-buttons button")
        btns.forEach((btn) => {
            btn.style.color = "rgb(186,186,186)"
            });
        document.getElementsByTagName("h1")[0].style.textShadow = "4px 2px 2px rgba(185, 185, 185 , 0.5)"
        document.getElementsByTagName("h1")[0].style.color = " rgb(176, 176, 176)"
        document.getElementById("grad1").style.backgroundImage = "linear-gradient(to top, rgba(255,0,0,0), rgb(0, 0, 0))"
        document.getElementById("grad2").style.backgroundImage = "radial-gradient(farthest-corner at 50% 45%, rgb(0, 0, 0)20%, rgba(255,0,0,0)90%)"
        document.body.style.backgroundImage = "url('img/back_inverted.png')"; darkBool=!darkBool;}
    else if(darkBool){
        document.getElementById('thh').innerText="dark mode"
        const sep = document.querySelectorAll(".work_sep div")
        sep.forEach((fr) => {
            fr.style.color = "rgb(69, 69, 69)";
            });

        const tocs = document.querySelectorAll(".internal-toc")
        tocs.forEach((fr) => {
            fr.style.backgroundColor = "rgba(251, 251, 251, 0.5)";
            fr.style.border = "1px solid rgb(128, 128, 128)";
            });
        const fraaams = document.querySelectorAll(".school .fileButton button")
        fraaams.forEach((fr) => {
            fr.style.color = "rgb(69, 69, 69)"
            });

        const frams = document.querySelectorAll(".school .timeperiod")
        frams.forEach((fr) => {
            fr.style.color = "rgb(42, 77, 105)"
            });

        const fram = document.querySelectorAll(".school")
        fram.forEach((fr) => {
            fr.style.backgroundColor = "rgb(255, 255, 255)";
            fr.style.border = "1px solid rgb(221, 221, 221)";
            });
        document.getElementsByClassName("footer-container")[0].style.background = "linear-gradient(145deg, rgb(202,202,202,0.8), rgba(164,183,194,0.8))"
        const btns = document.querySelectorAll(".nav-buttons button")
        btns.forEach((btn) => {
            btn.style.color = "rgb(69,69,69)";
          });
        document.getElementsByTagName("h1")[0].style.color = " rgb(79, 79, 79)"
        document.getElementsByTagName("h1")[0].style.textShadow = "4px 2px 2px rgba(70, 70, 70 , 0.5)"
        document.getElementById("grad1").style.backgroundImage = "linear-gradient(to top, rgba(255,0,0,0), rgb(255, 255, 255))"
        document.getElementById("grad2").style.backgroundImage = "radial-gradient(farthest-corner at 50% 45%, rgba(255,255,255,1)20%, rgba(255,0,0,0)90%)"
        document.body.style.backgroundImage = "url('img/long_back.png')"; darkBool=!darkBool;}
}