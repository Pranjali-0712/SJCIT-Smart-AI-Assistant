const fs = require("fs");

// Load hostel data
const hostelData = JSON.parse(
    fs.readFileSync("./data/hostel.json", "utf8")
);

function handleHostel(question) {

    question = question.toLowerCase();

    if (
        question.includes("hostel") ||
        question.includes("boys hostel") ||
        question.includes("girls hostel") ||
        question.includes("hostel facility") ||
        question.includes("hostel facilities") ||
        question.includes("hostel food") ||
        question.includes("hostel rules") ||
        question.includes("hostel room")
    ) {

        const hostel = hostelData.hostel;

        return {

            reply:
`🏠 ${hostel.name}

${hostel.description}

🏢 Hostel Type
${hostel.hostel_type.map(type => "• " + type).join("\n")}

👦 Boys Hostel

📌 Capacity: ${hostel.boys_hostel.capacity}

📍 Location: ${hostel.boys_hostel.location}

🛏️ Room Types
${hostel.boys_hostel.room_types.map(room => "• " + room).join("\n")}

👧 Girls Hostel

📌 Capacity: ${hostel.girls_hostel.capacity}

📍 Location: ${hostel.girls_hostel.location}

🛏️ Room Types
${hostel.girls_hostel.room_types.map(room => "• " + room).join("\n")}

✨ Hostel Facilities
${hostel.facilities.map(item => "✔ " + item).join("\n")}

🍽️ Food Facility

🍴 ${hostel.food.mess}

🥗 ${hostel.food.type}

📋 Daily Meals
${hostel.food.menu.map(meal => "• " + meal).join("\n")}

🔒 Security
${hostel.security.map(item => "✔ " + item).join("\n")}

📚 Study Facilities
${hostel.study.map(item => "✔ " + item).join("\n")}

🏥 Medical Support
${hostel.medical.map(item => "✔ " + item).join("\n")}

⏰ Hostel Timings

🚪 Entry: ${hostel.hostel_timings.entry}

👥 Visitors: ${hostel.hostel_timings.visitors}

📜 Hostel Rules
${hostel.rules.map(rule => "• " + rule).join("\n")}

💡 Hostel accommodation is available for both boys and girls. Room allotment is subject to availability and hostel regulations.`,

            image: "images/girls_hostel.jpg"


        };

    }

    return null;
}

module.exports = { handleHostel };