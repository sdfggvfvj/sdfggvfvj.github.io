<!doctype html>
<html>

    <head>
        <title>Re-create your Dreams</title>
        <meta charset="utf-8">
        <link type="text/css" href="../style.css" rel="stylesheet">

        <script src="tools/html2canvas.js"></script>
        <script src="tools/html2canvas.min.js"></script>
        <script src="tools/FileSaver.js"></script>
<link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
    </head>

    <body>
<a id="title" href="../index.php">Dream Gallery</a>
        <?php
        function uploadFunction(){

            $target_dir = "uploads/";
            $target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
            $uploadOk = 1;
            $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

            // Check if image file is a actual image or fake image
            if(isset($_POST["submit"])) {
                $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
                if($check !== false) {
                    //    echo "File is an image - " . $check["mime"] . ".";
                    $uploadOk = 1;
                } else {
                    echo "File is not an image.";
                    $uploadOk = 0;
                }
            }

            // Check if file already exists
            if (file_exists($target_file)) {
                echo "Sorry, file already exists.";
                $uploadOk = 0;
            }

            // Allow certain file formats
            if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
               && $imageFileType != "gif" ) {
                echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
                $uploadOk = 0;
            }

            // Check if $uploadOk is set to 0 by an error
            if ($uploadOk == 0) {
                echo "Sorry, your file was not uploaded.";
                // if everything is ok, try to upload file
            } else {
                if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
                    echo "The file ". htmlspecialchars( basename( $_FILES["fileToUpload"]["name"])). " has been uploaded.";
                } else {
                    echo "Sorry, there was an error uploading your file.";
                }
            }
        }
        ?>


        <div id="signesContainer">
            <?php
            $directory = "uploads";
            $images = glob($directory . "/*");

            foreach($images as $image)
            {
                echo '<img src="'.$image.'" />';
            }

            ?>
        </div>
<div class='intro'>
  <p> ↑the pictures you uploaded will be here, use it to make your dreams:)</p>
</div>


        <div id="sliders">
            <form onclick="<?php uploadFunction() ?>" method="post" enctype="multipart/form-data">
            <input class="bouton" type="file" name="fileToUpload" id="fileToUpload">
            <input class="bouton" type="submit" value="Submit and refresh" name="submit">
        </form>
      <p><button class="bouton" id="suppr">DELETE it</button></p>
        <p><button class="bouton" id="duplicate">Duplicate it</button></p>
            <div class= 'scale'>
            <p>SCALE X+Y
                <input type="range" min="1" max="4" value="1" step="0.1" class="slider" id="scaleRange"></p>
            <p>SCALE X
                <input type="range" min="1" max="3" value="1" step="0.1" class="slider" id="scaleRangeX"></p>
            <p>SCALE Y
                <input type="range" min="1" max="3" value="1" step="0.1" class="slider" id="scaleRangeY"></p>
            <p>ROTATION
                <input type="range" min="0" max="360" value="0" step="45" class="slider" id="scaleRotate"></p>
            <p>Z-INDEX<button class="slidersButton" id="zindexless">-</button><button class="slidersButton" id="zindexmore">+</button></p>
</div>
        </div>

        <button type="button" id="saveBt">Save and submit to Dream Gallery</button>

        <div id="secondColumn" class="secondColumn">
        </div>
        <textarea id="txtArea" wrap="hard" rows="5" cols="50" placeholder="describe your dream here"></textarea>

        <script src="script.js"></script>

    </body>

</html>
