class Choose{
    constructor(parentElement){
        this.back = document.createElement('div');
        this.back.className = 'back';
        parentElement.appendChild(this.back);

        this.chooseForm = document.createElement('div');
        this.chooseForm.className = 'chooseForm';
        this.back.appendChild(this.chooseForm); 
        
        this.button1 = document.createElement('div');
        this.button1.className = 'btn';
        this.button1.classList.add = 'button1'
        this.button1.innerHTML = 'people vs people'
        this.chooseForm.appendChild(this.button1); 
        
        this.button2 = document.createElement('div');
        this.button2.className = 'btn';
        this.button2.classList.add = 'button2'
        this.button2.innerHTML = 'people vs skyNet'
        this.chooseForm.appendChild(this.button2);

        window.addEventListener('click',(e)=>{
          
            if(e.target.innerHTML == 'people vs people'){
                new Game(document.body);
                parentElement.removeChild(this.back)
            }else if(e.target.innerHTML == 'people vs skyNet'){
                new Game2(document.body);
                parentElement.removeChild(this.back)
            }
        })

    }


}