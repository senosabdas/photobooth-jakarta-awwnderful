'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import Head from 'next/head'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { useLanguage } from '@/contexts/LanguageContext'

// FAQ data structure
interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  title: string
  items: FAQItem[]
}

// English FAQ Data
const faqDataEn: FAQCategory[] = [
  {
    title: "Pricing & Booking",
    items: [
      {
        question: "What is the price range for renting a photobooth in Jakarta?",
        answer: "Awwnderful photobooth rental starts from Rp2 million – Rp5 million for 2–4 hours duration. Prices are adjusted based on package selection, rental duration, output (print, GIF, video), and customization level. For full-day events or special needs, we can also prepare custom packages."
      },
      {
        question: "How far in advance should I book a photobooth?",
        answer: "It's recommended to book 1–2 months in advance, especially for weekends or wedding season. The earlier you book, the safer your slot will be."
      },
      {
        question: "Do I need to pay a deposit (DP)?",
        answer: "Yes, a 50% deposit is required to reserve the date. The remaining payment can be made at the latest H-3 before the event or according to agreement."
      },
      {
        question: "How do I book a photobooth with Awwnderful?",
        answer: "1. Contact our team via WhatsApp/email\n2. Choose a package according to your event needs\n3. Make 50% DP payment to lock the date\n4. Send event details & design requests\n5. Our team will set up on D-day and ensure the event runs smoothly"
      },
      {
        question: "Are there any additional costs outside the package?",
        answer: "There are no hidden costs. Additional costs only apply for special requests, such as overtime (extra hours outside the package), special custom backdrop, or events outside Jabodetabek (transport/accommodation costs will apply)."
      },
      {
        question: "Can I rent a photobooth at the last minute?",
        answer: "Yes, as long as slots are still available. Please contact our team, and we will try to accommodate even if booking is done close to D-day."
      }
    ]
  },
  {
    title: "Services & Packages",
    items: [
      {
        question: "What facilities are included in the photobooth package?",
        answer: "Our package is all-inclusive, including: professional camera & studio lighting, friendly operator standby throughout the event, unlimited photo prints (2R/4R size), custom frame design according to event theme, fun props & accessories, standard backdrop (or you can use venue backdrop), and online gallery for downloading and sharing results."
      },
      {
        question: "Are photo prints unlimited?",
        answer: "Yes, all Awwnderful packages include unlimited photo prints during the event duration. Guests can take photos multiple times and all results are also available in digital format in the online gallery."
      },
      {
        question: "Can all guests get photo prints?",
        answer: "Because of our unlimited print system, every guest who takes photos can bring home the print. For large events, we can add backup printers so the queue remains fast."
      },
      {
        question: "Is there digital documentation for the event organizer?",
        answer: "Yes. After the event ends, the organizer will receive complete digital archives containing all photos, GIFs, and videos in an organized file format."
      }
    ]
  },
  {
    title: "Setup & Technical",
    items: [
      {
        question: "What are the power and space requirements?",
        answer: "Power: ±1000–1500W. Space: Minimum 3 × 3 meters (for backdrop, camera, and printer). We are flexible in adjusting the layout to the venue, so it can be installed in hotel ballrooms, offices, or homes."
      },
      {
        question: "How long is the setup process before the event starts?",
        answer: "Our team usually arrives 60–90 minutes before the event for equipment installation and testing. This way, the photobooth is ready to use on time when the event opens."
      },
      {
        question: "What if the power at the venue is limited?",
        answer: "We can adjust to venue conditions. If power is limited, we can reduce lamp power or prepare alternative solutions. For outdoor events, portable generator rental options can be discussed."
      },
      {
        question: "What about outdoor or semi-outdoor events?",
        answer: "We can set up photobooth in outdoor areas with the condition that there is stable power access and the area is protected from rain. For special needs, we can discuss additional options such as tents or covers."
      },
      {
        question: "What if there are technical issues during the event?",
        answer: "The operator team is always on site to ensure everything runs smoothly. If there are technical issues, we will resolve them immediately without disrupting the event flow."
      },
      {
        question: "What if the event starts later or is postponed from schedule?",
        answer: "We are flexible. If the event is postponed from the agreed time, our operator will remain standby according to contract. If additional operating hours are needed, overtime fees can be added."
      }
    ]
  },
  {
    title: "Customization & Design",
    items: [
      {
        question: "Can I customize frame and backdrop designs?",
        answer: "Absolutely! All photo frames, GIF overlays, and backdrop designs can be adjusted to the event theme. Want to include company logo, special colors, or wedding invitation-style design? Awwnderful's design team is ready to realize it so the photobooth looks according to your event branding."
      },
      {
        question: "Can I change the backdrop according to the event theme?",
        answer: "Yes, we have several standard backdrop options (sequin, plain, certain patterns). If you want a custom backdrop with special design or printing, we can also help with production."
      },
      {
        question: "Can I request custom photo print sizes (like polaroid)?",
        answer: "Yes, besides standard sizes (2R/4R), we can prepare custom sizes like polaroid, strip photo, up to postcard according to event needs."
      },
      {
        question: "Can I add digital frame branding for social media?",
        answer: "Yes. Besides physical prints, guests can download photos with custom digital frames ready to upload to Instagram or TikTok, like twibbon for events/campaigns."
      }
    ]
  },
  {
    title: "Advanced Features & Technology",
    items: [
      {
        question: "Can Awwnderful create interactive/unique photobooths?",
        answer: "Definitely! Besides classic photobooth, we also provide: GIF & Boomerang photobooth, Creative photobooth with green screen, Corporate branding booth for brand activation, and Online gallery (SnapCam) accessible via QR code."
      },
      {
        question: "Can photo results be projected on large screens?",
        answer: "Yes. We have real-time slideshow features so every new photo taken can be automatically displayed on large screens/TVs/LEDs at the venue. This feature is perfect for wedding and corporate events."
      },
      {
        question: "Can the photobooth directly share to social media?",
        answer: "Yes. Besides physical prints, each photo can be directly sent to guest email or WhatsApp. Guests can also download digital photos from SnapCam online gallery and share them to Instagram or other platforms."
      },
      {
        question: "Can I request additional features like video booth or 360 booth?",
        answer: "Yes. Besides standard photobooth, Awwnderful also provides 360 Video Booth, GIF Booth, up to Creative Booth with green screen options. All can be customized according to the event."
      },
      {
        question: "What if guests want results in video/GIF format?",
        answer: "Besides photo prints, our photobooth supports GIF, Boomerang, up to short videos that can be directly shared to WhatsApp/Instagram."
      },
      {
        question: "Are photo results safe and private?",
        answer: "Yes. All photos are stored in our private server system. Clients can choose whether photos can only be accessed through special links (with password) or shared publicly."
      }
    ]
  },
  {
    title: "Corporate & Large Events",
    items: [
      {
        question: "Does Awwnderful serve corporate events with official invoices?",
        answer: "Yes. We are accustomed to serving company events, including administrative needs such as official invoices, bermaterai receipts, up to vendor documents according to company SOP."
      },
      {
        question: "Can I do full branding for corporate events?",
        answer: "Yes. Besides photo frame designs, we can add booth branding, backdrop wrapping with company logo, up to custom props with company logo, so the booth blends with the brand identity."
      },
      {
        question: "Does Awwnderful support brand activation?",
        answer: "Yes. We are accustomed to working with brands for campaign activation. The booth can be fully customized: from branding frame, backdrop, props, up to social media integration like hashtag printer or QR code-based campaigns."
      },
      {
        question: "Can Awwnderful provide more than 1 photobooth at one event?",
        answer: "Yes. For large-scale events, we can prepare multiple photobooth units simultaneously (for example 2–3 booths in different areas) so guests don't have to queue long."
      },
      {
        question: "Does Awwnderful support events with thousands of guests?",
        answer: "Yes. For large-scale events (exhibitions, concerts, exhibitions), we can add booth units, backup printers, and extra technical teams so all guests remain well-served."
      }
    ]
  },
  {
    title: "Special Services & Coverage Areas",
    items: [
      {
        question: "Can it be used for events outside Jakarta?",
        answer: "Yes, we serve Jabodetabek without additional transport costs. For cities outside (Bandung, Serang, etc.), we are ready to come with adjusted travel costs."
      },
      {
        question: "Can Awwnderful provide bilingual services (Indonesian & English)?",
        answer: "Yes, for international events or corporate events with foreign guests, our operator team is ready to guide in English and Indonesian."
      },
      {
        question: "Does Awwnderful provide photobooths for children or school events?",
        answer: "Yes. We have family & kids-friendly photobooth options with fun props and cheerful designs, suitable for children's birthdays, school retirements, up to graduation events."
      },
      {
        question: "Can it be integrated with other event systems (such as digital invitations or guest registration)?",
        answer: "Yes. Our photobooth can be integrated with guest registration systems, digital invitations, or other event platforms so the guest experience is more seamless."
      },
      {
        question: "Can I add extra staff (host/MC) to guide the photobooth?",
        answer: "Yes. Besides standard operators, you can request additional staff to guide guests to be more interactive and lively."
      },
      {
        question: "Does Awwnderful have a portfolio of previous events?",
        answer: "Yes. We have handled various events ranging from weddings, birthdays, up to corporate events with automotive brands, schools, up to large events. Portfolios can be viewed on our website and social media."
      }
    ]
  }
]

