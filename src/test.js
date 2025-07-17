let Matrix = require('../src/Matrix');
const EmployeeMatrix = require('./EmployeeMatrix')
const TicTacToe = require('./TicTacToe')


let m = new Matrix(3,4);
m.print();

m.alter(0,0,m.get(2,2))

m.printColumn(0) 
m.printRow(0) 



// ex2
console.log(m.findCoordinate(12)) 


// ex4
let data = [
  { _id: "e10021", name: "Gillian", department: "Finance", salary: 2000 },
  { _id: "e10725", name: "Tibor", department: "Design", salary: 1200 },
  { _id: "e10041", name: "Anisha", department: "Finance", salary: 2300 },
  { _id: "e10411", name: "Jakub", department: "Design", salary: 1600 },
  { _id: "e11995", name: "Mar", department: "Design", salary: 1300 },
  { _id: "e10732", name: "Nisha", department: "Design", salary: 1200 }
]


let n= new EmployeeMatrix()
n.loadData(data)
n.print()

console.log(n.getEmployees("Finance")) //prints [ 'Gillian', 'Anisha' ]


// ex5

console.log(n.getTotalSalary("Finance"));


// ex6
console.log(n.findRichest()) 


// ex7

let board = new TicTacToe()
board.loadBoard()
board.print()


// ex8

    
board.play(2, 2, 1)
board.play(0, 0, 2)
board.play(0, 2, 1)
board.play(1, 0, 2)
console.log(board.play(2, 0, 2) )//prints Congratulations Player 1
console.log()
board.print()