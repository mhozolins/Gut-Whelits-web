// ===== HOME CAROUSEL =====
const homeSlides = [
    { img: 'Pictures/mhozolins.jpeg', title: 'Miks Henrijs Ozolins', desc: 'Programmer from Latvia · Erasmus+ participant' },
    { img: 'Pictures/group.jpeg', title: 'Our Group', desc: 'International team of students and mentors' },
    { img: 'Pictures/school.jpeg', title: 'Vocational Secondary School "Victoria"', desc: 'My school in Latvia – programming & IT' },
    { img: 'Pictures/germany.jpeg', title: 'Gut Whelitz, Germany', desc: 'Host organization and internship destination' }
];

const homeTrack = document.getElementById('homeCarouselTrack');
const homeDots = document.getElementById('homeCarouselDots');
const homePrev = document.getElementById('homeCarouselPrev');
const homeNext = document.getElementById('homeCarouselNext');
let homeIndex = 0;
let homeInterval;

function renderHomeSlides() {
    homeTrack.innerHTML = '';
    homeDots.innerHTML = '';
    homeSlides.forEach((s, i) => {
        const div = document.createElement('div');
        div.className = 'home-slide';
        div.innerHTML = `
            <img src="${s.img}" alt="${s.title}" loading="lazy" />
            <div class="overlay-text"><h3>${s.title}</h3><p>${s.desc}</p></div>
        `;
        homeTrack.appendChild(div);
        const dot = document.createElement('span');
        dot.addEventListener('click', () => goHomeSlide(i));
        homeDots.appendChild(dot);
    });
}

function goHomeSlide(i) {
    homeIndex = i;
    homeTrack.style.transform = `translateX(-${i * 100}%)`;
    document.querySelectorAll('.home-carousel-dots span').forEach((d, idx) => d.classList.toggle('active', idx === i));
}

function nextHomeSlide() { goHomeSlide((homeIndex + 1) % homeSlides.length); }
function prevHomeSlide() { goHomeSlide((homeIndex - 1 + homeSlides.length) % homeSlides.length); }

homePrev.addEventListener('click', () => { clearInterval(homeInterval); prevHomeSlide(); restartHomeAuto(); });
homeNext.addEventListener('click', () => { clearInterval(homeInterval); nextHomeSlide(); restartHomeAuto(); });

function restartHomeAuto() {
    clearInterval(homeInterval);
    homeInterval = setInterval(nextHomeSlide, 4000);
}

renderHomeSlides();
goHomeSlide(0);
homeInterval = setInterval(nextHomeSlide, 4000);

// ===== PRACTICE DATA =====
const weekData = [
    { week: 1, title: 'Kick-off', slides: [
        { img: 'Pictures/week1_1.jpeg', title: 'Welcome', desc: 'First day at Gut Whelitz.' },
        { img: 'Pictures/week1_2.jpeg', title: 'Stand-up', desc: 'Daily meeting.' },
        { img: 'Pictures/week1_3.jpeg', title: 'Workshop', desc: 'Design session.' }
    ]},
    { week: 2, title: 'Agile', slides: [
        { img: 'Pictures/week2_1.jpeg', title: 'Scrum', desc: 'Task board.' },
        { img: 'Pictures/week2_2.jpeg', title: 'Pairing', desc: 'Coding together.' },
        { img: 'Pictures/week2_3.jpeg', title: 'Client', desc: 'Presentation.' }
    ]},
    { week: 3, title: 'Design', slides: [
        { img: 'Pictures/week3_1.jpeg', title: 'Moodboard', desc: 'Inspiration.' },
        { img: 'Pictures/week3_2.jpeg', title: 'Wireframe', desc: 'Sketching.' },
        { img: 'Pictures/week3_3.jpeg', title: 'Feedback', desc: 'Critiques.' }
    ]},
    { week: 4, title: 'Build', slides: [
        { img: 'Pictures/week4_1.jpeg', title: 'Sprint', desc: 'Building MVP.' },
        { img: 'Pictures/week4_2.jpeg', title: 'Testing', desc: 'Bug fixing.' },
        { img: 'Pictures/week4_3.jpeg', title: 'Demo', desc: 'Showcase.' }
    ]}
];

