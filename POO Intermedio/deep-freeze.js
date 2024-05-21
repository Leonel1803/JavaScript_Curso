// Crear una función que aplique Object.freeze a todos los objetos anidados de 
// forma recursiva para así realmente lograr bloquear todo el objeto. 
// A esto se le conoce comunmente como deepFreeze

function deepFreeze(obj) {
    // Tu código aquí 👈
    if (typeof (obj) !== "object") return
  
    Object.freeze(obj);
  
    for (let key in obj) {
      deepFreeze(obj[key])
    }
}