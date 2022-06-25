var langs = {
    en: {
        step1Title: "Real People Naked Video 1 on 1 Chat",
        step1Paragraph: "Obey your orders to do anything",
        step2Paragraph: "Immediately release the deep desire",
    },
    ar: {
        step1Title: "Real People Naked Video 1 on 1 Chat",
        step1Paragraph: "Obey your orders to do anything",
        step2Paragraph: "Immediately release the deep desire",
    },
    tr: {
        step1Title: "Gerçek Kişiler Çıplak Video 1'e 1 Sohbet",
        step1Paragraph: "Herhangi bir şey yapmak için emirlerine uyun",
        step2Paragraph: "Derhal derin arzuyu serbest bırakın",
    },
    uk: {
        step1Title: "Real People Naked Video 1 on 1 Chat",
        step1Paragraph: "Obey your orders to do anything",
        step2Paragraph: "Immediately release the deep desire",
    },
    ru: {
        step1Title: "Обнаженное видео реальных людей 1 на 1 в чате",
        step1Paragraph: "Подчиняйтесь вашим приказам делать что-либо",
        step2Paragraph: "Немедленно отпустите глубокое желание",
    },
    ro: {
        step1Title: "Oameni reali Naked Video 1 on 1 Chat",
        step1Paragraph: "Ascultă-ți ordinele de a face orice",
        step2Paragraph: "Eliberați imediat dorința profundă",
    },
    zh: {
        step1Title: "真人裸体视频 1 对 1 聊天",
        step1Paragraph: "听从你的命令做任何事",
        step2Paragraph: "立即释放内心深处的渴望",

    },
    pl: {
        step1Title: "Prawdziwi ludzie Nagie wideo 1 na 1 Czat",
        step1Paragraph: "Słuchaj swoich rozkazów, aby zrobić wszystko",
        step2Paragraph: "Natychmiast uwolnij głębokie pragnienie",
    },
    it: {
        step1Title: "Video nudi di persone reali 1 su 1 Chat",
        step1Paragraph: "Obbedisci ai tuoi ordini di fare qualsiasi cosa",
        step2Paragraph: "Rilascia immediatamente il desiderio profondo",
    },
    fr: {
        step1Title: "Vraies personnes nues vidéo 1 sur 1 chat",
        step1Paragraph: "Obéissez à vos ordres de faire n'importe quoi",
        step2Paragraph: "Libérez immédiatement le désir profond",
    },
    es: {
        step1Title: "Video desnudo de personas reales 1 en 1 chat",
        step1Paragraph: "Obedece tus órdenes de hacer cualquier cosa.",
        step2Paragraph: "Suelta inmediatamente el profundo deseo.",
    },
    de: {
        step1Title: "Echte Menschen Nacktvideo 1 zu 1 Chat",
        step1Paragraph: "Befolgen Sie Ihre Befehle, alles zu tun",
        step2Paragraph: "Lassen Sie sofort das tiefe Verlangen los",
    },
    id: {
        step1Title: "Orang Nyata Telanjang Video 1 lawan 1 Obrolan",
        step1Paragraph: "Patuhi perintahmu untuk melakukan apapun",
        step2Paragraph: "Segera lepaskan keinginan yang dalam",
    },
};

$(document).ready(function () {
    var langBrowser = navigator.language || (navigator.languages && navigator.languages[0]),
        param = langs[langBrowser];
    if (param == undefined && langBrowser && langBrowser.length > 0) {
        var parsedLang = langBrowser.slice(0, 2);
        if (langs[parsedLang]) {
            param = langs[parsedLang];
        }
    }
    if (param == undefined) {
        param = langs["en"];
        // 'en' - default language, if you want change language, please select in object abbreviation. Example: 'fr', 'ru' etc.
        $(".step-1 .step__body h1").text(param.step1Title);
        $(".step-1 .step__body p").text(param.step1Paragraph);

        $(".step-2 .step__body p").text(param.step2Paragraph);

    } else {
        $(".step-1 .step__body h1").text(param.step1Title);
        $(".step-1 .step__body p").text(param.step1Paragraph);

        $(".step-2 .step__body p").text(param.step2Paragraph);

    }

    $(".next").on("click", function (e) {
        e.preventDefault();
        $(this).closest(".step").hide().next().show();
        $(".scale").animate({
            width: "+=20%"
        });
        $(".bg__item.active").removeClass("active").next().fadeIn().addClass("active");
    });
});