<?php
// Path: src/assets/getData.php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); // Permitir solicitudes desde cualquier origen

// Configuración de la conexión a la base de datos
define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '12345678');
define('DB_NAME', 'novus');

$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Verificar la conexión
if (!$conn) {
    http_response_code(500); // Error interno del servidor
    echo json_encode(['error' => 'Error al conectar con la base de datos']);
    exit;
}

// Consulta a la base de datos
$sql = "SELECT unixtime, HR_COUNTER1, HR_COUNTER2 
        FROM intervalproduction 
        ORDER BY unixtime DESC 
        LIMIT 100";

$result = mysqli_query($conn, $sql);

// Verificar si se obtuvo un resultado
if (!$result) {
    http_response_code(500); // Error interno del servidor
    echo json_encode(['error' => 'Error en la consulta SQL']);
    exit;
}

$data = [];
while ($row = mysqli_fetch_assoc($result)) {
    $data[] = [
        'unixtime' => (int) $row['unixtime'],
        'HR_COUNTER1' => (float) $row['HR_COUNTER1'],
        'HR_COUNTER2' => (float) $row['HR_COUNTER2']
    ];
}

// Devolver los datos en formato JSON
echo json_encode($data);

// Cerrar la conexión a la base de datos
mysqli_close($conn);
?>
