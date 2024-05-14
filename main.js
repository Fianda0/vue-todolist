
const { createApp } = Vue

createApp({
  data() {
    return {
      lista: [
        'svegliarsi',
        'fare colazione',
        'seguire la lezione',
        'magiare',
        'fare gli esercizi',
        'giocare',
        'lavarsi',
        'dormire'
      ],
      addToDo: ''
    }
  }, methods: {

    //Creo controllo sull' click
    aggiungi() {
      //Se la stringa è vuota ERRORE
      if (this.addToDo == '') {
        alert('inserire qualcosa')
      }
      // Se la stringa non è contenuta nella lista aggiungerla
      else if (!this.lista.includes(this.addToDo)) {
        this.lista.push(this.addToDo)
        this.addToDo = ''
      }
      //Se la stringa è contenuta ERRORE
      else {
        alert('la lista contine già quel elemento')
      }
    },
    fatto(i) {
      this.lista.splice(i, 1)
      console.log(this.lista)
    }
  }
}).mount('#app')
