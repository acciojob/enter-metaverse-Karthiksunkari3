//your JS code here. If required.
// Get references to the <p> tag and the button
const statusParagraph = document.getElementById('status');
const enterButton = document.getElementById('enterBtn');

// Add a click event listener to the button
enterButton.addEventListener('click', function() {
  // Update the content of the <p> tag
  statusParagraph.textContent = 'Entered Metaverse';

  // Create an <h1> element
  const heading = document.createElement('h1');
  heading.textContent = statusParagraph.textContent;

  // Replace the <p> tag with the <h1> element
  statusParagraph.parentNode.replaceChild(heading, statusParagraph);
});
