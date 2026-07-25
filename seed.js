const bcrypt = require('bcryptjs');
const { db, initDatabase } = require('./src/config/database');

function seedDatabase() {
    initDatabase();

    // 1. Initial Users
    const users = [
        { name: 'Head Office', role: 'head_office', password: 'head123', email: 'head@nala.gov.et', dept: 'Head Office' },
        { name: 'Branch Officer - Harar', role: 'branch', password: 'harar123', email: 'harar@nala.gov.et', dept: 'Harar Branch' },
        { name: 'Dept Manager', role: 'dept_manager', password: 'manager123', email: 'manager@nala.gov.et', dept: 'Records Management' },
        { name: 'Records Officer', role: 'records_officer', password: 'records123', email: 'records@nala.gov.et', dept: 'Records Office' },
        { name: 'Director General', role: 'director', password: 'director123', email: 'director@nala.gov.et', dept: 'Directorate' },
        { name: 'Admin', role: 'admin', password: 'admin123', email: 'admin@nala.gov.et', dept: 'System Administration' },
        { name: 'Staff Member', role: 'staff', password: 'staff123', email: 'staff@nala.gov.et', dept: 'General Staff' }
    ];

    const insertUser = db.prepare(`
        INSERT OR IGNORE INTO users (name, email, password, role, department)
        VALUES (?, ?, ?, ?, ?)
    `);

    for (const u of users) {
        const hashedPassword = bcrypt.hashSync(u.password, 10);
        insertUser.run(u.name, u.email, hashedPassword, u.role, u.dept);
    }
    console.log(`Seeded ${users.length} users.`);

    // 2. Initial Incoming Letters
    const incomingLetters = [
        {
            ref: 'INC-2025-00568',
            senderUniqueNum: 'MOF/EXP/881',
            title: 'Request for Archive Transfer',
            description: 'Formal request for archive transfer.',
            sender: 'Ministry of Education',
            senderName: 'Ministry of Education',
            receiver: 'Head Office',
            receiverEmail: 'head@nala.gov.et',
            status: 'in-process',
            date: '2026-07-11',
            receiverRemark: '',
            digitalSignature: '',
            signedBy: null,
            signedDate: null,
            fileName: 'archive_request.pdf',
            filePath: null
        },
        {
            ref: 'OUT-2025-00421',
            senderUniqueNum: 'AUD/2026/102',
            title: 'Budget Report Submission',
            description: 'Annual budget report submission.',
            sender: 'Addis City Admin.',
            senderName: 'Addis City Admin.',
            receiver: 'Head Office',
            receiverEmail: 'head@nala.gov.et',
            status: 'pending',
            date: '2026-07-10',
            receiverRemark: '',
            digitalSignature: '',
            signedBy: null,
            signedDate: null,
            fileName: 'budget_report.pdf',
            filePath: null
        },
        {
            ref: 'INC-2025-00567',
            senderUniqueNum: 'CUL/2026/045',
            title: 'Historical Document Handover',
            description: 'Handover of historical documents.',
            sender: 'Ministry of Culture',
            senderName: 'Ministry of Culture',
            receiver: 'Head Office',
            receiverEmail: 'head@nala.gov.et',
            status: 'pending',
            date: '2026-07-10',
            receiverRemark: '',
            digitalSignature: '',
            signedBy: null,
            signedDate: null,
            fileName: 'handover.pdf',
            filePath: null
        },
        {
            ref: 'OUT-2025-00420',
            senderUniqueNum: 'FIN/2026/033',
            title: 'Annual Financial Report',
            description: 'Annual financial report submission.',
            sender: 'Head Office',
            senderName: 'Head Office',
            receiver: 'Ministry of Finance',
            receiverEmail: 'finance@mof.gov.et',
            status: 'approved',
            date: '2026-07-09',
            receiverRemark: 'Approved.',
            digitalSignature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
            signedBy: 'Head Office',
            signedDate: '2026-07-09T10:00:00Z',
            fileName: 'financial_report.pdf',
            filePath: null
        },
        {
            ref: 'INC-2025-00566',
            senderUniqueNum: 'NALA/HR/2026/012',
            title: 'Record Collection',
            description: 'Collection of records from Harar branch.',
            sender: 'NALA Branch - Harar',
            senderName: 'NALA Branch - Harar',
            receiver: 'Head Office',
            receiverEmail: 'head@nala.gov.et',
            status: 'in-process',
            date: '2026-07-09',
            receiverRemark: '',
            digitalSignature: '',
            signedBy: null,
            signedDate: null,
            fileName: 'collection_list.pdf',
            filePath: null
        }
    ];

    const insertIncoming = db.prepare(`
        INSERT OR IGNORE INTO incoming_letters 
        (ref, senderUniqueNum, title, description, sender, senderName, receiver, receiverEmail, status, date, receiverRemark, digitalSignature, signedBy, signedDate, fileName, filePath)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for (const item of incomingLetters) {
        insertIncoming.run(
            item.ref, item.senderUniqueNum, item.title, item.description,
            item.sender, item.senderName, item.receiver, item.receiverEmail,
            item.status, item.date, item.receiverRemark, item.digitalSignature,
            item.signedBy, item.signedDate, item.fileName, item.filePath
        );
    }
    console.log(`Seeded ${incomingLetters.length} incoming letters.`);

    // 3. Initial Outgoing Letters
    const outgoingLetters = [
        {
            ref: 'OUT-2025-00421',
            title: 'Request for Collaboration on Digital Preservation',
            description: 'Proposal for joint digitization.',
            sender: 'Head Office',
            receiver: 'Ministry of Innovation',
            receiverEmail: 'info@innovation.gov.et',
            classification: 'General',
            status: 'pending_approval',
            date: '2026-07-10',
            managerRemark: '',
            digitalSignature: '',
            signedBy: null,
            signedDate: null,
            fileName: 'digitization_proposal.pdf',
            filePath: null
        },
        {
            ref: 'OUT-2025-00422',
            title: 'Feedback on National Library Policy',
            description: 'Detailed feedback on draft policy.',
            sender: 'Dept Manager',
            receiver: 'Policy Commission',
            receiverEmail: 'policy@commission.gov.et',
            classification: 'Confidential',
            status: 'approved',
            date: '2026-07-11',
            managerRemark: 'Approved.',
            digitalSignature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
            signedBy: 'Dept Manager',
            signedDate: '2026-07-11T14:30:00Z',
            fileName: 'policy_feedback.pdf',
            filePath: null
        }
    ];

    const insertOutgoing = db.prepare(`
        INSERT OR IGNORE INTO outgoing_letters
        (ref, title, description, sender, receiver, receiverEmail, classification, status, date, managerRemark, digitalSignature, signedBy, signedDate, fileName, filePath)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for (const item of outgoingLetters) {
        insertOutgoing.run(
            item.ref, item.title, item.description, item.sender,
            item.receiver, item.receiverEmail, item.classification,
            item.status, item.date, item.managerRemark, item.digitalSignature,
            item.signedBy, item.signedDate, item.fileName, item.filePath
        );
    }
    console.log(`Seeded ${outgoingLetters.length} outgoing letters.`);

    // 4. Initial Internal Memos
    const internalMemos = [
        {
            ref: 'INT-2025-001',
            title: 'Meeting Agenda for Records Directorate',
            description: 'Agenda for the upcoming records management review meeting.',
            sender: 'Head Office',
            senderName: 'Head Office',
            receiver: 'Dept Manager',
            receiverEmail: 'manager@nala.gov.et',
            status: 'pending',
            date: '2026-07-12',
            receiverRemark: '',
            digitalSignature: '',
            signedBy: null,
            signedDate: null,
            fileName: 'agenda.docx',
            filePath: null
        },
        {
            ref: 'INT-2025-002',
            title: 'IT Infrastructure Update',
            description: 'Update on the new server deployment.',
            sender: 'Records Officer',
            senderName: 'Records Officer',
            receiver: 'Admin',
            receiverEmail: 'admin@nala.gov.et',
            status: 'approved',
            date: '2026-07-11',
            receiverRemark: 'Thanks for the update. Approved.',
            digitalSignature: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg==',
            signedBy: 'Admin',
            signedDate: '2026-07-11T16:20:00Z',
            fileName: 'it_update.pdf',
            filePath: null
        }
    ];

    const insertInternal = db.prepare(`
        INSERT OR IGNORE INTO internal_memos
        (ref, title, description, sender, senderName, receiver, receiverEmail, status, date, receiverRemark, digitalSignature, signedBy, signedDate, fileName, filePath)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for (const item of internalMemos) {
        insertInternal.run(
            item.ref, item.title, item.description, item.sender,
            item.senderName, item.receiver, item.receiverEmail, item.status,
            item.date, item.receiverRemark, item.digitalSignature,
            item.signedBy, item.signedDate, item.fileName, item.filePath
        );
    }
    console.log(`Seeded ${internalMemos.length} internal memos.`);

    // 5. Initial Audit Logs
    const auditLogs = [
        { timestamp: new Date().toLocaleString(), user: 'Admin', role: 'admin', action: 'System Initialization', details: 'Database initialized and seeded.' },
        { timestamp: new Date().toLocaleString(), user: 'Head Office', role: 'head_office', action: 'Logged In', details: 'User Head Office logged in.' }
    ];

    const insertAudit = db.prepare(`
        INSERT INTO audit_logs (timestamp, user, role, action, details)
        VALUES (?, ?, ?, ?, ?)
    `);

    for (const log of auditLogs) {
        insertAudit.run(log.timestamp, log.user, log.role, log.action, log.details);
    }
    console.log(`Seeded ${auditLogs.length} audit log entries.`);
    console.log('Seeding completed successfully!');
}

if (require.main === module) {
    seedDatabase();
}

module.exports = seedDatabase;
