
var contentHead = document.querySelectorAll(".tabs_menu a");
var content = document.querySelectorAll(".tab");

    for (var i = 0; i < contentHead.length; i++) {
      contentHead[i].addEventListener("click", function(event){
        for(var j = 0; j < contentHead.length; j++) {
          if (contentHead[j].classList.contains("active")) {
            contentHead[j].classList.remove("active")
          }
        }

        for (var h = 0; h < content.length; h++) {
          if (content[h].classList.contains("opened")) {
            content[h].classList.remove ("opened");
          } else {
            content[h].classList.add ("opened");
          }

        }

        event.preventDefault();
        console.log("click on btn");
        event.target.classList.toggle("active");
      });
    }
