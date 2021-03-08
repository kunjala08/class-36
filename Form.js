class Form {
    constructor(){
        
    }
    
    display(){
    
        //1.title
        //2.input
        //3.click


        var title = createElement('h2');
        title.html("Car Racing Game");
        title.position(150,10);

        var input = createInput("Name");
        input.position(150,150);
 
        var button = createButton('play')
        button.position(150,170);

        button.mousePressed(function(){
            input.hide();
            button.hide();

            
            var name = input.value();
            playerCount = playerCount+1;
            player.update(name);
            player.updateCount(playerCount);

            var greeting = createElement('h3');
            greeting.html("Hello!!! "+name);
            greeting.position(150,150);






        })
    }



}