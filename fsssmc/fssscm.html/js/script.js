/**
 * FSSSMC MOSQUE - MAIN JAVASCRIPT
 * Federal Site and Service Scheme Muslim Community Mosque
 * 
 * Features:
 * - Language toggle (EN/AR) with RTL support
 * - Prayer times calculation and countdown
 * - Mobile navigation (hamburger menu)
 * - Scroll animations
 * - Header scroll effects
 * - FAQ accordion
 * - Form validation
 * - Search functionality
 * - Calendar functionality
 * - Smooth scrolling
 */

// ============================================
// LANGUAGE DATA - All text content embedded
// ==========no==================================
const languageData = {
  en: {
    // Navigation
    nav_home: 'Home',
    nav_about: 'About',
    nav_prayer: 'Prayer',
    nav_services: 'Services',
    nav_events: 'Events',
    nav_learn: 'Learn',
    nav_get_involved: 'Get Involved',
    nav_contact: 'Contact',
    
    // Header
    lang_toggle: 'AR',
    logo_title: 'FSSSMC Mosque',
    logo_subtitle: 'Federal Site and Service Scheme Muslim Community',
    
    // Hero
    hero_title: 'Welcome to FSSSMC Mosque',
    hero_subtitle: 'A place of worship, learning, and community for all Muslims',
    hero_cta_primary: 'Prayer Times',
    hero_cta_secondary: 'Learn More',
    
    // Prayer Widget
    prayer_title: 'Prayer Times',
    prayer_countdown: 'Next Prayer',
    prayer_fajr: 'Fajr',
    prayer_dhuhr: 'Dhuhr',
    prayer_asr: 'Asr',
    prayer_maghrib: 'Maghrib',
    prayer_isha: 'Isha',
    
    // Home Page
    home_intro_title: 'Our Mosque',
    home_intro_text: 'The Federal Site and Service Scheme Muslim Community Mosque (FSSSMC) serves as a spiritual home for Muslims in our community. We provide a welcoming environment for prayer, education, and community engagement.',
    home_events_title: 'Upcoming Events',
    home_events_view_all: 'View All Events',
    home_cta_donate: 'Support Our Mosque',
    home_cta_donate_text: 'Your donations help us maintain our facilities and expand our services.',
    home_cta_volunteer: 'Become a Volunteer',
    home_cta_volunteer_text: 'Join our team of dedicated volunteers and serve the community.',
    home_cta_newsletter: 'Stay Connected',
    home_cta_newsletter_text: 'Subscribe to receive updates on events and programs.',
    
    // About Page
    about_title: 'About Our Mosque',
    about_subtitle: 'Learn about our history, mission, and the people who serve our community',
    about_mosque_title: 'Our Mosque',
    about_history_title: 'History & Heritage',
    about_leadership_title: 'Leadership & Imam',
    about_mission_title: 'Mission & Vision',
    about_facilities_title: 'Facilities & Amenities',
    
    // Prayer Page
    prayer_page_title: 'Prayer Times',
    prayer_page_subtitle: 'Daily prayer schedule and special prayer information',
    prayer_daily_title: 'Daily Prayer Times',
    prayer_jummah_title: 'Jummah Prayer',
    prayer_taraweeh_title: 'Taraweeh Prayer',
    prayer_eid_title: 'Eid Prayer',
    prayer_guidelines_title: 'Prayer Guidelines',
    
    // Services Page
    services_title: 'Our Services',
    services_subtitle: 'Comprehensive Islamic services for our community',
    services_education_title: 'Islamic Education',
    services_community_title: 'Community Services',
    services_youth_title: 'Youth Programs',
    
    // Events Page
    events_title: 'Events & Programs',
    events_subtitle: 'Join us for upcoming events and activities',
    events_upcoming_title: 'Upcoming Events',
    events_calendar_title: 'Event Calendar',
    events_past_title: 'Past Events',
    events_ramadan_title: 'Ramadan Programs',
    
    // Learn Page
    learn_title: 'Learn About Islam',
    learn_subtitle: 'Resources for understanding and practicing Islam',
    learn_islam_title: 'About Islam',
    learn_pillars_title: 'Pillars of Islam',
    learn_resources_title: 'Resources',
    learn_faq_title: 'Frequently Asked Questions',
    learn_library_title: 'Library',
    learn_videos_title: 'Videos',
    
    // Get Involved Page
    involved_title: 'Get Involved',
    involved_subtitle: 'Support our mosque through donations, volunteering, and membership',
    involved_donate_title: 'Make a Donation',
    involved_volunteer_title: 'Volunteer With Us',
    involved_membership_title: 'Become a Member',
    involved_sponsor_title: 'Sponsorship Opportunities',
    
    // Contact Page
    contact_title: 'Contact Us',
    contact_subtitle: 'Get in touch with our team',
    contact_location_title: 'Our Location',
    contact_form_title: 'Send us a Message',
    contact_staff_title: 'Our Staff',
    contact_newsletter_title: 'Newsletter Signup',
    
    // Footer
    footer_contact: 'Contact Info',
    footer_prayer: 'Today\'s Prayer Times',
    footer_links: 'Quick Links',
    footer_connect: 'Connect With Us',
    footer_copyright: '© 2024 FSSSMC Mosque. All rights reserved.',
    
    // Common
    read_more: 'Read More',
    learn_more: 'Learn More',
    register: 'Register',
    donate: 'Donate',
    volunteer: 'Volunteer',
    submit: 'Submit',
    subscribe: 'Subscribe',
    search: 'Search',
    loading: 'Loading...',
    
    // Form labels
    form_name: 'Full Name',
    form_email: 'Email Address',
    form_phone: 'Phone Number',
    form_message: 'Message',
    form_subject: 'Subject',
    form_submit: 'Submit',
    
    // Breadcrumb
    breadcrumb_home: 'Home',
    
    // Donate sticky button
    donate_sticky: 'Donate Now'
  },
  
  ar: {
    // Navigation
    nav_home: 'الرئيسية',
    nav_about: 'عن المسجد',
    nav_prayer: 'الصلاة',
    nav_services: 'الخدمات',
    nav_events: 'الفعاليات',
    nav_learn: 'التعلم',
    nav_get_involved: 'شارك معنا',
    nav_contact: 'اتصل بنا',
    
    // Header
    lang_toggle: 'EN',
    logo_title: 'مسجد FSSSMC',
    logo_subtitle: 'المجتمع المسلم لنظام الموقع والخدمة الاتحادي',
    
    // Hero
    hero_title: 'مرحباً بكم في مسجد FSSSMC',
    hero_subtitle: 'مكان للعبادة والتعلم والمجتمع لجميع المسلمين',
    hero_cta_primary: 'أوقات الصلاة',
    hero_cta_secondary: 'اعرف المزيد',
    
    // Prayer Widget
    prayer_title: 'أوقات الصلاة',
    prayer_countdown: 'الصلاة القادمة',
    prayer_fajr: 'الفجر',
    prayer_dhuhr: 'الظهر',
    prayer_asr: 'العصر',
    prayer_maghrib: 'المغرب',
    prayer_isha: 'العشاء',
    
    // Home Page
    home_intro_title: 'مسجدنا',
    home_intro_text: 'يخدم مسجد المجتمع المسلم لنظام الموقع والخدمة الاتحادي (FSSSMC) كموطن روحاني للمسلمين في مجتمعنا. نحن نقدم بيئة ترحيبية للصلاة والتعليم والمشاركة المجتمعية.',
    home_events_title: 'الفعاليات القادمة',
    home_events_view_all: 'عرض جميع الفعاليات',
    home_cta_donate: 'ادعم مسجدنا',
    home_cta_donate_text: 'تبرعاتك تساعدنا في الحفاظ على مرافقنا وتوسيع خدماتنا.',
    home_cta_volunteer: 'كن متطوعاً',
    home_cta_volunteer_text: 'انضم إلى فريق المتطوعين المتفانين وخدمة المجتمع.',
    home_cta_newsletter: 'ابق على تواصل',
    home_cta_newsletter_text: 'اشترك لتلقي التحديثات حول الفعاليات والبرامج.',
    
    // About Page
    about_title: 'عن مسجدنا',
    about_subtitle: 'تعرف على تاريخنا ومهمتنا والأشخاص الذين يخدمون مجتمعنا',
    about_mosque_title: 'مسجدنا',
    about_history_title: 'التاريخ والتراث',
    about_leadership_title: 'القيادة والإمام',
    about_mission_title: 'المهمة والرؤية',
    about_facilities_title: 'المرافق والخدمات',
    
    // Prayer Page
    prayer_page_title: 'أوقات الصلاة',
    prayer_page_subtitle: 'جدول الصلاة اليومي ومعلومات الصلاة الخاصة',
    prayer_daily_title: 'أوقات الصلاة اليومية',
    prayer_jummah_title: 'صلاة الجمعة',
    prayer_taraweeh_title: 'صلاة التراويح',
    prayer_eid_title: 'صلاة العيد',
    prayer_guidelines_title: 'إرشادات الصلاة',
    
    // Services Page
    services_title: 'خدماتنا',
    services_subtitle: 'خدمات إسلامية شاملة لمجتمعنا',
    services_education_title: 'التعليم الإسلامي',
    services_community_title: 'الخدمات المجتمعية',
    services_youth_title: 'برامج الشباب',
    
    // Events Page
    events_title: 'الفعاليات والبرامج',
    events_subtitle: 'انضم إلينا في الفعاليات والأنشطة القادمة',
    events_upcoming_title: 'الفعاليات القادمة',
    events_calendar_title: 'تقويم الفعاليات',
    events_past_title: 'الفعاليات السابقة',
    events_ramadan_title: 'برامج رمضان',
    
    // Learn Page
    learn_title: 'تعلم عن الإسلام',
    learn_subtitle: 'موارد لفهم وممارسة الإسلام',
    learn_islam_title: 'عن الإسلام',
    learn_pillars_title: 'أركان الإسلام',
    learn_resources_title: 'الموارد',
    learn_faq_title: 'الأسئلة الشائعة',
    learn_library_title: 'المكتبة',
    learn_videos_title: 'الفيديوهات',
    
    // Get Involved Page
    involved_title: 'شارك معنا',
    involved_subtitle: 'ادعم مسجدنا من خلال التبرع والتطوع والعضوية',
    involved_donate_title: 'تبرع الآن',
    involved_volunteer_title: 'تطوع معنا',
    involved_membership_title: 'كن عضواً',
    involved_sponsor_title: 'فرص الرعاية',
    
    // Contact Page
    contact_title: 'اتصل بنا',
    contact_subtitle: 'تواصل مع فريقنا',
    contact_location_title: 'موقعنا',
    contact_form_title: 'أرسل لنا رسالة',
    contact_staff_title: 'فريقنا',
    contact_newsletter_title: 'النشرة الإخبارية',
    
    // Footer
    footer_contact: 'معلومات الاتصال',
    footer_prayer: 'أوقات الصلاة اليوم',
    footer_links: 'روابط سريعة',
    footer_connect: 'تواصل معنا',
    footer_copyright: '© 2024 مسجد FSSSMC. جميع الحقوق محفوظة.',
    
    // Common
    read_more: 'اقرأ المزيد',
    learn_more: 'اعرف المزيد',
    register: 'سجل الآن',
    donate: 'تبرع',
    volunteer: 'تطوع',
    submit: 'إرسال',
    subscribe: 'اشتراك',
    search: 'بحث',
    loading: 'جاري التحميل...',
    
    // Form labels
    form_name: 'الاسم الكامل',
    form_email: 'البريد الإلكتروني',
    form_phone: 'رقم الهاتف',
    form_message: 'الرسالة',
    form_subject: 'الموضوع',
    form_submit: 'إرسال',
    
    // Breadcrumb
    breadcrumb_home: 'الرئيسية',
    
    // Donate sticky button
    donate_sticky: 'تبرع الآن'
  }
};

