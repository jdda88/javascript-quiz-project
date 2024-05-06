class Quiz {
    constructor (questions, timeLimit, timeRemaining) {
        this.questions = questions
        this.timeLimit = timeLimit
        this.timeRemaining = timeRemaining
        this.correctAnswers = 0
        this.currentQuestionIndex = 0
    }

    getQuestion() {
        return this.questions[this.currentQuestionIndex]
    }
    
    moveToNextQuestion(){

    this.currentQuestionIndex += 1

    }


    shuffleQuestions(){

        for (let i = this.questions.length - 1; i > 0 ; i--){
            const newQuestions = Math.floor(Math.random() * (i + 1));
            [this.questions[i]], this.questions[newQuestions] = [this.questions[newQuestions], this.questions[i]]

    }}

    checkAnswer(answer) {
        if(this.questions){  // how is this possible?
            this.correctAnswers += 1
        }
    }



   hasEnded(){
    if (this.currentQuestionIndex < this.questions.length){
        return false 
    }
    else{
        return true 
    }
    
   }
}