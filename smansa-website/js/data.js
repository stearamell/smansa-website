/* ============================================================
   data.js — Semua Data Konten Website
   Edit file ini untuk memperbarui konten tanpa menyentuh HTML
   ============================================================ */

const DATA = {

  sekolah: {
    nama:        'SMA Negeri 1 Bandar Lampung',
    singkatan:   'SMAN 1 BDL',
    domain:      'smansa-bdl.sch.id',
    npsn:        '10807002',
    nss:         '301126001002',
    alamat:      'Jl. Jend. Sudirman No. 41, Enggal, Bandar Lampung 35118',
    telp:        '(0721) 262-185',
    wa:          '+62 821-7890-0001',
    email:       'info@smansa-bdl.sch.id',
    emailPpdb:   'ppdb@smansa-bdl.sch.id',
    jamBuka:     'Senin – Sabtu: 07.00 – 15.30 WIB',
    tahunBerdiri: 1952,
    akreditasi:  'A (Unggul)',
    kurikulum:   'Merdeka Belajar',
    motto:       '"Cerdas, Berkarakter, Berprestasi"',
    statsJumlahSiswa: '1.450+',
    statsJumlahGuru:  '96',
    statsEkskul:      '28',
  },

  kepsek: {
    nama:    'Drs. H. Lukman Hakim, M.M.',
    jabatan: 'Kepala SMA Negeri 1 Bandar Lampung',
    sambutan: `Assalamu'alaikum Wr. Wb. Selamat datang di website resmi SMA Negeri 1 Bandar Lampung. Dengan penuh rasa syukur, kami terus berkomitmen untuk memberikan pelayanan pendidikan terbaik bagi seluruh peserta didik kami. Kami percaya bahwa setiap siswa memiliki potensi luar biasa yang menunggu untuk dikembangkan. Mari bersama-sama kita wujudkan generasi yang cerdas, berkarakter, dan siap menghadapi tantangan global.`,
  },

  slides: [
    {
      eyebrow: 'Akreditasi Unggul · Berdiri 1952 · Bandar Lampung',
      judul: 'Selamat Datang di', judulEm: 'SMA Negeri 1 Bandar Lampung',
      desc: 'Sekolah menengah atas negeri kebanggaan Kota Bandar Lampung yang telah mencetak generasi unggul, berkarakter, dan berdaya saing selama lebih dari tujuh dekade.',
      btn1: { teks: 'Lihat Profil Sekolah →', href: '#profil' },
      btn2: { teks: 'Hubungi Kami', href: '#kontak' },
    },
    {
      eyebrow: 'Prestasi Terbaru 2024',
      judul: 'Raih Prestasi', judulEm: 'Gemilang di Tingkat Nasional',
      desc: 'Siswa-siswi SMAN 1 Bandar Lampung kembali mengharumkan nama sekolah dan kota dengan berbagai capaian membanggakan di kompetisi akademik dan non-akademik.',
      btn1: { teks: 'Lihat Prestasi →', href: '#kesiswaan' },
      btn2: { teks: 'Baca Berita', href: '#berita' },
    },
    {
      eyebrow: 'PPDB 2025/2026',
      judul: 'Penerimaan Peserta Didik Baru', judulEm: 'Tahun Ajaran 2025/2026',
      desc: 'Daftarkan dirimu sekarang! Bergabunglah dengan ribuan siswa berprestasi di SMAN 1 Bandar Lampung. Pendaftaran online dibuka mulai Maret 2025.',
      btn1: { teks: 'Unduh Formulir PPDB →', href: '#unduhan' },
      btn2: { teks: 'Informasi Lebih Lanjut', href: '#kontak' },
    },
  ],

  kalenderEvents: {
    '2025-1-17': 'UTS Semester Genap',
    '2025-1-22': 'UTS Semester Genap Selesai',
    '2025-2-17': 'UTS Semester Genap',
    '2025-2-25': 'Libur Idul Fitri',
    '2025-4-1':  'Masuk Pasca Lebaran',
    '2025-4-5':  'Pembukaan PPDB Jalur Prestasi',
    '2025-4-12': 'Ujian Sekolah Kelas XII',
    '2025-5-1':  'Hari Buruh — Libur',
    '2025-5-5':  'Buka PPDB Reguler',
    '2025-6-15': 'Libur Kenaikan Kelas',
  },

  /* ── GURU — 20 data, halaman 4x4 = 16 per page ── */
  guru: [
    { ava: '👨‍🏫', nama: 'Dra. Hj. Siti Rohani, M.Pd.',       mapel: 'Matematika',        cat: 'mipa'   },
    { ava: '👩‍🏫', nama: 'Drs. Bambang Irawan, M.Si.',         mapel: 'Fisika',            cat: 'mipa'   },
    { ava: '👩‍🏫', nama: 'Ir. Nurhayati, M.Pd.',               mapel: 'Biologi',           cat: 'mipa'   },
    { ava: '👨‍🏫', nama: 'Dr. Ahmad Fauzan, M.Si.',            mapel: 'Kimia',             cat: 'mipa'   },
    { ava: '👩‍🏫', nama: 'Dra. Endang Kusuma, M.Pd.',          mapel: 'Matematika',        cat: 'mipa'   },
    { ava: '👨‍🏫', nama: 'Sugeng Widodo, S.Pd., M.T.',         mapel: 'Informatika',       cat: 'mipa'   },
    { ava: '👨‍🏫', nama: 'Dra. Marlina Dewi, M.M.',            mapel: 'Ekonomi',           cat: 'ips'    },
    { ava: '👩‍🏫', nama: 'Drs. Hendra Wijaya, M.Pd.',          mapel: 'Sejarah Indonesia', cat: 'ips'    },
    { ava: '👩‍🏫', nama: 'Dra. Rini Astuti, M.Pd.',            mapel: 'Geografi',          cat: 'ips'    },
    { ava: '👨‍🏫', nama: 'Yusuf Hakim, S.Pd., M.Si.',          mapel: 'Sosiologi',         cat: 'ips'    },
    { ava: '👩‍🏫', nama: 'Dewi Permata, S.Pd., M.Pd.',         mapel: 'Ekonomi',           cat: 'ips'    },
    { ava: '👨‍🏫', nama: 'Drs. Syahrul Anwar, M.Pd.',          mapel: 'Bhs. Indonesia',    cat: 'bahasa' },
    { ava: '👩‍🏫', nama: 'Eka Fitriani, S.Pd., M.Ed.',         mapel: 'Bahasa Inggris',    cat: 'bahasa' },
    { ava: '👨‍🏫', nama: 'Li Xiao Ming, M.Pd.',                mapel: 'Bahasa Mandarin',   cat: 'bahasa' },
    { ava: '👩‍🏫', nama: 'Nita Ariani, S.Pd., M.Hum.',         mapel: 'Bhs. Indonesia',    cat: 'bahasa' },
    { ava: '👨‍🏫', nama: 'James Pratama, S.Pd., M.TESOL.',     mapel: 'Bahasa Inggris',    cat: 'bahasa' },
    { ava: '👩‍💼', nama: 'Yuli Andriani, S.Kom.',              mapel: 'Tata Usaha',        cat: 'tendik' },
    { ava: '📚',  nama: 'Haryono, S.IP.',                      mapel: 'Pustakawan',        cat: 'tendik' },
    { ava: '🔬',  nama: 'Agus Santoso, S.Si.',                 mapel: 'Laboran IPA',       cat: 'tendik' },
    { ava: '💻',  nama: 'Rizky Pratama, S.Kom.',               mapel: 'Laboran TIK',       cat: 'tendik' },
  ],

  /* ── PRESTASI — 12 data untuk demo scroll ── */
  prestasi: [
    { medal: '🥇', title: 'Juara 1 OSN Matematika Tingkat Provinsi Lampung', sub: 'Muhammad Rizki Pratama — Tingkat Provinsi', tahun: '2024' },
    { medal: '🥈', title: 'Juara 2 Debat Bahasa Inggris Nasional Kemendikbud', sub: 'Tim Debat SMAN 1 BDL — Tingkat Nasional', tahun: '2024' },
    { medal: '🏆', title: 'Best Research Award LKIR BRIN 2024', sub: 'Nur Aisyah & Dinda Permata — Riset Bioteknologi', tahun: '2024' },
    { medal: '🥇', title: 'Juara 1 Futsal Pelajar Kota Bandar Lampung', sub: 'Tim Futsal Putra SMAN 1 BDL', tahun: '2024' },
    { medal: '🎖️', title: 'Medali Emas Kompetisi Robotika Nasional Yogyakarta', sub: 'Tim Robotika SMAN 1 BDL — 3 siswa', tahun: '2024' },
    { medal: '🥇', title: 'Juara 1 Lomba Karya Tulis Ilmiah Tingkat Nasional', sub: 'Farah Aulia Rahma — FMIPA Univ. Indonesia', tahun: '2024' },
    { medal: '🥉', title: 'Juara 3 OSN Fisika Tingkat Nasional', sub: 'Farhan Aditya Nugraha — Tingkat Nasional', tahun: '2023' },
    { medal: '🥈', title: 'Juara 2 Pencak Silat Porprov Lampung', sub: 'Annisa Rahmawati — Kelas 52 kg Putri', tahun: '2023' },
    { medal: '🏆', title: 'Juara Umum Olimpiade Sains Kota Bandar Lampung', sub: 'SMAN 1 BDL — 8 medali emas', tahun: '2023' },
    { medal: '🥇', title: 'Juara 1 Lomba Desain Poster Nasional', sub: 'Kevin Alvaro — Kategori SMA Sederajat', tahun: '2023' },
    { medal: '🥈', title: 'Juara 2 Speech Contest Bahasa Inggris Nasional', sub: 'Salsabila Ramadhani — SMAN 1 BDL', tahun: '2023' },
    { medal: '🎖️', title: 'Peserta Olimpiade Matematika Internasional (IMO)', sub: 'Bima Sakti Nugraha — Jakarta, mewakili Indonesia', tahun: '2023' },
  ],

  /* ── ALUMNI — 9 data, 3 per halaman ── */
  alumni: [
    { ava: '👨‍⚕️', nama: 'Dr. Ahmad Subhan, Sp.PD.', tahun: 'Angkatan 1995', desc: 'Dokter Spesialis Penyakit Dalam di RSUDAM Lampung, aktif dalam program kesehatan masyarakat.', quote: '"SMAN 1 membentuk disiplin dan etos kerja keras yang menjadi fondasi karier saya hingga kini."' },
    { ava: '👩‍💼', nama: 'Ir. Rini Wulandari, M.T.', tahun: 'Angkatan 2002', desc: 'Direktur PT. Lampung Infrastruktur, pelopor pembangunan infrastruktur digital di Sumatera.', quote: '"Semangat berprestasi yang ditanamkan di SMANSA tidak pernah padam sampai sekarang."' },
    { ava: '👨‍🏛️', nama: 'H. Fauzi Rahman, S.H., M.H.', tahun: 'Angkatan 2008', desc: 'Anggota DPRD Provinsi Lampung, aktif memperjuangkan kebijakan pendidikan berkualitas.', quote: '"Saya bangga menjadi bagian dari keluarga besar SMAN 1 Bandar Lampung."' },
    { ava: '👩‍🔬', nama: 'Dr. Sari Dewi Kusuma, M.Sc.', tahun: 'Angkatan 1998', desc: 'Peneliti BRIN bidang Bioteknologi, penerima penghargaan L'Oréal-UNESCO For Women in Science Indonesia.', quote: '"Rasa ingin tahu ilmiah saya pertama kali tumbuh di laboratorium SMAN 1 Bandar Lampung."' },
    { ava: '👨‍💻', nama: 'Arif Hidayat, S.T.', tahun: 'Angkatan 2010', desc: 'Co-founder startup teknologi pendidikan Lampung EduTech, melayani 50.000+ pengguna aktif.', quote: '"SMANSA mengajarkan bahwa keterbatasan bukan alasan untuk berhenti bermimpi besar."' },
    { ava: '👩‍🎨', nama: 'Laila Nur Fazriah, S.Ds.', tahun: 'Angkatan 2012', desc: 'Creative Director di studio desain internasional berbasis Jakarta, klien Fortune 500 Asia.', quote: '"Ekskul seni di SMANSA adalah titik awal perjalanan kreatif saya."' },
    { ava: '👨‍✈️', nama: 'Capt. Deni Kurniawan', tahun: 'Angkatan 2005', desc: 'Pilot senior maskapai penerbangan nasional, instruktur flying school Curug.', quote: '"Kedisiplinan yang saya pelajari di SMANSA menjadi bekal utama karier penerbangan saya."' },
    { ava: '👩‍🏫', nama: 'Prof. Dr. Maya Sari, M.Pd.', tahun: 'Angkatan 1990', desc: 'Guru Besar Pendidikan Matematika Universitas Lampung, penulis 12 buku referensi nasional.', quote: '"Dari SMANSA-lah cinta saya pada ilmu matematika berakar dan tumbuh."' },
    { ava: '👨‍🎤', nama: 'Rio Pratama', tahun: 'Angkatan 2015', desc: 'Musisi dan komponis, pemenang Indonesian Idol, duta budaya Lampung tingkat nasional.', quote: '"Paduan suara SMANSA adalah tempat pertama saya menyadari musik adalah hidup saya."' },
  ],

  /* ── GALERI — 27 foto untuk demo 3x3 per halaman (3 halaman) ── */
  galeri: [
    { emoji: '🎓', label: 'Wisuda & Perpisahan Kelas XII 2024',        cat: 'acara' },
    { emoji: '🏆', label: 'Medali Emas Kompetisi Robotika Nasional',    cat: 'prestasi' },
    { emoji: '⚽', label: 'Final Liga Pelajar Kota BDL',                cat: 'olahraga' },
    { emoji: '🎵', label: 'Pentas Seni & Budaya Tahunan',               cat: 'seni' },
    { emoji: '🔬', label: 'Praktikum Kimia Organik Kelas XI',           cat: 'akademik' },
    { emoji: '🌿', label: 'Projek P5 Tanam Mangrove Pantai Panjang',    cat: 'acara' },
    { emoji: '📸', label: 'Foto Kelulusan Angkatan 2024',               cat: 'acara' },
    { emoji: '🥋', label: 'Kejuaraan Pencak Silat Antar Pelajar',       cat: 'olahraga' },
    { emoji: '🎨', label: 'Pameran Seni Rupa & Desain Siswa',           cat: 'seni' },
    { emoji: '🤖', label: 'Demo Robot Line Follower Kelas XII IPA',     cat: 'akademik' },
    { emoji: '🏀', label: 'Turnamen Basket DBL Lampung',                cat: 'olahraga' },
    { emoji: '🎭', label: 'Pementasan Teater Musikal SMAN 1',           cat: 'seni' },
    { emoji: '📚', label: 'Olimpiade Sains Nasional Persiapan',         cat: 'akademik' },
    { emoji: '🌟', label: 'Upacara Bendera Hari Pahlawan',              cat: 'acara' },
    { emoji: '🚀', label: 'Launching Program Digital Akselerasi',       cat: 'akademik' },
    { emoji: '🏊', label: 'Renang Antar Pelajar Tingkat Provinsi',      cat: 'olahraga' },
    { emoji: '🎤', label: 'Lomba Pidato Bahasa Inggris & Indonesia',    cat: 'akademik' },
    { emoji: '🌈', label: 'Pameran Projek Kewirausahaan P5',            cat: 'acara' },
    { emoji: '🧪', label: 'Praktikum Fisika Gerak Parabola',            cat: 'akademik' },
    { emoji: '🎯', label: 'Perlombaan Panahan Tingkat Kota',            cat: 'olahraga' },
    { emoji: '🎶', label: 'Konser Paduan Suara & Band Sekolah',         cat: 'seni' },
    { emoji: '🌍', label: 'Debat Bahasa Inggris Tingkat Nasional',      cat: 'prestasi' },
    { emoji: '🤝', label: 'MOU Beasiswa dengan Universitas Terkemuka',  cat: 'acara' },
    { emoji: '🏅', label: 'Penyerahan Hadiah OSN Tingkat Provinsi',     cat: 'prestasi' },
    { emoji: '📷', label: 'Workshop Fotografi Jurnalistik Siswa',       cat: 'seni' },
    { emoji: '🌺', label: 'Peringatan HUT SMAN 1 ke-72',               cat: 'acara' },
    { emoji: '⚡', label: 'Seminar Karir dan Motivasi Kelas XII',       cat: 'akademik' },
  ],

  unduhan: [
    { icon: '📋', nama: 'Formulir Pendaftaran PPDB 2025/2026',  meta: 'PDF · 312 KB · Diperbarui Feb 2025',  cat: 'formulir',     href: '#' },
    { icon: '📅', nama: 'Kalender Akademik 2024/2025',          meta: 'PDF · 1.4 MB · Diperbarui Jul 2024',  cat: 'akademik-doc', href: '#' },
    { icon: '📜', nama: 'Surat Edaran Jadwal UTS Genap',        meta: 'PDF · 245 KB · Diperbarui Feb 2025',  cat: 'surat',        href: '#' },
    { icon: '📖', nama: 'Tata Tertib Siswa 2024/2025',          meta: 'PDF · 920 KB · Diperbarui Agt 2024',  cat: 'panduan',      href: '#' },
    { icon: '📄', nama: 'Template Surat Keterangan Aktif',      meta: 'DOCX · 88 KB · Formulir Resmi',       cat: 'formulir',     href: '#' },
    { icon: '📊', nama: 'Jadwal Pelajaran Semester Genap',      meta: 'PDF · 620 KB · Diperbarui Jan 2025',  cat: 'akademik-doc', href: '#' },
    { icon: '🏅', nama: 'Panduan Beasiswa PIP & KIP',           meta: 'PDF · 1.9 MB · Diperbarui Jan 2025',  cat: 'panduan',      href: '#' },
    { icon: '✉️', nama: 'SE Himbauan Penggunaan Seragam',       meta: 'PDF · 180 KB · Diperbarui Jan 2025',  cat: 'surat',        href: '#' },
  ],

  sosmed: [
    { label: 'ig', title: 'Instagram', href: '#' },
    { label: 'f',  title: 'Facebook',  href: '#' },
    { label: '▶',  title: 'YouTube',   href: '#' },
    { label: '𝕏',  title: 'Twitter/X', href: '#' },
    { label: '♪',  title: 'TikTok',    href: '#' },
  ],

};