// ===== CULTURE SLIDES =====
const cultureSlidesData = [
    { title: 'German Cuisine', slides: [
        { img: 'Pictures/cfood1.jpeg', title: 'Bratwurst', desc: 'Grilled sausages.' },
        { img: 'Pictures/cfood2.jpeg', title: 'Pretzels', desc: 'Soft pretzels.' },
        { img: 'Pictures/cfood3.jpeg', title: 'Schnitzel', desc: 'Breaded veal.' }
    ]},
    { title: 'Language', slides: [
        { img: 'Pictures/clang1.jpeg', title: 'German Class', desc: 'Learning phrases.' },
        { img: 'Pictures/clang2.jpeg', title: 'Conversation', desc: 'Practicing with locals.' },
        { img: 'Pictures/clang3.jpeg', title: 'Signs', desc: 'Reading street signs.' }
    ]},
    { title: 'Festivals', slides: [
        { img: 'Pictures/cfest1.jpeg', title: 'Parade', desc: 'Local celebration.' },
        { img: 'Pictures/cfest2.jpeg', title: 'Music', desc: 'Live bands.' },
        { img: 'Pictures/cfest3.jpeg', title: 'Food Stalls', desc: 'Local specialties.' }
    ]},
    { title: 'History', slides: [
        { img: 'Pictures/chist1.jpeg', title: 'Old Town', desc: 'Historic centre.' },
        { img: 'Pictures/chist2.jpeg', title: 'Castle', desc: 'Medieval fortress.' },
        { img: 'Pictures/chist3.jpeg', title: 'Cathedral', desc: 'Gothic architecture.' }
    ]}
];

// ===== FREETIME SLIDES =====
const freetimeSlidesData = [
    { title: 'Nature Walks', slides: [
        { img: 'Pictures/fnature1.jpeg', title: 'Forest Trail', desc: 'Walking in the woods.' },
        { img: 'Pictures/fnature2.jpeg', title: 'Lake View', desc: 'Peaceful lakeside.' },
        { img: 'Pictures/fnature3.jpeg', title: 'Sunset', desc: 'Golden hour.' }
    ]},
    { title: 'City Tours', slides: [
        { img: 'Pictures/ftour1.jpeg', title: 'Market Square', desc: 'Town centre.' },
        { img: 'Pictures/ftour2.jpeg', title: 'Museum', desc: 'Local history.' },
        { img: 'Pictures/ftour3.jpeg', title: 'River Cruise', desc: 'Boat tour.' }
    ]},
    { title: 'Sports', slides: [
        { img: 'Pictures/fsport1.jpeg', title: 'Football', desc: 'Playing with friends.' },
        { img: 'Pictures/fsport2.jpeg', title: 'Cycling', desc: 'Bike ride.' },
        { img: 'Pictures/fsport3.jpeg', title: 'Swimming', desc: 'Cooling off.' }
    ]},
    { title: 'Cafés', slides: [
        { img: 'Pictures/fcafe1.jpeg', title: 'Coffee', desc: 'Enjoying cappuccino.' },
        { img: 'Pictures/fcafe2.jpeg', title: 'Cake', desc: 'Slicing cake.' },
        { img: 'Pictures/fcafe3.jpeg', title: 'Terrace', desc: 'Sitting outside.' }
    ]}
];

// ===== RENDER WEEKS =====
const weeksGrid = document.getElementById('weeksGrid');
let weekCards = [];

weekData.forEach((w, idx) => {
    const card = document.createElement('div');
    card.className = 'week-card';
    card.dataset.week = `week${w.week}`;
    card.innerHTML = `
        <div class="num">Week ${w.week}</div>
        <h4>${w.title}</h4>
        <p>${w.slides.length} photos</p>
        <div class="hint"><i class="fas fa-arrow-right"></i> click</div>
    `;
    card.addEventListener('click', () => openCarousel(w.slides, `Week ${w.week}: ${w.title}`));
    weeksGrid.appendChild(card);
    weekCards.push(card);
});

// ===== SUB BUTTON FILTER =====
const subBtns = document.querySelectorAll('.sub-btn');
subBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        subBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;
        weekCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else {
                card.style.display = card.dataset.week === filter ? 'block' : 'none';
            }
        });
    });
});

// ===== DROPDOWN FILTER (top nav) =====
const dropdownLinks = document.querySelectorAll('.dropdown a[data-filter]');
dropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.dataset.filter;
        switchSection('practice');
        subBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        weekCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else {
                card.style.display = card.dataset.week === filter ? 'block' : 'none';
            }
        });
        document.getElementById('navLinks').classList.remove('open');
        document.getElementById('hamburger').classList.remove('active');
    });
});

// ===== BIG NAV DROPDOWN FILTER (homepage) =====
const bigDropdownLinks = document.querySelectorAll('.dropdown-big a[data-filter]');
bigDropdownLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = link.dataset.filter;
        switchSection('practice');
        subBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        weekCards.forEach(card => {
            if (filter === 'all') {
                card.style.display = 'block';
            } else {
                card.style.display = card.dataset.week === filter ? 'block' : 'none';
            }
        });
        // Close big dropdown on mobile
        document.querySelectorAll('.has-dropdown-big').forEach(el => el.classList.remove('open'));
    });
});

// ===== BIG NAV LINKS (homepage) =====
const bigNavLinks = document.querySelectorAll('.big-nav-link[data-section]');
bigNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.dataset.section;
        if (section) switchSection(section);
    });
});

