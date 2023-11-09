(() => {
    "use strict";
    const modules_flsModules = {};
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let bodyLockStatus = true;
    let bodyLockToggle = (delay = 500) => {
        if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
    };
    let bodyUnlock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            setTimeout((() => {
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = "0px";
                }
                body.style.paddingRight = "0px";
                document.documentElement.classList.remove("lock");
            }), delay);
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    let bodyLock = (delay = 500) => {
        let body = document.querySelector("body");
        if (bodyLockStatus) {
            let lock_padding = document.querySelectorAll("[data-lp]");
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            }
            body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
            document.documentElement.classList.add("lock");
            bodyLockStatus = false;
            setTimeout((function() {
                bodyLockStatus = true;
            }), delay);
        }
    };
    function menuInit() {
        if (document.querySelector(".icon-menu")) document.addEventListener("click", (function(e) {
            if (bodyLockStatus && e.target.closest(".icon-menu")) {
                bodyLockToggle();
                document.documentElement.classList.toggle("menu-open");
            }
        }));
    }
    function functions_FLS(message) {
        setTimeout((() => {
            if (window.FLS) console.log(message);
        }), 0);
    }
    class Adittional {
        constructor(value) {
            this.title = value.title;
            this.subtitle = value.subtitle;
            this.text = value.text;
            this.img = value.img;
            this.structureHTML = new Array;
            this.createHTML();
        }
        createHTML() {
            for (let index = 0; index < this.subtitle.length; index++) {
                this.structureHTML += '<h3 class="element-animation">' + this.subtitle[index] + "</h3>";
                this.structureHTML += '<p class="element-animation">' + this.text[index] + "</p>";
                if (this.img[index] == null) continue;
                if (index + 1 != this.subtitle.length) this.structureHTML += '<img class="element-animation" src="' + this.img[index] + '">'; else this.structureHTML += '<img src="' + this.img[index] + '">';
            }
        }
        content() {
            return {
                title: this.title,
                html: this.structureHTML
            };
        }
    }
    const js_adittional = Adittional;
    const adittionalDB_namespaceObject = JSON.parse('{"generalProvisions":{"general":{"title":"Общие положения","subtitle":["1. Дорога и Пешеходы","2. Правило правой руки","3. Светофоры и Знаки","4. Скорость и Дистанция","5. Алкоголь и Наркотики","6. Сотовые телефоны","7. Другие Участники Движения"],"img":["./img/theory/generalProvisions/1/1.jpg","./img/theory/generalProvisions/1/2.jpg","./img/theory/generalProvisions/1/3.jpg","./img/theory/generalProvisions/1/4.jpg","./img/theory/generalProvisions/1/5.jpg","./img/theory/generalProvisions/1/6.jpg","./img/theory/generalProvisions/1/7.jpg"],"text":[["Дорога - это не просто полоса асфальта. Это место, где каждый участник движения должен соблюдать правила и уважать друг друга.","Пешеходы - наши самые уязвимые участники. Помни, что они всегда имеют преимущество на пешеходных переходах."],["В большинстве стран движение на дороге праворульное. Это означает, что при пересечении других транспортных средств, уступай дорогу тем, кто едет справа."],["Подчиняйтесь светофорам и дорожным знакам. Они указывают, когда можно двигаться и когда нужно остановиться."],["Соблюдай разумную скорость и безопасное расстояние между автомобилями. Это позволяет избежать аварий."],["Никогда не управляй транспортным средством, находясь под воздействием алкоголя или наркотиков. Это опасно и незаконно."],["Перед использованием сотового телефона остановись в безопасном месте. Внимание на дороге — твоя первоочередная задача."],["Помни, что на дороге есть много разных участников, включая велосипедистов, мотоциклистов и пешеходов. Уважай их права и будь осторожен."]]},"generalTwo":{"title":"Общие обязанности водителей","subtitle":["1. Сосредоточенность и Безотвлекаемость","2. Скоростной Режим","3. Передача Приоритета","4. Наличие документов","5. Уступать Пешеходам"],"img":["./img/theory/generalProvisions/2/1.jpg",null,"./img/theory/generalProvisions/2/2.jpg","./img/theory/generalProvisions/2/3.jpg","./img/theory/generalProvisions/2/4.jpg"],"text":[["Внимание на дороге - главное правило. Избегайте отвлекающих действий, таких как разговоры по телефону."],["Уважайте ограничения скорости. Не превышайте их, чтобы обеспечить безопасность всех на дороге."],["Правильно уступайте дорогу согласно правилам. Помните о приоритетах."],["Водитель транспортного средства обязан иметь при себе удостоверение и по требованию сотрудников полиции передавать им, для проверки."],["Пешеходы всегда имеют преимущество на пешеходных переходах. Уступайте дорогу им."],["Перед использованием сотового телефона остановись в безопасном месте. Внимание на дороге — твоя первоочередная задача."],["Помни, что на дороге есть много разных участников, включая велосипедистов, мотоциклистов и пешеходов. Уважай их права и будь осторожен."]]},"generalThree":{"title":"Общие положения","subtitle":["1. Дорога и Пешеходы","2. Правило правой руки","3. Светофоры и Знаки","4. Скорость и Дистанция","5. Алкоголь и Наркотики","6. Сотовые телефоны","7. Другие Участники Движения"],"img":["./img/theory/generalProvisions/1/1.jpg","./img/theory/generalProvisions/1/2.jpg","./img/theory/generalProvisions/1/3.jpg","./img/theory/generalProvisions/1/4.jpg","./img/theory/generalProvisions/1/5.jpg","./img/theory/generalProvisions/1/6.jpg","./img/theory/generalProvisions/1/7.jpg"],"text":[["Дорога - это не просто полоса асфальта. Это место, где каждый участник движения должен соблюдать правила и уважать друг друга.","Пешеходы - наши самые уязвимые участники. Помни, что они всегда имеют преимущество на пешеходных переходах."],["В большинстве стран движение на дороге праворульное. Это означает, что при пересечении других транспортных средств, уступай дорогу тем, кто едет справа."],["Подчиняйтесь светофорам и дорожным знакам. Они указывают, когда можно двигаться и когда нужно остановиться."],["Соблюдай разумную скорость и безопасное расстояние между автомобилями. Это позволяет избежать аварий."],["Никогда не управляй транспортным средством, находясь под воздействием алкоголя или наркотиков. Это опасно и незаконно."],["Перед использованием сотового телефона остановись в безопасном месте. Внимание на дороге — твоя первоочередная задача."],["Помни, что на дороге есть много разных участников, включая велосипедистов, мотоциклистов и пешеходов. Уважай их права и будь осторожен."]]}}}');
    class MousePRLX {
        constructor(props, data = null) {
            let defaultConfig = {
                init: true,
                logging: true
            };
            this.config = Object.assign(defaultConfig, props);
            if (this.config.init) {
                const paralaxMouse = document.querySelectorAll("[data-prlx-mouse]");
                if (paralaxMouse.length) {
                    this.paralaxMouseInit(paralaxMouse);
                    this.setLogging(`Проснулся, слежу за объектами: (${paralaxMouse.length})`);
                } else this.setLogging("Нет ни одного объекта. Сплю...zzZZZzZZz...");
            }
        }
        paralaxMouseInit(paralaxMouse) {
            paralaxMouse.forEach((el => {
                const paralaxMouseWrapper = el.closest("[data-prlx-mouse-wrapper]");
                const paramСoefficientX = el.dataset.prlxCx ? +el.dataset.prlxCx : 100;
                const paramСoefficientY = el.dataset.prlxCy ? +el.dataset.prlxCy : 100;
                const directionX = el.hasAttribute("data-prlx-dxr") ? -1 : 1;
                const directionY = el.hasAttribute("data-prlx-dyr") ? -1 : 1;
                const paramAnimation = el.dataset.prlxA ? +el.dataset.prlxA : 50;
                let positionX = 0, positionY = 0;
                let coordXprocent = 0, coordYprocent = 0;
                setMouseParallaxStyle();
                if (paralaxMouseWrapper) mouseMoveParalax(paralaxMouseWrapper); else mouseMoveParalax();
                function setMouseParallaxStyle() {
                    const distX = coordXprocent - positionX;
                    const distY = coordYprocent - positionY;
                    positionX += distX * paramAnimation / 1e3;
                    positionY += distY * paramAnimation / 1e3;
                    el.style.cssText = `transform: translate3D(${directionX * positionX / (paramСoefficientX / 10)}%,${directionY * positionY / (paramСoefficientY / 10)}%,0);`;
                    requestAnimationFrame(setMouseParallaxStyle);
                }
                function mouseMoveParalax(wrapper = window) {
                    wrapper.addEventListener("mousemove", (function(e) {
                        const offsetTop = el.getBoundingClientRect().top + window.scrollY;
                        if (offsetTop >= window.scrollY || offsetTop + el.offsetHeight >= window.scrollY) {
                            const parallaxWidth = window.innerWidth;
                            const parallaxHeight = window.innerHeight;
                            const coordX = e.clientX - parallaxWidth / 2;
                            const coordY = e.clientY - parallaxHeight / 2;
                            coordXprocent = coordX / parallaxWidth * 100;
                            coordYprocent = coordY / parallaxHeight * 100;
                        }
                    }));
                }
            }));
        }
        setLogging(message) {
            this.config.logging ? functions_FLS(`[PRLX Mouse]: ${message}`) : null;
        }
    }
    modules_flsModules.mousePrlx = new MousePRLX({});
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window["FLS"] = true;
    isWebp();
    document.addEventListener("DOMContentLoaded", (() => {
        side();
        createAdditional("generalProvisions.general");
    }));
    function onEntry(entry) {
        entry.forEach((change => {
            if (change.isIntersecting) change.target.classList.add("element-show");
        }));
    }
    function createAdditional(value) {
        var infs = value.split(".");
        let material = adittionalDB_namespaceObject[infs[0]];
        let adittional = new js_adittional(material[infs[1]]);
        let container = document.querySelector(".theory__container-content");
        let object = adittional.content();
        container.querySelector("h2").innerHTML = object["title"];
        let content = container.querySelector(".theory__content");
        content.innerHTML = object["html"];
        let options = {
            threshold: [ .3 ]
        };
        let observer = new IntersectionObserver(onEntry, options);
        let elements = document.querySelectorAll(".element-animation");
        for (let elm of elements) observer.observe(elm);
        let voices = speechSynthesis.getVoices();
        let defaultVoice;
        speechSynthesis.onvoiceschanged = () => {
            voices = speechSynthesis.getVoices();
            defaultVoice = voices.find((voice => voice.name === "Google русский"));
            document.querySelector("#voice").addEventListener("click", handleClick);
            window.addEventListener("keydown", handleKeydown);
        };
        const PLAY = "play";
        const PAUSE = "pause";
        const RESUME = "resume";
        speechSynthesis.cancel();
        document.querySelector("#voice").className = PLAY;
        let handleClick = ({target}) => {
            target = target.parentNode;
            console.log(target);
            switch (target.className) {
              case PLAY:
                speechSynthesis.cancel();
                const {textContent} = content;
                console.log("asd");
                textContent.split(/[.,]+/).forEach((text => {
                    const trimmed = text.trim();
                    console.log(trimmed);
                    if (trimmed) {
                        const U = getUtterance(target, text);
                        speechSynthesis.speak(U);
                    }
                }));
                break;

              case PAUSE:
                target.className = RESUME;
                speechSynthesis.pause();
                break;

              case RESUME:
                target.className = PAUSE;
                speechSynthesis.resume();
                break;

              default:
                break;
            }
        };
        let handleKeydown = ({code}) => {
            switch (code) {
              case "Escape":
                return speechSynthesis.cancel();

              default:
                break;
            }
        };
        function getUtterance(target, text) {
            const U = new SpeechSynthesisUtterance(text);
            U.voice = defaultVoice;
            U.lang = defaultVoice.lang;
            U.volume = 1;
            U.rate = 1.1;
            U.pitch = 1;
            U.onstart = () => {
                console.log("Started");
                target.className = PAUSE;
            };
            U.onend = () => {
                console.log("Finished");
                target.className = PLAY;
            };
            U.onerror = err => console.error(err);
            return U;
        }
    }
    let side = () => {
        let sidebar = document.querySelector(".sidebar");
        let sidebarIconMenu = document.querySelector(".sidebar-icon");
        let textMenu = sidebar.querySelectorAll(".sidebar__item");
        let icons = sidebar.querySelectorAll(".sidebar__icon");
        icons.forEach((element => {
            let parent = element.parentNode;
            let submenu = parent.querySelector(".sidebar__submenu");
            element.addEventListener("mouseover", (e => {
                sectorOpenHover(e);
                submenu.classList.add("hover");
                document.addEventListener("click", (() => {
                    submenu.classList.remove("hover");
                }));
            }));
        }));
        textMenu.forEach((element => {
            let p = element.querySelector("p");
            let submenu = element.querySelector(".sidebar__submenu");
            let svg = element.querySelector("svg");
            p.addEventListener("click", (e => {
                sectorOpen(submenu, svg);
            }));
            let btns = submenu.querySelectorAll("button");
            btns.forEach((btn => {
                btn.addEventListener("click", (() => {
                    createAdditional(btn.value);
                }));
            }));
        }));
        function sectorOpen(currentSector, svg) {
            if (!currentSector) return;
            textMenu.forEach((s => {
                let close = s.querySelector(".sidebar__submenu");
                if (close != currentSector && close.classList.contains("open")) {
                    s.querySelector("svg").style.rotate = "0deg";
                    close.classList.remove("open");
                }
            }));
            if (currentSector.classList.contains("open")) {
                currentSector.classList.remove("open");
                svg.style.rotate = "0deg";
            } else {
                currentSector.classList.add("open");
                svg.style.rotate = "90deg";
            }
        }
        function sectorOpenHover(currentSector) {
            if (!currentSector) return;
            icons.forEach((s => {
                let submenu = s.parentNode.querySelector(".sidebar__submenu");
                if (submenu.classList.contains("hover")) submenu.classList.remove("hover");
            }));
        }
        let closeAll = () => {
            textMenu.forEach((s => {
                let close = s.querySelector(".sidebar__submenu");
                if (close.classList.contains("open")) {
                    s.querySelector("svg").style.rotate = "0deg";
                    close.classList.remove("open");
                }
            }));
        };
        sidebarIconMenu.addEventListener("click", (() => {
            sidebar.classList.toggle("open");
            const rect = document.querySelectorAll("#rect");
            rect.forEach((element => {
                element.classList.toggle("is-visible");
            }));
            closeAll();
        }));
    };
    menuInit();
})();