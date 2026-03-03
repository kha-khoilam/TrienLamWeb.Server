document.addEventListener('DOMContentLoaded', () => {

    // ===== TRANSLATION SYSTEM =====
    const translations = {
        en: {
            // Navigation
            'nav.artists': 'ARTISTS',
            'nav.exhibitions': 'EXHIBITIONS',
            'nav.viewing': 'VIEWING ROOMS',
            'nav.news': 'NEWS',
            'nav.publications': 'PUBLICATIONS',
            'nav.about': 'ABOUT US',
            'nav.contact': 'CONTACT',

            // Index / Exhibition filters
            'index.title': 'Exhibitions',
            'filter.all': 'All',
            'filter.current': 'Current',
            'filter.upcoming': 'Upcoming',
            'filter.past': 'Past',

            // Artists page
            'artists.title': 'Artists',
            'artists.viewArtist': 'View Artist',

            // Viewing Rooms page
            'viewing.title': 'Viewing Rooms',
            'viewing.virtualTour': 'VIRTUAL TOUR',
            'viewing.desc1': 'Explore Tuấn Andrew Nguyễn\'s works at Frieze Seoul.',
            'viewing.desc2': 'Experience the 3D exhibition space at Galerie Quynh.',
            'viewing.enterRoom': 'Enter Room',
            'viewing.startTour': 'Start Tour',

            // News page
            'news.title': 'News',
            'news.readMore': 'Read more',

            // Publications page
            'publications.title': 'Publications',
            'publications.desc1': 'Solo exhibition catalog by Vy Trịnh (2024).',
            'publications.desc2': 'Solo exhibition catalog by Nguyễn Mạnh Hùng.',
            'publications.desc3': 'Monograph on artist Sandrine Llouquet.',
            'publications.desc4': 'Solo exhibition catalog Âm Sáng.',

            // About page
            'about.title': 'About Us',
            'about.p1': 'Founded with the mission to connect Vietnamese contemporary art with the public, Art Exhibition is a leading contemporary art space in Ho Chi Minh City. Over the years, we have played a vital role in fostering art development through educational exhibitions and cultural dialogues.',
            'about.p2': 'We represent a group of talented artists whose practices challenge traditional notions and explore new boundaries in aesthetics and creative ideas.',
            'about.p3': 'Located in the heart of Ho Chi Minh City, Art Exhibition continues to be an important destination for art lovers, collectors, and professionals seeking a deeper understanding of Vietnam\'s dynamic cultural landscape.',

            // Contact page
            'contact.title': 'Contact',
            'contact.infoTitle': 'CONTACT INFORMATION',
            'contact.addressLabel': 'Address:',
            'contact.addressValue': '123 Art Street, Ben Nghe Ward, District 1, Ho Chi Minh City',
            'contact.phoneLabel': 'Phone:',
            'contact.hoursTitle': 'OPENING HOURS',
            'contact.hoursWeekday': 'Tuesday – Saturday: 10:00 AM – 7:00 PM',
            'contact.hoursClosed': 'Closed on Sunday and Monday',

            // Footer
            'footer.address': '123 Art Street, Ben Nghe Ward, District 1, Ho Chi Minh City',
            'footer.hours': 'Open: Tuesday – Saturday, 10:00 AM – 7:00 PM',
            'footer.privacy': 'Privacy Policy',

            // Exhibition descriptions (modal)
            'ex.thinspace.desc': 'Cian Duggan\'s "T H I N S P A C E" explores the concept of thin places in Celtic mythology—where the boundaries between worlds become fragile.',
            'ex.archivebody.desc': 'A contemporary group exhibition exploring the human body as a living archive of history, memory, and personal experience.',
            'ex.phongchieu.desc': 'Curated by Thai Ha, Ngô Đình Bảo Châu brings installations of light and form into the gallery space.',
            'ex.chienhaychay.desc': 'An important project examining migration, memory, and the material weight of history through film and sculpture.',
            'ex.trangnon.desc': 'Faker showcases historic moments from his League of Legends career, including his incredible World Championships and iconic plays with Azir, Ryze, and LeBlanc.',
            'ex.ondadream.desc': 'A solo show presenting sculptures that reimagine urban industrial textures.'
        },
        vi: {
            // Navigation
            'nav.artists': 'NGHỆ SĨ',
            'nav.exhibitions': 'TRIỂN LÃM',
            'nav.viewing': 'PHÒNG XEM',
            'nav.news': 'TIN TỨC',
            'nav.publications': 'ẤN PHẨM',
            'nav.about': 'VỀ CHÚNG TÔI',
            'nav.contact': 'LIÊN HỆ',

            // Index / Exhibition filters
            'index.title': 'Triển lãm',
            'filter.all': 'Tất cả',
            'filter.current': 'Hiện tại',
            'filter.upcoming': 'Sắp tới',
            'filter.past': 'Đã qua',

            // Artists page
            'artists.title': 'Nghệ Sĩ',
            'artists.viewArtist': 'Xem Nghệ Sĩ',

            // Viewing Rooms page
            'viewing.title': 'Phòng Xem',
            'viewing.virtualTour': 'THAM QUAN VIRTUAL',
            'viewing.desc1': 'Khám phá các tác phẩm của Tuấn Andrew Nguyễn tại Frieze Seoul.',
            'viewing.desc2': 'Trải nghiệm không gian triển lãm 3D tại Galerie Quynh.',
            'viewing.enterRoom': 'Vào Phòng',
            'viewing.startTour': 'Bắt Đầu',

            // News page
            'news.title': 'Tin Tức',
            'news.readMore': 'Đọc thêm',

            // Publications page
            'publications.title': 'Ấn Phẩm',
            'publications.desc1': 'Ấn phẩm triển lãm cá nhân của Vy Trịnh (2024).',
            'publications.desc2': 'Ấn phẩm triển lãm cá nhân của Nguyễn Mạnh Hùng.',
            'publications.desc3': 'Chuyên đề về nghệ sĩ Sandrine Llouquet.',
            'publications.desc4': 'Ấn phẩm triển lãm cá nhân Âm Sáng.',

            // About page
            'about.title': 'Về Chúng Tôi',
            'about.p1': 'Được thành lập với sứ mệnh kết nối nghệ thuật đương đại Việt Nam với công chúng, Art Exhibition là không gian trưng bày nghệ thuật đương đại hàng đầu tại TP. Hồ Chí Minh. Trong suốt thời gian qua, chúng tôi đã đóng vai trò quan trọng trong việc thúc đẩy sự phát triển của nghệ thuật thông qua các triển lãm giáo dục và đối thoại văn hóa.',
            'about.p2': 'Chúng tôi đại diện cho một nhóm các nghệ sĩ tài năng, những người có thực hành nghệ thuật thách thức các quan niệm truyền thống và khám phá những ranh giới mới của thẩm mỹ và ý tưởng sáng tạo.',
            'about.p3': 'Tọa lạc tại trung tâm TP. Hồ Chí Minh, Art Exhibition tiếp tục là điểm đến quan trọng cho những người yêu nghệ thuật, các nhà sưu tập và các chuyên gia muốn tìm hiểu sâu hơn về bối cảnh văn hóa năng động của Việt Nam.',

            // Contact page
            'contact.title': 'Liên Hệ',
            'contact.infoTitle': 'THÔNG TIN LIÊN HỆ',
            'contact.addressLabel': 'Địa chỉ:',
            'contact.addressValue': '123 Đường Nghệ Thuật, Phường Bến Nghé, Quận 1, Tp. HCM',
            'contact.phoneLabel': 'Điện thoại:',
            'contact.hoursTitle': 'GIỜ MỞ CỬA',
            'contact.hoursWeekday': 'Thứ Ba – Thứ Bảy: 10:00 – 19:00',
            'contact.hoursClosed': 'Đóng cửa Chủ Nhật và Thứ Hai',

            // Footer
            'footer.address': '123 Đường Nghệ Thuật, Phường Bến Nghé, Quận 1, TP. Hồ Chí Minh',
            'footer.hours': 'Mở cửa: Thứ Ba – Thứ Bảy, 10:00 – 19:00',
            'footer.privacy': 'Chính sách bảo mật',

            // Exhibition descriptions (modal)
            'ex.thinspace.desc': 'Triển lãm \'T H I N S P A C E\' của Cian Duggan khám phá khái niệm về \'không gian mỏng\' trong thần thoại Celtic—những nơi ranh giới giữa các thế giới trở nên mong manh.',
            'ex.archivebody.desc': 'Một triển lãm nhóm đương đại khám phá cơ thể con người như một kho lưu trữ sống của lịch sử, ký ức và trải nghiệm cá nhân.',
            'ex.phongchieu.desc': 'Dưới sự giám tuyển của Thái Hà, Ngô Đình Bảo Châu mang đến những sắp đặt ánh sáng và hình thể hiển hiện trong không gian galerie.',
            'ex.chienhaychay.desc': 'Một dự án quan trọng nghiên cứu về di cư, ký ức và sức nặng vật chất của lịch sử thông qua phim và điêu khắc.',
            'ex.trangnon.desc': 'Faker trưng bày những khoảnh khắc lịch sử trong sự nghiệp thi đấu Liên Minh Huyền Thoại của mình, bao gồm các chức vô địch thế giới và các pha highlight kinh điển với Azir, Ryze, và LeBlanc.',
            'ex.ondadream.desc': 'Triển lãm cá nhân giới thiệu các tác phẩm điêu khắc tái hiện kết cấu công nghiệp đô thị.'
        }
    };

    // Get current language from localStorage or default to 'vi'
    let currentLang = localStorage.getItem('site-lang') || 'vi';

    // Apply translations to all elements with data-i18n
    function applyTranslations(lang) {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
            }
        });

        // Update html lang attribute
        document.documentElement.lang = lang === 'vi' ? 'vi' : 'en';

        // Update lang buttons
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
    }

    // Initialize language on page load
    applyTranslations(currentLang);

    // Language toggle click handler
    document.addEventListener('click', (e) => {
        const langBtn = e.target.closest('.lang-btn');
        if (langBtn) {
            e.preventDefault();
            const newLang = langBtn.getAttribute('data-lang');
            if (newLang !== currentLang) {
                currentLang = newLang;
                localStorage.setItem('site-lang', newLang);
                applyTranslations(newLang);
            }
        }
    });


    // ===== EXHIBITION DATA =====
    const exhibitionsData = {
        "thinspace": {
            title: "T H I N S P A C E",
            artist: "CIAN DUGGAN",
            dates: "17 JANUARY - 28 FEBRUARY 2026",
            descKey: "ex.thinspace.desc",
            description: "Triển lãm 'T H I N S P A C E' của Cian Duggan khám phá khái niệm về 'không gian mỏng' trong thần thoại Celtic—những nơi ranh giới giữa các thế giới trở nên mong manh.",
            media: [
                "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1200&q=80"
            ]
        },
        "archive-body": {
            title: "THE ARCHIVE BODY",
            artist: "TRIỂN LÃM NHÓM",
            dates: "2 - 25 OCTOBER 2025",
            descKey: "ex.archivebody.desc",
            description: "Một triển lãm nhóm đương đại khám phá cơ thể con người như một kho lưu trữ sống của lịch sử, ký ức và trải nghiệm cá nhân.",
            media: [
                "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=1200&q=80"
            ]
        },
        "phong-chieu": {
            title: "PHÓNG CHIẾU MỘT Ý NGHĨ",
            artist: "NGÔ ĐÌNH BẢO CHÂU",
            dates: "9 AUGUST - 10 SEPTEMBER 2025",
            descKey: "ex.phongchieu.desc",
            description: "Dưới sự giám tuyển của Thái Hà, Ngô Đình Bảo Châu mang đến những sắp đặt ánh sáng và hình thể hiển hiện trong không gian galerie.",
            media: [
                "https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=1200&q=80"
            ]
        },
        "chien-hay-chay": {
            title: "CHIẾN HAY CHẠY HAY TRÔI HAY CHÌM",
            artist: "TUẤN ANDREW NGUYỄN",
            dates: "24 DECEMBER 2024 - 8 MARCH 2025",
            descKey: "ex.chienhaychay.desc",
            description: "Một dự án quan trọng nghiên cứu về di cư, ký ức và sức nặng vật chất của lịch sử thông qua phim và điêu khắc.",
            media: [
                "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=1200&q=80"
            ]
        },
        "trang-non": {
            title: "THE UNKILLABLE DEMON KING",
            artist: "FAKER",
            dates: "15 NOVEMBER 2025 - 3 JANUARY 2026",
            descKey: "ex.trangnon.desc",
            description: "Faker trưng bày những khoảnh khắc lịch sử trong sự nghiệp thi đấu Liên Minh Huyền Thoại của mình, bao gồm các chức vô địch thế giới và các pha highlight kinh điển với Azir, Ryze, và LeBlanc.",
            media: [
                "https://upload.wikimedia.org/wikipedia/commons/4/4b/Faker_2020_interview.jpg",
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
            ]
        },
        "on-da-dream": {
            title: "ON DA DREAM",
            artist: "VY TRỊNH",
            dates: "10 AUGUST - 12 OCTOBER 2024",
            descKey: "ex.ondadream.desc",
            description: "Triển lãm cá nhân giới thiệu các tác phẩm điêu khắc tái hiện kết cấu công nghiệp đô thị.",
            media: [
                "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=80"
            ]
        }
    };

    // ===== MODAL LOGIC =====
    const modal = document.getElementById('detail-modal');
    const modalClose = document.getElementById('modal-close');
    const exhibitionItems = document.querySelectorAll('.exhibition-item');

    const openModal = (id) => {
        const data = exhibitionsData[id];
        if (!data) return;

        document.getElementById('modal-title').textContent = data.title;
        document.getElementById('modal-artist').textContent = data.artist;
        document.getElementById('modal-dates').textContent = data.dates;

        // Use translated description
        const descText = (translations[currentLang] && translations[currentLang][data.descKey]) || data.description;
        document.getElementById('modal-description').textContent = descText;

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
            if (id) openModal(id);
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

    // ===== MOBILE MENU =====
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

    // ===== HEADER SCROLL EFFECT =====
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

    // ===== IMAGE ERROR HANDLING =====
    document.querySelectorAll('img').forEach(img => {
        img.onerror = function () {
            this.style.opacity = '0.5';
            this.style.filter = 'grayscale(1)';
        };
    });

    // ===== SCROLL REVEAL =====
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

    const elementsToReveal = document.querySelectorAll('.exhibition-item, .page-title, .exhibition-filters, .footer-inner, .page-content > div, .page-content p');
    elementsToReveal.forEach(el => {
        el.classList.add('reveal');
        revealObserver.observe(el);
    });

});
