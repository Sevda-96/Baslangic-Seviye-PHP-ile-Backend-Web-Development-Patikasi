<?php
/*
class User{
    const YAS=26;
    public $isim='sevda';
    public function view(){
      return $this->isim;
    }
    public function topla($a,$b){
        return $a + $b;

    }
}
echo User::YAS;
$user = new User();
echo ' ';
echo $user-> topla(10, 20);*/

//Private Protected Public
/*
class User{
    public $posta; //heryerden erişilebilir.
    private $isim; // sadece sinif içerisinde erişilebilir ve miras sınıflari içersinde de erişebilir.
    protected $soyisim ;   // Dışarıdan erişilmez. Sınıf içinde erişilebilir.
}
*/

//__construct() yapici , __destruct() yikici fonksiyonlar
/*
class User{
    private $isim; 
    private $soyisim ; 

    public function __construct($isim, $soyisim){

      $this->isim = $isim;
      $this ->soyisim = $soyisim;

    }
    public function __destruct()
    {
      $this->isim = null;
      $this -> soyisim = null;
    }
    public function isimYaz(){
        return $this->isim.' '.$this->soyisim;
    }
   
}

$kullanici = new User('Sevda', 'Engin'); //__construct iki parametreli olduğundan class a iki parametre girmemiz gereki.
echo $kullanici->isimYaz();
*/

// Kalitim
class Hash{
    public function md5Hash($string){
       return md5($string).' Hash Class';
    }
   
}

class User extends Hash{ //extends ile Hash class indan miras aldiğimiz belirttik.

    public $username;
    public $password;
    
    public function md5Hash($string){
        return md5($string).' User Class';
    }
    public function saveUser($username, $password ){
        $this->username=$username;
        //$this->username=$this->md5HAsh($password); //  User classin icerisinde md5Hash fonksiyonu oldugundan onu calistirdi.
        $this->username=parent::md5Hash($password);// mirasi aldigimiz fonksiyonun calismasini istedik. 
        
    }
    public function show(){
        echo $this->username;
        echo $this->password;
        

    }
}

$kullanici = new User();
$kullanici->saveUser('sevda','123456');
 $kullanici->show();
?>