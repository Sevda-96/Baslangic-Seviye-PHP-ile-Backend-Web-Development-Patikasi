<?php
//ob_start();
function control(){
   $number=$_POST['number'];
   if($number==""){
    echo "<script type='text/javascript'>alert('lütfen alanı boş bırakmayınız');</script>";
   }
   else{  
        if($number % 3 ==0 ){
            echo"<h3>bölünebilir</h3>";
        }
        else{
        while($number % 3 !=0 ){
            $number++;
        }
        echo "<h3>Girilen Sayı : " . $number . "</h3><h3>Girdiğiniz sayı 3 ile bölünemez :( Bölünebilecek ilk sayı :" . $number."</h3>";
        }
   }
   
}
control();
?>