<h1>Aplicación Web de Gestión de Productos</h1>

<h2>Esta es una aplicación web simple que permite gestionar productos desde una base de datos MySQL y descargar los datos en formato Excel.</h2>

<h3>Requisitos</h3>

<ul>
  <li>Node.js instalado en tu sistema</li>
  <li>MySQL Server instalado y configurado</li>
  <li>Conexión a una base de datos MySQL con los productos y su stock</li>
</ul>

<h3>Instalación</h3>

<ol>
  <li>Clona este repositorio en tu máquina local:</li>
  <code>
    git clone https://github.com/tu-usuario/aplicacion-web-gestion-productos.git
  </code>
  <li>Navega hasta el directorio del proyecto:</li>
  <code>cd aplicacion-web-gestion-productos</code>
  <li>Instala las dependencias del proyecto:</li>
  <code>npm install</code>
</ol>

<h3>Configuración</h3>

<p>Crea un archivo <code>.env</code> en la raíz del proyecto y configura las variables de entorno necesarias:</p>

<pre><code>DB_HOST=tu-host
DB_PORT=tu-puerto
DB_USER=tu-usuario
DB_PASSWORD=tu-contraseña
DB_DATABASE=nombre-de-tu-base-de-datos
</code></pre>

<p>Asegúrate de tener una base de datos MySQL configurada con las tablas <code>stock</code> y <code>medicamentos</code>, y que contenga los datos necesarios.</p>

<h3>Uso</h3>

<ol>
  <li>Inicia el servidor:</li>
  <code>npm start</code>
  <li>Accede a la aplicación web en tu navegador:</li>
  <code>http://localhost:3000</code>
  <li>Filtra los productos y visualiza su stock.</li>
  <li>Haz clic en el botón "Descargar Excel" para descargar los datos de los productos en un archivo Excel.</li>
</ol>

<h3>Tecnologías utilizadas</h3>

<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MySQL</li>
  <li>Bootstrap</li>
  <li>XLSX (para la generación de archivos Excel)</li>
</ul>

<h3>Contribución</h3>

<p>Las contribuciones son bienvenidas. Si tienes sugerencias o mejoras, por favor abre un issue o envía un pull request.</p>

<h3>Licencia</h3>

<p>Este proyecto está bajo la Licencia MIT.</p>
