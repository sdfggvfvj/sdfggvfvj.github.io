<!doctype html>
<html>

    <head>
        <title>Hello World</title>
        <meta charset="utf-8">
        <link type="text/css" href="style.css" rel="stylesheet">

        <script src="html2canvas.js"></script>
        <script src="html2canvas.min.js"></script>
        <script src="FileSaver.js"></script>
    </head>

    <body>

<!--
        <div class="sommaire">
            <a style="background-color: papayawhip;" href="index.html"><b>hello</b></a>
        </div>
-->

        <form action="upload.php" method="post" enctype="multipart/form-data">
<!--            Select image to upload:<br>-->
            <input type="file" name="fileToUpload" id="fileToUpload">
            <input type="submit" value="Upload Image" name="submit">
        </form>

        <div id="signesContainer">
        <?php
            $directory = "uploads";
            $images = glob($directory . "/*");

            foreach($images as $image)
            {
//                echo '<img src="'.$image.'" /><br>';
                echo '<img src="'.$image.'" />';
            }
        ?>  
        </div>

        
        <div id="sliders">
            <p>SCALE X+Y
                <input type="range" min="1" max="3" value="1" step="0.1" class="slider" id="scaleRange"></p>
            <p>SCALE X
                <input type="range" min="1" max="3" value="1" step="0.1" class="slider" id="scaleRangeX"></p>
            <p>SCALE Y
                <input type="range" min="1" max="3" value="1" step="0.1" class="slider" id="scaleRangeY"></p>
<!--
            <p>MIROIR
                <input type="range" min="-1" max="1" value="1" step="2" class="slider" id="scaleMirror"></p>
-->
            <p>ROTATION
                <input type="range" min="0" max="360" value="0" step="45" class="slider" id="scaleRotate"></p>
        </div>


        <button type="button" id="saveBt">save</button>


        <div id="secondColumn" class="secondColumn">
        </div>
<textarea id="txtArea" placeholder="hello world"></textarea>

        <script src="script.js"></script>

    </body>

</html>