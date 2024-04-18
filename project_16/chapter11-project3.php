<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Chapter 7</title>

      <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="css/bootstrap.min.css" />
    <link rel="stylesheet" href="css/bootstrap-theme.css" />

</head>
<?php
    function generateLink($url, $label, $class) {
        echo "<a href='" . $url . "' class='" . $class . "'>" . $label . "</a>";
    }
?>
<body>
    <?php
        include("header.inc.php");
    ?>


    <!-- Page Content -->
    <main class="container">
        <div class="row">
            <?php
                include("left.inc.php");
            ?>
            
            
            <div class="col-md-10">

                <div class="jumbotron" id="postJumbo">
                    <h1>Posts</h1>
                    <p>Read other travellers' posts ... or create your own.</p>
                    <p><a class="btn btn-warning btn-lg">Learn more &raquo;</a></p>
                </div>        
      
                 <!-- start post summaries -->
                 <div class="postlist">

                   <!-- replace each of these rows with a function call -->
                   <?php
                    include("travel-data.inc.php");
                    function generateReviewStars($number_of_stars, $number_of_reviews) {
                        echo '<p class="ratings">';
                        for($i=0;$i<5;$i++) {
                            if($i < $number_of_stars) {
                                echo '<img src="images/star-gold.svg" width="16" />';
                            }
                            else {
                                echo '<img src="images/star-white.svg" width="16" />';
                            }
                        }
                        echo $number_of_reviews . 'Reviews</p>';
                    }
                    function outputPostRow($number) {
                        echo '<div class="row">
                        <div class="col-md-4"> 
                           <a href="post.php?id=' . $GLOBALS["postId" . $number] . '" class=""><img src="images/' . $GLOBALS["thumb" . $number] . '" alt="' . $GLOBALS["title" . $number] . '" class="img-responsive"/></a>
                           </div>
                           <div class="col-md-8"> 
                              <h2>' . $GLOBALS["title" . $number] . '</h2>
                              <div class="details">
                                Posted by <a href="user.php?id=' . $GLOBALS["userId" . $number] . '">' . $GLOBALS["userName" . $number] . '</a>
                                <span class="pull-right">' . $GLOBALS["date" . $number] . '</span>';
                        generateReviewStars($GLOBALS["reviewsRating" . $number], $GLOBALS["reviewsNum" . $number]);
                        echo '</div>
                        <p class="excerpt">' . $GLOBALS["excerpt" . $number] . '</p>
                        <p class="pull-right"><a href="post.php?id=1" class="btn btn-primary btn-sm">Read more</a></p>
                     </div>
                 </div>  <!-- /.row -->
                 <hr/>'; 
                    }
                    outputPostRow(1);
                    outputPostRow(2);
                    outputPostRow(3);
                   ?>
                                          
                 </div>   <!-- end postlist -->         
                            
            </div>  <!-- end col-md-10 -->
        </div>   <!-- end row -->
    </main>
    

        <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</body>

</html>