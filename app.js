'use strict';

/* =========================================
   TECH BASIC - MAIN APP SCRIPT
   ========================================= */

const ACCOUNT_KEY  = 'techBasicAccounts';
const SESSION_KEY  = 'techBasicSession';
const THEME_KEY    = 'techBasicTheme';
const lessonImage  = 'assets/img/lesson-hero.svg';

/* ---------- DATA ---------- */

const modules = [
  {
    id: 'dasar-komputer', title: 'Dasar Komputer', emoji: '\u{1F4BB}',
    description: 'Pelajari komponen dasar komputer dan cara kerjanya',
    minutes: 90,
    lessons: [
      { title: 'Pengenalan Komputer', body: 'Komputer adalah perangkat elektronik yang dapat menerima, memproses, menyimpan, dan mengeluarkan data. Komputer modern terdiri dari hardware (perangkat keras) dan software (perangkat lunak) yang bekerja bersama.', points: ['Hardware: CPU, RAM, storage, keyboard, mouse, monitor, dan printer.', 'Software: sistem operasi, aplikasi, browser, dan driver perangkat.', 'Input diproses oleh CPU, disimpan pada memori, lalu keluar sebagai informasi.'] },
      { title: 'Alur Kerja Komputer', body: 'Setiap pekerjaan komputer mengikuti pola Input \u2192 Process \u2192 Output \u2192 Storage. Memahami alur ini membantu Anda memecahkan masalah saat perangkat terasa lambat atau tidak merespons.', points: ['Input berasal dari keyboard, mouse, kamera, mikrofon, atau scanner.', 'Process dilakukan CPU dengan bantuan RAM.', 'Output tampil di monitor, speaker, printer, atau file digital.'] },
      { title: 'Perawatan Dasar', body: 'Komputer yang dirawat akan lebih awet dan stabil. Perawatan dasar tidak harus rumit, cukup dilakukan secara rutin dan hati-hati.', points: ['Bersihkan debu pada keyboard, layar, dan ventilasi.', 'Matikan komputer dengan shutdown, bukan langsung mencabut listrik.', 'Gunakan stabilizer atau UPS untuk mengurangi risiko listrik tidak stabil.'] }
    ]
  },
  {
    id: 'hardware', title: 'Hardware', emoji: '\u{1F5A5}\uFE0F',
    description: 'Memahami perangkat keras komputer secara mendalam',
    minutes: 105,
    lessons: [
      { title: 'CPU dan Motherboard', body: 'CPU adalah otak komputer, sedangkan motherboard menjadi papan utama yang menghubungkan semua komponen. Keduanya harus kompatibel satu sama lain.', points: ['CPU memproses instruksi aplikasi dengan kecepatan miliaran operasi per detik.', 'Motherboard memiliki slot RAM, storage, port USB, dan chipset.', 'Kompatibilitas socket CPU dan motherboard harus sesuai agar bisa dipasang.'] },
      { title: 'RAM dan Penyimpanan', body: 'RAM bekerja sebagai memori sementara saat komputer berjalan, sedangkan SSD atau HDD menyimpan data secara permanen meskipun daya dimatikan.', points: ['RAM besar membantu multitasking: menjalankan banyak aplikasi sekaligus.', 'SSD lebih cepat daripada HDD dan tidak punya bagian bergerak.', 'Backup tetap diperlukan meski storage masih sehat - data bisa hilang kapan saja.'] },
      { title: 'Perangkat Input Output', body: 'Input-output adalah jembatan antara pengguna dan komputer. Tanpa perangkat ini, kita tidak bisa berinteraksi dengan komputer.', points: ['Keyboard dan mouse memasukkan perintah dari pengguna ke komputer.', 'Monitor dan speaker menampilkan hasil pemrosesan komputer.', 'Printer dan scanner membantu mengubah dokumen fisik menjadi digital.'] }
    ]
  },
  {
    id: 'software', title: 'Software', emoji: '\u{1F9E0}',
    description: 'Aplikasi, driver, sistem operasi, dan perangkat lunak',
    minutes: 80,
    lessons: [
      { title: 'Jenis Software', body: 'Software adalah instruksi tertulis yang membuat komputer bisa bekerja sesuai kebutuhan pengguna. Ada tiga kategori utama software yang perlu diketahui.', points: ['System software mengatur dan mengelola sumber daya komputer (Windows, Linux).', 'Application software membantu pekerjaan tertentu (Word, Photoshop, browser).', 'Utility software menjaga perangkat tetap optimal (antivirus, disk cleaner).'] },
      { title: 'Instalasi Aman', body: 'Instal aplikasi hanya dari sumber tepercaya agar komputer tidak terkena malware yang bisa merusak data atau mencuri informasi pribadi Anda.', points: ['Unduh selalu dari situs resmi pengembang, bukan dari situs pihak ketiga.', 'Baca izin aplikasi sebelum instal - waspadai izin yang tidak relevan.', 'Hapus aplikasi yang tidak diperlukan untuk menjaga keamanan dan performa.'] },
      { title: 'Update dan Lisensi', body: 'Update memperbaiki celah keamanan dan bug, sedangkan lisensi memastikan penggunaan aplikasi legal dan mendukung pengembang.', points: ['Aktifkan update otomatis jika memungkinkan untuk keamanan maksimal.', 'Gunakan software legal atau open-source yang gratis dan aman digunakan.', 'Catat akun dan lisensi penting di tempat yang aman.'] }
    ]
  },
  {
    id: 'sistem-operasi', title: 'Sistem Operasi', emoji: '\u{1FA9F}',
    description: 'Windows, Linux, macOS, dan cara menggunakannya',
    minutes: 100,
    lessons: [
      { title: 'Fungsi Sistem Operasi', body: 'Sistem operasi adalah software paling penting dalam komputer. Ia mengatur file, memori, perangkat keras, akun pengguna, dan menjalankan semua aplikasi.', points: ['Mengatur sumber daya perangkat keras agar efisien dan tidak bentrok.', 'Menjalankan aplikasi dan mengelola proses yang berjalan bersamaan.', 'Menyediakan tampilan desktop, menu, dan antarmuka untuk pengguna.'] },
      { title: 'Pengaturan Dasar', body: 'Menguasai pengaturan dasar sistem operasi memudahkan pengelolaan komputer sehari-hari, dari jaringan hingga akun pengguna.', points: ['Atur password login yang kuat untuk melindungi data pribadi Anda.', 'Kelola koneksi Wi-Fi dan pengaturan jaringan dengan mudah dari panel pengaturan.', 'Cek penggunaan storage dan lakukan update sistem secara berkala.'] },
      { title: 'Troubleshooting Ringan', body: 'Masalah umum pada komputer seringkali bisa diselesaikan dengan langkah sederhana sebelum harus meminta bantuan teknisi.', points: ['Restart perangkat: ini menyelesaikan 70% masalah umum pada komputer.', 'Cek kabel dan koneksi fisik jika perangkat tidak terdeteksi.', 'Baca pesan error dengan teliti - biasanya ada petunjuk solusinya.'] }
    ]
  },
  {
    id: 'internet', title: 'Internet', emoji: '\u{1F310}',
    description: 'Cara kerja internet, browser, email, dan pencarian',
    minutes: 95,
    lessons: [
      { title: 'Dasar Internet', body: 'Internet adalah jaringan global yang menghubungkan miliaran perangkat di seluruh dunia. Memahami cara kerjanya membantu Anda menggunakan internet lebih efektif dan aman.', points: ['Browser (Chrome, Firefox) membuka dan menampilkan halaman web dari server.', 'URL adalah alamat unik setiap halaman web di internet.', 'Server mengirimkan data ke perangkat pengguna saat halaman diminta.'] },
      { title: 'Wi-Fi dan Jaringan', body: 'Jaringan lokal menghubungkan perangkat di area tertentu seperti rumah atau kantor, sementara internet menghubungkan ke seluruh dunia melalui router.', points: ['Router membagi koneksi internet ke beberapa perangkat secara bersamaan.', 'Password Wi-Fi harus kuat minimal 12 karakter gabungan huruf angka simbol.', 'Sinyal lemah memperlambat koneksi - dekatkan perangkat ke router.'] },
      { title: 'Email dan Pencarian', body: 'Email dan mesin pencari adalah dua alat terpenting di internet untuk produktivitas, komunikasi, dan pembelajaran sehari-hari.', points: ['Gunakan subjek email yang jelas agar penerima tahu isi pesan sebelum membuka.', 'Pakai kata kunci spesifik saat mencari: "cara mengunci folder Windows 10".', 'Bandingkan informasi dari beberapa sumber untuk memastikan kebenarannya.'] }
    ]
  },
  {
    id: 'jaringan', title: 'Jaringan', emoji: '\u{1F4E1}',
    description: 'LAN, WAN, IP address, router, dan koneksi jaringan',
    minutes: 85,
    lessons: [
      { title: 'Konsep Jaringan', body: 'Jaringan komputer memungkinkan perangkat saling bertukar data dan berbagi sumber daya seperti printer dan koneksi internet.', points: ['LAN (Local Area Network) dipakai dalam area kecil seperti rumah dan kantor.', 'WAN (Wide Area Network) menghubungkan area yang lebih luas antar kota/negara.', 'Internet adalah jaringan terbesar yang menghubungkan seluruh dunia.'] },
      { title: 'IP Address & DNS', body: 'IP address adalah identitas unik setiap perangkat dalam jaringan, sementara DNS menerjemahkan nama domain menjadi alamat IP yang bisa dimengerti komputer.', points: ['IPv4 berbentuk empat angka: 192.168.1.10 (format paling umum saat ini).', 'Gateway adalah pintu keluar jaringan lokal menuju internet, biasanya router.', 'DNS menerjemahkan "google.com" menjadi alamat IP 142.250.74.46.'] },
      { title: 'Masalah Koneksi', body: 'Koneksi internet bisa terganggu karena berbagai faktor. Mengetahui cara mendiagnosis masalah menghemat waktu dan biaya perbaikan.', points: ['Cek ikon jaringan di taskbar sebagai langkah pertama diagnosa koneksi.', 'Restart router dengan cabut listrik 30 detik lalu nyalakan kembali.', 'Gunakan perintah ping untuk menguji koneksi dasar ke server tertentu.'] }
    ]
  },
  {
    id: 'keamanan-digital', title: 'Keamanan Digital', emoji: '\u{1F510}',
    description: 'Password, privasi, phishing, malware, dan perlindungan data',
    minutes: 110,
    lessons: [
      { title: 'Password Kuat', body: 'Password adalah garis pertahanan pertama akun Anda. Password yang lemah bisa membuat data penting jatuh ke tangan yang salah dalam hitungan menit.', points: ['Gunakan minimal 12 karakter yang menggabungkan huruf besar, kecil, angka, dan simbol.', 'Jangan gunakan password yang sama di lebih dari satu akun penting.', 'Pertimbangkan menggunakan password manager untuk menyimpan password secara aman.'] },
      { title: 'Mengenali Phishing', body: 'Phishing adalah teknik penipuan yang meniru tampilan website atau email resmi untuk mencuri data login, kartu kredit, atau informasi pribadi Anda.', points: ['Selalu periksa alamat URL dengan teliti sebelum memasukkan data apapun.', 'Jangan pernah bagikan OTP, password, atau kode verifikasi kepada siapapun.', 'Waspadai pesan yang menimbulkan rasa panik, hadiah, atau ancaman mendadak.'] },
      { title: 'Privasi Data', body: 'Data pribadi yang bocor bisa digunakan untuk penipuan, pemerasan, atau pencurian identitas. Melindungi privasi adalah tanggung jawab pribadi.', points: ['Batasi informasi pribadi yang dibagikan di media sosial dan platform online.', 'Atur pengaturan privasi secara berkala di semua aplikasi yang digunakan.', 'Selalu logout dari perangkat umum atau komputer yang bukan milik Anda.'] }
    ]
  },
  {
    id: 'manajemen-file', title: 'Manajemen File', emoji: '\u{1F4C1}',
    description: 'Folder, ekstensi file, backup, dan pengelolaan arsip',
    minutes: 75,
    lessons: [
      { title: 'Struktur Folder Rapi', body: 'Sistem folder yang terstruktur rapi membuat file mudah ditemukan kapan pun dibutuhkan dan mengurangi risiko menyimpan duplikat yang membuang ruang.', points: ['Kelompokkan file berdasarkan kategori: Dokumen, Foto, Proyek, Sekolah.', 'Gunakan nama file yang deskriptif dan informatif seperti "Laporan_April_2026".', 'Hindari nama seperti "final_banget_v2_revisi" yang membingungkan di kemudian hari.'] },
      { title: 'Ekstensi File', body: 'Ekstensi file adalah kode di akhir nama file yang menunjukkan jenis file tersebut dan aplikasi yang diperlukan untuk membukanya.', points: ['.docx untuk dokumen Microsoft Word, bisa dibuka juga di Google Docs.', '.xlsx untuk spreadsheet Excel, berisi data tabel dan formula perhitungan.', '.jpg, .png, .webp untuk gambar - PNG mendukung transparansi, JPG lebih kecil.'] },
      { title: 'Backup Data', body: 'Backup adalah salinan cadangan data yang dibuat secara berkala agar data tidak hilang total jika perangkat rusak, dicuri, atau terkena virus.', points: ['Simpan salinan penting di layanan cloud seperti Google Drive atau OneDrive.', 'Gunakan flashdisk atau hard drive eksternal sebagai backup offline yang aman.', 'Terapkan aturan 3-2-1: 3 salinan, 2 media berbeda, 1 di luar lokasi.'] }
    ]
  },
  {
    id: 'office', title: 'Aplikasi Office', emoji: '\u2328\uFE0F',
    description: 'Dokumen Word, spreadsheet Excel, dan presentasi PowerPoint',
    minutes: 120,
    lessons: [
      { title: 'Pengolah Kata', body: 'Aplikasi pengolah kata seperti Microsoft Word atau Google Docs digunakan untuk membuat surat, laporan, makalah, dan berbagai dokumen teks.', points: ['Gunakan Heading 1, 2, 3 untuk membuat struktur dokumen yang jelas dan rapi.', 'Atur margin, spasi baris, dan ukuran font sebelum mulai menulis konten.', 'Simpan sebagai PDF sebelum dibagikan agar format tidak berubah di perangkat lain.'] },
      { title: 'Spreadsheet', body: 'Spreadsheet membantu mengolah data numerik, membuat kalkulasi otomatis, dan memvisualisasikan data dalam bentuk grafik yang mudah dipahami.', points: ['Rumus dasar SUM menjumlahkan, AVERAGE menghitung rata-rata secara otomatis.', 'Buat tabel rapi dengan border, warna header, dan format angka yang konsisten.', 'Gunakan grafik batang atau pie untuk menyajikan data secara visual dan menarik.'] },
      { title: 'Presentasi', body: 'Presentasi yang baik memadukan visual yang menarik dengan konten yang padat dan terstruktur, bukan slide penuh teks yang membosankan.', points: ['Prinsip satu slide satu pesan: fokus pada satu ide utama per slide.', 'Gunakan gambar, ikon, dan grafik untuk menggantikan paragraf panjang.', 'Latih alur bicara dan timing sebelum tampil agar presentasi berjalan lancar.'] }
    ]
  },
  {
    id: 'pemrograman', title: 'Dasar Pemrograman', emoji: '\u{1F4A1}',
    description: 'Logika coding, variabel, kondisi, dan latihan sederhana',
    minutes: 130,
    lessons: [
      { title: 'Apa Itu Coding', body: 'Coding adalah proses memberi instruksi kepada komputer menggunakan bahasa pemrograman. Komputer mengikuti instruksi secara tepat dan berurutan.', points: ['Instruksi harus jelas, spesifik, dan berurutan agar komputer bisa mengikutinya.', 'Program membaca input, memproses sesuai logika, lalu menghasilkan output.', 'Kesalahan kecil dalam penulisan kode (typo) bisa membuat seluruh program gagal.'] },
      { title: 'Variabel dan Logika', body: 'Variabel menyimpan nilai yang bisa berubah, sedangkan struktur logika seperti if-else dan loop menentukan alur eksekusi program.', points: ['Variabel seperti kotak penyimpanan bernama: nama = "Febi", umur = 17.', 'If-else membuat keputusan: jika nilai >= 70 maka "Lulus" jika tidak "Gagal".', 'Loop (for, while) mengulang instruksi: cetak angka 1 sampai 100 secara otomatis.'] },
      { title: 'Mulai Latihan Coding', body: 'Cara terbaik belajar coding adalah dengan langsung menulis kode. Mulai dari program kecil dan sederhana, lalu tingkatkan secara bertahap.', points: ['Buat program kalkulator sederhana yang menjumlahkan dua angka dari input pengguna.', 'Coba cetak teks berulang: "Halo Dunia!" sebanyak 10 kali menggunakan loop.', 'Eksplorasi Python atau JavaScript - keduanya ramah pemula dan banyak tutorialnya.'] }
    ]
  },
  {
    id: 'cloud', title: 'Cloud Storage', emoji: '\u2601\uFE0F',
    description: 'Google Drive, OneDrive, sinkronisasi, dan kolaborasi',
    minutes: 70,
    lessons: [
      { title: 'Konsep Cloud Storage', body: 'Cloud storage menyimpan file di server online sehingga bisa diakses dari perangkat mana pun selama ada koneksi internet.', points: ['Butuh akun (Google, Microsoft, Apple) dan koneksi internet untuk mengaksesnya.', 'File disinkronkan otomatis antar perangkat yang terhubung ke akun yang sama.', 'Perhatikan kapasitas penyimpanan gratis: Google Drive 15GB, OneDrive 5GB.'] },
      { title: 'Berbagi File', body: 'Berbagi file melalui cloud jauh lebih efisien dari mengirim file lewat email atau flashdisk. Perubahan langsung terlihat oleh semua pihak.', points: ['Bagikan file via link dengan memilih izin "Siapa saja dengan tautan dapat melihat".', 'Atur level akses: view only untuk keamanan, atau edit untuk kolaborasi aktif.', 'Cabut akses atau nonaktifkan tautan berbagi jika sudah tidak diperlukan.'] },
      { title: 'Kolaborasi Online', body: 'Cloud memungkinkan beberapa orang bekerja pada dokumen yang sama secara bersamaan, dari lokasi yang berbeda, tanpa kirim-terima file berulang.', points: ['Gunakan fitur komentar untuk memberi masukan tanpa mengubah isi dokumen.', 'Pantau riwayat perubahan untuk melihat siapa mengubah apa dan kapan.', 'Beri nama versi dokumen yang jelas jika membuat salinan untuk revisi besar.'] }
    ]
  },
  {
    id: 'etika-digital', title: 'Etika Digital', emoji: '\u{1F91D}',
    description: 'Sopan santun online, jejak digital, dan hak cipta',
    minutes: 65,
    lessons: [
      { title: 'Jejak Digital', body: 'Setiap aktivitas yang dilakukan secara online meninggalkan jejak digital yang sulit atau bahkan tidak bisa dihapus sepenuhnya.', points: ['Pikirkan matang-matang sebelum mengunggah foto, video, atau teks di internet.', 'Gunakan bahasa yang sopan dan konstruktif dalam semua komunikasi online.', 'Reputasi digital mempengaruhi peluang pendidikan dan karir di masa depan.'] },
      { title: 'Hak Cipta Digital', body: 'Konten digital seperti foto, musik, video, dan tulisan dilindungi hak cipta. Menggunakan tanpa izin adalah pelanggaran hukum.', points: ['Selalu cantumkan sumber saat menggunakan karya orang lain di presentasi atau blog.', 'Gunakan aset berlisensi bebas (Creative Commons) dari situs seperti Unsplash, Pixabay.', 'Jangan pernah mengklaim karya orang lain sebagai karya sendiri.'] },
      { title: 'Komunikasi Online yang Baik', body: 'Komunikasi digital yang efektif dan sopan memperlancar kerja sama, mencegah kesalahpahaman, dan membangun relasi profesional yang baik.', points: ['Gunakan subjek email yang jelas dan pesan yang langsung ke pokok masalah.', 'Hindari mengetik dengan HURUF KAPITAL SEMUA karena terkesan berteriak.', 'Balas pesan penting dalam 24 jam sebagai bentuk profesionalisme dan rasa hormat.'] }
    ]
  }
];

