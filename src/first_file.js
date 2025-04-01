// Initialize the counter value
let count = 0;

// Select the counter element and the button
const counterElement = document.getElementById('counter');
const button = document.getElementById('incrementBtn');

// Add an event listener to the button
button.addEventListener('click', () => {
  count++; // Increment the counter
  counterElement.textContent = count; // Update the display
});