// ============================================
// PRAYER TIMES DATA - Embedded calculation
// ============================================
const prayerTimesData = {
  // Default prayer times (will be adjusted based on location)
  fajr: '05:30',
  dhuhr: '13:15',
  asr: '16:45',
  maghrib: '19:30',
  isha: '20:45',
  
  // Jummah prayer time
  jummah: '13:30'
};

// ============================================
// EVENTS DATA - Embedded
// ============================================
const eventsData = [
  {
    id: 1,
    title: 'Weekly Quran Study Circle',
    titleAr: 'حلقة دراسة القرآن الأسبوعية',
    date: '2024-03-15',
    time: '19:00',
    timeAr: '7:00 مساءً',
    location: 'Main Hall',
    locationAr: 'القاعة الرئيسية',
    description: 'Join us every Friday evening for our weekly Quran study circle. Open to all ages.',
    descriptionAr: 'انضم إلينا كل مساء جمعة في حلقة دراسة القرآن الأسبوعية. مفتوحة لجميع الأعمار.',
    icon: '📖'
  },
  {
    id: 2,
    title: 'Youth Sports Day',
    titleAr: 'يوم الرياضة للشباب',
    date: '2024-03-20',
    time: '10:00',
    timeAr: '10:00 صباحاً',
    location: 'Community Center',
    locationAr: 'مركز المجتمع',
    description: 'A fun-filled day of sports and activities for youth ages 12-18.',
    descriptionAr: 'يوم مليء بالمرح من الرياضة والأنشطة للشباب من 12-18 سنة.',
    icon: '⚽'
  },
  {
    id: 3,
    title: 'Community Iftar',
    titleAr: 'إفطار المجتمع',
    date: '2024-03-25',
    time: '18:30',
    timeAr: '6:30 مساءً',
    location: 'Dining Hall',
    locationAr: 'قاعة الطعام',
    description: 'Come together for a community iftar. Everyone is welcome!',
    descriptionAr: 'تجمعوا معاً لإفطار المجتمع. الجميع مرحب به!',
    icon: '🍽️'
  },
  {
    id: 4,
    title: 'Islamic Finance Workshop',
    titleAr: 'ورشة عمل التمويل الإسلامي',
    date: '2024-04-05',
    time: '14:00',
    timeAr: '2:00 مساءً',
    location: 'Conference Room',
    locationAr: 'غرفة المؤتمرات',
    description: 'Learn about Islamic finance principles and ethical investing.',
    descriptionAr: 'تعرف على مبادئ التمويل الإسلامي والاستثمار الأخلاقي.',
    icon: '💰'
  }
];