const moduleNotes = {
  'dasar-komputer': [
    { visual: ['Input', 'CPU', 'Output'], explanation: 'Komputer bekerja dengan pola menerima data, mengolah data, lalu menampilkan hasilnya sebagai informasi. Pada tahap ini siswa perlu memahami bahwa komputer bukan hanya layar dan keyboard, tetapi sistem lengkap yang terdiri dari perangkat input, pusat pemrosesan, memori, penyimpanan, dan perangkat output. Pemahaman ini menjadi dasar untuk membaca spesifikasi komputer dan mengenali fungsi setiap bagian.', practice: 'Latihan: tulis alur saat kamu mengetik nama di keyboard sampai tulisan muncul di layar. Sebutkan perangkat input, bagian pemrosesan, dan perangkat output yang terlibat.' },
    { visual: ['Data masuk', 'Diproses', 'Disimpan'], explanation: 'Alur kerja komputer mengikuti urutan input, process, output, dan storage. Contohnya saat membuka foto, komputer mengambil file dari storage, memprosesnya dengan CPU dan RAM, lalu menampilkannya di monitor. Jika salah satu tahap bermasalah, hasilnya bisa berupa aplikasi lambat, layar tidak menampilkan apa-apa, atau file gagal disimpan.', practice: 'Latihan: pilih satu aktivitas seperti mencetak dokumen atau membuka video, lalu buat bagan singkat input, process, output, dan storage.' },
    { visual: ['Bersihkan', 'Update', 'Shutdown'], explanation: 'Perawatan dasar menjaga komputer tetap stabil dan memperpanjang usia perangkat. Debu pada ventilasi dapat membuat suhu meningkat, mematikan komputer secara paksa dapat merusak data, dan listrik tidak stabil dapat mengganggu komponen internal. Perawatan yang konsisten lebih baik daripada menunggu komputer rusak terlebih dahulu.', practice: 'Latihan: buat checklist perawatan mingguan berisi membersihkan layar, mengecek storage kosong, update sistem, dan shutdown dengan benar.' }
  ],
  hardware: [
    { visual: ['CPU', 'Socket', 'Chipset'], explanation: 'CPU menjalankan instruksi program, sedangkan motherboard menjadi jalur komunikasi antar komponen. Socket CPU, chipset, slot RAM, konektor storage, dan port I/O harus saling cocok agar komputer dapat menyala dengan stabil. Jika CPU sangat kuat tetapi motherboard tidak sesuai, komponen tidak bisa dipasang atau performanya tidak maksimal.', practice: 'Latihan: cari spesifikasi satu processor dan satu motherboard, lalu cocokkan jenis socket, dukungan RAM, dan jumlah slot storage-nya.' },
    { visual: ['RAM', 'SSD', 'Backup'], explanation: 'RAM dipakai untuk menyimpan data sementara saat aplikasi berjalan, sedangkan SSD atau HDD menyimpan file secara permanen. RAM besar membantu membuka banyak aplikasi sekaligus, sementara SSD mempercepat booting dan pembukaan file. Namun storage cepat bukan pengganti backup, karena file tetap bisa hilang akibat kerusakan, virus, atau terhapus tidak sengaja.', practice: 'Latihan: bandingkan laptop RAM 4GB HDD dengan laptop RAM 8GB SSD. Jelaskan mana yang lebih nyaman untuk belajar online dan membuka banyak tab browser.' },
    { visual: ['Keyboard', 'Monitor', 'Printer'], explanation: 'Perangkat input-output menghubungkan pengguna dengan komputer. Keyboard, mouse, scanner, dan mikrofon mengirim data ke komputer, sedangkan monitor, speaker, dan printer menampilkan hasilnya. Memahami arah aliran data membantu siswa membedakan masalah: apakah perintah tidak masuk, proses gagal, atau hasil tidak keluar.', practice: 'Latihan: kelompokkan 10 perangkat di sekitar kamu menjadi input, output, atau keduanya. Jelaskan alasan untuk setiap perangkat.' }
  ],
  software: [
    { visual: ['OS', 'Aplikasi', 'Utility'], explanation: 'Software adalah instruksi yang membuat komputer dapat menjalankan tugas. System software seperti Windows mengelola perangkat, application software seperti browser membantu pekerjaan pengguna, dan utility software menjaga keamanan serta performa. Membedakan jenis software membantu siswa tahu aplikasi mana yang wajib ada dan mana yang hanya tambahan.', practice: 'Latihan: buat tabel berisi 8 software di komputer, lalu isi kolom jenis software, fungsi utama, dan apakah software itu wajib atau opsional.' },
    { visual: ['Sumber resmi', 'Izin', 'Scan'], explanation: 'Instalasi aman dimulai dari memilih sumber unduhan yang benar. Aplikasi dari situs tidak jelas dapat membawa malware, iklan paksa, atau program tambahan yang tidak diinginkan. Sebelum memasang, siswa perlu membaca nama pengembang, izin aplikasi, ukuran file, dan tanda tangan keamanan jika tersedia.', practice: 'Latihan: pilih satu aplikasi populer, cari situs resminya, lalu catat tanda bahwa situs tersebut benar seperti nama domain, halaman download, dan informasi pengembang.' },
    { visual: ['Patch', 'Lisensi', 'Open Source'], explanation: 'Update software memperbaiki bug, menutup celah keamanan, dan kadang menambah fitur baru. Lisensi menjelaskan apakah software boleh dipakai gratis, berbayar, untuk pribadi, atau untuk sekolah. Menggunakan software legal membuat perangkat lebih aman dan menghargai pembuat software.', practice: 'Latihan: cek satu aplikasi yang kamu pakai, lihat nomor versinya, lalu cari apakah ada update dan jenis lisensinya.' }
  ],
  'sistem-operasi': [
    { visual: ['File', 'Memori', 'Aplikasi'], explanation: 'Sistem operasi adalah penghubung antara pengguna, aplikasi, dan hardware. Ia mengatur memori, menjalankan proses, mengelola file, membaca perangkat baru, serta menyediakan tampilan desktop. Tanpa sistem operasi, pengguna harus memberi perintah teknis langsung ke hardware, sehingga komputer jauh lebih sulit digunakan.', practice: 'Latihan: buka Task Manager atau pengelola proses, lalu catat tiga aplikasi yang berjalan dan sumber daya yang digunakan.' },
    { visual: ['Akun', 'Wi-Fi', 'Storage'], explanation: 'Pengaturan dasar sistem operasi membantu pengguna menjaga komputer tetap nyaman dipakai. Pengaturan akun melindungi akses, jaringan menghubungkan perangkat ke internet, dan storage menunjukkan ruang penyimpanan yang tersisa. Siswa yang memahami menu ini bisa menyelesaikan banyak masalah ringan tanpa menunggu teknisi.', practice: 'Latihan: buka pengaturan sistem, cari menu akun, jaringan, dan penyimpanan, lalu tulis fungsi utama masing-masing.' },
    { visual: ['Restart', 'Kabel', 'Error'], explanation: 'Troubleshooting ringan adalah proses mencari penyebab masalah secara bertahap. Mulai dari hal sederhana seperti restart, mengecek kabel, memastikan baterai cukup, membaca pesan error, dan mencoba perangkat lain. Cara ini menghindari tindakan berlebihan seperti instal ulang padahal masalahnya hanya koneksi longgar.', practice: 'Latihan: buat daftar langkah jika printer tidak terdeteksi, mulai dari cek kabel sampai cek driver.' }
  ],
  internet: [
    { visual: ['Browser', 'URL', 'Server'], explanation: 'Internet bekerja dengan mengirim permintaan dari browser ke server lalu menerima halaman atau data sebagai respons. URL menunjukkan alamat tujuan, browser menampilkan hasil, dan server menyimpan konten yang diminta. Memahami hubungan ini membuat siswa lebih mudah membaca alamat web dan mengenali situs yang mencurigakan.', practice: 'Latihan: buka satu website, salin URL-nya, lalu pisahkan bagian protokol, nama domain, dan halaman yang sedang dibuka.' },
    { visual: ['Router', 'Sinyal', 'Password'], explanation: 'Wi-Fi adalah jaringan nirkabel yang menghubungkan perangkat ke router. Kualitas koneksi dipengaruhi jarak, penghalang dinding, jumlah perangkat, dan kekuatan password. Router yang diletakkan di lokasi tepat dan memakai password kuat akan membuat koneksi lebih stabil sekaligus lebih aman.', practice: 'Latihan: cek kekuatan sinyal Wi-Fi di dua lokasi berbeda, lalu jelaskan kenapa hasilnya bisa berbeda.' },
    { visual: ['Subjek', 'Keyword', 'Sumber'], explanation: 'Email dan pencarian adalah alat utama untuk komunikasi dan belajar. Email yang baik memakai subjek jelas, isi ringkas, dan lampiran yang benar. Pencarian yang efektif memakai kata kunci spesifik serta membandingkan beberapa sumber agar informasi tidak langsung diterima mentah-mentah.', practice: 'Latihan: tulis contoh email resmi kepada guru dan buat tiga kata kunci pencarian untuk mencari tutorial backup file.' }
  ],
  jaringan: [
    { visual: ['LAN', 'WAN', 'Internet'], explanation: 'Jaringan komputer memungkinkan perangkat saling bertukar data. LAN biasanya dipakai di rumah, lab, atau kantor, sedangkan WAN menghubungkan lokasi yang lebih luas. Internet dapat dipahami sebagai kumpulan jaringan besar yang saling terhubung melalui banyak perangkat jaringan.', practice: 'Latihan: gambar jaringan sederhana rumah berisi laptop, ponsel, router, dan internet, lalu beri label LAN dan internet.' },
    { visual: ['IP', 'DNS', 'Gateway'], explanation: 'IP address adalah alamat perangkat dalam jaringan, DNS menerjemahkan nama domain menjadi alamat IP, dan gateway menjadi pintu keluar menuju jaringan lain. Ketiganya bekerja bersama saat pengguna membuka website. Jika DNS bermasalah, internet mungkin tersambung tetapi website tidak bisa dibuka dengan nama domain.', practice: 'Latihan: jalankan pemeriksaan informasi jaringan di perangkat, lalu catat IP address, gateway, dan DNS yang digunakan.' },
    { visual: ['Ping', 'Router', 'Status'], explanation: 'Masalah koneksi perlu diperiksa dari perangkat terdekat ke tujuan yang lebih jauh. Mulai dari ikon jaringan, mode pesawat, kabel atau Wi-Fi, router, lalu tes ping ke gateway dan website. Dengan urutan ini siswa dapat mengetahui apakah masalah ada di perangkat, jaringan lokal, atau layanan internet.', practice: 'Latihan: buat langkah diagnosis saat internet lambat, dari cek sinyal sampai restart router selama 30 detik.' }
  ],
  'keamanan-digital': [
    { visual: ['12+ karakter', 'Unik', 'Manager'], explanation: 'Password kuat harus panjang, unik, dan sulit ditebak. Nama, tanggal lahir, atau kata umum mudah ditebak oleh orang lain maupun program otomatis. Password manager membantu menyimpan banyak password berbeda tanpa harus menghafal semuanya.', practice: 'Latihan: buat contoh password kuat dengan pola frasa panjang, lalu jelaskan kenapa lebih aman daripada tanggal lahir.' },
    { visual: ['URL palsu', 'OTP', 'Panik'], explanation: 'Phishing menipu pengguna agar memasukkan data di halaman palsu atau membagikan kode rahasia. Pesan phishing sering memakai nada mendesak, hadiah, ancaman akun diblokir, atau link yang mirip situs resmi. Kunci utamanya adalah berhenti sejenak, cek alamat, dan jangan pernah membagikan OTP.', practice: 'Latihan: bandingkan dua contoh link yang mirip, lalu tandai bagian domain yang menunjukkan link asli atau palsu.' },
    { visual: ['Privasi', 'Izin app', 'Logout'], explanation: 'Privasi data berarti membatasi informasi pribadi agar tidak mudah disalahgunakan. Data seperti alamat, nomor telepon, lokasi, foto kartu identitas, dan riwayat aktivitas perlu dilindungi. Pengaturan privasi aplikasi dan kebiasaan logout dari perangkat umum adalah langkah sederhana yang penting.', practice: 'Latihan: cek izin satu aplikasi di ponsel atau komputer, lalu tentukan izin mana yang benar-benar diperlukan.' }
  ],
  'manajemen-file': [
    { visual: ['Folder', 'Nama file', 'Arsip'], explanation: 'Struktur folder yang rapi mempercepat pencarian file dan mengurangi duplikasi. Nama folder sebaiknya mengikuti kategori yang jelas seperti Pelajaran, Foto, Proyek, dan Arsip. Nama file perlu menjelaskan isi dan tanggal agar mudah dikenali beberapa bulan kemudian.', practice: 'Latihan: rapikan satu folder campuran menjadi minimal tiga subfolder dan ubah lima nama file agar lebih deskriptif.' },
    { visual: ['.docx', '.xlsx', '.png'], explanation: 'Ekstensi file menunjukkan format dan aplikasi yang cocok untuk membukanya. Dokumen, spreadsheet, gambar, video, dan arsip memiliki ekstensi berbeda. Mengubah ekstensi secara asal tidak mengubah isi file dan justru bisa membuat file sulit dibuka.', practice: 'Latihan: cari lima file di komputer, catat ekstensinya, lalu tulis aplikasi yang biasanya digunakan untuk membuka masing-masing file.' },
    { visual: ['Cloud', 'Drive eksternal', '3-2-1'], explanation: 'Backup melindungi file penting dari kerusakan perangkat, virus, atau kesalahan pengguna. Backup yang baik tidak hanya disimpan di tempat yang sama dengan file asli. Aturan 3-2-1 membantu menjaga data: tiga salinan, dua jenis media, dan satu salinan di lokasi berbeda.', practice: 'Latihan: pilih tiga file penting, tentukan lokasi backup cloud dan offline, lalu tulis jadwal backup mingguannya.' }
  ],
  office: [
    { visual: ['Heading', 'Margin', 'PDF'], explanation: 'Pengolah kata bukan hanya tempat mengetik, tetapi alat untuk membuat dokumen yang mudah dibaca. Heading membantu struktur, margin membuat tampilan rapi, dan ekspor PDF menjaga format saat dibuka di perangkat lain. Dokumen yang rapi menunjukkan profesionalisme penulis.', practice: 'Latihan: buat dokumen satu halaman memakai judul, subjudul, paragraf, bullet list, dan simpan salinan sebagai PDF.' },
    { visual: ['SUM', 'AVERAGE', 'Chart'], explanation: 'Spreadsheet dipakai untuk mengolah data dengan tabel, rumus, dan grafik. Rumus seperti SUM dan AVERAGE mengurangi kesalahan hitung manual, sedangkan format angka membuat data lebih mudah dipahami. Grafik membantu pembaca melihat pola tanpa membaca seluruh angka satu per satu.', practice: 'Latihan: buat tabel nilai lima siswa, hitung total dan rata-rata, lalu buat grafik batang sederhana.' },
    { visual: ['Pesan utama', 'Visual', 'Latihan'], explanation: 'Presentasi yang baik menyampaikan satu ide utama pada setiap slide. Slide sebaiknya tidak penuh paragraf, melainkan memakai poin singkat, gambar, ikon, atau grafik pendukung. Latihan berbicara tetap penting karena slide hanya alat bantu, bukan pengganti penjelasan presenter.', practice: 'Latihan: buat tiga slide tentang topik komputer, setiap slide maksimal satu pesan utama dan tiga poin singkat.' }
  ],
  pemrograman: [
    { visual: ['Instruksi', 'Urutan', 'Output'], explanation: 'Coding adalah cara memberi instruksi yang jelas kepada komputer. Komputer tidak menebak maksud pengguna, sehingga urutan langkah, tanda baca, dan aturan bahasa harus tepat. Program sederhana biasanya menerima input, memprosesnya, lalu menghasilkan output.', practice: 'Latihan: tulis langkah membuat teh sebagai algoritma, lalu ubah menjadi urutan instruksi bernomor yang tidak ambigu.' },
    { visual: ['Variabel', 'If Else', 'Loop'], explanation: 'Variabel menyimpan data, kondisi menentukan keputusan, dan loop mengulang perintah. Tiga konsep ini muncul di hampir semua bahasa pemrograman. Dengan memahaminya, siswa dapat membaca alur program sederhana seperti perhitungan nilai, login, atau daftar belanja otomatis.', practice: 'Latihan: buat pseudocode jika nilai lebih dari atau sama dengan 70 maka lulus, jika tidak maka remedial.' },
    { visual: ['Editor', 'Error', 'Debug'], explanation: 'Latihan coding sebaiknya dimulai dari program kecil agar kesalahan mudah ditemukan. Error bukan tanda gagal, tetapi petunjuk bahwa ada instruksi yang perlu diperbaiki. Kebiasaan membaca pesan error dan mencoba perubahan kecil membuat proses belajar lebih terarah.', practice: 'Latihan: buat rencana program kalkulator sederhana berisi input dua angka, proses penjumlahan, dan output hasil.' }
  ],
  cloud: [
    { visual: ['Akun', 'Server', 'Sinkron'], explanation: 'Cloud storage menyimpan file di server online sehingga dapat diakses dari berbagai perangkat. Sinkronisasi membuat perubahan file di satu perangkat ikut muncul di perangkat lain yang memakai akun sama. Karena bergantung pada akun, keamanan login menjadi bagian penting dari penggunaan cloud.', practice: 'Latihan: sebutkan tiga keuntungan cloud storage dan dua risiko jika akun cloud tidak dilindungi dengan baik.' },
    { visual: ['Link', 'View only', 'Edit'], explanation: 'Berbagi file lewat cloud lebih efisien daripada mengirim ulang file berkali-kali. Namun izin akses harus dipilih dengan benar. View only cocok untuk dokumen final, comment untuk masukan, dan edit untuk kolaborasi yang memang membutuhkan perubahan langsung.', practice: 'Latihan: buat simulasi izin akses untuk tugas kelompok: siapa yang boleh melihat, memberi komentar, dan mengedit.' },
    { visual: ['Komentar', 'Riwayat', 'Versi'], explanation: 'Kolaborasi online memungkinkan banyak orang bekerja pada dokumen yang sama. Fitur komentar menjaga diskusi tetap menempel pada bagian yang dibahas, sedangkan riwayat versi membantu mengembalikan dokumen jika terjadi kesalahan. Ini membuat kerja kelompok lebih teratur.', practice: 'Latihan: buat aturan kerja kelompok online, termasuk penamaan file, cara memberi komentar, dan kapan membuat versi baru.' }
  ],
  'etika-digital': [
    { visual: ['Posting', 'Reputasi', 'Jejak'], explanation: 'Jejak digital adalah rekam aktivitas online yang dapat bertahan lama. Komentar, foto, video, dan unggahan dapat disalin orang lain meskipun sudah dihapus. Karena itu siswa perlu berpikir sebelum mengunggah, terutama jika konten menyangkut data pribadi atau orang lain.', practice: 'Latihan: baca contoh unggahan, lalu nilai apakah aman dipublikasikan dan bagian mana yang sebaiknya dihapus.' },
    { visual: ['Sumber', 'Lisensi', 'Izin'], explanation: 'Hak cipta melindungi karya seperti foto, musik, video, tulisan, dan desain. Mengambil karya orang lain tanpa izin dapat merugikan pembuatnya dan melanggar aturan. Saat memakai karya digital, siswa perlu mencantumkan sumber, memeriksa lisensi, dan memakai aset bebas izin jika diperlukan.', practice: 'Latihan: cari satu gambar berlisensi bebas, lalu tulis cara mencantumkan sumbernya dengan benar.' },
    { visual: ['Subjek jelas', 'Sopan', 'Respons'], explanation: 'Komunikasi online yang baik membantu pesan dipahami tanpa menimbulkan salah paham. Pilihan kata, tanda baca, waktu membalas, dan kejelasan tujuan sangat penting. Dalam konteks sekolah atau kerja, pesan yang sopan dan terstruktur menunjukkan tanggung jawab digital.', practice: 'Latihan: ubah pesan singkat yang terlalu kasar menjadi pesan yang sopan, jelas, dan tetap langsung ke tujuan.' }
  ]
};

