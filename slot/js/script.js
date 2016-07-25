// Hello World!
// document.addEventListener('click',function(){
//
// })

const revertTime = 500;
$('.lil-box').draggable({
  axis: "y",
  revert: true,
  revertDuration: revertTime,
  containment: ".dad-box",
  drag: function(event, ui){
    if($('.lil-box').offset().top == $('.lil-box-target').offset().top){
      alert('GO');
    }
  }
});