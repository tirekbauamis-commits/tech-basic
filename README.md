# Tech Basic – Web Belajar Dasar Komputer

Platform belajar dasar komputer interaktif dengan desain modern dark theme.

## Cara Menjalankan dengan XAMPP

1. Salin folder `techbasic` ke dalam `C:\xampp\htdocs\`
2. Jalankan XAMPP Control Panel
3. Klik **Start** pada module **Apache**
4. Buka browser dan akses: `http://localhost/techbasic/`

## Fitur Lengkap

### Autentikasi
- Halaman login dan registrasi akun siswa
- Data akun tersimpan di localStorage browser

### Dashboard Siswa
- Statistik: materi selesai, kuis lulus, progress total, jam belajar
- Riwayat terakhir belajar dengan waktu relatif (baru saja, 5 menit lalu, 2 jam lalu, dll.)
- Rekomendasi materi berdasarkan progress

### Materi Belajar (12 Modul)
1. Dasar Komputer
2. Hardware
3. Software
4. Sistem Operasi
5. Internet
6. Jaringan
7. Keamanan Digital
8. Manajemen File
9. Aplikasi Office
10. Dasar Pemrograman
11. Cloud Storage
12. Etika Digital

Setiap modul memiliki 3 pelajaran dengan:
- Navigasi prev/next antar pelajaran
- Tombol dot untuk lompat ke pelajaran tertentu
- Tombol "Tandai Selesai" di setiap pelajaran

### Kuis
- Pilih kuis berdasarkan modul materi
- Soal pilihan ganda bertahap dengan navigasi next/prev
- Setelah selesai: tampilan "Siap melihat nilai?" sebelum nilai muncul
- Tombol "Lihat Nilai" untuk menampilkan hasil kuis
- Ulangi kuis atau lihat progress

### Progress Belajar
- Grafik aktivitas mingguan (bar chart aktual berdasarkan waktu belajar)
- Streak belajar berturut-turut
- Grid 4 minggu terakhir keaktifan belajar
- Progress per modul materi

### Pencapaian
- 8 badge dengan kondisi unlock yang nyata
- Total poin dari pelajaran dan kuis
- Peringkat: Bronze / Silver / Gold Member

## Teknologi
- HTML5, CSS3 (CSS Variables, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- LocalStorage untuk persistensi data
- Google Fonts: Plus Jakarta Sans
- Tidak memerlukan database atau backend
