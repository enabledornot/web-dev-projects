<?php
include("rainbowIterator.php");
?>

<!DOCTYPE html>
<html lang="en">
<head>
   <meta charset="utf-8">
   <title>Chapter 11</title>         
    <style>
        div {
           position: relative;   
        }        
        span {
            height: 40px;
            width: 40px;
            border: solid black 1px;
            margin:1px;
            position: absolute;
        }
    </style>   
</head>
<body>
    <div>
        <?php

    $x=$y=0;
    for ($dark=0;$dark<20;$dark+=1) {
        for ($x=0;$x<10;$x+=1) {
            for ($y=0;$y<10;$y+=1) {
                $top = $x * 40 + $dark * 35 + 40;
                $left = $y * 40 + $dark * 35;
                $red = $dark*5 + ((10-$x) + $y) * 5;
                $green = $dark*5 + ($x + (10-$y)) * 5;
                $blue = $dark*5 + ((10-$x) + (10-$y)) * 5;
                $hexColor = "#" . sprintf('%02x',$red) . sprintf('%02x',$green) . sprintf('%02x',$blue);
                
                $styleAttribute = "style='background-color: rgb(" . $red . "," . $green . "," . $blue . "); top: " . $top . "px; left: " . $left . "px;'";
                $titleAttribute = "title='$hexColor'";
                echo "<span " . $styleAttribute . " " . $titleAttribute . "></span>	\n";
            }
        }
    }
    ?>
    </div>


</body>
</html>    