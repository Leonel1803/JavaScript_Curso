//flat() Convierte un array con nested arrays en un solo array de solo un nivel
const matriz = [
    [1,2,3],
    [4,5,6, [1,2, [1,2]]],
    [7,8,9]
];

const newArray = [];
for (let i = 0; i < matriz.length; i++) { //flat con matrizes, no puedes usar arrays dentro de arrays
    const array = matriz[i];
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j];
        newArray.push(element);
    }
}

const rtaf = matriz.flat(3); //Método flat - el parámetro es el número de niveles del array que queremos bajar (queremos bajar tres arrays dentro de arrays)
console.log('for', newArray);
console.log('flat', rtaf);


//flatMap() consiste en la combinación de los métodos map y flat. Primero realiza la iteración de los elementos del array (como si fuera map), y después los aplana en una sola profundidad (como si fuera flat).
const users=[
    {userId:1,username:"Tom",attributes:["Nice","Cute"]},
    {userId:2,username:"Mike",attributes:["Lovely"]},
    {userId:3,username:"Nico",attributes:["Nice","Cool"]},
];

const rta=users.map((user)=>user.attributes).flat(); //Flat map literal
const rta2=users.flatMap((user)=>user.attributes); //Flatmap método
console.log("map-flat",rta);
console.log("rta2",rta2);

const calendars={
    primaryCalendar:[
        {
            startDate:new Date(2021,1,1,15),
            endDate:new Date(2021,1,1,15,30),title:"Cita 1",},
        {
            startDate:new Date(2021,1,1,17),
            endDate:new Date(2021,1,1,18),title:"Cita 2",
        },
    ],
    secondaryCalendar:[
        {
            startDate:new Date(2021,1,1,12),
            endDate:new Date(2021,1,1,12,30),title:"Cita 2",},
        {
            startDate:new Date(2021,1,1,9),
            endDate:new Date(2021,1,1,10),title:"Cita 4",
        },
    ],
};

const rta3=Object.values(calendars).flatMap(item=>{
    return item.map(date=>date.startDate); //Array de las startDate
});

console.log(rta3);