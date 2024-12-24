<?php
// Path: src/assets/getData.php

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

define('DB_SERVER', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', '12345678');
define('DB_NAME', 'novus');

$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

if (!$conn) {
    http_response_code(500);
    echo json_encode(['error' => 'Error al conectar con la base de datos']);
    exit;
}

$start = isset($_GET['start']) ? $_GET['start'] : null;
$end = isset($_GET['end']) ? $_GET['end'] : null;

$sql = "SELECT unixtime, HR_COUNTER1, HR_COUNTER2 FROM intervalproduction";

if ($start && $end) {
    $sql .= " WHERE unixtime BETWEEN UNIX_TIMESTAMP('$start') AND UNIX_TIMESTAMP('$end')";
}

$sql .= " ORDER BY unixtime DESC LIMIT 100";

$result = mysqli_query($conn, $sql);

if (!$result) {
    http_response_code(500);
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

echo json_encode($data);
mysqli_close($conn);
