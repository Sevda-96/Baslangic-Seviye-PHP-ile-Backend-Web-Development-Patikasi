<?php
$planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "", "Saturn", "Uranus", "Neptune",  "", NULL];

function myFunction($dizi, $value){
    $arrayFilter=array_filter($dizi);//diziyi filtereler "" ve Null olanları çıkartır. 

    $arrayRand=array_rand($arrayFilter,$value); 
    /*filtreli dizeye parametre ile gonderilen değer kadar random key dondurur. Key uretir dolayısıyla value yok.
    Array
    (
        [0] => 1
        [1] => 7
    ) gibi cikti verir.*/

    //array_map() degerlere ulasabilkmek icin.
    $array=array_map(function($e) use ($arrayFilter){ // degerleri alabilmek icin filtreli diziye ihtiyac olacak.
        return $arrayFilter[$e]; //$e key olur.
    },$arrayRand);
    
    return $array;
}
print_r(myFunction($planets, 2));
print_r(myFunction($planets, 3));
print_r(myFunction($planets, 2));
print_r(myFunction($planets, 4));
print_r(myFunction($planets, 5));

?>