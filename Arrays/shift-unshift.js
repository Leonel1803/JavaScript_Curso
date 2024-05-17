//Métodos que modifican el array original (Mutabilidad)

//shift() Elimina el primer elemento del array y lo devuelve
const colors=['yellow','blue','red']
const removedColors=colors.shift()
console.log(colors)
console.log(removedColors)

//unshift() Agrega uno o más elementos al principio de nuestro array y devuleve su longitud
const newColors=colors.unshift('pink','purple')
console.log(colors)
console.log(newColors)


//Ejercicio
function managePlaylist(playlist,newSong){
    playlist.shift()
    playlist.unshift(newSong)
    return playlist
}

const initialPlaylist=['Sweater Weather','What you know','Eventually']
console.log('Initial playlist: ',initialPlaylist)
const newSongToAdd = 'The Adults Are Talking'
const updatedPlaylist = managePlaylist(initialPlaylist, newSongToAdd)
console.log('New song to add: ',newSongToAdd)
console.log('Updated playlist: ',updatedPlaylist)