// --- 1. THE CLICK EFFECTS ENGINE ---
document.addEventListener("click", (event) => {
  const boom = document.createElement("div");
  boom.innerText = "💥 Boom!";
  boom.style.position = "absolute";
  boom.style.left = event.clientX + "px";
  boom.style.top = event.clientY + "px";
  boom.style.color = "orange"; 
  boom.style.fontSize = "30px";
  boom.style.fontWeight = "bold";
  boom.style.transition = "0.5s";
  boom.style.pointerEvents = "none";
  
  document.body.appendChild(boom);

  setTimeout(() => {
    boom.style.opacity = "0";
    boom.style.transform = "scale(2)";
  }, 10);

  setTimeout(() => boom.remove(), 600);
});

// --- 2. NUMBER GUESSING SYSTEM ---
function checkNumber() {
  const num = document.getElementById("numInput").value;
  const messageElement = document.getElementById("numberMessage");
  
  if (num === "") {
    messageElement.textContent = "Please enter a number first!";
  } else if (parseInt(num) === 7) {
    messageElement.textContent = "🎉 You found the lucky number 7!";
    window.open('https://codepen.dev', '_blank');
  } else {
    messageElement.textContent = "You entered: " + num + ". Try entering the number 7!";
  }
}

// --- 3. EMAIL SUBMISSION POPUP ---
function handleEmailSubmit(event) {
  event.preventDefault(); 
  const email = document.getElementById("emailInput").value;
  alert("Success! (Don't worry, your email '" + email + "' wasn't actually saved anywhere!)");
}

// --- 4. CONNECTING EVERYTHING SECURELY ---
document.addEventListener("DOMContentLoaded", () => {
  const numBtn = document.getElementById("submitNumBtn");
  const emailForm = document.getElementById("emailForm");

  if (numBtn) {
    numBtn.addEventListener("click", checkNumber);
  }
  if (emailForm) {
    emailForm.addEventListener("submit", handleEmailSubmit);
  }
});