// ============================================
// FAQ DATA - Embedded
// ============================================
const faqData = [
  {
    question: 'What are the mosque opening hours?',
    questionAr: 'ما هي ساعات عمل المسجد؟',
    answer: 'The mosque is open daily from 30 minutes before Fajr prayer until 30 minutes after Isha prayer. On Fridays, we remain open throughout the day for Jummah and community activities.',
    answerAr: 'المسجد مفتوح يومياً من 30 دقيقة قبل صلاة الفجر حتى 30 دقيقة بعد صلاة العشاء. أيام الجمعة، نبقى مفتوحين طوال اليوم لصلاة الجمعة والأنشطة المجتمعية.'
  },
  {
    question: 'Do you offer Quran classes for children?',
    questionAr: 'هل تقدمون classes قرآنية للأطفال؟',
    answer: 'Yes, we offer Quran classes for children of all ages every Saturday and Sunday from 10:00 AM to 1:00 PM. Registration is required.',
    answerAr: 'نعم، نقدم classes قرآنية للأطفال من جميع الأعمار كل سبت وأحد من 10:00 صباحاً حتى 1:00 ظهراً. التسجيل مطلوب.'
  },
  {
    question: 'Can I donate to the mosque online?',
    questionAr: 'هل يمكنني التبرع للمسجد عبر الإنترنت؟',
    answer: 'Yes, you can make donations through our website, bank transfer, or in person at the mosque office. All donations are tax-deductible.',
    answerAr: 'نعم، يمكنك التبرع من خلال موقعنا الإلكتروني، التحويل البنكي، أو شخصياً في مكتب المسجد. جميع التبرعات معفاة من الضرائب.'
  },
  {
    question: 'Is the mosque wheelchair accessible?',
    questionAr: 'هل المسجد متاح لكرسي المقعدين؟',
    answer: 'Currently, the mosque does not have wheelchair ramps or elevators. However, chairs are available inside the mosque to assist elderly worshippers or those who may need to sit during prayers. We hope to improve accessibility in the future.',
    answerAr: 'حالياً، لا يحتوي المسجد على منحدرات للكراسي المتحركة أو مصاعد. ومع ذلك، تتوفر كراسي داخل المسجد لمساعدة كبار السن أو من قد يحتاجون إلى الجلوس أثناء الصلاة. نأمل تحسين إمكانية الوصول في المستقبل.'
  },
  {
    question: 'How can I volunteer at the mosque?',
    questionAr: 'كيف يمكنني التطوع في المسجد؟',
    answer: 'We welcome volunteers! Please visit our "Get Involved" page to fill out a volunteer application or contact our volunteer coordinator.',
    answerAr: 'نرحب بالمتطوعين! يرجى زيارة صفحة "شارك معنا" لملء طلب التطوع أو الاتصال بمنسق المتطوعين لدينا.'
  }
];

