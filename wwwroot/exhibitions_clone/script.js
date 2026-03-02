document.addEventListener('DOMContentLoaded', () => {

    // 1. Exhibition Metadata
    const exhibitionsData = {
        "thinspace": {
            title: "T H I N S P A C E",
            artist: "CIAN DUGGAN",
            dates: "17 JANUARY - 28 FEBRUARY 2026",
            description: "Triển lãm 'T H I N S P A C E' của Cian Duggan khám phá khái niệm về 'không gian mỏng' trong thần thoại Celtic—những nơi ranh giới giữa các thế giới trở nên mong manh.",
            media: [
                "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=80"
            ]
        },
        "archive-body": {
            title: "THE ARCHIVE BODY",
            artist: "TRIỂN LÃM NHÓM",
            dates: "2 - 25 OCTOBER 2025",
            description: "Một triển lãm nhóm đương đại khám phá cơ thể con người như một kho lưu trữ sống của lịch sử, ký ức và trải nghiệm cá nhân.",
            media: [
                "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80"
            ]
        },
        "phong-chieu": {
            title: "PHÓNG CHIẾU MỘT Ý NGHĨ",
            artist: "NGÔ ĐÌNH BẢO CHÂU",
            dates: "9 AUGUST - 10 SEPTEMBER 2025",
            description: "Dưới sự giám tuyển của Thái Hà, Ngô Đình Bảo Châu mang đến những sắp đặt ánh sáng và hình thể hiển hiện trong không gian galerie.",
            media: [
                "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80"
            ]
        },
        "chien-hay-chay": {
            title: "CHIẾN HAY CHẠY HAY TRÔI HAY CHÌM",
            artist: "TUẤN ANDREW NGUYỄN",
            dates: "24 DECEMBER 2024 - 8 MARCH 2025",
            description: "Một dự án quan trọng nghiên cứu về di cư, ký ức và sức nặng vật chất của lịch sử thông qua phim và điêu khắc.",
            media: [
                "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80"
            ]
        },
        "trang-non": {
            title: "TRĂNG NON",
            artist: "TRẦN VĂN THẢO",
            dates: "15 NOVEMBER 2025 - 3 JANUARY 2026",
            description: "Trần Văn Thảo quay trở lại với những bức họa trừu tượng lấy cảm hứng từ chu kỳ của mặt trăng.",
            media: [
                "https://images.unsplash.com/photo-1541701494587-cb58502866ab?auto=format&fit=crop&w=1200&q=80"
            ]
        },
        "on-da-dream": {
            title: "ON DA DREAM",
            artist: "VY TRỊNH",
            dates: "10 AUGUST - 12 OCTOBER 2024",
            description: "Triển lãm cá nhân giới thiệu các tác phẩm điêu khắc tái hiện kết cấu công nghiệp đô thị.",
            media: [
                "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=80"
            ]
        }
    };

    // 2. Modal Logic
    const modal = document.getElementById('detail-modal');
    const modalClose = document.getElementById('modal-close');
    const exhibitionItems = document.querySelectorAll('.exhibition-item');

    const openModal = (id) => {
        const data = exhibitionsData[id];
        if (!data) return;

        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-artist').textContent = data.artist;
        document.getElementById('modal-dates').textContent = data.dates;
        document.getElementById('modal-description').textContent = data.description;

        const mediaList = document.getElementById('modal-media-list');
        mediaList.innerHTML = data.media.map(url => `
            <div class="modal-media-item">
                <img src="${url}" alt="${data.title}">
            </div>
        `).join('');

        modal.style.display = 'block';
        setTimeout(() => modal.classList.add('is-active'), 10);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        if (!modal) return;
        modal.classList.remove('is-active');
        setTimeout(() => {
            modal.style.display = 'none';
        }, 500);
        document.body.style.overflow = '';
    };

    exhibitionItems.forEach(item => {
        item.addEventListener('click', () => {
            const id = item.getAttribute('data-id');
            openModal(id);
        });
    });

    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }

    // Close modal on escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal && modal.classList.contains('is-active')) {
            closeModal();
        }
    });

    // 3. Mobile Menu Toggle Logic
    const menuToggleBtn = document.querySelector('.mobile-menu-toggle');
    const menuCloseBtn = document.querySelector('.mobile-menu-close');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');

    if (menuToggleBtn && menuCloseBtn && mobileNavOverlay) {
        menuToggleBtn.addEventListener('click', () => {
            mobileNavOverlay.classList.add('is-active');
            document.body.style.overflow = 'hidden';
        });

        menuCloseBtn.addEventListener('click', () => {
            mobileNavOverlay.classList.remove('is-active');
            document.body.style.overflow = '';
        });
    }

    // 4. Header Scroll Effect
    const header = document.querySelector('.site-header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                header.style.borderBottom = '1px solid var(--color-border)';
            } else {
                header.style.borderBottom = '1px solid transparent';
            }
        });
    }

    // 5. Image Error Handling
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function () {
            this.style.opacity = '0.5';
            this.style.filter = 'grayscale(1)';
            // Fallback for broken images if needed
        };
    });

    // 6. Scroll Reveal Animation Logic
    const revealCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    });

    // Auto-apply reveal class to grid items and other elements
    const elementsToReveal = document.querySelectorAll('.exhibition-item, .page-title, .exhibition-filters, .footer-inner, .page-content > div, .page-content p');
    elementsToReveal.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

});
