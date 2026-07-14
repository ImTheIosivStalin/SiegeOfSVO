const languageBtn = document.getElementById("language");

const translations = {

    ru: {

        nav_events: "ОБ ИВЕНТАХ",
        nav_vehicles: "ТЕХНИКА",
        nav_team: "КОМАНДА",
        nav_updates: "ОБНОВЛЕНИЯ",

        hero_description:
            "Создавайте собственное ЧВК и добивайтесь победы, продумывайте тактику и учитесь сражаться."

    },

    en: {

        nav_events: "EVENTS",
        nav_vehicles: "VEHICLES",
        nav_team: "TEAM",
        nav_updates: "UPDATES",

        hero_description:
            "Create your own PMC, achieve victory, develop tactics and master the battlefield."

    }

};

let currentLanguage = localStorage.getItem("language") || "ru";

function applyLanguage(lang){

    document.querySelectorAll("[data-lang]").forEach(element=>{

        const key = element.dataset.lang;

        if(translations[lang][key]){

            element.textContent = translations[lang][key];

        }

    });

    languageBtn.innerHTML =
        lang === "ru"
        ? "🌐 RU"
        : "🌐 EN";

    localStorage.setItem("language",lang);

}

applyLanguage(currentLanguage);

languageBtn.addEventListener("click",()=>{

    currentLanguage =
        currentLanguage==="ru"
        ? "en"
        : "ru";

    applyLanguage(currentLanguage);

});
