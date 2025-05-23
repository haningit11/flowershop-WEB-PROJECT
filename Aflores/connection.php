
<?php     //connection.php file

$con = mysqli_connect("localhost", "root", "" ,   "floresdb");
if (mysqli_connect_errno()) {
    echo "Failed to connect to database: " . mysqli_connect_error();
} else {
    echo "connecteeed";
}
?>