class Form{

    constructor(){
     this.name = createInput('Name');
     this.epic = createInput('Choose the Epic....')
     this.button = createButton('Play');
     this.greeting = createElement('h2');
     this.reset = createButton('Reset');
     
    }
    hide(){
        this.name.hide();
        this.epic.hide();
        
        this.button.hide();
        this.greeting.hide();
        this.go.hide();

    }

    display(){
        
        this.name.position(displayWidth/2.6,displayHeight/2-80);
        this.epic.position(displayWidth/2.6, displayHeight/2- 50);
        this.button.position(displayWidth/2-40,displayHeight/2+30);
        this.reset.position(displayWidth-100,20);

        this.button.mousePressed(()=>{
            this.name.hide();
            this.epic.hide();
            this.button.hide();
            var name = this.name.value();
            
            
        });

        

        
        
    }
}
