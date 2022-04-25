document.addEventListener("DOMContentLoaded", function (event) {

origArray = [2,3,4];

document.getElementById("cubebutton").addEventListener("click", function () {

   let map1 = origArray.map(x => x * x * x) ;
   document.getElementById("output1").value= map1[0] ;
   document.getElementById("output2").value= map1[1] ;
   document.getElementById("output3").value= map1[2] ;

})
document.getElementById("fourthbutton").addEventListener("click", tothefourth());
});

function squares(){
    let map1 = origArray.map(x => x * x ) ;
     document.getElementById("output1").value= map1[0] ;
     document.getElementById("output2").value= map1[1] ;
     document.getElementById("output3").value= map1[2] ;
}
function tothefourth(){
    let map3 = origArray.map(x => x * x * x * x );
    document.getElementById("output1").value= map3[0];
    document.getElementById("output2").value= map3[1] ;
    document.getElementById("output3").value= map3[2] ;
}