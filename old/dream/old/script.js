//ajouts d'écouteurs
window.addEventListener("load", setup);
window.addEventListener("mousemove", onMouseMove);
window.addEventListener("mouseup", onMouseUp);
//window.addEventListener("mousedown", up);

//mémoire générale de l'image à faire déplacer
var selectedImg;
//pour appliquer les transformations
var currentImg;
//liste des copy
var copyImg = [];

var scaleRange;
//var scaleMirror;
var scaleRangeX;
var scaleRangeY;
var rotateRange;
var saveBt;

var zindexmore = document.getElementById("zindexmore");
var zindexless = document.getElementById("zindexless");
var suppr = document.getElementById("suppr");
var duplicate = document.getElementById("duplicate");

//init
function setup() {

    var signesContainer = document.getElementById("signesContainer");
    //les images qui font icones de duplication!! (à l'intérieur des div)
    var signesContainerImg = signesContainer.getElementsByTagName("img");

    //ajout de l'évenement pour le mousedown = drag
    for (var i = 0; i < signesContainerImg.length; i++) {
        var img = signesContainerImg[i];
        img.addEventListener("mousedown", duplicateMe);
    }

    suppr.onclick=function(){
        if (currentImg) {
            currentImg.remove();
        }
    }    
    duplicate.onclick=function(){
        if (currentImg) {
            var copy = currentImg.cloneNode(true);
            copy.style.position = "absolute";
            copy.transform = {
                "translation": { x: 0, y: 0 },
                "scaleX": scaleRangeX.value,
                "scaleY": scaleRangeY.value,
                "rotate": rotateRange.value
            }
            copy.transform.translation.x = event.clientX;
            copy.transform.translation.y = event.clientY;

            apply(copy);

            //add a moveMe Event
            copy.addEventListener("mousedown", moveMe);
            //add to the array for further use (print)
            copyImg.push(copy);
            //give an id to this copy
            copy.id = "copy" + copyImg.length;
            //add to the drop area for display
            secondColumn.appendChild(copy);

            selectedImg = copy;//pour le déplacement souris
            currentImg = copy;//pour les transformation

            //mise à jour val acutelle des sliders
            scaleRange.value = currentImg.transform.scale;
            //    scaleMirror.value = currentImg.transform.scaleX;
            //    scaleRange.value = currentImg.transform.scaleY;
            scaleRangeX.value = currentImg.transform.scaleX;
            scaleRangeY.value = currentImg.transform.scaleY;
            rotateRange.value = currentImg.transform.rotate;
        }
    }

    var j = -1;
    var k = 1;
    zindexmore.onclick=function(){
        if (currentImg) {
            currentImg.style.zIndex = currentImg.style.zIndex-j;
        }
    }

    zindexless.onclick=function(){
        if (currentImg) {
            currentImg.style.zIndex = currentImg.style.zIndex-k;
        }
    }

    //références aux sliders
    scaleRange = document.getElementById("scaleRange");
    scaleRange.addEventListener("input", function () {
        console.log(this.value);
        if (currentImg) {
            currentImg.transform.scaleX = this.value;
            currentImg.transform.scaleY = this.value;
            apply(currentImg);
        }
    });
    /*   scaleMirror = document.getElementById("scaleMirror");
    scaleMirror.addEventListener("input", function () {
        console.log(this.value);
        if (currentImg) {
            currentImg.transform.scaleX = this.value;
//            currentImg.transform.scaleY = this.value;
            apply(currentImg);
        }
    });
    */

    scaleRangeX = document.getElementById("scaleRangeX");
    scaleRangeX.addEventListener("input", function () {
        console.log(this.value);
        if (currentImg) {
            currentImg.transform.scaleX = this.value;
            apply(currentImg);
        }
    });

    scaleRangeY = document.getElementById("scaleRangeY");
    scaleRangeY.addEventListener("input", function () {
        console.log(this.value);
        if (currentImg) {
            currentImg.transform.scaleY = this.value;
            apply(currentImg);
        }
    });

    rotateRange = document.getElementById("scaleRotate");
    rotateRange.addEventListener("input", function () {
        console.log(this.value);
        if (currentImg) {
            currentImg.transform.rotate = this.value;
            apply(currentImg);
        }
    });

    //bouton de sauvegarde
    saveBt = document.getElementById("saveBt");
    saveBt.addEventListener("click", function () {
        var txtArea = document.getElementById("txtArea");
        var secondColumn = document.getElementById("secondColumn");
        secondColumn.appendChild(txtArea);

        save();
    });
}

