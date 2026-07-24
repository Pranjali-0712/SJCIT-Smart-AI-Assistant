const fs = require("fs");

// Load department data
const departmentData = JSON.parse(
    fs.readFileSync("./data/department.json", "utf8")
);

// Keywords for each department
const departmentKeywords = {
    cse: [
        "cse",
        "computer science",
        "computer science engineering"
    ],

    ise: [
        "ise",
        "information science",
        "information science engineering"
    ],

    aiml: [
        "aiml",
        "artificial intelligence",
        "machine learning",
        "artificial intelligence and machine learning",
        "ai ml"
    ],

    ece: [
        "ece",
        "electronics",
        "electronics and communication",
        "electronics communication"
    ],


    mechanical: [
        "mechanical",
        "mechanical engineering"
        
    ],

    civil: [
        "civil",
        "civil engineering"
        
    ],

    aeronautical: [
        "aeronautical",
        "aeronautical engineering"
    ],


    mba: [
        "mba",
        "management",
        "management studies"
    ]
};

function handleDepartment(question) {

    question = question.toLowerCase();

   for (const key in departmentKeywords) {

    const keywords = departmentKeywords[key];

    if (keywords.some(word => question.includes(word))) {

        console.log("✅ Matched Department:", key);

        const dept = departmentData[key];

        if (!dept) return null;

        return {

                reply:
`🏫 ${dept.name}

📅 Established
${dept.established}

🎓 Programs Offered
${dept.programs.map(program => "• " + program).join("\n")}

👨‍🏫 Head of Department
${dept.hod}

${dept.designation}

📖 About Department
${dept.about}

🎯 Vision
${dept.vision}

🚀 Mission
${dept.mission.map(item => "• " + item).join("\n")}

🏢 Facilities
${dept.facilities.map(item => "✔ " + item).join("\n")}

💼 Career Opportunities
${dept.career_opportunities.map(item => "• " + item).join("\n")}

🌐 Official Website
https://sjcit.ac.in`

               
            };

        }

    }

    return null;

}

module.exports = { handleDepartment };