//++++++++++++++++++++ Curser Efact  ++++++++++++++++++++++++++

        const cursor = document.getElementById('cursor');
        document.onmousemove = function (e) {
            cursor.style.left = (e.pageX - 25) + "px";
            cursor.style.top = (e.pageY - 25) + "px";
            cursor.style.display = "block";
        }


// ++++++++++++++++++++++Owl Carousel++++++++++++++++++++++++++++
var owl = $('.owl-carousel');
owl.owlCarousel({
  slideSpeed : 300,
  paginationSpeed : 400,
  singleItem:true

});

// ++++++++++++++++++++++Circel Animation++++++++++++++++++++++++++++
const demo =()=>{
const svgCalss = document.querySelectorAll('.progress-circle');
var valuelements = document.getElementsByClassName("count");
var features = new Array(valuelements.length);
 for (var j=0; j<=features.length; j++){ 
  var val = valuelements[j].innerHTML;
  const total = (val/100);
  for (i = 0; i < svgCalss.length; ++i) {
    svgCalss[i].style.strokeDashoffset= total ;
 }
}

}
demo();


