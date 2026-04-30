const slides = [
    {
        title: "Discover ethnically<br>cultivated and Fair-Trade gifts",
        img: "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1600&q=80"
    },
    {
        title: "New Summer<br>Collection 2026",
        img: "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1600" // Gunakan gambar resolusi tinggi
    },
    {
        title: "Exclusive Deals<br>on Men's Fashion",
        img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1600" // Gunakan gambar resolusi tinggi
    }
];



let currentSlide = 0;
const heroTitle = document.querySelector('.hero-content h1');
const heroImage = document.querySelector('.hero-visual img');
const dots = document.querySelectorAll('.dot');

function changeSlide(index) {
    // 1. Reset class active di dots
    dots.forEach(d => d.classList.remove('active'));
    dots[index].classList.add('active');

    // 2. Efek Fade Out (animasi keluar)
    heroTitle.style.opacity = '0';
    heroTitle.style.transform = 'translateY(20px)';
    heroImage.style.opacity = '0';
    heroImage.style.transform = 'scale(0.95)';

    setTimeout(() => {
        // 3. Ganti Konten
        heroTitle.innerHTML = slides[index].title;
        heroImage.src = slides[index].img;

        // 4. Efek Fade In (animasi masuk)
        heroTitle.style.opacity = '1';
        heroTitle.style.transform = 'translateY(0)';
        heroImage.style.opacity = '1';
        heroImage.style.transform = 'scale(1)';
    }, 500);
}

// Fungsi untuk slide otomatis
function autoSlide() {
    currentSlide++;
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    changeSlide(currentSlide);
}

// Jalankan otomatis setiap 5 detik
let slideInterval = setInterval(autoSlide, 5000);

// Berhenti otomatis jika user klik dot secara manual, lalu jalan lagi
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval); // Stop interval lama
        currentSlide = index;
        changeSlide(index);
        slideInterval = setInterval(autoSlide, 5000); // Mulai interval baru
    });
});

// Tambahkan efek Sticky Navbar saat scroll (seperti sebelumnya)
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 40px';
        header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.05)';
    } else {
        header.style.padding = '15px 40px';
        header.style.boxShadow = 'none';
    }
});

// --- LOGIKA GANTI BAHASA ---
const langMenu = document.querySelectorAll('#lang-menu a');
const currentLangText = document.querySelector('.current-lang');
const currentLangFlag = document.getElementById('lang-flag');

langMenu.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Biar gak reload halaman
        
        // Ambil data dari atribut yang diklik
        const newLang = item.getAttribute('data-lang');
        const newFlag = item.getAttribute('data-flag');
        
        // Tukar teks dan benderanya
        currentLangText.innerText = newLang;
        currentLangFlag.src = newFlag;
    });
});

// --- LOGIKA GANTI MATA UANG ---
const currMenu = document.querySelectorAll('#curr-menu a');
const currentCurrText = document.querySelector('.current-curr');

currMenu.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        
        const newCurr = item.getAttribute('data-curr');
        currentCurrText.innerText = newCurr;
    });
});

const searchInput = document.querySelector('.search-input');
const searchContainer = document.querySelector('.search-container');

searchContainer.addEventListener('mouseenter', () => {
    searchInput.focus();
});

