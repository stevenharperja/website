console.log('hello worldadwdawdawdaw');
// Check JS is Connected
console.log("👍 JS Connected");

// get all the card
document.querySelectorAll(".card").forEach((item) => {
  // for each item i.e. card, do this
  item.addEventListener("click", (event) => {
    // toggle class on card
    console.log("flipped");
    item.classList.toggle("flipped");
  });
});
