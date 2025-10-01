const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Configurar EJS como motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Servir archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal - Panel de consulta de disponibilidad
app.get('/', (req, res) => {
  res.render('index', { 
    titulo: 'Consultar Disponibilidad'
  });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✅ Frontend corriendo en http://localhost:${PORT}`);
});