// Indonesian FAQ Data
const faqDataId: FAQCategory[] = [
  {
    title: "Harga & Booking",
    items: [
      {
        question: "Berapa kisaran harga sewa photobooth di Jakarta?",
        answer: "Harga sewa photobooth di Awwnderful mulai dari Rp2 juta – Rp5 juta untuk durasi 2–4 jam. Harga menyesuaikan dengan paket pilihan, durasi sewa, output (print, GIF, video), serta tingkat kustomisasi desain. Untuk acara full day atau kebutuhan spesial, kami juga bisa menyiapkan paket custom."
      },
      {
        question: "Berapa lama sebelumnya sebaiknya booking photobooth?",
        answer: "Sebaiknya booking 1–2 bulan sebelum acara, terutama untuk weekend atau musim pernikahan. Semakin cepat booking, semakin aman slot Anda."
      },
      {
        question: "Apakah perlu membayar uang muka (DP)?",
        answer: "Ya, untuk reservasi tanggal diperlukan DP sebesar 50% dari total harga. Sisa pembayaran dapat dilakukan paling lambat H-3 acara atau sesuai kesepakatan."
      },
      {
        question: "Bagaimana cara booking photobooth di Awwnderful?",
        answer: "1. Hubungi tim kami via WhatsApp/email\n2. Pilih paket sesuai kebutuhan acara\n3. Lakukan pembayaran DP 50% untuk mengunci tanggal\n4. Kirim detail acara & request desain\n5. Tim kami akan setup di hari-H dan memastikan acara berjalan lancar"
      },
      {
        question: "Apakah ada biaya tambahan di luar paket?",
        answer: "Tidak ada biaya tersembunyi. Biaya tambahan hanya berlaku jika ada permintaan khusus, seperti overtime (jam tambahan di luar paket), backdrop custom khusus, atau event di luar Jabodetabek (akan ada biaya transport/akomodasi)."
      },
      {
        question: "Apakah bisa sewa photobooth mendadak (last minute)?",
        answer: "Bisa, selama slot masih tersedia. Silakan hubungi tim kami, dan kami akan berusaha mengakomodasi meskipun booking dilakukan mendekati hari-H."
      }
    ]
  },
  {
    title: "Fasilitas & Paket",
    items: [
      {
        question: "Apa saja fasilitas yang sudah termasuk dalam paket photobooth?",
        answer: "Paket kami bersifat all-in, mencakup: kamera profesional & lighting studio, operator ramah yang standby selama acara, cetak foto unlimited (ukuran 2R/4R), desain frame custom sesuai tema acara, props & aksesoris lucu, backdrop standar (atau bisa pakai backdrop venue), dan galeri online untuk mengunduh dan membagikan hasil foto."
      },
      {
        question: "Apakah hasil fotonya unlimited?",
        answer: "Ya, semua paket Awwnderful sudah termasuk foto cetak unlimited selama durasi acara. Tamu bisa berfoto berkali-kali dan semua hasil juga tersedia dalam bentuk digital di galeri online."
      },
      {
        question: "Apakah semua tamu bisa mendapatkan cetakan foto?",
        answer: "Karena sistem kami unlimited print, setiap tamu yang berfoto bisa langsung membawa pulang hasil cetaknya. Untuk acara besar, kami bisa tambahkan printer cadangan agar antrean tetap cepat."
      },
      {
        question: "Apakah ada dokumentasi digital untuk pemilik acara?",
        answer: "Ya. Setelah acara selesai,kami akan memberi online gallery digital lengkap berisi semua foto, GIF, dan video."
      }
    ]
  },
  {
    title: "Setup & Teknis",
    items: [
      {
        question: "Berapa kebutuhan listrik dan area yang diperlukan?",
        answer: "Listrik: ±1000–1500W. Area: Minimal 3 × 3 meter (untuk backdrop, kamera, dan printer). Kami fleksibel menyesuaikan layout di venue, jadi bisa dipasang di ballroom hotel, kantor, maupun rumah."
      },
      {
        question: "Berapa lama proses setup sebelum acara dimulai?",
        answer: "Tim kami biasanya datang 60–90 menit sebelum acara untuk instalasi peralatan dan uji coba. Dengan begitu, photobooth sudah siap digunakan tepat waktu saat acara dibuka."
      },
      {
        question: "Bagaimana jika listrik di venue terbatas?",
        answer: "Kami bisa menyesuaikan dengan kondisi venue. Jika listrik terbatas, kami bisa menurunkan daya lampu atau menyiapkan solusi alternatif. Untuk event outdoor, bisa didiskusikan opsi sewa genset portable."
      },
      {
        question: "Bagaimana jika acara outdoor atau semi-outdoor?",
        answer: "Kami bisa pasang photobooth di area outdoor dengan catatan ada akses listrik stabil dan area yang terlindung dari hujan. Untuk kebutuhan khusus, kami bisa diskusikan opsi tambahan seperti tenda atau cover."
      },
      {
        question: "Bagaimana jika ada masalah teknis saat acara berlangsung?",
        answer: "Tim operator selalu standby di lokasi untuk memastikan semua berjalan lancar. Jika ada kendala teknis, kami segera mengatasinya tanpa mengganggu jalannya acara."
      },
      {
        question: "Bagaimana jika acara dimulai lebih lama atau mundur dari jadwal?",
        answer: "Kami fleksibel. Jika acara mundur dari waktu yang disepakati, operator kami tetap standby sesuai kontrak. Jika perlu tambahan jam operasional, bisa ditambahkan dengan sistem overtime fee."
      }
    ]
  },
  {
    title: "Kustomisasi & Desain",
    items: [
      {
        question: "Bisa custom desain frame dan backdrop?",
        answer: "Bisa banget! Semua frame foto, overlay GIF, dan desain backdrop bisa disesuaikan dengan tema acara. Mau pakai logo perusahaan, warna khusus, atau desain ala undangan pernikahan? Tim desain Awwnderful siap mewujudkan agar photobooth tampil sesuai branding event Anda."
      },
      {
        question: "Apakah bisa ganti backdrop sesuai tema acara?",
        answer: "Ya, kami memiliki beberapa pilihan backdrop standar (sequin, polos, motif tertentu). Jika ingin backdrop custom dengan desain atau printing khusus, kami juga bisa bantu produksi."
      },
      {
        question: "Apakah bisa request cetakan foto dengan ukuran khusus (misal polaroid)?",
        answer: "Ya, selain ukuran standar (2R/4R), kami bisa menyiapkan ukuran custom seperti polaroid, strip photo, hingga postcard sesuai kebutuhan acara."
      },
      {
        question: "Apakah bisa branding frame digital untuk media sosial?",
        answer: "Bisa. Branding hasil output dari print, frame untuk di sosial media"
      }
    ]
  },
  {
    title: "Fitur Tambahan & Teknologi",
    items: [
      {
        question: "Apakah Awwnderful bisa buat photobooth interaktif/unik?",
        answer: "Tentu! Selain photobooth biasa, kami juga bisa bantu untuk Custom project software nya, Branding booth untuk dari software sampai produksi booth nya."
      },
      {
        question: "Apakah hasil foto bisa langsung diproyeksikan di layar besar?",
        answer: "Bisa. Kami memiliki fitur slideshow real-time sehingga setiap foto baru yang diambil dapat otomatis tampil di layar besar/TV/LED di venue. Fitur ini sangat cocok untuk acara pernikahan dan corporate event."
      },
      {
        question: "Apakah photobooth bisa langsung share ke media sosial?",
        answer: "Bisa. Selain cetak fisik, setiap foto dapat langsung dikirim ke email atau WhatsApp tamu."
      },
      {
        question: "Apakah bisa request fitur tambahan seperti video booth atau 360 booth?",
        answer: "Bisa. Selain photobooth standar, Awwnderful juga menyediakan opsi 360 Video Booth, GIF Booth, hingga Custom Booth. Semua bisa dikustomisasi sesuai event."
      },
      {
        question: "Bagaimana kalau tamu ingin hasil dalam bentuk video/GIF?",
        answer: "Selain cetak foto, photobooth kami mendukung GIF, Boomerang, hingga short video yang bisa langsung dishare ke WhatsApp/Instagram."
      },
      {
        question: "Apakah hasil foto aman dan private?",
        answer: "Ya. Semua foto tersimpan di server kami dengan sistem galeri privat. Klien bisa memilih apakah foto hanya bisa diakses melalui link khusus (dengan password) atau dibagikan publik."
      }
    ]
  },
  {
    title: "Corporate & Event Besar",
    items: [
      {
        question: "Apakah Awwnderful melayani acara corporate dengan invoice resmi?",
        answer: "Ya. Kami sudah terbiasa melayani event perusahaan, termasuk kebutuhan administrasi seperti invoice, kwitansi bermaterai, hingga dokumen vendor sesuai SOP perusahaan."
      },
      {
        question: "Apakah bisa branding penuh untuk corporate event?",
        answer: "Bisa. Selain desain frame foto, kami bisa menambahkan branding booth, wrap backdrop dengan logo, hingga custom props dengan logo perusahaan, sehingga booth menyatu dengan identitas brand."
      },
      {
        question: "Apakah Awwnderful mendukung brand activation?",
        answer: "Ya. Kami terbiasa bekerja sama dengan brand untuk campaign activation. Booth bisa dikustomisasi penuh: mulai dari branding frame, backdrop, props, hingga integrasi sosial media seperti hashtag printer atau campaign berbasis QR code."
      },
      {
        question: "Apakah Awwnderful bisa menyediakan lebih dari 1 photobooth di satu acara?",
        answer: "Bisa. Untuk event skala besar, kami bisa menyiapkan beberapa unit photobooth sekaligus (misalnya 2–3 booth di area berbeda) agar tamu tidak perlu antri panjang."
      },
      {
        question: "Apakah Awwnderful mendukung acara dengan ribuan tamu?",
        answer: "Ya. Untuk event skala besar (pameran, konser, exhibition), kami bisa menambah unit booth, printer cadangan, dan tim teknis ekstra agar semua tamu tetap terlayani."
      }
    ]
  },
  {
    title: "Layanan Khusus & Area",
    items: [
      {
        question: "Apakah bisa dipakai untuk acara di luar Jakarta?",
        answer: "Ya, kami melayani Jabodetabek tanpa biaya transport tambahan. Untuk kota lain (Bandung, Serang, dll), kami siap datang dengan penyesuaian biaya perjalanan."
      },
      {
        question: "Apakah Awwnderful bisa menyediakan layanan bilingual (Indonesia & Inggris)?",
        answer: "Ya, untuk acara internasional atau corporate dengan tamu asing, tim operator kami siap membimbing dalam bahasa Inggris maupun Indonesia."
      },
      {
        question: "Apakah Awwnderful menyediakan photobooth untuk anak-anak atau acara sekolah?",
        answer: "Ya. Kami punya opsi family & kids friendly photobooth dengan props lucu dan desain ceria, cocok untuk ulang tahun anak, pensi sekolah, hingga acara wisuda."
      },
      {
        question: "Apakah bisa integrasi dengan sistem event lain (misal undangan digital atau registrasi tamu)?",
        answer: "Bisa. Photobooth kami dapat diintegrasikan dengan sistem registrasi tamu, undangan digital, atau platform event lain sehingga pengalaman tamu lebih seamless."
      },
      {
        question: "Apakah bisa ada staff tambahan (host/MC) untuk memandu photobooth?",
        answer: "Bisa. Selain operator standar, Anda bisa request tambahan staff untuk memandu tamu agar lebih interaktif dan ramai."
      },
      {
        question: "Apakah Awwnderful punya portofolio acara sebelumnya?",
        answer: "Ya. Kami telah menangani berbagai acara mulai dari wedding, ulang tahun, hingga corporate event bersama brand otomotif, sekolah, hingga event besar. Portofolio bisa dilihat di website dan media sosial kami."
      }
    ]
  }
]

