<?php
include('Fonksiyonlar/helper.php');
session_start();

$user=[
   'sevdaengin'=> [
      'fullname'=>'Sevda Engin',
      'eposta'=>'svdngn@outlook.com',
      'password'=> '123456'],
    'enginsevda'=> [
      'fullname'=>'Sevda Engin',
     'eposta'=>'svdngn@outlook.com',
     'password'=> '6789']
];

if(get('islem') == 'giris'){
   $_SESSION['username']=post('username');
   $_SESSION['password']=post('password');
   if(!post('username')){
      $_SESSION['error']= "Lütfen kullanıcı adını giriniz.";
      header('Location: login.php');
      exit();
   }
   elseif(!post('password')){
      $_SESSION['error']= "Lütfen şifrenizi doğru giriniz.";
      header('Location: login.php');
      exit();
   }
   else{
      if(array_key_exists(post('username'), $user)){
         if($user[post('username')]['password']==post('password')){
           $_SESSION['login']=true;
           $_SESSION['kullanıci_adi']=post('username');
           $_SESSION['eposta']=$user[post('username')]['eposta'];
           $_SESSION['fullname']=$user[post('username')]['fullname'];
           
           header('Location: index.php');
           exit();

         }else{
         $_SESSION['error']= "Lütfen kullanıcı adını giriniz..";
         header('Location: login.php');
         exit();
         }
      }
      else{
         $_SESSION['error']= "Böyle bir kullanici yoktur.";
         header('Location: login.php');
         exit();
      }
   }
}

if(get('islem') == 'hakkimda'){
  $hakkimda=post('hakkimda');
  $islem= file_put_contents('db/'.session('kullanıci_adi').'.txt',htmlspecialchars($hakkimda));
  if($islem){
   header('Location: index.php?islem=true');
  }
  else{
   header('Location: index.php?islem=false');
  }
}

if(get('islem') == 'cikis'){
   session_destroy();
   session_start();
   $_SESSION['error']='Oturum sonlandırıldı.';
   header('Location: login.php?cikis=true');
 }

if(get('islem')=='renk'){
 setcookie('color',get('color'), time() + (86400*360));
 header('Location: '.$_SERVER['HTTP_REFERER']?? 'index.php');
}
