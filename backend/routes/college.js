const fs = require("fs");

// Load college data
const collegeData = JSON.parse(
    fs.readFileSync("./data/college.json", "utf8")
);

function handleCollege(question) {

    question = question.toLowerCase();

    if (
        question.includes("sjcit") ||
        question.includes("about sjcit") ||
        question.includes("tell me about sjcit") ||
        question.includes("college") ||
        question.includes("about college") ||
        question.includes("institution")
    ) {

        const college = collegeData.college;

        return {

            reply:
`🏫 ${college.full_name}

📅 Established
${college.established}

🏛️ Institution Type
${college.type}

🏢 Managed By
${college.managed_by}

👑 Chairman
${college.chairman}

👨‍🏫 Principal

Name : ${college.principal.name}

Designation : ${college.principal.designation}

Qualification : ${college.principal.qualification}

📧 Email : ${college.principal.email}

📱 Mobile : ${college.principal.mobile}

🎓 Affiliated To
${college.affiliated_to}

✅ Approved By
${college.approved_by.map(item => "• " + item).join("\n")}

🏆 Accreditations
${college.accreditation.map(item => "• " + item).join("\n")}

📍 Location

${college.location.address}

🌐 Website: <a href="${college.website}" target="_blank">${college.website}</a>

☎ Phone:
${college.phone}

📧 Email:${college.email}

📝 About SJCIT

${college.about}
🎯 Vision
${college.vision}
🎯 Mission
${college.mission.map(item => "• " + item).join("\n")}
⭐ Core Values
${college.core_values.map(item => "• " + item).join("\n")}

📊 College Statistics

👨‍🎓 Students : ${college.statistics.students}
👨‍🏫 Faculty : ${college.statistics.faculty}
👥 Staff : ${college.statistics.staff}
🎓 Alumni : ${college.statistics.alumni}
📚 Doctorates : ${college.statistics.doctorates}
🔬 Research Scholars : ${college.statistics.research_scholars}
💡 Funded Projects : ${college.statistics.funded_projects}
🏆 Years of Excellence : ${college.statistics.years_of_excellence}
💼 Placement Highlights (2023)
🏆 Highest Package : ${college.placements["2023"].highest_package}
📈 Median Package : ${college.placements["2023"].median_package}
🏢 Companies Visited : ${college.placements["2023"].companies_visited}
📄 Job Offers : ${college.placements["2023"].job_offers}

🏫 Departments

${college.departments.map(item => "• " + item).join("\n")}
🏢 Campus Facilities

${college.campus_facilities.map(item => "✔ " + item).join("\n")}
`,

            image: college.image,

            map: "https://maps.google.com/?q=SJC+Institute+of+Technology+Chikkaballapur"

        };

    }

    return null;
}

module.exports = { handleCollege };