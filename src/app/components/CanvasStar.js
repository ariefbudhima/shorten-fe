// "use client";

// import React, { useRef, useEffect } from 'react';

// const CanvasStar = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;

//     // Bersihkan kanvas
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     // Parameter untuk bintang
//     const centerX = canvas.width / 2;
//     const centerY = canvas.height / 2;
//     const spikes = 5;          // jumlah titik utama bintang
//     const outerRadius = 120;     // radius luar bintang
//     const innerRadius = 60;      // radius dalam bintang
//     let angle = (Math.PI / 2) * 3; // sudut awal

//     // Buat path untuk membentuk bintang
//     ctx.beginPath();
//     ctx.moveTo(centerX, centerY - outerRadius);
//     for (let i = 0; i < spikes; i++) {
//       // Titik luar
//       let x = centerX + Math.cos(angle) * outerRadius;
//       let y = centerY + Math.sin(angle) * outerRadius;
//       ctx.lineTo(x, y);
//       angle += Math.PI / spikes;

//       // Titik dalam
//       x = centerX + Math.cos(angle) * innerRadius;
//       y = centerY + Math.sin(angle) * innerRadius;
//       ctx.lineTo(x, y);
//       angle += Math.PI / spikes;
//     }
//     ctx.closePath();

//     // Gambar dot‑dot (titik kecil) di dalam area bintang
//     const dotSpacing = 4; // jarak antar titik
//     const dotRadius = 1;  // radius titik

//     ctx.fillStyle = 'black'; // warna titik

//     for (let i = 0; i < canvas.width; i += dotSpacing) {
//       for (let j = 0; j < canvas.height; j += dotSpacing) {
//         if (ctx.isPointInPath(i, j)) {
//           ctx.beginPath();
//           ctx.arc(i, j, dotRadius, 0, Math.PI * 2, true);
//           ctx.fill();
//         }
//       }
//     }
//   }, []);

//   // Menambahkan border sementara untuk memastikan kanvas muncul di halaman
//   return (
//     <canvas
//       ref={canvasRef}
//       width={300}
//       height={300}
//       style={{ backgroundColor: 'transparent', border: '1px solid red' }}
//     />
//   );
// };

// export default CanvasStar;