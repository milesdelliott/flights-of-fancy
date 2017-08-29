let letters = document.getElementsByClassName("letter")

function letterUp(l) {
    l.classList.toggle("letter--up")
}

function formRotation() {
    return ((Math.random()*2)-1)*20
}

function cycleLetter(i, delay, sign, axis, skip = false) {
    if (skip === true) return false
    letters[i].setAttribute("style", "transform: translate"+axis+"("+sign+"1em) rotateZ("+formRotation()+"deg)")
    setTimeout(function(){
        letters[i].setAttribute("style", "transform: translateY(0) translateX(0) rotateZ(0deg)")
        
        }, delay)
}

    function cycleLetters(letters, delay, breakNumber = 7, i = 0) {
    switch(true) {
        case (i < breakNumber):
            cycleLetter(i, delay, "-", "Y")
            break
        case (i === breakNumber):
            cycleLetter(i, delay, "-", "X")
            cycleLetter((i+1), delay, "+", "X")
            break
        case (i > (breakNumber + 1)):
            cycleLetter(i, delay, "+", "Y")
            break
        default:
            break
    }
    if (i === breakNumber) i++
    i++
    i = i == letters.length ? 0 : i
    setTimeout( function() {
        cycleLetters(letters, delay, breakNumber, i)
    }, (i === breakNumber ? 0 : delay))
}

cycleLetters(letters, 400, 7)