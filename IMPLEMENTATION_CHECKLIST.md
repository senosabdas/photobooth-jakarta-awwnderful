# Implementation Checklist - High Priority Items
## Dengan Anti-Cannibalization Strategy

---

## ✅ HIGH PRIORITY ITEMS - SAFE TO IMPLEMENT

### 1. **Mobile Menu (Hamburger)** ✅ 100% SAFE
**Risk**: NONE - Pure UX improvement
**Action**: Implement hamburger menu untuk mobile navigation

---

### 2. **WhatsApp Floating Button** ✅ 100% SAFE  
**Risk**: NONE - Conversion tool, bukan content
**Action**: 
- Add floating WhatsApp button
- Link ke WhatsApp Business dengan pre-filled message
- Message template: "Halo, saya tertarik dengan Photobooth Jakarta Instant Print"

---

### 3. **More Testimonials** ⚠️ SAFE dengan syarat
**Risk**: MEDIUM - Bisa duplicate dengan main site
**Safe Implementation**:
- ✅ Fokus testimoni dari klien Jakarta dengan detail lokasi spesifik
- ✅ Testimoni untuk instant print specifically
- ✅ Testimoni untuk event types (wedding, birthday) dengan venue Jakarta
- ❌ JANGAN copy testimoni generic dari main site
- ❌ JANGAN testimoni corporate besar (biarkan di main site)

**Example Safe Testimonial**:
```
"Photobooth Jakarta memberikan pelayanan yang sangat memuaskan. 
Hasil foto instant print sangat bagus dan timnya profesional. 
Event wedding saya di Kemang berjalan lancar!"
- Sarah, Wedding Client Jakarta Selatan
```

---

### 4. **Pricing Section** ⚠️ NEEDS CAREFUL HANDLING
**Risk**: HIGH - Bisa duplicate dengan main site

**SAFE Implementation Strategy**:

#### Option A: Package-Based Pricing (Recommended)
```
❌ JANGAN: "Harga Sewa Photobooth Jakarta"
✅ GUNAKAN: "Paket Photobooth Jakarta Instant Print"

- Paket Basic: Rp X (untuk event < 50 orang)
- Paket Standard: Rp Y (untuk event 50-100 orang)  
- Paket Premium: Rp Z (untuk event > 100 orang)

Include: Instant print, operator, props, delivery Jakarta
```

#### Option B: Area-Based Pricing
```
"Photobooth Jakarta Pusat: Mulai dari Rp X"
"Photobooth Jakarta Selatan: Mulai dari Rp Y"
"Photobooth Depok: Mulai dari Rp Z (termasuk delivery)"
```

#### Option C: Instant Print Package Pricing
```
"Paket Instant Print Photobooth Jakarta"
- Focus pada instant print benefits
- Different dari main site yang mungkin offer digital-only
```

**Content Angle**:
- ❌ JANGAN: "Harga Sewa Photobooth Jakarta" (sama dengan main site)
- ✅ GUNAKAN: "Paket Photobooth Jakarta Instant Print" atau "Harga Photobooth Jakarta per Area"

---

### 5. **FAQ Section** ✅ 100% SAFE
**Risk**: NONE - Informational content, tidak compete

**Safe FAQ Topics** (Jakarta-specific, long-tail):
1. "Berapa harga sewa photobooth Jakarta?"
2. "Photobooth Jakarta melayani area mana saja?"
3. "Berapa lama waktu setup photobooth Jakarta?"
4. "Photobooth Jakarta dengan instant print bagaimana?"
5. "Photobooth Jakarta untuk wedding di Kemang?"
6. "Photobooth Jakarta delivery fee berapa?"
7. "Photobooth Jakarta ready stock atau perlu booking?"
8. "Photobooth Jakarta untuk 100 orang cukup?"
9. "Photobooth Jakarta dengan operator termasuk?"
10. "Photobooth Jakarta instant print vs digital?"

**Content Strategy**:
- Focus pada Jakarta-specific questions
- Long-tail keywords (informational intent)
- Tidak duplicate dengan main site FAQ (yang lebih general)

---

## 🔒 ANTI-CANNIBALIZATION MEASURES

### 1. **Canonical Tags**
```html
<!-- Microsite -->
<link rel="canonical" href="https://photobooth-jakarta.com/">

<!-- Add hreflang jika perlu -->
<link rel="alternate" href="https://awwnderful.com/photobooth-jakarta" hreflang="id">
```