const moduleVideos = {
  'dasar-komputer': 'https://youtu.be/E358Mlx6Mmg?si=KWqyPmtReoaznpou',
  hardware: 'https://youtu.be/2tQtnxGo1eE?si=HoB8-tfKQ_Z4m-_7',
  software: 'https://youtu.be/N34JPhZxAXA?si=OZvyVcsG9oMmTUp3',
  'sistem-operasi': 'https://youtu.be/rRFZ5hExKI8?si=Co8MBmJajBf-CCrE',
  internet: 'https://youtu.be/_fl7wWbV604?si=6Y6ETu1xuMOTypox',
  jaringan: 'https://youtu.be/xT58k6AB7gk?si=Wi9vmyLAYvU0Oxhp',
  'keamanan-digital': 'https://youtu.be/vuU8IA6ZB-k?si=-UJlRIdD2KoS5mKw',
  'manajemen-file': 'https://youtu.be/MM-MPS57qKA?si=wIEuzdQRDNF9tpJU',
  office: 'https://youtu.be/Ua2ws-LcLxE?si=h0VPps6YD-GVf9E1',
  pemrograman: 'https://youtu.be/jGyYuQf-GeE?si=pGn7DTWTJJIM3TQB',
  cloud: 'https://youtu.be/t0Ot2_dyAr0?si=EB4vatRcpPUTHWNr',
  'etika-digital': 'https://youtu.be/ThCcmEbBLc8?si=kGmPNODaNQFvkCPG'
};

