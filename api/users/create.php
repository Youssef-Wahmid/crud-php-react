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
$inputs = json_decode(file_get_contents('php://input'));
if ($method==='POST') {
    $sql = "INSERT INTO users (id, name, email, phone, created_at) VALUES (null, :name, :email, :phone, null)";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':name', $inputs->userName);
    $stmt->bindParam(':email', $inputs->userEmail);
    $stmt->bindParam(':phone', $inputs->userPhone);

    if($stmt->execute()){
        $res = [ 
            'status' => 'success',
            'message' => 'Data inserted successfully',
            'inserted_id' => $conn->lastInsertId(),
            'affected_rows' => $stmt->rowCount()
        ];
       echo json_encode($res);

    }else{
        $res([
            'status' => 'error',
            'message' => 'Failed to insert data'
        ]);
        echo json_encode($res) ;
    }
}