const allProducts = {
    handbags: [
        { name: "Simple Modern Canvas Handbag", price: "$75.00", badge: "New", type: "new", img: "asset/tas.jpg" },
        { name: "New Luxury High Quality Handbags", price: "$75.00", badge: "Sale", type: "sale", img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=500&q=80" },
        { name: "Freedom Style Handbag for Women", price: "$75.00", badge: "", type: "", img: "asset/tas1.jpg" },
        { name: "Attractive Elegant Men Bag in Black", price: "$75.00", badge: "Sale", type: "sale", img: "asset/tas2.jpg" },
    ],
    mens: [
        { name: "French Perfume Men New Arrival", price: "$75.00", badge: "New", type: "new", img: "asset/parfum.avif" },
        { name: "Top World Classic Italian Shoes", price: "$75.00", badge: "Sale", type: "sale", img: "asset/sepatu.jpg" },
        { name: "Casual Brown Loafers", price: "$80.00", badge: "", type: "", img: "asset/casual.jpg" },
        { name: "Premium Slim Fit Shirt", price: "$45.00", badge: "New", type: "new", img: "asset/baju.jpg" },
    ],
    womens: [
        { name: "Elegant Summer Dress", price: "$99.00", badge: "New", type: "new", img: "asset/dress.webp" },
        { name: "Classic Red High Heels", price: "$85.00", badge: "Sale", type: "sale", img: "asset/heels.jpg" },
        { name: "Silk Floral Scarf", price: "$25.00", badge: "", type: "", img: "asset/scraf.jpg" },
        { name: "Denim Jacket Vintage", price: "$70.00", badge: "New", type: "new", img: "asset/jacket.jpg" },
    ],
    accessories: [
        { name: "Leather Travel Wallet", price: "$40.00", badge: "New", type: "new", img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400" },
        { name: "Classic Fedora Hat", price: "$35.00", badge: "Sale", type: "sale", img: "https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=400" },
        { name: "Silver Bracelet Set", price: "$50.00", badge: "", type: "", img: "asset/gelang.jpg" },
        { name: "Smartphone Leather Case", price: "$20.00", badge: "New", type: "new", img: "asset/case.jpg" },
    ], // Akan diisi otomatis oleh script
};

// Gabungkan semua produk untuk kategori 'VIEW ALL'
allProducts.all = [
    ...allProducts.handbags,
    ...allProducts.mens,
    ...allProducts.womens,
    ...allProducts.accessories
];

// Pastikan fungsi ini terpanggil di bawah variabel allProducts
function filterProduct(category, btnElement) {
    // 1. Ambil semua tombol yang punya class 'tab-btn'
    const buttons = document.querySelectorAll('.tab-btn');

    // 2. Hapus class 'active' dari SEMUA tombol terlebih dahulu
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 3. Tambahkan class 'active' HANYA ke tombol yang baru saja diklik
    if (btnElement) {
        btnElement.classList.add('active');
    }

    // 4. Logika ganti gambar produk (seperti sebelumnya)
    renderProducts(category); 
}

// Fungsi pembantu untuk menampilkan gambar
function renderProducts(category) {
    const container = document.getElementById('product-container');
    
    // 1. WAJIB: Hapus semua isi lama sebelum menggambar yang baru
    container.innerHTML = ""; 

    let items = [];

    if (category === 'all') {
        // 2. Ambil semua item dari semua kategori, lalu gabungkan jadi satu array
        // Kita gunakan Set untuk memastikan tidak ada item yang terduplikasi secara tidak sengaja
        const rawItems = Object.values(allProducts).flat();
        
        // Filter agar tidak ada nama produk yang sama muncul dua kali
        items = rawItems.filter((item, index, self) =>
            index === self.findIndex((t) => t.name === item.name)
        );
    } else {
        // Ambil kategori spesifik
        items = allProducts[category] || [];
    }

    // Tampilkan ke HTML
    items.forEach(item => {
        container.innerHTML += `
            <div class="item-card">
                ${item.badge ? `<div class="tag-badge ${item.type}">${item.badge}</div>` : ''}
                <div class="product-thumb">
                    <img src="${item.img}" class="item-img">
                </div>
                <h3 class="item-name">${item.name}</h3>
                <div class="item-footer">
                    <span class="item-price">${item.price}</span>
                    <button onclick="addToCart('${item.name}', '${item.price}')" class="cart-btn-small">
                        <i class="fa fa-shopping-basket"></i>
                    </button>
                </div>
            </div>
        `;
    });
}

// Simpan data di memori sementara
let totalItems = 0;
let totalPrice = 0;

function addToCart(productName, productPrice) {
    // 1. Ambil elemen HTML-nya
    const countElement = document.getElementById('cart-count');
    const totalElement = document.getElementById('cart-total');

    if (!countElement || !totalElement) {
        console.error("EROR: ID 'cart-count' atau 'cart-total' tidak ditemukan di HTML kamu!");
        return;
    }

    // 2. Proses perhitungan
    totalItems += 1;
    
    // Hilangkan simbol $ dan ubah teks harga jadi angka
    let cleanPrice = parseFloat(productPrice.replace(/[^\d.]/g, '')); 
    totalPrice += cleanPrice;

    // 3. Update tampilan secara real-time
    countElement.innerText = totalItems;
    totalElement.innerText = '$' + totalPrice.toFixed(2);

    // 4. Notifikasi (biar kamu tau fungsinya jalan)
    console.log("Berhasil tambah: " + productName);
}

// Potongan kodingan di dalam loop forEach JavaScript kamu:
container.innerHTML += `
    <div class="item-card">
        <div class="img-wrapper">
            <img src="${item.img}" alt="${item.name}">
        </div>
        <div class="product-info">
            <h3>${item.name}</h3>
            </div>
    </div>
`;

document.addEventListener("DOMContentLoaded", function() {
    // 1. DAFTAR TARGET: Kita cari elemen tanpa butuh class khusus
    // Mencari semua judul, gambar, kartu produk, dan kolom fitur
    const selectors = [
        "section h2", "section h5", "section p", 
        ".product-card", ".feature-item", "img", 
        ".about-image-wrapper", ".excellence-badge",
        ".blog-post", "footer .container"
    ];

    const elementsToAnimate = [];
    selectors.forEach(selector => {
        document.querySelectorAll(selector).forEach(el => {
            el.classList.add("js-reveal"); // Tempelkan class animasi secara otomatis
            elementsToAnimate.push(el);
        });
    });

    // 2. DETEKSI SCROLL (Intersection Observer - Lebih Ringan)
    const observerOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Hitung urutan (stagger) agar muncul bergantian
                const index = elementsToAnimate.indexOf(entry.target);
                
                // Memberikan jeda waktu antar elemen yang berdekatan
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, 100); 

                revealObserver.unobserve(entry.target); // Hanya animasi sekali
            }
        });
    }, observerOptions);

    elementsToAnimate.forEach(el => revealObserver.observe(el));

    // 3. EFEK PARALLAX PADA BANNER UTAMA (Otomatis)
    window.addEventListener("scroll", () => {
        const scrolled = window.pageYOffset;
        const bannerImg = document.querySelector(".main-banner img");
        if (bannerImg) {
            bannerImg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Cari Navbar dan Banner (Sesuaikan class-nya jika berbeda)
    const header = document.querySelector("nav");
    const banner = document.querySelector(".main-banner") || document.querySelector("header + section");

    if (header) {
        header.style.opacity = "0";
        header.style.transform = "translateY(-20px)";
        header.style.transition = "all 1s ease";
        
        setTimeout(() => {
            header.style.opacity = "1";
            header.style.transform = "translateY(0)";
        }, 300);
    }

    if (banner) {
        banner.style.opacity = "0";
        banner.style.filter = "blur(10px)";
        banner.style.transition = "all 1.5s ease";
        
        setTimeout(() => {
            banner.style.opacity = "1";
            banner.style.filter = "blur(0)";
        }, 800);
    }
});

const elements = document.querySelectorAll(".item-card, .feature-item, .testi-card");

window.addEventListener("scroll", () => {
    elements.forEach(el => {
        const pos = el.getBoundingClientRect().top;
        const screen = window.innerHeight;

        if(pos < screen - 100){
            el.classList.add("show");
        }
    });
});

document.querySelectorAll(".add-cart").forEach(btn => {
    btn.addEventListener("click", function(e) {
        const card = this.closest(".item-card");
        const img = card.querySelector("img");

        const flyingImg = img.cloneNode();
        flyingImg.style.position = "fixed";
        flyingImg.style.zIndex = "999";
        flyingImg.style.width = "80px";
        flyingImg.style.borderRadius = "10px";

        const rect = img.getBoundingClientRect();
        flyingImg.style.left = rect.left + "px";
        flyingImg.style.top = rect.top + "px";

        document.body.appendChild(flyingImg);

        const cart = document.querySelector(".cart-wrapper");
        const cartRect = cart.getBoundingClientRect();

        setTimeout(() => {
            flyingImg.style.transition = "1s cubic-bezier(.4,-0.3,.3,1.5)";
            flyingImg.style.left = cartRect.left + "px";
            flyingImg.style.top = cartRect.top + "px";
            flyingImg.style.width = "20px";
            flyingImg.style.opacity = "0.5";
        }, 50);

        setTimeout(() => {
            flyingImg.remove();

            let count = document.getElementById("cart-count");
            count.innerText = parseInt(count.innerText) + 1;
        }, 1000);
    });
});

document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", function(e) {
        const circle = document.createElement("span");
        circle.classList.add("ripple");

        const rect = this.getBoundingClientRect();
        circle.style.left = e.clientX - rect.left + "px";
        circle.style.top = e.clientY - rect.top + "px";

        this.appendChild(circle);

        setTimeout(() => circle.remove(), 600);
    });
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        target.scrollIntoView({ behavior: "smooth" });
    });
});

window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(sec => {
        const top = window.scrollY;
        const offset = sec.offsetTop - 100;
        const height = sec.offsetHeight;
        const id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            document.querySelectorAll(".menu a").forEach(link => {
                link.classList.remove("active");
                if(link.getAttribute("href") === "#" + id){
                    link.classList.add("active");
                }
            });
        }
    });
});

document.querySelectorAll(".item-card").forEach(card => {
    card.addEventListener("mousemove", (e) => {
        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;

        let rotateX = -(y / rect.height - 0.5) * 10;
        let rotateY = (x / rect.width - 0.5) * 10;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateX(0) rotateY(0) scale(1)";
    });
});
cart.classList.add("cart-bounce");
setTimeout(() => cart.classList.remove("cart-bounce"), 500);

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 50) {
            el.classList.add("active");
        } else {
            el.classList.remove("active"); // opsional
        }
    });
}

// PENTING: jalan saat load juga
window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);