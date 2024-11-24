let homeScore = 0
let homeScoreEl = document.getElementById("home-score-el")


function homeIncrease1(){
homeScore +=1
homeScoreEl.textContent = homeScore
}

function homeIncrease2(){
  homeScore +=2
  homeScoreEl.textContent = homeScore
  }

function homeIncrease3(){
  homeScore +=3
  homeScoreEl.textContent = homeScore
    }


let guestScore = 0
let guestScoreEl = document.getElementById("guest-score-el")


function guestIncrease1(){
  guestScore += 1
  guestScoreEl.textContent = guestScore
}

function guestIncrease2(){
  guestScore += 2
  guestScoreEl.textContent = guestScore
}


function guestIncrease3(){
  guestScore += 3
  guestScoreEl.textContent = guestScore
}
