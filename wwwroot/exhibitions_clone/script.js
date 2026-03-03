document.addEventListener('DOMContentLoaded', () => {

    // ===== TRANSLATION SYSTEM =====
    const translations = {
        en: {
            // Navigation
            'nav.artists': 'ARTISTS',
            'nav.exhibitions': 'EXHIBITIONS',
            'nav.viewing': 'HIGHLIGHTS',
            'nav.news': 'MATCH NEWS',
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
            'viewing.title': 'Match Highlights',
            'viewing.virtualTour': 'VIRTUAL TOUR',
            'viewing.desc1': 'Explore Tuấn Andrew Nguyễn\'s works at Frieze Seoul.',
            'viewing.desc2': 'Experience the 3D exhibition space at Galerie Quynh.',
            'viewing.enterRoom': 'Enter Room',
            'viewing.startTour': 'Start Tour',

            // News page
            'news.title': 'Match News',
            'news.readMore': 'Read more',

            // Publications page
            'publications.title': 'Publications',
            'publications.desc1': 'Solo exhibition catalog by Vy Trịnh (2024).',
            'publications.desc2': 'Solo exhibition catalog by Nguyễn Mạnh Hùng.',
            'publications.desc3': 'Monograph on artist Sandrine Llouquet.',
            'publications.desc4': 'Solo exhibition catalog Âm Sáng.',

            // About page
            'about.title': 'About Us',
            'about.p1': 'T1 Exhibition is an experiential space dedicated to celebrating the emotional and victorious journey of the world\'s premier esports organization - T1.',
            'about.p2': 'We feature exclusive installations, trophies, and behind-the-scenes moments that trace the legacy of T1 from their historic beginnings to their ongoing reign in the League of Legends competitive scene.',
            'about.p3': 'Located in the heart of Ho Chi Minh City, T1 Exhibition serves as a premier destination for fans, gamers, and professionals seeking deeper insight into the dynamic and indomitable spirit of T1 esports.',
            'viewing.hl1_title': 'T1 WIN THE 2024 WORLD CHAMPIONSHIP',
            'viewing.hl1_desc': 'Witness history as the legendary T1 roster defeats Bilibili Gaming to secure their historic 5th League of Legends World Championship at the O2 Arena in London. Faker reclaims his throne as the Unkillable Demon King, lifting his 5th Summoner\'s Cup alongside teammates Zeus, Oner, Gumayusi, and Keria.',
            'viewing.hl2_title': 'THE GLORY OF WORLDS 2023',
            'viewing.hl2_desc': 'Experience the emotion and the unforgettable hype of the 2023 Championship run where T1 dominated the competition in South Korea.',
            'viewing.hl3_title': 'FAKER\'S LEGACY - WARRIORS',
            'viewing.hl3_desc': 'Reflect on the legacy of the Greatest of All Time. His plays, his unyielding spirit, and the birth of a dynasty that continues to rule League of Legends esports.',

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
            'footer.address': '123 Esports Boulevard, Ben Nghe Ward, District 1, HCMC',
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
            'nav.viewing': 'HIGHLIGHTS',
            'nav.news': 'TIN TỨC THI ĐẤU',
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
            'viewing.title': 'Khởi Chiếu Highlights',
            'viewing.virtualTour': 'THAM QUAN VIRTUAL',
            'viewing.desc1': 'Khám phá các tác phẩm của Tuấn Andrew Nguyễn tại Frieze Seoul.',
            'viewing.desc2': 'Trải nghiệm không gian triển lãm 3D tại Galerie Quynh.',
            'viewing.enterRoom': 'Vào Phòng',
            'viewing.startTour': 'Bắt Đầu',

            // News page
            'news.title': 'Tin Tức Thi Đấu',
            'news.readMore': 'Đọc thêm',

            // Publications page
            'publications.title': 'Ấn Phẩm',
            'publications.desc1': 'Ấn phẩm triển lãm cá nhân của Vy Trịnh (2024).',
            'publications.desc2': 'Ấn phẩm triển lãm cá nhân của Nguyễn Mạnh Hùng.',
            'publications.desc3': 'Chuyên đề về nghệ sĩ Sandrine Llouquet.',
            'publications.desc4': 'Ấn phẩm triển lãm cá nhân Âm Sáng.',

            // About page
            'about.title': 'Về Chúng Tôi',
            'about.p1': 'T1 Exhibition là không gian trải nghiệm và tôn vinh hành trình thi đấu đầy cảm xúc của tổ chức Thể Thao Điện Tử hàng đầu thế giới - T1.',
            'about.p2': 'Chúng tôi mang đến các tác phẩm nghệ thuật hiện đại, cúp vô địch và những khoảnh khắc hậu trường lịch sử thể hiện lại di sản tiếp nối của T1 trong liên minh huyền thoại.',
            'about.p3': 'Tọa lạc tại trung tâm TP. Hồ Chí Minh, T1 Exhibition tiếp tục là điểm đến quan trọng cho những người hâm mộ cuồng nhiệt tận hưởng không khí thể thao năng động.',
            'viewing.hl1_title': 'T1 VÔ ĐỊCH THẾ GIỚI 2024',
            'viewing.hl1_desc': 'Chứng kiến lịch sử khi đội hình huyền thoại T1 đánh bại Bilibili Gaming để làm nên lịch sử với chức vô địch thứ 5 tại nhà thi đấu O2 ở London. Faker lấy lại ngai vàng của mình với tư cách là Quỷ Vương Bất Tử, nâng cao chiếc Cúp thứ 5 cùng các đồng đội Zeus, Oner, Gumayusi và Keria.',
            'viewing.hl2_title': 'VINH QUANG TẠI CKTG 2023',
            'viewing.hl2_desc': 'Trải nghiệm lại cảm xúc vỡ òa và những điều không thể nào quên của hành trình vô địch vĩ đại năm 2023, khi T1 thống trị giải đấu được tổ chức trên chính sân nhà Hàn Quốc.',
            'viewing.hl3_title': 'DI SẢN CỦA FAKER - WARRIORS',
            'viewing.hl3_desc': 'Nhìn lại di sản của Tuyển thủ Vĩ đại nhất mọi thời đại. Những pha xử lý, tinh thần không bỏ cuộc và sự ra đời của một triều đại tiếp tục thống trị giới Thể thao điện tử Liên Minh Huyền Thoại.',

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
                "https://commons.wikimedia.org/wiki/Special:FilePath/Players_at_T1_2023_LoL_World_Champion_V4_Ceremony.jpg"
            ]
        },
        "archive-body": {
            title: "GENIUS MONSTER",
            artist: "KERIA",
            dates: "SUPPORT",
            descKey: "ex.archivebody.desc",
            description: "Triển lãm tôn vinh khả năng kêu gọi thiên tài và bể tướng rộng không tưởng của Keria, người định nghĩa lại vai trò Hỗ Trợ.",
            media: [
                "https://commons.wikimedia.org/wiki/Special:FilePath/Keria,_2023_worlds_winning_team_interview.jpg"
            ]
        },
        "phong-chieu-mot-y-nghi": {
            title: "GOD OF THUNDER",
            artist: "ZEUS",
            dates: "TOP LANER",
            descKey: "ex.thinspace.desc",
            description: "Chứng kiến sức mạnh càn quét của người Đi Đường Trên, Zeus, khi anh thống trị bản đồ với Jayce và Yone trứ danh.",
            media: [
                "https://commons.wikimedia.org/wiki/Special:FilePath/Zeus_2024_post-match_interview.jpg"
            ]
        },
        "chien-hay-chay": {
            title: "UNSHAKEABLE MARKSMAN",
            artist: "GUMAYUSI",
            dates: "ADC",
            descKey: "ex.chienhaychay.desc",
            description: "Sống lại những kỹ năng không thể lay chuyển và những pha outplay 1v2 khó tin của Xạ Thủ chết chóc Gumayusi.",
            media: [
                "https://commons.wikimedia.org/wiki/Special:FilePath/Gumayusi_at_2023_LCK_Awards.jpg"
            ]
        },
        "the-gioi-nhu-la-ban-nhap": {
            title: "THE JUNGLE KING",
            artist: "ONER",
            dates: "JUNGLER",
            descKey: "ex.phongchieu.desc",
            description: "Trải nghiệm những pha di chuyển bùng nổ và những cú Trừng Phạt then chốt của Oner, khẳng định sự thống trị của T1 trong khu rừng.",
            media: [
                "https://commons.wikimedia.org/wiki/Special:FilePath/Oner_in_2024.jpg"
            ]
        },
        "trang-non": {
            title: "THE UNKILLABLE DEMON KING",
            artist: "FAKER",
            dates: "MID LANER",
            descKey: "ex.trangnon.desc",
            description: "Faker trưng bày những khoảnh khắc lịch sử trong sự nghiệp thi đấu Liên Minh Huyền Thoại của mình, bao gồm các chức vô địch thế giới và các pha highlight kinh điển với Azir, Ryze, và LeBlanc.",
            media: [
                "https://commons.wikimedia.org/wiki/Special:FilePath/Faker_2020_interview.jpg",
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
                "https://commons.wikimedia.org/wiki/Special:FilePath/Players_at_T1_2023_LoL_World_Champion_V4_Ceremony.jpg"
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

    // ===== EXHIBITION FILTERS =====
    const filterBtns = document.querySelectorAll('.exhibition-filters a');
    if (filterBtns.length > 0) {
        // Assign statuses based on T1 context for demo
        exhibitionItems.forEach((item, index) => {
            if (!item.hasAttribute('data-status')) {
                // simple loop: 0 = current, 1 = past, 2 = upcoming, etc.
                const statuses = ['current', 'past', 'upcoming'];
                item.setAttribute('data-status', statuses[index % 3]);
            }
        });

        filterBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if (!btn.classList.contains('lang-btn')) { // ensure it's not lang switch
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');

                    const filter = btn.getAttribute('data-filter');

                    exhibitionItems.forEach(item => {
                        // Support hiding by toggling display
                        if (filter === 'all' || item.getAttribute('data-status') === filter) {
                            item.style.display = '';
                            item.classList.add('reveal');
                            setTimeout(() => item.classList.add('is-visible'), 50);
                        } else {
                            item.style.display = 'none';
                            item.classList.remove('is-visible');
                        }
                    });
                }
            });
        });
    }

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
