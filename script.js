// Selecting DOM elements
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");

// Function to generate a random color
const randomColor = () => {
  const hexCode = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hexCode[Math.floor(Math.random() * 16)];
  }
  return color;
};

// Variable to store the interval ID
let intervalId;

// Function to change background color
const changeBgColor = () => {
  document.body.style.backgroundColor = randomColor();
};

// Function to start color change
const startColorChange = () => {
  // Check if color change is already in progress
  //a good practice to make your code more optimal.
  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 80);
  }
};

// Function to stop color change
const stopColorChange = () => {
  // Check if color change is in progress
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null; // Reset interval ID because we are assinging value in it multiple time , so its better to  reset the value of refrence variable , when it is not in use .
    // document.body.style.backgroundColor = "#262222"; // Reset background color
  }
};

// Event listener for start button
startButton.addEventListener("click", startColorChange);

// Event listener for stop button
stopButton.addEventListener("click", stopColorChange);