### 2. **Internal Linking Strategy**
```html
<!-- Di microsite footer -->
<p>Layanan lain dari <a href="https://awwnderful.com">Awwnderful</a>: 
Videobooth, 360 Booth, dan layanan event lainnya</p>

<!-- Di main site -->
<p>Untuk Photobooth Jakarta dengan Instant Print, 
kunjungi <a href="https://photobooth-jakarta.com">Photobooth Jakarta</a></p>
```

### 3. **Meta Tags Differentiation**

**Current (Microsite)**:
```html
<title>Photobooth Jakarta - Sewa Photobooth Murah & Berkualitas | Instant Print</title>
```

**Recommended (More Differentiated)**:
```html
<title>Photobooth Jakarta Instant Print - Panduan & Paket Terbaru 2024</title>
<meta name="description" content="Panduan lengkap photobooth Jakarta dengan instant print. Tips, paket, dan rekomendasi untuk acara wedding, birthday, dan corporate di Jakarta.">
```

**Main Site Should Have**:
```html
<title>Awwnderful - Sewa Photobooth Jakarta Profesional | Layanan Event</title>
<meta name="description" content="Awwnderful menyediakan layanan sewa photobooth Jakarta profesional. Photobooth, videobooth, 360 booth untuk semua jenis acara.">
```

### 4. **Content Angle**

| Element | Main Site | Microsite |
|---------|-----------|-----------|
| **Tone** | Brand-focused, Professional | Guide-focused, Consumer-friendly |
| **Focus** | All services, National | Instant print, Jakarta only |
| **Content Type** | Portfolio, Case studies | Guides, Tips, FAQ |
| **CTA** | "Hubungi Awwnderful" | "Pesan Photobooth Jakarta" |
| **Keywords** | "Sewa Photobooth Jakarta" | "Photobooth Jakarta Instant Print" |

---

## 📋 IMPLEMENTATION ORDER

### Phase 1: Zero Risk (Implement Now)
1. ✅ Mobile Menu
2. ✅ WhatsApp Button
3. ✅ FAQ Section (Jakarta-specific)

### Phase 2: Low Risk (After Phase 1)
4. ⚠️ More Testimonials (Jakarta-specific only)
5. ⚠️ Pricing Section (Package-based, different angle)

### Phase 3: Content Expansion (Ongoing)
6. Area-specific landing pages
7. Event-type guides
8. Comparison articles

---

## 🎯 KEYWORD STRATEGY SUMMARY

### ❌ AVOID (Let Main Site Own)
- "Sewa Photobooth Jakarta" (exact match)
- "Awwnderful Photobooth"
- Generic service descriptions
- National coverage

### ✅ TARGET (Microsite Focus)
- "Photobooth Jakarta Instant Print"
- "Photobooth Jakarta [Area]" (Pusat, Selatan, dll)
- "Photobooth [Event Type] Jakarta" (Wedding, Birthday)
- Long-tail: "Berapa harga photobooth Jakarta?"
- Informational: "Tips photobooth Jakarta"

---

## ✅ FINAL CHECKLIST SEBELUM IMPLEMENT

- [ ] Canonical tag sudah benar
- [ ] Meta title/description berbeda dari main site
- [ ] Internal linking strategy sudah direncanakan
- [ ] Keywords yang digunakan tidak overlap dengan main site
- [ ] Content angle berbeda (guide vs brand)
- [ ] Testimonials Jakarta-specific
- [ ] Pricing dengan angle berbeda (package vs service)
- [ ] FAQ Jakarta-specific, long-tail

---

## 📊 MONITORING (Post-Implementation)

Track these metrics:
1. **Keyword Rankings**: 
   - Microsite rank untuk target keywords
   - Main site tetap rank untuk brand keywords

2. **Traffic**:
   - Microsite: Long-tail, local searches
   - Main site: Brand, general searches

3. **Conversion**:
   - Microsite: Quick booking, local leads
   - Main site: Corporate, complex projects

4. **Cannibalization Check**:
   - Jika main site drop ranking untuk "Sewa Photobooth Jakarta" → Adjust
   - Jika microsite rank untuk brand keywords → Add noindex atau adjust
