const anclas = ["video1", "video2", "video3"];

const videoSiguiente = document.getElementById("videoSiguiente");
const videoAnterior = document.getElementById("videoAnterior");

window.onload = () => {
  const anclaHref = window.location.href.split("#")[1];
  const indexActual = anclas.indexOf(anclaHref);
  let indexSiguiente = 0;
  let indexAnterior = (anclas.length - 1);

  if(indexActual !== - 1) {
    const posibleIndexAnterior = indexActual - 1;
    if(indexActual === (anclas.length - 1)){
      indexSiguiente = 0;
    } else {
      indexSiguiente = indexActual + 1;
    }
    if(posibleIndexAnterior >= 0) {
      indexAnterior = indexActual - 1;
    }
  }

  videoSiguiente.href = `#${anclas[indexSiguiente]}`;
  videoAnterior.href = `#${anclas[indexAnterior]}`;

  videoSiguiente.onclick = siguiente;
  videoAnterior.onclick = anterior;
};


const siguiente = (event) => {
  const anclaHref = window.location.href.split("#")[1];
  const indexActual = anclas.indexOf(anclaHref);
  
  let indexSiguiente = indexActual + 1;
  let indexAnterior = indexActual - 1;

  if (indexActual === anclas.length - 1) {
    indexSiguiente = 0;
    indexAnterior = (anclas.length - 1);
  }

  videoSiguiente.href = `#${anclas[indexSiguiente]}`;
  videoAnterior.href = `#${anclas[indexAnterior]}`;
};

const anterior = (event) => {
  const anclaHref = window.location.href.split("#")[1];
  const indexActual = anclas.indexOf(anclaHref);
  
  let indexSiguiente = indexActual + 1;
  let indexAnterior = indexActual - 1;

  if (indexActual <= 0) {
    indexSiguiente = 0;
    indexAnterior = (anclas.length - 1);
  }

  videoSiguiente.href = `#${anclas[indexSiguiente]}`;
  videoAnterior.href = `#${anclas[indexAnterior]}`;
};