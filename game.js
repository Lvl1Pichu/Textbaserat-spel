let story = 0;
let form = document.getElementById("theAdventure");
let submit = document.getElementById("continueButton");
let reset = document.getElementById("resetButton");
let answer = "";



var story_telling = {
    "start": { //beginning of the story
      "question": "You set out on a brand new adventure, where would you like to go?",
      "answers": {
        "a": "Forest",
        "b": "Cave",
        "c": "Mountain",
      }
    },
    // Forest Path 
    "1_a": {
      "question": "You decide to go to the forest, and you meet a kind fairy. Do you...",
      "answers": {
        "a": "Ask her if she wants to join you on your adventure.",
        "b": "Swat her away like a fly.",
        "c": "Wave at her and continue on your way."
      }
    },
  
    "2_a": {
      "question": "The fairy glady accepts your offer and you two have a wonderful day! The End.",
    },
    "2_b": {
      "question": "The fairy turns into an angry lion and chases you out of the forest. The End.",
    },
    "2_c": {
      "question": "The fairy gives you some awesome new shoes. The End.",
    },
  
    // Cave Path
  
    "1_b": {
      "question": "You go to the caves a run into a terrifying minotaur. What do you do?",
      "answers": {
        "d": "Run away screaming.",
        "e": "Stand your ground and fight!",
        "f": "Ask them if they want to be in your band.",
      }
    },
    "2_d": {
      "question": "The minotaur stares at you in confusion as you run all the way home. The End.",
    },
    "2_e": {
      "question": "You defeat the minotaur and they turn into a cute puppy. The End.",
    },
    "2_f": {
      "question": "The minotaur eagerly agrees, and together you start a funk revival band called The Groovy Hooves. The End.",
      "end": "the end"
    },
  
    // Mountain Path
  
    "1_c": {
      "question": "You decide to take the mountain path and meet a magic goat. What do you do?",
      "answers": {
        "g": "Challenge the goat to a fiddle competition",
        "h": "Teach the goat how to surf.",
        "i": "Name the goat Gregory and become best friends.",
      }
    },
    "2_g": {
      "question": "You become the national fiddle playing champion. The End.",
    },
    "2_h": {
      "question": "The goat becomes the best surfer in the universe. The End.",
    },
    "2_i": {
      "question": "You and Gregory travel the world together. The End.",
    },
    
  };

//Continue Link
submit.addEventListener('mouseup', function(){ 
    answer = form.querySelectorAll('input[type=radio]:checked')[0].value;
    if(answer) {
      story++;
      populateForm(story + '_' + answer);
      console.log("Story time!"); // Console log för att se så den fungerar.
    }
  });

//Reset button
function resetForm(){
    document.getElementById("theAdventure").reset();
}

// Generate answers from story
function populateForm(story){
    let currentStory = storyTelling[story];
    let text = "";
    for (let prop in currentStory["answers"]){
        if(currentStory["answers"].hasOwnProperty(prop)){
        text += '<label><input type="radio" name="answer" value="' + prop + '"/><span>' + current_story['answers'][prop] + '</span></label>';
        }
    }
    form.querySelector("p").innerHTML = currentStory.question;
    form.querySelector("fieldset").innerHTML = text;
}

populateForm("start");