const quizData = {
  'dasar-komputer': {
    title: 'Kuis Dasar Komputer',
    questions: [
      { q: 'Apa fungsi utama CPU dalam komputer?', options: ['Menyimpan data permanen', 'Memproses instruksi dan data', 'Menampilkan gambar ke monitor', 'Menghubungkan ke internet'], answer: 'Memproses instruksi dan data' },
      { q: 'Apa yang dimaksud dengan RAM?', options: ['Penyimpanan permanen', 'Memori sementara saat komputer berjalan', 'Prosesor grafis', 'Port koneksi USB'], answer: 'Memori sementara saat komputer berjalan' },
      { q: 'Cara mematikan komputer yang benar adalah?', options: ['Cabut kabel listrik langsung', 'Tekan tombol power paksa', 'Gunakan menu Shutdown', 'Biarkan baterai habis'], answer: 'Gunakan menu Shutdown' },
      { q: 'Alur kerja komputer yang benar adalah?', options: ['Output \u2192 Process \u2192 Input \u2192 Storage', 'Input \u2192 Process \u2192 Output \u2192 Storage', 'Storage \u2192 Input \u2192 Output \u2192 Process', 'Process \u2192 Input \u2192 Storage \u2192 Output'], answer: 'Input \u2192 Process \u2192 Output \u2192 Storage' },
      { q: 'Manakah yang termasuk perangkat output komputer?', options: ['Keyboard', 'Mouse', 'Monitor', 'Scanner'], answer: 'Monitor' }
    ]
  },
  'hardware': {
    title: 'Kuis Hardware',
    questions: [
      { q: 'Apa fungsi motherboard dalam komputer?', options: ['Memproses grafis', 'Menghubungkan semua komponen', 'Menyimpan data pengguna', 'Mengatur kecepatan internet'], answer: 'Menghubungkan semua komponen' },
      { q: 'Apa perbedaan utama SSD dengan HDD?', options: ['SSD lebih murah', 'HDD lebih cepat', 'SSD lebih cepat dan tidak ada bagian bergerak', 'HDD lebih ringan'], answer: 'SSD lebih cepat dan tidak ada bagian bergerak' },
      { q: 'Apa kegunaan RAM yang besar?', options: ['Mempercepat internet', 'Membantu multitasking', 'Menyimpan file lebih banyak', 'Memperkuat sinyal WiFi'], answer: 'Membantu multitasking' },
      { q: 'Perangkat input yang paling umum adalah?', options: ['Monitor', 'Printer', 'Speaker', 'Keyboard'], answer: 'Keyboard' },
      { q: 'Kenapa kita tetap perlu backup meski storage masih sehat?', options: ['Tidak perlu backup', 'Data bisa hilang kapan saja', 'Untuk menghemat storage', 'Agar komputer lebih cepat'], answer: 'Data bisa hilang kapan saja' }
    ]
  },
  'software': {
    title: 'Kuis Software',
    questions: [
      { q: 'Manakah yang termasuk system software?', options: ['Microsoft Word', 'Google Chrome', 'Windows 11', 'Adobe Photoshop'], answer: 'Windows 11' },
      { q: 'Mengapa update software penting dilakukan?', options: ['Agar tampilan berubah', 'Memperbaiki celah keamanan dan bug', 'Menambah fitur berbayar', 'Membuat komputer lebih lambat'], answer: 'Memperbaiki celah keamanan dan bug' },
      { q: 'Dari mana sebaiknya kita mengunduh aplikasi?', options: ['Situs pihak ketiga mana saja', 'Situs resmi pengembang', 'Hasil pencarian Google teratas', 'Forum diskusi online'], answer: 'Situs resmi pengembang' },
      { q: 'Apa itu utility software?', options: ['Software untuk bermain game', 'Software untuk membuat dokumen', 'Software untuk menjaga performa dan keamanan komputer', 'Software untuk desain grafis'], answer: 'Software untuk menjaga performa dan keamanan komputer' },
      { q: 'Mengapa software ilegal berbahaya?', options: ['Hanya lebih mahal', 'Bisa mengandung malware dan tidak mendapat update keamanan', 'Fiturnya terbatas', 'Tampilannya berbeda'], answer: 'Bisa mengandung malware dan tidak mendapat update keamanan' }
    ]
  },
  'sistem-operasi': {
    title: 'Kuis Sistem Operasi',
    questions: [
      { q: 'Apa fungsi utama sistem operasi pada komputer?', options: ['Mengganti fungsi keyboard', 'Mengatur hardware, file, memori, dan aplikasi', 'Menyimpan semua file di internet', 'Mencetak dokumen otomatis'], answer: 'Mengatur hardware, file, memori, dan aplikasi' },
      { q: 'Mengapa akun pengguna perlu diberi password?', options: ['Agar layar lebih terang', 'Untuk melindungi data dan akses pribadi', 'Agar aplikasi tidak bisa dibuka', 'Untuk mempercepat koneksi internet'], answer: 'Untuk melindungi data dan akses pribadi' },
      { q: 'Menu pengaturan jaringan biasanya digunakan untuk apa?', options: ['Mengubah ukuran monitor', 'Mengelola Wi-Fi dan koneksi internet', 'Menghapus semua file', 'Mengganti processor'], answer: 'Mengelola Wi-Fi dan koneksi internet' },
      { q: 'Langkah awal saat komputer mengalami masalah ringan adalah?', options: ['Langsung instal ulang', 'Restart perangkat dan baca pesan error', 'Membuka semua aplikasi', 'Mencabut storage internal'], answer: 'Restart perangkat dan baca pesan error' },
      { q: 'Kenapa update sistem operasi penting?', options: ['Untuk memperbaiki keamanan dan kestabilan sistem', 'Agar password hilang', 'Agar storage penuh', 'Untuk mematikan antivirus'], answer: 'Untuk memperbaiki keamanan dan kestabilan sistem' }
    ]
  },
  'internet': {
    title: 'Kuis Internet',
    questions: [
      { q: 'Apa fungsi DNS dalam jaringan internet?', options: ['Mengamankan koneksi', 'Menerjemahkan nama domain ke alamat IP', 'Membagi koneksi ke banyak perangkat', 'Menyimpan halaman web'], answer: 'Menerjemahkan nama domain ke alamat IP' },
      { q: 'Apa yang dimaksud URL?', options: ['Jenis browser internet', 'Alamat unik setiap halaman web', 'Protokol keamanan jaringan', 'Kecepatan koneksi internet'], answer: 'Alamat unik setiap halaman web' },
      { q: 'Apa yang harus dilakukan jika sinyal Wi-Fi lemah?', options: ['Ganti provider internet', 'Dekatkan perangkat ke router', 'Matikan komputer', 'Hapus aplikasi browser'], answer: 'Dekatkan perangkat ke router' },
      { q: 'Apa cara terbaik mencari informasi di internet?', options: ['Gunakan kata kunci umum satu kata', 'Gunakan kata kunci spesifik dan bandingkan sumber', 'Percaya pada hasil pertama pencarian', 'Hanya buka satu sumber'], answer: 'Gunakan kata kunci spesifik dan bandingkan sumber' },
      { q: 'Apa fungsi router dalam jaringan rumah?', options: ['Menyimpan file online', 'Membagi koneksi internet ke banyak perangkat', 'Mempercepat prosesor komputer', 'Mengubah IP address'], answer: 'Membagi koneksi internet ke banyak perangkat' }
    ]
  },
  'jaringan': {
    title: 'Kuis Jaringan',
    questions: [
      { q: 'Apa yang dimaksud LAN?', options: ['Jaringan area lokal seperti rumah atau kantor', 'Aplikasi untuk mengetik', 'Jenis file gambar', 'Perangkat penyimpanan cloud'], answer: 'Jaringan area lokal seperti rumah atau kantor' },
      { q: 'Apa fungsi IP address dalam jaringan?', options: ['Menjadi identitas perangkat di jaringan', 'Mengubah warna layar', 'Menyimpan dokumen', 'Menghapus virus otomatis'], answer: 'Menjadi identitas perangkat di jaringan' },
      { q: 'Apa peran DNS?', options: ['Menerjemahkan nama domain menjadi alamat IP', 'Memperbesar kapasitas RAM', 'Mencetak halaman web', 'Mengubah file menjadi PDF'], answer: 'Menerjemahkan nama domain menjadi alamat IP' },
      { q: 'Apa fungsi gateway pada jaringan lokal?', options: ['Pintu keluar jaringan menuju internet', 'Tempat menyimpan foto', 'Program edit video', 'Jenis kabel monitor'], answer: 'Pintu keluar jaringan menuju internet' },
      { q: 'Perintah ping berguna untuk apa?', options: ['Menguji koneksi dasar ke alamat tertentu', 'Membersihkan keyboard', 'Mengubah password Wi-Fi', 'Membuat folder baru'], answer: 'Menguji koneksi dasar ke alamat tertentu' }
    ]
  },
  'keamanan-digital': {
    title: 'Kuis Keamanan Digital',
    questions: [
      { q: 'Apa ciri password yang kuat?', options: ['Nama sendiri dan tanggal lahir', 'Minimal 12 karakter dengan huruf, angka, dan simbol', 'Kata yang mudah diingat', 'Password yang sama di semua akun'], answer: 'Minimal 12 karakter dengan huruf, angka, dan simbol' },
      { q: 'Apa yang dimaksud phishing?', options: ['Teknik mempercepat internet', 'Penipuan yang meniru layanan resmi untuk mencuri data', 'Virus yang merusak file', 'Cara membackup data'], answer: 'Penipuan yang meniru layanan resmi untuk mencuri data' },
      { q: 'Apa yang harus dilakukan setelah menggunakan komputer umum?', options: ['Matikan komputer', 'Logout dari semua akun', 'Hapus riwayat browser saja', 'Tidak perlu melakukan apa-apa'], answer: 'Logout dari semua akun' },
      { q: 'Mana tanda-tanda email phishing?', options: ['Dikirim dari email resmi perusahaan', 'Berisi instruksi untuk klik link dan masukkan password', 'Berisi informasi yang sudah Anda ketahui', 'Tidak ada lampiran file'], answer: 'Berisi instruksi untuk klik link dan masukkan password' },
      { q: 'Kenapa kita tidak boleh berbagi OTP dengan siapapun?', options: ['OTP tidak penting', 'OTP adalah kode sekali pakai untuk verifikasi akun yang harus dijaga', 'Berbagi OTP aman jika ke keluarga', 'OTP tidak berkaitan dengan keamanan'], answer: 'OTP adalah kode sekali pakai untuk verifikasi akun yang harus dijaga' }
    ]
  },
  'manajemen-file': {
    title: 'Kuis Manajemen File',
    questions: [
      { q: 'Mengapa struktur folder perlu dibuat rapi?', options: ['Agar file mudah ditemukan dan tidak banyak duplikat', 'Agar komputer tidak butuh listrik', 'Agar internet selalu cepat', 'Agar monitor lebih tajam'], answer: 'Agar file mudah ditemukan dan tidak banyak duplikat' },
      { q: 'Apa fungsi ekstensi file seperti .docx atau .jpg?', options: ['Menunjukkan jenis file dan aplikasi pembukanya', 'Menentukan harga komputer', 'Mengganti nama pengguna', 'Menghapus file sementara'], answer: 'Menunjukkan jenis file dan aplikasi pembukanya' },
      { q: 'Manakah contoh nama file yang baik?', options: ['baru banget final', 'Laporan_April_2026', 'aaaaa', 'file penting jangan hapus fix'], answer: 'Laporan_April_2026' },
      { q: 'Apa tujuan backup data?', options: ['Menyediakan salinan cadangan jika data asli hilang', 'Menghapus file lama otomatis', 'Memperbesar ukuran layar', 'Mengubah folder menjadi aplikasi'], answer: 'Menyediakan salinan cadangan jika data asli hilang' },
      { q: 'Apa arti aturan backup 3-2-1?', options: ['3 salinan, 2 media berbeda, 1 di lokasi berbeda', '3 folder, 2 nama file, 1 ikon', '3 komputer, 2 printer, 1 mouse', '3 password, 2 email, 1 browser'], answer: '3 salinan, 2 media berbeda, 1 di lokasi berbeda' }
    ]
  },
  office: {
    title: 'Kuis Aplikasi Office',
    questions: [
      { q: 'Aplikasi pengolah kata digunakan untuk apa?', options: ['Membuat surat, laporan, dan dokumen teks', 'Mengatur kabel jaringan', 'Membersihkan virus hardware', 'Mengganti komponen CPU'], answer: 'Membuat surat, laporan, dan dokumen teks' },
      { q: 'Apa fungsi rumus SUM pada spreadsheet?', options: ['Menjumlahkan angka secara otomatis', 'Membuat slide baru', 'Menghapus tabel', 'Mengunci keyboard'], answer: 'Menjumlahkan angka secara otomatis' },
      { q: 'Mengapa dokumen sering dibagikan sebagai PDF?', options: ['Agar format lebih konsisten di perangkat lain', 'Agar file tidak bisa dibuka', 'Agar ukurannya selalu besar', 'Agar rumus spreadsheet hilang'], answer: 'Agar format lebih konsisten di perangkat lain' },
      { q: 'Prinsip presentasi yang baik adalah?', options: ['Satu slide fokus pada satu pesan utama', 'Semua teks dimasukkan ke satu slide', 'Gunakan huruf sekecil mungkin', 'Hindari visual apa pun'], answer: 'Satu slide fokus pada satu pesan utama' },
      { q: 'Grafik pada spreadsheet berguna untuk apa?', options: ['Menyajikan data secara visual agar mudah dipahami', 'Mengganti fungsi printer', 'Memasang aplikasi baru', 'Mengatur password komputer'], answer: 'Menyajikan data secara visual agar mudah dipahami' }
    ]
  },
  pemrograman: {
    title: 'Kuis Dasar Pemrograman',
    questions: [
      { q: 'Apa yang dimaksud coding?', options: ['Memberi instruksi kepada komputer dengan bahasa pemrograman', 'Membersihkan layar komputer', 'Mengganti casing komputer', 'Mencetak dokumen sekolah'], answer: 'Memberi instruksi kepada komputer dengan bahasa pemrograman' },
      { q: 'Variabel dalam program digunakan untuk apa?', options: ['Menyimpan nilai yang dapat digunakan atau diubah', 'Menghapus sistem operasi', 'Memperbesar speaker', 'Mengganti kabel jaringan'], answer: 'Menyimpan nilai yang dapat digunakan atau diubah' },
      { q: 'Struktur if-else berguna untuk apa?', options: ['Membuat keputusan berdasarkan kondisi', 'Menyimpan file ke flashdisk', 'Mengatur cahaya monitor', 'Mengganti font otomatis'], answer: 'Membuat keputusan berdasarkan kondisi' },
      { q: 'Loop digunakan ketika program perlu?', options: ['Mengulang instruksi beberapa kali', 'Mematikan komputer permanen', 'Menghapus semua data', 'Membuka casing CPU'], answer: 'Mengulang instruksi beberapa kali' },
      { q: 'Mengapa typo kecil bisa membuat program gagal?', options: ['Komputer mengikuti instruksi secara tepat', 'Komputer selalu menebak maksud pengguna', 'Program tidak memakai aturan penulisan', 'Kode tidak perlu urutan'], answer: 'Komputer mengikuti instruksi secara tepat' }
    ]
  },
  cloud: {
    title: 'Kuis Cloud Storage',
    questions: [
      { q: 'Apa itu cloud storage?', options: ['Penyimpanan file di server online', 'Tempat menyimpan kabel', 'Jenis RAM komputer', 'Aplikasi penghapus file'], answer: 'Penyimpanan file di server online' },
      { q: 'Apa yang dibutuhkan untuk mengakses cloud storage?', options: ['Akun dan koneksi internet', 'Printer dan scanner', 'Kabel VGA', 'DVD kosong'], answer: 'Akun dan koneksi internet' },
      { q: 'Apa arti sinkronisasi file?', options: ['File diperbarui antar perangkat yang terhubung akun sama', 'File dihapus setelah dibuka', 'File berubah menjadi gambar', 'File hanya bisa dibuka offline'], answer: 'File diperbarui antar perangkat yang terhubung akun sama' },
      { q: 'Izin view only pada link berbagi berarti penerima dapat?', options: ['Melihat file tanpa mengeditnya', 'Menghapus file asli', 'Mengganti password akun', 'Mengambil alih pemilik file'], answer: 'Melihat file tanpa mengeditnya' },
      { q: 'Mengapa akses link berbagi perlu dicabut jika tidak diperlukan?', options: ['Agar file tidak terus terbuka untuk pihak lain', 'Agar komputer lebih panas', 'Agar storage lokal kosong', 'Agar browser tidak bisa dipakai'], answer: 'Agar file tidak terus terbuka untuk pihak lain' }
    ]
  },
  'etika-digital': {
    title: 'Kuis Etika Digital',
    questions: [
      { q: 'Apa yang dimaksud jejak digital?', options: ['Rekam aktivitas online yang dapat tertinggal di internet', 'Bekas kabel pada meja', 'Riwayat listrik komputer', 'Jenis folder sementara'], answer: 'Rekam aktivitas online yang dapat tertinggal di internet' },
      { q: 'Mengapa harus berhati-hati sebelum mengunggah konten?', options: ['Konten online bisa memengaruhi reputasi jangka panjang', 'Agar keyboard tidak rusak', 'Agar file menjadi kecil', 'Agar monitor tidak gelap'], answer: 'Konten online bisa memengaruhi reputasi jangka panjang' },
      { q: 'Apa sikap yang benar saat memakai karya orang lain?', options: ['Mencantumkan sumber dan mengikuti izin penggunaan', 'Mengklaim sebagai karya sendiri', 'Menghapus nama pembuat', 'Mengunggah ulang tanpa konteks'], answer: 'Mencantumkan sumber dan mengikuti izin penggunaan' },
      { q: 'Mengapa huruf kapital semua sebaiknya dihindari dalam pesan?', options: ['Dapat terkesan berteriak atau kurang sopan', 'Selalu membuat pesan tidak terkirim', 'Menghapus lampiran otomatis', 'Membuat email masuk spam pasti'], answer: 'Dapat terkesan berteriak atau kurang sopan' },
      { q: 'Komunikasi online yang baik sebaiknya?', options: ['Jelas, sopan, dan langsung ke pokok masalah', 'Penuh singkatan yang sulit dimengerti', 'Mengabaikan pesan penting', 'Menggunakan kata kasar agar cepat dibalas'], answer: 'Jelas, sopan, dan langsung ke pokok masalah' }
    ]
  }
};

