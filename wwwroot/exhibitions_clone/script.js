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
            'ex.thinspace.desc': 'Witness the unstoppable force of the Top Laner, Zeus, as he dominates the rift with his signature Jayce and Yone.',
            'ex.archivebody.desc': 'A showcase of Keria\'s genius shotcalling and unmatched champion pool, redefining the Support role.',
            'ex.phongchieu.desc': 'Experience Oner\'s explosive pathing and clutch smites that secured T1\'s dominance in the jungle.',
            'ex.chienhaychay.desc': 'Relive Gumayusi\'s unshakeable mechanics and incredible 1v2 outplays as T1\'s lethal ADC.',
            'ex.trangnon.desc': 'Faker showcases historic moments from his League of Legends career, including his incredible World Championships and iconic plays with Azir, Ryze, and LeBlanc.',
            'ex.ondadream.desc': 'A celebration of the legendary T1 roster taking the Summoner\'s Cup.'
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
            'ex.thinspace.desc': 'Chứng kiến sức mạnh càn quét của người Đi Đường Trên, Zeus, khi anh thống trị bản đồ với Jayce và Yone trứ danh.',
            'ex.archivebody.desc': 'Triển lãm tôn vinh khả năng kêu gọi thiên tài và bể tướng rộng không tưởng của Keria, người định nghĩa lại vai trò Hỗ Trợ.',
            'ex.phongchieu.desc': 'Trải nghiệm những pha di chuyển bùng nổ và những cú Trừng Phạt then chốt của Oner, khẳng định sự thống trị của T1 trong khu rừng.',
            'ex.chienhaychay.desc': 'Sống lại những kỹ năng không thể lay chuyển và những pha outplay 1v2 khó tin của Xạ Thủ chết chóc Gumayusi.',
            'ex.trangnon.desc': 'Faker trưng bày những khoảnh khắc lịch sử trong sự nghiệp thi đấu Liên Minh Huyền Thoại của mình, bao gồm các chức vô địch thế giới và các pha highlight kinh điển với Azir, Ryze, và LeBlanc.',
            'ex.ondadream.desc': 'Lễ ăn mừng đội hình T1 huyền thoại nâng cao chiếc cúp Summoner.'
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
            title: "T1 2023: ZOFGK",
            artist: "T1 ROSTER",
            dates: "Worlds 2023",
            descKey: "ex.ondadream.desc",
            description: "Lễ ăn mừng đội hình T1 huyền thoại nâng cao chiếc cúp Summoner.",
            media: [
                "https://upload.wikimedia.org/wikipedia/commons/e/ec/T1_Zeus_2022.jpg"
            ]
        },
        "archive-body": {
            title: "GENIUS MONSTER",
            artist: "KERIA",
            dates: "SUPPORT",
            descKey: "ex.archivebody.desc",
            description: "Triển lãm tôn vinh khả năng kêu gọi thiên tài và bể tướng rộng không tưởng của Keria, người định nghĩa lại vai trò Hỗ Trợ.",
            media: [
                "https://upload.wikimedia.org/wikipedia/commons/c/cb/T1_Keria_2022.jpg"
            ]
        },
        "phong-chieu-mot-y-nghi": {
            title: "GOD OF THUNDER",
            artist: "ZEUS",
            dates: "TOP LANER",
            descKey: "ex.thinspace.desc",
            description: "Chứng kiến sức mạnh càn quét của người Đi Đường Trên, Zeus, khi anh thống trị bản đồ với Jayce và Yone trứ danh.",
            media: [
                "https://upload.wikimedia.org/wikipedia/commons/e/ec/T1_Zeus_2022.jpg"
            ]
        },
        "chien-hay-chay": {
            title: "UNSHAKEABLE MARKSMAN",
            artist: "GUMAYUSI",
            dates: "ADC",
            descKey: "ex.chienhaychay.desc",
            description: "Sống lại những kỹ năng không thể lay chuyển và những pha outplay 1v2 khó tin của Xạ Thủ chết chóc Gumayusi.",
            media: [
                "https://upload.wikimedia.org/wikipedia/commons/7/77/T1_Gumayusi_2022.jpg"
            ]
        },
        "the-gioi-nhu-la-ban-nhap": {
            title: "THE JUNGLE KING",
            artist: "ONER",
            dates: "JUNGLER",
            descKey: "ex.phongchieu.desc",
            description: "Trải nghiệm những pha di chuyển bùng nổ và những cú Trừng Phạt then chốt của Oner, khẳng định sự thống trị của T1 trong khu rừng.",
            media: [
                "https://upload.wikimedia.org/wikipedia/commons/1/15/T1_Oner_2022.jpg"
            ]
        },
        "trang-non": {
            title: "THE UNKILLABLE DEMON KING",
            artist: "FAKER",
            dates: "MID LANER",
            descKey: "ex.trangnon.desc",
            description: "Faker trưng bày những khoảnh khắc lịch sử trong sự nghiệp thi đấu Liên Minh Huyền Thoại của mình, bao gồm các chức vô địch thế giới và các pha highlight kinh điển với Azir, Ryze, và LeBlanc.",
            media: [
                "https://upload.wikimedia.org/wikipedia/commons/4/4b/Faker_2020_interview.jpg",
                "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80"
            ]
        },
        "on-da-dream": {
            title: "T1 2024: BACK TO BACK",
            artist: "T1 ROSTER",
            dates: "Worlds 2024",
            descKey: "ex.ondadream.desc",
            description: "Lễ ăn mừng đội hình T1 huyền thoại bảo vệ thành công chiếc cúp vô địch thế giới.",
            media: [
                "https://upload.wikimedia.org/wikipedia/commons/e/ec/T1_Zeus_2022.jpg"
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
