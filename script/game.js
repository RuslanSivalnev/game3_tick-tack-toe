class Game {
    constructor(parentElement) {
        let wrap = document.createElement('div');
        wrap.className = 'wrap';
        parentElement.appendChild(wrap);

        let nav = document.createElement('div');
        nav.className = 'nav';
        wrap.appendChild(nav);

        this.x = document.createElement('div');
        this.x.className = 'x';
        this.x.innerHTML = 'win x:'
        nav.appendChild(this.x);

        this.btn = document.createElement('button');
        this.btn.className = 'reset';
        this.btn.innerHTML = 'reset';
        nav.appendChild(this.btn);        

        this.o = document.createElement('div');
        this.o.className = 'o';
        this.o.innerHTML ='win o:'
        nav.appendChild(this.o);

        this.fieldElement = document.createElement('div');
        this.fieldElement.className = 'field';
        wrap.appendChild(this.fieldElement);

        for (let i = 0; i < 9; i++) {
            let cell = document.createElement('div');
            cell.className = 'cell';
            this.fieldElement.appendChild(cell);
        }
       
        this.field = document.querySelectorAll('.cell');
       

    }

}