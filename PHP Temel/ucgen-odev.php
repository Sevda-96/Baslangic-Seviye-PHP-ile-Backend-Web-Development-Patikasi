<?php

function ucgen($param){
    $count=0;
    while($count<$param){
        for($i=0; $i<=$count; $i++){
            echo '*';
        }
      $count++;
      print "\n";
    }
    
}
ucgen(15);
?>