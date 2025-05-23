
<?php                              //Hanin Idriss 22230309
include 'connection.php';
  $query="select * from user;";
$result=mysqli_query($con,$query);
$r=mysqli_num_rows($result);
?>
<table border="1">
    <tr><td>email</td><td>password</td></tr>
  <?php
    for($i=0;$i<$r;$i++)
    {
     $fetched_row= mysqli_fetch_assoc($result);
     
     $email=$fetched_row['email'];
     $password=$fetched_row['password'];
             
     echo"<tr><td><input type=text  value=$email></td><td><input type=text  value=$password></td>"
             . "</tr>";
            
    }

  ?>
    </table>

    <!-- to go to homepage  -->
<a href="homepage.html" class="home-button">Go to Homepage</a>
<style>
.home-button {
    display:inline-block;
    padding: 10px 20px;
    background:#f74b65 ;
    color: white;
    text-decoration: none;
    border-radius: 5px;
    margin-top: 20px;
    transition: all ease 0.3s;
}

.home-button:hover {
    opacity: 0.7;
;
}
</style>

