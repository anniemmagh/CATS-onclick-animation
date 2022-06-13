document.addEventListener("click", (e) => {
    //create span for cat
    var cat = document.createElement("span");
    cat.classList.add("cat");
    //set position of cat to mouse pointer's position
    cat.style.left = e.offsetX + "px";
    cat.style.top = e.offsetY + "px";
    //select random number between 20 and 100
    var size = Math.random() * (100 - 20 + 1) + 20;
    //set width and height
    cat.style.width = size + "px";
    cat.style.height = size + "px";
    document.body.appendChild(cat);
    setTimeout(() => {
      cat.remove();
    }, 1000);
  });