function FAQSection({ category }: { category: FAQCategory }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="mb-12">
      {/* Category Title with Gradient */}
      <div className="relative mb-8">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-2">
          {category.title}
        </h2>
        <div className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
      </div>

      <div className="space-y-6">
        {category.items.map((item, index) => (
          <div
            key={index}
            className="group relative"
          >
            {/* Main Card with Glass Effect */}
            <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-lg rounded-2xl border border-gray-700/50 overflow-hidden shadow-2xl">
              {/* Animated Border Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 rounded-2xl transition-opacity duration-300 ${
                openIndex === index ? 'opacity-100' : 'opacity-0 group-hover:opacity-50'
              }`}></div>

              {/* Content */}
              <div className="relative z-10">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none group-hover:bg-gradient-to-r group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    {/* Question Number */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                      openIndex === index
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                        : 'bg-gray-700 text-gray-300 group-hover:bg-purple-500/20'
                    }`}>
                      {index + 1}
                    </div>
                    <span className={`font-semibold text-lg transition-all duration-300 ${
                      openIndex === index ? 'text-white' : 'text-gray-200 group-hover:text-white'
                    }`}>
                      {item.question}
                    </span>
                  </div>

                  {/* Animated Icon */}
                  <div className={`relative transition-all duration-300 ${
                    openIndex === index ? 'rotate-180' : 'group-hover:scale-110'
                  }`}>
              <ChevronDown
                      className={`w-6 h-6 transition-colors duration-300 ${
                        openIndex === index
                          ? 'text-purple-400'
                          : 'text-gray-400 group-hover:text-purple-300'
                }`}
              />
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/30 to-pink-500/30 blur-md transition-opacity duration-300 ${
                      openIndex === index ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
            </button>

                {/* Expandable Content with Animation */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index
                    ? 'max-h-96 opacity-100'
                    : 'max-h-0 opacity-0'
                }`}>
                  <div className="px-8 pb-6 pt-2">
                    <div className="border-t border-gray-600/50 pt-6">
                      <div className="prose prose-gray max-w-none">
                        <p className="text-gray-300 leading-relaxed text-base whitespace-pre-line">
                          {item.answer}
                        </p>
                      </div>

                      {/* Decorative Elements */}
                      <div className="mt-6 flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                        <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle Shadow Effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/5 to-pink-500/5 transition-opacity duration-300 ${
                openIndex === index ? 'opacity-100' : 'opacity-0'
              }`}></div>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const { language, t } = useLanguage()

  // Select appropriate FAQ data based on language
  const faqData = language === 'en' ? faqDataEn : faqDataId
  
  // Filter FAQ data based on search query
  const filteredFaqData = faqData.map(category => ({
    ...category,
    items: category.items.filter(item =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.items.length > 0)

  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(category => 
      category.items.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    )
  }

  return (
    <>
      <Head>
        <title>
          {language === 'en'
            ? 'Awwnderful Photobooth FAQ - Frequently Asked Questions'
            : 'FAQ Awwnderful Photobooth Jakarta - Pertanyaan Umum'
          }
        </title>
        <meta
          name="description"
          content={
            language === 'en'
              ? 'Find answers to common questions about Awwnderful photobooth rental services in Jakarta. Pricing, booking, setup, and customization information.'
              : 'Temukan jawaban atas pertanyaan umum tentang layanan sewa photobooth Awwnderful di Jakarta. Informasi harga, booking, setup, dan kustomisasi.'
          }
        />
        <meta
          name="keywords"
          content={
            language === 'en'
              ? 'photobooth FAQ, photobooth rental questions, Jakarta photobooth, event photography FAQ'
              : 'FAQ photobooth, pertanyaan sewa photobooth, photobooth Jakarta, FAQ fotografi event'
          }
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </Head>
      <Navigation />

      {/* Background with Gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 -z-10"></div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 rounded-full"></div>
      </div>

      <main className="relative pt-24 pb-20 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-20 relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-3xl rounded-full -z-10"></div>

            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-6 animate-fade-in">
              {language === 'en'
                ? 'Awwnderful Photobooth FAQ'
                : 'FAQ Awwnderful Photobooth Jakarta'
              }
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-8">
              {language === 'en'
                ? 'Find answers to common questions about our photobooth services'
                : 'Temukan jawaban atas pertanyaan umum tentang layanan photobooth kami'
              }
            </p>

            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4">
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-purple-400 rounded-full"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-pink-400 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mb-16">
            <div className="relative max-w-2xl mx-auto">
              {/* Search Input with Glass Effect */}
              <div className="relative">
              <input
                type="text"
                  placeholder={language === 'en' ? 'Search questions...' : 'Cari pertanyaan...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 bg-gray-800/60 backdrop-blur-lg border border-gray-600/50 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 shadow-2xl"
                />
                {/* Search Icon */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60"></div>
            </div>
          </div>

          {/* FAQ Sections */}
          {filteredFaqData.length > 0 ? (
            filteredFaqData.map((category, index) => (
              <FAQSection key={index} category={category} />
            ))
          ) : (
            <div className="text-center py-16">
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-purple-500/10 blur-2xl rounded-full -z-10"></div>

                <div className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-600/30 shadow-2xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {language === 'en' ? 'No Results Found' : 'Tidak Ada Hasil'}
                  </h3>

                  <p className="text-gray-400">
                    {language === 'en'
                      ? 'No questions found matching your search. Try different keywords.'
                      : 'Tidak ada pertanyaan yang sesuai dengan pencarian Anda. Coba kata kunci yang berbeda.'
                    }
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Contact CTA */}
          <div className="mt-20 text-center relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-purple-500/20 blur-3xl rounded-full -z-10"></div>

            <div className="bg-gray-800/60 backdrop-blur-lg rounded-3xl p-8 border border-gray-600/30 shadow-2xl">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </div>

                <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent mb-4">
                  {language === 'en' ? 'Still have questions?' : 'Masih ada pertanyaan?'}
            </h2>

                <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
                  {language === 'en'
                    ? "We're here to help. Contact us for more information about our photobooth services."
                    : 'Kami siap membantu. Hubungi kami untuk informasi lebih lanjut tentang layanan photobooth kami.'
                  }
                </p>
              </div>

            <a
              href="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-2xl hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                {language === 'en' ? 'Contact Us' : 'Hubungi Kami'}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>

              {/* Decorative Elements */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                <div className="w-8 h-0.5 bg-gradient-to-r from-purple-400/50 to-pink-400/50 rounded-full"></div>
                <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
} 