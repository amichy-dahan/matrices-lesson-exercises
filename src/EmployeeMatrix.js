const Matrix = require('./Matrix') 


class EmployeeMatrix extends Matrix {


  constructor() {
    super(0, 0) 
  }


  loadData(salaryData){
       this.metrix = salaryData.map(obj => Object.values(obj))

       this.row = this.metrix.length;
       this.column = this.metrix[0].length;
    
  }
getEmployees(str){
    let arr =[];
      for (let i = 0; i < this.row; i++) {
          if(this.metrix[i][2] === str){
              arr.push(this.metrix[i][1]);
          }
      }
return arr;
}


getTotalSalary(str){

   let sum =0;
    for (let i = 0; i <this.row; i++) {
         if(this.metrix[i][2] === str){
            sum+=this.metrix[i][3];
         }
        
    }
    return sum;

}


findRichest(){
        let max = this.metrix[0][3]
        let name = '';

    for (let i = 0; i < this.row; i++) {
       if(this.metrix[i][3] > max){
        max = this.metrix[i][3];
        name = this.metrix[i][1];
       }
       
    }
    return name;
}
    
}




//You can paste the code from the lesson below to test your solution




/* Do not remove the exports below */
module.exports = EmployeeMatrix