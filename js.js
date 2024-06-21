var favs = Array.from(document.querySelectorAll(".fa-heart"));
var deletebtns = Array.from(document.querySelectorAll(".fa-trash-alt"));
var cards = Array.from(document.querySelectorAll(".card"));
var plusBtns = Array.from(document.querySelectorAll(".fa-plus-circle"));
var minusBtns = Array.from(document.querySelectorAll(".fa-minus-circle"));

//  for(let plusBtns of plusBtns ){
//      plusBtn.addEventListenner("click",function(){
//          plusBtn.nextElementSibling.innerHTML++
//      })
//  }
for (let plusBtn of plusBtns) {
  plusBtn.addEventListener("click", function () {
    plusBtn.nextElementSibling.innerHTML++;
    total();
  });
}

for (let minusBtn of minusBtns) {
  minusBtn.addEventListener("click", function () {
    minusBtn.previousElementSibling.innerHTML > 0
      ? minusBtn.previousElementSibling.innerHTML--
      : null;
    total();
  });
}

for (let i in deletebtns) {
  deletebtns[i].addEventListener("click", function () {
    cards[i].remove();
    total();
  });
}

for (let fav of favs) {
  fav.addEventListener("click", function () {
    if (fav.style.color == "black") {
      fav.style.color = "red";
    } else {
      fav.style.color = "black";
    }
  });
}

// function total() {
//     let s=0
//     let qte=Array.from(document.querySelectorAll(".qte"));
//     let price=Array.from(document.querySelectorAll(".unit-price"));
//     for (let i=0; i<price.length ; i++) {
//         s=s+price[i].innerHTML*qte[i].innerHTML=
//     }
//     document.getElementById("total-price").innerHTML

// }
function total() {
  let s = 0;
  var qte = Array.from(document.querySelectorAll(".qute"));
  var price = Array.from(document.querySelectorAll(".unitt-price"));
  for (let i = 0; i < price.length; i++) {
    s = s + price[i].innerHTML * qte[i].innerHTML;
  }
  document.getElementById("total-price").innerHTML = s;
}
