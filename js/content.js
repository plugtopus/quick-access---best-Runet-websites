var cjgShortcuts = function() {
    "use strict";

    function e(o) {
        return o.split(/\/u\/\d\//).join("/").split(/\/b\/\d{21}\//).join("/");
    }

    function t(t, n) {
        var a = new window.URL(t),
            c = o(a.host) + e(a.pathname),
            i = [];
        return Object.keys(s).forEach(function(o) {}), i.sort(function(o, e) {
            return s[o].nu < s[e].nu ? 1 : -1;
        }), i;
    }

    function n(o, e) {
        var t = o in s && "u" in s[o];
        if (!t) return null;
        var n = s[o],
            a = e && e.authuser,
            c = a || "0",
            i = e && e.pageId,
            u = i && n.bu;
        if (u) return u.replace("[authuser]", c).replace("[pageid]", i);
        var g = 1 === n.aum || a && (2 === n.aum || "0" !== a);
        return g && n.au && n.au.replace("[authuser]", c) || n.u;
    }
    var s = {
            1: {
                name: "Vkontakte",
                icon: "VK",
                u: "https://vk.com",
            },
            2: {
                name: "Odnoklassniki",
                icon: "Ok",
                u: "http://ok.ru",
            },
            3: {
                name: "Mail.Ru",
                icon: "mailru",
                u: "https://mail.ru/",
            },
            4: {
                name: "Lenta.Ru",
                icon: "lenta",
                u: "https://lenta.ru/",
            },
            5: {
                name: "Московский комсомолец",
                icon: "mk",
                u: "http://www.mk.ru/",
            },
            6: {
                name: "Газета RU",
                icon: "gazeta",
                u: "https://www.gazeta.ru/",
            },
            7: {
                name: "Комсомольская правда",
                icon: "kp",
                u: "https://www.spb.kp.ru/",
            },
            8: {
                name: "Drom RU",
                icon: "drom",
                u: "https://www.drom.ru/",
            },
            9: {
                name: "RT",
                icon: "rt",
                u: "https://russian.rt.com/",
            },
            10: {
                name: "Ответы mail.ru",
                icon: "otvet",
                u: "https://otvet.mail.ru/",
            },
            11: {
                name: "Pikabu",
                icon: "pikabu",
                u: "https://pikabu.ru/",
            },
            12: {
                name: "Woman RU",
                icon: "woman",
                u: "http://www.woman.ru/",
            },
            13: {
                name: "Fishki",
                icon: "fishki1",
                u: "https://fishki.net/",
            },
            14: {
                name: "ЯПЛАКАЛ",
                icon: "yaplakal",
                u: "http://www.yaplakal.com/",
            },
            15: {
                name: "Rutube",
                icon: "rutube",
                u: "https://rutube.ru/",
            },
            16: {
                name: "1 КАНАЛ",
                icon: "1tv",
                u: "https://www.1tv.ru/",
            },
            17: {
                name: "reddit",
                icon: "reddit",
                u: "https://www.reddit.com/",
            },
            19: {
                name: "Pinterest",
                icon: "pinterest",
                u: "https://www.pinterest.com/",
            },
            20: {
                name: "Tumblr",
                icon: "tumblr",
                u: "https://www.tumblr.com/",
            },
            21: {
                name: "YouTube",
                icon: "Youtube",
                u: "https://www.youtube.com/",
            },
            22: {
                name: "Twitter",
                icon: "twitter",
                u: "https://twitter.com",
            },
            23: {
                name: "Twitch",
                icon: "twitch",
                u: "https://twitch.tv",
            },
            24: {
                name: "Instagram",
                icon: "instagram",
                u: "https://instagram.com",
            },
            25: {
                name: "Telegram",
                icon: "telegram",
                u: "https://web.telegram.org/#/im",
            },
            26: {
                name: "Github",
                icon: "github",
                u: "https://github.com",
            },
            27: {
                name: "Google",
                icon: "chrome",
                u: "https://Google.com/search",
            },
            28: {
                name: "aliexpress",
                icon: "aliex",
                u: "https://aliexpress.com",
            },
            29: {
                name: "zaycev.net",
                icon: "zaycev",
                u: "http://zaycev.net/",
            },
            30: {
                name: "4PDA",
                icon: "4pda",
                u: "http://4pda.ru/",
            }
        },
        u = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
        g = ["11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27"];
    return {
        defaultSelection: u,
        mostPopular: g,
        list: s,
        findMatches: t,
        getUrl: n
    };
}();