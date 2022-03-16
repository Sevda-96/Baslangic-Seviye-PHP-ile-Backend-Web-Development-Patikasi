/*
FORMLARLA ÇALIŞMAK: Bölüm Sonu Egzersizi  
Genel Plan:
Form seçimi
Input Bilgisini UL içerisine ekle
Form içindeki bilgiyi sıfırla
Eğer forma bilgi girilmez ise kullanıcıyı uyar

*/

let userForm=document.querySelector('#userForm');
userForm.addEventListener('submit',formHandler);

const alertDom=document.querySelector('#alert')

const alertFunction= (message,className='warning') => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong ></strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`
//submit islemi
function formHandler(event){
    event.preventDefault();
    const USER_NAME= document.querySelector('#username');
    const SCORE= document.querySelector('#score');
    let note

    if(USER_NAME.value && SCORE.value){
        addItem(USER_NAME.value,SCORE.value,note) // fonksiyondan sonra inputlari temizler
        USER_NAME.value="";
        SCORE.value=" ";
        alertDom.innerHTML=alertFunction(
            'Başarılı',
            'success')
    }else{
        alertDom.innerHTML=alertFunction(
            'Hatalı Eksik Bilgi ',
            'danger')
        USER_NAME.value="";
        SCORE.value=" ";
    }
    
}

const SMILE=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-smile" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`
const SAD=`
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-emoji-frown" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M4.285 12.433a.5.5 0 0 0 .683-.183A3.498 3.498 0 0 1 8 10.5c1.295 0 2.426.703 3.032 1.75a.5.5 0 0 0 .866-.5A4.498 4.498 0 0 0 8 9.5a4.5 4.5 0 0 0-3.898 2.25.5.5 0 0 0 .183.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>`


//girilen score kontrol eder ve listeye ekler
let userListDom=document.querySelector('#userList');
const addItem = (userName , score , note) => {
    let liDom=document.createElement('li')
    let textinfo=document.createElement('span')

    textinfo=SMILE
    if(score>=90){
        textinfo +=' AA'
    } else if(score>=85){
        textinfo +=' BA'
    } else if(score>=80){
        textinfo=' BB'
    } else if(score>=75){
        textinfo +=' CB'
    } else if(score>=70){
        textinfo +=' CC'
    } else if(score>=65){
        textinfo +=' DC'
    } else if(score>=60){
        textinfo +=' DD'
    } else if(score>=50){
        textinfo +=' FD'
    } else if(score<50){
        textinfo =`${SAD} FF`
    } 

    liDom.innerHTML=`${userName}<span class="badge bg-info rounded-pill">${textinfo}</span><span class="badge bg-primary rounded-pill"> ${score}</span> `
    liDom.classList.add(
        'list-group-item', 'd-flex' , 'justify-content-between', 'align-items-center'
    )
    userListDom.append(liDom)
    
}
//sıfırlama
userForm.addEventListener('reset',resetInput);

function resetInput(event){
    USER_NAME.value="";
    SCORE.value=" ";
}