//duplication function
function duplicateMe(event) {

    event.preventDefault();

    var copy = this.cloneNode();
    copy.style.position = "absolute";
    copy.transform = {
        "translation": { x: 0, y: 0 },
        //        "scale": {scaleX: 1, scaleY: 1},
        "scaleX": 1,
        "scaleY": 1,
        "rotate": 0
        //        "zIndex": 1
    }

    copy.transform.translation.x = event.clientX;
    copy.transform.translation.y = event.clientY;

    apply(copy);

    //add a moveMe Event
    copy.addEventListener("mousedown", moveMe);
    //add to the array for further use (print)
    copyImg.push(copy);
    //give an id to this copy
    copy.id = "copy" + copyImg.length;
    //add to the drop area for display
    secondColumn.appendChild(copy);

    selectedImg = copy;//pour le déplacement souris
    currentImg = copy;//pour les transformation

    //mise à jour val acutelle des sliders
    scaleRange.value = currentImg.transform.scale;
    //    scaleMirror.value = currentImg.transform.scaleX;
    //    scaleRange.value = currentImg.transform.scaleY;
    scaleRangeX.value = currentImg.transform.scaleX;
    scaleRangeY.value = currentImg.transform.scaleY;
    rotateRange.value = currentImg.transform.rotate;
}

//selection image à traiter (mouseDown)
function moveMe(event) {

    event.preventDefault();
    console.log(event.target.transform);

    selectedImg = event.target;
    currentImg = event.target;


    //    zindex1.value = currentImg.transform.zIndex;
    scaleRange.value = currentImg.transform.scale;
    //    scaleMirror.value = currentImg.transform.scaleX;
    scaleRangeX.value = currentImg.transform.scaleX;
    scaleRangeY.value = currentImg.transform.scaleY;
    rotateRange.value = currentImg.transform.rotate;
}

//déplacer l'image courante
function onMouseMove(event) {

    if (selectedImg) {
        //@TODO : centrer l'image au curseurs
        var x = event.clientX - selectedImg.width / 2;
        var y = event.clientY - selectedImg.height / 2;

        selectedImg.transform.translation.x = x;
        selectedImg.transform.translation.y = y;
        apply(selectedImg);
    }
}

//relacher l'image en manipulation
function onMouseUp(event) {
    selectedImg = undefined;
}

// function scale(element, val) {

//     element.transform.scale = val;
//     var scale = element.transform.scale;

//     element.style.transform = "scale(" + scale + "," + scale + ") rotate(0deg)";
//     element.style.webkitTransform = "scale(" + scale + "," + scale + ") rotate(0deg)";
// }

//application au css
function apply(element) {

    element.style.left = element.transform.translation.x + "px";
    element.style.top = element.transform.translation.y + "px";


    //    element.style.transform = " scaleX(" + element.transform.scaleX +") scaleY(" + element.transform.scaleY +") rotate(" + element.transform.rotate + "deg)";


    element.style.transform = "scaleX(" + element.transform.scaleX +") scaleY(" + element.transform.scaleY +") scale(" + element.transform.scaleX +  "," + element.transform.scaleY + ") rotate(" + element.transform.rotate + "deg)";

    //    element.style.transform = "scale(" + element.transform.scale + "," + element.transform.scale + ") rotate(" + element.transform.rotate + "deg)";

    //    element.style.webkitTransform = "scale(" + element.transform.scale + "," + element.transform.scale + ") rotate(" + element.transform.rotate + "deg)";
}

//
//currentImg.addEventListener ("mousedown", up);
//
//function up (event){
//    currentImg.style.zIndex="20";
//}


//principe d'enregistrement d'une image

function save() {
    console.log("save...");
    html2canvas(document.getElementById("secondColumn")).then((canvas) => {
        canvas.toBlob(function (blob) {
            saveAs(blob, "save.png");
        }); 
    });
}

