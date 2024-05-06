class Question {
    constructor (text, choices, answer, difficulty) {
        this.text = text
        this.choices = choices
        this.answer = answer
        this.difficulty = difficulty
    }

    // 2. shuffleChoices()

    shuffleChoices(){
      for (let i = this.choices.length - 1; i > 0 ; i--){
        const newChoices = Math.floor(Math.random() * (i + 1));
        [this.choices[i]], this.choices[newChoices] = [this.choices[newChoices], this.choices[i]]
    
      }
    }
}