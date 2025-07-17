const Matrix = require('./Matrix') 


class TicTacToe extends Matrix {


  constructor() {
    super(0, 0) // נתחיל עם מטריצה ריקה
  }



  loadBoard(){

      this.row = 3
    this.column = 3
     

  for (let i = 0; i < this.row; i++) {
    this.metrix[i] = [] // יוצרים שורה חדשה
    for (let j = 0; j < this.column; j++) {
      this.metrix[i][j] = '.'
    }
        }
     }
  


print(){
     for (let i = 0; i < this.row; i++) {
        console.log(this.metrix[i].join('\t'))
     }
}

play (num1 , num2 , val) {

    this.metrix[num1][num2] = val === 1 ? 'x' : 'o'; 
      let calx = 0;
      let caly = 0;
    for (let i = 0; i < this.column; i++) {
        for (let j = 0; j < this.row; j++) {
            if(this.metrix[j][i] === 'x' ){
            calx++;
            }else if(this.metrix[j][i] === 'o' ){
             caly++;
            }
        }
        if(calx === 3){
            return "Congratulations Player 1"
        }else if(caly ===3){
        return "Congratulations Player 2"
        }else{
            calx ===0;
            caly ===0;
        }
        
    }
}

}

module.exports = TicTacToe