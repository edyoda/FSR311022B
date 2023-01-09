var correctAns = []
function checkResult(){
    var selectedOptions = $('input[type=radio]:checked')
    var score = 0
    for(var i=0;i<selectedOptions.length;i++){
        if(selectedOptions[i].value == correctAns[i]){
            score += 1
        }
    }
    $('.score').text(score)
}
$(document).ready(function(){
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", function(res){
        for(var i=0;i<res.length;i++){
            correctAns.push(res[i].answer)
        }
        for(var i=0;i<res.length;i++){
            var questionDiv = 
            `
                <div class="question">
                    <h3>Q${res[i].id}. ${res[i].question} </h3>
            `
            for(var j=0;j<res[i].options.length;j++){
                questionDiv += 
                `
                        <div class="options">
                            <label class="option">
                                <input type="radio" name="q${res[i].id}" value="${j+1}">
                                <span>${res[i].options[j]}</span>
                            </label>
                        </div>
                    </div>
                `
            }
            questionDiv += `<hr class="line">`
            $('.quiz').append(questionDiv)
        }
        $('.quiz').append(`
            <div class="button-wrapper">
                <button class="btn" onclick = "checkResult(${correctAns})">Submit</button>
            </div>
        `)
    })
})