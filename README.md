# SehatPedia Health Platform

Kelima halaman SehatPedia kini dijalankan oleh satu server dan satu port, tanpa mengubah berkas `code.html` asli.

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
