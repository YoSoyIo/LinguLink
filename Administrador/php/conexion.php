<?php
    function conectar(){
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "lingualinkdb";

        // Crea la conexión
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Verifica la conexión
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        return $conn;
    }
?>
