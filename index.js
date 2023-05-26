let gscore = 0
let hscore = 0
let homeScore = document.getElementById("numberHome")
let guestScore = document.getElementById("numberGuest")

function addOneHome(){
    hscore += 1
    homeScore.textContent = hscore
}

function addTwoHome(){
    hscore += 2
    homeScore.textContent = hscore
}

function addThreeHome(){
    hscore += 3
    homeScore.textContent = hscore
}

function restart(){
    hscore = 0
    gscore = 0
    homeScore.textContent = hscore
    guestScore.textContent = gscore
}

function addOneGuest(){
    gscore += 1
    guestScore.textContent = gscore
}

function addTwoGuest(){
    gscore += 2
    guestScore.textContent = gscore
}

function addThreeGuest(){
    gscore += 3
    guestScore.textContent = gscore
}