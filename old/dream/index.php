<!doctype html>
<html>

    <head>
        <title>Dream Gallery</title>
        <meta charset="utf-8">
        <link type="text/css" href="style.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap" rel="stylesheet">
    </head>

    <body>

        <a id="title" href="index.php">Dream Gallery</a>
        <a id="makeYours" href="dream_maker/index.php">Make yours</a>
        <div id="gallery">
            <?php
            $directory = "dream_maker/images/";
            $images = glob($directory . "/*");

            foreach($images as $image)
            {
                echo '<img src="'.$image.'" />';
            }

            ?>
        </div>
    </body>

</html>
