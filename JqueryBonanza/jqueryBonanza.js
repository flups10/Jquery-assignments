fadeBtn = $('#fade-in-btn');
fadeText = $('#fade-in-text');
appendBtn = $('#append-btn');
appendText = $('#append-text');


fadeBtn.click(function(){
    if (fadeText.attr('style') !== 'display: none;'){
        fadeText.fadeOut(2000, () => fadeBtn.text('Fade in'))
    } else {
        fadeText.fadeIn(2000, () => fadeBtn.html('Fade Out'))
    }
})

appendBtn.click(function(){
    appendText.append(`<p>I am new appended text <button class='hide-append' >hide</button></p>`)
    $('.hide-append').click(()=> $('.hide-append').parent().hide())
})

