(function() {
    'use strict';

    // ─── TRANSLATIONS ──────────────────────────────────────────
    const translations = {
        en: {
            dashboard: 'Dashboard',
            incoming_records: 'Incoming Records',
            outgoing_records: 'Outgoing Records',
            internal: 'Internal Memos',
            records: 'Records Repository',
            workflow: 'Workflow',
            archive: 'Archive Management',
            search: 'Search Records',
            reports: 'Reports',
            users: 'User Management',
            audit: 'Audit Trail',
            settings: 'Settings',
            logout: 'Logout',
            incoming: 'Incoming',
            outgoing: 'Outgoing',
            archived: 'Archived',
            registered: 'Registered',
            in_process: 'In Process',
            pending: 'Pending',
            completed: 'Completed',
            ref: 'Ref #',
            sender_unique: 'Sender Unique #',
            title: 'Title',
            sender: 'Sender',
            receiver: 'Receiver',
            attached: 'Attached',
            status: 'Status',
            date: 'Date',
            qr_code: 'QR Code',
            actions: 'Actions',
            register_incoming: 'Register Incoming',
            register_outgoing: 'Register Outgoing',
            new_internal: 'New Internal Memo',
            description: 'Description',
            attached_file: 'Attached File',
            remarks: 'Remarks',
            digital_signature: 'Digital Signature',
            review_approve: 'Review & Approve',
            review_internal: 'Review Internal Memo',
            review_outgoing: 'Outgoing Letter Review',
            create_outgoing: 'Create Outgoing Letter',
            submit_approval: 'Submit for Approval',
            save_send: 'Save & Send',
            send_memo: 'Send Memo',
            cancel: 'Cancel',
            close: 'Close',
            reject: 'Reject',
            approve: 'Approve',
            clear_signature: 'Clear Signature',
            signed_seal: 'Signed Digital Seal',
            add_user: 'Add New User',
            full_name: 'Full Name',
            email: 'Email',
            password: 'Password',
            department: 'Department',
            create_user: 'Create User',
            records_overview: 'Records Overview (This Year)',
            records_by_status: 'Records by Status',
            todays_activities: "Today's Activities",
            new_incomings: 'New Incomings',
            new_outgoings: 'New Outgoings',
            distributions: 'Distributions',
            approvals_received: 'Approvals Received',
            recent_records: 'Recent Records',
            view_all: 'View All',
            record_no: 'Record No.',
            type: 'Type',
            from_to: 'From / To',
            subject: 'Subject',
            received_date: 'Received Date',
            quick_actions: 'Quick Actions',
            distribute_record: 'Distribute Record',
            create_file: 'Create File',
            track_document: 'Track Document',
            generate_report: 'Generate Report',
            archive_record: 'Archive Record',
            upcoming_deadlines: 'Upcoming Deadlines',
            quarterly_report: 'Quarterly Report Submission',
            pending_distributions: 'Pending Distributions',
            archive_review: 'Archive Transfer Review',
            audit_deadline: 'Annual Audit Submission',
            storage_usage: 'Storage Usage',
            used: 'Used',
            total: 'Total',
            receiver_email: 'Receiver Email',
            classification: 'Classification',
            drag_drop: 'Drag & drop a file here, or click to browse',
            select_report: 'Select a report to preview.',
            generate_reports: 'Generate Reports',
            daily_register: 'Daily Register',
            monthly_summary: 'Monthly Summary',
            compliance_report: 'Compliance Report',
            workflow_performance: 'Workflow Performance',
            report_preview: 'Report Preview',
            date_from: 'Date From',
            date_to: 'Date To',
            clear: 'Clear',
            search_hint: 'Enter search criteria and click Search.',
            qr_details: 'QR Authenticated Details',
            qr_authenticated: 'NALA System QR Authenticated',
            letter_details: 'Letter Details',
            audit_desc: 'All system activities are logged here.',
            records_desc: 'Centralized electronic record classification and storage.',
            workflow_desc: 'Manage document routing rules and approval steps.',
            archive_desc: 'Long-term preserved records and historical documents.',
            role: 'Role',
            sign_here: 'Sign Here',
            draw_signature: 'Draw your digital signature below',
            approve_sign: 'Approve & Sign',
            sign_cancel: 'Cancel',
        },
        am: {
            dashboard: 'ዳሽቦርድ',
            incoming_records: 'ገቢ ሰነዶች',
            outgoing_records: 'ወጪ ሰነዶች',
            internal: 'የውስጥ ማስታወሻዎች',
            records: 'ሰነዶች መዝገብ',
            workflow: 'የስራ ሂደት',
            archive: 'ማህደር አስተዳደር',
            search: 'ሰነዶችን ፈልግ',
            reports: 'ሪፖርቶች',
            users: 'ተጠቃሚዎች',
            audit: 'የኦዲት መዝገብ',
            settings: 'ቅንብሮች',
            logout: 'ውጣ',
            incoming: 'ገቢ',
            outgoing: 'ወጪ',
            archived: 'ተመዝግቧል',
            registered: 'የተመዘገበ',
            in_process: 'በሂደት ላይ',
            pending: 'በመጠባበቅ',
            completed: 'ተጠናቅቋል',
            ref: 'ማጣቀሻ ቁጥር',
            sender_unique: 'ላኪ ልዩ ቁጥር',
            title: 'ርዕስ',
            sender: 'ላኪ',
            receiver: 'ተቀባይ',
            attached: 'የተያያዘ',
            status: 'ሁኔታ',
            date: 'ቀን',
            qr_code: 'QR ኮድ',
            actions: 'ድርጊቶች',
            register_incoming: 'ገቢ ይመዝገቡ',
            register_outgoing: 'ወጪ ይመዝገቡ',
            new_internal: 'አዲስ የውስጥ ማስታወሻ',
            description: 'መግለጫ',
            attached_file: 'የተያያዘ ፋይል',
            remarks: 'አስተያየቶች',
            digital_signature: 'ዲጂታል ፊርማ',
            review_approve: 'ገምግም እና ፀድቅ',
            review_internal: 'የውስጥ ማስታወሻ ገምግም',
            review_outgoing: 'ወጪ ደብዳቤ ገምግም',
            create_outgoing: 'አዲስ ወጪ ደብዳቤ ፍጠር',
            submit_approval: 'ለማጽደቅ አስገባ',
            save_send: 'አስቀምጥ እና ላክ',
            send_memo: 'ማስታወሻ ላክ',
            cancel: 'ሰርዝ',
            close: 'ዝጋ',
            reject: 'አትቀበል',
            approve: 'ፀድቅ',
            clear_signature: 'ፊርማ አጽዳ',
            signed_seal: 'የተፈረመ ዲጂታል ማህተም',
            add_user: 'አዲስ ተጠቃሚ ጨምር',
            full_name: 'ሙሉ ስም',
            email: 'ኢሜይል',
            password: 'የይለፍ ቃል',
            department: 'መምሪያ',
            create_user: 'ተጠቃሚ ፍጠር',
            records_overview: 'የሰነዶች አጠቃላይ እይታ (ዘንድሮ)',
            records_by_status: 'ሰነዶች በሁኔታ',
            todays_activities: 'የዛሬ እንቅስቃሴዎች',
            new_incomings: 'አዲስ ገቢ',
            new_outgoings: 'አዲስ ወጪ',
            distributions: 'ስርጭቶች',
            approvals_received: 'የጸደቁ',
            recent_records: 'የቅርብ ጊዜ ሰነዶች',
            view_all: 'ሁሉንም ተመልከት',
            record_no: 'ሰነድ ቁጥር',
            type: 'አይነት',
            from_to: 'ከ / ወደ',
            subject: 'ርዕስ',
            received_date: 'ተቀባይ ቀን',
            quick_actions: 'ፈጣን ድርጊቶች',
            distribute_record: 'ሰነድ ያሰራጩ',
            create_file: 'ፋይል ፍጠር',
            track_document: 'ሰነድ ተከታተል',
            generate_report: 'ሪፖርት አዘጋጅ',
            archive_record: 'ሰነድ አህድር',
            upcoming_deadlines: 'ቀጣይ ግዜዎች',
            quarterly_report: 'የሩብ ዓመት ሪፖርት',
            pending_distributions: 'በመጠባበቅ ላይ ያሉ ስርጭቶች',
            archive_review: 'የማህደር ማስተላለፍ ግምገማ',
            audit_deadline: 'ዓመታዊ ኦዲት ማቅረቢያ',
            storage_usage: 'የማከማቻ አጠቃቀም',
            used: 'ጥቅም ላይ የዋለ',
            total: 'አጠቃላይ',
            receiver_email: 'ተቀባይ ኢሜይል',
            classification: 'ምደባ',
            drag_drop: 'ፋይሉን እዚህ ጎትት እና ጣል ወይም ለመመልከት ጠቅ ያድርጉ',
            select_report: 'ሪፖርት ለመመልከት ይምረጡ።',
            generate_reports: 'ሪፖርቶች አዘጋጅ',
            daily_register: 'ዕለታዊ መዝገብ',
            monthly_summary: 'ወርሃዊ ማጠቃለያ',
            compliance_report: 'ተገዢነት ሪፖርት',
            workflow_performance: 'የስራ ሂደት አፈጻጸም',
            report_preview: 'ሪፖርት ቅድመ-እይታ',
            date_from: 'ቀን ከ',
            date_to: 'ቀን ወደ',
            clear: 'አጽዳ',
            search_hint: 'የፍለጋ መስፈርት ያስገቡ እና ፈልግ ይጫኑ።',
            qr_details: 'QR የተረጋገጠ ዝርዝር',
            qr_authenticated: 'NALA ሲስተም QR የተረጋገጠ',
            letter_details: 'የደብዳቤ ዝርዝር',
            audit_desc: 'ሁሉም የስርዓት እንቅስቃሴዎች እዚህ ተመዝግበዋል።',
            records_desc: 'ማዕከላዊ የኤሌክትሮኒክስ ሰነድ ምደባ እና ማከማቻ።',
            workflow_desc: 'የሰነድ ማዞሪያ ህጎችን እና የማጽደቅ እርምጃዎችን ያስተዳድሩ።',
            archive_desc: 'የረጅም ጊዜ የተጠበቁ ሰነዶች እና ታሪካዊ ሰነዶች።',
            role: 'ሚና',
            sign_here: 'እዚህ ይፈርሙ',
            draw_signature: 'ዲጂታል ፊርማዎን ከዚህ በታች ይሳሉ',
            approve_sign: 'ፀድቅ እና ፊርማ',
            sign_cancel: 'ሰርዝ',
        },
        om: {
            dashboard: 'Dashboordii',
            incoming_records: 'Galmee Barruulee',
            outgoing_records: 'Baasuu Barruulee',
            internal: 'Barruulee Keessaa',
            records: 'Kuusaa Barruulee',
            workflow: 'Tarkaanfii Hojii',
            archive: 'Bulchiinsa Kuusaa',
            search: 'Barruulee Barbaadi',
            reports: 'Odeeffannoo',
            users: 'Fayyadamtoota',
            audit: 'Galmee Oduu',
            settings: 'Qindaa’ina',
            logout: 'Baasi',
            incoming: 'Galmee',
            outgoing: 'Baasuu',
            archived: 'Kuusame',
            registered: 'Galmee',
            in_process: 'Hojii irra',
            pending: 'Eegala',
            completed: 'Xumurame',
            ref: 'Lak. Ref',
            sender_unique: 'Lak. Addaggee Ergaa',
            title: 'Mata-duree',
            sender: 'Ergaa',
            receiver: 'Fudhataa',
            attached: 'Maxxanfame',
            status: 'Haala',
            date: 'Guyyaa',
            qr_code: 'QR Koodii',
            actions: 'Hojiota',
            register_incoming: 'Galmee Galchi',
            register_outgoing: 'Baasuu Galchi',
            new_internal: 'Barruu Keessaa Haaraa',
            description: 'Ibsa',
            attached_file: 'Faayilaa Maxxanfame',
            remarks: 'Yaada',
            digital_signature: 'Mallattoo Dijitaalaa',
            review_approve: 'Ilaali fi Mirkaneessi',
            review_internal: 'Barruu Keessaa Ilaali',
            review_outgoing: 'Baasuu Barruu Ilaali',
            create_outgoing: 'Baasuu Barruu Haaraa Uumi',
            submit_approval: 'Mirkaneessaaf Galchi',
            save_send: 'Kusaa fi Ergi',
            send_memo: 'Barruu Ergi',
            cancel: 'Haqi',
            close: 'Cufi',
            reject: 'Diduu',
            approve: 'Mirkaneessi',
            clear_signature: 'Mallattoo Haqi',
            signed_seal: 'Mallattoo Dijitaalaa',
            add_user: 'Fayyadamaa Haaraa Dabali',
            full_name: 'Maqaa Guutuu',
            email: 'Imeelii',
            password: 'Jecha Iccitii',
            department: 'Mootummaa',
            create_user: 'Fayyadamaa Uumi',
            records_overview: 'Ilmaan Barruulee (Bara Kana)',
            records_by_status: 'Barruuleen Haala Isaanii',
            todays_activities: 'Hojiin Har\'aa',
            new_incomings: 'Galmee Haaraa',
            new_outgoings: 'Baasuu Haaraa',
            distributions: 'Qoodinsa',
            approvals_received: 'Mirkaneessa Argame',
            recent_records: 'Barruulee Dhiyoo',
            view_all: 'Hundaa Ilaali',
            record_no: 'Lak. Barruu',
            type: 'Gosa',
            from_to: 'Irraa / Gara',
            subject: 'Mata-duree',
            received_date: 'Guyyaa Argame',
            quick_actions: 'Hojiota Dafaa',
            distribute_record: 'Barruu Qoodi',
            create_file: 'Faayilaa Uumi',
            track_document: 'Barruu Hordofii',
            generate_report: 'Odeeffannoo Miiqi',
            archive_record: 'Barruu Kuusi',
            upcoming_deadlines: 'Guyyaa Dhiyoo',
            quarterly_report: 'Odeeffannoo Kurmaanaa',
            pending_distributions: 'Qoodinsa Eegala',
            archive_review: 'Irradeebiin Kuusaa',
            audit_deadline: 'Galmee Waggootaa',
            storage_usage: 'Fayyadama Kuusaa',
            used: 'Fayyadame',
            total: 'Waligalaa',
            receiver_email: 'Imeelii Fudhataa',
            classification: 'Ramaddii',
            drag_drop: 'Faayilaa asitti gati buusi, ykn cuqaasi',
            select_report: 'Odeeffannoo ilaaluuf filadhu.',
            generate_reports: 'Odeeffannoo Miiqi',
            daily_register: 'Galmee Guyyaa',
            monthly_summary: 'Galmee Ji\'aa',
            compliance_report: 'Odeeffannoo Eegumsa',
            workflow_performance: 'Tarkaanfii Hojii',
            report_preview: 'Ilaala Odeeffannoo',
            date_from: 'Guyyaa Irraa',
            date_to: 'Guyyaa Gara',
            clear: 'Haqi',
            search_hint: 'Bu’uura barbaachisaa galchiitii Barbaadi cuqaasi.',
            qr_details: 'QR Mirkaneessaa',
            qr_authenticated: 'NALA Sisteemii QR Mirkaneessaa',
            letter_details: 'Ibsa Barruu',
            audit_desc: 'Hojiin siisteemii hundi asitti galmeeffama.',
            records_desc: 'Kuusaa fi ramaddii barruulee elektroniksii.',
            workflow_desc: 'Tarkaanfii fi mirkaneessa barruu bulchi.',
            archive_desc: 'Barruulee yeroo dheeraaf kuusamanii.',
            role: 'Gahee',
            sign_here: 'Asitti Mallattoo',
            draw_signature: 'Mallattoo dijitaalaa keessan asitti haasa\'aa',
            approve_sign: 'Mirkaneessi fi Mallattoo',
            sign_cancel: 'Haqi',
        }
    };

    let currentLang = 'en';

    function t(key) {
        return translations[currentLang]?.[key] || key;
    }

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translated = t(key);
            if (translated && translated !== key) {
                el.textContent = translated;
            }
        });
        updateDynamicTexts();
    }

    function updateDynamicTexts() {
        const greeting = document.getElementById('dashGreeting');
        if (greeting) {
            const user = document.getElementById('userDisplayName')?.textContent || 'Head Office';
            greeting.textContent = `Welcome back, ${user}! 🎉`;
        }
        const sub = document.getElementById('dashSubGreeting');
        if (sub) {
            sub.textContent = t('todays_activities') || "Here's an overview of records operations today.";
        }
    }

    // ─── LANGUAGE SWITCHER ─────────────────────────────────────
    document.querySelectorAll('#langSelector button').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('#langSelector button').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentLang = this.dataset.lang;
            applyTranslations();
            if (document.getElementById('page-dashboard').classList.contains('active')) {
                renderDashboard(currentRole);
            }
            showToast('Language Changed', `Switched to ${this.textContent}`);
        });
    });

    // ─── THEME ───────────────────────────────────────────────────
    let darkMode = false;
    document.getElementById('themeToggleBtn')?.addEventListener('click', function() {
        darkMode = !darkMode;
        document.body.style.background = darkMode ? '#0f172a' : '#f1f5f9';
        document.body.style.color = darkMode ? '#f8fafc' : '#1e293b';
        document.querySelectorAll('.stat-card, .table-wrap, .topbar, .login-card, .modal-box').forEach(el => {
            el.style.background = darkMode ? '#1e293b' : '';
            el.style.borderColor = darkMode ? '#334155' : '';
        });
        document.querySelectorAll('.topbar .menu-btn, .topbar .user-badge .avatar, .topbar .user-badge div, .quick-action-btn')
            .forEach(el => {
                el.style.color = darkMode ? '#f8fafc' : '';
            });
        document.querySelectorAll('.quick-action-btn').forEach(el => {
            el.style.background = darkMode ? '#1e293b' : '#f8fafc';
            el.style.borderColor = darkMode ? '#334155' : '#e2e8f0';
        });
        document.querySelectorAll('.stat-card .stat-icon').forEach(el => {
            el.style.background = darkMode ? '#1e293b' : '';
        });
        this.querySelector('i').className = darkMode ? 'fas fa-sun' : 'fas fa-moon';
    });

    // ─── API BACKEND INTEGRATION ──────────────────────────────
    const API_BASE = '/api';

    async function apiFetch(endpoint, options = {}) {
        try {
            const token = localStorage.getItem('nala_jwt_token');
            const headers = { 'Content-Type': 'application/json', ...(options.headers || {}) };
            if (token) headers['Authorization'] = `Bearer ${token}`;

            const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers });
            if (!res.ok) return null;
            return await res.json();
        } catch (err) {
            console.warn(`[API] Connection to backend ${endpoint} offline, using fallback state.`);
            return null;
        }
    }

    async function syncBackendData() {
        const users = await apiFetch('/auth/users');
        if (users && users.length) {
            userDatabase = users.map(u => ({
                ...u,
                password: u.password || 'admin123'
            }));
            populateReceivers();
        }
        const incoming = await apiFetch('/incoming');
        if (incoming && incoming.length) {
            incomingLetters = incoming;
            renderIncomingTable();
        }
        const outgoing = await apiFetch('/outgoing');
        if (outgoing && outgoing.length) {
            outgoingLetters = outgoing;
            renderOutgoingTable();
        }
        const internal = await apiFetch('/internal');
        if (internal && internal.length) {
            internalMemos = internal;
            renderInternalTable();
        }
        const audit = await apiFetch('/audit');
        if (audit && audit.length) {
            auditLogs = audit;
            renderAuditTable();
        }
    }

    // Initialize backend data sync on page load
    setTimeout(syncBackendData, 300);

    // ─── USER DATABASE ──────────────────────────────────────────
    let userDatabase = [
        { name: 'Head Office', role: 'head_office', password: 'head123', email: 'head@nala.gov.et',
            dept: 'Head Office', photo: null },
        { name: 'Branch Officer - Harar', role: 'branch', password: 'harar123', email: 'harar@nala.gov.et',
            dept: 'Harar Branch', photo: null },
        { name: 'Dept Manager', role: 'dept_manager', password: 'manager123', email: 'manager@nala.gov.et',
            dept: 'Records Management', photo: null },
        { name: 'Records Officer', role: 'records_officer', password: 'records123', email: 'records@nala.gov.et',
            dept: 'Records Office', photo: null },
        { name: 'Director General', role: 'director', password: 'director123', email: 'director@nala.gov.et',
            dept: 'Directorate', photo: null },
        { name: 'Admin', role: 'admin', password: 'admin123', email: 'admin@nala.gov.et',
            dept: 'System Administration', photo: null }
    ];

    // ─── STATE ──────────────────────────────────────────────────
    let currentRole = 'head_office';
    let currentUser = 'Head Office';
    let editingRef = null;

    const ROLE_CONFIGS = {
        'head_office': { title: 'Head Office Officer', avatar: 'H', permissions: ['dashboard', 'incoming',
                'outgoing', 'internal', 'records', 'workflow', 'archive', 'search', 'settings'
            ] },
        'branch': { title: 'Branch Officer', avatar: 'B', permissions: ['dashboard', 'incoming', 'outgoing',
                'internal', 'search', 'settings'
            ] },
        'admin': { title: 'System Administrator', avatar: 'A', permissions: ['dashboard', 'incoming', 'outgoing',
                'internal', 'records', 'workflow', 'archive', 'search', 'users', 'audit', 'reports',
                'settings'
            ] },
        'dept_manager': { title: 'Department Manager', avatar: 'M', permissions: ['dashboard', 'incoming',
                'outgoing', 'internal', 'records', 'workflow', 'search', 'reports', 'settings'
            ] },
        'records_officer': { title: 'Records Officer', avatar: 'R', permissions: ['dashboard', 'incoming',
                'outgoing', 'internal', 'records', 'workflow', 'archive', 'search', 'settings'
            ] },
        'director': { title: 'Director General', avatar: 'D', permissions: ['dashboard', 'incoming', 'outgoing',
                'internal', 'workflow', 'archive', 'search', 'audit', 'reports', 'settings'
            ] },
        'staff': { title: 'Staff Member', avatar: 'S', permissions: ['dashboard', 'outgoing', 'internal',
                'search', 'settings'
            ] }
    };

    function getUserPassword(username) {
        const user = userDatabase.find(u => u.name === username);
        return user ? user.password : '';
    }

    function getUserRole(username) {
        const user = userDatabase.find(u => u.name === username);
        return user ? user.role : '';
    }

    function getUserByEmail(email) {
        return userDatabase.find(u => u.email === email);
    }

    function updateUserPhoto(username, photoData) {
        const user = userDatabase.find(u => u.name === username);
        if (user) { user.photo = photoData; return true; }
        return false;
    }

    // ─── DATA STORES ────────────────────────────────────────────
    let incomingLetters = [{
        ref: 'INC-2025-00568',
        senderUniqueNum: 'MOF/EXP/881',
        title: 'Request for Archive Transfer',
        sender: 'Ministry of Education',
        senderName: 'Ministry of Education',
        receiver: 'Head Office',
        receiverEmail: 'head@nala.gov.et',
        status: 'in-process',
        date: '2026-07-11',
        desc: 'Formal request for archive transfer.',
        receiverRemark: '',
        digitalSignature: '',
        fileName: 'archive_request.pdf',
        fileData: null
    }, {
        ref: 'OUT-2025-00421',
        senderUniqueNum: 'AUD/2026/102',
        title: 'Budget Report Submission',
        sender: 'Addis City Admin.',
        senderName: 'Addis City Admin.',
        receiver: 'Head Office',
        receiverEmail: 'head@nala.gov.et',
        status: 'pending',
        date: '2026-07-10',
        desc: 'Annual budget report submission.',
        receiverRemark: '',
        digitalSignature: '',
        fileName: 'budget_report.pdf',
        fileData: null
    }, {
        ref: 'INC-2025-00567',
        senderUniqueNum: 'CUL/2026/045',
        title: 'Historical Document Handover',
        sender: 'Ministry of Culture',
        senderName: 'Ministry of Culture',
        receiver: 'Head Office',
        receiverEmail: 'head@nala.gov.et',
        status: 'pending',
        date: '2026-07-10',
        desc: 'Handover of historical documents.',
        receiverRemark: '',
        digitalSignature: '',
        fileName: 'handover.pdf',
        fileData: null
    }, {
        ref: 'OUT-2025-00420',
        senderUniqueNum: 'FIN/2026/033',
        title: 'Annual Financial Report',
        sender: 'Head Office',
        senderName: 'Head Office',
        receiver: 'Ministry of Finance',
        receiverEmail: 'finance@mof.gov.et',
        status: 'approved',
        date: '2026-07-09',
        desc: 'Annual financial report submission.',
        receiverRemark: 'Approved.',
        digitalSignature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
        fileName: 'financial_report.pdf',
        fileData: null
    }, {
        ref: 'INC-2025-00566',
        senderUniqueNum: 'NALA/HR/2026/012',
        title: 'Record Collection',
        sender: 'NALA Branch - Harar',
        senderName: 'NALA Branch - Harar',
        receiver: 'Head Office',
        receiverEmail: 'head@nala.gov.et',
        status: 'in-process',
        date: '2026-07-09',
        desc: 'Collection of records from Harar branch.',
        receiverRemark: '',
        digitalSignature: '',
        fileName: 'collection_list.pdf',
        fileData: null
    }];

    let outgoingLetters = [{
        ref: 'OUT-2025-00421',
        title: 'Request for Collaboration on Digital Preservation',
        sender: 'Head Office',
        receiver: 'Ministry of Innovation',
        receiverEmail: 'info@innovation.gov.et',
        date: '2026-07-10',
        status: 'pending_approval',
        description: 'Proposal for joint digitization.',
        classification: 'General',
        managerRemark: '',
        digitalSignature: ''
    }, {
        ref: 'OUT-2025-00422',
        title: 'Feedback on National Library Policy',
        sender: 'Dept Manager',
        receiver: 'Policy Commission',
        receiverEmail: 'policy@commission.gov.et',
        date: '2026-07-11',
        status: 'approved',
        description: 'Detailed feedback on draft policy.',
        classification: 'Confidential',
        managerRemark: 'Approved.',
        digitalSignature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
    }];

    let internalMemos = [{
        ref: 'INT-2025-001',
        title: 'Meeting Agenda for Records Directorate',
        sender: 'Head Office',
        senderName: 'Head Office',
        receiver: 'Dept Manager',
        receiverEmail: 'manager@nala.gov.et',
        date: '2026-07-12',
        status: 'pending',
        description: 'Agenda for the upcoming records management review meeting.',
        receiverRemark: '',
        digitalSignature: '',
        fileName: 'agenda.docx',
        fileData: null
    }, {
        ref: 'INT-2025-002',
        title: 'IT Infrastructure Update',
        sender: 'Records Officer',
        senderName: 'Records Officer',
        receiver: 'Admin',
        receiverEmail: 'admin@nala.gov.et',
        date: '2026-07-11',
        status: 'approved',
        description: 'Update on the new server deployment.',
        receiverRemark: 'Thanks for the update. Approved.',
        digitalSignature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
        fileName: 'it_update.pdf',
        fileData: null
    }];

    let auditLogs = [];

    function logAudit(user, action, details) {
        const userObj = userDatabase.find(u => u.name === user);
        const role = userObj ? userObj.role : 'unknown';
        const entry = {
            timestamp: new Date().toLocaleString(),
            user: user,
            role: role,
            action: action,
            details: details || ''
        };
        auditLogs.unshift(entry);
        if (auditLogs.length > 100) auditLogs.pop();
        renderAuditTable();

        apiFetch('/audit', {
            method: 'POST',
            body: JSON.stringify(entry)
        });
    }

    // ─── DOM REFS ──────────────────────────────────────────────
    const loginPage = document.getElementById('loginPage');
    const appMain = document.getElementById('appMain');
    const loginForm = document.getElementById('loginForm');
    const userQuickSelect = document.getElementById('userQuickSelect');
    const passwordInput = document.getElementById('password');
    const passwordHint = document.getElementById('passwordHint');
    const roleDisplayInput = document.getElementById('roleDisplayInput');
    const sidebar = document.getElementById('sidebar');
    const menuToggle = document.getElementById('menuToggle');
    const logoutBtn = document.getElementById('logoutBtn');
    const userAvatar = document.getElementById('userAvatar');
    const userDisplayName = document.getElementById('userDisplayName');
    const userRoleDisplay = document.getElementById('userRoleDisplay');
    const pageTitle = document.getElementById('pageTitle');
    const profileTrigger = document.getElementById('profileTrigger');
    const profileContent = document.getElementById('profileContent');

    // Incoming modals
    const modal = document.getElementById('registerModal');
    const modalTitle = document.getElementById('modalTitle');
    const openModalBtn = document.getElementById('openRegisterModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const cancelModalBtn = document.getElementById('cancelModalBtn');
    const incomingForm = document.getElementById('incomingForm');
    const refNumber = document.getElementById('refNumber');
    const senderUniqueNum = document.getElementById('senderUniqueNum');
    const letterTitle = document.getElementById('letterTitle');
    const letterDesc = document.getElementById('letterDesc');
    const senderName = document.getElementById('senderName');
    const receiverSelect = document.getElementById('receiverSelect');
    const receiverEmailBadge = document.getElementById('receiverEmailBadge');
    const letterDate = document.getElementById('letterDate');
    const dropZone = document.getElementById('dropZone');
    const fileInput = document.getElementById('fileInput');
    const dropZoneContent = document.getElementById('dropZoneContent');
    const filePreview = document.getElementById('filePreview');
    const uploadStatus = document.getElementById('uploadStatus');

    // View modal
    const viewModal = document.getElementById('viewModal');
    const closeViewModalBtn = document.getElementById('closeViewModalBtn');
    const closeViewBtn = document.getElementById('closeViewBtn');
    const viewRef = document.getElementById('viewRef');
    const viewSenderUniq = document.getElementById('viewSenderUniq');
    const viewTitle = document.getElementById('viewTitle');
    const viewSender = document.getElementById('viewSender');
    const viewReceiver = document.getElementById('viewReceiver');
    const viewReceiverEmail = document.getElementById('viewReceiverEmail');
    const viewStatus = document.getElementById('viewStatus');
    const viewDate = document.getElementById('viewDate');
    const viewDesc = document.getElementById('viewDesc');
    const viewFileWrapper = document.getElementById('viewFileWrapper');
    const viewFileName = document.getElementById('viewFileName');
    const viewRemarkWrapper = document.getElementById('viewRemarkWrapper');
    const viewRemark = document.getElementById('viewRemark');
    const viewSigWrapper = document.getElementById('viewSigWrapper');
    const viewSigImg = document.getElementById('viewSigImg');
    const inlineContainer = document.getElementById('inlineSignatureContainer');

    // Review Incoming
    const reviewInModal = document.getElementById('reviewIncomingModal');
    const closeReviewInModalBtn = document.getElementById('closeReviewIncomingModalBtn');
    const cancelReviewInBtn = document.getElementById('cancelReviewInBtn');
    const reviewInRef = document.getElementById('reviewInRef');
    const reviewInTitle = document.getElementById('reviewInTitle');
    const reviewInSender = document.getElementById('reviewInSender');
    const reviewInDesc = document.getElementById('reviewInDesc');
    const reviewInFileWrapper = document.getElementById('reviewInFileWrapper');
    const reviewInFileName = document.getElementById('reviewInFileName');
    const receiverInRemark = document.getElementById('receiverInRemark');
    const reviewInTargetRef = document.getElementById('reviewInTargetRef');
    const approveInBtn = document.getElementById('approveInBtn');
    const rejectInBtn = document.getElementById('rejectInBtn');
    const clearInSigBtn = document.getElementById('clearInSigBtn');
    const sigInCanvas = document.getElementById('sigInCanvas');

    // Internal modals
    const internalModal = document.getElementById('internalModal');
    const openInternalModalBtn = document.getElementById('openInternalModalBtn');
    const closeInternalModalBtn = document.getElementById('closeInternalModalBtn');
    const cancelInternalModalBtn = document.getElementById('cancelInternalModalBtn');
    const internalForm = document.getElementById('internalForm');
    const internalRef = document.getElementById('internalRef');
    const internalDate = document.getElementById('internalDate');
    const internalTitle = document.getElementById('internalTitle');
    const internalDesc = document.getElementById('internalDesc');
    const internalSender = document.getElementById('internalSender');
    const internalReceiverSelect = document.getElementById('internalReceiverSelect');
    const internalReceiverEmailBadge = document.getElementById('internalReceiverEmailBadge');
    const internalDropZone = document.getElementById('internalDropZone');
    const internalFileInput = document.getElementById('internalFileInput');
    const internalDropZoneContent = document.getElementById('internalDropZoneContent');
    const internalFilePreview = document.getElementById('internalFilePreview');
    const internalUploadStatus = document.getElementById('internalUploadStatus');
    const editInternalRef = document.getElementById('editInternalRef');

    // Review Internal
    const reviewInternalModal = document.getElementById('reviewInternalModal');
    const closeReviewInternalModalBtn = document.getElementById('closeReviewInternalModalBtn');
    const cancelReviewInternalBtn = document.getElementById('cancelReviewInternalBtn');
    const reviewInternalRef = document.getElementById('reviewInternalRef');
    const reviewInternalTitle = document.getElementById('reviewInternalTitle');
    const reviewInternalSender = document.getElementById('reviewInternalSender');
    const reviewInternalReceiver = document.getElementById('reviewInternalReceiver');
    const reviewInternalDesc = document.getElementById('reviewInternalDesc');
    const receiverInternalRemark = document.getElementById('receiverInternalRemark');
    const reviewInternalTargetRef = document.getElementById('reviewInternalTargetRef');
    const approveInternalBtn = document.getElementById('approveInternalBtn');
    const rejectInternalBtn = document.getElementById('rejectInternalBtn');
    const clearInternalSigBtn = document.getElementById('clearInternalSigBtn');
    const sigInternalCanvas = document.getElementById('sigInternalCanvas');

    // Outgoing modals
    const outgoingModal = document.getElementById('outgoingModal');
    const closeOutgoingModalBtn = document.getElementById('closeOutgoingModalBtn');
    const cancelOutModalBtn = document.getElementById('cancelOutModalBtn');
    const openOutgoingModalBtn = document.getElementById('openOutgoingModalBtn');
    const outgoingForm = document.getElementById('outgoingForm');
    const outRef = document.getElementById('outRef');
    const outDate = document.getElementById('outDate');
    const outTitle = document.getElementById('outTitle');
    const outDesc = document.getElementById('outDesc');
    const outSender = document.getElementById('outSender');
    const outReceiver = document.getElementById('outReceiver');
    const outReceiverEmail = document.getElementById('outReceiverEmail');
    const outClassification = document.getElementById('outClassification');
    const outDropZone = document.getElementById('outDropZone');
    const outFileInput = document.getElementById('outFileInput');
    const outDropZoneContent = document.getElementById('outDropZoneContent');
    const outFilePreview = document.getElementById('outFilePreview');
    const outUploadStatus = document.getElementById('outUploadStatus');

    // Review Outgoing
    const reviewOutModal = document.getElementById('reviewOutModal');
    const closeReviewOutModalBtn = document.getElementById('closeReviewOutModalBtn');
    const cancelReviewOutBtn = document.getElementById('cancelReviewOutBtn');
    const reviewOutRef = document.getElementById('reviewOutRef');
    const reviewOutTitle = document.getElementById('reviewOutTitle');
    const reviewOutSender = document.getElementById('reviewOutSender');
    const reviewOutReceiver = document.getElementById('reviewOutReceiver');
    const reviewOutDesc = document.getElementById('reviewOutDesc');
    const managerReviewDesc = document.getElementById('managerReviewDesc');
    const reviewOutTargetRef = document.getElementById('reviewOutTargetRef');
    const approveOutBtn = document.getElementById('approveOutBtn');
    const rejectOutBtn = document.getElementById('rejectOutBtn');
    const clearOutSigBtn = document.getElementById('clearOutSigBtn');
    const sigOutCanvas = document.getElementById('sigOutCanvas');

    // QR Detail Outgoing
    const qrDetailOutModal = document.getElementById('qrDetailOutModal');
    const closeQrDetailOutModalBtn = document.getElementById('closeQrDetailOutModalBtn');
    const closeQrOutDetailBtn = document.getElementById('closeQrOutDetailBtn');
    const qrOutDetailRef = document.getElementById('qrOutDetailRef');
    const qrOutDetailTitle = document.getElementById('qrOutDetailTitle');
    const qrOutDetailSender = document.getElementById('qrOutDetailSender');
    const qrOutDetailReceiver = document.getElementById('qrOutDetailReceiver');
    const qrOutDetailReceiverEmail = document.getElementById('qrOutDetailReceiverEmail');
    const qrOutDetailClassification = document.getElementById('qrOutDetailClassification');
    const qrOutDetailStatus = document.getElementById('qrOutDetailStatus');
    const qrOutDetailDesc = document.getElementById('qrOutDetailDesc');
    const qrOutDetailRemarkWrapper = document.getElementById('qrOutDetailRemarkWrapper');
    const qrOutDetailRemark = document.getElementById('qrOutDetailRemark');
    const qrOutDetailSigWrapper = document.getElementById('qrOutDetailSigWrapper');
    const qrOutDetailSigImg = document.getElementById('qrOutDetailSigImg');

    // Add User
    const addUserModal = document.getElementById('addUserModal');
    const openAddUserModalBtn = document.getElementById('openAddUserModalBtn');
    const closeAddUserModalBtn = document.getElementById('closeAddUserModalBtn');
    const cancelAddUserBtn = document.getElementById('cancelAddUserBtn');
    const addUserForm = document.getElementById('addUserForm');
    const newUserFullName = document.getElementById('newUserFullName');
    const newUserEmail = document.getElementById('newUserEmail');
    const newUserRole = document.getElementById('newUserRole');
    const newUserPassword = document.getElementById('newUserPassword');
    const newUserDept = document.getElementById('newUserDept');

    // User grid
    const userAccountsGrid = document.getElementById('userAccountsGrid');
    const userCountDisplay = document.getElementById('userCountDisplay');

    // Audit & Search containers
    const auditLogContainer = document.getElementById('auditLogContainer');
    const auditCount = document.getElementById('auditCount');
    const searchResultsContainer = document.getElementById('searchResultsContainer');
    const searchForm = document.getElementById('searchForm');
    const clearSearchBtn = document.getElementById('clearSearchBtn');

    // Toast
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toastMessage');
    const toastSubMessage = document.getElementById('toastSubMessage');

    // ─── HELPERS ───────────────────────────────────────────────
    function generateRef(prefix = 'INC-2025-') {
        const nums = incomingLetters.map(l => parseInt(l.ref.split('-').pop(), 10)).filter(n => !isNaN(n));
        const max = nums.length ? Math.max(...nums) : 0;
        return `${prefix}${String(max + 1).padStart(5, '0')}`;
    }

    function generateOutRef() {
        const nums = outgoingLetters.map(l => parseInt(l.ref.split('-').pop(), 10)).filter(n => !isNaN(n));
        const max = nums.length ? Math.max(...nums) : 0;
        return `OUT-2025-${String(max + 1).padStart(5, '0')}`;
    }

    function generateInternalRef() {
        const nums = internalMemos.map(l => parseInt(l.ref.split('-').pop(), 10)).filter(n => !isNaN(n));
        const max = nums.length ? Math.max(...nums) : 0;
        return `INT-2025-${String(max + 1).padStart(5, '0')}`;
    }

    function generateQR(text, targetId, size = 120) {
        const container = document.getElementById(targetId);
        if (!container) return;
        container.innerHTML = '';
        try {
            new QRCode(container, { text: text, width: size, height: size, colorDark: '#0a1e3a',
                colorLight: '#ffffff' });
        } catch (e) { console.warn(e); }
    }

    function showToast(msg, subMsg = '', type = 'success') {
        toastMessage.textContent = msg;
        toastSubMessage.textContent = subMsg;
        toast.className = 'toast show';
        if (type === 'error') {
            toast.querySelector('i').className = 'fas fa-exclamation-circle text-red-400';
        } else {
            toast.querySelector('i').className = 'fas fa-check-circle text-green-400';
        }
        setTimeout(() => { toast.classList.remove('show'); }, 4000);
    }

    function populateReceivers() {
        receiverSelect.innerHTML = '';
        userDatabase.forEach(u => {
            const opt = document.createElement('option');
            opt.value = u.name;
            opt.dataset.email = u.email;
            opt.textContent = `${u.name} (${u.dept})`;
            receiverSelect.appendChild(opt);
        });
        updateReceiverEmailBadge();

        internalReceiverSelect.innerHTML = '';
        userDatabase.forEach(u => {
            if (u.name === currentUser) return;
            const opt = document.createElement('option');
            opt.value = u.name;
            opt.dataset.email = u.email;
            opt.textContent = `${u.name} (${u.dept})`;
            internalReceiverSelect.appendChild(opt);
        });
        updateInternalReceiverEmailBadge();
    }

    function updateReceiverEmailBadge() {
        const selectedOpt = receiverSelect.options[receiverSelect.selectedIndex];
        if (selectedOpt) receiverEmailBadge.innerHTML =
            `<i class="fas fa-envelope mr-1"></i> Email: ${selectedOpt.dataset.email}`;
    }
    receiverSelect.addEventListener('change', updateReceiverEmailBadge);

    function updateInternalReceiverEmailBadge() {
        const selectedOpt = internalReceiverSelect.options[internalReceiverSelect.selectedIndex];
        if (selectedOpt) internalReceiverEmailBadge.innerHTML =
            `<i class="fas fa-envelope mr-1"></i> Email: ${selectedOpt.dataset.email}`;
    }
    internalReceiverSelect.addEventListener('change', updateInternalReceiverEmailBadge);

    function getAvatarHTML(username, size = '36px') {
        const user = userDatabase.find(u => u.name === username);
        if (!user) return `<div class="ua-avatar" style="width:${size};height:${size};background:#0a1e3a;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:50%;font-weight:600;">${username.charAt(0).toUpperCase()}</div>`;
        if (user.photo) {
            return `<div class="ua-avatar" style="width:${size};height:${size};overflow:hidden;border-radius:50%;flex-shrink:0;"><img src="${user.photo}" alt="${username}" style="width:100%;height:100%;object-fit:cover;" /></div>`;
        } else {
            return `<div class="ua-avatar" style="width:${size};height:${size};background:#0a1e3a;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:50%;font-weight:600;flex-shrink:0;">${username.charAt(0).toUpperCase()}</div>`;
        }
    }

    function renderUserAvatar(username) {
        const user = userDatabase.find(u => u.name === username);
        if (!user) return;
        const avatarEl = document.getElementById('userAvatar');
        if (!avatarEl) return;
        if (user.photo) {
            avatarEl.innerHTML = `<img src="${user.photo}" alt="${username}" />`;
        } else {
            avatarEl.innerHTML = username.charAt(0).toUpperCase();
            avatarEl.style.background = '#0a1e3a';
            avatarEl.style.color = '#fff';
        }
    }

    // ─── LOGIN ─────────────────────────────────────────────────
    userQuickSelect.addEventListener('change', function() {
        const opt = this.options[this.selectedIndex];
        const role = opt.getAttribute('data-role');
        const pw = opt.getAttribute('data-pw') || '';
        roleDisplayInput.value = ROLE_CONFIGS[role]?.title || 'Staff';
        if (pw) {
            passwordHint.innerHTML = `<i class="fas fa-info-circle mr-1"></i>Hint: Your password is <strong>${pw}</strong>`;
        } else {
            passwordHint.innerHTML = `<i class="fas fa-info-circle mr-1"></i>Hint: head123 / harar123 / manager123 / records123 / director123 / admin123`;
        }
    });
    userQuickSelect.dispatchEvent(new Event('change'));

    loginForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const selectedUser = userQuickSelect.value;
        const enteredPassword = passwordInput.value.trim();

        // Attempt backend JWT login
        const loginRes = await apiFetch('/auth/login', {
            method: 'POST',
            body: JSON.stringify({ username: selectedUser, password: enteredPassword })
        });

        if (loginRes && loginRes.token) {
            localStorage.setItem('nala_jwt_token', loginRes.token);
            currentUser = loginRes.user.name;
            currentRole = loginRes.user.role;
        } else {
            const expectedPassword = getUserPassword(selectedUser);
            if (enteredPassword !== expectedPassword) {
                showToast('Login Failed', 'Invalid password. Please try again.', 'error');
                return;
            }
            currentUser = selectedUser;
            currentRole = getUserRole(selectedUser);
        }

        renderUserAvatar(currentUser);
        userDisplayName.textContent = currentUser;
        userRoleDisplay.textContent = ROLE_CONFIGS[currentRole]?.title || 'User';
        loginPage.style.display = 'none';
        appMain.style.display = 'block';

        // Synchronize state from database
        await syncBackendData();

        populateReceivers();
        updateUIBasedOnRole(currentRole);
        renderUserAccounts();
        renderIncomingTable();
        renderOutgoingTable();
        renderInternalTable();
        renderDashboard(currentRole);
        renderProfile();
        renderAuditTable();
        resetOutgoingForm();
        resetInternalForm();
        logAudit(currentUser, 'Logged In', `User ${currentUser} logged in.`);
        applyTranslations();
        showToast('Login Successful', `Welcome back, ${currentUser}!`);
    });

    logoutBtn.addEventListener('click', () => {
        logAudit(currentUser, 'Logged Out', `User ${currentUser} logged out.`);
        appMain.style.display = 'none';
        loginPage.style.display = 'flex';
        passwordInput.value = '';
        showToast('Logged Out', 'You have been logged out successfully.');
    });

    profileTrigger.addEventListener('click', function() {
        window.switchPage('settings');
    });

    // ─── RENDER DASHBOARD ──────────────────────────────────────
    let chartInstance = null;

    function renderDashboard(role) {
        const dashboardEl = document.getElementById('page-dashboard');
        if (!dashboardEl) return;

        const inCount = incomingLetters.length;
        const inPending = incomingLetters.filter(l => l.status === 'pending' || l.status === 'pending_approval')
        .length;
        const inApproved = incomingLetters.filter(l => l.status === 'approved').length;
        const inRejected = incomingLetters.filter(l => l.status === 'rejected').length;
        const inProcess = incomingLetters.filter(l => l.status === 'in-process').length;
        const outCount = outgoingLetters.length;
        const outPending = outgoingLetters.filter(l => l.status === 'pending_approval').length;
        const outApproved = outgoingLetters.filter(l => l.status === 'approved').length;
        const outDispatched = outgoingLetters.filter(l => l.status === 'dispatched').length;
        const intCount = internalMemos.length;
        const intPending = internalMemos.filter(l => l.status === 'pending').length;
        const intApproved = internalMemos.filter(l => l.status === 'approved').length;
        const totalRecords = inCount + outCount + intCount;
        const totalPending = inPending + outPending + intPending;

        const registered = incomingLetters.filter(l => l.status === 'registered' || l.status === 'draft').length;
        const inProcessCount = inProcess + outCount + intCount;

        dashboardEl.innerHTML = `
            <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
                <div>
                    <h1 style="font-size:1.5rem;font-weight:800;color:#0a1e3a;" id="dashGreeting">Welcome back, ${currentUser}! 🎉</h1>
                    <p style="font-size:0.85rem;color:#6b7280;" id="dashSubGreeting">${t('todays_activities') || "Here's an overview of records operations today."}</p>
                </div>
                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                    <span style="font-size:0.7rem;background:#e2e8f0;padding:4px 14px;border-radius:20px;color:#475569;">
                        <i class="fas fa-building mr-1"></i> ${currentUser}
                    </span>
                </div>
            </div>

            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:14px;margin-bottom:20px;">
                <div class="stat-card"><div style="display:flex;align-items:center;gap:12px;"><div class="stat-icon blue"><i class="fas fa-inbox"></i></div><div><div style="font-size:0.7rem;color:#6b7280;font-weight:500;">${t('incoming')}</div><div style="font-size:1.4rem;font-weight:700;color:#0a1e3a;">${inCount}</div></div></div></div>
                <div class="stat-card"><div style="display:flex;align-items:center;gap:12px;"><div class="stat-icon green"><i class="fas fa-paper-plane"></i></div><div><div style="font-size:0.7rem;color:#6b7280;font-weight:500;">${t('outgoing')}</div><div style="font-size:1.4rem;font-weight:700;color:#0a1e3a;">${outCount}</div></div></div></div>
                <div class="stat-card"><div style="display:flex;align-items:center;gap:12px;"><div class="stat-icon purple"><i class="fas fa-pen-square"></i></div><div><div style="font-size:0.7rem;color:#6b7280;font-weight:500;">${t('registered')}</div><div style="font-size:1.4rem;font-weight:700;color:#0a1e3a;">${registered || 1245}</div></div></div></div>
                <div class="stat-card"><div style="display:flex;align-items:center;gap:12px;"><div class="stat-icon orange"><i class="fas fa-spinner"></i></div><div><div style="font-size:0.7rem;color:#6b7280;font-weight:500;">${t('in_process')}</div><div style="font-size:1.4rem;font-weight:700;color:#0a1e3a;">${inProcessCount || 1876}</div></div></div></div>
                <div class="stat-card"><div style="display:flex;align-items:center;gap:12px;"><div class="stat-icon rose"><i class="fas fa-clock"></i></div><div><div style="font-size:0.7rem;color:#6b7280;font-weight:500;">${t('pending')}</div><div style="font-size:1.4rem;font-weight:700;color:#0a1e3a;">${totalPending || 385}</div></div></div></div>
                <div class="stat-card"><div style="display:flex;align-items:center;gap:12px;"><div class="stat-icon teal"><i class="fas fa-check-circle"></i></div><div><div style="font-size:0.7rem;color:#6b7280;font-weight:500;">${t('completed')}</div><div style="font-size:1.4rem;font-weight:700;color:#0a1e3a;">${inApproved + outApproved + intApproved || 165}</div></div></div></div>
            </div>

            <div style="display:grid;grid-template-columns:2fr 1fr;gap:18px;margin-bottom:20px;">
                <div class="stat-card">
                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:6px;">
                        <h4 style="font-size:0.85rem;font-weight:700;color:#0a1e3a;">${t('records_overview')}</h4>
                        <div style="display:flex;gap:12px;font-size:0.65rem;color:#6b7280;">
                            <span><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:#2563eb;vertical-align:middle;margin-right:4px;"></span> ${t('incoming')}</span>
                            <span><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:#059669;vertical-align:middle;margin-right:4px;"></span> ${t('outgoing')}</span>
                            <span><span style="display:inline-block;width:10px;height:10px;border-radius:3px;background:#7c3aed;vertical-align:middle;margin-right:4px;"></span> ${t('archived')}</span>
                        </div>
                    </div>
                    <div class="chart-container"><canvas id="recordsChart"></canvas></div>
                    <div style="display:flex;justify-content:space-around;font-size:0.6rem;color:#94a3b8;margin-top:4px;">
                        <span>Jan</span><span>Feb</span><span>Mar</span><span>Apr</span><span>May</span><span>Jun</span>
                        <span>Jul</span><span>Aug</span><span>Sep</span><span>Oct</span><span>Nov</span><span>Dec</span>
                    </div>
                </div>

                <div style="display:flex;flex-direction:column;gap:14px;">
                    <div class="stat-card">
                        <h4 style="font-size:0.8rem;font-weight:700;color:#0a1e3a;margin-bottom:8px;">${t('records_by_status')}</h4>
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:6px;">
                            <div><span style="font-size:0.7rem;color:#6b7280;">${t('registered')}</span><br /><span style="font-size:1.1rem;font-weight:700;color:#2563eb;">${registered || 1245}</span> <span style="font-size:0.6rem;color:#94a3b8;">(34%)</span></div>
                            <div><span style="font-size:0.7rem;color:#6b7280;">${t('in_process')}</span><br /><span style="font-size:1.1rem;font-weight:700;color:#059669;">${inProcessCount || 1876}</span> <span style="font-size:0.6rem;color:#94a3b8;">(51%)</span></div>
                            <div><span style="font-size:0.7rem;color:#6b7280;">${t('pending')}</span><br /><span style="font-size:1.1rem;font-weight:700;color:#d97706;">${totalPending || 385}</span> <span style="font-size:0.6rem;color:#94a3b8;">(10%)</span></div>
                            <div><span style="font-size:0.7rem;color:#6b7280;">${t('completed')}</span><br /><span style="font-size:1.1rem;font-weight:700;color:#7c3aed;">${inApproved + outApproved + intApproved || 165}</span> <span style="font-size:0.6rem;color:#94a3b8;">(5%)</span></div>
                        </div>
                    </div>
                    <div class="stat-card">
                        <h4 style="font-size:0.8rem;font-weight:700;color:#0a1e3a;margin-bottom:6px;">${t('todays_activities')}</h4>
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:4px 12px;">
                            <div><span style="font-size:0.65rem;color:#6b7280;">${t('new_incomings')}</span><br /><span style="font-size:1.1rem;font-weight:700;color:#2563eb;">${inPending || 28}</span></div>
                            <div><span style="font-size:0.65rem;color:#6b7280;">${t('new_outgoings')}</span><br /><span style="font-size:1.1rem;font-weight:700;color:#059669;">${outPending || 15}</span></div>
                            <div><span style="font-size:0.65rem;color:#6b7280;">${t('distributions')}</span><br /><span style="font-size:1.1rem;font-weight:700;color:#7c3aed;">12</span></div>
                            <div><span style="font-size:0.65rem;color:#6b7280;">${t('approvals_received')}</span><br /><span style="font-size:1.1rem;font-weight:700;color:#059669;">${inApproved + outApproved + intApproved || 9}</span></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="table-wrap" style="margin-bottom:20px;">
                <div style="padding:12px 16px;border-bottom:1px solid #e9edf2;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:6px;">
                    <h4 style="font-size:0.85rem;font-weight:700;color:#0a1e3a;">${t('recent_records')}</h4>
                    <button class="btn-outline" style="padding:4px 14px;font-size:0.7rem;" onclick="showToast('Viewing all records','')"><i class="fas fa-external-link-alt"></i> ${t('view_all')}</button>
                </div>
                <table>
                    <thead><tr><th>${t('record_no')}</th><th>${t('type')}</th><th>${t('from_to')}</th><th>${t('subject')}</th><th>${t('status')}</th><th>${t('received_date')}</th></tr></thead>
                    <tbody id="recentRecordsBody">
                        ${incomingLetters.slice(0,5).map(l => `
                            <tr>
                                <td class="font-mono text-xs font-bold text-blue-600">${l.ref}</td>
                                <td><span class="status-pill ${l.status}">${l.status}</span></td>
                                <td>${l.sender}</td>
                                <td>${l.title}</td>
                                <td><span class="status-pill ${l.status}">${l.status}</span></td>
                                <td>${l.date}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>

            <div style="display:grid;grid-template-columns:2fr 1fr 1fr;gap:18px;">
                <div class="stat-card">
                    <h4 style="font-size:0.8rem;font-weight:700;color:#0a1e3a;margin-bottom:10px;">${t('quick_actions')}</h4>
                    <div class="quick-action-grid">
                        <button class="quick-action-btn" onclick="openModal('registerModal')"><i class="fas fa-inbox"></i> ${t('register_incoming')}</button>
                        <button class="quick-action-btn" onclick="openOutgoingModal(null)"><i class="fas fa-paper-plane"></i> ${t('register_outgoing')}</button>
                        <button class="quick-action-btn" onclick="showToast('Distribute Record','Opening...')"><i class="fas fa-people-arrows"></i> ${t('distribute_record')}</button>
                        <button class="quick-action-btn" onclick="window.switchPage('search')"><i class="fas fa-search"></i> ${t('search')}</button>
                        <button class="quick-action-btn" onclick="showToast('Create File','Opening...')"><i class="fas fa-folder-plus"></i> ${t('create_file')}</button>
                        <button class="quick-action-btn" onclick="showToast('Track Document','Opening...')"><i class="fas fa-map-marker-alt"></i> ${t('track_document')}</button>
                        <button class="quick-action-btn" onclick="window.switchPage('reports')"><i class="fas fa-chart-bar"></i> ${t('generate_report')}</button>
                        <button class="quick-action-btn" onclick="showToast('Archive Record','Opening...')"><i class="fas fa-archive"></i> ${t('archive_record')}</button>
                    </div>
                </div>

                <div class="stat-card">
                    <h4 style="font-size:0.8rem;font-weight:700;color:#0a1e3a;margin-bottom:8px;">${t('upcoming_deadlines')}</h4>
                    <div>
                        <div class="deadline-item"><span class="deadline-title">${t('quarterly_report')}</span><span class="deadline-date">May 28, 2025</span></div>
                        <div class="deadline-item"><span class="deadline-title">${t('pending_distributions')}</span><span class="deadline-date">May 26, 2025</span></div>
                        <div class="deadline-item"><span class="deadline-title">${t('archive_review')}</span><span class="deadline-date">May 27, 2025</span></div>
                        <div class="deadline-item"><span class="deadline-title" style="color:#dc2626;">${t('audit_deadline')}</span><span class="deadline-date" style="color:#dc2626;">Jun 15, 2025</span></div>
                    </div>
                </div>

                <div class="stat-card">
                    <h4 style="font-size:0.8rem;font-weight:700;color:#0a1e3a;margin-bottom:8px;">${t('storage_usage')}</h4>
                    <div style="display:flex;justify-content:space-between;font-size:0.85rem;font-weight:600;color:#0a1e3a;">
                        <span>72 GB</span>
                        <span style="font-weight:400;color:#94a3b8;">of 100 GB</span>
                    </div>
                    <div class="storage-bar"><div class="fill" style="width:72%;"></div></div>
                    <div style="display:flex;justify-content:space-between;font-size:0.6rem;color:#94a3b8;margin-top:4px;">
                        <span>${t('used')}</span>
                        <span>${t('total')}</span>
                    </div>
                </div>
            </div>

            <div class="dashboard-footer">
                © 2025 National Archives &amp; Library Agency (NALA). All rights reserved. &bull; ILARMS v2.0.0
            </div>
        `;

        setTimeout(initChart, 200);
    }

    // ─── CHART ──────────────────────────────────────────────────
    function initChart() {
        const canvas = document.getElementById('recordsChart');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (chartInstance) { chartInstance.destroy();
            chartInstance = null; }

        const container = canvas.parentElement;
        const width = container.clientWidth || 500;
        canvas.width = width;
        canvas.height = 160;

        chartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Incoming',
                    data: [120, 145, 132, 168, 190, 210, 185, 170, 200, 220, 240, 260],
                    borderColor: '#2563eb',
                    backgroundColor: 'rgba(37,99,235,0.08)',
                    fill: true,
                    tension: 0.3,
                    pointRadius: 2,
                    pointBackgroundColor: '#2563eb',
                    borderWidth: 2,
                }, {
                    label: 'Outgoing',
                    data: [80, 95, 102, 115, 130, 140, 125, 110, 135, 150, 165, 180],
                    borderColor: '#059669',
                    backgroundColor: 'rgba(5,150,105,0.08)',
                    fill: true,
                    tension: 0.3,
                    pointRadius: 2,
                    pointBackgroundColor: '#059669',
                    borderWidth: 2,
                }, {
                    label: 'Archived',
                    data: [40, 45, 50, 55, 60, 70, 65, 58, 62, 68, 72, 85],
                    borderColor: '#7c3aed',
                    backgroundColor: 'rgba(124,58,237,0.08)',
                    fill: true,
                    tension: 0.3,
                    pointRadius: 2,
                    pointBackgroundColor: '#7c3aed',
                    borderWidth: 2,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        backgroundColor: 'rgba(10,30,58,0.9)',
                        titleColor: '#fff',
                        bodyColor: '#e2e8f0',
                        cornerRadius: 8,
                        padding: 8,
                    }
                },
                scales: {
                    y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 8 },
                            color: '#94a3b8', stepSize: 50 } },
                    x: { grid: { display: false }, ticks: { font: { size: 8 }, color: '#94a3b8' } }
                },
                interaction: { intersect: false, mode: 'index' }
            }
        });
    }

    // ─── RESIZE CHART ──────────────────────────────────────────
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (document.getElementById('page-dashboard').classList.contains('active')) {
                initChart();
            }
        }, 300);
    });

    // ─── INCOMING RENDER ──────────────────────────────────────
    function renderIncomingTable() {
        const tbody = document.getElementById('incomingTableBody');
        if (!tbody) return;
        let filtered = [];
        if (currentRole === 'admin' || currentRole === 'director' || currentRole === 'records_officer' ||
            currentRole === 'head_office') {
            filtered = incomingLetters;
        } else if (currentRole === 'dept_manager') {
            filtered = incomingLetters.filter(l => l.receiver === currentUser || l.senderName === currentUser);
        } else {
            filtered = incomingLetters.filter(l => l.senderName === currentUser);
        }

        tbody.innerHTML = filtered.map(l => {
            const fileBadge = l.fileName ?
                `<span class="file-attachment-badge"><i class="fas fa-paperclip"></i> ${l.fileName}</span>` :
                '';
            const isReceiver = l.receiver === currentUser;
            const isSender = l.senderName === currentUser;
            const isPending = l.status === 'pending' || l.status === 'pending_approval';
            const canApprove = isReceiver && isPending && (currentRole === 'dept_manager' || currentRole ===
                'admin' || currentRole === 'director' || currentRole === 'head_office');

            let actionsHTML =
                `<button onclick="viewIncomingLetter('${l.ref}')" class="text-xs bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 px-2 py-1 rounded-lg transition flex items-center gap-1"><i class="fas fa-eye"></i> View</button>`;
            if (canApprove) {
                actionsHTML +=
                    `<button onclick="openReviewIncoming('${l.ref}')" class="text-xs bg-emerald-50 dark:bg-emerald-950 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2 py-1 rounded-lg transition flex items-center gap-1 font-medium"><i class="fas fa-signature"></i> Review</button>`;
            }
            if (currentRole === 'admin' || currentRole === 'records_officer' || currentRole === 'head_office') {
                actionsHTML +=
                    `<button onclick="editLetter('${l.ref}')" class="text-xs bg-amber-50 dark:bg-amber-950 hover:bg-amber-100 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 px-2 py-1 rounded-lg transition flex items-center gap-1"><i class="fas fa-edit"></i> Edit</button>`;
            }
            return `
                        <tr>
                            <td class="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">${l.ref}</td>
                            <td class="font-mono text-xs text-gray-600 dark:text-gray-300">${l.senderUniqueNum || 'N/A'}</td>
                            <td><div class="font-semibold text-gray-800 dark:text-gray-100">${l.title}</div>${l.receiverRemark ? `<div class="text-[0.7rem] text-slate-500 dark:text-slate-400 italic"><i class="fas fa-comment-alt text-amber-500 mr-1"></i>"${l.receiverRemark}"</div>` : ''}</td>
                            <td class="dark:text-gray-200">${l.sender}</td>
                            <td><div class="font-medium text-xs text-gray-800 dark:text-gray-200">${l.receiver}</div><div class="text-[0.7rem] text-blue-600 dark:text-blue-400"><i class="fas fa-envelope mr-1"></i>${l.receiverEmail || 'N/A'}</div></td>
                            <td>${fileBadge}</td>
                            <td><span class="status-pill ${l.status}">${l.status}</span></td>
                            <td class="dark:text-gray-300">${l.date}</td>
                            <td><div class="qrcode-preview cursor-pointer hover:opacity-80 p-1 border rounded-lg bg-white inline-block shadow-sm" onclick="viewIncomingLetter('${l.ref}')" title="Click to view"><div id="qr-table-${l.ref.replace(/[\/-]/g, '')}"></div></div></td>
                            <td><div class="flex items-center gap-1 flex-wrap">${actionsHTML}</div></td>
                        </tr>
                    `;
        }).join('');

        filtered.forEach(l => {
            generateQR(l.ref, `qr-table-${l.ref.replace(/[\/-]/g, '')}`, 45);
        });

        document.getElementById('incomingCount').textContent = `Showing ${filtered.length} entries`;
    }

    // ─── VIEW INCOMING LETTER ──────────────────────────────
    window.viewIncomingLetter = function(ref) {
        const item = incomingLetters.find(l => l.ref === ref);
        if (!item) { showToast('Letter Not Found', `Reference ${ref} not found.`, 'error'); return; }

        viewRef.textContent = item.ref;
        viewSenderUniq.textContent = item.senderUniqueNum || 'N/A';
        viewTitle.textContent = item.title;
        viewSender.textContent = item.sender;
        viewReceiver.textContent = item.receiver;
        viewReceiverEmail.textContent = item.receiverEmail || 'N/A';
        viewStatus.innerHTML = `<span class="status-pill ${item.status}">${item.status}</span>`;
        viewDate.textContent = item.date;
        viewDesc.textContent = item.desc || 'No description provided.';

        if (item.fileName) { viewFileWrapper.classList.remove('hidden');
            viewFileName.textContent = item.fileName; } else { viewFileWrapper.classList.add('hidden'); }
        if (item.receiverRemark) { viewRemark.textContent = item.receiverRemark;
            viewRemarkWrapper.classList.remove('hidden'); } else { viewRemarkWrapper.classList.add('hidden'); }
        if (item.digitalSignature && item.status === 'approved') { viewSigImg.src = item.digitalSignature;
            viewSigWrapper.classList.remove('hidden'); } else { viewSigWrapper.classList.add('hidden'); }

        // Build inline signature area
        const isRecipient = currentUser && item.receiver === currentUser;
        const isPending = item.status === 'pending' || item.status === 'pending_approval';
        const isApproved = item.status === 'approved' || item.status === 'signed';
        const isRejected = item.status === 'rejected';
        const canSign = isRecipient && isPending;

        let inlineHTML = '';

        if (isApproved) {
            inlineHTML = `
                        <div style="border-top:2px solid #e2e8f0;padding-top:16px;margin-top:12px;">
                            <div style="display:flex;align-items:center;gap:12px;background:#d1fae5;border:1px solid #059669;border-radius:10px;padding:14px 18px;">
                                <i class="fas fa-check-circle" style="color:#059669;font-size:1.3rem;"></i>
                                <div>
                                    <div style="font-weight:700;color:#065f46;">Digitally Signed</div>
                                    <div style="font-size:0.75rem;color:#065f46;">Signed by ${item.signedBy || 'Unknown'} on ${item.signedDate ? new Date(item.signedDate).toLocaleString() : 'N/A'}</div>
                                </div>
                                <span class="sig-status-badge signed" style="margin-left:auto;"><i class="fas fa-check"></i> Signed</span>
                            </div>
                        </div>
                    `;
        } else if (isRejected) {
            inlineHTML = `
                        <div style="border-top:2px solid #e2e8f0;padding-top:16px;margin-top:12px;">
                            <div style="display:flex;align-items:center;gap:12px;background:#fee2e2;border:1px solid #dc2626;border-radius:10px;padding:14px 18px;">
                                <i class="fas fa-times-circle" style="color:#dc2626;font-size:1.3rem;"></i>
                                <div>
                                    <div style="font-weight:700;color:#991b1b;">Rejected</div>
                                    <div style="font-size:0.75rem;color:#991b1b;">Reason: ${item.receiverRemark || 'No reason provided'}</div>
                                </div>
                                <span class="sig-status-badge rejected" style="margin-left:auto;"><i class="fas fa-times"></i> Rejected</span>
                            </div>
                        </div>
                    `;
        } else if (canSign) {
            inlineHTML = `
                        <div style="border-top:2px solid #e2e8f0;padding-top:16px;margin-top:12px;">
                            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                                <div>
                                    <span style="font-weight:700;font-size:0.95rem;color:#0a1e3a;">
                                        <i class="fas fa-pen-fancy" style="color:#d4a373;"></i> ${t('sign_here')}
                                    </span>
                                    <p style="font-size:0.7rem;color:#6b7280;margin-top:1px;">${t('draw_signature')}</p>
                                </div>
                                <button type="button" id="clearInlineSigBtn" class="text-xs text-red-600 hover:underline">${t('clear_signature')}</button>
                            </div>
                            <canvas id="sigInlineCanvas" class="sig-inline-canvas" style="touch-action:none;"></canvas>
                            <div id="inlineSigPreview" style="display:none;margin-top:8px;padding:8px 12px;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
                                <span style="font-size:0.7rem;color:#6b7280;">${t('signed_seal')}</span>
                                <img id="inlineSigImg" src="" style="max-height:50px;display:block;margin-top:4px;" />
                            </div>
                            <div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap;">
                                <button class="btn-success" id="inlineApproveBtn" style="flex:1;padding:8px 16px;font-size:0.85rem;border-radius:10px;border:none;font-weight:600;display:inline-flex;align-items:center;gap:6px;justify-content:center;">
                                    <i class="fas fa-check-circle"></i> ${t('approve_sign')}
                                </button>
                                <button class="btn-danger" id="inlineRejectBtn" style="flex:1;padding:8px 16px;font-size:0.85rem;border-radius:10px;border:none;font-weight:600;display:inline-flex;align-items:center;gap:6px;justify-content:center;">
                                    <i class="fas fa-times-circle"></i> ${t('reject')}
                                </button>
                                <button class="btn-outline" id="inlineCancelSignBtn" style="flex:0;padding:8px 16px;font-size:0.8rem;border-radius:10px;border:1.5px solid #e2e8f0;background:transparent;color:#475569;font-weight:500;">${t('sign_cancel')}</button>
                            </div>
                        </div>
                    `;
        } else {
            inlineHTML = `
                        <div style="border-top:2px solid #e2e8f0;padding-top:16px;margin-top:12px;">
                            <div style="background:#f1f5f9;border-radius:10px;padding:14px 18px;text-align:center;color:#6b7280;font-size:0.85rem;border:1px solid #e2e8f0;">
                                <i class="fas fa-lock" style="margin-right:8px;"></i>
                                ${isPending ? 'Awaiting recipient signature' : 'No signature required for this document'}
                            </div>
                        </div>
                    `;
        }

        inlineContainer.innerHTML = inlineHTML;

        // Initialize inline signature canvas
        if (canSign) {
            setTimeout(function() {
                const canvas = document.getElementById('sigInlineCanvas');
                if (!canvas) return;
                const containerWidth = canvas.parentElement.clientWidth - 4 || 500;
                canvas.width = containerWidth;
                canvas.height = 110;
                const ctx = canvas.getContext('2d');
                ctx.strokeStyle = '#0a1e3a';
                ctx.lineWidth = 2.5;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                let isDrawing = false;
                let lastX = 0,
                    lastY = 0;

                function startDraw(e) {
                    e.preventDefault();
                    const rect = canvas.getBoundingClientRect();
                    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                    const x = (clientX - rect.left) * (canvas.width / rect.width);
                    const y = (clientY - rect.top) * (canvas.height / rect.height);
                    isDrawing = true;
                    lastX = x;
                    lastY = y;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    canvas.classList.add('active');
                }

                function draw(e) {
                    e.preventDefault();
                    if (!isDrawing) return;
                    const rect = canvas.getBoundingClientRect();
                    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                    const x = (clientX - rect.left) * (canvas.width / rect.width);
                    const y = (clientY - rect.top) * (canvas.height / rect.height);
                    ctx.lineTo(x, y);
                    ctx.stroke();
                    lastX = x;
                    lastY = y;
                }

                function endDraw(e) {
                    e.preventDefault();
                    isDrawing = false;
                    canvas.classList.remove('active');
                }

                canvas.addEventListener('mousedown', startDraw);
                canvas.addEventListener('mousemove', draw);
                canvas.addEventListener('mouseup', endDraw);
                canvas.addEventListener('mouseleave', endDraw);
                canvas.addEventListener('touchstart', startDraw, { passive: false });
                canvas.addEventListener('touchmove', draw, { passive: false });
                canvas.addEventListener('touchend', endDraw, { passive: false });

                const clearBtn = document.getElementById('clearInlineSigBtn');
                if (clearBtn) {
                    clearBtn.addEventListener('click', function() {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        document.getElementById('inlineSigPreview').style.display = 'none';
                    });
                }

                const cancelBtn = document.getElementById('inlineCancelSignBtn');
                if (cancelBtn) {
                    cancelBtn.addEventListener('click', function() {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        document.getElementById('inlineSigPreview').style.display = 'none';
                        showToast('Signature Cancelled', 'You have cancelled the signing process.');
                    });
                }

                const approveBtn = document.getElementById('inlineApproveBtn');
                if (approveBtn) {
                    approveBtn.addEventListener('click', function() {
                        const sigData = canvas.toDataURL();
                        if (sigData === 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==' ||
                            sigData === 'data:image/png;base64,') {
                            showToast('Signature Required', 'Please draw your signature first.',
                            'error');
                            return;
                        }
                        const remark = prompt('Enter approval remark (optional):', 'Approved via inline signature.');
                        if (remark === null) return;
                        processInlineSignature(ref, 'approved', sigData, remark || 'Approved via inline signature.');
                    });
                }

                const rejectBtn = document.getElementById('inlineRejectBtn');
                if (rejectBtn) {
                    rejectBtn.addEventListener('click', function() {
                        const remark = prompt('Please enter rejection reason:', '');
                        if (remark === null) return;
                        if (!remark.trim()) { showToast('Reason Required',
                                'Please provide a rejection reason.', 'error'); return; }
                        processInlineSignature(ref, 'rejected', '', remark);
                    });
                }

            }, 200);
        }

        viewModal.classList.add('active');
    };

    function processInlineSignature(ref, status, sigData, remark) {
        const idx = incomingLetters.findIndex(l => l.ref === ref);
        if (idx !== -1) {
            incomingLetters[idx].status = status;
            incomingLetters[idx].receiverRemark = remark;
            if (status === 'approved') {
                incomingLetters[idx].digitalSignature = sigData;
                incomingLetters[idx].signedBy = currentUser;
                incomingLetters[idx].signedDate = new Date().toISOString();
            } else {
                incomingLetters[idx].digitalSignature = '';
                incomingLetters[idx].signedBy = null;
                incomingLetters[idx].signedDate = null;
            }
        }
        viewModal.classList.remove('active');
        logAudit(currentUser, `Letter ${status.toUpperCase()}`, `Ref: ${ref}`);
        showToast(`Letter ${status.toUpperCase()}`, `Reference ${ref} status updated.`);
        renderIncomingTable();
        renderDashboard(currentRole);

        apiFetch(`/incoming/${ref}/review`, {
            method: 'POST',
            body: JSON.stringify({
                status: status,
                receiverRemark: remark,
                digitalSignature: sigData
            })
        });
    }

    // ─── VIEW INTERNAL MEMO ───────────────────────────────────
    window.viewInternalMemo = function(ref) {
        const item = internalMemos.find(l => l.ref === ref);
        if (!item) { showToast('Memo Not Found', `Reference ${ref} not found.`, 'error'); return; }

        viewRef.textContent = item.ref;
        viewSenderUniq.textContent = 'N/A';
        viewTitle.textContent = item.title;
        viewSender.textContent = item.sender;
        viewReceiver.textContent = item.receiver;
        viewReceiverEmail.textContent = item.receiverEmail || 'N/A';
        viewStatus.innerHTML = `<span class="status-pill ${item.status}">${item.status}</span>`;
        viewDate.textContent = item.date;
        viewDesc.textContent = item.description || 'No description provided.';

        if (item.fileName) { viewFileWrapper.classList.remove('hidden');
            viewFileName.textContent = item.fileName; } else { viewFileWrapper.classList.add('hidden'); }
        if (item.receiverRemark) { viewRemark.textContent = item.receiverRemark;
            viewRemarkWrapper.classList.remove('hidden'); } else { viewRemarkWrapper.classList.add('hidden'); }
        if (item.digitalSignature && item.status === 'approved') { viewSigImg.src = item.digitalSignature;
            viewSigWrapper.classList.remove('hidden'); } else { viewSigWrapper.classList.add('hidden'); }

        const isRecipient = currentUser && item.receiver === currentUser;
        const isPending = item.status === 'pending';
        const canSign = isRecipient && isPending;

        let inlineHTML = '';

        if (item.status === 'approved') {
            inlineHTML = `
                        <div style="border-top:2px solid #e2e8f0;padding-top:16px;margin-top:12px;">
                            <div style="display:flex;align-items:center;gap:12px;background:#d1fae5;border:1px solid #059669;border-radius:10px;padding:14px 18px;">
                                <i class="fas fa-check-circle" style="color:#059669;font-size:1.3rem;"></i>
                                <div>
                                    <div style="font-weight:700;color:#065f46;">Digitally Signed</div>
                                    <div style="font-size:0.75rem;color:#065f46;">Signed by ${item.signedBy || 'Unknown'} on ${item.signedDate ? new Date(item.signedDate).toLocaleString() : 'N/A'}</div>
                                </div>
                                <span class="sig-status-badge signed" style="margin-left:auto;"><i class="fas fa-check"></i> Signed</span>
                            </div>
                        </div>
                    `;
        } else if (item.status === 'rejected') {
            inlineHTML = `
                        <div style="border-top:2px solid #e2e8f0;padding-top:16px;margin-top:12px;">
                            <div style="display:flex;align-items:center;gap:12px;background:#fee2e2;border:1px solid #dc2626;border-radius:10px;padding:14px 18px;">
                                <i class="fas fa-times-circle" style="color:#dc2626;font-size:1.3rem;"></i>
                                <div>
                                    <div style="font-weight:700;color:#991b1b;">Rejected</div>
                                    <div style="font-size:0.75rem;color:#991b1b;">Reason: ${item.receiverRemark || 'No reason provided'}</div>
                                </div>
                                <span class="sig-status-badge rejected" style="margin-left:auto;"><i class="fas fa-times"></i> Rejected</span>
                            </div>
                        </div>
                    `;
        } else if (canSign) {
            inlineHTML = `
                        <div style="border-top:2px solid #e2e8f0;padding-top:16px;margin-top:12px;">
                            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                                <div>
                                    <span style="font-weight:700;font-size:0.95rem;color:#0a1e3a;">
                                        <i class="fas fa-pen-fancy" style="color:#d4a373;"></i> ${t('sign_here')}
                                    </span>
                                    <p style="font-size:0.7rem;color:#6b7280;margin-top:1px;">${t('draw_signature')}</p>
                                </div>
                                <button type="button" id="clearInlineSigBtn" class="text-xs text-red-600 hover:underline">${t('clear_signature')}</button>
                            </div>
                            <canvas id="sigInlineCanvas" class="sig-inline-canvas" style="touch-action:none;"></canvas>
                            <div id="inlineSigPreview" style="display:none;margin-top:8px;padding:8px 12px;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
                                <span style="font-size:0.7rem;color:#6b7280;">${t('signed_seal')}</span>
                                <img id="inlineSigImg" src="" style="max-height:50px;display:block;margin-top:4px;" />
                            </div>
                            <div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap;">
                                <button class="btn-success" id="inlineApproveBtn" style="flex:1;padding:8px 16px;font-size:0.85rem;border-radius:10px;border:none;font-weight:600;display:inline-flex;align-items:center;gap:6px;justify-content:center;">
                                    <i class="fas fa-check-circle"></i> ${t('approve_sign')}
                                </button>
                                <button class="btn-danger" id="inlineRejectBtn" style="flex:1;padding:8px 16px;font-size:0.85rem;border-radius:10px;border:none;font-weight:600;display:inline-flex;align-items:center;gap:6px;justify-content:center;">
                                    <i class="fas fa-times-circle"></i> ${t('reject')}
                                </button>
                                <button class="btn-outline" id="inlineCancelSignBtn" style="flex:0;padding:8px 16px;font-size:0.8rem;border-radius:10px;border:1.5px solid #e2e8f0;background:transparent;color:#475569;font-weight:500;">${t('sign_cancel')}</button>
                            </div>
                        </div>
                    `;
        } else {
            inlineHTML = `
                        <div style="border-top:2px solid #e2e8f0;padding-top:16px;margin-top:12px;">
                            <div style="background:#f1f5f9;border-radius:10px;padding:14px 18px;text-align:center;color:#6b7280;font-size:0.85rem;border:1px solid #e2e8f0;">
                                <i class="fas fa-lock" style="margin-right:8px;"></i>
                                ${isPending ? 'Awaiting recipient signature' : 'No signature required'}
                            </div>
                        </div>
                    `;
        }

        inlineContainer.innerHTML = inlineHTML;

        if (canSign) {
            setTimeout(function() {
                const canvas = document.getElementById('sigInlineCanvas');
                if (!canvas) return;
                const containerWidth = canvas.parentElement.clientWidth - 4 || 500;
                canvas.width = containerWidth;
                canvas.height = 110;
                const ctx = canvas.getContext('2d');
                ctx.strokeStyle = '#0a1e3a';
                ctx.lineWidth = 2.5;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                let isDrawing = false;
                let lastX = 0,
                    lastY = 0;

                function startDraw(e) {
                    e.preventDefault();
                    const rect = canvas.getBoundingClientRect();
                    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                    const x = (clientX - rect.left) * (canvas.width / rect.width);
                    const y = (clientY - rect.top) * (canvas.height / rect.height);
                    isDrawing = true;
                    lastX = x;
                    lastY = y;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    canvas.classList.add('active');
                }

                function draw(e) {
                    e.preventDefault();
                    if (!isDrawing) return;
                    const rect = canvas.getBoundingClientRect();
                    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                    const x = (clientX - rect.left) * (canvas.width / rect.width);
                    const y = (clientY - rect.top) * (canvas.height / rect.height);
                    ctx.lineTo(x, y);
                    ctx.stroke();
                    lastX = x;
                    lastY = y;
                }

                function endDraw(e) {
                    e.preventDefault();
                    isDrawing = false;
                    canvas.classList.remove('active');
                }

                canvas.addEventListener('mousedown', startDraw);
                canvas.addEventListener('mousemove', draw);
                canvas.addEventListener('mouseup', endDraw);
                canvas.addEventListener('mouseleave', endDraw);
                canvas.addEventListener('touchstart', startDraw, { passive: false });
                canvas.addEventListener('touchmove', draw, { passive: false });
                canvas.addEventListener('touchend', endDraw, { passive: false });

                const clearBtn = document.getElementById('clearInlineSigBtn');
                if (clearBtn) {
                    clearBtn.addEventListener('click', function() {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        document.getElementById('inlineSigPreview').style.display = 'none';
                    });
                }

                const cancelBtn = document.getElementById('inlineCancelSignBtn');
                if (cancelBtn) {
                    cancelBtn.addEventListener('click', function() {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        document.getElementById('inlineSigPreview').style.display = 'none';
                        showToast('Signature Cancelled', '');
                    });
                }

                const approveBtn = document.getElementById('inlineApproveBtn');
                if (approveBtn) {
                    approveBtn.addEventListener('click', function() {
                        const sigData = canvas.toDataURL();
                        if (sigData === 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==' ||
                            sigData === 'data:image/png;base64,') {
                            showToast('Signature Required', 'Please draw your signature first.',
                            'error');
                            return;
                        }
                        const remark = prompt('Enter approval remark (optional):',
                            'Approved via inline signature.');
                        if (remark === null) return;
                        processInternalInlineSignature(ref, 'approved', sigData, remark ||
                            'Approved via inline signature.');
                    });
                }

                const rejectBtn = document.getElementById('inlineRejectBtn');
                if (rejectBtn) {
                    rejectBtn.addEventListener('click', function() {
                        const remark = prompt('Please enter rejection reason:', '');
                        if (remark === null) return;
                        if (!remark.trim()) { showToast('Reason Required',
                                'Please provide a rejection reason.', 'error'); return; }
                        processInternalInlineSignature(ref, 'rejected', '', remark);
                    });
                }

            }, 200);
        }

        viewModal.classList.add('active');
    };

    function processInternalInlineSignature(ref, status, sigData, remark) {
        const idx = internalMemos.findIndex(l => l.ref === ref);
        if (idx !== -1) {
            internalMemos[idx].status = status;
            internalMemos[idx].receiverRemark = remark;
            if (status === 'approved') {
                internalMemos[idx].digitalSignature = sigData;
                internalMemos[idx].signedBy = currentUser;
                internalMemos[idx].signedDate = new Date().toISOString();
            } else {
                internalMemos[idx].digitalSignature = '';
                internalMemos[idx].signedBy = null;
                internalMemos[idx].signedDate = null;
            }
        }
        viewModal.classList.remove('active');
        logAudit(currentUser, `Internal Memo ${status.toUpperCase()}`, `Ref: ${ref}`);
        showToast(`Memo ${status.toUpperCase()}`, `Reference ${ref} status updated.`);
        renderInternalTable();
        renderDashboard(currentRole);

        apiFetch(`/internal/${ref}/review`, {
            method: 'POST',
            body: JSON.stringify({
                status: status,
                receiverRemark: remark,
                digitalSignature: sigData
            })
        });
    }

    // ─── SHOW OUTGOING DETAILS ──────────────────────────────
    window.showOutgoingDetails = function(ref) {
        const item = outgoingLetters.find(l => l.ref === ref);
        if (!item) { showToast('Letter Not Found', `Reference ${ref} not found.`, 'error'); return; }

        qrOutDetailRef.textContent = item.ref;
        qrOutDetailTitle.textContent = item.title;
        qrOutDetailSender.textContent = item.sender;
        qrOutDetailReceiver.textContent = item.receiver;
        qrOutDetailReceiverEmail.textContent = item.receiverEmail || 'N/A';
        qrOutDetailClassification.textContent = item.classification || 'General';
        qrOutDetailStatus.innerHTML = `<span class="status-pill ${item.status}">${item.status}</span>`;
        qrOutDetailDesc.textContent = item.description || 'No description.';

        if (item.managerRemark) { qrOutDetailRemark.textContent = item.managerRemark;
            qrOutDetailRemarkWrapper.classList.remove('hidden'); } else { qrOutDetailRemarkWrapper.classList.add(
                'hidden'); }
        if (item.digitalSignature && item.status === 'approved') { qrOutDetailSigImg.src = item.digitalSignature;
            qrOutDetailSigWrapper.classList.remove('hidden'); } else { qrOutDetailSigWrapper.classList.add(
                'hidden'); }

        const isManager = currentRole === 'dept_manager' || currentRole === 'admin' || currentRole ===
            'head_office';
        const isPending = item.status === 'pending_approval';
        const canSign = isManager && isPending;

        const sigContainer = document.getElementById('qrOutDetailSigContainer');
        if (!sigContainer) {
            const container = document.createElement('div');
            container.id = 'qrOutDetailSigContainer';
            container.style.marginTop = '12px';
            container.style.borderTop = '2px solid #e2e8f0';
            container.style.paddingTop = '12px';
            const parent = document.querySelector('#qrDetailOutModal .modal-box .space-y-3');
            if (parent) parent.appendChild(container);
        }

        let inlineHTML = '';
        if (item.status === 'approved') {
            inlineHTML = `
                        <div style="display:flex;align-items:center;gap:12px;background:#d1fae5;border:1px solid #059669;border-radius:10px;padding:12px 16px;">
                            <i class="fas fa-check-circle" style="color:#059669;font-size:1.2rem;"></i>
                            <div><div style="font-weight:700;color:#065f46;">Approved</div><div style="font-size:0.75rem;color:#065f46;">Signed by ${item.signedBy || 'Manager'}</div></div>
                            <span class="sig-status-badge signed" style="margin-left:auto;"><i class="fas fa-check"></i> Signed</span>
                        </div>
                    `;
        } else if (canSign) {
            inlineHTML = `
                        <div style="margin-top:10px;">
                            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                                <span style="font-weight:700;font-size:0.9rem;color:#0a1e3a;"><i class="fas fa-pen-fancy" style="color:#d4a373;"></i> ${t('sign_here')}</span>
                                <button type="button" id="clearOutInlineSigBtn" class="text-xs text-red-600 hover:underline">${t('clear_signature')}</button>
                            </div>
                            <canvas id="sigOutInlineCanvas" class="sig-inline-canvas" style="touch-action:none;"></canvas>
                            <div id="outInlineSigPreview" style="display:none;margin-top:6px;padding:6px 12px;background:#fff;border:1px solid #e2e8f0;border-radius:8px;">
                                <span style="font-size:0.7rem;color:#6b7280;">${t('signed_seal')}</span>
                                <img id="outInlineSigImg" src="" style="max-height:40px;display:block;margin-top:3px;" />
                            </div>
                            <div style="display:flex;gap:8px;margin-top:10px;flex-wrap:wrap;">
                                <button class="btn-success" id="outInlineApproveBtn" style="flex:1;padding:6px 14px;font-size:0.8rem;border-radius:8px;border:none;font-weight:600;display:inline-flex;align-items:center;gap:6px;justify-content:center;">
                                    <i class="fas fa-check-circle"></i> ${t('approve_sign')}
                                </button>
                                <button class="btn-danger" id="outInlineRejectBtn" style="flex:1;padding:6px 14px;font-size:0.8rem;border-radius:8px;border:none;font-weight:600;display:inline-flex;align-items:center;gap:6px;justify-content:center;">
                                    <i class="fas fa-times-circle"></i> ${t('reject')}
                                </button>
                            </div>
                        </div>
                    `;
        } else {
            inlineHTML = `
                        <div style="background:#f1f5f9;border-radius:8px;padding:10px 14px;text-align:center;color:#6b7280;font-size:0.8rem;border:1px solid #e2e8f0;margin-top:8px;">
                            <i class="fas fa-lock" style="margin-right:6px;"></i> ${isPending ? 'Awaiting manager approval' : 'No action required'}
                        </div>
                    `;
        }

        const container = document.getElementById('qrOutDetailSigContainer');
        if (container) container.innerHTML = inlineHTML;

        if (canSign) {
            setTimeout(function() {
                const canvas = document.getElementById('sigOutInlineCanvas');
                if (!canvas) return;
                const containerWidth = canvas.parentElement.clientWidth - 4 || 500;
                canvas.width = containerWidth;
                canvas.height = 100;
                const ctx = canvas.getContext('2d');
                ctx.strokeStyle = '#0a1e3a';
                ctx.lineWidth = 2.5;
                ctx.lineCap = 'round';
                ctx.lineJoin = 'round';
                let isDrawing = false;

                function startDraw(e) {
                    e.preventDefault();
                    const rect = canvas.getBoundingClientRect();
                    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                    const x = (clientX - rect.left) * (canvas.width / rect.width);
                    const y = (clientY - rect.top) * (canvas.height / rect.height);
                    isDrawing = true;
                    ctx.beginPath();
                    ctx.moveTo(x, y);
                    canvas.classList.add('active');
                }

                function draw(e) {
                    e.preventDefault();
                    if (!isDrawing) return;
                    const rect = canvas.getBoundingClientRect();
                    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
                    const x = (clientX - rect.left) * (canvas.width / rect.width);
                    const y = (clientY - rect.top) * (canvas.height / rect.height);
                    ctx.lineTo(x, y);
                    ctx.stroke();
                }

                function endDraw(e) {
                    e.preventDefault();
                    isDrawing = false;
                    canvas.classList.remove('active');
                }

                canvas.addEventListener('mousedown', startDraw);
                canvas.addEventListener('mousemove', draw);
                canvas.addEventListener('mouseup', endDraw);
                canvas.addEventListener('mouseleave', endDraw);
                canvas.addEventListener('touchstart', startDraw, { passive: false });
                canvas.addEventListener('touchmove', draw, { passive: false });
                canvas.addEventListener('touchend', endDraw, { passive: false });

                const clearBtn = document.getElementById('clearOutInlineSigBtn');
                if (clearBtn) {
                    clearBtn.addEventListener('click', function() {
                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                        document.getElementById('outInlineSigPreview').style.display = 'none';
                    });
                }

                const approveBtn = document.getElementById('outInlineApproveBtn');
                if (approveBtn) {
                    approveBtn.addEventListener('click', function() {
                        const sigData = canvas.toDataURL();
                        if (sigData === 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==' ||
                            sigData === 'data:image/png;base64,') {
                            showToast('Signature Required', 'Please draw your signature first.',
                            'error');
                            return;
                        }
                        const remark = prompt('Enter approval remark:', 'Approved.');
                        if (remark === null) return;
                        processOutgoingInlineSignature(ref, 'approved', sigData, remark);
                    });
                }

                const rejectBtn = document.getElementById('outInlineRejectBtn');
                if (rejectBtn) {
                    rejectBtn.addEventListener('click', function() {
                        const remark = prompt('Enter rejection reason:', '');
                        if (remark === null) return;
                        if (!remark.trim()) { showToast('Reason Required',
                                'Please provide a rejection reason.', 'error'); return; }
                        processOutgoingInlineSignature(ref, 'rejected', '', remark);
                    });
                }

            }, 200);
        }

        qrDetailOutModal.classList.add('active');
    };

    function processOutgoingInlineSignature(ref, status, sigData, remark) {
        const idx = outgoingLetters.findIndex(l => l.ref === ref);
        if (idx !== -1) {
            outgoingLetters[idx].status = status;
            outgoingLetters[idx].managerRemark = remark;
            if (status === 'approved') {
                outgoingLetters[idx].digitalSignature = sigData;
                outgoingLetters[idx].signedBy = currentUser;
                outgoingLetters[idx].signedDate = new Date().toISOString();
            } else {
                outgoingLetters[idx].digitalSignature = '';
                outgoingLetters[idx].signedBy = null;
                outgoingLetters[idx].signedDate = null;
            }
        }
        qrDetailOutModal.classList.remove('active');
        logAudit(currentUser, `Outgoing Letter ${status.toUpperCase()}`, `Ref: ${ref}`);
        showToast(`Outgoing ${status.toUpperCase()}`, `Reference ${ref} status updated.`);
        renderOutgoingTable();
        renderDashboard(currentRole);

        apiFetch(`/outgoing/${ref}/review`, {
            method: 'POST',
            body: JSON.stringify({
                status: status,
                managerRemark: remark,
                digitalSignature: sigData
            })
        });
    }

    // ─── CLOSE VIEW MODAL ──────────────────────────────────
    closeViewModalBtn.addEventListener('click', () => viewModal.classList.remove('active'));
    closeViewBtn.addEventListener('click', () => viewModal.classList.remove('active'));

    // ─── OPEN REVIEW INCOMING ──────────────────────────────
    window.openReviewIncoming = function(ref) {
        const item = incomingLetters.find(l => l.ref === ref);
        if (!item) { showToast('Letter Not Found', `Reference ${ref} not found.`, 'error'); return; }
        if (item.status === 'approved') { showToast('Already Approved', 'This letter is already approved.',
            'error'); return; }
        if (item.status === 'rejected') { showToast('Already Rejected', 'This letter was rejected.', 'error');
            return; }
        reviewInTargetRef.value = ref;
        reviewInRef.textContent = item.ref;
        reviewInTitle.textContent = item.title;
        reviewInSender.textContent = item.sender;
        reviewInDesc.textContent = item.desc || 'No description.';
        receiverInRemark.value = item.receiverRemark || '';
        if (item.fileName) { reviewInFileWrapper.classList.remove('hidden');
            reviewInFileName.textContent = item.fileName; } else { reviewInFileWrapper.classList.add('hidden'); }
        clearInCanvas();
        reviewInModal.classList.add('active');
        setTimeout(initInCanvas, 150);
    };

    function processIncomingReview(status) {
        const ref = reviewInTargetRef.value;
        const idx = incomingLetters.findIndex(l => l.ref === ref);
        let sigData = '';
        const remark = receiverInRemark.value.trim();

        if (idx !== -1) {
            incomingLetters[idx].status = status;
            incomingLetters[idx].receiverRemark = remark;
            if (status === 'approved') {
                sigData = sigInCanvas.toDataURL();
                incomingLetters[idx].digitalSignature = sigData;
                incomingLetters[idx].signedBy = currentUser;
                incomingLetters[idx].signedDate = new Date().toISOString();
            } else {
                incomingLetters[idx].digitalSignature = '';
                incomingLetters[idx].signedBy = null;
                incomingLetters[idx].signedDate = null;
            }
        }
        reviewInModal.classList.remove('active');
        logAudit(currentUser, `Incoming Letter ${status.toUpperCase()}`, `Ref: ${ref}`);
        showToast(`Letter ${status.toUpperCase()}`, `Reference ${ref} status updated to ${status}.`);
        renderIncomingTable();
        renderDashboard(currentRole);

        apiFetch(`/incoming/${ref}/review`, {
            method: 'POST',
            body: JSON.stringify({
                status: status,
                receiverRemark: remark,
                digitalSignature: sigData
            })
        });
    }

    approveInBtn.addEventListener('click', () => {
        if (!receiverInRemark.value.trim()) { showToast('Missing Remark', 'Please add a remark.',
            'error'); return; }
        const sigData = sigInCanvas.toDataURL();
        if (sigData === 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==' ||
            sigData === 'data:image/png;base64,') {
            showToast('Signature Required', 'Please draw your digital signature.', 'error');
            return;
        }
        processIncomingReview('approved');
    });
    rejectInBtn.addEventListener('click', () => {
        if (!receiverInRemark.value.trim()) { showToast('Missing Remark', 'Please add a remark.',
            'error'); return; }
        processIncomingReview('rejected');
    });

    closeReviewInModalBtn.addEventListener('click', () => reviewInModal.classList.remove('active'));
    cancelReviewInBtn.addEventListener('click', () => reviewInModal.classList.remove('active'));

    // ─── CANVAS: INCOMING SIGNATURE ─────────────────────────
    let ctxIn = sigInCanvas.getContext('2d');
    let isInDrawing = false;

    function initInCanvas() {
        sigInCanvas.width = sigInCanvas.offsetWidth || 500;
        sigInCanvas.height = 120;
        ctxIn.strokeStyle = '#0a1e3a';
        ctxIn.lineWidth = 2.5;
        ctxIn.lineCap = 'round';
    }

    function clearInCanvas() { ctxIn.clearRect(0, 0, sigInCanvas.width, sigInCanvas.height); }
    sigInCanvas.addEventListener('mousedown', e => { isInDrawing = true;
        ctxIn.beginPath();
        ctxIn.moveTo(e.offsetX, e.offsetY); });
    sigInCanvas.addEventListener('mousemove', e => { if (isInDrawing) { ctxIn.lineTo(e.offsetX, e.offsetY);
            ctxIn.stroke(); } });
    sigInCanvas.addEventListener('mouseup', () => { isInDrawing = false; });
    if (clearInSigBtn) clearInSigBtn.addEventListener('click', clearInCanvas);

    // ─── INTERNAL MEMOS ──────────────────────────────────────
    function resetInternalForm() {
        internalRef.value = generateInternalRef();
        internalDate.value = new Date().toISOString().split('T')[0];
        internalTitle.value = '';
        internalDesc.value = '';
        internalSender.value = currentUser;
        editInternalRef.value = '';
        internalDropZoneContent.style.display = 'block';
        internalFilePreview.style.display = 'none';
        internalUploadStatus.textContent = '';
        for (let i = 0; i < internalReceiverSelect.options.length; i++) {
            if (internalReceiverSelect.options[i].value !== currentUser) {
                internalReceiverSelect.selectedIndex = i;
                break;
            }
        }
        updateInternalReceiverEmailBadge();
    }

    function openInternalModal(editRef = null) {
        if (editRef) {
            const item = internalMemos.find(l => l.ref === editRef);
            if (!item) return;
            editInternalRef.value = editRef;
            internalRef.value = item.ref;
            internalDate.value = item.date;
            internalTitle.value = item.title;
            internalDesc.value = item.description;
            internalSender.value = item.sender;
            internalReceiverSelect.value = item.receiver;
            updateInternalReceiverEmailBadge();
            if (item.fileName) {
                internalDropZoneContent.style.display = 'none';
                internalFilePreview.style.display = 'flex';
                internalFilePreview.innerHTML =
                    `<i class="fas fa-file-pdf text-red-500 text-2xl"></i><span class="file-name">${item.fileName}</span><span class="text-xs text-gray-400">(attached)</span>`;
                internalUploadStatus.textContent = 'File attached.';
            } else {
                internalDropZoneContent.style.display = 'block';
                internalFilePreview.style.display = 'none';
                internalUploadStatus.textContent = '';
            }
            document.getElementById('internalModalTitle').innerHTML =
                `<i class="fas fa-edit text-amber-600 mr-2"></i>Edit Internal Memo`;
        } else {
            resetInternalForm();
            document.getElementById('internalModalTitle').innerHTML =
                `<i class="fas fa-envelope text-blue-600 mr-2"></i>Create Internal Memo`;
        }
        internalModal.classList.add('active');
    }

    window.editInternal = function(ref) { openInternalModal(ref); };

    let internalUploadedFileData = null;
    let internalUploadedFileName = '';

    function handleInternalFileSelection(file) {
        internalUploadedFileName = file.name;
        const reader = new FileReader();
        reader.onload = function(e) {
            internalUploadedFileData = e.target.result;
            internalDropZoneContent.style.display = 'none';
            internalFilePreview.style.display = 'flex';
            internalFilePreview.innerHTML =
                `<i class="fas fa-file-pdf text-red-500 text-2xl"></i><span class="file-name">${file.name}</span><span class="text-xs text-gray-400">(${(file.size / 1024).toFixed(1)} KB)</span><button type="button" id="removeInternalFileBtn" class="text-xs text-red-500 hover:text-red-700 ml-2"><i class="fas fa-times"></i></button>`;
            internalUploadStatus.textContent = "Document attached!";
            document.getElementById('removeInternalFileBtn')?.addEventListener('click', function() {
                internalUploadedFileData = null;
                internalUploadedFileName = '';
                internalDropZoneContent.style.display = 'block';
                internalFilePreview.style.display = 'none';
                internalUploadStatus.textContent = '';
            });
        };
        reader.readAsDataURL(file);
    }

    internalDropZone.addEventListener('click', () => internalFileInput.click());
    internalDropZone.addEventListener('dragover', (e) => { e.preventDefault();
        internalDropZone.classList.add('dragover'); });
    internalDropZone.addEventListener('dragleave', () => internalDropZone.classList.remove('dragover'));
    internalDropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        internalDropZone.classList.remove('dragover');
        if (e.dataTransfer.files.length) handleInternalFileSelection(e.dataTransfer.files[0]);
    });
    internalFileInput.addEventListener('change', () => {
        if (internalFileInput.files.length) handleInternalFileSelection(internalFileInput.files[0]);
    });

    internalForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const selectedUserObj = userDatabase.find(u => u.name === internalReceiverSelect.value);
        const rEmail = selectedUserObj ? selectedUserObj.email : '';
        const editRef = editInternalRef.value;

        if (editRef) {
            const idx = internalMemos.findIndex(l => l.ref === editRef);
            if (idx !== -1) {
                internalMemos[idx] = {
                    ...internalMemos[idx],
                    title: internalTitle.value.trim(),
                    description: internalDesc.value.trim(),
                    receiver: internalReceiverSelect.value,
                    receiverEmail: rEmail,
                    date: internalDate.value,
                    fileName: internalUploadedFileName || internalMemos[idx].fileName || '',
                    fileData: internalUploadedFileData || internalMemos[idx].fileData || null
                };
            }
            logAudit(currentUser, 'Internal Memo Updated', `Ref: ${editRef}`);
            showToast('Memo Updated', `Reference ${editRef} updated.`);
        } else {
            const payload = {
                title: internalTitle.value.trim(),
                description: internalDesc.value.trim(),
                sender: currentUser,
                senderName: currentUser,
                receiver: internalReceiverSelect.value,
                receiverEmail: rEmail,
                date: internalDate.value,
                fileName: internalUploadedFileName || '',
                filePath: ''
            };

            const created = await apiFetch('/internal', {
                method: 'POST',
                body: JSON.stringify(payload)
            });

            const newRef = created && created.ref ? created.ref : internalRef.value;

            internalMemos.unshift({
                ref: newRef,
                title: internalTitle.value.trim(),
                sender: currentUser,
                senderName: currentUser,
                receiver: internalReceiverSelect.value,
                receiverEmail: rEmail,
                date: internalDate.value,
                status: 'pending',
                description: internalDesc.value.trim(),
                receiverRemark: '',
                digitalSignature: '',
                fileName: internalUploadedFileName || '',
                fileData: internalUploadedFileData || null
            });
            logAudit(currentUser, 'Internal Memo Created', `Ref: ${newRef} | To: ${internalReceiverSelect.value}`);
            showToast('Memo Sent', `Reference ${newRef} sent to ${internalReceiverSelect.value}.`);
        }
        internalModal.classList.remove('active');
        renderInternalTable();
        renderDashboard(currentRole);
        internalUploadedFileData = null;
        internalUploadedFileName = '';
    });

    closeInternalModalBtn.addEventListener('click', () => internalModal.classList.remove('active'));
    cancelInternalModalBtn.addEventListener('click', () => internalModal.classList.remove('active'));

    // ─── RENDER INTERNAL TABLE ──────────────────────────────
    function renderInternalTable() {
        const tbody = document.getElementById('internalTableBody');
        if (!tbody) return;

        let filtered = [];
        if (currentRole === 'admin' || currentRole === 'director' || currentRole === 'records_officer' ||
            currentRole === 'head_office') {
            filtered = internalMemos;
        } else if (currentRole === 'dept_manager') {
            filtered = internalMemos.filter(l => l.receiver === currentUser || l.senderName === currentUser);
        } else {
            filtered = internalMemos.filter(l => l.senderName === currentUser);
        }

        tbody.innerHTML = filtered.map(l => {
            const fileBadge = l.fileName ?
                `<span class="file-attachment-badge"><i class="fas fa-paperclip"></i> ${l.fileName}</span>` :
                '';
            const isReceiver = l.receiver === currentUser;
            const isPending = l.status === 'pending';
            const canApprove = isReceiver && isPending && (currentRole === 'dept_manager' || currentRole ===
                'admin' || currentRole === 'director' || currentRole === 'head_office');

            let actionsHTML =
                `<button onclick="viewInternalMemo('${l.ref}')" class="text-xs bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 px-2 py-1 rounded-lg transition flex items-center gap-1"><i class="fas fa-eye"></i> View</button>`;
            if (canApprove) {
                actionsHTML +=
                    `<button onclick="openReviewInternal('${l.ref}')" class="text-xs bg-emerald-50 dark:bg-emerald-950 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2 py-1 rounded-lg transition flex items-center gap-1 font-medium"><i class="fas fa-signature"></i> Review</button>`;
            }
            if (currentRole === 'admin' || currentRole === 'records_officer' || currentRole === 'head_office' ||
                l.senderName === currentUser) {
                actionsHTML +=
                    `<button onclick="editInternal('${l.ref}')" class="text-xs bg-amber-50 dark:bg-amber-950 hover:bg-amber-100 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 px-2 py-1 rounded-lg transition flex items-center gap-1"><i class="fas fa-edit"></i> Edit</button>`;
            }
            return `
                        <tr>
                            <td class="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">${l.ref}</td>
                            <td><div class="font-semibold text-gray-800 dark:text-gray-100">${l.title}</div>${l.receiverRemark ? `<div class="text-[0.7rem] text-slate-500 dark:text-slate-400 italic"><i class="fas fa-comment-alt text-amber-500 mr-1"></i>"${l.receiverRemark}"</div>` : ''}</td>
                            <td class="dark:text-gray-200">${l.sender}</td>
                            <td><div class="font-medium text-xs text-gray-800 dark:text-gray-200">${l.receiver}</div><div class="text-[0.7rem] text-blue-600 dark:text-blue-400"><i class="fas fa-envelope mr-1"></i>${l.receiverEmail || 'N/A'}</div></td>
                            <td>${fileBadge}</td>
                            <td><span class="status-pill ${l.status}">${l.status}</span></td>
                            <td class="dark:text-gray-300">${l.date}</td>
                            <td><div class="qrcode-preview cursor-pointer hover:opacity-80 p-1 border rounded-lg bg-white inline-block shadow-sm" onclick="viewInternalMemo('${l.ref}')" title="Click to view"><div id="qr-internal-${l.ref.replace(/[\/-]/g, '')}"></div></div></td>
                            <td><div class="flex items-center gap-1 flex-wrap">${actionsHTML}</div></td>
                        </tr>
                    `;
        }).join('');

        filtered.forEach(l => {
            generateQR(l.ref, `qr-internal-${l.ref.replace(/[\/-]/g, '')}`, 45);
        });

        document.getElementById('internalCount').textContent = `Showing ${filtered.length} entries`;
    }

    // ─── OPEN REVIEW INTERNAL ──────────────────────────────
    window.openReviewInternal = function(ref) {
        const item = internalMemos.find(l => l.ref === ref);
        if (!item) { showToast('Memo Not Found', `Reference ${ref} not found.`, 'error'); return; }
        if (item.status === 'approved') { showToast('Already Approved', 'This memo is already approved.',
            'error'); return; }
        if (item.status === 'rejected') { showToast('Already Rejected', 'This memo was rejected.', 'error');
            return; }
        reviewInternalTargetRef.value = ref;
        reviewInternalRef.textContent = item.ref;
        reviewInternalTitle.textContent = item.title;
        reviewInternalSender.textContent = item.sender;
        reviewInternalReceiver.textContent = item.receiver;
        reviewInternalDesc.textContent = item.description || 'No description.';
        receiverInternalRemark.value = item.receiverRemark || '';
        clearInternalCanvas();
        reviewInternalModal.classList.add('active');
        setTimeout(initInternalCanvas, 150);
    };

    function processInternalReview(status) {
        const ref = reviewInternalTargetRef.value;
        const idx = internalMemos.findIndex(l => l.ref === ref);
        if (idx !== -1) {
            internalMemos[idx].status = status;
            internalMemos[idx].receiverRemark = receiverInternalRemark.value.trim();
            if (status === 'approved') {
                internalMemos[idx].digitalSignature = sigInternalCanvas.toDataURL();
                internalMemos[idx].signedBy = currentUser;
                internalMemos[idx].signedDate = new Date().toISOString();
            } else {
                internalMemos[idx].digitalSignature = '';
                internalMemos[idx].signedBy = null;
                internalMemos[idx].signedDate = null;
            }
        }
        reviewInternalModal.classList.remove('active');
        logAudit(currentUser, `Internal Memo ${status.toUpperCase()}`, `Ref: ${ref}`);
        showToast(`Memo ${status.toUpperCase()}`, `Reference ${ref} status updated.`);
        renderInternalTable();
        renderDashboard(currentRole);
    }

    approveInternalBtn.addEventListener('click', () => {
        if (!receiverInternalRemark.value.trim()) { showToast('Missing Remark', 'Please add a remark.',
            'error'); return; }
        const sigData = sigInternalCanvas.toDataURL();
        if (sigData === 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==' ||
            sigData === 'data:image/png;base64,') {
            showToast('Signature Required', 'Please draw your digital signature.', 'error');
            return;
        }
        processInternalReview('approved');
    });
    rejectInternalBtn.addEventListener('click', () => {
        if (!receiverInternalRemark.value.trim()) { showToast('Missing Remark', 'Please add a remark.',
            'error'); return; }
        processInternalReview('rejected');
    });

    closeReviewInternalModalBtn.addEventListener('click', () => reviewInternalModal.classList.remove('active'));
    cancelReviewInternalBtn.addEventListener('click', () => reviewInternalModal.classList.remove('active'));

    // ─── CANVAS: INTERNAL SIGNATURE ─────────────────────────
    let ctxInt = sigInternalCanvas.getContext('2d');
    let isIntDrawing = false;

    function initInternalCanvas() {
        sigInternalCanvas.width = sigInternalCanvas.offsetWidth || 500;
        sigInternalCanvas.height = 120;
        ctxInt.strokeStyle = '#0a1e3a';
        ctxInt.lineWidth = 2.5;
        ctxInt.lineCap = 'round';
    }

    function clearInternalCanvas() { ctxInt.clearRect(0, 0, sigInternalCanvas.width, sigInternalCanvas.height); }
    sigInternalCanvas.addEventListener('mousedown', e => { isIntDrawing = true;
        ctxInt.beginPath();
        ctxInt.moveTo(e.offsetX, e.offsetY); });
    sigInternalCanvas.addEventListener('mousemove', e => { if (isIntDrawing) { ctxInt.lineTo(e.offsetX, e.offsetY);
            ctxInt.stroke(); } });
    sigInternalCanvas.addEventListener('mouseup', () => { isIntDrawing = false; });
    if (clearInternalSigBtn) clearInternalSigBtn.addEventListener('click', clearInternalCanvas);

    // ─── OUTGOING RENDER ─────────────────────────────────────
    function renderOutgoingTable() {
        const tbody = document.getElementById('outgoingTableBody');
        if (!tbody) return;
        let filtered = [];
        if (currentRole === 'admin' || currentRole === 'director' || currentRole === 'head_office') {
            filtered = outgoingLetters;
        } else if (currentRole === 'dept_manager') {
            filtered = outgoingLetters.filter(l => l.sender === currentUser || l.sender.includes('Manager'));
        } else if (currentRole === 'records_officer') {
            filtered = outgoingLetters;
        } else if (currentRole === 'staff') {
            filtered = outgoingLetters.filter(l => l.sender === currentUser);
        } else {
            filtered = [];
        }

        tbody.innerHTML = filtered.map(l => {
            const isManager = (currentRole === 'dept_manager' || currentRole === 'admin' || currentRole ===
                'head_office');
            const isPending = l.status === 'pending_approval';
            const isApproved = l.status === 'approved';
            const isDispatched = l.status === 'dispatched';
            let actions = '';
            if (isPending && isManager) {
                actions +=
                    `<button onclick="openReviewOutModal('${l.ref}')" class="text-xs bg-emerald-50 dark:bg-emerald-950 hover:bg-emerald-100 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 px-2 py-1 rounded-lg transition flex items-center gap-1 font-medium"><i class="fas fa-signature"></i> Review</button>`;
            }
            if (isApproved && (currentRole === 'records_officer' || currentRole === 'admin' || currentRole ===
                    'head_office')) {
                actions +=
                    `<button onclick="dispatchOutgoing('${l.ref}')" class="text-xs bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 px-2 py-1 rounded-lg transition flex items-center gap-1"><i class="fas fa-paper-plane"></i> Dispatch</button>`;
            }
            if (!isDispatched && (l.sender === currentUser || currentRole === 'admin' || currentRole ===
                    'records_officer' || currentRole === 'head_office')) {
                actions +=
                    `<button onclick="editOutgoing('${l.ref}')" class="text-xs bg-amber-50 dark:bg-amber-950 hover:bg-amber-100 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800 px-2 py-1 rounded-lg transition flex items-center gap-1"><i class="fas fa-edit"></i> Edit</button>`;
            }
            return `
                        <tr>
                            <td class="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">${l.ref}</td>
                            <td class="font-semibold text-gray-800 dark:text-gray-100">${l.title}</td>
                            <td class="dark:text-gray-200">${l.sender}</td>
                            <td><div class="font-medium text-xs text-gray-800 dark:text-gray-200">${l.receiver}</div><div class="text-[0.7rem] text-blue-600 dark:text-blue-400">${l.receiverEmail || 'N/A'}</div></td>
                            <td><span class="status-pill ${l.status}">${l.status}</span></td>
                            <td class="dark:text-gray-300">${l.date}</td>
                            <td><div class="qrcode-preview cursor-pointer hover:opacity-80 p-1 border rounded-lg bg-white inline-block shadow-sm" onclick="showOutgoingDetails('${l.ref}')"><div id="qr-out-table-${l.ref.replace(/[\/-]/g, '')}"></div></div></td>
                            <td><div class="flex items-center gap-1 flex-wrap">${actions}</div></td>
                        </tr>
                    `;
        }).join('');

        filtered.forEach(l => {
            generateQR(l.ref, `qr-out-table-${l.ref.replace(/[\/-]/g, '')}`, 45);
        });
        document.getElementById('outgoingCount').textContent = `Showing ${filtered.length} entries`;
    }

    // ─── OUTGOING FUNCTIONS ────────────────────────────────
    function resetOutgoingForm() {
        outRef.value = generateOutRef();
        outDate.value = new Date().toISOString().split('T')[0];
        outTitle.value = '';
        outDesc.value = '';
        outSender.value = currentUser;
        outReceiver.value = '';
        outReceiverEmail.value = '';
        outClassification.value = 'General';
        outDropZoneContent.style.display = 'block';
        outFilePreview.style.display = 'none';
        outUploadStatus.textContent = '';
        document.getElementById('editOutRef').value = '';
    }

    window.openOutgoingModal = function(editRef = null) {
        if (editRef) {
            const item = outgoingLetters.find(l => l.ref === editRef);
            if (!item) return;
            document.getElementById('editOutRef').value = editRef;
            outRef.value = item.ref;
            outDate.value = item.date;
            outTitle.value = item.title;
            outDesc.value = item.description;
            outSender.value = item.sender;
            outReceiver.value = item.receiver;
            outReceiverEmail.value = item.receiverEmail || '';
            outClassification.value = item.classification || 'General';
            outDropZoneContent.style.display = 'block';
            outFilePreview.style.display = 'none';
            outUploadStatus.textContent = '';
            document.getElementById('outgoingModalTitle').innerHTML =
                `<i class="fas fa-edit text-amber-600 mr-2"></i>Edit Outgoing Letter`;
        } else {
            resetOutgoingForm();
            document.getElementById('outgoingModalTitle').innerHTML =
                `<i class="fas fa-paper-plane text-blue-600 mr-2"></i>Create Outgoing Letter`;
        }
        outgoingModal.classList.add('active');
    };

    window.editOutgoing = function(ref) { openOutgoingModal(ref); };

    window.openReviewOutModal = function(ref) {
        const item = outgoingLetters.find(l => l.ref === ref);
        if (!item) return;
        reviewOutTargetRef.value = ref;
        reviewOutRef.textContent = item.ref;
        reviewOutTitle.textContent = item.title;
        reviewOutSender.textContent = item.sender;
        reviewOutReceiver.textContent = item.receiver;
        reviewOutDesc.textContent = item.description || 'No description.';
        managerReviewDesc.value = item.managerRemark || '';
        clearOutCanvas();
        reviewOutModal.classList.add('active');
        setTimeout(initOutCanvas, 150);
    };

    window.dispatchOutgoing = function(ref) {
        const item = outgoingLetters.find(l => l.ref === ref);
        if (!item) return;
        if (item.status !== 'approved') { showToast('Cannot Dispatch', 'Letter must be approved first.',
                'error'); return; }
        item.status = 'dispatched';
        logAudit(currentUser, 'Outgoing Letter Dispatched', `Ref: ${ref}`);
        renderOutgoingTable();
        renderDashboard(currentRole);
        showToast('Dispatched', `Outgoing letter ${ref} has been dispatched.`);
    };

    // ─── CANVAS: OUTGOING SIGNATURE ─────────────────────────
    let ctxOut = sigOutCanvas.getContext('2d');
    let isOutDrawing = false;

    function initOutCanvas() {
        sigOutCanvas.width = sigOutCanvas.offsetWidth || 500;
        sigOutCanvas.height = 120;
        ctxOut.strokeStyle = '#0a1e3a';
        ctxOut.lineWidth = 2.5;
        ctxOut.lineCap = 'round';
    }

    function clearOutCanvas() { ctxOut.clearRect(0, 0, sigOutCanvas.width, sigOutCanvas.height); }
    sigOutCanvas.addEventListener('mousedown', e => { isOutDrawing = true;
        ctxOut.beginPath();
        ctxOut.moveTo(e.offsetX, e.offsetY); });
    sigOutCanvas.addEventListener('mousemove', e => { if (isOutDrawing) { ctxOut.lineTo(e.offsetX, e.offsetY);
            ctxOut.stroke(); } });
    sigOutCanvas.addEventListener('mouseup', () => { isOutDrawing = false; });
    if (clearOutSigBtn) clearOutSigBtn.addEventListener('click', clearOutCanvas);

    function processOutReview(status) {
        const ref = reviewOutTargetRef.value;
        const idx = outgoingLetters.findIndex(l => l.ref === ref);
        if (idx !== -1) {
            outgoingLetters[idx].status = status;
            outgoingLetters[idx].managerRemark = managerReviewDesc.value.trim();
            if (status === 'approved') {
                outgoingLetters[idx].digitalSignature = sigOutCanvas.toDataURL();
                outgoingLetters[idx].signedBy = currentUser;
                outgoingLetters[idx].signedDate = new Date().toISOString();
            } else {
                outgoingLetters[idx].digitalSignature = '';
                outgoingLetters[idx].signedBy = null;
                outgoingLetters[idx].signedDate = null;
            }
        }
        reviewOutModal.classList.remove('active');
        logAudit(currentUser, `Outgoing Letter ${status.toUpperCase()}`, `Ref: ${ref}`);
        showToast(`Outgoing ${status.toUpperCase()}`, `Reference ${ref} status updated.`);
        renderOutgoingTable();
        renderDashboard(currentRole);
    }

    approveOutBtn.addEventListener('click', () => {
        if (!managerReviewDesc.value.trim()) { showToast('Missing Remark', 'Please add a remark.',
            'error'); return; }
        const sigData = sigOutCanvas.toDataURL();
        if (sigData === 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==' ||
            sigData === 'data:image/png;base64,') {
            showToast('Signature Required', 'Please draw your digital signature.', 'error');
            return;
        }
        processOutReview('approved');
    });
    rejectOutBtn.addEventListener('click', () => {
        if (!managerReviewDesc.value.trim()) { showToast('Missing Remark', 'Please add a remark.',
            'error'); return; }
        processOutReview('rejected');
    });

    closeReviewOutModalBtn.addEventListener('click', () => reviewOutModal.classList.remove('active'));
    cancelReviewOutBtn.addEventListener('click', () => reviewOutModal.classList.remove('active'));

    closeQrDetailOutModalBtn.addEventListener('click', () => qrDetailOutModal.classList.remove('active'));
    closeQrOutDetailBtn.addEventListener('click', () => qrDetailOutModal.classList.remove('active'));

    // ─── INCOMING EDIT / FILE UPLOAD ────────────────────────
    window.editLetter = function(ref) {
        const item = incomingLetters.find(l => l.ref === ref);
        if (!item) return;
        editingRef = ref;
        modalTitle.innerHTML = `<i class="fas fa-edit text-amber-600 mr-2"></i>Edit Letter Details`;
        refNumber.value = item.ref;
        senderUniqueNum.value = item.senderUniqueNum;
        letterTitle.value = item.title;
        letterDesc.value = item.desc;
        senderName.value = item.sender;
        receiverSelect.value = item.receiver;
        letterDate.value = item.date;
        if (item.fileName) {
            dropZoneContent.style.display = 'none';
            filePreview.style.display = 'flex';
            filePreview.innerHTML =
                `<i class="fas fa-file-pdf text-red-500 text-2xl"></i><span class="file-name">${item.fileName}</span><span class="text-xs text-gray-400">(attached)</span>`;
            uploadStatus.textContent = 'File already attached. You can replace it.';
        } else {
            dropZoneContent.style.display = 'block';
            filePreview.style.display = 'none';
            uploadStatus.textContent = '';
        }
        modal.classList.add('active');
    };

    let uploadedFileData = null;
    let uploadedFileName = '';

    function handleFileSelection(file) {
        uploadedFileName = file.name;
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadedFileData = e.target.result;
            dropZoneContent.style.display = 'none';
            filePreview.style.display = 'flex';
            filePreview.innerHTML =
                `<i class="fas fa-file-pdf text-red-500 text-2xl"></i><span class="file-name">${file.name}</span><span class="text-xs text-gray-400">(${(file.size / 1024).toFixed(1)} KB)</span><button type="button" id="removeFileBtn" class="text-xs text-red-500 hover:text-red-700 ml-2"><i class="fas fa-times"></i></button>`;
            uploadStatus.textContent = "Document attached!";
            document.getElementById('removeFileBtn')?.addEventListener('click', function() {
                uploadedFileData = null;
                uploadedFileName = '';
                dropZoneContent.style.display = 'block';
                filePreview.style.display = 'none';
                uploadStatus.textContent = '';
            });
        };
        reader.readAsDataURL(file);
    }

    dropZone.addEventListener('click', () => fileInput.click());
    dropZone.addEventListener('dragover', (e) => { e.preventDefault();
        dropZone.classList.add('dragover'); });
    dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
    dropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        dropZone.classList.remove('dragover');
        if (e.dataTransfer.files.length) handleFileSelection(e.dataTransfer.files[0]);
    });
    fileInput.addEventListener('change', () => {
        if (fileInput.files.length) handleFileSelection(fileInput.files[0]);
    });

    // ─── INCOMING FORM SUBMIT ────────────────────────────────
    incomingForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const selectedUserObj = userDatabase.find(u => u.name === receiverSelect.value);
        const rEmail = selectedUserObj ? selectedUserObj.email : '';

        if (editingRef) {
            const index = incomingLetters.findIndex(l => l.ref === editingRef);
            if (index !== -1) {
                incomingLetters[index] = {
                    ...incomingLetters[index],
                    senderUniqueNum: senderUniqueNum.value.trim(),
                    title: letterTitle.value.trim(),
                    sender: senderName.value.trim(),
                    receiver: receiverSelect.value,
                    receiverEmail: rEmail,
                    date: letterDate.value,
                    desc: letterDesc.value.trim(),
                    fileName: uploadedFileName || incomingLetters[index].fileName || '',
                    fileData: uploadedFileData || incomingLetters[index].fileData || null
                };
            }
            logAudit(currentUser, 'Incoming Letter Updated', `Ref: ${editingRef}`);
            showToast('Letter Updated', `Reference ${editingRef} updated.`);

            apiFetch(`/incoming/${editingRef}`, {
                method: 'PUT',
                body: JSON.stringify({
                    senderUniqueNum: senderUniqueNum.value.trim(),
                    title: letterTitle.value.trim(),
                    description: letterDesc.value.trim(),
                    sender: senderName.value.trim(),
                    receiver: receiverSelect.value,
                    receiverEmail: rEmail,
                    date: letterDate.value
                })
            });
        } else {
            const newLetterPayload = {
                title: letterTitle.value.trim(),
                description: letterDesc.value.trim(),
                sender: senderName.value.trim(),
                senderName: currentUser,
                senderUniqueNum: senderUniqueNum.value.trim(),
                receiver: receiverSelect.value,
                receiverEmail: rEmail,
                date: letterDate.value,
                fileName: uploadedFileName || '',
                filePath: ''
            };

            const created = await apiFetch('/incoming', {
                method: 'POST',
                body: JSON.stringify(newLetterPayload)
            });

            const newRef = created && created.ref ? created.ref : refNumber.value;

            incomingLetters.unshift({
                ref: newRef,
                senderUniqueNum: senderUniqueNum.value.trim(),
                title: letterTitle.value.trim(),
                sender: senderName.value.trim(),
                senderName: currentUser,
                receiver: receiverSelect.value,
                receiverEmail: rEmail,
                status: 'pending',
                date: letterDate.value,
                desc: letterDesc.value.trim(),
                receiverRemark: '',
                digitalSignature: '',
                fileName: uploadedFileName || '',
                fileData: uploadedFileData || null
            });
            logAudit(currentUser, 'Incoming Letter Created', `Ref: ${newRef} | To: ${receiverSelect.value}`);
            showToast('Letter Registered', `Reference ${newRef} sent to ${receiverSelect.value}.`);
        }
        modal.classList.remove('active');
        renderIncomingTable();
        renderDashboard(currentRole);
        uploadedFileData = null;
        uploadedFileName = '';
    });

    openModalBtn.addEventListener('click', () => {
        editingRef = null;
        uploadedFileData = null;
        uploadedFileName = '';
        modalTitle.innerHTML = `<i class="fas fa-file-import text-blue-600 mr-2"></i>Register Incoming Letter`;
        refNumber.value = generateRef();
        senderUniqueNum.value = '';
        letterTitle.value = '';
        letterDesc.value = '';
        senderName.value = currentUser;
        dropZoneContent.style.display = 'block';
        filePreview.style.display = 'none';
        uploadStatus.textContent = '';
        modal.classList.add('active');
    });
    closeModalBtn.addEventListener('click', () => modal.classList.remove('active'));
    cancelModalBtn.addEventListener('click', () => modal.classList.remove('active'));

    // ─── OUTGOING FORM SUBMIT ──────────────────────────────
    outgoingForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const editRef = document.getElementById('editOutRef').value;

        const payload = {
            title: outTitle.value.trim(),
            description: outDesc.value.trim(),
            sender: outSender.value,
            receiver: outReceiver.value.trim(),
            receiverEmail: outReceiverEmail.value.trim(),
            classification: outClassification.value,
            date: outDate.value,
            fileName: outUploadedFileName || '',
            filePath: ''
        };

        let newRef = outRef.value;
        if (!editRef) {
            const created = await apiFetch('/outgoing', {
                method: 'POST',
                body: JSON.stringify(payload)
            });
            if (created && created.ref) newRef = created.ref;
        }

        const newOut = {
            ref: newRef,
            title: outTitle.value.trim(),
            sender: outSender.value,
            receiver: outReceiver.value.trim(),
            receiverEmail: outReceiverEmail.value.trim(),
            date: outDate.value,
            status: 'pending_approval',
            description: outDesc.value.trim(),
            classification: outClassification.value,
            managerRemark: '',
            digitalSignature: '',
            fileName: outUploadedFileName || ''
        };

        if (editRef) {
            const idx = outgoingLetters.findIndex(l => l.ref === editRef);
            if (idx !== -1) {
                outgoingLetters[idx] = { ...outgoingLetters[idx], ...newOut };
                outgoingLetters[idx].ref = editRef;
            }
            logAudit(currentUser, 'Outgoing Letter Updated', `Ref: ${editRef}`);
            showToast('Outgoing Letter Updated', `Reference ${editRef} updated.`);
        } else {
            outgoingLetters.unshift(newOut);
            logAudit(currentUser, 'Outgoing Letter Created', `Ref: ${newRef}`);
            showToast('Outgoing Letter Created', `Reference ${newRef} submitted for approval.`);
        }
        outgoingModal.classList.remove('active');
        renderOutgoingTable();
        renderDashboard(currentRole);
    });

    openOutgoingModalBtn.addEventListener('click', () => openOutgoingModal(null));
    closeOutgoingModalBtn.addEventListener('click', () => outgoingModal.classList.remove('active'));
    cancelOutModalBtn.addEventListener('click', () => outgoingModal.classList.remove('active'));

    // Outgoing file upload
    let outUploadedFileName = '';
    outDropZone.addEventListener('click', () => outFileInput.click());
    outDropZone.addEventListener('dragover', (e) => { e.preventDefault();
        outDropZone.classList.add('dragover'); });
    outDropZone.addEventListener('dragleave', () => outDropZone.classList.remove('dragover'));
    outDropZone.addEventListener('drop', (e) => {
        e.preventDefault();
        outDropZone.classList.remove('dragover');
        if (e.dataTransfer.files.length) {
            const f = e.dataTransfer.files[0];
            outUploadedFileName = f.name;
            outDropZoneContent.style.display = 'none';
            outFilePreview.style.display = 'flex';
            outFilePreview.innerHTML =
                `<i class="fas fa-file-pdf text-red-500 text-2xl"></i><span class="file-name">${f.name}</span><span class="text-xs text-gray-400">(${(f.size / 1024).toFixed(1)} KB)</span>`;
            outUploadStatus.textContent = "Document attached!";
        }
    });
    outFileInput.addEventListener('change', () => {
        if (outFileInput.files.length) {
            const f = outFileInput.files[0];
            outUploadedFileName = f.name;
            outDropZoneContent.style.display = 'none';
            outFilePreview.style.display = 'flex';
            outFilePreview.innerHTML =
                `<i class="fas fa-file-pdf text-red-500 text-2xl"></i><span class="file-name">${f.name}</span><span class="text-xs text-gray-400">(${(f.size / 1024).toFixed(1)} KB)</span>`;
            outUploadStatus.textContent = "Document attached!";
        }
    });

    // ─── USER MANAGEMENT ────────────────────────────────────
    function renderUserAccounts() {
        if (!userAccountsGrid) return;
        userAccountsGrid.innerHTML = userDatabase.map(u => {
            const roleTitle = ROLE_CONFIGS[u.role]?.title || u.role;
            const isSelf = u.name === currentUser;
            const isAdmin = u.role === 'admin';
            const canDelete = currentRole === 'admin' && !isSelf && !isAdmin;
            const avatarHTML = getAvatarHTML(u.name, '36px');
            return `
                        <div class="user-account-card" data-username="${u.name}">
                            ${avatarHTML}
                            <div class="ua-info">
                                <div class="ua-name">${u.name}</div>
                                <div class="ua-role">${roleTitle} · ${u.dept}</div>
                                <div class="ua-email">${u.email}</div>
                            </div>
                            <div class="ua-pw">${u.password}</div>
                            ${canDelete ? `<button class="ua-delete-btn" onclick="deleteUser('${u.name}')" title="Delete user"><i class="fas fa-trash-alt"></i></button>` : ''}
                            ${isSelf ? `<span class="text-xs text-blue-500 font-semibold ml-1">(You)</span>` : ''}
                            ${isAdmin && !isSelf ? `<span class="text-xs text-amber-500 font-semibold ml-1">(System)</span>` : ''}
                        </div>
                    `;
        }).join('');
        if (userCountDisplay) userCountDisplay.textContent = `Total: ${userDatabase.length} users`;
    }

    window.deleteUser = function(username) {
        if (currentRole !== 'admin') { showToast('Permission Denied', 'Only administrators can delete users.',
                'error'); return; }
        const user = userDatabase.find(u => u.name === username);
        if (!user) { showToast('User Not Found', `User "${username}" does not exist.`, 'error'); return; }
        if (user.role === 'admin') { showToast('Cannot Delete', 'System admin cannot be deleted.', 'error');
            return; }
        if (user.name === currentUser) { showToast('Cannot Delete Self', 'You cannot delete your own account.',
                'error'); return; }
        if (confirm(`Are you sure you want to delete user "${username}"?`)) {
            userDatabase = userDatabase.filter(u => u.name !== username);
            populateReceivers();
            renderUserAccounts();
            renderDashboard(currentRole);
            logAudit(currentUser, 'User Deleted', `Deleted user: ${username}`);
            showToast('User Deleted', `User "${username}" has been removed.`);
        }
    };

    // ─── ADD USER ────────────────────────────────────────────
    openAddUserModalBtn.addEventListener('click', () => {
        newUserFullName.value = '';
        newUserEmail.value = '';
        newUserRole.value = 'records_officer';
        newUserPassword.value = '';
        newUserDept.value = '';
        addUserModal.classList.add('active');
    });
    closeAddUserModalBtn.addEventListener('click', () => addUserModal.classList.remove('active'));
    cancelAddUserBtn.addEventListener('click', () => addUserModal.classList.remove('active'));

    addUserForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const fullName = newUserFullName.value.trim();
        const email = newUserEmail.value.trim();
        const role = newUserRole.value;
        const password = newUserPassword.value.trim();
        const dept = newUserDept.value.trim();
        if (!fullName || !email || !password || !dept) { showToast('Missing Fields',
                'Please fill in all fields.', 'error'); return; }
        if (getUserByEmail(email)) { showToast('Email Exists', `User with email "${email}" already exists.`,
                'error'); return; }
        if (userDatabase.find(u => u.name === fullName)) { showToast('Name Exists',
                `User with name "${fullName}" already exists.`, 'error'); return; }

        await apiFetch('/auth/users', {
            method: 'POST',
            body: JSON.stringify({
                name: fullName,
                email: email,
                role: role,
                password: password,
                department: dept
            })
        });

        userDatabase.push({ name: fullName, role: role, password: password, email: email, dept: dept,
            photo: null });
        populateReceivers();
        renderUserAccounts();
        renderDashboard(currentRole);
        addUserModal.classList.remove('active');
        logAudit(currentUser, 'User Created', `Created user: ${fullName} (${role})`);
        showToast('User Created', `User "${fullName}" has been added.`);
    });

    // ─── PROFILE ─────────────────────────────────────────────
    function renderProfile() {
        if (!profileContent) return;
        const user = userDatabase.find(u => u.name === currentUser);
        if (!user) return;
        const roleTitle = ROLE_CONFIGS[user.role]?.title || user.role;
        const photoHTML = user.photo ? `<img src="${user.photo}" alt="${user.name}" />` : user.name.charAt(0)
            .toUpperCase();

        profileContent.innerHTML = `
                    <div class="profile-photo-upload">
                        <div class="profile-avatar-large" id="profileAvatarPreview">${photoHTML}</div>
                        <div class="mt-2">
                            <label class="upload-btn" for="profilePhotoInput"><i class="fas fa-camera"></i> Change Profile Photo</label>
                            <input type="file" id="profilePhotoInput" accept="image/*" style="display:none;" />
                            <button class="upload-btn ml-2" id="removePhotoBtn" style="background:#fee2e2;color:#991b1b;"><i class="fas fa-times"></i> Remove</button>
                        </div>
                        <p class="text-xs text-gray-400 mt-2">Upload a JPG, PNG or GIF image.</p>
                    </div>
                    <div class="profile-info-grid">
                        <div class="profile-info-item"><div class="label">Full Name</div><div class="value">${user.name}</div></div>
                        <div class="profile-info-item"><div class="label">Username</div><div class="value">${user.name.replace(/\s/g, '').toLowerCase()}</div></div>
                        <div class="profile-info-item"><div class="label">Email</div><div class="value">${user.email}</div></div>
                        <div class="profile-info-item"><div class="label">Role</div><div class="value">${roleTitle}</div></div>
                        <div class="profile-info-item"><div class="label">Department</div><div class="value">${user.dept}</div></div>
                        <div class="profile-info-item"><div class="label">Password</div><div class="value" style="font-family:monospace;">${'•'.repeat(user.password.length)}</div></div>
                    </div>
                `;

        const photoInput = document.getElementById('profilePhotoInput');
        if (photoInput) {
            photoInput.addEventListener('change', function(e) {
                if (this.files && this.files[0]) {
                    const reader = new FileReader();
                    reader.onload = function(ev) {
                        const dataUrl = ev.target.result;
                        updateUserPhoto(currentUser, dataUrl);
                        renderUserAvatar(currentUser);
                        renderProfile();
                        renderUserAccounts();
                        renderDashboard(currentRole);
                        logAudit(currentUser, 'Profile Photo Updated', '');
                        showToast('Profile Photo Updated', 'Your profile photo has been changed.');
                    };
                    reader.readAsDataURL(this.files[0]);
                }
            });
        }
        const removeBtn = document.getElementById('removePhotoBtn');
        if (removeBtn) {
            removeBtn.addEventListener('click', function() {
                if (confirm('Remove your profile photo?')) {
                    updateUserPhoto(currentUser, null);
                    renderUserAvatar(currentUser);
                    renderProfile();
                    renderUserAccounts();
                    renderDashboard(currentRole);
                    logAudit(currentUser, 'Profile Photo Removed', '');
                    showToast('Photo Removed', 'Your profile photo has been removed.');
                }
            });
        }
    }

    // ─── AUDIT TRAIL ─────────────────────────────────────────
    function renderAuditTable() {
        if (!auditLogContainer) return;
        if (auditLogs.length === 0) {
            auditLogContainer.innerHTML =
                `<p class="text-sm text-gray-400 dark:text-gray-500">No audit logs available yet.</p>`;
            auditCount.textContent = 'Showing 0 entries';
            return;
        }
        auditLogContainer.innerHTML = auditLogs.map(log => `
                    <div class="audit-entry flex flex-wrap items-center gap-2 py-2 border-b dark:border-slate-700">
                        <span class="audit-time">${log.timestamp}</span>
                        <span class="audit-user font-medium text-gray-800 dark:text-gray-200">${log.user}</span>
                        <span class="text-xs text-gray-500 dark:text-gray-400">(${log.role})</span>
                        <span class="audit-action text-blue-600 dark:text-blue-400">${log.action}</span>
                        <span class="audit-details text-gray-600 dark:text-gray-400">${log.details || ''}</span>
                    </div>
                `).join('');
        auditCount.textContent = `Showing ${auditLogs.length} entries`;
    }

    // ─── REPORTS ─────────────────────────────────────────────
    window.generateReport = function(type) {
        const preview = document.getElementById('reportPreview');
        let html = '';
        if (type === 'daily') {
            const today = new Date().toISOString().slice(0, 10);
            const daily = incomingLetters.filter(l => l.date === today);
            const outDaily = outgoingLetters.filter(l => l.date === today);
            const intDaily = internalMemos.filter(l => l.date === today);
            html = `<div class="font-bold text-blue-600 mb-2">📋 Daily Register - ${today}</div>`;
            html += `<div class="stat-line"><span>Total Records</span><span>${daily.length + outDaily.length + intDaily.length}</span></div>`;
            html += `<div class="stat-line"><span>Incoming</span><span>${daily.length}</span></div>`;
            html += `<div class="stat-line"><span>Outgoing</span><span>${outDaily.length}</span></div>`;
            html += `<div class="stat-line"><span>Internal</span><span>${intDaily.length}</span></div>`;
        } else if (type === 'monthly') {
            const month = new Date().getMonth() + 1;
            const year = new Date().getFullYear();
            const prefix = `${year}-${String(month).padStart(2,'0')}`;
            const monthly = incomingLetters.filter(l => l.date.startsWith(prefix));
            const outMonthly = outgoingLetters.filter(l => l.date.startsWith(prefix));
            const intMonthly = internalMemos.filter(l => l.date.startsWith(prefix));
            html = `<div class="font-bold text-blue-600 mb-2">📊 Monthly Summary - ${month}/${year}</div>`;
            html += `<div class="stat-line"><span>Total</span><span>${monthly.length + outMonthly.length + intMonthly.length}</span></div>`;
            html += `<div class="stat-line"><span>Incoming</span><span>${monthly.length}</span></div>`;
            html += `<div class="stat-line"><span>Outgoing</span><span>${outMonthly.length}</span></div>`;
            html += `<div class="stat-line"><span>Internal</span><span>${intMonthly.length}</span></div>`;
        } else if (type === 'compliance') {
            html = `<div class="font-bold text-blue-600 mb-2">✅ Compliance Report - ISO 15489 / MoReq2</div>`;
            html += `<div class="stat-line"><span>ISO 15489</span><span class="text-emerald-600">✅ Compliant</span></div>`;
            html += `<div class="stat-line"><span>MoReq2</span><span class="text-emerald-600">✅ Compliant</span></div>`;
            html += `<div class="stat-line"><span>DoD 5015.2-STD</span><span class="text-emerald-600">✅ Compliant</span></div>`;
            html += `<div class="stat-line"><span>Audit Trail Records</span><span>${auditLogs.length}</span></div>`;
            html += `<div class="stat-line"><span>Total Records Managed</span><span>${incomingLetters.length + outgoingLetters.length + internalMemos.length}</span></div>`;
        } else if (type === 'workflow') {
            const pending = incomingLetters.filter(l => l.status === 'pending' || l.status === 'pending_approval')
                .length +
                outgoingLetters.filter(l => l.status === 'pending_approval').length +
                internalMemos.filter(l => l.status === 'pending').length;
            const total = incomingLetters.length + outgoingLetters.length + internalMemos.length;
            html = `<div class="font-bold text-blue-600 mb-2">⚡ Workflow Performance</div>`;
            html += `<div class="stat-line"><span>Total Workflows</span><span>${total}</span></div>`;
            html += `<div class="stat-line"><span>Pending Approval</span><span class="text-amber-600">${pending}</span></div>`;
            html += `<div class="stat-line"><span>Approved</span><span class="text-emerald-600">${total - pending}</span></div>`;
            html += `<div class="stat-line"><span>Avg. Steps per Record</span><span>${total > 0 ? (total / 5).toFixed(1) : 0}</span></div>`;
        }
        preview.innerHTML = html;
        showToast(`Report generated: ${type}`, 'Report ready.', 'success');
    };

    // ─── ADVANCED SEARCH ─────────────────────────────────────
    searchForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const ref = document.getElementById('searchRef').value.trim().toLowerCase();
        const title = document.getElementById('searchTitle').value.trim().toLowerCase();
        const sender = document.getElementById('searchSender').value.trim().toLowerCase();
        const receiver = document.getElementById('searchReceiver').value.trim().toLowerCase();
        const status = document.getElementById('searchStatus').value;
        const type = document.getElementById('searchType').value;
        const dateFrom = document.getElementById('searchDateFrom').value;
        const dateTo = document.getElementById('searchDateTo').value;

        let results = [];

        if (type === 'all' || type === 'incoming') {
            incomingLetters.forEach(l => {
                let match = true;
                if (ref && !l.ref.toLowerCase().includes(ref)) match = false;
                if (title && !l.title.toLowerCase().includes(title)) match = false;
                if (sender && !l.sender.toLowerCase().includes(sender)) match = false;
                if (receiver && !l.receiver.toLowerCase().includes(receiver)) match = false;
                if (status && l.status !== status) match = false;
                if (dateFrom && l.date < dateFrom) match = false;
                if (dateTo && l.date > dateTo) match = false;
                if (match) results.push({ ...l, docType: 'Incoming Letter' });
            });
        }
        if (type === 'all' || type === 'outgoing') {
            outgoingLetters.forEach(l => {
                let match = true;
                if (ref && !l.ref.toLowerCase().includes(ref)) match = false;
                if (title && !l.title.toLowerCase().includes(title)) match = false;
                if (sender && !l.sender.toLowerCase().includes(sender)) match = false;
                if (receiver && !l.receiver.toLowerCase().includes(receiver)) match = false;
                if (status && l.status !== status) match = false;
                if (dateFrom && l.date < dateFrom) match = false;
                if (dateTo && l.date > dateTo) match = false;
                if (match) results.push({ ...l, docType: 'Outgoing Letter' });
            });
        }
        if (type === 'all' || type === 'internal') {
            internalMemos.forEach(l => {
                let match = true;
                if (ref && !l.ref.toLowerCase().includes(ref)) match = false;
                if (title && !l.title.toLowerCase().includes(title)) match = false;
                if (sender && !l.sender.toLowerCase().includes(sender)) match = false;
                if (receiver && !l.receiver.toLowerCase().includes(receiver)) match = false;
                if (status && l.status !== status) match = false;
                if (dateFrom && l.date < dateFrom) match = false;
                if (dateTo && l.date > dateTo) match = false;
                if (match) results.push({ ...l, docType: 'Internal Memo' });
            });
        }

        if (results.length === 0) {
            searchResultsContainer.innerHTML =
                `<p class="text-sm text-gray-500 dark:text-gray-400">No results found matching your criteria.</p>`;
            return;
        }

        searchResultsContainer.innerHTML = `
                    <div class="table-wrap mt-2">
                        <table>
                            <thead><tr><th>Type</th><th>Ref #</th><th>Title</th><th>Sender</th><th>Receiver</th><th>Status</th><th>Date</th><th>Actions</th></tr></thead>
                            <tbody>
                                ${results.map(l => `
                                    <tr class="result-item">
                                        <td><span class="text-xs font-medium text-gray-500">${l.docType}</span></td>
                                        <td class="font-mono text-xs font-bold text-blue-600 dark:text-blue-400">${l.ref}</td>
                                        <td class="font-semibold text-gray-800 dark:text-gray-100">${l.title}</td>
                                        <td class="dark:text-gray-200">${l.sender}</td>
                                        <td class="dark:text-gray-200">${l.receiver}</td>
                                        <td><span class="status-pill ${l.status}">${l.status}</span></td>
                                        <td class="dark:text-gray-300">${l.date}</td>
                                        <td><button onclick="viewSearchResult('${l.ref}')" class="text-xs bg-blue-50 dark:bg-blue-950 hover:bg-blue-100 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800 px-2 py-1 rounded-lg transition flex items-center gap-1"><i class="fas fa-eye"></i> View</button></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                    <p class="text-xs text-gray-400 mt-2">Found ${results.length} result(s)</p>
                `;
    });

    window.viewSearchResult = function(ref) {
        let item = incomingLetters.find(l => l.ref === ref);
        if (item) { viewIncomingLetter(ref); return; }
        item = outgoingLetters.find(l => l.ref === ref);
        if (item) { showOutgoingDetails(ref); return; }
        item = internalMemos.find(l => l.ref === ref);
        if (item) { viewInternalMemo(ref); return; }
        showToast('Not Found', 'The requested document could not be found.', 'error');
    };

    clearSearchBtn.addEventListener('click', function() {
        searchForm.reset();
        searchResultsContainer.innerHTML =
            `<p class="text-sm text-gray-400">Enter search criteria and click Search.</p>`;
    });

    // ─── ROLE-BASED UI ──────────────────────────────────────
    function updateUIBasedOnRole(role) {
        const navLinks = document.querySelectorAll('#sidebarNav .nav-link[data-page]');
        navLinks.forEach(link => {
            const rolesAttr = link.getAttribute('data-roles');
            if (rolesAttr) {
                const allowedRoles = rolesAttr.split(',');
                if (allowedRoles.includes(role)) {
                    link.classList.remove('hidden-nav');
                } else {
                    link.classList.add('hidden-nav');
                }
            }
        });

        const incomingBtn = document.getElementById('openRegisterModalBtn');
        const outgoingBtn = document.getElementById('openOutgoingModalBtn');
        const internalBtn = document.getElementById('openInternalModalBtn');

        if (role === 'records_officer' || role === 'admin' || role === 'head_office') {
            incomingBtn.classList.remove('hidden');
        } else {
            incomingBtn.classList.add('hidden');
        }

        if (role === 'staff' || role === 'records_officer' || role === 'admin' || role === 'head_office') {
            outgoingBtn.classList.remove('hidden');
        } else {
            outgoingBtn.classList.add('hidden');
        }

        if (role === 'staff' || role === 'records_officer' || role === 'admin' || role === 'dept_manager' ||
            role === 'head_office') {
            internalBtn.classList.remove('hidden');
        } else {
            internalBtn.classList.add('hidden');
        }

        const adminLinks = document.querySelectorAll(
            '#sidebarNav .nav-link[data-page="users"], #sidebarNav .nav-link[data-page="audit"]');
        adminLinks.forEach(link => {
            if (role === 'admin' || role === 'director') {
                link.classList.remove('hidden-nav');
            } else {
                link.classList.add('hidden-nav');
            }
        });
    }

    // ─── NAVIGATION ──────────────────────────────────────────
    const navLinks = document.querySelectorAll('#sidebarNav .nav-link[data-page]');
    const pageSections = document.querySelectorAll('.page-section');

    window.switchPage = function(pageId) {
        navLinks.forEach(link => {
            if (link.getAttribute('data-page') === pageId) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        pageSections.forEach(section => {
            if (section.id === `page-${pageId}`) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
        const titleMap = {
            'dashboard': 'Dashboard',
            'incoming': 'Incoming Records',
            'outgoing': 'Outgoing Records',
            'internal': 'Internal Memos',
            'records': 'Records Repository',
            'workflow': 'Workflow',
            'archive': 'Archive Management',
            'search': 'Search Records',
            'reports': 'Reports',
            'users': 'User Management',
            'audit': 'Audit Trail',
            'settings': 'Settings'
        };
        pageTitle.textContent = titleMap[pageId] || pageId;
        if (pageId === 'settings') renderProfile();
        if (pageId === 'audit') renderAuditTable();
        if (pageId === 'dashboard') renderDashboard(currentRole);
        sidebar.classList.remove('open');
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.getAttribute('data-page');
            if (page) window.switchPage(page);
        });
    });

    menuToggle.addEventListener('click', () => sidebar.classList.toggle('open'));

    // ─── INIT ──────────────────────────────────────────────────
    document.addEventListener('DOMContentLoaded', () => {
        logAudit('System', 'System Started', 'Application initialized.');
        logAudit('Admin', 'User Management', 'Default users loaded.');
        letterDate.value = new Date().toISOString().split('T')[0];
        populateReceivers();
        resetOutgoingForm();
        resetInternalForm();
        renderUserAccounts();
        renderProfile();
        renderAuditTable();
        for (let i = 0; i < internalReceiverSelect.options.length; i++) {
            if (internalReceiverSelect.options[i].value !== currentUser) {
                internalReceiverSelect.selectedIndex = i;
                break;
            }
        }
        updateInternalReceiverEmailBadge();
        applyTranslations();
        userQuickSelect.value = 'head_office';
        document.getElementById('passwordHint').innerHTML =
            `<i class="fas fa-info-circle mr-1"></i>Hint: <strong>head123</strong>`;
    });

    window.switchPage = switchPage;
    window.openModal = openModal;
    window.closeModal = closeModal;
    window.openOutgoingModal = openOutgoingModal;

    function openModal(id) {
        document.getElementById(id).classList.add('active');
    }
    window.openModal = openModal;

    function closeModal(id) {
        document.getElementById(id).classList.remove('active');
    }
    window.closeModal = closeModal;

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal-overlay.active').forEach(m => m.classList.remove('active'));
        }
    });

    console.log('📚 ILARMS v2.0.0 loaded successfully.');
    console.log('💡 Demo users: head_office / head123, harar_branch / harar123, admin / admin123');
    console.log('🌍 Languages: English, Amharic, Oromic');
    console.log('✍️ Inline Digital Signature: Sign directly in the letter view!');

})();