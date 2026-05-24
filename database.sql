CREATE DATABASE IF NOT EXISTS techbasic
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

USE techbasic;

SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS user_sessions;
DROP TABLE IF EXISTS user_quiz_scores;
DROP TABLE IF EXISTS user_study_logs;
DROP TABLE IF EXISTS user_lesson_history;
DROP TABLE IF EXISTS user_completed_lessons;
DROP TABLE IF EXISTS quiz_options;
DROP TABLE IF EXISTS quiz_questions;
DROP TABLE IF EXISTS quizzes;
DROP TABLE IF EXISTS lessons;
DROP TABLE IF EXISTS modules;
DROP TABLE IF EXISTS users;
SET FOREIGN_KEY_CHECKS = 1;

CREATE TABLE users (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  role ENUM('siswa','admin') NOT NULL DEFAULT 'siswa',
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  last_login_at DATETIME NULL,
  last_logout_at DATETIME NULL,
  PRIMARY KEY (id),
  UNIQUE KEY users_email_unique (email)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE modules (
  id VARCHAR(50) NOT NULL,
  title VARCHAR(100) NOT NULL,
  icon_entity VARCHAR(30) NOT NULL,
  description TEXT NOT NULL,
  minutes SMALLINT UNSIGNED NOT NULL DEFAULT 0,
  sort_order TINYINT UNSIGNED NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY modules_sort_order_unique (sort_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE lessons (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  module_id VARCHAR(50) NOT NULL,
  lesson_index TINYINT UNSIGNED NOT NULL,
  title VARCHAR(150) NOT NULL,
  body TEXT NOT NULL,
  points_json JSON NULL,
  video_url VARCHAR(255) NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY lessons_module_index_unique (module_id, lesson_index),
  CONSTRAINT lessons_module_fk
    FOREIGN KEY (module_id) REFERENCES modules(id)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE quizzes (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  module_id VARCHAR(50) NOT NULL,
  title VARCHAR(150) NOT NULL,
  passing_score TINYINT UNSIGNED NOT NULL DEFAULT 70,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY quizzes_module_unique (module_id),
  CONSTRAINT quizzes_module_fk
    FOREIGN KEY (module_id) REFERENCES modules(id)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE quiz_questions (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  quiz_id INT UNSIGNED NOT NULL,
  question_index TINYINT UNSIGNED NOT NULL,
  question TEXT NOT NULL,
  answer_text VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY quiz_questions_quiz_index_unique (quiz_id, question_index),
  CONSTRAINT quiz_questions_quiz_fk
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE quiz_options (
  id INT UNSIGNED NOT NULL AUTO_INCREMENT,
  question_id INT UNSIGNED NOT NULL,
  option_index TINYINT UNSIGNED NOT NULL,
  option_text VARCHAR(255) NOT NULL,
  is_correct TINYINT(1) NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  UNIQUE KEY quiz_options_question_index_unique (question_id, option_index),
  CONSTRAINT quiz_options_question_fk
    FOREIGN KEY (question_id) REFERENCES quiz_questions(id)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE user_completed_lessons (
  user_id INT UNSIGNED NOT NULL,
  module_id VARCHAR(50) NOT NULL,
  lesson_index TINYINT UNSIGNED NOT NULL,
  completed_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, module_id, lesson_index),
  CONSTRAINT completed_lessons_user_fk
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE,
  CONSTRAINT completed_lessons_lesson_fk
    FOREIGN KEY (module_id, lesson_index) REFERENCES lessons(module_id, lesson_index)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE user_lesson_history (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  module_id VARCHAR(50) NOT NULL,
  lesson_index TINYINT UNSIGNED NOT NULL,
  duration_seconds INT UNSIGNED NOT NULL DEFAULT 0,
  studied_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  KEY history_user_time_idx (user_id, studied_at),
  CONSTRAINT history_user_fk
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE,
  CONSTRAINT history_lesson_fk
    FOREIGN KEY (module_id, lesson_index) REFERENCES lessons(module_id, lesson_index)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE user_study_logs (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  module_id VARCHAR(50) NOT NULL,
  lesson_index TINYINT UNSIGNED NOT NULL,
  started_at DATETIME NULL,
  ended_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  seconds INT UNSIGNED NOT NULL DEFAULT 0,
  PRIMARY KEY (id),
  KEY study_logs_user_time_idx (user_id, ended_at),
  CONSTRAINT study_logs_user_fk
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE,
  CONSTRAINT study_logs_lesson_fk
    FOREIGN KEY (module_id, lesson_index) REFERENCES lessons(module_id, lesson_index)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE user_quiz_scores (
  user_id INT UNSIGNED NOT NULL,
  module_id VARCHAR(50) NOT NULL,
  score TINYINT UNSIGNED NOT NULL,
  answers_json JSON NULL,
  passed TINYINT(1) GENERATED ALWAYS AS (score >= 70) STORED,
  taken_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (user_id, module_id),
  CONSTRAINT quiz_scores_user_fk
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE,
  CONSTRAINT quiz_scores_module_fk
    FOREIGN KEY (module_id) REFERENCES modules(id)
    ON DELETE CASCADE,
  CONSTRAINT quiz_scores_score_check CHECK (score <= 100)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

CREATE TABLE user_sessions (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  session_token VARCHAR(128) NOT NULL,
  ip_address VARCHAR(45) NULL,
  user_agent VARCHAR(255) NULL,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  expires_at DATETIME NOT NULL,
  revoked_at DATETIME NULL,
  PRIMARY KEY (id),
  UNIQUE KEY user_sessions_token_unique (session_token),
  KEY user_sessions_user_idx (user_id),
  CONSTRAINT user_sessions_user_fk
    FOREIGN KEY (user_id) REFERENCES users(id)
    ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO modules (id, title, icon_entity, description, minutes, sort_order) VALUES
('dasar-komputer', 'Dasar Komputer', '&#128187;', 'Pelajari komponen dasar komputer dan cara kerjanya', 90, 1),
('hardware', 'Hardware', '&#128421;', 'Memahami perangkat keras komputer secara mendalam', 105, 2),
('software', 'Software', '&#129504;', 'Aplikasi, driver, sistem operasi, dan perangkat lunak', 80, 3),
('sistem-operasi', 'Sistem Operasi', '&#129695;', 'Windows, Linux, macOS, dan cara menggunakannya', 100, 4),
('internet', 'Internet', '&#127760;', 'Cara kerja internet, browser, email, dan pencarian', 95, 5),
('jaringan', 'Jaringan', '&#128225;', 'LAN, WAN, IP address, router, dan koneksi jaringan', 85, 6),
('keamanan-digital', 'Keamanan Digital', '&#128272;', 'Password, privasi, phishing, malware, dan perlindungan data', 110, 7),
('manajemen-file', 'Manajemen File', '&#128193;', 'Folder, ekstensi file, backup, dan pengelolaan arsip', 75, 8),
('office', 'Aplikasi Office', '&#9000;', 'Dokumen Word, spreadsheet Excel, dan presentasi PowerPoint', 120, 9),
('pemrograman', 'Dasar Pemrograman', '&#128161;', 'Logika coding, variabel, kondisi, dan latihan sederhana', 130, 10),
('cloud', 'Cloud Storage', '&#9729;', 'Google Drive, OneDrive, sinkronisasi, dan kolaborasi', 70, 11),
('etika-digital', 'Etika Digital', '&#129309;', 'Sopan santun online, jejak digital, dan hak cipta', 65, 12);

INSERT INTO lessons (module_id, lesson_index, title, body, points_json) VALUES
('dasar-komputer', 0, 'Pengenalan Komputer', 'Komputer adalah perangkat elektronik yang dapat menerima, memproses, menyimpan, dan mengeluarkan data.', JSON_ARRAY('Hardware dan software bekerja bersama.', 'Input diproses CPU lalu keluar sebagai informasi.')),
('dasar-komputer', 1, 'Alur Kerja Komputer', 'Setiap pekerjaan komputer mengikuti pola Input, Process, Output, dan Storage.', JSON_ARRAY('Input berasal dari keyboard, mouse, kamera, mikrofon, atau scanner.', 'Process dilakukan CPU dengan bantuan RAM.')),
('dasar-komputer', 2, 'Perawatan Dasar', 'Komputer yang dirawat akan lebih awet dan stabil.', JSON_ARRAY('Bersihkan debu secara rutin.', 'Matikan komputer dengan shutdown.')),
('hardware', 0, 'CPU dan Motherboard', 'CPU adalah otak komputer, sedangkan motherboard menghubungkan semua komponen.', JSON_ARRAY('CPU memproses instruksi aplikasi.', 'Motherboard memiliki slot RAM, storage, dan port USB.')),
('hardware', 1, 'RAM dan Penyimpanan', 'RAM adalah memori sementara, sedangkan SSD atau HDD menyimpan data permanen.', JSON_ARRAY('RAM besar membantu multitasking.', 'SSD lebih cepat daripada HDD.')),
('hardware', 2, 'Perangkat Input Output', 'Input-output adalah jembatan antara pengguna dan komputer.', JSON_ARRAY('Keyboard dan mouse adalah perangkat input.', 'Monitor dan speaker adalah perangkat output.')),
('software', 0, 'Jenis Software', 'Software adalah instruksi tertulis yang membuat komputer bekerja.', JSON_ARRAY('System software mengelola sumber daya komputer.', 'Application software membantu pekerjaan tertentu.')),
('software', 1, 'Instalasi Aman', 'Instal aplikasi hanya dari sumber tepercaya agar komputer aman.', JSON_ARRAY('Unduh dari situs resmi.', 'Baca izin aplikasi sebelum instal.')),
('software', 2, 'Update dan Lisensi', 'Update memperbaiki keamanan dan bug, lisensi memastikan penggunaan legal.', JSON_ARRAY('Aktifkan update otomatis jika memungkinkan.', 'Gunakan software legal atau open-source.')),
('sistem-operasi', 0, 'Fungsi Sistem Operasi', 'Sistem operasi mengatur file, memori, perangkat keras, akun pengguna, dan aplikasi.', JSON_ARRAY('Mengatur sumber daya perangkat keras.', 'Menjalankan aplikasi dan proses.')),
('sistem-operasi', 1, 'Pengaturan Dasar', 'Pengaturan dasar memudahkan pengelolaan komputer sehari-hari.', JSON_ARRAY('Atur password login yang kuat.', 'Kelola Wi-Fi dan jaringan.')),
('sistem-operasi', 2, 'Troubleshooting Ringan', 'Masalah umum komputer sering dapat diselesaikan dengan langkah sederhana.', JSON_ARRAY('Restart perangkat.', 'Cek kabel dan koneksi fisik.')),
('internet', 0, 'Dasar Internet', 'Internet adalah jaringan global yang menghubungkan perangkat di seluruh dunia.', JSON_ARRAY('Browser membuka halaman web dari server.', 'URL adalah alamat unik halaman web.')),
('internet', 1, 'Wi-Fi dan Jaringan', 'Jaringan lokal menghubungkan perangkat di area tertentu.', JSON_ARRAY('Router membagi koneksi internet.', 'Sinyal lemah memperlambat koneksi.')),
('internet', 2, 'Email dan Pencarian', 'Email dan mesin pencari penting untuk komunikasi dan pembelajaran.', JSON_ARRAY('Gunakan subjek email yang jelas.', 'Gunakan kata kunci pencarian yang spesifik.')),
('jaringan', 0, 'Konsep Jaringan', 'Jaringan komputer memungkinkan perangkat saling bertukar data.', JSON_ARRAY('LAN digunakan di area kecil.', 'WAN menghubungkan area lebih luas.')),
('jaringan', 1, 'IP Address & DNS', 'IP address adalah identitas perangkat, DNS menerjemahkan domain menjadi IP.', JSON_ARRAY('IPv4 berbentuk empat angka.', 'Gateway adalah pintu keluar jaringan lokal.')),
('jaringan', 2, 'Masalah Koneksi', 'Koneksi internet bisa terganggu oleh banyak faktor.', JSON_ARRAY('Cek ikon jaringan.', 'Restart router.')),
('keamanan-digital', 0, 'Password Kuat', 'Password adalah garis pertahanan pertama akun.', JSON_ARRAY('Gunakan minimal 12 karakter.', 'Jangan gunakan password yang sama.')),
('keamanan-digital', 1, 'Mengenali Phishing', 'Phishing meniru layanan resmi untuk mencuri data.', JSON_ARRAY('Periksa URL sebelum login.', 'Jangan bagikan OTP.')),
('keamanan-digital', 2, 'Privasi Data', 'Data pribadi perlu dilindungi agar tidak disalahgunakan.', JSON_ARRAY('Batasi informasi pribadi di media sosial.', 'Atur privasi aplikasi.')),
('manajemen-file', 0, 'Struktur Folder Rapi', 'Folder yang rapi membuat file mudah ditemukan.', JSON_ARRAY('Kelompokkan file berdasarkan kategori.', 'Gunakan nama file deskriptif.')),
('manajemen-file', 1, 'Ekstensi File', 'Ekstensi menunjukkan jenis file dan aplikasi pembukanya.', JSON_ARRAY('.docx untuk dokumen Word.', '.xlsx untuk spreadsheet Excel.')),
('manajemen-file', 2, 'Backup Data', 'Backup adalah salinan cadangan agar data tidak hilang total.', JSON_ARRAY('Simpan salinan di cloud.', 'Gunakan backup offline.')),
('office', 0, 'Pengolah Kata', 'Aplikasi pengolah kata digunakan untuk membuat dokumen teks.', JSON_ARRAY('Gunakan heading untuk struktur.', 'Simpan sebagai PDF sebelum dibagikan.')),
('office', 1, 'Spreadsheet', 'Spreadsheet membantu mengolah data numerik dan grafik.', JSON_ARRAY('SUM menjumlahkan data.', 'AVERAGE menghitung rata-rata.')),
('office', 2, 'Presentasi', 'Presentasi yang baik memadukan visual menarik dan konten ringkas.', JSON_ARRAY('Satu slide satu pesan.', 'Gunakan gambar dan grafik.')),
('pemrograman', 0, 'Apa Itu Coding', 'Coding adalah memberi instruksi kepada komputer.', JSON_ARRAY('Instruksi harus jelas dan berurutan.', 'Program membaca input dan menghasilkan output.')),
('pemrograman', 1, 'Variabel dan Logika', 'Variabel menyimpan nilai, logika menentukan alur program.', JSON_ARRAY('If-else membuat keputusan.', 'Loop mengulang instruksi.')),
('pemrograman', 2, 'Mulai Latihan Coding', 'Belajar coding paling baik dengan menulis program kecil.', JSON_ARRAY('Buat kalkulator sederhana.', 'Coba program loop sederhana.')),
('cloud', 0, 'Konsep Cloud Storage', 'Cloud storage menyimpan file di server online.', JSON_ARRAY('Butuh akun dan internet.', 'File disinkronkan antar perangkat.')),
('cloud', 1, 'Berbagi File', 'Berbagi file melalui cloud lebih efisien.', JSON_ARRAY('Bagikan file via link.', 'Atur izin akses dengan benar.')),
('cloud', 2, 'Kolaborasi Online', 'Cloud memungkinkan beberapa orang bekerja pada dokumen yang sama.', JSON_ARRAY('Gunakan komentar.', 'Pantau riwayat perubahan.')),
('etika-digital', 0, 'Jejak Digital', 'Aktivitas online meninggalkan jejak digital.', JSON_ARRAY('Pikirkan sebelum mengunggah.', 'Gunakan bahasa sopan.')),
('etika-digital', 1, 'Hak Cipta Digital', 'Konten digital dilindungi hak cipta.', JSON_ARRAY('Cantumkan sumber.', 'Gunakan aset berlisensi bebas.')),
('etika-digital', 2, 'Komunikasi Online yang Baik', 'Komunikasi digital yang baik mencegah kesalahpahaman.', JSON_ARRAY('Gunakan subjek email jelas.', 'Hindari huruf kapital semua.'));

INSERT INTO quizzes (module_id, title, passing_score)
SELECT id, CONCAT('Kuis ', title), 70 FROM modules ORDER BY sort_order;
