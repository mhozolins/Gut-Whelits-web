// ===== HOME CAROUSEL =====
const homeSlides = [
    { img: 'https://picsum.photos/seed/miks/1200/600', title: 'Miks Henrijs Ozolins', desc: 'Programmer from Latvia · Erasmus+ participant' },
    { img: 'https://picsum.photos/seed/group/1200/600', title: 'Our Group', desc: 'International team of students and mentors' },
    { img: 'https://picsum.photos/seed/school/1200/600', title: 'Vocational Secondary School "Victoria"', desc: 'My school in Latvia – programming & IT' },
    { img: 'https://picsum.photos/seed/germany/1200/600', title: 'Gut Whelitz, Germany', desc: 'Host organization and internship destination' }
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

// ===== PRACTICE DATA (weeks 1–4) =====
const weekData = [
    { week: 1, title: 'Kick-off', slides: [
        { img: 'https://picsum.photos/seed/p1/800/500', title: 'Welcome', desc: 'First day at Gut Whelitz.' },
        { img: 'https://picsum.photos/seed/p2/800/500', title: 'Stand-up', desc: 'Daily meeting.' },
        { img: 'https://picsum.photos/seed/p3/800/500', title: 'Workshop', desc: 'Design session.' }
    ]},
    { week: 2, title: 'Agile', slides: [
        { img: 'https://picsum.photos/seed/p4/800/500', title: 'Scrum', desc: 'Task board.' },
        { img: 'https://picsum.photos/seed/p5/800/500', title: 'Pairing', desc: 'Coding together.' },
        { img: 'https://picsum.photos/seed/p6/800/500', title: 'Client', desc: 'Presentation.' }
    ]},
    { week: 3, title: 'Design', slides: [
        { img: 'https://picsum.photos/seed/p7/800/500', title: 'Moodboard', desc: 'Inspiration.' },
        { img: 'https://picsum.photos/seed/p8/800/500', title: 'Wireframe', desc: 'Sketching.' },
        { img: 'https://picsum.photos/seed/p9/800/500', title: 'Feedback', desc: 'Critiques.' }
    ]},
    { week: 4, title: 'Build', slides: [
        { img: 'https://picsum.photos/seed/p10/800/500', title: 'Sprint', desc: 'Building MVP.' },
        { img: 'https://picsum.photos/seed/p11/800/500', title: 'Testing', desc: 'Bug fixing.' },
        { img: 'https://picsum.photos/seed/p12/800/500', title: 'Demo', desc: 'Showcase.' }
    ]}
];

// ===== CULTURE SLIDES =====
const cultureSlidesData = [
    { title: 'German Cuisine', slides: [
        { img: 'https://picsum.photos/seed/cf1/800/500', title: 'Bratwurst', desc: 'Grilled sausages.' },
        { img: 'https://picsum.photos/seed/cf2/800/500', title: 'Pretzels', desc: 'Soft pretzels.' },
        { img: 'https://picsum.photos/seed/cf3/800/500', title: 'Schnitzel', desc: 'Breaded veal.' }
    ]},
    { title: 'Language', slides: [
        { img: 'https://picsum.photos/seed/cl1/800/500', title: 'German Class', desc: 'Learning phrases.' },
        { img: 'https://picsum.photos/seed/cl2/800/500', title: 'Conversation', desc: 'Practicing with locals.' },
        { img: 'https://picsum.photos/seed/cl3/800/500', title: 'Signs', desc: 'Reading street signs.' }
    ]},
    { title: 'Festivals', slides: [
        { img: 'https://picsum.photos/seed/cfe1/800/500', title: 'Parade', desc: 'Local celebration.' },
        { img: 'https://picsum.photos/seed/cfe2/800/500', title: 'Music', desc: 'Live bands.' },
        { img: 'https://picsum.photos/seed/cfe3/800/500', title: 'Food Stalls', desc: 'Local specialties.' }
    ]},
    { title: 'History', slides: [
        { img: 'https://picsum.photos/seed/ch1/800/500', title: 'Old Town', desc: 'Historic centre.' },
        { img: 'https://picsum.photos/seed/ch2/800/500', title: 'Castle', desc: 'Medieval fortress.' },
        { img: 'https://picsum.photos/seed/ch3/800/500', title: 'Cathedral', desc: 'Gothic architecture.' }
    ]}
];

// ===== FREETIME SLIDES =====
const freetimeSlidesData = [
    { title: 'Nature Walks', slides: [
        { img: 'https://picsum.photos/seed/fn1/800/500', title: 'Forest Trail', desc: 'Walking in the woods.' },
        { img: 'https://picsum.photos/seed/fn2/800/500', title: 'Lake View', desc: 'Peaceful lakeside.' },
        { img: 'https://picsum.photos/seed/fn3/800/500', title: 'Sunset', desc: 'Golden hour.' }
    ]},
    { title: 'City Tours', slides: [
        { img: 'https://picsum.photos/seed/ft1/800/500', title: 'Market Square', desc: 'Town centre.' },
        { img: 'https://picsum.photos/seed/ft2/800/500', title: 'Museum', desc: 'Local history.' },
        { img: 'https://picsum.photos/seed/ft3/800/500', title: 'River Cruise', desc: 'Boat tour.' }
    ]},
    { title: 'Sports', slides: [
        { img: 'https://picsum.photos/seed/fs1/800/500', title: 'Football', desc: 'Playing with friends.' },
        { img: 'https://picsum.photos/seed/fs2/800/500', title: 'Cycling', desc: 'Bike ride.' },
        { img: 'https://picsum.photos/seed/fs3/800/500', title: 'Swimming', desc: 'Cooling off.' }
    ]},
    { title: 'Cafés', slides: [
        { img: 'https://picsum.photos/seed/fc1/800/500', title: 'Coffee', desc: 'Enjoying cappuccino.' },
        { img: 'https://picsum.photos/seed/fc2/800/500', title: 'Cake', desc: 'Slicing cake.' },
        { img: 'https://picsum.photos/seed/fc3/800/500', title: 'Terrace', desc: 'Sitting outside.' }
    ]}
];

// ===== RENDER WEEKS =====
const weeksGrid = document.getElementById('weeksGrid');
weekData.forEach((w, idx) => {
    const card = document.createElement('div');
    card.className = 'week-card';
    card.innerHTML = `<div class="num">Week ${w.week}</div><h4>${w.title}</h4><p>${w.slides.length} photos</p><div class="hint"><i class="fas fa-arrow-right"></i> click</div>`;
    card.addEventListener('click', () => openCarousel(w.slides, `Week ${w.week}: ${w.title}`));
    weeksGrid.appendChild(card);
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
const navLinks = document.querySelectorAll('.nav-links a');
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
    navList.classList.remove('open');
    hamburger.classList.remove('active');
}

navLinks.forEach(l => l.addEventListener('click', e => {
    e.preventDefault();
    switchSection(l.dataset.section);
}));
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