// ============================================
// MAIN APPLICATION
// ============================================
const MosqueApp = {
  // Current state
  currentLang: 'en',
  prayerInterval: null,
  countdownInterval: null,
  azanAudio: null,
  azanPlayedFor: {},
  azanAudioUnlocked: false,

  // Initialize the application
  init() {
    this.initLanguage();
    this.initNavigation();
    this.initHeaderScroll();
    this.initHeaderTransparency();
    this.initScrollAnimations();
    this.initFlipCardsAnimation();
    this.initPrayerTimes();
    this.initFAQ();
    this.initForms();
    this.initSearch();
    this.initCalendar();
    this.updateActiveNavLink();
    this.initAzanAudio();
  },

  // ============================================
  // LANGUAGE TOGGLE
  // ============================================
  initLanguage() {
    const savedLang = localStorage.getItem('fsssmc-lang');
    if (savedLang && languageData[savedLang]) {
      this.currentLang = savedLang;
    }
    this.applyLanguage();

    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
      langToggle.addEventListener('click', () => this.toggleLanguage());
    }
  },

  toggleLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    localStorage.setItem('fsssmc-lang', this.currentLang);
    this.applyLanguage();
  },

  applyLanguage() {
    const data = languageData[this.currentLang];
    const isRTL = this.currentLang === 'ar';
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.body.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (data[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = data[key];
        } else {
          el.textContent = data[key];
        }
      }
    });

    const langToggle = document.querySelector('.lang-toggle');
    if (langToggle) {
      langToggle.textContent = data.lang_toggle;
    }

    this.updateEventsLanguage();
    this.updateFAQLanguage();
  },

  getText(key) {
    return languageData[this.currentLang][key] || key;
  },

  // ============================================
  // NAVIGATION
  // ============================================
  initNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav');

    if (hamburger && nav) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        nav.classList.toggle('active');
      });

      nav.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          nav.classList.remove('active');
        });
      });
    }
  },

  updateActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(link => {
      const href = link.getAttribute('href');
      if (href === currentPage || (currentPage === '' && href === 'index.html')) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  },

  // ============================================
  // HEADER SCROLL EFFECT
  // ============================================
  initHeaderScroll() {
    const header = document.querySelector('.header');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('header-scrolled');
      } else {
        header.classList.remove('header-scrolled');
      }
    });
  },

  // ============================================
  // GLOBAL HEADER TRANSPARENCY ON SCROLL
  // ============================================
  initHeaderTransparency() {
    const header = document.querySelector('header');
    if (!header) return;

    const applyTransparency = () => {
      if (window.scrollY > 50) {
        header.classList.add('transparent');
      } else {
        header.classList.remove('transparent');
      }
    };

    applyTransparency();
    window.addEventListener('scroll', applyTransparency);
    window.addEventListener('resize', applyTransparency);
  },

  // ============================================
  // SCROLL ANIMATIONS
  // ============================================
  initScrollAnimations() {
    const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (revealElements.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => observer.observe(el));
  },

  // ============================================
  // FLIP CARDS SCROLL ANIMATION
  // ============================================
  initFlipCardsAnimation() {
    const flipCards = document.querySelectorAll('.reveal-flip');
    if (flipCards.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.getAttribute('data-delay')) || (index * 100);
          setTimeout(() => entry.target.classList.add('visible'), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    flipCards.forEach(card => observer.observe(card));
  },
  
  // ============================================
  // PRAYER TIMES
  // ============================================
  fetchPrayerTimes() {
    const url = 'https://api.aladhan.com/v1/timingsByCity?city=Lagos&country=Nigeria&method=2';
    fetch(url)
      .then(r => r.json())
      .then(d => {
        if (d && d.data && d.data.timings) {
          const t = d.data.timings;
          prayerTimesData.fajr = String(t.Fajr).slice(0, 5);
          prayerTimesData.dhuhr = String(t.Dhuhr).slice(0, 5);
          prayerTimesData.asr = String(t.Asr).slice(0, 5);
          prayerTimesData.maghrib = String(t.Maghrib).slice(0, 5);
          prayerTimesData.isha = String(t.Isha).slice(0, 5);
          this.updatePrayerTimes();
        }
      })
      .catch(() => {});
  },
  initPrayerTimes() {
    this.fetchPrayerTimes();
    this.updatePrayerTimes();
    this.startCountdown();
    
    // Update prayer times every minute
    this.prayerInterval = setInterval(() => {
      this.updatePrayerTimes();
    }, 60000);
  },
  initAzanAudio() {
    if (!this.azanAudio) {
      const existing = document.getElementById('azan-audio');
      if (existing) {
        this.azanAudio = existing;
      } else {
        const audio = document.createElement('audio');
        audio.id = 'azan-audio';
        audio.src = 'audio/azan.mp3';
        audio.preload = 'auto';
        audio.crossOrigin = 'anonymous';
        document.body.appendChild(audio);
        this.azanAudio = audio;
      }
    }
    const unlock = () => {
      if (this.azanAudio && !this.azanAudioUnlocked) {
        this.azanAudio.play().then(() => {
          this.azanAudio.pause();
          this.azanAudio.currentTime = 0;
          this.azanAudioUnlocked = true;
        }).catch(() => {});
      }
      window.removeEventListener('click', unlock);
      window.removeEventListener('touchstart', unlock);
    };
    window.addEventListener('click', unlock, { once: true });
    window.addEventListener('touchstart', unlock, { once: true });
  },
  
  updatePrayerTimes() {
    const now = new Date();
    const prayers = [
      { name: 'fajr', time: prayerTimesData.fajr },
      { name: 'dhuhr', time: prayerTimesData.dhuhr },
      { name: 'asr', time: prayerTimesData.asr },
      { name: 'maghrib', time: prayerTimesData.maghrib },
      { name: 'isha', time: prayerTimesData.isha }
    ];
    
    // Update prayer time displays
    prayers.forEach(prayer => {
      const elements = document.querySelectorAll(`[data-prayer="${prayer.name}"]`);
      elements.forEach(el => {
        el.textContent = prayer.time;
      });
    });
    
    // Update date
    const dateElements = document.querySelectorAll('.prayer-widget-date');
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateStr = now.toLocaleDateString(this.currentLang === 'ar' ? 'ar-SA' : 'en-US', dateOptions);
    dateElements.forEach(el => {
      el.textContent = dateStr;
    });
    
    // Find next prayer
    this.updateNextPrayer(prayers);
  },
  
  updateNextPrayer(prayers) {
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();
    
    let nextPrayer = null;
    let minDiff = Infinity;
    
    prayers.forEach(prayer => {
      const [hours, minutes] = prayer.time.split(':').map(Number);
      const prayerTime = hours * 60 + minutes;
      const diff = prayerTime - currentTime;
      
      if (diff > 0 && diff < minDiff) {
        minDiff = diff;
        nextPrayer = prayer;
      }
    });
    
    // If no next prayer today, Fajr is next
    if (!nextPrayer) {
      nextPrayer = prayers[0];
      minDiff = (24 * 60 - currentTime) + (5 * 60 + 30); // Approximate
    }
    
    // Update next prayer display
    const nextPrayerNameEl = document.querySelector('.prayer-countdown-name');
    const nextPrayerTimeEl = document.querySelector('.prayer-countdown-time');
    
    if (nextPrayerNameEl) {
      nextPrayerNameEl.textContent = this.getText(`prayer_${nextPrayer.name}`);
    }
    
    // Highlight active prayer
    document.querySelectorAll('.prayer-time-item').forEach(el => {
      el.classList.remove('active');
    });
    
    const activePrayerEl = document.querySelector(`.prayer-time-item[data-prayer-item="${nextPrayer.name}"]`);
    if (activePrayerEl) {
      activePrayerEl.classList.add('active');
    }
    
    this.nextPrayer = nextPrayer;
    this.nextPrayerMinutes = minDiff;
  },
  
  startCountdown() {
    const updateCountdown = () => {
      if (!this.nextPrayer) return;
      
      const now = new Date();
      const [hours, minutes] = this.nextPrayer.time.split(':').map(Number);
      const prayerTime = new Date(now);
      prayerTime.setHours(hours, minutes, 0, 0);
      
      if (prayerTime < now) {
        prayerTime.setDate(prayerTime.getDate() + 1);
      }
      
      const diff = prayerTime - now;
      const diffHours = Math.floor(diff / (1000 * 60 * 60));
      const diffMinutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const diffSeconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      const countdownEl = document.querySelector('.prayer-countdown-time');
      if (countdownEl) {
        countdownEl.textContent = `${String(diffHours).padStart(2, '0')}:${String(diffMinutes).padStart(2, '0')}:${String(diffSeconds).padStart(2, '0')}`;
      }
      if (diff <= 1000) {
        const key = `${new Date().toDateString()}-${this.nextPrayer.name}`;
        if (!this.azanPlayedFor[key]) {
          if (this.azanAudio) {
            this.azanAudio.play().catch(() => {});
          }
          this.azanPlayedFor[key] = true;
        }
      }
    };
    
    updateCountdown();
    this.countdownInterval = setInterval(updateCountdown, 1000);
  },
  
  // ============================================
  // FAQ ACCORDION
  // ============================================
  initFAQ() {
    const faqContainer = document.querySelector('.faq-list');
    if (!faqContainer) return;
    
    this.renderFAQ();
    
    // Event delegation for FAQ items
    faqContainer.addEventListener('click', (e) => {
      const question = e.target.closest('.faq-question');
      if (!question) return;
      
      const answer = question.nextElementSibling;
      const isActive = question.classList.contains('active');
      
      // Close all others
      faqContainer.querySelectorAll('.faq-question').forEach(q => {
        q.classList.remove('active');
        q.nextElementSibling.classList.remove('active');
      });
      
      // Toggle current
      if (!isActive) {
        question.classList.add('active');
        answer.classList.add('active');
      }
    });
  },
  
  renderFAQ() {
    const faqContainer = document.querySelector('.faq-list');
    if (!faqContainer) return;
    
    faqContainer.innerHTML = faqData.map((faq, index) => `
      <div class="faq-item" data-faq-index="${index}">
        <button class="faq-question" type="button">
          ${this.currentLang === 'ar' ? faq.questionAr : faq.question}
        </button>
        <div class="faq-answer">
          <p>${this.currentLang === 'ar' ? faq.answerAr : faq.answer}</p>
        </div>
      </div>
    `).join('');
  },
  
  updateFAQLanguage() {
    this.renderFAQ();
  },
  
  // ============================================
  // FORM VALIDATION
  // ============================================
  initForms() {
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (this.validateForm(form)) {
          // Show success message
          alert(this.currentLang === 'ar' ? 'تم إرسال النموذج بنجاح!' : 'Form submitted successfully!');
          form.reset();
        }
      });
    });
  },
  
  validateForm(form) {
    let isValid = true;
    
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        isValid = false;
        field.style.borderColor = '#dc3545';
      } else {
        field.style.borderColor = '';
      }
    });
    
    // Email validation
    const emailField = form.querySelector('input[type="email"]');
    if (emailField && emailField.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(emailField.value)) {
        isValid = false;
        emailField.style.borderColor = '#dc3545';
      }
    }
    
    return isValid;
  },
  
  // ============================================
  // SEARCH FUNCTIONALITY
  // ============================================
  initSearch() {
    const searchInput = document.querySelector('.search-input');
    const searchResults = document.querySelector('.search-results');
    
    if (!searchInput) return;
    
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      
      if (query.length < 2) {
        this.showAllContent();
        return;
      }
      
      this.performSearch(query);
    });
  },
  
  performSearch(query) {
    // Search in events
    const eventCards = document.querySelectorAll('.event-card');
    eventCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? 'block' : 'none';
    });
    
    // Search in info cards
    const infoCards = document.querySelectorAll('.info-card');
    infoCards.forEach(card => {
      const text = card.textContent.toLowerCase();
      card.style.display = text.includes(query) ? 'block' : 'none';
    });
    
    // Search in service items
    const serviceItems = document.querySelectorAll('.service-item');
    serviceItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(query) ? 'grid' : 'none';
    });
  },
  
  showAllContent() {
    document.querySelectorAll('.event-card, .info-card').forEach(el => {
      el.style.display = 'block';
    });
    document.querySelectorAll('.service-item').forEach(el => {
      el.style.display = 'grid';
    });
  },
  
  // ============================================
  // CALENDAR
  // ============================================
  initCalendar() {
    const calendarContainer = document.querySelector('.calendar-grid');
    if (!calendarContainer) return;
    
    this.renderCalendar();
  },
  
  renderCalendar() {
    const calendarContainer = document.querySelector('.calendar-grid');
    if (!calendarContainer) return;
    
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const today = now.getDate();
    
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Get event dates
    const eventDates = eventsData.map(e => new Date(e.date).getDate());
    
    let html = '';
    
    // Day headers
    const dayHeaders = this.currentLang === 'ar' 
      ? ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س']
      : ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    
    dayHeaders.forEach(day => {
      html += `<div class="calendar-header">${day}</div>`;
    });
    
    // Empty cells for days before month starts
    for (let i = 0; i < firstDay; i++) {
      html += '<div></div>';
    }
    
    // Days
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday = day === today;
      const hasEvent = eventDates.includes(day);
      const classes = ['calendar-day'];
      
      if (isToday) classes.push('today');
      if (hasEvent) classes.push('event');
      
      html += `<div class="${classes.join(' ')}" data-day="${day}">${day}</div>`;
    }
    
    calendarContainer.innerHTML = html;
  },
  
  // ============================================
  // EVENTS
  // ============================================
  updateEventsLanguage() {
    const eventCards = document.querySelectorAll('.event-card');
    
    eventCards.forEach((card, index) => {
      const event = eventsData[index];
      if (!event) return;
      
      const titleEl = card.querySelector('.event-title');
      const descEl = card.querySelector('.event-description');
      const locationEl = card.querySelector('.event-location');
      const timeEl = card.querySelector('.event-time');
      
      if (titleEl) titleEl.textContent = this.currentLang === 'ar' ? event.titleAr : event.title;
      if (descEl) descEl.textContent = this.currentLang === 'ar' ? event.descriptionAr : event.description;
      if (locationEl) locationEl.textContent = this.currentLang === 'ar' ? event.locationAr : event.location;
      if (timeEl) timeEl.textContent = this.currentLang === 'ar' ? event.timeAr : event.time;
    });
  }
};

// ============================================
// INITIALIZE ON DOM READY
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  MosqueApp.init();
});

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  if (MosqueApp.prayerInterval) {
    clearInterval(MosqueApp.prayerInterval);
  }
  if (MosqueApp.countdownInterval) {
    clearInterval(MosqueApp.countdownInterval);
  }
});

// ============================================
// DONATION MODAL & PRELOADER (Scoped Injection)
// ============================================
(function () {
  // Preloader
  function injectPreloader() {
    if (document.querySelector('.preloader-overlay')) return;
    const overlay = document.createElement('div');
    let removed = false;
    overlay.className = 'preloader-overlay';
    overlay.innerHTML = `
      <div class="preloader-symbol" aria-hidden="true">
        <div class="preloader-crescent"></div>
        <div class="preloader-star"></div>
      </div>
    `;
    document.body.prepend(overlay);
    const remove = () => {
      if (removed) return;
      removed = true;
      overlay.classList.add('preloader-hidden');
      setTimeout(() => overlay.remove(), 500);
    };
    window.addEventListener('load', remove, { once: true });
    setTimeout(remove, 5000);
  }

  document.addEventListener('DOMContentLoaded', () => {
    injectPreloader();
  });
})();
