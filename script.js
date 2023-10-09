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
        
"<b>Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.And the only way to do great work is to love what you do.</b>",
"<b>Innovation distinguishes between a leader and a follower.</b>",
"<b>The people who are crazy enough to think they can change the world are the ones who do.</b>",
"<b>Stay hungry, stay foolish.</b>",
"<b>Design is not just what it looks like and feels like. Design is how it works.</b>",
"<b>Your time is limited, don't waste it living someone else's life.</b>",
"<b>The people who made the Mac are sort of on the edge of building the spaceship, and if you're not, if the people who are making it and thinking about it every day are not, then it won't happen.</b>",
"<b>Remembering that you are going to die is the best way I know to avoid the trap of thinking you have something to lose. You are already naked. There is no reason not to follow your heart.</b>",
"<b>Quality is more important than quantity. One home run is much better than two doubles.</b>",
"<b>The people don't know what they want until you show it to them.</b>",
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

