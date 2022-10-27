const hours = $('#hours')
const minutes = $('#minutes')
const seconds = $('#seconds')
const reset = $('#reset')
const start = $('#start-button')
const stop = $('#stop')

start.click(timer);

function timer(){

    start.attr('disabled', 'disabled')

    hStart = $('#hourSelector').val()
    mStart = $('#minuteSelector').val()
    sStart = $('#secondSelector').val()
    
    h = $('#hourSelector').val()
    m = $('#minuteSelector').val()
    s = $('#secondSelector').val()

    interval = setInterval(countdown, 1000);
    audio = document.getElementById('alarmSound')
    console.log(audio)

    function updateTimer(s, m, h) {
        if ( s < 10){
            seconds.text('0'+s)
        } else {
            seconds.text(s);
        }
        if ( m < 10){
            minutes.text('0'+m)
        } else {
            minutes.text(m);
        }
        if ( h < 10 && h !== 00){
            hours.text('0'+h)
        } else {
            hours.text(h);
        }
    };

    function countdown(){
        if (s == 00 && m == 00 && h == 00){
            updateTimer(s, m, h)
            clearInterval(interval);
            audio.play()
            start.removeAttr('disabled');

        } else if ( s == 0 && m == 0){
            s = 59
            m = 59
            h--
            updateTimer(s, m, h)
        } else if ( s==0 ){
            s = 59
            m--
            updateTimer(s, m, h)
        } else {
            s--
            updateTimer(s, m, h)
        }
    }

    function res(){
        updateTimer(hStart, mStart, sStart)
        h = hStart;
        m = mStart;
        s = sStart;
    }

    function stopTimer(){
        start.removeAttr('disabled');
        clearInterval(interval);
    }

    stop.click(stopTimer)
    reset.click(res)

}