// Default quiz (used when module quiz not available)
const defaultQuiz = {
  title: 'Kuis Umum Dasar Komputer',
  questions: [
    { q: 'Apa fungsi CPU dalam komputer?', options: ['Menyimpan data permanen', 'Memproses instruksi', 'Menampilkan gambar', 'Mengatur suhu'], answer: 'Memproses instruksi' },
    { q: 'RAM adalah singkatan dari?', options: ['Read And Memory', 'Random Access Memory', 'Read Access Module', 'Rapid Application Mode'], answer: 'Random Access Memory' },
    { q: 'Sistem operasi yang paling banyak digunakan di PC adalah?', options: ['Linux', 'macOS', 'Windows', 'Android'], answer: 'Windows' },
    { q: 'Software untuk mengolah angka dan data disebut?', options: ['Pengolah kata', 'Spreadsheet', 'Browser', 'Presentasi'], answer: 'Spreadsheet' },
    { q: 'Apa yang dilakukan browser ketika kita mengetikkan URL?', options: ['Menyimpan data ke cloud', 'Membuka halaman website dari server', 'Membackup file lokal', 'Menginstal aplikasi'], answer: 'Membuka halaman website dari server' },
    { q: 'Apa tujuan utama malware?', options: ['Mempercepat komputer', 'Mencuri data atau merusak sistem', 'Memperbarui software', 'Menghemat baterai'], answer: 'Mencuri data atau merusak sistem' },
    { q: 'Kenapa penting melakukan backup data secara berkala?', options: ['Agar komputer lebih cepat', 'Mencegah kehilangan data permanen', 'Mengurangi penggunaan RAM', 'Mempercepat startup'], answer: 'Mencegah kehilangan data permanen' },
    { q: 'Apa fungsi DNS dalam jaringan internet?', options: ['Mengamankan koneksi WiFi', 'Menerjemahkan nama domain ke alamat IP', 'Membagi bandwidth internet', 'Menyimpan email pengguna'], answer: 'Menerjemahkan nama domain ke alamat IP' },
    { q: 'Apa yang dibutuhkan untuk mengakses cloud storage?', options: ['Kabel USB', 'Akun dan koneksi internet', 'Perangkat khusus', 'Software berbayar'], answer: 'Akun dan koneksi internet' },
    { q: 'Etika digital yang benar ketika menggunakan karya orang lain adalah?', options: ['Langsung dipakai tanpa izin', 'Mencantumkan sumber dan izin penggunaan', 'Mengubah sedikit lalu klaim sebagai karya sendiri', 'Tidak perlu mencantumkan apapun'], answer: 'Mencantumkan sumber dan izin penggunaan' }
  ]
};
const supplementalQuizQuestions = {
  'dasar-komputer': [
    { q: 'Apa contoh perangkat input komputer?', options: ['Keyboard', 'Monitor', 'Speaker', 'Printer'], answer: 'Keyboard' },
    { q: 'Apa fungsi storage pada komputer?', options: ['Menyimpan data secara permanen', 'Mengolah instruksi utama', 'Menampilkan warna layar', 'Mengirim sinyal Wi-Fi'], answer: 'Menyimpan data secara permanen' },
    { q: 'Mengapa ventilasi komputer perlu dibersihkan?', options: ['Agar suhu tetap stabil', 'Agar password berubah', 'Agar RAM menjadi permanen', 'Agar monitor mencetak dokumen'], answer: 'Agar suhu tetap stabil' },
    { q: 'Software pada komputer berfungsi sebagai?', options: ['Instruksi agar komputer bekerja', 'Kabel penghubung monitor', 'Tempat listrik cadangan', 'Komponen fisik CPU'], answer: 'Instruksi agar komputer bekerja' },
    { q: 'Perangkat output mengubah hasil proses menjadi?', options: ['Informasi yang bisa dilihat atau didengar', 'Password baru', 'Sinyal listrik rumah', 'Kode QR otomatis'], answer: 'Informasi yang bisa dilihat atau didengar' }
  ],
  hardware: [
    { q: 'Komponen apa yang sering disebut otak komputer?', options: ['CPU', 'Monitor', 'Mouse', 'Printer'], answer: 'CPU' },
    { q: 'Slot RAM biasanya berada pada?', options: ['Motherboard', 'Monitor', 'Keyboard', 'Speaker'], answer: 'Motherboard' },
    { q: 'SSD unggul karena?', options: ['Akses data lebih cepat', 'Selalu lebih besar dari HDD', 'Tidak membutuhkan listrik', 'Berfungsi sebagai monitor'], answer: 'Akses data lebih cepat' },
    { q: 'Printer termasuk perangkat?', options: ['Output', 'Input utama', 'Prosesor', 'RAM'], answer: 'Output' },
    { q: 'Apa yang perlu dicek sebelum membeli CPU dan motherboard?', options: ['Kompatibilitas socket', 'Warna casing saja', 'Jumlah ikon desktop', 'Nama folder dokumen'], answer: 'Kompatibilitas socket' }
  ],
  software: [
    { q: 'Aplikasi browser termasuk jenis?', options: ['Application software', 'Hardware', 'Motherboard', 'Perangkat output'], answer: 'Application software' },
    { q: 'Driver perangkat berguna untuk?', options: ['Membantu sistem mengenali hardware', 'Menghapus semua file', 'Membuat internet gratis', 'Mengganti RAM'], answer: 'Membantu sistem mengenali hardware' },
    { q: 'Antivirus termasuk contoh?', options: ['Utility software', 'Perangkat input', 'Storage', 'Port jaringan'], answer: 'Utility software' },
    { q: 'Lisensi software diperlukan agar penggunaan?', options: ['Legal dan sesuai aturan', 'Selalu offline', 'Tanpa akun', 'Tidak perlu update'], answer: 'Legal dan sesuai aturan' },
    { q: 'Menghapus aplikasi tidak perlu dapat membantu?', options: ['Menjaga ruang dan performa', 'Mengganti processor', 'Memperbesar layar', 'Menghapus listrik statis'], answer: 'Menjaga ruang dan performa' }
  ],
  'sistem-operasi': [
    { q: 'Sistem operasi menyediakan antarmuka seperti?', options: ['Desktop dan menu', 'Kabel HDMI', 'Keyboard mekanik', 'Kipas casing'], answer: 'Desktop dan menu' },
    { q: 'Task manager biasa dipakai untuk melihat?', options: ['Proses aplikasi yang berjalan', 'Harga komputer', 'Password Wi-Fi orang lain', 'Ukuran meja'], answer: 'Proses aplikasi yang berjalan' },
    { q: 'Mengelola file adalah salah satu fungsi?', options: ['Sistem operasi', 'Monitor', 'Mousepad', 'Speaker'], answer: 'Sistem operasi' },
    { q: 'Restart sering membantu karena?', options: ['Memulai ulang proses sistem', 'Menghapus semua data permanen', 'Mengganti hardware otomatis', 'Mematikan internet selamanya'], answer: 'Memulai ulang proses sistem' },
    { q: 'Pengaturan akun pengguna berguna untuk?', options: ['Mengatur akses dan keamanan pengguna', 'Menambah kapasitas baterai', 'Mengubah kabel LAN', 'Mencetak foto'], answer: 'Mengatur akses dan keamanan pengguna' }
  ],
  internet: [
    { q: 'Browser digunakan untuk?', options: ['Membuka halaman web', 'Mengganti RAM', 'Mencetak tanpa printer', 'Menyolder motherboard'], answer: 'Membuka halaman web' },
    { q: 'Password Wi-Fi yang baik sebaiknya?', options: ['Kuat dan sulit ditebak', 'Nama sendiri saja', '12345678', 'Dikosongkan'], answer: 'Kuat dan sulit ditebak' },
    { q: 'Email sebaiknya memiliki subjek yang?', options: ['Jelas', 'Kosong', 'Berisi password', 'Selalu huruf acak'], answer: 'Jelas' },
    { q: 'Server web berperan untuk?', options: ['Mengirim data halaman ke pengguna', 'Mengganti keyboard', 'Membuat monitor menyala', 'Menghapus DNS'], answer: 'Mengirim data halaman ke pengguna' },
    { q: 'Informasi internet sebaiknya diperiksa dari?', options: ['Beberapa sumber tepercaya', 'Satu komentar saja', 'Iklan pop-up', 'Pesan anonim'], answer: 'Beberapa sumber tepercaya' }
  ],
  jaringan: [
    { q: 'WAN menghubungkan jaringan dalam area?', options: ['Lebih luas antar wilayah', 'Satu meja saja', 'Satu folder', 'Satu aplikasi'], answer: 'Lebih luas antar wilayah' },
    { q: 'Router biasanya menjadi?', options: ['Gateway jaringan rumah', 'Aplikasi desain', 'Jenis file', 'Perangkat edit suara'], answer: 'Gateway jaringan rumah' },
    { q: 'IPv4 umumnya berbentuk?', options: ['Empat angka dipisah titik', 'Satu kata sandi', 'Ikon folder', 'Kode warna layar'], answer: 'Empat angka dipisah titik' },
    { q: 'Jika perangkat tidak terhubung, langkah awal adalah?', options: ['Cek ikon jaringan dan koneksi', 'Bongkar CPU langsung', 'Hapus sistem operasi', 'Ganti monitor'], answer: 'Cek ikon jaringan dan koneksi' },
    { q: 'Berbagi printer di kantor membutuhkan?', options: ['Jaringan antar perangkat', 'Aplikasi musik', 'Kamera laptop', 'File gambar'], answer: 'Jaringan antar perangkat' }
  ],
  'keamanan-digital': [
    { q: 'Password manager membantu untuk?', options: ['Menyimpan password secara aman', 'Membagikan OTP', 'Mematikan antivirus', 'Menghapus akun'], answer: 'Menyimpan password secara aman' },
    { q: 'Data pribadi di media sosial sebaiknya?', options: ['Dibatasi dan dijaga', 'Dibagikan selengkap mungkin', 'Dikirim ke orang asing', 'Dijadikan password'], answer: 'Dibatasi dan dijaga' },
    { q: 'Link mencurigakan sebaiknya?', options: ['Tidak langsung diklik', 'Dibuka lalu isi password', 'Dibagikan ke semua teman', 'Disimpan sebagai wallpaper'], answer: 'Tidak langsung diklik' },
    { q: 'Malware dapat berbahaya karena?', options: ['Merusak sistem atau mencuri data', 'Selalu mempercepat komputer', 'Membuat layar lebih cerah', 'Menambah storage fisik'], answer: 'Merusak sistem atau mencuri data' },
    { q: 'Logout dari perangkat umum penting untuk?', options: ['Mencegah akses akun oleh orang lain', 'Memperbesar RAM', 'Menghapus keyboard', 'Mematikan router'], answer: 'Mencegah akses akun oleh orang lain' }
  ],
  'manajemen-file': [
    { q: 'Folder berdasarkan kategori membantu?', options: ['File lebih mudah ditemukan', 'Monitor lebih dingin', 'Internet lebih cepat', 'Mouse lebih akurat'], answer: 'File lebih mudah ditemukan' },
    { q: 'Ekstensi .xlsx biasanya untuk?', options: ['Spreadsheet', 'Gambar', 'Video', 'Audio'], answer: 'Spreadsheet' },
    { q: 'Backup offline dapat memakai?', options: ['Hard drive eksternal', 'Monitor', 'Kabel charger saja', 'Mouse'], answer: 'Hard drive eksternal' },
    { q: 'Nama file yang deskriptif sebaiknya berisi?', options: ['Isi dan waktu/konteks dokumen', 'Huruf acak saja', 'Password akun', 'Nama virus'], answer: 'Isi dan waktu/konteks dokumen' },
    { q: 'Cloud backup berguna karena file dapat?', options: ['Diakses kembali dari internet', 'Berubah menjadi RAM', 'Mencetak otomatis', 'Mengganti CPU'], answer: 'Diakses kembali dari internet' }
  ],
  office: [
    { q: 'Heading pada dokumen membantu membuat?', options: ['Struktur dokumen yang rapi', 'Koneksi Wi-Fi', 'Password BIOS', 'Kabel printer'], answer: 'Struktur dokumen yang rapi' },
    { q: 'Rumus AVERAGE digunakan untuk?', options: ['Menghitung rata-rata', 'Membuat slide', 'Menghapus gambar', 'Mengunci file'], answer: 'Menghitung rata-rata' },
    { q: 'Border dan warna header pada tabel membantu?', options: ['Tabel lebih mudah dibaca', 'File tidak bisa dibuka', 'Printer rusak', 'CPU lebih dingin'], answer: 'Tabel lebih mudah dibaca' },
    { q: 'Visual pada presentasi berguna untuk?', options: ['Membantu menjelaskan ide', 'Menghilangkan semua teks wajib', 'Memperbesar ukuran file saja', 'Menghapus audio'], answer: 'Membantu menjelaskan ide' },
    { q: 'Sebelum presentasi, pembicara sebaiknya?', options: ['Melatih alur dan timing', 'Menghapus semua slide', 'Mengunci layar', 'Mematikan proyektor'], answer: 'Melatih alur dan timing' }
  ],
  pemrograman: [
    { q: 'Program biasanya memproses input lalu menghasilkan?', options: ['Output', 'Kabel', 'Debu', 'Baterai'], answer: 'Output' },
    { q: 'Urutan instruksi dalam program harus?', options: ['Jelas dan logis', 'Acak', 'Selalu rahasia', 'Tanpa aturan'], answer: 'Jelas dan logis' },
    { q: 'Contoh kondisi if-else adalah?', options: ['Jika nilai >= 70 maka lulus', 'Simpan kabel di laci', 'Cetak tanpa printer', 'Matikan layar'], answer: 'Jika nilai >= 70 maka lulus' },
    { q: 'Bahasa yang ramah pemula antara lain?', options: ['Python dan JavaScript', 'HDMI dan VGA', 'RAM dan SSD', 'PDF dan JPG'], answer: 'Python dan JavaScript' },
    { q: 'Debugging berarti?', options: ['Mencari dan memperbaiki kesalahan program', 'Membersihkan monitor', 'Menghapus internet', 'Mengganti casing'], answer: 'Mencari dan memperbaiki kesalahan program' }
  ],
  cloud: [
    { q: 'Cloud storage memungkinkan file diakses dari?', options: ['Berbagai perangkat', 'Hanya satu keyboard', 'Kabel VGA', 'BIOS saja'], answer: 'Berbagai perangkat' },
    { q: 'Izin edit pada file bersama membuat penerima dapat?', options: ['Mengubah isi file', 'Mengganti pemilik akun otomatis', 'Menghapus komputer', 'Menaikkan RAM'], answer: 'Mengubah isi file' },
    { q: 'Riwayat perubahan dokumen membantu melihat?', options: ['Siapa mengubah apa dan kapan', 'Kecepatan kipas', 'Harga cloud', 'Ukuran monitor'], answer: 'Siapa mengubah apa dan kapan' },
    { q: 'Komentar pada dokumen kolaboratif berguna untuk?', options: ['Memberi masukan tanpa mengubah isi utama', 'Menghapus semua halaman', 'Membuat internet mati', 'Mengganti format disk'], answer: 'Memberi masukan tanpa mengubah isi utama' },
    { q: 'Kapasitas gratis cloud storage sebaiknya?', options: ['Dipantau agar tidak penuh', 'Diabaikan selamanya', 'Dikirim ke printer', 'Dijadikan password'], answer: 'Dipantau agar tidak penuh' }
  ],
  'etika-digital': [
    { q: 'Jejak digital sulit dihapus karena?', options: ['Konten dapat tersalin dan tersebar', 'Keyboard menyimpan debu', 'Monitor selalu merekam', 'File selalu offline'], answer: 'Konten dapat tersalin dan tersebar' },
    { q: 'Bahasa online yang baik sebaiknya?', options: ['Sopan dan konstruktif', 'Kasar agar tegas', 'Selalu huruf kapital', 'Penuh ancaman'], answer: 'Sopan dan konstruktif' },
    { q: 'Hak cipta melindungi?', options: ['Karya digital seperti foto, musik, tulisan', 'Kabel listrik', 'Suhu ruangan', 'Nama folder sementara'], answer: 'Karya digital seperti foto, musik, tulisan' },
    { q: 'Membalas pesan penting dalam waktu wajar menunjukkan?', options: ['Profesionalisme dan rasa hormat', 'Komputer lebih cepat', 'File lebih kecil', 'Akun otomatis aman'], answer: 'Profesionalisme dan rasa hormat' },
    { q: 'Creative Commons adalah contoh?', options: ['Lisensi penggunaan karya', 'Jenis RAM', 'Port monitor', 'Aplikasi antivirus pasti'], answer: 'Lisensi penggunaan karya' }
  ]
};