// ===== RENDER CULTURE =====
const cultureGrid = document.getElementById('cultureGrid');
cultureSlidesData.forEach(item => {
    const el = document.createElement('div');
    el.className = 'grid-item';
    el.innerHTML = `<img src="${item.slides[0].img}" alt="${item.title}" /><h4>${item.title}</h4><p>${item.slides.length} photos</p>`;
    el.addEventListener('click', () => openCarousel(item.slides, item.title));
    cultureGrid.appendChild(el);
});

// ===== RENDER FREETIME =====
const freetimeGrid = document.getElementById('freetimeGrid');
freetimeSlidesData.forEach(item => {
    const el = document.createElement('div');
    el.className = 'grid-item';
    el.innerHTML = `<img src="${item.slides[0].img}" alt="${item.title}" /><h4>${item.title}</h4><p>${item.slides.length} photos</p>`;
    el.addEventListener('click', () => openCarousel(item.slides, item.title));
    freetimeGrid.appendChild(el);
});

// ===== SHARED CAROUSEL MODAL =====
const overlay = document.getElementById('carouselOverlay');
const closeBtn = document.getElementById('carouselClose');
const track = document.getElementById('carouselTrack');
const dots = document.getElementById('carouselDots');
const prevBtn = document.getElementById('carouselPrev');
const nextBtn = document.getElementById('carouselNext');
const captionTitle = document.getElementById('captionTitle');
const captionDesc = document.getElementById('captionDesc');
const counter = document.getElementById('carouselCounter');
const modalTitle = document.getElementById('carouselTitle');

let currentSlide = 0;
let slides = [];

function openCarousel(slidesArray, title) {
    slides = slidesArray;
    currentSlide = 0;
    modalTitle.textContent = title;

    track.innerHTML = '';
    slides.forEach(s => {
        const div = document.createElement('div');
        div.className = 'slide';
        div.innerHTML = `<img src="${s.img}" alt="${s.title}" />`;
        track.appendChild(div);
    });

    dots.innerHTML = '';
    slides.forEach((_, i) => {
        const span = document.createElement('span');
        span.addEventListener('click', () => goTo(i));
        dots.appendChild(span);
    });

    goTo(0);
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function goTo(i) {
    if (i < 0) i = slides.length - 1;
    if (i >= slides.length) i = 0;
    currentSlide = i;
    track.style.transform = `translateX(-${i * 100}%)`;
    document.querySelectorAll('.dots span').forEach((d, idx) => d.classList.toggle('active', idx === i));
    const s = slides[i];
    captionTitle.textContent = s.title;
    captionDesc.textContent = s.desc;
    counter.textContent = `${i+1} / ${slides.length}`;
}

function closeCarousel() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', closeCarousel);
overlay.addEventListener('click', e => { if (e.target === overlay) closeCarousel(); });
prevBtn.addEventListener('click', () => goTo(currentSlide - 1));
nextBtn.addEventListener('click', () => goTo(currentSlide + 1));
document.addEventListener('keydown', e => {
    if (!overlay.classList.contains('open')) return;
    if (e.key === 'ArrowLeft') goTo(currentSlide - 1);
    if (e.key === 'ArrowRight') goTo(currentSlide + 1);
    if (e.key === 'Escape') closeCarousel();
});

// ===== NAVIGATION =====
const navLinks = document.querySelectorAll('.nav-links > li > a[data-section]');
const sections = {
    home: document.getElementById('section-home'),
    practice: document.getElementById('section-practice'),
    culture: document.getElementById('section-culture'),
    freetime: document.getElementById('section-freetime')
};
const hamburger = document.getElementById('hamburger');
const navList = document.getElementById('navLinks');

function switchSection(id) {
    Object.values(sections).forEach(s => s.classList.remove('active'));
    if (sections[id]) sections[id].classList.add('active');
    navLinks.forEach(l => l.classList.toggle('active', l.dataset.section === id));
    document.querySelectorAll('.dropdown a').forEach(l => {
        l.classList.toggle('active', l.dataset.section === id);
    });
    document.querySelectorAll('.big-nav-link').forEach(l => {
        l.classList.toggle('active', l.dataset.section === id);
    });
    navList.classList.remove('open');
    hamburger.classList.remove('active');
}

navLinks.forEach(l => l.addEventListener('click', (e) => {
    e.preventDefault();
    const section = l.dataset.section;
    if (section) switchSection(section);
}));

// Mobile dropdown toggle (top nav)
const practiceParent = document.querySelector('.has-dropdown');
if (practiceParent) {
    practiceParent.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            practiceParent.classList.toggle('open');
        }
    });
}

// Mobile dropdown toggle (big nav)
document.querySelectorAll('.has-dropdown-big').forEach(el => {
    el.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            el.classList.toggle('open');
        }
    });
});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('open');
});

// ===== BACK TO TOP =====
const topBtn = document.getElementById('back-to-top');
window.addEventListener('scroll', () => topBtn.classList.toggle('visible', window.scrollY > 400));
topBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

// ===== INIT =====
switchSection('home');