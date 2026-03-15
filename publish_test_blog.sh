#!/bin/bash
set -euo pipefail

ROOT_DIR="/usr/local/lsws/awwnderful/html"
BLOGS_TS="src/app/blogs.ts"
LOCALE="id"
URL_BASE="https://awwnderful.com"

echo "Masuk ke proyek: $ROOT_DIR"
cd "$ROOT_DIR"

echo "Langkah 1: Tambah entri test-blog-jarvis jika belum ada"
if grep -q "test-blog-jarvis" "$BLOGS_TS"; then
 echo "Enti test-blog-jarvis sudah ada. Lewatkan patch."
else
 cat <<'EOF' >> "$BLOGS_TS"

 {
id: 'test-blog-jarvis',
 title: 'Test Blog',
 image: '/images/blog-profile-seno-jakarta.webp',
 excerpt: 'This is a test blog post.',
 slug: 'test-blog-jarvis',
 productTags: ['test'],
 publishedAt: '2026-03-11',
 author: {
  name: 'Seno',
  image: '/images/blog-profile-seno-jakarta.webp'
 },
 content: [
  {
   type: 'text',
   id: 'intro',
   content: 'test blog',
   style: 'large'
  }
 ]
 },
EOF
 echo "Patch appended."
fi

echo "Langkah 2: Install dependencies"
npm install

echo "Langkah 3: Build proyek"
npm run build

echo "Langkah 4: Restart server"
# Sesuaikan dengan manajemen layanan Anda
# Contoh menggunakan systemd (LSWS sebagai contoh):
# sudo systemctl restart lsws
# Atau jika menjalankan Next.js langsung:
pkill -f 'node .*server' || true
npm start &

echo "Langkah 5: Verifikasi publish (GET)"
sleep 5
RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" "$URL_BASE/$LOCALE/blog/test-blog-jarvis")
echo "HTTP status: $RESPONSE"
if [ "$RESPONSE" -eq 200 ]; then
 echo "Publish berhasil: $URL_BASE/$LOCALE/blog/test-blog-jarvis"
else
 echo "Publish mungkin gagal. Cek logs server untuk detail."
fi

"}},{"path":"/usr/local/lsws/awwnderful/html/publish_test_blog.sh","parameters":{}}]} ithub 155.0.0.1 5 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0