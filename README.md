# 🏫 Website SMAN 1 Bandar Lampung

Website profil resmi SMA Negeri 1 Bandar Lampung — deploy ke **GitHub Pages**.

## 🚀 Deploy ke GitHub Pages

### Langkah 1 — Upload ke GitHub
1. Buka [github.com](https://github.com) → Login
2. Klik **"New repository"**
3. Nama repo: `smansa-website`
4. Centang **"Public"** (wajib untuk GitHub Pages gratis)
5. Klik **"Create repository"**

### Langkah 2 — Upload file
Di halaman repo kosong, klik **"uploading an existing file"** lalu drag-and-drop semua file dari folder ini.

Atau via Git:
```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/USERNAME/smansa-website.git
git push -u origin main
```

### Langkah 3 — Aktifkan GitHub Pages
1. Di repo → klik tab **Settings**
2. Scroll ke bagian **"Pages"** (sidebar kiri)
3. Source: **"Deploy from a branch"**
4. Branch: **main** → folder: **/ (root)**
5. Klik **Save**
6. Tunggu ~1 menit → website live di:
   **`https://USERNAME.github.io/smansa-website`**

### Langkah 4 — Hubungkan ke Laravel backend
Edit baris ini di `index.html`:
```html
<meta name="laravel-url" content="https://your-app.railway.app">
```
Ganti `your-app.railway.app` dengan URL Railway Anda (lihat README repo Laravel).

---

## 📁 Struktur File
```
smansa-website/
├── index.html          ← Halaman utama
├── admin-siswa.html    ← Admin panel (browser-only, tanpa server)
├── css/
│   ├── variables.css
│   ├── base.css
│   ├── navbar.css
│   ├── hero.css
│   ├── sections.css
│   ├── footer.css
│   ├── animations.css
│   └── responsive.css
└── js/
    ├── data.js         ← Data konten (guru, alumni, galeri)
    ├── main.js         ← Inisialisasi
    ├── ui.js           ← Interaksi UI & pagination
    ├── slider.js       ← Hero slider
    ├── kalender.js     ← Kalender akademik
    └── form.js         ← Form kontak
```
