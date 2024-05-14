
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
      ]
    }
  }
}).mount('#app')
