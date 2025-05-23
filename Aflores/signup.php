<?php
require_once 'connection.php';

//Check if form was submitted with email and password
if(isset($_POST['semail']) && $_POST['semail']!="" 
    && isset($_POST['spassword']) && $_POST['spassword']!="") {

    $email = $_POST['semail'];
    $password = $_POST['spassword'];

    //Check if email already exists
    $check_query = "SELECT * FROM user WHERE email='$email'";
    $check_result = mysqli_query($con, $check_query);
    
    if(mysqli_num_rows($check_result) > 0) {
        // if email already exists 
        echo '<script>alert("This email is already registered!"); window.location.href="signup.html";</script>';
        exit();
    } else {
        //we insert the new user the user inputs
        $insert_query = "INSERT INTO user (email, password) VALUES ('$email', '$password')";
        
        if(mysqli_query($con, $insert_query)) {
            //if the addition was succesful
            echo '<script>alert("Registration successful! you can login now!!."); window.location.href="index.html";</script>';
            exit();
        } else {
            //if the database did not get it osea failed connection
            echo '<script>alert("Registration failed... try again."); window.location.href="signup.html";</script>';
            exit();
        }
    }

} else {
    //if the user forgets to fill all the inputs in the form 
    echo '<script>alert("Please fill all the fields to access the website!"); window.location.href="signup.html";</script>';
    exit();
}
//Hanin Idriss 22230309
?>