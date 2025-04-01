<?php
class DatabaseConnect {
    private $host ='localhost';
    private $dbname = 'crud_php_react';
    private $username = 'root';
    private $password='';



    public function connect() {
        try {
            $conn = new PDO('mysql:host=' . $this->host . ';dbname=' . $this->dbname, $this->username, $this->password);
            $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION) ;

            return $conn ;
           
        } catch (\Exception $e) {
            echo "Database connection failed: " . $e->getMessage();
        }
    }

 // ? Testing connection
    // public function testConnection() {
    //     $conn = $this->connect();
    //     if ($conn) {
    //         echo "Connection successful!";
    //     } else {
    //         echo "Connection failed.";
    //     }
    // }
}


?>