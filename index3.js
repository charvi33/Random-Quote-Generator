const quotes = [
    "The only way to do great work is to love what you do.",
    "Life is what happens when you're busy making other plans." ,
    "The future belongs to those who believe in the beauty of their dreams." ,
    "It does not matter how slowly you go as long as you do not stop.",
    "In the end, it's not the years in your life that count. It's the life in your years.",
    "The purpose of our lives is to be happy.",
    "Get busy living or get busy dying.",
    "You only live once, but if you do it right, once is enough.",
    "Many of life's failures are people who did not realize how close they were to success when they gave up.",
    "If you want to live a happy life, tie it to a goal, not to people or things." 
]

const bgs = [
    "bg1.jpg", "bg2.jpg", "bg3.jpg", "bg4.jpg", "bg5.jpg", "bg6.webp", 
    "bg7.jpg", "bg8.jpg", "bg9.jpg", "bg10.jpg"
]

const usedIndexes = new Set()
/*Set here is used to make sure that no 2 quotes are generated twice until the end of cycle*/

const quoteTag = document.getElementById("quote")

function generateQuote(){
    if(usedIndexes.size >= quotes.length){
        usedIndexes.clear()
    }
    while(true){
        randomIndex = Math.floor(Math.random()* quotes.length)
        /*math.floor bcos the last index is 9 and length of quote is 10*/
        randombg = Math.floor(Math.random()*quotes.length)

        if(usedIndexes.has(randomIndex)) continue
        const quote = quotes[randomIndex]
        quoteTag.innerHTML = quote
        document.body.style.backgroundImage = `url(${bgs[randombg]})`
        usedIndexes.add(randomIndex)
        break
    }
}
