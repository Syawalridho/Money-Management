import React from 'react';
// Impor komponen AppRoutes dari file route.jsx Anda
// Pastikan path dan nama file sudah benar (./route atau ./route.jsx)
import AppRoutes from './routes/route'; 

function App() {
  // App.jsx sekarang menjadi sangat sederhana dan hanya me-render AppRoutes
  return (
    <div className="App">
      <AppRoutes />
    </div>
  );
}

export default App;