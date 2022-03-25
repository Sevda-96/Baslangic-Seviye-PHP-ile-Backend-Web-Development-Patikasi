let listForm=document.querySelector('#toDoList')
let ListDom=document.querySelector('#list');
listForm.addEventListener('submit',formHandler)

const TASK=document.querySelector('#task');

//fonksiyon cagir
function formHandler(event){
    event.preventDefault();
    let list=document.createElement('li');
    const TASK=document.querySelector('#task');

    if(TASK.value!=null && TASK.value!=""){

        let liDom=window.localStorage.setItem(`item ${localStorage.length + 1}`,JSON.stringify(TASK.value)); //key ve deger  yazılır.
        liDom=JSON.parse(localStorage.getItem("item")); //vermis oldugumuz key ile alınır.
 
        list.innerHTML=`${TASK.value}`;
        ListDom.appendChild(list);
        
        let toastsuccess = document.querySelector('.success');
        //htmldeki bootstrap toastini sectik
        let toastAlertSuccess = new bootstrap.Toast(toastsuccess);
        /*Sectigimiz bootstrap selektorunu new Bootstrap constructor'u kullanarak obje haline getirdik*/
        toastAlertSuccess.show();
        

    }
    else{
        let toasterror = document.querySelector('.error');
        //htmldeki bootstrap toastini sectik
        let toastAlertError= new bootstrap.Toast(toasterror);
        /*Sectigimiz bootstrap selektorunu new Bootstrap constructor'u kullanarak obje haline getirdik*/
        toastAlertError.show();
    }

    list.addEventListener(`dblclick`, function () { // X butonu eklemek yerine liDOM'a 2 Kez tıklanması durumunda liDOM'un yani yapılacak to do'nun silinmesini sağladık.
        
        localStorage.removeItem(`item`);
        localStorage.clear()
        list.remove();

    })
    list.addEventListener(`mouseover`, function () { 
        list.style.textDecoration = "line-through"; 
        list.style.cursor = "pointer"
        list.classList.add(
            'alert-danger'
        )
    })
    list.addEventListener(`mouseout`, function () { 
        list.style.textDecoration = ""; 
        list.style.cursor = "";
        
    })
    TASK.value="" //input temizlenir.
    
}

 


