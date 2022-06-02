let ran_arr = [];
let buttonPressed = [];
let selectedButton
let score = 0;
for (let i = 0; i < 16; i++) {
    selectedButton = document.querySelectorAll(".btn")[i];
    selectedButton.addEventListener('click', fun)
}

function fun(evt) {

    let chosenButton = evt.target.getAttribute("id");
    buttonPressed.push(chosenButton);
    console.log("clicked")
    console.log(buttonPressed);

    // if (ran_arr.length === buttonPressed.length) {
    //     console.log("going to check ans")
    //     checkans()
    // }
    checkans()

}

function random() {
    let ran = Math.floor(Math.random() * (16));
    return ran;
}


function tilegen() {
    let ran = random()
    if (!ran_arr.includes(ran)) {
        ran_arr.push(ran)
        console.log(ran_arr)
        glow(ran_arr)
    } else {
        tilegen()
    }
}


function glow(ran_arr) {
    console.log("inside newround")
    console.log("buttonpressed", buttonPressed)
    for (let i = 0; i < ran_arr.length; i++) {

        let myId = document.getElementById(ran_arr[i]);
        myId.classList.remove('new')

        let elem = myId;
        setTimeout(() => {
            elem.classList.add('new');
        }, 100)

    }

}

function checkans() {
    const result = buttonPressed.every(element =>{
        return ran_arr.includes(parseInt(buttonPressed))
    })
    if(!result){
        alert("GAME OVER \nYOUR SCORE = " + score)
    }
    else{
        if(ran_arr.length === buttonPressed.length){
            score++;
            while(buttonPressed.length){
                buttonPressed.pop()
            }
            tilegen();
        }
    }

}

tilegen()

