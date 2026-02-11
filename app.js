// setInterval() 
// setTimeout() 

// clearInterval()
// clearTimeout()


// setInterval(function () {
//     document.writeln("hello world <br>")
// }, 1000)

// setTimeout(function () {
//     console.log("hello world")
// }, 3000)


// var num = 0
// var interval = setInterval(function () {
//     num++
//     if(num == 5){
//         clearInterval(interval)
//     }
//     document.writeln(num + "<br>")
// }, 1000)



var jsMsec = 0
var jsSec = 0
var jsMin = 0

var htmlMsec = document.getElementById('msec')
var htmlSec = document.getElementById('sec')
var htmlMin = document.getElementById('min')

var interval;

function start() {
    interval = setInterval(function () {
        jsMsec++
        htmlMsec.innerHTML = jsMsec
        if (jsMsec >= 100) {
            jsSec++
            htmlSec.innerHTML = jsSec
            jsMsec = 0
        }
        else if (jsSec >= 59) {
            jsMin++
            htmlMin.innerHTML = jsMin
            jsSec = 0
        }
    }, 10)

    document.getElementById('btn').disabled = true

}


function stop() {
    clearInterval(interval)
    document.getElementById('btn').disabled = false
}

function reset() {
    clearInterval(interval)
    document.getElementById('btn').disabled = false
    jsMin = 0
    jsMsec = 0
    jsSec = 0
    htmlMin.innerHTML = jsMin
    htmlSec.innerHTML = jsSec
    htmlMsec.innerHTML = jsMsec
}