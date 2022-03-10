document.onkeydown = function(e){
    if (e.keyCode == 65){
        document.getElementById("txt").innerHTML += 'a';
        document.getElementById("audio").play()
    }
    if (e.keyCode == 48){
        document.getElementById("txt").innerHTML += 'à';
        document.getElementById("audio").play()
    }
    if (e.keyCode == 66){
        document.getElementById("txt").innerHTML += 'b';
        document.getElementById("audio1").play()
    }
    if (e.keyCode == 67){
        document.getElementById("txt").innerHTML += 'c';
        document.getElementById("audio2").play()
    }
    if (e.keyCode == 57){
        document.getElementById("txt").innerHTML += 'ç';
        document.getElementById("audio2").play()
    }
    if (e.keyCode == 68){
        document.getElementById("txt").innerHTML += 'd';
        document.getElementById("audio3").play()
    }
    if (e.keyCode == 69){
        document.getElementById("txt").innerHTML += 'e';
        document.getElementById("audio4").play()
    }
    if (e.keyCode == 50){
        document.getElementById("txt").innerHTML += 'é';
        document.getElementById("audio4").play()
    }
    if (e.keyCode == 55){
        document.getElementById("txt").innerHTML += 'è';
        document.getElementById("audio4").play()
    }
    if (e.keyCode == 49){
        document.getElementById("txt").innerHTML += '&';
        document.getElementById("audio4").play()
    }
    if (e.keyCode == 70){
        document.getElementById("txt").innerHTML += 'f';
        document.getElementById("audio5").play()
    }
    if (e.keyCode == 71){
        document.getElementById("txt").innerHTML += 'g';
        document.getElementById("audio6").play()
    }
    if (e.keyCode == 72){
        document.getElementById("txt").innerHTML += 'h';
        document.getElementById("audio7").play()
    }
    if (e.keyCode == 73){
        document.getElementById("txt").innerHTML += 'i';
        document.getElementById("audio8").play()
    }
    if (e.keyCode == 74){
        document.getElementById("txt").innerHTML += 'j';
        document.getElementById("audio9").play()
    }
    if (e.keyCode == 75){
        document.getElementById("txt").innerHTML += 'k';
        document.getElementById("audio10").play()
    }
    if (e.keyCode == 76){
        document.getElementById("txt").innerHTML += 'l';
        document.getElementById("audio11").play()
    }
    if (e.keyCode == 77){
        document.getElementById("txt").innerHTML += 'm';
        document.getElementById("audio12").play()
    }
    if (e.keyCode == 78){
        document.getElementById("txt").innerHTML += 'n';
        document.getElementById("audio13").play()
    }
    if (e.keyCode == 79){
        document.getElementById("txt").innerHTML += 'o';
        document.getElementById("audio14").play()
    }
    if (e.keyCode == 80){
        document.getElementById("txt").innerHTML += 'p';
        document.getElementById("audio15").play()
    }
    if (e.keyCode == 81){
        document.getElementById("txt").innerHTML += 'q';
        document.getElementById("audio16").play()
    }
    if (e.keyCode == 82){
        document.getElementById("txt").innerHTML += 'r';
        document.getElementById("audio17").play()
    }
    if (e.keyCode == 83){
        document.getElementById("txt").innerHTML += 's';
        document.getElementById("audio18").play()
    }
    if (e.keyCode == 84){
        document.getElementById("txt").innerHTML += 't';
        document.getElementById("audio19").play()
    }
    if (e.keyCode == 85){
        document.getElementById("txt").innerHTML += 'u';
        document.getElementById("audio20").play()
    }
    if (e.keyCode == 86){
        document.getElementById("txt").innerHTML += 'v';
        document.getElementById("audio21").play()
    }
    if (e.keyCode == 87){
        document.getElementById("txt").innerHTML += 'w';
        document.getElementById("audio22").play()
    }
    if (e.keyCode == 88){
        document.getElementById("txt").innerHTML += 'x';
        document.getElementById("audio23").play()
    }
    if (e.keyCode == 89){
        document.getElementById("txt").innerHTML += 'y';
        document.getElementById("audio24").play()
    }
    if (e.keyCode == 90){
        document.getElementById("txt").innerHTML += 'z';
        document.getElementById("audio25").play()
    }
    
 //_________________________________________bonus   
    
    if (e.keyCode == 32){
        document.getElementById("txt").innerHTML += ' ';
    }
    if (e.keyCode == 13){
        document.getElementById("txt").innerHTML += '<br> ';
    }
    if (e.keyCode == 222){
        document.getElementById("txt").innerHTML += "'";
    }
    if (e.keyCode == 189){
        document.getElementById("txt").innerHTML += "-";
    }
    if (e.keyCode == 56){
        document.getElementById("txt").innerHTML += "!";
    }
    if (e.keyCode == 188){
        document.getElementById("txt").innerHTML += ",";
    }
    if (e.keyCode == 8){
        window.location.reload();
    }
}