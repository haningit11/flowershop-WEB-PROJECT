<?php
require_once 'connection.php';

if(isset($_POST['lemail']) && $_POST['lemail']!=""
    && isset($_POST['lpassword']) && $_POST['lpassword']!="")   
{
    $email = $_POST['lemail'];
    $password = $_POST['lpassword'];
    
    $query = "SELECT * FROM user WHERE email='$email' AND password='$password'";
    $res = mysqli_query($con, $query);
    $nbrows = mysqli_num_rows($res);
    
    if($nbrows == 1) {
        header("Location: main.php");
        exit();
    }
    else {
        //show alert and te deja donde estas
        echo '<script>alert("Incorrect email or password!... try again!"); window.location.href="index.html";</script>';
        exit();
    }
}
?>