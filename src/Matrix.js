class Matrix {

     constructor(row , column) {
        
        this.row = row;
        this.column = column;
        this.metrix = [];
        this.generateMatrix();
     }




     generateMatrix(){
        let count =1;
        for (let i = 0; i < this.row; i++) {
            this.metrix[i] = [];
            for (let j = 0; j < this.column; j++) {
                this.metrix[i][j] = count++;
            }
        }
     }

    print(){
          for (let i = 0; i < this.row; i++) {
               console.log(this.metrix[i].join('\t'))
          }
    }

    findCoordinate(val){
 
     for (let y = 0; y < this.row; y++) {
            for (let x = 0; x < this.column; x++) {
               if(this.metrix[y][x] === val) {
                  return {x : x , y:y}
                            
               }
            }
        }

  return null;
    }



    get(num1 , num2){
        console.log( this.metrix[num1][num2])
        return this.metrix[num1][num2]
    }

    alter(num1, num2  , num3){
     this.metrix[num1][num2] = num3;
     this.print()
    }

    printColumn(column){
             for (let i = 0; i < this.row; i++) {
                 console.log(this.metrix[i][column])  
             }

    }
     printRow(row){
             for (let i = 0; i < this.column; i++) {
                 console.log(this.metrix[row][i])  
             }

    }
}




//You can paste the code from the lesson below to test your solution




/* Do not remove the exports below */
module.exports = Matrix