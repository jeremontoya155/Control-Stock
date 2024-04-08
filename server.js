require('dotenv').config(); // Cargar variables de entorno desde .env

const express = require('express');
const mysql = require('mysql');
const path = require('path');

const app = express();

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

// Conectar a la base de datos
connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos: ', err);
    return;
  }
  console.log('Conexión establecida con la base de datos');
});

// Ruta para obtener los datos desde el cliente
app.get('/data', (req, res) => {
  // Ejecutar la consulta SQL
  const query = `
    SELECT stock.IDProducto, medicamentos.Producto, medicamentos.codebar,  
           medicamentos.Presentaci, medicamentos.Unidades, stock.Sucursal, 
           stock.Cantidad
    FROM stock 
    INNER JOIN medicamentos ON stock.IDProducto = medicamentos.CodPlex
  `;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta: ', err);
      res.status(500).send('Error al obtener los datos');
      return;
    }

    // Enviar los datos como respuesta
    res.json(results);
  });
});

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor web escuchando en el puerto ${PORT}`);
});
