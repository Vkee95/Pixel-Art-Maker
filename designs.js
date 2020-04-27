// Select color input
let color = document.getElementById('colorPicker');
// Access to sizing form element
let sizing = document.getElementById('sizePicker')
//Access to design canvas element
let canvas = document.getElementById('pixelCanvas')
//Select size input values
let height =  document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;
//Access to submit button
let submit = document.querySelector('input[type="submit"]')

// When size is submitted by the user, call makeGrid()
sizing.addEventListener('submit', function(event){
  let height = document.getElementById('inputHeight').value;
  let width = document.getElementById('inputWidth').value;
  let canvas = document.getElementById('pixelCanvas');
  //prevent default of form submit
  event.preventDefault();
  makeGrid(height, width);
});

function makeGrid(height, width) {
  //(Recieved mentor help) Use to reset grid when 'submit' is clicked again
  canvas.innerHTML = null;
  //make grid rows
  for(r = 0; r < height; r++){
    let row = canvas.insertRow(r);
    //make grid cells w/i rows
    for(c = 0; c < width; c++){
      let cell = row.insertCell(c);
      //when cell is clicked, change to selected color
      cell.addEventListener('click', function(event){
        cell.style.backgroundColor = color.value
      })
    }
  }
};
