<?php


header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

include(__DIR__ . '/../../connection.php');
$objCon = new DatabaseConnect();
$conn = $objCon->connect();
$method = $_SERVER['REQUEST_METHOD']; 

if ($method === 'GET') {
    $sql = "SELECT * FROM users" ;
    $stmt = $conn->prepare($sql) ;
    $stmt->execute() ;
    $users = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($users);
}