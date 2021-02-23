let points = 0
document.querySelector("#answer1-1").addEventListener("click", givePoints1);
document.querySelector("#answer1-2").addEventListener("click", givePoints2);
document.querySelector("#answer1-3").addEventListener("click", givePoints3);

document.querySelector("#answer2-1").addEventListener("click", givePoints4);
document.querySelector("#answer2-2").addEventListener("click", givePoints5);
document.querySelector("#answer2-3").addEventListener("click", givePoints6);

document.querySelector("#answer3-1").addEventListener("click", givePoints7);
document.querySelector("#answer3-2").addEventListener("click", givePoints8);
document.querySelector("#answer3-3").addEventListener("click", givePoints9);

document.querySelector("#answer4-1").addEventListener("click", givePoints10);
document.querySelector("#answer4-2").addEventListener("click", givePoints11);
document.querySelector("#answer4-3").addEventListener("click", givePoints12);


function givePoints1() {
    points = points + 1;
    nextQuestion2()

}

function givePoints2() {
    points = points + 2;
    nextQuestion2()
}

function givePoints3() {
    points = points + 3;
    nextQuestion2()
}

function nextQuestion2() {
    document.querySelector("#question1").style.zIndex = "0";
    document.querySelector("#question2").style.zIndex = "5";
    document.querySelector("#question2").classList.add("moveright");
}

function givePoints4() {
    points = points + 1;
    nextQuestion3()

}

function givePoints5() {
    points = points + 2;
    nextQuestion3()
}

function givePoints6() {
    points = points + 3;
    nextQuestion3()
}

function nextQuestion3() {
    document.querySelector("#question2").style.zIndex = "1";
    document.querySelector("#question3").style.zIndex = "5";
    document.querySelector("#question3").classList.add("moveright");
}

function givePoints7() {
    points = points + 1;
    nextQuestion4()

}

function givePoints8() {
    points = points + 2;
    nextQuestion4()
}

function givePoints9() {
    points = points + 3;
    nextQuestion4()
}

function nextQuestion4() {
    document.querySelector("#question3").style.zIndex = "2";
    document.querySelector("#question4").style.zIndex = "5";
    document.querySelector("#question4").classList.add("moveright");
}

function givePoints10() {
    points = points + 1;
    nextQuestion5()

}

function givePoints11() {
    points = points + 2;
    nextQuestion5()
}

function givePoints12() {
    points = points + 3;
    nextQuestion5()
}

function nextQuestion5() {
    console.log(points);
    document.querySelector("#question4").style.zIndex = "3";
    document.querySelector("#question5").style.zIndex = "6";
    document.querySelector("#question5").classList.add("moveright");
    results()
}



function results() {
    console.log("results-time you have " + points + "points")
    if(points <5) {
        console.log("less than 5");
        document.querySelector("#answer5-1").href = "results.html?typebeer=INTERNATIONAL LAGER"
        document.querySelector("#answer5-2").href = "results.html?typebeer=INTERNATIONAL LAGER"
        document.querySelector("#answer5-3").href = "results.html?typebeer=INTERNATIONAL LAGER"
    }

    if(points == 5) {
        console.log("5")
        document.querySelector("#answer5-1").href = "results.html?typebeer=Irish Stout"
        document.querySelector("#answer5-2").href = "results.html?typebeer=Irish Stout"
        document.querySelector("#answer5-3").href = "results.html?typebeer=Irish Stout"
    }
         
    if(points == 6) {
        console.log("6")
        document.querySelector("#answer5-1").href = "results.html?typebeer=Dark Mild"
        document.querySelector("#answer5-2").href = "results.html?typebeer=Dark Mild"
        document.querySelector("#answer5-3").href = "results.html?typebeer=Dark Mild"
        }

    if(points == 7) {
        document.querySelector("#answer5-1").href = "results.html?typebeer=IPA"
        document.querySelector("#answer5-2").href = "results.html?typebeer=IPA"
        document.querySelector("#answer5-3").href = "results.html?typebeer=IPA"
    }
        
         

    if(points == 8) {
        document.querySelector("#answer5-1").href = "results.html?typebeer=German Pils"
        document.querySelector("#answer5-2").href = "results.html?typebeer=German Pils"
        document.querySelector("#answer5-3").href = "results.html?typebeer=German Pils"
    }


             
    if(points == 9) {
        document.querySelector("#answer5-1").href = "results.html?typebeer=British Strong Ale"
        document.querySelector("#answer5-2").href = "results.html?typebeer=British Strong Ale"
        document.querySelector("#answer5-3").href = "results.html?typebeer=British Strong Ale"

        }

    if(points == 10) {
        document.querySelector("#answer5-1").href = "results.html?typebeer=Belgian Pale Ale"
        document.querySelector("#answer5-2").href = "results.html?typebeer=Belgian Pale Ale"
        document.querySelector("#answer5-3").href = "results.html?typebeer=Belgian Pale Ale"

        }
                 
    if(points == 11) {
        document.querySelector("#answer5-1").href = "results.html?typebeer=SPECIALTY-TYPE BEER"
        document.querySelector("#answer5-2").href = "results.html?typebeer=SPECIALTY-TYPE BEER"
        document.querySelector("#answer5-3").href = "results.html?typebeer=SPECIALTY-TYPE BEER"

        }

        if(points == 12) {
            document.querySelector("#answer5-1").href = "results.html?typebeer=American Porter"
            document.querySelector("#answer5-2").href = "results.html?typebeer=American Porter"
            document.querySelector("#answer5-3").href = "results.html?typebeer=American Porter"
    
            }
                
    }
