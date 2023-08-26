/*
En este ejercicio, el objetivo es implementar una playlist de un servicio de música 
utilizando un stack.

Deberás implementar la lógica de la clase Playlist la cual deberá tener las siguientes 
3 propiedades top, bottom y length para poder desarrollar el stack.

    addSong(song): este método debe permitir agregar una canción al stack.

    playSong(): este método debe permitir reproducir la canción que está en el tope del 
    stack y luego eliminarla. Si el stack está vacío, deberá lanzar un error con el 
    mensaje "No hay canciones en la lista".

    getPlaylist() transforma el stack a un array con todas las canciones que están en el, 
    en orden de reproducción (de la última agregada a la primera).

*/


class Node {
    constructor(value) {
      // Tu código aquí 👈🏻
      this.value = value;
      this.below = null;
    }
}
  

class Playlist {
    constructor() {
      // Tu código aquí 👈🏻
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
  
    addSong(song) {
      // Tu código aquí 👈🏻
      const newSong = new Node(song)

      if (this.length === 0) {
        this.top = newSong;
        this.bottom = newSong;
      } else {
        newSong.below = this.top;
        this.top = newSong;
      }

      return ++this.length;
    }
  
    playSong() {
      // Tu código aquí 👈🏻
      if (!this.top) {
        throw new Error("No hay canciones en la lista")
      }

      const currentSong = this.top;
      if (!this.top.below) {
        this.bottom = null;
      }

      this.top = this.top.below;
      --this.length;

      return currentSong.value;
    }
  
    getPlaylist() {
      // Tu código aquí 👈🏻
      let currentSong = this.top;
      let thisPlaylist = [];
      while (currentSong) {
        thisPlaylist.push(currentSong.value);
        currentSong = currentSong.below;
      }

      return thisPlaylist;
    }
}

const playlist = new Playlist();

playlist.addSong("Bohemian Rhapsody");
playlist.addSong("Stairway to Heaven");
playlist.addSong("Hotel California");

console.log(playlist.getPlaylist());

console.log(playlist.playSong());
console.log(playlist.playSong());
console.log(playlist.playSong());
// throw an error
// console.log(playlist.playSong());




