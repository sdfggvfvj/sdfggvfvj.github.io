window.onload=function(){
    var myimg = document.getElementsByClassName("myimg");

    for(var i=0; i<myimg.length; i++){
        myimg[i].addEventListener("click",function(){

//                   check the src on console
            console.log(this.src);
//                   add one
          document.getElementById("test").innerHTML='<img src="'+ this.src +'">';
//                   add a lot
/*                        var img = document.createElement('img');
            img.src = this.src;
            document.getElementById('test').appendChild(img);*/
        })
      }
// second work //
        var myimg2 = document.getElementsByClassName("myimg2");

        for(var i=0; i<myimg2.length; i++){
            myimg2[i].addEventListener("click",function(){

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
