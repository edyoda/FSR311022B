function getQuotes(quotes){
    var idx = Math.floor(Math.random() * quotes.length)
    var quote = quotes[idx].text
    var author = quotes[idx].author == null ? "Anonymous" : quotes[idx].author
    var block = 
    `
        <div id='quoteDiv'>
            <p id='quote'>${quote}</p>
            <p id='author'><i>${author}</i></p>
        </div>
    `
    $('#main').html(block)
}

$(document).ready(function(){
    $.get("https://type.fit/api/quotes", function(response){
        var quotes = JSON.parse(response)
        getQuotes(quotes)
        $('#btn').click(function(){
            getQuotes(quotes)
        })
    })
})