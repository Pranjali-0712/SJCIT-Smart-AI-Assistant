
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const { handleDepartment } = require("./routes/department");
const { handleHostel } = require("./routes/hostel");
const { translateReply } = require("./routes/translate");
const { handleCollege } = require("./routes/college");
const { handleAdmission } = require("./routes/admission");



const app = express();

app.use(cors());
app.use(express.json());



// Load SJCIT data
let sjcitData = {};

try {
  sjcitData = JSON.parse(
    fs.readFileSync("./data/sjcit.json", "utf8")
  );

  console.log("SJCIT data loaded ✅");

} catch (err) {
  console.log("Could not load sjcit.json ❌");
}


// Home route
app.get("/", (req, res) => {
  res.send("SJCIT AI Backend is Running ✅");
});


// Chat API
app.post("/chat", async (req, res) => {

  try {
const { message, language = "en" } = req.body;
    const question = message.toLowerCase();
    console.log("Question received:", question);
    const admissionResponse = handleAdmission(question);

if (admissionResponse) {

    admissionResponse.reply = await translateReply(
        admissionResponse.reply,
        language
    );

    return res.json(admissionResponse);

}
    // ================= DEPARTMENT =================
const departmentResponse = handleDepartment(question);

if (departmentResponse) {

    departmentResponse.reply = await translateReply(
        departmentResponse.reply,
        language
    );

    return res.json(departmentResponse);

}

// hostel
// Hostel
const hostelResponse = handleHostel(question);

if (hostelResponse) {

    hostelResponse.reply = await translateReply(
        hostelResponse.reply,
        language
    );

    return res.json(hostelResponse);
}
const collegeResponse = handleCollege(question);

if (collegeResponse) {

    collegeResponse.reply = await translateReply(
        collegeResponse.reply,
        language
    );

    return res.json(collegeResponse);
}
    // Location
if (
    question.includes("location") ||
    question.includes("where is sjcit") ||
    question.includes("where is the college") ||
    question.includes("college location") ||
    question.includes("map")
) {

 let reply = `📍 SJC Institute of Technology

Location:
${sjcitData.college.location}

🌐 Website:
${sjcitData.college.website}

Click the button below to open Google Maps.`;

reply = await translateReply(reply, language);

return res.json({
    reply,
    image: "images/campus.jpg",
    map: "https://maps.google.com/?q=SJC+Institute+of+Technology+Chikkaballapur"
});
}
   


// Admission
// Admission
if (
    question.trim() === "admission" ||
    question.trim() === "admission information" ||
    question.trim() === "admission details"
) {

  let reply = `🎓 Admission Information

📌 Admission Modes
${sjcitData.admission.modes.map(m => "• " + m).join("\n")}

🏫 College Codes
KCET : ${sjcitData.admission.codes.KCET}
COMED-K : ${sjcitData.admission.codes.COMEDK}

📄 Required Documents
${sjcitData.admission.documents.map(d => "• " + d).join("\n")}

☎ Admission Contact
${sjcitData.admission.contacts.map(c => "• " + c).join("\n")}`;

reply = await translateReply(reply, language);

return res.json({ reply });

}

// Library
// Library
if(question.includes("library")){

   let reply = `📚 ${sjcitData.library.name}

${sjcitData.library.description}

Facilities

${sjcitData.library.facilities.map(f => "• " + f).join("\n")}`;

reply = await translateReply(reply, language);

return res.json({
    reply,
    image: "images/library.jpg"
});

}
// Courses / Departments
if (
    question.includes("course") ||
    question.includes("courses") ||
    question.includes("department")
) {

    let reply = `📚 Courses Offered

${sjcitData.departments.map(d => "• " + d).join("\n")}`;

reply = await translateReply(reply, language);

return res.json({
    reply,
    image: "images/campus.jpg"
});

}



// Placement
// Placement
if (
    question.includes("placement") ||
    question.includes("company") ||
    question.includes("companies") ||
    question.includes("recruiter") ||
    question.includes("recruiters") ||
    question.includes("job") ||
    question.includes("package")
) {

   let reply = `💼 Training & Placement

🏆 Highest Package
${sjcitData.placement.highest_package}
📊 Median Package
${sjcitData.placement.median_package}
🏢 Companies Visited
${sjcitData.placement.companies_visited}
📄 Job Offers
${sjcitData.placement.job_offers}

⭐ Top Recruiters
${sjcitData.placement.companies.map(c=>"• "+c).join("\n")}

🎯 Placement Training
${sjcitData.placement.training.map(t=>"• "+t).join("\n")}`;

reply = await translateReply(reply, language);

return res.json({ reply });
}
// Transport
// Transport
if(
    question.includes("transport") ||
    question.includes("bus")
){

   let reply = `🚌 Transport

${sjcitData.transport.details}

Facilities

${sjcitData.transport.features.map(f=>"• "+f).join("\n")}`;

reply = await translateReply(reply, language);

return res.json({ reply });

}
if(
    question.includes("highlight") ||
    question.includes("why sjcit")
){

   let reply = `⭐ SJCIT Highlights

${sjcitData.highlights.map(h=>"• "+h).join("\n")}`;

reply = await translateReply(reply, language);

return res.json({
    reply,
    image: "images/campus.jpg"
});

}if(
    question.includes("facility") ||
    question.includes("facilities")
){

   let reply = `🏫 Campus Facilities

${sjcitData.facilities.map(f=>"• "+f).join("\n")}`;

reply = await translateReply(reply, language);

return res.json({
    reply,
    image: "images/campus.jpg"
});
}if(
    question.includes("statistics") ||
    question.includes("student") ||
    question.includes("faculty")
){

   let reply = `📊 SJCIT Statistics

👨‍🎓 Students
${sjcitData.statistics.students}

👨‍🏫 Faculty
${sjcitData.statistics.faculty}

👥 Staff
${sjcitData.statistics.staff}

🎓 Alumni
${sjcitData.statistics.alumni}

📚 Doctorates
${sjcitData.statistics.doctorates}

🔬 Research Scholars
${sjcitData.statistics.research_scholars}

💡 Funded Projects
${sjcitData.statistics.funded_projects}

🏫 Years of Excellence
${sjcitData.statistics.years_of_excellence}`;

reply = await translateReply(reply, language);

return res.json({ reply });

}
// Contact
if (
    question.includes("contact") ||
    question.includes("phone") ||
    question.includes("email")
) {
   let reply = `☎ Contact Information

📞 Phone: ${sjcitData.contact.phone}

📧 Email: ${sjcitData.contact.email}

🌐 Website: ${sjcitData.contact.website}

📍 Address:
${sjcitData.contact.address}`;

reply = await translateReply(reply, language);

return res.json({ reply });
}
// ===============================
// Frequently Asked Questions
// ===============================

const faq = sjcitData.faq;

for (const key in faq) {

    if (question.includes(key)) {

       let reply = `❓ ${faq[key].title}

${faq[key].answer}`;

reply = await translateReply(reply, language);

return res.json({ reply });

    }

}
// If no matching information is found
let reply = `❓ Sorry, I couldn't find information about that.

I can help you with:

🎓 Admissions
💼 Placements
🏠 Hostel
📚 Library
🏫 Departments
📖 Courses
🚌 Transport
📞 Contact
📍 Campus Location
⭐ Facilities

Please ask a question related to SJC Institute of Technology.`;

reply = await translateReply(reply, language);

return res.json({ reply });



  } catch (error) {

    console.log("\n========== GEMINI ERROR ==========");

    console.log(error);

    console.log("==================================\n");

    res.status(500).json({
      reply: error.message
    });

  }

});


// Server start
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

  console.log(
    `🚀 Server running at http://localhost:${PORT}`
  );

});