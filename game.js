let story = 0;
let form = document.getElementById("theAdventure");
let submit = document.getElementById("continueButton");
let reset = document.getElementById("resetButton");
let answer = "";



let storyTelling = {
    "start": {
        "question": "You set out on a brand new adventure, where would you like to go?",
        "answers": {
            "a": "Forest",
            "b": "Cave",
            "c": "Mountain",
        }
},
//forest path
"1_a":{
    "question": "You decide to go to the forest, and you meet a kind fairy. Do you...",
    "answers": {
        "a": "Ask her if she wants to join you on your adventure.",
        "b": "Swat her away like a fly.",
        "c": "Wave at her and continue on your way.",
    }
}
}

//Continue Link
submit.addEventListener("mouseup"), function(){
    answer = form.querySelectorAll("input[type=radio]: checked")[0].value;
    if(answer){
        story++;
        populateForm(story + "_" + answer);
        console.log("story time!")
    }
}