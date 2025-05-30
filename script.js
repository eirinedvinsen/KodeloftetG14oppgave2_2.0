function myFunction() {
    var x = document.getElementById("myTopNav");
    if (x.className === "navigationList") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 