/* ---------- AUTH STATE ---------- */

function getAccounts() { return JSON.parse(localStorage.getItem(ACCOUNT_KEY) || '{}'); }
function saveAccounts(a) { localStorage.setItem(ACCOUNT_KEY, JSON.stringify(a)); }
function getSession() { const s = sessionStorage.getItem(SESSION_KEY); return s ? JSON.parse(s) : null; }
function setSession(u) {
  localStorage.removeItem(SESSION_KEY);
  if (u) sessionStorage.setItem(SESSION_KEY, JSON.stringify(u));
  else sessionStorage.removeItem(SESSION_KEY);
}

function progressKey(email) { return `techBasicProgress:${email.toLowerCase()}`; }

const defaultProgress = () => ({
  completedLessons: [],
  history: [],
  studyLog: [],
  lastLogoutDate: '',
  quizPassed: 0,
  quizScores: {},
  streakDays: 0,
  quizHistory: []
});

function loadProgress(email) {
  const saved = localStorage.getItem(progressKey(email));
  if (!saved) return defaultProgress();
  const p = JSON.parse(saved);
  return {
    completedLessons: p.completedLessons || [],
    history: (p.history || []).map(item => ({ ...item, durationMinutes: item.durationMinutes || lessonDuration(item.moduleId) })),
    studyLog: p.studyLog || [],
    lastLogoutDate: p.lastLogoutDate || '',
    quizPassed: p.quizPassed || 0,
    quizScores: p.quizScores || {},
    streakDays: p.streakDays || 0,
    quizHistory: p.quizHistory || []
  };
}
function saveProgress() {
  if (currentUser) localStorage.setItem(progressKey(currentUser.email), JSON.stringify(progress));
}

/* ---------- RUNTIME STATE ---------- */

let currentUser = getSession();
let progress = currentUser ? loadProgress(currentUser.email) : defaultProgress();
let authMode = 'login';
let currentModuleId = modules[0].id;
let currentLessonIndex = 0;
let quizModuleId = null;
let quizIndex = 0;
let quizAnswers = [];
let quizReadyForScore = false;
let currentViewName = currentUser ? 'dashboard' : 'auth';
let activeStudySession = null;

/* ---------- HELPERS ---------- */

