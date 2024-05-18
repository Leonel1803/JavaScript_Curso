//No modifican el array original, sino que hacen una copia de él (Inmutabilidad)

//filter() Devuelve un array en el cual están los elementos de array original que cumplan una condición dada por una función
const numbers = [1,2,3,4,5,6,7,8,9,10]
const evenNumbers = numbers.filter(number => number % 2 === 0) //Devuleve un array que contiene todos los elementos del array original los cuales, al dividirse entre dos, no den residuo
console.log(numbers)
console.log(evenNumbers)

//reduce() Reducir un array a un solo valor. Itera el array
const numbersReduce=[1, 2, 3, 4, 5]
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0) //Hace la suma de todos los valores y termina teniendo un solo valor. El valor con el que inicia es 0
console.log(numbersReduce)
console.log(sum)

const words=['apple','banana','hello','bye','banana','bye','bye']
const wordFrecuency = words.reduce((accumulator,currentValue) => 
    {
        if(accumulator[currentValue]){
            accumulator[currentValue]++
        }
        else{
            accumulator[currentValue] = 1
        }

        return accumulator //Regresa un objeto con el contador de vbeces que se repitió cada elemento del array
    }
    ,{} //Indica que el valor inicial va a ser un objeto vacío
)
console.log(wordFrecuency)


//Ejercicio
const grades=[85,92,60,78,95,66,88,50,94]
const passingGrades = grades.filter(grade=>grade>=70)
const averagePassingGrade = passingGrades.reduce((sum, grade) => sum + grade, 0) / passingGrades.length
console.log('Original Grades: ',grades)
console.log('Passing Grades: ',passingGrades)
console.log('Average Passing Grade: ',averagePassingGrade)