// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var height, width, color;

$('#sizePicker').submit(function (event) {
  event.preventDefault();
let height = $('#inputHeight').val();
let width = $('#inputWeight').val();
  makeGrid(height, width);
})

function makeGrid(N, M) {
  $('tr').remove();

// Your code goes here!

for(var i= 1 ; i<= N; i++){
  $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
  for (var j = 1; j <= M; j++) {
    $('#table' + i).append('<td></td>');
  }
}
// adding colors to the pixel cells
$('td').click(function plusColor(){
const  color = $('#colorPicker').val();

  if($(this).attr('style')){
    $(this).removeAttr('style')
  }else{
    $(this).attr('style','background-color:' + color);
  }
})
}
