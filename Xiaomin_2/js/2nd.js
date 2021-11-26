window.onload=function(){
    var mytext = document.getElementsByClassName("mytext");

    for(var i=0; i<mytext.length; i++){
        mytext[i].addEventListener("click",function(){

//                   check the src on console
            console.log(this.src);
//                   add one
          document.getElementById("test2").innerHTML='<img src="'+ this.src +'">';
//                   add a lot
/*                        var img = document.createElement('img');
            img.src = this.src;
            document.getElementById('test').appendChild(img);*/
        })
    }
}
