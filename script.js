let buttonMessages = ["No", "Are you Sure?", "Really Sure?", "Are you positive?", "Pookie please", " Just think about it", "If you say no, I'll be very sad", "I'll be very very sad", "I'll be very very very sad", "I'll be very very very very sad", "Ok fine, I'll stop asking", "just kidding, PLEASE SAY YES", "Click the Green Button..."];
let headmessage = ["Do You Love Me?", "Wanna Cuddle", "Come Here, meet me", "Wanna F*ck", "Wanna go out with me?", "Will you Marry me?"];
let headmessageindex = 0;
let messageIndex = 0;

function changehead(){
  const headmess = document.getElementById("head1");

  headmessageindex = Math.floor(Math.random() * 6);
  console.log(headmessageindex)
  headmess.innerHTML = headmessage[headmessageindex]; 
}
function changeGif() {
  // Target the iframe by its ID and change the src to a new GIF
  const gifFrame = document.getElementById('gifFrame');
  gifFrame.src = "https://giphy.com/embed/0OgdJVNjbcIifqSb7U"; // Your provided GIF URL
}

function growButton() {
  const button1 = document.getElementById('button1');
  
  // Increase button size on each click
  let currentFontSize = parseInt(window.getComputedStyle(button1).fontSize);
  button1.style.fontSize = (currentFontSize + 2) + 'px';
  button1.style.padding = (parseInt(window.getComputedStyle(button1).paddingTop) + 5) + 'px ' +
                          (parseInt(window.getComputedStyle(button1).paddingRight) + 10) + 'px';
  
  // Change button text to the next message
  messageIndex = (messageIndex + 1) % buttonMessages.length; // Cycle through messages
  button1.innerText = buttonMessages[messageIndex];
}
