
let  misDatos = {
    nombre: "Bautista",
    apellido: "Cornejo Costas",
    dni: "47231927",
    edad: 18,
    comidasFavoritas: ["milanesas", "Sushi", "Pasta"],
    saludar: function() {
      return `Hola mi nombre es ${this.nombre} ${this.apellido} y tengo ${this.edad} años. Mi primer comida favorita es ${this.comidasFavoritas[0]}.`;
    }
  };
  
 
  console.log(misDatos.saludar());
  
  
  let auto = {
    marca: "Toyota",
    modelo: "Corolla",
    anio: 2020,
    color: "Rojo",
    posicion: 0,
    avanzar: function(n) {
      this.posicion += n;
    },
    retroceder: function(n) {
      this.posicion -= n;
    }
  };
  
 
  auto.avanzar(10);
  auto.retroceder(3);
  auto.avanzar(5);
  console.log(auto.posicion); 
  

  let nuevoAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    año: 2020,
    color: "Rojo",
    posicion: 0,
    moverse: function(n) {
      this.posicion += n;
    }
  };
  

  nuevoAuto.moverse(10);
  nuevoAuto.moverse(-3);
  nuevoAuto.moverse(5);
  console.log(nuevoAuto.posicion);
  
  
  let ironMan = {
    nombre: "Iron Man",
    equipo: "Avengers",
    poderes: ["Volar", "Lanzar misiles", "Disparar láser"],
    energia: 100,
    getPoder: function(num) {
      this.energia -= 10;
      return `Poder Elegido de ${this.nombre}: ${this.poderes[num]}. Energía restante: ${this.energia}.`;
    }
  };
  
 
  let hulk = {
    nombre: "Hulk",
    equipo: "Avengers",
    poderes: ["Aplastar", "Gritar", "Golpear"],
    energia: 100,
    getPoder: function(num) {
      this.energia -= 10;
      return `Poder Elegido de ${this.nombre}: ${this.poderes[num]}. Energía restante: ${this.energia}.`;
    }
  };
  
  
  let randomNum = () => Math.floor(Math.random() * 3);
  
  console.log(ironMan.getPoder(randomNum()));
  console.log(ironMan.getPoder(randomNum()));
  console.log(ironMan.getPoder(randomNum()));
  
  console.log(hulk.getPoder(randomNum()));
  console.log(hulk.getPoder(randomNum()));
  console.log(hulk.getPoder(randomNum()));
  