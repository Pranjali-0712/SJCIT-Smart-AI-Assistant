const fs = require("fs");

// Load SJCIT data
const admissionData = JSON.parse(
    fs.readFileSync("./data/admission.json", "utf8")
);

function handleAdmission(question) {

    question = question.toLowerCase();

    // ===========================
    // B.E Admission
    // ===========================

    if (
        question.includes("be admission") ||
        question.includes("engineering admission") ||
        question.includes("how to join cse") ||
        question.includes("how to join aiml") ||
        question.includes("how to join ece") ||
        question.includes("how to join eee") ||
        question.includes("how to join civil") ||
        question.includes("how to join mechanical") ||
        question.includes("how to get admission") ||
        question.includes("kcet") ||
        question.includes("comedk")
    ) {

        return {

            reply:
`🎓 B.E Admission Process

You can get admission through:

• KCET
• COMEDK UGET
• Management Quota

📚 Eligibility

✔ Pass in 10+2 / PUC or equivalent
✔ Physics and Mathematics are compulsory
✔ One of:
• Chemistry
• Biology
• Biotechnology
• Computer Science
• Electronics

✔ Minimum 45% aggregate
✔ 40% for Karnataka SC/ST/OBC candidates

🏫 College Codes

KCET : E-014
COMEDK : E-108

📞 Admission Contact

+91 9731292555
+91 9880143028`

        };

    }

    // ===========================
    // MBA Admission
    // ===========================

    if (
        question.includes("mba admission") ||
        question.includes("how to join mba")
    ) {

        return {

            reply:
`🎓 MBA Admission

Admission through

• PGCET
• KMAT
• CMAT
• Management Quota

Eligibility

✔ Bachelor's Degree
✔ Minimum 50% marks
✔ 45% for Karnataka SC/ST/Category-I

PGCET Code : B265

📞 Admission Contact

+91 9731292555
+91 9880143028`

        };

    }

    // ===========================
    // M.Tech Admission
    // ===========================

    if (
        question.includes("mtech admission") ||
        question.includes("m.tech admission") ||
        question.includes("how to join mtech")
    ) {

        return {

            reply:
`🎓 M.Tech Admission

Admission through

• Karnataka PGCET
• GATE
• Management Quota

Eligibility

✔ B.E./B.Tech in relevant branch
✔ Minimum 50% aggregate

PGCET Code : T865

📞 Admission Contact

+91 9731292555
+91 9880143028`

        };

    }

    // ===========================
    // Documents
    // ===========================

    if (
        question.includes("documents") ||
        question.includes("required documents")
    ) {

        return {

            reply:
`📄 Documents Required

• KCET / COMEDK Rank Card
• 10th Marks Card
• 12th / PUC Marks Card
• Transfer Certificate
• Migration Certificate (if applicable)
• Study Certificate
• Aadhaar Card Copy
• Passport Size Photographs
• Caste Certificate (if applicable)`

        };

    }

    return null;

}

module.exports = {
    handleAdmission
};