# SehatPedia Health Platform

Kelima halaman SehatPedia kini dijalankan oleh satu server dan satu port. Server juga menyajikan satu konfigurasi Tailwind bersama agar komponen header yang sama dirender konsisten pada semua halaman.

Jalankan dari folder ini:

```powershell
npm start
```

Buka `http://localhost:3000`. Halaman yang tersedia juga dapat dibuka langsung pada:

- `/beranda`
- `/ensiklopedia`
- `/kalkulator-medis`
- `/tanya-ai`
- `/cek-gejala`

Untuk memakai port lain pada PowerShell:

```powershell
$env:PORT=8080; npm start
```
