var myDiv = document.getElementById("myDiv");

myDiv.addEventListener("click", toggle);

function toggle() {
  if (myDiv.style.backgroundColor == "red")
      myDiv.style.backgroundColor = "blue"
  else
      myDiv.style.backgroundColor = "red" 
}