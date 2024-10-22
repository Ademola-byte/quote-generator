quote = ["life is a long lesson in humility", "life is like riding a bicycle. to keep your balance, you must keep moving", "the biggest adventure you can ever take is to live the life of your dreams", "If you own this story you get to write the ending", "The longer i live the most beautiful life becomes", "the most important thing is to enjoy your life-to be happy", "to succed in life, you need three things: a wishbone, a backbone and a funnybone", "he who has a why to live for can bear almost any how.", "the most wasted of all days is one without laughter"];

function quoteGenerator(){
    const randomIndex = Math.floor(Math.random() * quote.length);
    const randomQuote = quote[randomIndex]
    document.getElementById("quote").textContent = randomQuote


}