function changeText() {
    const text = document.getElementById("dynamicText");
    text.textContent = "🎉 The text has been changed dynamically!";
    text.classList.toggle("highlight");
  }
  
  function toggleBox() {
    const container = document.getElementById("boxContainer");
    const existingBox = document.getElementById("magicBox");
  
    if (existingBox) {
      container.removeChild(existingBox);
    } else {
      const box = document.createElement("div");
      box.id = "magicBox";
      box.textContent = "I'm a new box!";
      box.style.background = "lightgreen";
      box.style.padding = "10px";
      box.style.marginTop = "10px";
      container.appendChild(box);
    }
  }
  