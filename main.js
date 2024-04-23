function imageSlider(anything) {
    document.querySelector(".mn").src = anything;
  }
  function colorChange(color) {
    const sec = document.querySelector(".sec");
    sec.style.background = color;
    const navMenu = document.querySelector(".navigation");
    navMenu.style.background = color;
  }