const move = document.getElementById("move")
document.body.onpointermove = event => {
    const { pageX, pageY } = event;


move.animate ({
    left: `${pageX}px`,
    top: `${pageY}px`
}, {duration: 2000, fill: "forwards"})
}

// const blob = document.getElementById("blob");

// window.onpointermove = event => { 
//   const { clientX, clientY } = event;
  
//   blob.animate({
//     left: `${clientX}px`,
//     top: `${clientY}px`
//   }, { duration: 3000, fill: "forwards" });
// }