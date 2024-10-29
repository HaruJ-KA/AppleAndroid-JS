// document.getElementById("some-id").style; //Acesses CSS rule for element
// document.getElementById("some-id").style.border = "2px solid black";

// document.getElementById("some-image").src = "images/pic.jpg"; // Changes Image

// document.getElementById("some-id").href = "https//link.com"; //Changes Hyperlink

document.getElementById("android").addEventListener("click", changeToAndroid);

function changeToAndroid() {
  document.getElementById("logo").src = "Images/Android-Logo.jpg";
  document.getElementById("explore").innerHTML = "Android Home";
  document.getElementById("explore").style.background = "#a4c93b";
  document.getElementById("exploreLink").href = "https://www.android.com";
  document.getElementById("theHTML").style.background = "#a4c93b";
  document.getElementById("theBody").style.fontFamily =
    " 'Roboto', sans-serif ";
  document.getElementById("android").classList.add("redborder");
  document.getElementById("apple").classList.remove("redborder");
  document.getElementById("android").classList.add("active");
  document.getElementById("apple").classList.remove("active");
}

document.getElementById("apple").addEventListener("click", changeToApple);
function changeToApple() {
  document.getElementById("logo").src = "Images/Apple-Logo.jpg";
  document.getElementById("explore").innerHTML = "Apple Home";
  document.getElementById("explore").style.background = "#b6bcca";
  document.getElementById("exploreLink").href = "https://www.apple.com";
  document.getElementById("theHTML").style.background = "#b6bcca";
  document.getElementById("theBody").style.fontFamily = `"Brygada 1918", serif`;
  document.getElementById("apple").classList.add("redborder");
  document.getElementById("android").classList.remove("redborder");
  document.getElementById("apple").classList.add("active");
  document.getElementById("android").classList.remove("active");
}