function getTheme() { return localStorage.getItem(THEME_KEY) || 'dark'; }
function applyTheme(theme = getTheme()) {
  const normalized = theme === 'light' ? 'light' : 'dark';
  document.body.classList.toggle('theme-light', normalized === 'light');
  document.body.dataset.theme = normalized;
  document.querySelectorAll('[data-theme-label]').forEach(el => {
    el.textContent = normalized === 'light' ? 'Mode Malam' : 'Mode Pagi';
  });
  document.querySelectorAll('[data-theme-icon]').forEach(el => {
    el.innerHTML = normalized === 'light' ? '&#9790;' : '&#9728;';
  });
}
function toggleTheme() {
  const next = getTheme() === 'light' ? 'dark' : 'light';
  localStorage.setItem(THEME_KEY, next);
  applyTheme(next);
}
function totalLessons() { return modules.reduce((t, m) => t + m.lessons.length, 0); }
function totalQuizzes() { return modules.length; }
function lessonKey(mid, idx) { return `${mid}:${idx}`; }
function lessonDuration(mid) { const m = modules.find(x => x.id === mid); return m ? Math.round(m.minutes / m.lessons.length) : 30; }
function moduleCompletedCount(m) { return m.lessons.filter((_, i) => progress.completedLessons.includes(lessonKey(m.id, i))).length; }
function studySeconds() {
  const saved = (progress.studyLog || []).reduce((t, h) => t + (h.seconds || 0), 0);
  const active = activeStudySession ? Math.floor((Date.now() - activeStudySession.startedAt) / 1000) : 0;
  return saved + Math.max(active, 0);
}
function isSameDay(ts, ref = Date.now()) {
  const a = new Date(ts);
  const b = new Date(ref);
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}
function todayStudySeconds() {
  const saved = (progress.studyLog || [])
    .filter(h => isSameDay(h.time || h.end || Date.now()))
    .reduce((t, h) => t + (h.seconds || 0), 0);
  const active = activeStudySession ? Math.floor((Date.now() - activeStudySession.startedAt) / 1000) : 0;
  return saved + Math.max(active, 0);
}
function studyMinutes() { return Math.round(studySeconds() / 60); }
function lessonStudySeconds(mid, idx) {
  const saved = (progress.studyLog || [])
    .filter(h => h.moduleId === mid && h.lessonIndex === idx)
    .reduce((t, h) => t + (h.seconds || 0), 0);
  const active = activeStudySession && activeStudySession.moduleId === mid && activeStudySession.lessonIndex === idx
    ? Math.floor((Date.now() - activeStudySession.startedAt) / 1000)
    : 0;
  return saved + Math.max(active, 0);
}
function progressPercent() { return Math.round((progress.completedLessons.length / totalLessons()) * 100); }
function totalPoints() { return progress.completedLessons.length * 25 + Object.values(progress.quizScores).reduce((t, s) => t + s, 0); }
function quizPassedCount() { return modules.filter(m => (progress.quizScores[m.id] || 0) >= 70).length; }
function getVideoUrl(moduleId, lesson) { return lesson.videoUrl || moduleVideos[moduleId] || ''; }
function getYoutubeEmbedUrl(url) {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    let videoId = '';
    if (parsed.hostname.includes('youtu.be')) videoId = parsed.pathname.replace('/', '');
    if (parsed.hostname.includes('youtube.com')) videoId = parsed.searchParams.get('v') || '';
    const origin = window.location.origin && window.location.origin !== 'null'
      ? `&origin=${encodeURIComponent(window.location.origin)}`
      : '';
    return videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1${origin}` : url;
  } catch (_) {
    return url;
  }
}

function hoursText(mins = studyMinutes()) {
  if (!mins) return '0h';
  const h = mins / 60;
  return h < 10 && h % 1 ? `${h.toFixed(1)}h` : `${Math.round(h)}h`;
}
function durationTextFromSeconds(seconds) {
  const s = Math.max(0, Math.round(seconds || 0));
  if (s < 60) return `${s} detik`;
  const mins = Math.round(s / 60);
  if (mins < 60) return `${mins} menit`;
  const h = mins / 60;
  return `${h < 10 && h % 1 ? h.toFixed(1) : Math.round(h)} jam`;
}
function formatWeekHours(mins) {
  if (!mins) return '0h';
  const h = mins / 60;
  return `${h < 10 && h % 1 ? h.toFixed(1) : Math.round(h)} jam`;
}

function formatFullDateTime(ts) {
  if (!ts) return 'Tanggal belum tersedia';
  return new Date(ts).toLocaleString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}

function relativeTime(ts) {
  if (!ts) return 'Belum pernah';
  const secs = Math.max(1, Math.floor((Date.now() - ts) / 1000));
  if (secs < 60) return 'baru saja';
  const mins = Math.floor(secs / 60);
  if (mins < 60) return `${mins} menit lalu`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours} jam lalu`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days} hari lalu`;
  const weeks = Math.floor(days / 7);
  if (weeks < 4) return `${weeks} minggu lalu`;
  return new Date(ts).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' });
}

function recentHistory() { return [...progress.history].sort((a, b) => b.time - a.time).slice(0, 3); }
function recentQuizHistory(limit = 5) { return [...(progress.quizHistory || [])].sort((a, b) => b.time - a.time).slice(0, limit); }

function recommendedModules() {
  const incomplete = modules.filter(m => moduleCompletedCount(m) < m.lessons.length);
  if (!incomplete.length) return modules.slice(0, 3);
  // Sort by: started but not finished first, then not started
  return incomplete.sort((a, b) => {
    const ca = moduleCompletedCount(a), cb = moduleCompletedCount(b);
    if (ca > 0 && cb === 0) return -1;
    if (cb > 0 && ca === 0) return 1;
    return 0;
  }).slice(0, 3);
}

function currentWeekActivity() {
  const now = new Date();
  const start = new Date(now);
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
  const days = Array.from({ length: 7 }, (_, i) => ({ label: ['Sen','Sel','Rab','Kam','Jum','Sab','Min'][i], seconds: 0 }));
  const logs = [...(progress.studyLog || [])];
  if (activeStudySession) {
    logs.push({
      time: Date.now(),
      seconds: Math.max(0, Math.floor((Date.now() - activeStudySession.startedAt) / 1000))
    });
  }
  logs.forEach(item => {
    const d = new Date(item.time || item.end || Date.now());
    if (d >= start) {
      const idx = Math.floor((d - start) / 86400000);
      if (idx >= 0 && idx < 7) days[idx].seconds += item.seconds || 0;
    }
  });
  return days;
}

function streakCount() {
  const logs = [...(progress.studyLog || [])];
  if (activeStudySession) logs.push({ time: Date.now() });
  const dates = new Set(logs.map(h => {
    const d = new Date(h.time); d.setHours(0,0,0,0); return d.getTime();
  }));
  if (!dates.size) return 0;
  let cursor = new Date(Math.max(...dates)); cursor.setHours(0,0,0,0);
  let count = 0;
  while (dates.has(cursor.getTime())) { count++; cursor.setDate(cursor.getDate() - 1); }
  return count;
}

function startStudySession() {
  if (!currentUser) return;
  activeStudySession = {
    moduleId: currentModuleId,
    lessonIndex: currentLessonIndex,
    startedAt: Date.now()
  };
}

function stopStudySession() {
  if (!activeStudySession) return;
  const endedAt = Date.now();
  const seconds = Math.max(0, Math.round((endedAt - activeStudySession.startedAt) / 1000));
  if (seconds > 0) {
    progress.studyLog = progress.studyLog || [];
    progress.studyLog.push({
      moduleId: activeStudySession.moduleId,
      lessonIndex: activeStudySession.lessonIndex,
      time: endedAt,
      seconds
    });
    saveProgress();
  }
  activeStudySession = null;
}

function restartStudySession() {
  stopStudySession();
  startStudySession();
}

function openModal({ icon = '!', title, message, actions = [] }) {
  const modal = document.querySelector('[data-app-modal]');
  if (!modal) return;
  modal.querySelector('[data-modal-icon]').textContent = icon;
  modal.querySelector('[data-modal-title]').textContent = title;
  modal.querySelector('[data-modal-message]').innerHTML = message;
  modal.querySelector('[data-modal-actions]').innerHTML = actions.map(action => `
    <button class="modal-btn ${action.variant || 'ghost'}" type="button" data-modal-action="${action.action}">
      ${action.label}
    </button>
  `).join('');
  modal.classList.add('visible');
  modal.setAttribute('aria-hidden', 'false');
}

function closeModal() {
  const modal = document.querySelector('[data-app-modal]');
  if (!modal) return;
  modal.classList.remove('visible');
  modal.setAttribute('aria-hidden', 'true');
}

function confirmLogout() {
  openModal({
    icon: '!',
    title: 'Keluar dari sistem?',
    message: 'Sesi belajar kamu akan ditutup dari perangkat ini. Kamu bisa login kembali kapan saja.',
    actions: [
      { label: 'Batal', action: 'close', variant: 'ghost' },
      { label: 'Logout', action: 'logout', variant: 'danger' }
    ]
  });
}

function showQuizProgressModal(score, correct, total, passed) {
  openModal({
    icon: passed ? '\u2713' : '!',
    title: passed ? 'Kuis selesai!' : 'Nilai sudah tersimpan',
    message: `Nilai kamu <strong>${score}</strong>. Jawaban benar: ${correct} dari ${total} soal. Lihat perkembangan belajarmu di menu Progres.`,
    actions: [
      { label: 'Ke Progres', action: 'progress', variant: 'primary' }
    ]
  });
}

/* ---------- ROUTING ---------- */

const views = () => document.querySelectorAll('[data-view]');

function routeTo(view) {
  if (!currentUser && view !== 'auth') view = 'auth';
  if (currentViewName === 'lesson' && view !== 'lesson') stopStudySession();
  document.body.classList.toggle('is-auth', view === 'auth');
  document.querySelector('[data-app-shell]').style.display = (view === 'auth') ? 'none' : 'flex';
  views().forEach(s => s.classList.toggle('active', s.dataset.view === view));
  document.querySelectorAll('[data-nav-item]').forEach(a => a.classList.toggle('active', a.dataset.navItem === view));
  document.querySelector('[data-sidebar]').classList.remove('open');
  document.querySelector('[data-sidebar-overlay]').classList.remove('visible');
  window.scrollTo(0, 0);
  if (view === 'dashboard') renderDashboard();
  if (view === 'materi') renderMaterials();
  if (view === 'lesson') renderLesson();
  if (view === 'quiz') renderQuizStart();
  if (view === 'progress') renderProgress();
  if (view === 'pencapaian') renderAchievements();
  if (view === 'lesson' && currentViewName !== 'lesson') startStudySession();
  currentViewName = view;
}

/* ---------- AUTH ---------- */

function setAuthMode(mode) {
  authMode = mode;
  document.querySelectorAll('[data-auth-mode]').forEach(b => b.classList.toggle('active', b.dataset.authMode === mode));
  const nameField = document.querySelector('.register-only');
  if (nameField) nameField.style.display = mode === 'register' ? 'block' : 'none';
  const nameInput = document.querySelector('input[name="name"]');
  if (nameInput) nameInput.required = mode === 'register';
  const submitBtn = document.querySelector('[data-submit-label]');
  if (submitBtn) submitBtn.textContent = mode === 'login' ? 'Masuk' : 'Daftar Sekarang';
  const msg = document.querySelector('[data-form-message]');
  if (msg) msg.textContent = '';
  resetPasswordVisibility();
}

function resetPasswordVisibility() {
  const input = document.querySelector('input[name="password"]');
  const button = document.querySelector('[data-password-toggle]');
  if (input) input.type = 'password';
  if (button) {
    button.setAttribute('aria-label', 'Lihat password');
  }
}
function togglePasswordVisibility(button) {
  const input = button.closest('.input-wrap')?.querySelector('input[name="password"]');
  if (!input) return;
  const isHidden = input.type === 'password';
  input.type = isHidden ? 'text' : 'password';
  button.setAttribute('aria-label', isHidden ? 'Sembunyikan password' : 'Lihat password');
}
function handleAuth(e) {
  e.preventDefault();
  const fd = new FormData(e.target);
  const email = (fd.get('email') || '').trim().toLowerCase();
  const password = (fd.get('password') || '').trim();
  const name = (fd.get('name') || '').trim();
  const msg = document.querySelector('[data-form-message]');
  const accounts = getAccounts();

  if (authMode === 'register') {
    if (!name) { msg.textContent = 'Nama wajib diisi saat mendaftar.'; return; }
    if (accounts[email]) { msg.textContent = 'Email sudah terdaftar. Silakan masuk.'; return; }
    accounts[email] = { email, password, name };
    saveAccounts(accounts);
    loginAs(accounts[email]);
  } else {
    if (!accounts[email]) { msg.textContent = 'Akun belum terdaftar. Silakan daftar terlebih dahulu.'; return; }
    if (accounts[email].password !== password) { msg.textContent = 'Password tidak sesuai.'; return; }
    loginAs(accounts[email]);
  }
}

function loginAs(account) {
  currentUser = { email: account.email, name: account.name };
  progress = loadProgress(account.email);
  setSession(currentUser);
  document.querySelector('[data-auth-form]').reset();
  setAuthMode('login');
  routeTo('dashboard');
}

function logout() {
  stopStudySession();
  progress.lastLogoutDate = new Date().toISOString().slice(0, 10);
  saveProgress();
  currentUser = null;
  progress = defaultProgress();
  setSession(null);
  routeTo('auth');
}

/* ---------- DASHBOARD ---------- */

function renderDashboard() {
  document.querySelector('[data-student-name]').textContent = currentUser?.name || 'Siswa';
  document.querySelector('[data-completed-count]').textContent = progress.completedLessons.length;
  progress.quizPassed = quizPassedCount();
  document.querySelector('[data-quiz-passed]').textContent = `${progress.quizPassed}/${totalQuizzes()}`;
  document.querySelector('[data-progress-percent]').textContent = `${progressPercent()}%`;
  document.querySelector('[data-study-hours]').textContent = durationTextFromSeconds(todayStudySeconds());

  const hist = recentHistory();
  document.querySelector('[data-history-list]').innerHTML = hist.length
    ? hist.map(item => {
        const m = modules.find(x => x.id === item.moduleId);
        if (!m) return '';
        const lesson = m.lessons[item.lessonIndex];
        const pct = Math.round((moduleCompletedCount(m) / m.lessons.length) * 100);
        const learnedSeconds = item.durationSeconds ?? (lessonStudySeconds(item.moduleId, item.lessonIndex) || (item.durationMinutes || 0) * 60);
        return `<article class="history-item">
          <div class="history-head"><strong>${m.title}</strong><span>${relativeTime(item.time)}</span></div>
          <p>${lesson ? lesson.title : ''} &middot; ${durationTextFromSeconds(learnedSeconds)} belajar</p>
          <div class="history-progress">
            <div class="progress-track"><i style="--value:${pct}%"></i></div>
            <b>${pct}%</b>
          </div>
        </article>`;
      }).join('')
    : `<article class="history-item"><div class="history-head"><strong>Belum ada riwayat</strong><span>Mulai belajar</span></div><p>Riwayat akan muncul setelah kamu menyelesaikan pelajaran pertama.</p><div class="history-progress"><div class="progress-track"><i style="--value:0%"></i></div><b>0%</b></div></article>`;

  document.querySelector('[data-recommendation-list]').innerHTML = recommendedModules().map(m => `
    <article class="recommendation-card" data-open-module="${m.id}">
      <div class="emoji">${m.emoji}</div>
      <div><h3>${m.title}</h3><p>${m.description}</p></div>
      <button type="button" data-open-module="${m.id}">Mulai</button>
    </article>
  `).join('') || `<p style="color:var(--muted);font-size:.88rem">Semua materi telah selesai! \u{1F389}</p>`;
}

/* ---------- MATERI ---------- */

function renderMaterials() {
  document.querySelector('[data-material-grid]').innerHTML = modules.map(m => {
    const done = moduleCompletedCount(m);
    const pct = Math.round((done / m.lessons.length) * 100);
    const allDone = done === m.lessons.length;
    return `<article class="material-card">
      <div class="material-top">
        <span style="font-size:28px">${m.emoji}</span>
        <span class="progress-badge ${allDone ? 'done' : ''}">${done}/${m.lessons.length}</span>
      </div>
      <h3>${m.title}</h3>
      <p>${m.description}</p>
      <p class="material-meta">${m.lessons.length} pelajaran &middot; ${m.minutes} menit</p>
      <div class="mini-progress"><div class="progress-track"><i style="--value:${pct}%"></i></div></div>
      <button class="btn-open ${allDone ? 'secondary' : ''}" type="button" data-open-module="${m.id}">${allDone ? 'Baca Ulang' : pct > 0 ? 'Lanjutkan' : 'Mulai Belajar'}</button>
    </article>`;
  }).join('');
}

/* ---------- LESSON ---------- */

function openModule(id) {
  currentModuleId = id;
  const m = modules.find(x => x.id === id);
  const next = m.lessons.findIndex((_, i) => !progress.completedLessons.includes(lessonKey(id, i)));
  currentLessonIndex = next === -1 ? 0 : next;
  routeTo('lesson');
}

function renderLesson() {
  const m = modules.find(x => x.id === currentModuleId) || modules[0];
  const lesson = m.lessons[currentLessonIndex];
  const done = progress.completedLessons.includes(lessonKey(m.id, currentLessonIndex));
  const note = moduleNotes[m.id]?.[currentLessonIndex];
  const videoUrl = getVideoUrl(m.id, lesson);
  const visualTags = note?.visual || [m.title, lesson.title, 'Praktik'];

  const dots = m.lessons.map((_, i) => {
    const isDone = progress.completedLessons.includes(lessonKey(m.id, i));
    const isCur = i === currentLessonIndex;
    return `<span class="${isCur ? 'active' : isDone ? 'done' : ''}" data-lesson-jump="${i}"></span>`;
  }).join('');

  document.querySelector('[data-lesson-shell]').innerHTML = `
    <div class="lesson-header">
      <h1>${m.title}</h1>
      <p>Pelajaran ${currentLessonIndex + 1} dari ${m.lessons.length}</p>
      <div class="lesson-dots">${dots}</div>
    </div>
    <div class="lesson-media ${videoUrl ? 'has-video-visual' : ''}" style="background-image:url('${lessonImage}')">
      ${videoUrl
        ? `<div class="video-visual">
            <span class="video-orbit orbit-one"></span>
            <span class="video-orbit orbit-two"></span>
            <div class="video-illustration">
              <span class="video-emoji">${m.emoji}</span>
              <span class="video-chip chip-one">${m.lessons[0].title}</span>
              <span class="video-chip chip-two">${m.lessons[1].title}</span>
              <span class="video-chip chip-three">${m.lessons[2].title}</span>
            </div>
            <button class="video-play-card" type="button" data-play-video="${videoUrl}" data-video-title="Video pembelajaran ${m.title}" title="Tonton video pembelajaran ${m.title}">
              <span>&#9654;</span>
              <strong>Tonton Video</strong>
            </button>
          </div>`
        : `<span class="play-button disabled" title="Link video pembelajaran belum diisi">&#9654;</span>`}
    </div>
    <div class="lesson-body">
      <h2>${lesson.title}</h2>
      <p>${lesson.body}</p>
      ${note ? `<div class="lesson-extra">
        <div class="lesson-learning-visual">
          <div class="visual-screen">
            <span class="visual-main">${m.emoji}</span>
            <i></i>
          </div>
          <div class="visual-tags">
            ${visualTags.map(tag => `<span>${tag}</span>`).join('')}
          </div>
        </div>
        <h3>Pendalaman Materi</h3>
        <p>${note.explanation}</p>
        <h3>Latihan Pemahaman</h3>
        <p>${note.practice}</p>
      </div>` : ''}
      <div class="lesson-video-box">
        <strong>Video Pembelajaran</strong>
        ${videoUrl
          ? `<button type="button" data-play-video="${videoUrl}" data-video-title="Video pembelajaran ${m.title}">Putar video ${m.title}</button>`
          : `<span>Belum ada link video. Isi URL di <code>moduleVideos</code> atau <code>lesson.videoUrl</code> pada app.js.</span>`}
      </div>
      <ul class="lesson-points">${lesson.points.map(p => `<li>${p}</li>`).join('')}</ul>
    </div>
    <div class="lesson-nav">
      <button class="btn-nav-prev" type="button" data-lesson-prev ${currentLessonIndex === 0 ? 'disabled' : ''}>&larr; Sebelumnya</button>
      <button class="btn-complete ${done ? 'done' : ''}" type="button" data-complete-lesson="${lessonKey(m.id, currentLessonIndex)}">
        ${done ? '&#10003; Sudah Selesai' : '&#10003; Tandai Selesai'}
      </button>
      <button class="btn-nav-next" type="button" data-lesson-next ${currentLessonIndex === m.lessons.length - 1 ? 'disabled' : ''}>Selanjutnya &rarr;</button>
    </div>
  `;
}

function completeLesson(key) {
  const [mid, idxStr] = key.split(':');
  const idx = Number(idxStr);
  const m = modules.find(x => x.id === mid);
  if (activeStudySession && activeStudySession.moduleId === mid && activeStudySession.lessonIndex === idx) {
    restartStudySession();
  }
  const learnedSeconds = lessonStudySeconds(mid, idx);
  const dur = Math.round(learnedSeconds / 60);

  if (!progress.completedLessons.includes(key)) progress.completedLessons.push(key);

  progress.history = progress.history.filter(h => !(h.moduleId === mid && h.lessonIndex === idx));
  progress.history.unshift({ moduleId: mid, lessonIndex: idx, time: Date.now(), durationMinutes: dur, durationSeconds: learnedSeconds });
  saveProgress();
  renderLesson();
}

function playLessonVideo(url, title) {
  const media = document.querySelector('.lesson-media');
  if (!media) return;
  const embedUrl = getYoutubeEmbedUrl(url);
  media.classList.remove('has-video-visual');
  media.classList.add('is-playing-video');
  media.removeAttribute('style');
  media.innerHTML = `<iframe src="${embedUrl}" title="${title || 'Video pembelajaran'}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
}

/* ---------- QUIZ ---------- */

function getQuizForModule(mid) {
  const base = quizData[mid] || defaultQuiz;
  const supplemental = supplementalQuizQuestions[mid] || [];
  const questions = [...base.questions, ...supplemental, ...defaultQuiz.questions].slice(0, 10);
  return { ...base, questions };
}

function renderQuizStart() {
  const shell = document.querySelector('[data-quiz-shell]');
  const quizHistory = recentQuizHistory(8);
  shell.innerHTML = `
    <div class="quiz-start-screen">
      <header class="page-header">
        <div>
          <h1>Kuis Materi</h1>
          <p>Pilih materi yang ingin kamu uji pemahaman kamu</p>
        </div>
      </header>
      <div class="quiz-list">
        ${modules.map(m => {
          const score = progress.quizScores[m.id];
          const hasScore = score !== undefined;
          const passed = hasScore && score >= 70;
          const total = getQuizForModule(m.id).questions.length;
          return `<article class="quiz-module-card" data-start-quiz="${m.id}">
            <div class="emoji">${m.emoji}</div>
            <h3>${m.title}</h3>
            <p>${total} soal</p>
            ${hasScore ? `<span class="score-badge ${passed ? 'passed' : ''}">Nilai: ${score}${passed ? ' &#10003;' : ''}</span>` : '<span class="score-badge">Belum dikerjakan</span>'}
          </article>`;
        }).join('')}
      </div>
      <article class="panel quiz-history-panel">
        <div class="panel-head compact">
          <span class="badge-icon" style="background:rgba(96,165,250,.15);color:#60a5fa">&#128197;</span>
          <div>
            <h2>Riwayat Kuis</h2>
            <p>Catatan pengerjaan berdasarkan tanggal lengkap</p>
          </div>
        </div>
        <div class="quiz-history-list">
          ${quizHistory.length ? quizHistory.map(item => {
            const m = modules.find(x => x.id === item.moduleId);
            const wrong = Math.max(0, item.total - item.correct);
            return `<article class="quiz-history-item">
              <div class="quiz-history-info">
                <strong>${m ? m.title : item.title || 'Kuis'}</strong>
                <span>${formatFullDateTime(item.time)}</span>
              </div>
              <div class="quiz-history-stats">
                <span class="score ${item.passed ? 'passed' : ''}"><b>${item.score}</b><small>Nilai</small></span>
                <span class="correct"><b>${item.correct}</b><small>Benar</small></span>
                <span class="wrong"><b>${wrong}</b><small>Salah</small></span>
              </div>
            </article>`;
          }).join('') : `<article class="quiz-history-empty">Belum ada riwayat kuis. Selesaikan kuis pertama untuk melihat catatannya.</article>`}
        </div>
      </article>
    </div>
  `;
}

