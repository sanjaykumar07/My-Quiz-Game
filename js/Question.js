class Question{
    constructor(){
        
        this.input1 = createInput("Name");
        this.input1.position(270,300)
        this.input2 = createInput("Correct Option");
        this.input2.position(450,300)
        this.submit = createButton("Submit");
        this.submit.position(630,300)
        this.reset=createButton('Reset');
        this.reset.position(380,350);
        this.title = createElement('h1')
        this.title2 = createElement('h1')
        
        this.question1 = createElement('h2')
        this.option1 = createElement('h2')
        this.option2 = createElement('h2')
        this.option3 = createElement('h2')
        this.option4 = createElement('h2')
    }
    
    display(){


        this.title.html("Among Us Quiz Game")
        this.title2.html("Result of the Quiz")
        this.title2.hide();
        this.title.position(width/2-160,height-height);
        this.title2.position(width/2-150,height-height);
        //qa 1
        this.question1.html ("Q1. In what place are you not able to sabotage?")
        this.question1.position(width/2-250,100)
       
        
        this.option1.html ("1. Reactor")
        this.option1.position(width/2-200,150)
        this.option2.html("2. Weapons")
        this.option2.position(width/2,150)
        this.option3.html ("3. O2")
        this.option3.position(width/2-200,200)
        this.option4.html ("4.Comms")
        this.option4.position(width/2,200)

    

     
        this.submit.mousePressed(()=>{
            this.submit.hide();

            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount+=1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount)


        })

    


       
        this.reset.mousePressed(()=>{
            contestant.updateCount(0);
              quiz.update(0);
          })

         
    }
    
}