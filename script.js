// document.addEventListener("DOMContentLoaded", function () {
//     const quoteButton = document.getElementById("show-quote");
//     const quoteDisplay = document.getElementById("quote");

//     quoteButton.addEventListener("click", function () {
//         quoteDisplay.innerHTML = "Innovation distinguishes between a leader and a follower.";
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    const quoteButton = document.getElementById("show-quote");
    const quoteDisplay = document.getElementById("quote");

    // Create an array of quotes
    const quotes = [
        "Innovation distinguishes between a leader and a follower.",
        "The people who are crazy enough to think they can change the world are the ones who do.",
        "Your time is limited, don't waste it living someone else's life.",
        // Add more quotes here
    ];

    let currentQuoteIndex = 0; // Initialize the index to the first quote

    quoteButton.addEventListener("click", function () {
        // Display the current quote
        quoteDisplay.innerHTML = quotes[currentQuoteIndex];

        // Increment the index to show the next quote
        currentQuoteIndex++;

        // Reset the index if it exceeds the number of quotes
        if (currentQuoteIndex >= quotes.length) {
            currentQuoteIndex = 0;
        }
    });
});
