const { translate } = require("@vitalets/google-translate-api");

async function translateReply(text, language) {

    // No translation needed for English
    if (!language || language === "en") {
        return text;
    }

    try {

        const result = await translate(text, {
            to: language
        });

        return result.text;

    } catch (error) {

        console.log("Translation Error:", error);

        return text;

    }

}

module.exports = { translateReply };