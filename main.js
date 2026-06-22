// ===== HOME CAROUSEL =====
const homeSlides = [
    { img: 'Pictures/mhozolins.jpeg', title: 'Miks Henrijs Ozolins', desc: 'Programmer from Latvia · Erasmus+ participant' },
    { img: 'Pictures/group.jpeg', title: 'Our Group', desc: 'Our group of dedicated and hard working people and eager to learn something new everyday' },
    { img: 'Pictures/victoria.jpeg', title: 'Vocational Secondary School "Victoria"', desc: 'My school in Latvia – programming & IT' },
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
    { week: 1, title: 'Week 1: The Beginning', slides: [
        { img: 'Pictures/First_day.jpeg', title: 'Start', desc: 'First day at Gut Whelitz, we got up and went to our first practice lesson, we met our mantor and started our first task.' },
        { img: 'Pictures/week1_codeaca.jpeg', title: 'First Task', desc: 'Our first task was to revise our Web development knowlage and to pratice JavaScript in a website called "CodeCademy".' },
        { img: 'Pictures/Website_start.jpeg', title: 'The Website', desc: 'We were given an task to make a website about our stay in Germany so in the last day of the First week we started to create the website that you are now reading.' }
    ]},
    { week: 2, title: 'Week 2: Agile', slides: [
        { img: 'Pictures/week2_1.jpeg', title: 'Scrum', desc: 'Task board.' },
        { img: 'Pictures/week2_2.jpeg', title: 'Pairing', desc: 'Coding together.' },
        { img: 'Pictures/week2_3.jpeg', title: 'Client', desc: 'Presentation.' }
    ]},
    { week: 3, title: 'Week 3: Design', slides: [
        { img: 'Pictures/week3_1.jpeg', title: 'Moodboard', desc: 'Inspiration.' },
        { img: 'Pictures/week3_2.jpeg', title: 'Wireframe', desc: 'Sketching.' },
        { img: 'Pictures/week3_3.jpeg', title: 'Feedback', desc: 'Critiques.' }
    ]},
    { week: 4, title: 'Week 4: Build', slides: [
        { img: 'Pictures/week4_1.jpeg', title: 'Sprint', desc: 'Building MVP.' },
        { img: 'Pictures/week4_2.jpeg', title: 'Testing', desc: 'Bug fixing.' },
        { img: 'Pictures/week4_3.jpeg', title: 'Demo', desc: 'Showcase.' }
    ]}
];

// ===== CULTURE SLIDES =====
const cultureSlides = [
    { img: 'Pictures/culture1.jpeg', title: 'City Of Berlin', desc: 'We had the oprotunitty to wisit the Big city of Berlin and admire its architecture and the rich History that it had' },
    { img: 'Pictures/culture4.jpeg', title: 'Bradenburg Gate', desc: 'We saw the most famous gate in Germany and maybe in the whole world..' },
    { img: 'Pictures/culture5.jpeg', title: 'Memorial Of Holocaust', desc: 'This monument is the remberence of the Holocaust it each cube represents each of us, they are diffeent siyes to show that we are the same but we look diferent from eachother, that we are uniqe.' },
    { img: 'Pictures/culture2.jpeg', title: 'Memorial for the Gypsies', desc: 'We visited the memorial for the Gypsies that were killend during the WWII and I saw that Germans are verry sad of this tradegy and that they feel sorry for the loses.' },
    { img: 'Pictures/clang2.jpeg', title: 'Conversation Practice', desc: 'We practiced speaking German with locals at the market and in shops.' },
    { img: 'Pictures/cfest1.jpeg', title: 'Local Festival', desc: 'We joined a street parade and experienced local music and dancing.' },
    { img: 'Pictures/cfest2.jpeg', title: 'Live Music', desc: 'We watched live bands performing traditional German folk music.' },
    { img: 'Pictures/chist1.jpeg', title: 'Old Town Tour', desc: 'We explored the historic city centre with a local guide.' },
    { img: 'Pictures/chist2.jpeg', title: 'Medieval Castle', desc: 'We visited a medieval castle and learned about its history and architecture.' }
];

// ===== FREETIME SLIDES =====
const freetimeSlides = [
    { img: 'Pictures/freetime1.jpeg', title: 'Plane Spotting', desc: 'I am quite keen on plane spotting and luckly we were next to an airport so that was a no issue.' },
    { img: 'Pictures/freetime2.jpeg', title: 'Chilling in the Room', desc: 'We spend the most time in our room resting, talking, listening to music and thinking of what to do next.' },
    { img: 'Pictures/fnature3.jpeg', title: 'Sunset View', desc: 'We watched the sunset over the fields – an amazing view after a long day.' },
    { img: 'Pictures/ftour1.jpeg', title: 'Market Square', desc: 'We visited the town market square and bought local products.' },
    { img: 'Pictures/ftour2.jpeg', title: 'Museum Visit', desc: 'We explored a local museum and learned about the region\'s history.' },
    { img: 'Pictures/fsport1.jpeg', title: 'Football Match', desc: 'We played football with local students – great fun and teamwork.' },
    { img: 'Pictures/fsport2.jpeg', title: 'Cycling Tour', desc: 'We rented bikes and cycled through the beautiful German countryside.' },
    { img: 'Pictures/fcafe1.jpeg', title: 'Coffee Break', desc: 'We relaxed in a local café and enjoyed cappuccino and cake.' },
    { img: 'Pictures/fcafe2.jpeg', title: 'Afternoon Treat', desc: 'We tried traditional German cake and pastries in a cozy café.' }
];

