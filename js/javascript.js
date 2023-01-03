var liste = document.querySelector("#list");


var urun = document.querySelector("#task"); 
var ekle = document.querySelector("#liveToastBtn");



ekle.addEventListener("click",function(){
    // createElement ile yeni bir listItem (li) oluşturuyoruz
    var li=document.createElement("li"); 
   
    
    
    // Input ile gelen veriyi "li" içerisine metin olarak giriyoruz.
    li.textContent=task.value; 
    
    // appendChild ile oluşturduğumuz elementi "liste" isimli değişkenimizin içerisine ekliyoruz.
    liste.appendChild(li);
   
                
    // Veri inputu içerisindeki metni siliyoruz.
    veri.value = "";
  });

 