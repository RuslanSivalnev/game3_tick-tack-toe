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
        this._valueX = 0;
        this.x.innerHTML = `winner X: ${this._valueX}`
        nav.appendChild(this.x);

        this.btn = document.createElement('button');
        this.btn.className = 'reset';
        this.btn.innerHTML = 'reset';
        nav.appendChild(this.btn);

        this.newGame = document.createElement('button');
        this.newGame.className = 'btnNewGame';
        this.newGame.innerHTML = 'new game';
        wrap.appendChild(this.newGame);


        this.o = document.createElement('div');
        this.o.className = 'o';
        this._valueO = 0;
        this.o.innerHTML = `winner O: ${this._valueO}`;
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

        wrap.addEventListener('click', (e) => {
            if (e.target.className == 'btnNewGame') {
                this.clear();
            } else if (e.target.className == 'reset') {
                this.valueO = 0;
                this.valueX = 0;
            } else if (e.target.className == 'cell' && this.winningValues.length < 1) {
                this.step(e.target)
                this.checkWin();
            };
        })

        this.flag = 0;
        this.arr = [];
        this.winningValues = [];

    }

    helperX(i, z) {
        return eval(`this.field[${i}].innerHTML == '${z}' && this.field[${i + 1}].innerHTML == '${z}' && this.field[${i + 2}].innerHTML == '${z}'`)
    }

    helperY(i, z) {
        return eval(`this.field[${i}].innerHTML == '${z}' && this.field[${i + 3}].innerHTML == '${z}' && this.field[${i + 6}].innerHTML == '${z}'`)
    }

    helperDigR(i, z) {
        return eval(`this.field[${i}].innerHTML == '${z}' && this.field[${i + 4}].innerHTML == '${z}' && this.field[${i + 8}].innerHTML == '${z}'`)
    }

    helperDigL(i, z) {
        return eval(`this.field[${i}].innerHTML == '${z}' && this.field[${i + 2}].innerHTML == '${z}' && this.field[${i + 4}].innerHTML == '${z}'`)
    }

    step(domElement) {
        for (let i = 0; i < this.field.length; i++) {
            if (domElement == this.field[i] && this.flag % 2 == 0 && this.field[i].innerHTML == '') {
                this.field[i].innerHTML = 'X';
                this.arr.push(this.field[i])
                this.flag++
            } else if (domElement == this.field[i] && this.field[i].innerHTML == '') {
                this.field[i].innerHTML = 'O';
                this.arr.push(this.field[i])
                this.flag++
            }
        }
    }

    checkWin() {
        for (let i = 0; i < this.field.length; i++) {
            if (this.helperX(0, 'X') || this.helperX(0, 'O')) {
                this.winningValues.push(this.field[0], this.field[1], this.field[2])
            } else if (this.helperX(3, 'X') || this.helperX(3, 'O')) {
                this.winningValues.push(this.field[3], this.field[4], this.field[5])
            } else if (this.helperX(6, 'X') || this.helperX(6, 'O')) {
                this.winningValues.push(this.field[6], this.field[7], this.field[8])
            } else if (this.helperY(0, 'X') || this.helperY(0, 'O')) {
                this.winningValues.push(this.field[0], this.field[3], this.field[6])
            } else if (this.helperY(1, 'X') || this.helperY(1, 'O')) {
                this.winningValues.push(this.field[1], this.field[4], this.field[7])
            } else if (this.helperY(2, 'X') || this.helperY(2, 'O')) {
                this.winningValues.push(this.field[2], this.field[5], this.field[8])
            } else if (this.helperDigR(0, 'X') || this.helperDigR(0, 'O')) {
                this.winningValues.push(this.field[0], this.field[4], this.field[8])
            } else if (this.helperDigL(2, 'X') || this.helperDigL(2, 'O')) {
                this.winningValues.push(this.field[2], this.field[4], this.field[6])
            } else if (this.arr.length == 9) {
                this.newGame.style.background = 'rgba(138,226 ,46 , 0.7)';
            }
            break;
        }

        for (let i = 0; i < this.winningValues.length; i++) {
            this.winningValues[i].style.color = 'red';
            this.newGame.style.background = 'rgba(138,226 ,46 , 0.6)';
        }

        if (this.winningValues.length == 3 && this.winningValues[0].innerHTML == "X") {
            this.valueX++;
        } else if (this.winningValues.length == 3 && this.winningValues[0].innerHTML == "O") {
            this.valueO++;
        }
    }

    get valueX() {
        return this._valueX;
    }
    set valueX(value) {
        this._valueX = value;
        this.x.innerHTML = `winner X: ${this._valueX}`;
    }

    get valueO() {
        return this._valueO;
    }
    set valueO(value) {
        this._valueO = value;
        this.o.innerHTML = `winner O: ${this._valueO}`
    }

    clear() {
        for (let i = 0; i < this.field.length; i++) {
            this.field[i].innerHTML = '';
            this.field[i].style.color = 'white';
        };
        this.newGame.style.background = 'transparent';
        this.flag = 0;
        this.arr.length = 0;
        this.winningValues.length = 0;
    }
}

















