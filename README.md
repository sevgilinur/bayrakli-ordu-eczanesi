# Bayraklı Ordu Eczanesi - Web Sitesi

Bayraklı Ordu Eczanesi'nin kurumsal web sitesi. Dermokozmetik markalar, blog yazıları, nöbet takvimi ve iletişim bilgilerini içerir.

## Özellikler

- Ana sayfa slider'ı, marka kartelası, öne çıkan ürün banner'ları
- A'dan Z'ye marka listeleme (alfabetik)
- Blog sayfası (sağlık, cilt bakımı, ilaç kullanımı)
- Nöbet takvimi (dinamik)
- Karanlık mod (localStorage ile kalıcı)
- Floating mesaj widget'ı
- Mobil uyumlu (responsive) tasarım
- Harita entegrasyonu (Google Maps)

## Sayfalar

| Sayfa | Açıklama |
|-------|----------|
| `index.html` | Ana sayfa |
| `markalar.html` | Markalar ve ürün detayları |
| `blog.html` | Sağlık blogu |
| `iletisim.html` | İletişim, danışma formu, nöbet takvimi |
| `hakkinda.html` | Hakkımızda |

## Dosya Yapısı

```
├── index.html
├── markalar.html
├── blog.html
├── iletisim.html
├── hakkinda.html
├── style.css
├── script.js          # Slider, karusel, nöbet takvimi
├── components.js      # Navbar, footer, dark mode, mesaj widget'ı
├── brands.js          # Marka verileri
├── foto/              # Görseller
└── ikinci/            # Yedek navbar/footer HTML
```

## Kullanım

Projeyi doğrudan tarayıcıda açmak için:

```bash
start index.html
```

Herhangi bir derleme adımı gerektirmez. Tüm JS dosyaları `index.html` içinde script tag'leriyle yüklenir.

## Notlar

- Nöbet takvimi (script.js) Haziran 2026 için sabitlenmiştir, güncellenmesi gerekir.
- `hakkinda.html` içeriği henüz doldurulmamıştır.
- Bazı görseller (Oral-B, Vichy vb.) harici CDN/URL'lerden yüklenir.
