console.log('script sourced');

var clicks = 0;

$(document).ready(function() {
console.log('inJQ');
  $('#generate').click(clickGenerate);

$('#output').on('click', '#deleteBtn', function(){
  $('#output').empty();
})

$('#output').on('click', '#swapBtn', function(){
  changeBackground();
})
}); // end doc ready



function clickGenerate() {
  clicks++;
  var createDiv = '<div id=secondDiv>';
  createDiv += '</div>';
  $('#output').append(createDiv);
  $('#secondDiv').empty();
  var createP = '<p>';
  createP += 'Number of Clicks: ';
  createP += clicks;
  createP += '</p>';
  $('#secondDiv').append(createP);
  var deleteBtn = '<button id=deleteBtn data-id=>Delete</button>'
  $('#secondDiv').append(deleteBtn);
  var swapBtn = '<button id=swapBtn>Swap</button>'
  $('#secondDiv').append(swapBtn);
}

function changeBackground() {
  $('#secondDiv').toggleClass("toggle");
}