// ===== OPEN WEEK BY FILTER =====
function openWeekByFilter(filter) {
    const week = weekData.find(w => `week${w.week}` === filter);
    if (week) {
        openCarousel(week.slides, week.title);
    }
}

// ===== DROPDOWN FILTER (top nav + big nav) =====
function handleFilterClick(filter, e) {
    e.preventDefault();
    openWeekByFilter(filter);
    document.getElementById('navLinks').classList.remove('open');
    document.getElementById('hamburger').classList.remove('active');
    document.querySelectorAll('.has-dropdown-big').forEach(el => el.classList.remove('open'));
    document.querySelectorAll('.has-dropdown').forEach(el => el.classList.remove('open'));
}

document.querySelectorAll('.dropdown a[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => handleFilterClick(link.dataset.filter, e));
});

document.querySelectorAll('.dropdown-big a[data-filter]').forEach(link => {
    link.addEventListener('click', (e) => handleFilterClick(link.dataset.filter, e));
});

// ===== PRACTICE PAGE DROPDOWN =====
const practiceSelect = document.getElementById('practiceWeekSelect');
const practiceGoBtn = document.getElementById('practiceGoBtn');

practiceGoBtn.addEventListener('click', () => {
    const filter = practiceSelect.value;
    if (filter) {
        openWeekByFilter(filter);
        practiceSelect.value = '';
    }
});

practiceSelect.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const filter = practiceSelect.value;
        if (filter) {
            openWeekByFilter(filter);
            practiceSelect.value = '';
        }
    }
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

// ===== PAGE CAROUSELS (Culture & Freetime) =====
function createPageCarousel(slidesData, containerId, trackId, dotsId, prevId, nextId, captionTitleId, captionDescId) {
    const track = document.getElementById(trackId);
    const dots = document.getElementById(dotsId);
    const prevBtn = document.getElementById(prevId);
    const nextBtn = document.getElementById(nextId);
    const captionTitle = document.getElementById(captionTitleId);
    const captionDesc = document.getElementById(captionDescId);
    let currentIndex = 0;

    function renderSlides() {
        track.innerHTML = '';
        dots.innerHTML = '';
        slidesData.forEach((s, i) => {
            const div = document.createElement('div');
            div.className = 'page-carousel-slide';
            div.innerHTML = `<img src="${s.img}" alt="${s.title}" loading="lazy" />`;
            track.appendChild(div);
            const dot = document.createElement('span');
            dot.addEventListener('click', () => goTo(i));
            dots.appendChild(dot);
        });
    }

    function goTo(i) {
        if (i < 0) i = slidesData.length - 1;
        if (i >= slidesData.length) i = 0;
        currentIndex = i;
        track.style.transform = `translateX(-${i * 100}%)`;
        document.querySelectorAll(`#${dotsId} span`).forEach((d, idx) => d.classList.toggle('active', idx === i));
        const s = slidesData[i];
        captionTitle.textContent = s.title;
        captionDesc.textContent = s.desc;
    }

    function next() { goTo(currentIndex + 1); }
    function prev() { goTo(currentIndex - 1); }

    renderSlides();
    goTo(0);

    prevBtn.addEventListener('click', prev);
    nextBtn.addEventListener('click', next);
}

// Init Culture and Freetime page carousels
createPageCarousel(
    cultureSlides,
    'cultureCarousel',
    'cultureCarouselTrack',
    'cultureCarouselDots',
    'cultureCarouselPrev',
    'cultureCarouselNext',
    'cultureCaptionTitle',
    'cultureCaptionDesc'
);

createPageCarousel(
    freetimeSlides,
    'freetimeCarousel',
    'freetimeCarouselTrack',
    'freetimeCarouselDots',
    'freetimeCarouselPrev',
    'freetimeCarouselNext',
    'freetimeCaptionTitle',
    'freetimeCaptionDesc'
);

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

document.querySelectorAll('.big-nav-link[data-section]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const section = link.dataset.section;
        if (section) switchSection(section);
    });
});

const practiceParent = document.querySelector('.has-dropdown');
if (practiceParent) {
    practiceParent.addEventListener('click', (e) => {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            practiceParent.classList.toggle('open');
        }
    });
}

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