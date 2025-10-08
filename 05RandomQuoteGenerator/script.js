const quotes = [
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { quote: "The harder you work for something, the greater you'll feel when you achieve it.", author: "Anonymous" },
  { quote: "Dream bigger. Do bigger.", author: "Unknown" },
  { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { quote: "Great things never come from comfort zones.", author: "Anonymous" },
  { quote: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
  { quote: "If you want it, work for it. It's that simple.", author: "Unknown" },
  { quote: "The best time to start was yesterday. The next best time is now.", author: "Unknown" }
];

const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuote");
const tweetBtn = document.getElementById("tweetBtn");

newQuoteBtn.addEventListener("click", () => {
  const random = Math.floor(Math.random() * quotes.length);
  const current = quotes[random];
  quoteText.textContent = `"${current.quote}"`;
  authorText.textContent = `- ${current.author}`;
  quoteText.style.opacity = "0";
  setTimeout(() => {
    quoteText.style.opacity = "1";
  }, 150);
});

tweetBtn.addEventListener("click", () => {
  const tweetText = `${quoteText.textContent} ${authorText.textContent}`;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
  window.open(tweetUrl, "_blank");
});
