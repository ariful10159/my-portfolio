// ===================================
// Portfolio Header/Hero JavaScript
// ===================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // ===================================
    // Theme Toggle (Dark/Light)
    // ===================================
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = document.getElementById('themeIcon');
    const savedTheme = localStorage.getItem('portfolioTheme');

    function applyTheme(theme) {
        const isLight = theme === 'light';
        document.body.classList.toggle('light-theme', isLight);

        if (themeIcon) {
            themeIcon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
        }

        if (themeToggle) {
            const nextModeLabel = isLight ? 'Switch to dark mode' : 'Switch to light mode';
            themeToggle.setAttribute('aria-label', nextModeLabel);
            themeToggle.setAttribute('title', nextModeLabel);
        }
    }

    applyTheme(savedTheme === 'dark' ? 'dark' : 'light');

    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const isCurrentlyLight = document.body.classList.contains('light-theme');
            const nextTheme = isCurrentlyLight ? 'dark' : 'light';
            applyTheme(nextTheme);
            localStorage.setItem('portfolioTheme', nextTheme);
        });
    }

    const languageToggle = document.getElementById('languageToggle');
    let currentLanguage = localStorage.getItem('portfolioLanguage') || 'en';

    const languagePack = {
        en: {
            navLinks: ['About', 'Skills', 'Education', 'Experience', 'Projects', 'Contact'],
            headerCta: 'Get in Touch',
            heroBadge: 'Open to Opportunities',
            heroTitle: 'Hi, I\'m <span class="highlight">Ariful Islam Masum</span>',
            heroSubtitle: 'Data Science Enthusiast & Flutter Developer',
            heroDescription: 'Passionate about leveraging data to drive insights and building beautiful, cross-platform mobile applications. Always eager to learn and tackle new challenges.',
            heroButtons: ['View My Work', 'CV Coming Soon'],
            scrollText: 'Scroll to explore',
            aboutLabel: 'ABOUT ME',
            aboutTitle: 'Building Intelligent & Practical <span class="highlight">Digital Solutions</span>',
            aboutParagraphs: [
                'BSc CSE student at <strong>Patuakhali Science and Technology University (PSTU)</strong> with a strong passion for Software Development, Artificial Intelligence, and Data-Driven Applications. I focus on building intelligent and practical solutions that solve real-world problems.',
                'Experience working with Machine Learning, Deep Learning, CNN, RNN, LSTM, and GRU for building predictive and intelligent models using Python.',
                'Alongside AI work, I develop real-world applications including Flutter mobile apps and web-based systems using technologies like Flutter, Firebase, PHP, and MySQL.',
                'I enjoy solving real-world problems through practical projects, combining AI models, mobile applications, and web systems.'
            ],
            aboutSubtitles: [
                '<i class="fas fa-brain"></i> AI & Data Science Skills',
                '<i class="fas fa-code"></i> Development Experience',
                '<i class="fas fa-rocket"></i> Project Focus'
            ],
            statTitles: ['Projects Built', 'Experience', 'Projects'],
            statDescriptions: ['AI models, Flutter apps, and web systems.', 'Hands-on work with Deep Learning models.', 'Working with real datasets and predictive models.'],
            skillsLabel: 'MY EXPERTISE',
            skillsTitle: 'Skills & <span class="highlight">Technologies</span>',
            skillsDescription: 'A comprehensive toolkit spanning Data Science, Artificial Intelligence, mobile app development, and modern web technologies.',
            skillCardTitles: ['Data Science & Machine Learning', 'Mobile App Development', 'IoT & Embedded Systems', 'Web Development', 'Tools & Platforms', 'UI/UX & Creative Tools'],
            skillCardTags: [
                ['Python', 'Data Analysis', 'Machine Learning', 'Model Training', 'Feature Engineering', 'Data Visualization', 'Pandas', 'NumPy', 'Scikit-learn'],
                ['Flutter', 'Dart', 'Firebase', 'Firebase', 'Firestore', 'REST API', 'State Management', 'UI Design'],
                ['Arduino', 'Raspberry Pi', 'Sensor Integration', 'Embedded System', 'Automation Systems'],
                ['HTML5', 'CSS3', 'Node.js', 'PostgreSQL', 'MongoDB', 'JavaScript', 'PHP', 'MySQL', 'Responsive Web Design'],
                ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'XAMPP', 'Linux'],
                ['Figma', 'Adobe Illustrator', 'Photoshop']
            ],
            educationLabel: 'ACADEMIC JOURNEY',
            educationTitle: 'Education',
            currentBadge: 'Currently Pursuing',
            educationDegrees: ['Bachelor of Science in Computer Science & Engineering', 'Higher Secondary Certificate (HSC)', 'Secondary School Certificate (SSC)'],
            educationDurations: ['2023 – 2027', '2019 – 2021', '2008 – 2018'],
            experienceLabel: 'CAREER JOURNEY',
            experienceTitle: 'Experience',
            workBadge: 'Currently Working',
            experienceRole: 'Academic Projects & Software Development',
            experienceType: 'Academic & Personal Projects',
            keyActivities: 'Key Activities',
            activityItems: [
                'Developing two Flutter applications: a Blood Donation System and <b>Care Connect for Barisal (Smart City project)</b>',
                'Working with Flutter, Firebase, Firestore, Node.js, and PostgreSQL for full-stack application development',
                'Building a robotic arm project using Raspberry Pi 5',
                'Developing a business management system using Flutter',
                'Focusing on backend development and API integration using Node.js',
                'Improving database skills with PostgreSQL and Firestore',
                'Maintaining strong focus on academic studies alongside project development'
            ],
            projectsLabel: 'SHOWCASE',
            projectsTitle: 'Featured <span class="highlight">Projects</span>',
            projectsDescription: 'A collection of projects showcasing my skills in app development, data science, and software engineering.',
            featuredBadge: 'Featured',
            featuredCategory: 'Mobile App',
            featuredTitle: 'Blood Donation Mobile App',
            featuredDescription: 'Cross-platform mobile application enabling seamless blood donor registration, real-time blood inventory tracking, and emergency blood request management with intuitive UI/UX design.',
            projectTitles: ['RentSyne', 'Bus_Map_Dhaka', 'CareConnect (Barisal Smart City)', 'Whatsping', 'ATM Maintenance & Monitoring System', 'Library Management System'],
            projectDescriptions: [
                'Comprehensive flat rent and service charge management system with automated billing, tenant tracking, payment management, and tenant dashboard.',
                'Real-time bus tracking mobile application for Dhaka city. The app helps users locate buses, view routes, and improve daily commuting experience using live map integration and smart navigation features.',
                'A smart healthcare mobile application designed for Barisal city. It helps users find nearby doctors, hospitals, and diagnostic centers, view hospital locations, check available medical services, and compare test prices. The app also includes a blood donor finder system to support emergency situations.',
                'Professional responsive business website for client with modern design, SEO optimization, and seamless user experience across all devices.',
                'Academic desktop application for monitoring and maintaining ATM systems with real-time status tracking, transaction logs, and maintenance scheduling features.',
                'Comprehensive web-based library management system with book cataloging, checkout processes, due date tracking, and patron management features for efficient library operations.'
            ],
            projectButton: 'View on GitHub',
            contactLabel: 'GET IN TOUCH',
            contactTitle: 'Let\'s Work <span class="highlight">Together</span>',
            contactDescription: 'Have a project in mind or want to discuss opportunities in AI, mobile apps, or software development? I\'d love to hear from you.',
            formLabels: ['Name', 'Email', 'Subject', 'Message'],
            placeholders: ['Your name', 'your.email@example.com', 'What is this about?', 'Your message...'],
            sendButton: 'Send Message',
            sendingButton: 'Sending...',
            helperText: 'I usually respond within 24 hours.',
            infoTitles: ['Email', 'Location', 'Availability', 'Connect With Me', 'Opportunities'],
            locationText: 'Cumilla, Bangladesh',
            availabilityText: 'Remote | Part-time | Full-time',
            opportunitiesText: 'Open to Remote, Part-time, and Full-time opportunities in:',
            opportunitiesList: ['Data Science & AI', 'Flutter Development', 'Web Development'],
            footerTagline: 'Data Science enthusiast and Flutter developer building intelligent applications and modern digital solutions.',
            footerQuickLinks: 'Quick Links',
            footerConnect: 'Connect',
            footerLinks: ['About', 'Skills', 'Projects', 'Education', 'Contact'],
            footerCredit: 'Built with <i class="fas fa-heart"></i> in Bangladesh',
            cvNotice: 'My CV will be uploaded soon.',
            validationErrors: {
                nameRequired: 'Name is required',
                nameMin: 'Name must be at least 2 characters',
                namePattern: 'Name can only contain letters and spaces',
                emailRequired: 'Email is required',
                emailPattern: 'Please enter a valid email address',
                subjectRequired: 'Subject is required',
                subjectMin: 'Subject must be at least 5 characters',
                messageRequired: 'Message is required',
                messageMin: 'Message must be at least 10 characters',
                genericError: 'An error occurred. Please try again.'
            },
            mailBodyLabels: {
                name: 'Name',
                email: 'Email',
                message: 'Message'
            }
        },
        bn: {
            navLinks: ['আমার সম্পর্কে', 'স্কিলস', 'শিক্ষা', 'অভিজ্ঞতা', 'প্রজেক্টস', 'যোগাযোগ'],
            headerCta: 'যোগাযোগ করুন',
            heroBadge: 'নতুন সুযোগের জন্য প্রস্তুত',
            heroTitle: 'হ্যালো, আমি <span class="highlight">আরিফুল ইসলাম মাসুম</span>',
            heroSubtitle: 'ডেটা সায়েন্স এনথুসিয়াস্ট ও ফ্লাটার ডেভেলপার',
            heroDescription: 'ডেটা থেকে ইনসাইট বের করা এবং সুন্দর ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ তৈরি করতে আমি আগ্রহী। নতুন কিছু শেখা এবং চ্যালেঞ্জ নেওয়া আমার পছন্দ।',
            heroButtons: ['আমার কাজ দেখুন', 'সিভি শীঘ্রই আসছে'],
            scrollText: 'আরও দেখতে স্ক্রল করুন',
            aboutLabel: 'আমার সম্পর্কে',
            aboutTitle: 'ইন্টেলিজেন্ট ও প্র্যাকটিক্যাল <span class="highlight">ডিজিটাল সমাধান</span> তৈরি করি',
            aboutParagraphs: [
                '<strong>পটুয়াখালী বিজ্ঞান ও প্রযুক্তি বিশ্ববিদ্যালয় (PSTU)</strong>-এর CSE শিক্ষার্থী হিসেবে আমার মূল আগ্রহ সফটওয়্যার ডেভেলপমেন্ট, আর্টিফিশিয়াল ইন্টেলিজেন্স এবং ডেটা-ড্রিভেন অ্যাপ্লিকেশন। বাস্তব সমস্যার জন্য কার্যকর সমাধান তৈরি করাই আমার লক্ষ্য।',
                'Python ব্যবহার করে Machine Learning, Deep Learning, CNN, RNN, LSTM এবং GRU নিয়ে কাজ করার অভিজ্ঞতা রয়েছে।',
                'AI কাজের পাশাপাশি Flutter মোবাইল অ্যাপ ও Firebase, PHP, MySQL ভিত্তিক ওয়েব সিস্টেম ডেভেলপ করি।',
                'AI মডেল, মোবাইল অ্যাপ এবং ওয়েব সিস্টেম একসাথে ব্যবহার করে বাস্তব সমস্যার সমাধান করতে আমি পছন্দ করি।'
            ],
            aboutSubtitles: [
                '<i class="fas fa-brain"></i> AI ও ডেটা সায়েন্স স্কিলস',
                '<i class="fas fa-code"></i> ডেভেলপমেন্ট অভিজ্ঞতা',
                '<i class="fas fa-rocket"></i> প্রজেক্ট ফোকাস'
            ],
            statTitles: ['তৈরি করা প্রজেক্ট', 'অভিজ্ঞতা', 'প্রজেক্টস'],
            statDescriptions: ['AI মডেল, Flutter অ্যাপ এবং ওয়েব সিস্টেম।', 'Deep Learning মডেল নিয়ে হাতে-কলমে কাজ।', 'বাস্তব ডেটাসেট ও প্রেডিক্টিভ মডেল নিয়ে কাজ।'],
            skillsLabel: 'আমার দক্ষতা',
            skillsTitle: 'স্কিলস ও <span class="highlight">টেকনোলজি</span>',
            skillsDescription: 'ডেটা সায়েন্স, কৃত্রিম বুদ্ধিমত্তা, মোবাইল অ্যাপ ডেভেলপমেন্ট এবং আধুনিক ওয়েব টেকনোলজির একটি সমন্বিত টুলকিট।',
            skillCardTitles: ['ডেটা সায়েন্স ও মেশিন লার্নিং', 'মোবাইল অ্যাপ ডেভেলপমেন্ট', 'IoT ও এমবেডেড সিস্টেমস', 'ওয়েব ডেভেলপমেন্ট', 'টুলস ও প্ল্যাটফর্ম', 'UI/UX ও ক্রিয়েটিভ টুলস'],
            skillCardTags: [
                ['Python', 'Data Analysis', 'Machine Learning', 'Model Training', 'Feature Engineering', 'Data Visualization', 'Pandas', 'NumPy', 'Scikit-learn'],
                ['Flutter', 'Dart', 'Firebase', 'Firebase', 'Firestore', 'REST API', 'State Management', 'UI Design'],
                ['Arduino', 'Raspberry Pi', 'Sensor Integration', 'Embedded System', 'Automation Systems'],
                ['HTML5', 'CSS3', 'Node.js', 'PostgreSQL', 'MongoDB', 'JavaScript', 'PHP', 'MySQL', 'Responsive Web Design'],
                ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'XAMPP', 'Linux'],
                ['Figma', 'Adobe Illustrator', 'Photoshop']
            ],
            educationLabel: 'শিক্ষা যাত্রা',
            educationTitle: 'শিক্ষা',
            currentBadge: 'বর্তমানে অধ্যয়নরত',
            educationDegrees: ['কম্পিউটার সায়েন্স অ্যান্ড ইঞ্জিনিয়ারিং-এ ব্যাচেলর অব সায়েন্স', 'উচ্চ মাধ্যমিক সার্টিফিকেট (HSC)', 'মাধ্যমিক স্কুল সার্টিফিকেট (SSC)'],
            educationDurations: ['২০২৩ – ২০২৭', '২০১৯ – ২০২১', '২০০৮ – ২০১৮'],
            experienceLabel: 'ক্যারিয়ার যাত্রা',
            experienceTitle: 'অভিজ্ঞতা',
            workBadge: 'বর্তমানে কাজ করছি',
            experienceRole: 'একাডেমিক প্রজেক্ট ও সফটওয়্যার ডেভেলপমেন্ট',
            experienceType: 'একাডেমিক ও পার্সোনাল প্রজেক্টস',
            keyActivities: 'মূল কাজসমূহ',
            activityItems: [
                'দুটি Flutter অ্যাপ তৈরি করছি: Blood Donation System এবং <b>Care Connect for Barisal (Smart City project)</b>',
                'Flutter, Firebase, Firestore, Node.js এবং PostgreSQL দিয়ে ফুল-স্ট্যাক অ্যাপ ডেভেলপমেন্টে কাজ করছি',
                'Raspberry Pi 5 ব্যবহার করে রোবোটিক আর্ম প্রজেক্ট তৈরি করছি',
                'Flutter ব্যবহার করে একটি বিজনেস ম্যানেজমেন্ট সিস্টেম ডেভেলপ করছি',
                'Node.js দিয়ে ব্যাকএন্ড ডেভেলপমেন্ট ও API integration-এ ফোকাস করছি',
                'PostgreSQL এবং Firestore-এ ডেটাবেস স্কিল উন্নত করছি',
                'প্রজেক্ট ডেভেলপমেন্টের পাশাপাশি একাডেমিক পড়াশোনায়ও ফোকাস রাখছি'
            ],
            projectsLabel: 'শোকেস',
            projectsTitle: 'ফিচার্ড <span class="highlight">প্রজেক্টস</span>',
            projectsDescription: 'অ্যাপ ডেভেলপমেন্ট, ডেটা সায়েন্স এবং সফটওয়্যার ইঞ্জিনিয়ারিংয়ে আমার দক্ষতা তুলে ধরা কিছু প্রজেক্ট।',
            featuredBadge: 'বিশেষ প্রজেক্ট',
            featuredCategory: 'মোবাইল অ্যাপ',
            featuredTitle: 'ব্লাড ডোনেশন মোবাইল অ্যাপ',
            featuredDescription: 'ব্যবহারবান্ধব UI/UX সহ ডোনার রেজিস্ট্রেশন, রিয়েল-টাইম ব্লাড ইনভেন্টরি ট্র্যাকিং এবং জরুরি রক্তের অনুরোধ ব্যবস্থাপনার জন্য ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ।',
            projectTitles: ['RentSyne', 'Bus_Map_Dhaka', 'CareConnect (Barisal Smart City)', 'Whatsping', 'ATM Maintenance & Monitoring System', 'Library Management System'],
            projectDescriptions: [
                'অটোমেটেড বিলিং, টেন্যান্ট ট্র্যাকিং, পেমেন্ট ম্যানেজমেন্ট এবং টেন্যান্ট ড্যাশবোর্ডসহ সম্পূর্ণ ফ্ল্যাট ভাড়া ও সার্ভিস চার্জ ম্যানেজমেন্ট সিস্টেম।',
                'ঢাকা শহরের জন্য রিয়েল-টাইম বাস ট্র্যাকিং মোবাইল অ্যাপ। এই অ্যাপ ব্যবহারকারীদের বাস খুঁজে পাওয়া, রুট দেখা এবং লাইভ ম্যাপ ইন্টিগ্রেশনের মাধ্যমে যাতায়াত সহজ করতে সাহায্য করে।',
                'বরিশাল শহরের জন্য তৈরি একটি স্মার্ট হেলথকেয়ার মোবাইল অ্যাপ। ব্যবহারকারীরা কাছের ডাক্তার, হাসপাতাল, ডায়াগনস্টিক সেন্টার খুঁজে পায়, মেডিকেল সার্ভিস ও টেস্ট প্রাইস তুলনা করতে পারে এবং জরুরি প্রয়োজনে ব্লাড ডোনার খুঁজে পায়।',
                'ক্লায়েন্টের জন্য তৈরি আধুনিক, SEO-অপ্টিমাইজড এবং সব ডিভাইসে responsive বিজনেস ওয়েবসাইট।',
                'রিয়েল-টাইম স্ট্যাটাস ট্র্যাকিং, ট্রানজ্যাকশন লগ এবং মেইনটেন্যান্স শিডিউলিংসহ ATM সিস্টেম মনিটরিংয়ের একাডেমিক ডেস্কটপ অ্যাপ্লিকেশন।',
                'বুক ক্যাটালগিং, ইস্যু/রিটার্ন, ডিউ-ডেট ট্র্যাকিং এবং প্যাট্রন ম্যানেজমেন্টসহ সম্পূর্ণ ওয়েব-ভিত্তিক লাইব্রেরি ম্যানেজমেন্ট সিস্টেম।'
            ],
            projectButton: 'GitHub-এ দেখুন',
            contactLabel: 'যোগাযোগ করুন',
            contactTitle: 'চলুন একসাথে <span class="highlight">কাজ করি</span>',
            contactDescription: 'আপনার কোনো প্রজেক্ট আইডিয়া আছে, বা AI, মোবাইল অ্যাপ, কিংবা সফটওয়্যার ডেভেলপমেন্ট নিয়ে আলোচনা করতে চান? আমি শুনতে আগ্রহী।',
            formLabels: ['নাম', 'ইমেইল', 'বিষয়', 'মেসেজ'],
            placeholders: ['আপনার নাম', 'your.email@example.com', 'বিষয় লিখুন', 'আপনার মেসেজ...'],
            sendButton: 'মেসেজ পাঠান',
            sendingButton: 'পাঠানো হচ্ছে...',
            helperText: 'আমি সাধারণত ২৪ ঘণ্টার মধ্যে উত্তর দিই।',
            infoTitles: ['ইমেইল', 'অবস্থান', 'উপস্থিতি', 'আমার সাথে যুক্ত থাকুন', 'সুযোগসমূহ'],
            locationText: 'কুমিল্লা, বাংলাদেশ',
            availabilityText: 'রিমোট | পার্ট-টাইম | ফুল-টাইম',
            opportunitiesText: 'নিম্নোক্ত ক্ষেত্রে রিমোট, পার্ট-টাইম এবং ফুল-টাইম সুযোগের জন্য প্রস্তুত:',
            opportunitiesList: ['ডেটা সায়েন্স ও AI', 'Flutter ডেভেলপমেন্ট', 'ওয়েব ডেভেলপমেন্ট'],
            footerTagline: 'ডেটা সায়েন্স এনথুসিয়াস্ট ও ফ্লাটার ডেভেলপার হিসেবে আমি ইন্টেলিজেন্ট অ্যাপ্লিকেশন এবং আধুনিক ডিজিটাল সমাধান তৈরি করি।',
            footerQuickLinks: 'দ্রুত লিংক',
            footerConnect: 'সংযুক্ত থাকুন',
            footerLinks: ['আমার সম্পর্কে', 'স্কিলস', 'প্রজেক্টস', 'শিক্ষা', 'যোগাযোগ'],
            footerCredit: 'বাংলাদেশে <i class="fas fa-heart"></i> দিয়ে তৈরি',
            cvNotice: 'আমার সিভি শীঘ্রই আপলোড করা হবে।',
            validationErrors: {
                nameRequired: 'নাম দেওয়া প্রয়োজন',
                nameMin: 'নাম অন্তত ২ অক্ষরের হতে হবে',
                namePattern: 'নামে শুধু অক্ষর এবং স্পেস ব্যবহার করুন',
                emailRequired: 'ইমেইল দেওয়া প্রয়োজন',
                emailPattern: 'সঠিক ইমেইল ঠিকানা লিখুন',
                subjectRequired: 'বিষয় দেওয়া প্রয়োজন',
                subjectMin: 'বিষয় অন্তত ৫ অক্ষরের হতে হবে',
                messageRequired: 'মেসেজ দেওয়া প্রয়োজন',
                messageMin: 'মেসেজ অন্তত ১০ অক্ষরের হতে হবে',
                genericError: 'একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।'
            },
            mailBodyLabels: {
                name: 'নাম',
                email: 'ইমেইল',
                message: 'মেসেজ'
            }
        }
    };

    function setText(selector, value) {
        const el = document.querySelector(selector);
        if (el) el.textContent = value;
    }

    function setHTML(selector, value) {
        const el = document.querySelector(selector);
        if (el) el.innerHTML = value;
    }

    function setTextList(selector, values) {
        const elements = document.querySelectorAll(selector);
        values.forEach((value, index) => {
            if (elements[index]) {
                elements[index].textContent = value;
            }
        });
    }

    function setHTMLList(selector, values) {
        const elements = document.querySelectorAll(selector);
        values.forEach((value, index) => {
            if (elements[index]) {
                elements[index].innerHTML = value;
            }
        });
    }

    function applyLanguage(lang) {
        currentLanguage = lang === 'bn' ? 'bn' : 'en';
        localStorage.setItem('portfolioLanguage', currentLanguage);
        document.documentElement.lang = currentLanguage;

        const t = languagePack[currentLanguage];

        if (languageToggle) {
            const next = currentLanguage === 'en' ? 'BN' : 'EN';
            languageToggle.textContent = next;
            languageToggle.setAttribute('aria-label', currentLanguage === 'en' ? 'Switch to Bangla' : 'Switch to English');
            languageToggle.setAttribute('title', currentLanguage === 'en' ? 'Switch to Bangla' : 'Switch to English');
        }

        setTextList('.nav-menu .nav-link', t.navLinks);
        setText('.nav-right .btn.btn-primary', t.headerCta);
        setHTML('.badge-pill', `<span class="badge-dot"></span>${t.heroBadge}`);
        setHTML('.hero-title', t.heroTitle);
        setText('.hero-subtitle', t.heroSubtitle);
        setText('.hero-description', t.heroDescription);
        setHTML('.hero-actions .btn-secondary', `${t.heroButtons[0]}<i class="fas fa-arrow-right"></i>`);
        setHTML('#downloadCvBtn', `<i class="fas fa-download"></i>${t.heroButtons[1]}`);
        setText('.scroll-text', t.scrollText);

        setText('.about .section-label', t.aboutLabel);
        setHTML('.about .section-title', t.aboutTitle);
        setHTMLList('.about-content .about-text .about-subtitle', t.aboutSubtitles);
        setHTMLList('.about-content .about-text .about-paragraph', t.aboutParagraphs);
        setTextList('.about-stats .stat-title', t.statTitles);
        setTextList('.about-stats .stat-description', t.statDescriptions);

        setText('.skills .section-label', t.skillsLabel);
        setHTML('.skills .section-title', t.skillsTitle);
        setText('.skills .section-description', t.skillsDescription);
        setTextList('.skills-grid .skill-title', t.skillCardTitles);

        t.skillCardTags.forEach((tags, cardIndex) => {
            setTextList(`.skills-grid .skill-card:nth-child(${cardIndex + 1}) .skill-tag`, tags);
        });

        setText('.education .section-label', t.educationLabel);
        setText('.education .section-title', t.educationTitle);
        setHTML('.education .education-badge', `<span class="badge-dot"></span>${t.currentBadge}`);
        setTextList('.education .education-degree', t.educationDegrees);
        setTextList('.education .education-duration span', t.educationDurations);

        setText('.experience .section-label', t.experienceLabel);
        setText('.experience .section-title', t.experienceTitle);
        setHTML('.experience .experience-badge', `<span class="badge-dot"></span>${t.workBadge}`);
        setText('.experience .experience-title', t.experienceRole);
        setText('.experience .experience-type span', t.experienceType);
        setText('.experience .description-heading', t.keyActivities);
        setHTMLList('.experience .activity-list li span', t.activityItems);

        setText('.projects .section-label', t.projectsLabel);
        setHTML('.projects .section-title', t.projectsTitle);
        setText('.projects .section-description', t.projectsDescription);
        setText('.featured-project .featured-badge', t.featuredBadge);
        setText('.featured-project .project-category span', t.featuredCategory);
        setText('.featured-project .project-title', t.featuredTitle);
        setText('.featured-project .project-description', t.featuredDescription);
        setTextList('.projects-grid .project-title', t.projectTitles);
        setTextList('.projects-grid .project-description', t.projectDescriptions);
        setHTMLList('.projects-content .btn-project', Array.from(document.querySelectorAll('.projects-content .btn-project')).map(() => `<i class="fab fa-github"></i>${t.projectButton}`));

        setText('.contact .section-label', t.contactLabel);
        setHTML('.contact .section-title', t.contactTitle);
        setText('.contact .section-description', t.contactDescription);
        setTextList('.contact-form label', t.formLabels);

        const formInputs = ['#name', '#email', '#subject', '#message'];
        formInputs.forEach((selector, index) => {
            const input = document.querySelector(selector);
            if (input) {
                input.setAttribute('placeholder', t.placeholders[index]);
            }
        });

        const sendButtonText = document.querySelector('.btn-send .btn-text');
        if (sendButtonText) {
            sendButtonText.textContent = t.sendButton;
        }

        const helperText = document.querySelector('.helper-text');
        if (helperText) {
            helperText.innerHTML = `<i class="fas fa-info-circle"></i> ${t.helperText}`;
        }

        setTextList('.contact-info .info-title', t.infoTitles);
        setText('.contact-info .info-card:nth-child(2) .info-text', t.locationText);
        setText('.contact-info .info-card:nth-child(3) .info-text', t.availabilityText);
        setText('.contact-info .info-card:nth-child(5) .info-text', t.opportunitiesText);
        setHTMLList('.opportunities-list li', t.opportunitiesList.map((item) => `<i class="fas fa-check-circle"></i> ${item}`));

        setText('.footer-tagline', t.footerTagline);
        setText('.footer-links .footer-section-title', t.footerQuickLinks);
        setText('.footer-social .footer-section-title', t.footerConnect);
        setTextList('.footer-nav a', t.footerLinks);
        setHTML('.footer-credit', t.footerCredit);
    }

    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            applyLanguage(currentLanguage === 'en' ? 'bn' : 'en');
        });
    }

    applyLanguage(currentLanguage);

    // CV download is not available yet, so show a notice on click.
    const downloadCvBtn = document.getElementById('downloadCvBtn');
    if (downloadCvBtn) {
        downloadCvBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert(languagePack[currentLanguage].cvNotice);
        });
    }
    
    // ===================================
    // Mobile Menu Toggle
    // ===================================
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (hamburger && navMenu) {
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (navMenu.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target);
            const isClickOnHamburger = hamburger.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ===================================
    // Sticky Header on Scroll
    // ===================================
    const header = document.getElementById('header');
    let lastScrollTop = 0;
    const scrollThreshold = 100;
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class for blur effect
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // ===================================
    // Smooth Scroll for Anchor Links
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if href is just "#"
            if (href === '#') {
                e.preventDefault();
                return;
            }
            
            const target = document.querySelector(href);
            
            if (target) {
                e.preventDefault();
                const headerHeight = header.offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // ===================================
    // Active Nav Link on Scroll
    // ===================================
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        const scrollPosition = window.pageYOffset + 200;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);
            
            if (navLink && scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                navLink.classList.add('active');
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);
    
    // ===================================
    // Intersection Observer for Animations
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe animated elements
    const animatedElements = document.querySelectorAll('.hero-content, .hero-image, .floating-badge');
    animatedElements.forEach(el => observer.observe(el));
    
    // ===================================
    // Scroll Indicator Hide on Scroll
    // ===================================
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > 200) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.pointerEvents = 'none';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.pointerEvents = 'auto';
            }
        });
        
        // Smooth scroll to next section when clicking scroll indicator
        scrollIndicator.addEventListener('click', function() {
            const hero = document.getElementById('hero');
            const nextSection = hero.nextElementSibling;
            
            if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
            }
        });
    }
    
    // ===================================
    // Parallax Effect for Hero Elements (Optional)
    // ===================================
    const heroImage = document.querySelector('.hero-image');
    const heroContent = document.querySelector('.hero-content');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (scrolled < window.innerHeight) {
            if (heroImage) {
                heroImage.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
            }
            if (heroContent) {
                heroContent.style.transform = `translateY(${scrolled * parallaxSpeed * 0.3}px)`;
            }
        }
    });
    
    // ===================================
    // Typing Effect for Hero Title (Optional Enhancement)
    // ===================================
    function typingEffect(element, text, speed = 100) {
        if (!element) return;
        
        let i = 0;
        element.textContent = '';
        
        function type() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        
        type();
    }
    
    // Uncomment to enable typing effect
    // const heroTitle = document.querySelector('.hero-title .highlight');
    // if (heroTitle) {
    //     const originalText = heroTitle.textContent;
    //     typingEffect(heroTitle, originalText, 80);
    // }
    
    // ===================================
    // Cursor Glow Effect (Optional Enhancement)
    // ===================================
    function createCursorGlow() {
        const cursorGlow = document.createElement('div');
        cursorGlow.classList.add('cursor-glow');
        document.body.appendChild(cursorGlow);
        
        let mouseX = 0, mouseY = 0;
        let glowX = 0, glowY = 0;
        
        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animate() {
            const dx = mouseX - glowX;
            const dy = mouseY - glowY;
            
            glowX += dx * 0.1;
            glowY += dy * 0.1;
            
            cursorGlow.style.left = glowX + 'px';
            cursorGlow.style.top = glowY + 'px';
            
            requestAnimationFrame(animate);
        }
        
        animate();
    }
    
    // Uncomment to enable cursor glow effect
    // if (window.innerWidth > 768) {
    //     createCursorGlow();
    // }
    
    // ===================================
    // Keyboard Navigation Enhancement
    // ===================================
    // Add keyboard support for buttons and links
    const interactiveElements = document.querySelectorAll('a, button, .social-icon, .social-icon-link');
    
    interactiveElements.forEach(element => {
        element.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    });
    
    // ===================================
    // Performance: Debounce Scroll Events
    // ===================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debounce to scroll-heavy functions
    const debouncedUpdateNav = debounce(updateActiveNavLink, 100);
    window.addEventListener('scroll', debouncedUpdateNav);
    
    // ===================================
    // Console Welcome Message
    // ===================================
    console.log('%c👋 Welcome to my Portfolio!', 'color: #FF7A00; font-size: 20px; font-weight: bold;');
    console.log('%cBuilt with ❤️ by Imamul Kabir Anan', 'color: #B4B4B8; font-size: 14px;');
    console.log('%cInterested in the code? Check out my GitHub!', 'color: #6B6B70; font-size: 12px;');
    
    // ===================================
    // Contact Form Validation & Submission
    // ===================================
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        const formInputs = {
            name: document.getElementById('name'),
            email: document.getElementById('email'),
            subject: document.getElementById('subject'),
            message: document.getElementById('message'),
            button: contactForm.querySelector('.btn-send')
        };

        const getValidationRules = () => {
            const e = languagePack[currentLanguage].validationErrors;
            return {
                name: {
                    minLength: 2,
                    pattern: /^[a-zA-Z\s]*$/,
                    errorMessages: {
                        required: e.nameRequired,
                        minLength: e.nameMin,
                        pattern: e.namePattern
                    }
                },
                email: {
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    errorMessages: {
                        required: e.emailRequired,
                        pattern: e.emailPattern
                    }
                },
                subject: {
                    minLength: 5,
                    errorMessages: {
                        required: e.subjectRequired,
                        minLength: e.subjectMin
                    }
                },
                message: {
                    minLength: 10,
                    errorMessages: {
                        required: e.messageRequired,
                        minLength: e.messageMin
                    }
                }
            };
        };

        // Form validation rules
        const validateField = (field, value) => {
            const rules = getValidationRules();

            const rule = rules[field];
            if (!value.trim()) {
                return rule.errorMessages.required;
            }
            if (rule.minLength && value.trim().length < rule.minLength) {
                return rule.errorMessages.minLength;
            }
            if (rule.pattern && !rule.pattern.test(value)) {
                return rule.errorMessages.pattern;
            }
            return null;
        };

        // Display error message
        const showError = (fieldName, errorMessage) => {
            const errorElement = document.getElementById(`${fieldName}Error`);
            const formGroup = formInputs[fieldName].parentElement;
            
            if (errorMessage) {
                errorElement.textContent = errorMessage;
                errorElement.classList.add('show');
                formGroup.classList.add('error');
            } else {
                errorElement.textContent = '';
                errorElement.classList.remove('show');
                formGroup.classList.remove('error');
            }
        };

        // Real-time validation on input
        Object.keys(formInputs).forEach(key => {
            if (key !== 'button' && formInputs[key]) {
                formInputs[key].addEventListener('input', function() {
                    const error = validateField(key, this.value);
                    showError(key, error);
                });

                formInputs[key].addEventListener('blur', function() {
                    const error = validateField(key, this.value);
                    showError(key, error);
                });
            }
        });

        // Form submission
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Validate all fields
            let hasErrors = false;
            Object.keys(formInputs).forEach(key => {
                if (key !== 'button') {
                    const error = validateField(key, formInputs[key].value);
                    showError(key, error);
                    if (error) hasErrors = true;
                }
            });

            if (hasErrors) return;

            // Show loading state
            const originalText = formInputs.button.innerHTML;
            formInputs.button.innerHTML = `<i class="fas fa-spinner fa-spin"></i> <span class="btn-text">${languagePack[currentLanguage].sendingButton}</span>`;
            formInputs.button.disabled = true;

            try {
                // Prepare form data
                const formData = new FormData(contactForm);
                const data = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message')
                };

                const mailLabels = languagePack[currentLanguage].mailBodyLabels;

                // Open default mail app with prefilled recipient, subject, and message.
                const recipientEmail = 'ug2102032@cse.pstu.ac.bd';
                const subjectText = String(data.subject || 'Portfolio Contact Message');
                const bodyText = [
                    `${mailLabels.name}: ${String(data.name || '')}`,
                    `${mailLabels.email}: ${String(data.email || '')}`,
                    '',
                    `${mailLabels.message}:`,
                    String(data.message || '')
                ].join('\n');

                const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
                window.location.href = mailtoLink;

                contactForm.reset();
                formInputs.button.innerHTML = originalText;
                formInputs.button.disabled = false;
            } catch (error) {
                console.error('Form submission error:', error);
                formInputs.button.innerHTML = originalText;
                formInputs.button.disabled = false;
                showError('message', languagePack[currentLanguage].validationErrors.genericError);
            }
        });
    }

    // ===================================
    // Back-to-Top Button
    // ===================================
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        // Smooth scroll to top
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

});

// ===================================
// Load Performance Optimization
// ===================================
// Lazy load images when they come into viewport
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Service Worker Registration (Optional - for PWA)
// ===================================
// if ('serviceWorker' in navigator) {
//     window.addEventListener('load', function() {
//         navigator.serviceWorker.register('/sw.js').then(
//             function(registration) {
//                 console.log('ServiceWorker registration successful');
//             },
//             function(err) {
//                 console.log('ServiceWorker registration failed: ', err);
//             }
//         );
//     });
// }
