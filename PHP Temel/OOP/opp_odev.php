<?php

//Sekil adında bir sınıf oluşturun ve bu sınıfından türeterek Dikdortgen, Ucgen ve Kare isimlerinde 3 sınıf daha oluşturun.
//Amacımız; en mantıklı yoldan daha az kod yazarak her şeklin özelinde kendini alan ve çevrelerini hesaplamak.

class Sekil{
    public  $kenar1;
    public  $kenar2;
    public  $kenar3;

    public function __construct($kenar1,$kenar2=null,$kenar3=null) 
    {
     $this->kenar1=$kenar1;
     $this->kenar2=$kenar2;
     $this->kenar3=$kenar3; 
    }

    public function __destruct(){}

}

class Dikdortgen extends Sekil{

    public function cevreHesapla(){
        return ($this->kenar1 + $this->kenar2) *2 ;
    }

    public function alanHesapla(){
        return $this->kenar1* $this->kenar2;
    }

}

class Ucgen extends Sekil{

    public function cevreHesapla(){
        return $this->kenar1 + $this->kenar2 + $this->kenar3 ;
    }

    public function alanHesapla(){

        $c=$this->cevreHesapla();
        return sqrt($c*($c-$this->kenar1)* $c*($c-$this->kenar2) * $c*($c-$this->kenar3));
    }

}
class Kare extends Sekil{
    public function cevreHesapla(){
        return $this->kenar1 * 4 ;
    }

    public function alanHesapla(){
        return $this->kenar1 * $this->kenar1;
    }
}

$ucgen = new Ucgen(10,10,10);
$dikdortgen =  new Dikdortgen(10,5);
$kare = new Kare(10);

echo "Kare Çevresi: " . $kare->cevreHesapla() . "<br/>";
echo "Kare Alanı: " . $kare->alanHesapla() . "<br/>";
echo "################<br/>";

echo "Üçgen Çevresi: " . $ucgen->cevreHesapla() . "<br/>";
echo "Üçgen Alanı: " . $ucgen->alanHesapla() . "<br/>";
echo "################<br/>";

echo "Dikdörtgen Çevresi: " . $dikdortgen->cevreHesapla() . "<br/>";
echo "Dikdörtgen Alanı: " . $dikdortgen->alanHesapla() . "<br/>";


?>