function startQuiz(mid) {
  quizModuleId = mid;
  quizIndex = 0;
  quizAnswers = [];
  quizReadyForScore = false;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const qData = getQuizForModule(quizModuleId);
  const q = qData.questions[quizIndex];
  const shell = document.querySelector('[data-quiz-shell]');

  if (quizReadyForScore) {
    renderQuizPending();
    return;
  }

  const dots = qData.questions.map((_, i) => {
    let cls = '';
    if (i === quizIndex) cls = 'active';
    else if (quizAnswers[i]) cls = 'answered';
    return `<span class="${cls}"></span>`;
  }).join('');

  const isLast = quizIndex === qData.questions.length - 1;

  shell.innerHTML = `
    <button class="btn-back" type="button" data-route="quiz">&larr; Kembali</button>
    <div class="quiz-card">
      <div class="quiz-card-head">
        <div>
          <h2>${qData.title}</h2>
          <p>Pertanyaan ${quizIndex + 1} dari ${qData.questions.length}</p>
        </div>
        <div class="quiz-dots">${dots}</div>
      </div>
      <div class="quiz-body">
        <h3>${q.q}</h3>
        <div class="quiz-options">
          ${q.options.map((opt, i) => `
            <label class="quiz-option ${quizAnswers[quizIndex] === opt ? 'selected' : ''}">
              <input type="radio" name="quiz-answer" value="${opt}" ${quizAnswers[quizIndex] === opt ? 'checked' : ''} />
              <span>${opt}</span>
            </label>
          `).join('')}
        </div>
      </div>
      <div class="quiz-actions">
        <button class="btn-quiz-prev" type="button" data-quiz-prev ${quizIndex === 0 ? 'disabled' : ''}>&larr; Sebelumnya</button>
        ${isLast
          ? `<button class="btn-quiz-finish" type="button" data-quiz-finish>Selesai &#10003;</button>`
          : `<button class="btn-quiz-next" type="button" data-quiz-next>Next &rarr;</button>`}
      </div>
    </div>
  `;

  document.querySelectorAll('.quiz-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const radio = opt.querySelector('input[type="radio"]');
      if (radio) { radio.checked = true; quizAnswers[quizIndex] = radio.value; }
      document.querySelectorAll('.quiz-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
    });
  });
}

function renderQuizPending() {
  document.querySelector('[data-quiz-shell]').innerHTML = `
    <div class="quiz-card" style="max-width:760px;margin:0 auto">
      <div class="quiz-pending">
        <p style="font-size:2.5rem;margin-bottom:12px">\u{1F389}</p>
        <h2>Siap melihat nilai?</h2>
        <p>Semua pertanyaan sudah dijawab. Klik tombol di bawah untuk melihat hasil kuis kamu.</p>
        <button class="btn-show-score" type="button" data-show-score>Lihat Nilai</button>
      </div>
    </div>
  `;
}

function showScore() {
  const qData = getQuizForModule(quizModuleId);
  const review = qData.questions.map((q, i) => {
    const selected = quizAnswers[i] || '';
    return {
      number: i + 1,
      question: q.q,
      selected,
      answer: q.answer,
      isCorrect: selected === q.answer
    };
  });
  const correct = review.filter(item => item.isCorrect).length;
  const score = Math.round((correct / qData.questions.length) * 100);
  const passed = score >= 70;
  const attempt = {
    id: `${quizModuleId}-${Date.now()}`,
    moduleId: quizModuleId,
    title: qData.title,
    time: Date.now(),
    score,
    correct,
    total: qData.questions.length,
    passed,
    review
  };

  progress.quizScores[quizModuleId] = Math.max(progress.quizScores[quizModuleId] || 0, score);
  progress.quizPassed = quizPassedCount();
  progress.quizHistory = [attempt, ...(progress.quizHistory || [])].slice(0, 30);
  saveProgress();
  renderQuizResult(attempt);
}

function renderQuizResult(attempt) {
  document.querySelector('[data-quiz-shell]').innerHTML = `
    <div class="quiz-result-screen">
      <div class="quiz-card">
        <div class="quiz-result-card">
          <h2>${attempt.passed ? 'Kuis selesai!' : 'Nilai sudah tersimpan'}</h2>
          <div class="score-circle ${attempt.passed ? 'pass' : ''}">${attempt.score}</div>
          <p>${attempt.correct} dari ${attempt.total} jawaban benar &middot; ${formatFullDateTime(attempt.time)}</p>
          <div class="result-actions">
            <button class="btn-retry" type="button" data-retry-quiz>Ulangi Kuis</button>
          </div>
        </div>
        <div class="quiz-review-list">
          ${attempt.review.map(item => `
            <article class="quiz-review-item ${item.isCorrect ? 'correct' : 'wrong'}">
              <div class="quiz-review-head">
                <strong>Soal ${item.number}</strong>
                <span>${item.isCorrect ? 'Benar' : 'Salah'}</span>
              </div>
              <p>${item.question}</p>
              <div class="answer-row ${item.isCorrect ? 'correct' : 'wrong'}"><b>Jawaban kamu</b><span>${item.selected || 'Tidak dijawab'}</span></div>
              ${item.isCorrect ? '' : `<div class="answer-row correct"><b>Jawaban benar</b><span>${item.answer}</span></div>`}
            </article>
          `).join('')}
        </div>
        <div class="quiz-review-footer">
          <button class="btn-progress" type="button" data-route="quiz">Kembali ke Menu Kuis</button>
        </div>
      </div>
    </div>
  `;
}

/* ---------- PROGRESS ---------- */

function renderProgress() {
  const pct = progressPercent();
  progress.quizPassed = quizPassedCount();
  document.querySelector('[data-progress-percent-alt]').textContent = `${pct}%`;
  document.querySelector('[data-completed-count-alt]').textContent = progress.completedLessons.length;
  document.querySelector('[data-quiz-ratio]').textContent = `${progress.quizPassed}/${totalQuizzes()}`;
  document.querySelector('[data-total-hours]').textContent = durationTextFromSeconds(todayStudySeconds());

  const weekly = currentWeekActivity();
  const maxSeconds = Math.max(...weekly.map(d => d.seconds), 1);
  const totalWeek = weekly.reduce((t, d) => t + d.seconds, 0);
  document.querySelector('[data-week-total]').textContent = `Total: ${durationTextFromSeconds(totalWeek)}`;

  document.querySelector('[data-week-chart]').innerHTML = weekly.map(day => {
    const h = day.seconds ? Math.max(12, Math.round((day.seconds / maxSeconds) * 132)) : 8;
    return `<div class="day-bar ${day.seconds ? '' : 'empty'}">
      <i style="height:${h}px"></i>
      <span>${day.label}</span>
      <small>${day.seconds ? durationTextFromSeconds(day.seconds) : '0h'}</small>
    </div>`;
  }).join('');

  document.querySelector('[data-module-progress]').innerHTML = modules.slice(0, 8).map(m => {
    const p2 = Math.round((moduleCompletedCount(m) / m.lessons.length) * 100);
    return `<div class="module-line"><span>${m.title}</span><div class="progress-track"><i style="--value:${p2}%"></i></div><b>${p2}%</b></div>`;
  }).join('');

  document.querySelector('[data-streak-days]').textContent = streakCount();

  const activityLogs = [...(progress.studyLog || [])];
  if (activeStudySession) activityLogs.push({ time: Date.now() });
  const activeDates = new Set(activityLogs.map(h => {
    const d = new Date(h.time); d.setHours(0,0,0,0); return d.getTime();
  }));
  const today = new Date(); today.setHours(0,0,0,0);
  document.querySelector('[data-streak-grid]').innerHTML = Array.from({ length: 28 }, (_, i) => {
    const d = new Date(today); d.setDate(today.getDate() - (27 - i));
    return `<i class="streak-cell ${activeDates.has(d.getTime()) ? 'active' : ''}"></i>`;
  }).join('');
}

/* ---------- ACHIEVEMENTS ---------- */

function renderAchievements() {
  const profileName = currentUser?.name || 'Siswa';
  const profileEmail = currentUser?.email || '-';
  document.querySelectorAll('[data-profile-name], [data-profile-name-hero]').forEach(el => { el.textContent = profileName; });
  document.querySelectorAll('[data-profile-email], [data-profile-email-hero]').forEach(el => { el.textContent = profileEmail; });
  const streak = streakCount();
  const unlocked = [
    progress.completedLessons.length >= 1,
    streak >= 7,
    moduleCompletedCount(modules[0]) === modules[0].lessons.length,
    Object.values(progress.quizScores).some(s => s >= 80),
    progress.completedLessons.length >= 10,
    Object.values(progress.quizScores).filter(s => s === 100).length >= 1,
    progress.completedLessons.length >= 24,
    progress.completedLessons.length === totalLessons() && Object.values(progress.quizScores).some(s => s === 100)
  ];

  const badges = [
    { icon: '\u{1F31F}', name: 'Pemula Aktif', desc: 'Selesaikan materi pertama', bg: 'linear-gradient(135deg,#60a5fa,#1d4ed8)' },
    { icon: '\u{1F525}', name: 'Konsisten 7 Hari', desc: 'Belajar 7 hari berturut-turut', bg: 'linear-gradient(135deg,#ff8a00,#ff5500)' },
    { icon: '\u{1F3C6}', name: 'Ahli Dasar Komputer', desc: 'Selesaikan semua materi Dasar Komputer', bg: 'linear-gradient(135deg,#facc15,#eab308)' },
    { icon: '\u{1F3AF}', name: 'Kuis Master', desc: 'Lulus kuis dengan nilai >= 80', bg: 'linear-gradient(135deg,#00e684,#05a957)' },
    { icon: '\u26A1', name: 'Speed Learner', desc: 'Selesaikan 10 pelajaran', bg: 'linear-gradient(135deg,#a855f7,#7c3aed)' },
    { icon: '\u{1F4AF}', name: 'Perfeksionis', desc: 'Raih nilai 100 di 1 kuis', bg: 'linear-gradient(135deg,#ec4899,#be185d)' },
    { icon: '\u{1F4DA}', name: 'Bibliophile', desc: 'Selesaikan 24 pelajaran', bg: 'linear-gradient(135deg,#06b6d4,#0891b2)' },
    { icon: '\u{1F451}', name: 'Juara Sejati', desc: 'Selesaikan semua materi + nilai 100', bg: 'linear-gradient(135deg,#f97316,#c2410c)' }
  ];

  const count = unlocked.filter(Boolean).length;
  const pct = Math.round((count / badges.length) * 100);
  document.querySelector('[data-achievement-count]').textContent = `${count}/${badges.length}`;
  document.querySelector('[data-total-points]').textContent = totalPoints();
  document.querySelector('[data-achievement-progress]').textContent = `${pct}%`;
  document.querySelector('[data-rank]').textContent = pct >= 75 ? '\u{1F947} Gold Member' : pct >= 40 ? '\u{1F948} Silver Member' : '\u{1F949} Bronze Member';

  document.querySelector('[data-achievement-grid]').innerHTML = badges.map((b, i) => `
    <article class="achievement ${unlocked[i] ? '' : 'locked'}">
      <div class="achievement-icon" style="background:${b.bg}">${b.icon}</div>
      <h3>${b.name}</h3>
      <p>${b.desc}</p>
      ${unlocked[i]
        ? `<time style="background:${b.bg}">&#10003; Terbuka</time>`
        : `<span class="locked-pill">\u{1F512} Terkunci</span>`}
    </article>
  `).join('');
}

/* ---------- EVENT DELEGATION ---------- */

document.addEventListener('click', e => {
  const route = e.target.closest('[data-route]');
  const openModule_ = e.target.closest('[data-open-module]');
  const logout_ = e.target.closest('[data-logout]');
  const authMode_ = e.target.closest('[data-auth-mode]');
  const menuToggle = e.target.closest('[data-menu-toggle]');
  const overlay = e.target.closest('[data-sidebar-overlay]');
  const completBtn = e.target.closest('[data-complete-lesson]');
  const prevLesson = e.target.closest('[data-lesson-prev]');
  const nextLesson = e.target.closest('[data-lesson-next]');
  const lessonJump = e.target.closest('[data-lesson-jump]');
  const startQuiz_ = e.target.closest('[data-start-quiz]');
  const quizPrev = e.target.closest('[data-quiz-prev]');
  const quizNext = e.target.closest('[data-quiz-next]');
  const quizFinish = e.target.closest('[data-quiz-finish]');
  const showScore_ = e.target.closest('[data-show-score]');
  const retryQuiz = e.target.closest('[data-retry-quiz]');
  const playVideo = e.target.closest('[data-play-video]');
  const passwordToggle = e.target.closest('[data-password-toggle]');
  const modalClose = e.target.closest('[data-modal-close]');
  const modalAction = e.target.closest('[data-modal-action]');
  const themeToggle = e.target.closest('[data-theme-toggle]');

  if (themeToggle) toggleTheme();
  if (route) { e.preventDefault(); routeTo(route.dataset.route); }
  if (openModule_) openModule(openModule_.dataset.openModule);
  if (logout_) confirmLogout();
  if (authMode_) setAuthMode(authMode_.dataset.authMode);
  if (menuToggle) {
    document.querySelector('[data-sidebar]').classList.toggle('open');
    document.querySelector('[data-sidebar-overlay]').classList.toggle('visible');
  }
  if (overlay) {
    document.querySelector('[data-sidebar]').classList.remove('open');
    document.querySelector('[data-sidebar-overlay]').classList.remove('visible');
  }
  if (completBtn && !completBtn.disabled) completeLesson(completBtn.dataset.completeLesson);
  if (prevLesson && !prevLesson.disabled) { stopStudySession(); currentLessonIndex--; renderLesson(); startStudySession(); }
  if (nextLesson && !nextLesson.disabled) { stopStudySession(); currentLessonIndex++; renderLesson(); startStudySession(); }
  if (lessonJump) { stopStudySession(); currentLessonIndex = Number(lessonJump.dataset.lessonJump); renderLesson(); startStudySession(); }
  if (startQuiz_) startQuiz(startQuiz_.dataset.startQuiz);
  if (quizPrev && !quizPrev.disabled) { quizIndex--; renderQuizQuestion(); }
  if (quizNext) {
    const checked = document.querySelector('input[name="quiz-answer"]:checked');
    if (checked) quizAnswers[quizIndex] = checked.value;
    quizIndex++;
    renderQuizQuestion();
  }
  if (quizFinish) {
    const checked = document.querySelector('input[name="quiz-answer"]:checked');
    if (checked) quizAnswers[quizIndex] = checked.value;
    quizReadyForScore = true;
    renderQuizPending();
  }
  if (showScore_) showScore();
  if (retryQuiz) startQuiz(quizModuleId);
  if (playVideo) playLessonVideo(playVideo.dataset.playVideo, playVideo.dataset.videoTitle);
  if (passwordToggle) togglePasswordVisibility(passwordToggle);
  if (modalClose) closeModal();
  if (modalAction) {
    const action = modalAction.dataset.modalAction;
    if (action === 'close') closeModal();
    if (action === 'logout') { closeModal(); logout(); }
    if (action === 'progress') { closeModal(); routeTo('progress'); }
  }
});

document.querySelector('[data-auth-form]').addEventListener('submit', handleAuth);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) {
    stopStudySession();
  } else if (currentUser && currentViewName === 'lesson' && !activeStudySession) {
    startStudySession();
  }
});
window.addEventListener('pagehide', stopStudySession);
window.addEventListener('beforeunload', stopStudySession);

/* ---------- INIT ---------- */
setAuthMode('login');
if (currentUser) {
  document.body.classList.remove('is-auth');
  document.querySelector('[data-app-shell]').style.display = 'flex';
  document.querySelector('[data-view="auth"]').classList.remove('active');
  routeTo('dashboard');
} else {
  document.querySelector('[data-view="auth"]').classList.add('active');
}













