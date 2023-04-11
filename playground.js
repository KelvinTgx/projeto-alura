window.addEventListener("scroll", function() {
    var footer = document.querySelector("footer");
    var scrollHeight = document.documentElement.scrollHeight;
    var clientHeight = document.documentElement.clientHeight;
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (scrollTop + clientHeight >= scrollHeight) {
      footer.style.bottom = "0";
    } else {
      footer.style.bottom = "-30px";
    }
  });
  