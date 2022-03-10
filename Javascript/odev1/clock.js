//isim al
let name=prompt('Lütfen isminizi giriniz')

//isim icin id
let info=document.querySelector('#myName')

//ismi yazdir
info.innerHTML=`${name}`


//clock fonksiyonu
function showTime(){

    const weekday = ["Pazar","Pazartesi","TSalı","Çarşamba","Perşembe","Cuma","Cumartesi"];
    
    //saat icin id
    let clock=document.querySelector('#myClock')
     
    //let date = new Date().toLocaleString(); //tarih ve saat dk sn olarak alınır. ama biz tarihi değil istiyoruz sadece
    //gun almak icin
    const d = new Date();
    let day = weekday[d.getDay()];

    //saat dakika ve saniye almak icin
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    let time= h + ":" + m + ":" + s;

   document.getElementById('myClock').innerHTML = `${time} ${day}`
}

// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(showTime, 1000);