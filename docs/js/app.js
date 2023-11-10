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
    const adittionalDB_namespaceObject = JSON.parse('{"generalProvisions":{"general":{"title":"Общие положения","subtitle":["1. Дорога и Пешеходы","2. Правило правой руки","3. Светофоры и Знаки","4. Скорость и Дистанция","5. Алкоголь и Наркотики","6. Сотовые телефоны","7. Другие Участники Движения"],"img":["./img/theory/generalProvisions/1/1.jpg","./img/theory/generalProvisions/1/2.jpg","./img/theory/generalProvisions/1/3.jpg","./img/theory/generalProvisions/1/4.jpg","./img/theory/generalProvisions/1/5.jpg","./img/theory/generalProvisions/1/6.jpg","./img/theory/generalProvisions/1/7.jpg"],"text":[["Дорога - это не просто полоса асфальта. Это место, где каждый участник движения должен соблюдать правила и уважать друг друга.","Пешеходы - наши самые уязвимые участники. Помни, что они всегда имеют преимущество на пешеходных переходах."],["В большинстве стран движение на дороге праворульное. Это означает, что при пересечении других транспортных средств, уступай дорогу тем, кто едет справа."],["Подчиняйтесь светофорам и дорожным знакам. Они указывают, когда можно двигаться и когда нужно остановиться."],["Соблюдай разумную скорость и безопасное расстояние между автомобилями. Это позволяет избежать аварий."],["Никогда не управляй транспортным средством, находясь под воздействием алкоголя или наркотиков. Это опасно и незаконно."],["Перед использованием сотового телефона остановись в безопасном месте. Внимание на дороге — твоя первоочередная задача."],["Помни, что на дороге есть много разных участников, включая велосипедистов, мотоциклистов и пешеходов. Уважай их права и будь осторожен."]]},"generalTwo":{"title":"Общие обязанности водителей","subtitle":["1. Сосредоточенность и Безотвлекаемость","2. Скоростной Режим","3. Передача Приоритета","4. Наличие документов","5. Уступать Пешеходам"],"img":["./img/theory/generalProvisions/2/1.jpg",null,"./img/theory/generalProvisions/2/2.jpg","./img/theory/generalProvisions/2/3.jpg","./img/theory/generalProvisions/2/4.jpg"],"text":[["Внимание на дороге - главное правило. Избегайте отвлекающих действий, таких как разговоры по телефону."],["Уважайте ограничения скорости. Не превышайте их, чтобы обеспечить безопасность всех на дороге."],["Правильно уступайте дорогу согласно правилам. Помните о приоритетах."],["Водитель транспортного средства обязан иметь при себе удостоверение и по требованию сотрудников полиции передавать им, для проверки."],["Пешеходы всегда имеют преимущество на пешеходных переходах. Уступайте дорогу им."],["Перед использованием сотового телефона остановись в безопасном месте. Внимание на дороге — твоя первоочередная задача."],["Помни, что на дороге есть много разных участников, включая велосипедистов, мотоциклистов и пешеходов. Уважай их права и будь осторожен."]]},"generalThree":{"title":"Применение специальных сигналов","subtitle":["1. Специальные сигналы","2. Сирена и Мигающие Маячки","3. Уступите Дорогу","4. Будьте Осторожны"],"img":["./img/theory/generalProvisions/3/1.jpg","./img/theory/generalProvisions/3/2.jpg","./img/theory/generalProvisions/3/3.jpg","./img/theory/generalProvisions/3/4.jpg"],"text":[["Специальные сигналы - это средство, которое используется служебными и аварийными транспортными средствами для обозначения их приоритета на дороге."],["Специальные сигналы обычно включают сирену и мигающие маячки. Это предупреждает других участников движения о неотложности их задачи."],["Когда вы видите служебное аварийное транспортное средство с включенными специальными сигналами, вы должны уступить дорогу и пропустить его."],["Водители должны быть особенно осторожными, когда видят транспортное средство с включенными специальными сигналами. Это может быть связано с неотложной медицинской помощью, пожаром или другой аварией. Важно помнить, что специальные сигналы используются для обеспечения безопасности и сохранения жизней. Уступайте дорогу и будьте осторожными, когда видите транспортное средство с включенными специальными сигналами на дороге."]]}},"roadSigns":{"priority":{"title":"Знаки приоритета","subtitle":["1. Знак \\"Уступите дорогу\\"","2. Знак \\"Главная дорога\\"","3. Знак \\"Пешеходный переход\\"","4. Знак \\"Велосипедисты\\"","5. Знак \\"Железнодорожный переезд\\"","6. Знак \\"Однопроходная дорога\\"","7. Знак \\"Конец полосы\\"","8. Знак \\"Пересечение с трамвайными путями\\"","9. Знак \\"Преимущество встречного движения\\"","10. Знак \\"Двустороннее движение\\""],"img":["./img/theory/roadSigns/1/1.jpg","./img/theory/roadSigns/1/2.jpg","./img/theory/roadSigns/1/3.jpg","./img/theory/roadSigns/1/4.jpg","./img/theory/roadSigns/1/5.jpg","./img/theory/roadSigns/1/6.jpg","./img/theory/roadSigns/1/7.jpg","./img/theory/roadSigns/1/8.jpg","./img/theory/roadSigns/1/9.jpg","./img/theory/roadSigns/1/10.jpg"],"text":[["Знак \\"Уступите дорогу\\" указывает, что вы должны уступить дорогу другим участникам движения."],["Знак \\"Главная дорога\\" показывает, что вы находитесь на главной дороге и имеете приоритет перед въезжающими с боковых дорог."],["Знак \\"Пешеходный переход\\" указывает на место, где пешеходы имеют приоритет при пересечении дороги."],["Знак \\"Велосипедисты\\" предупреждает о наличии велосипедной дорожки и обязывает уступить дорогу велосипедистам."],["Знак \\"Железнодорожный переезд\\" указывает на приближение к железнодорожным путям и обязывает уступить дорогу поездам."],["Знак \\"Однопроходная дорога\\" указывает, что дорога однопроходная, и вы должны уступить дорогу встречным транспортным средствам."],["Знак \\"Конец полосы\\" указывает на конец участка средней полосы и переход во владение встречного направления."],["Знак \\"Пересечение с трамвайными путями\\" предупреждает о наличии трамвайных путей и обязывает уступить дорогу трамваям."],["Знак \\"Преимущество встречного движения\\" указывает на приоритет движения водителей по встречной полосе и обязывает уступить дорогу встречному движению."],["Знак \\"Двустороннее движение\\" показывает, что дорога двусторонняя и участники движения могут двигаться в обоих направлениях."]]},"forbidding":{"title":"Запрещающие знаки","subtitle":["1. Сосредоточенность и Безотвлекаемость","2. Скоростной Режим","3. Передача Приоритета","4. Наличие документов","5. Уступать Пешеходам"],"img":["./img/theory/roadSigns/2/1.jpg","./img/theory/roadSigns/2/2.jpg","./img/theory/roadSigns/2/3.jpg","./img/theory/roadSigns/2/4.jpg","./img/theory/roadSigns/2/5.jpg","./img/theory/roadSigns/2/6.jpg","./img/theory/roadSigns/2/7.jpg","./img/theory/roadSigns/2/8.jpg","./img/theory/roadSigns/2/9.jpg","./img/theory/roadSigns/2/10.jpg"],"text":[["Внимание на дороге - главное правило. Избегайте отвлекающих действий, таких как разговоры по телефону."],["Уважайте ограничения скорости. Не превышайте их, чтобы обеспечить безопасность всех на дороге."],["Правильно уступайте дорогу согласно правилам. Помните о приоритетах."],["Водитель транспортного средства обязан иметь при себе удостоверение и по требованию сотрудников полиции передавать им, для проверки."],["Пешеходы всегда имеют преимущество на пешеходных переходах. Уступайте дорогу им."],["Перед использованием сотового телефона остановись в безопасном месте. Внимание на дороге — твоя первоочередная задача."],["Помни, что на дороге есть много разных участников, включая велосипедистов, мотоциклистов и пешеходов. Уважай их права и будь осторожен."]]},"prescriptive":{"title":"Предписывающие знаки","subtitle":["1. Знак \\"Двигаться прямо\\"","2. Знак \\"Поворот направо\\"","3. Знак \\"Поворот налево\\"","4. Знак \\"Двигаться в обратном направлении\\"","5. Знак \\"Объезд препятствия справа\\""],"img":["./img/theory/roadSigns/3/1.jpg","./img/theory/roadSigns/3/2.jpg","./img/theory/roadSigns/3/3.jpg","./img/theory/roadSigns/3/4.jpg","./img/theory/roadSigns/3/5.jpg","./img/theory/roadSigns/3/6.jpg"],"text":[["Знак с изображением стрелки, указывающей вперед, предписывает двигаться прямо, не поворачивая."],["Знак с изображением стрелки, указывающей направо, предписывает совершить правый поворот."],["Знак с изображением стрелки, указывающей налево, предписывает совершить левый поворот."],["Знак с изображением двух стрелок, указывающих в разные стороны, предписывает двигаться в обратном направлении."],["Знак указывает, что объезд различного рода препятствий на проезжей части разрешается со стороны, указанной стрелкой."],["Знак указывает, что движение организовано по кругу в направлении стрелок."]]}}}');
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
    class Car {
        constructor(intersectionCenter, path, x, y, deg) {
            this.path = path;
            this.carHtml = document.createElement("div");
            this.carImg = document.createElement("img");
            this.count = document.createElement("span");
            this.carImg.src = this.path;
            this.carHtml.appendChild(this.carImg);
            this.carHtml.appendChild(this.count);
            this.count.classList.add("count");
            this.carHtml.classList.add("car");
            this.carHtml.style.left = x + "px";
            this.carHtml.style.top = y + "px";
            this.carImg.style.rotate = deg + "deg";
            document.querySelector(".intersection").appendChild(this.carHtml);
            this.intersectionCenter = window.getComputedStyle(intersectionCenter);
            this.left = this.intersectionCenter.getPropertyValue("left");
            this.top = this.intersectionCenter.getPropertyValue("top");
            this.clickCarHtml();
        }
        move() {
            let style = window.getComputedStyle(this.carHtml);
            let carHtmlX = style.getPropertyValue("left");
            let carHtmlY = style.getPropertyValue("top");
            if (carHtmlX <= this.left) {
                console.log(this.left);
                let intersectionCenterX = this.left.substring(0, this.left.length - 2);
                this.top.substring(0, this.top.length - 2);
                carHtmlX = carHtmlX.substring(0, carHtmlX.length - 2);
                carHtmlY = carHtmlY.substring(0, carHtmlY.length - 2);
                let delayedLoop = () => {
                    setTimeout((() => {
                        carHtmlX++;
                        this.carHtml.style.left = carHtmlX + "px";
                        if (carHtmlX < intersectionCenterX) delayedLoop(); else {
                            const rotationAngle = -90;
                            const duration = 1e3;
                            this.smoothRotate(this.carHtml, rotationAngle, duration);
                            setTimeout((() => {
                                delayedLoopY();
                            }), 1e3);
                        }
                    }), 2);
                };
                delayedLoop();
                let delayedLoopY = () => {
                    setTimeout((() => {
                        carHtmlY--;
                        this.carHtml.style.top = carHtmlY + "px";
                        if (carHtmlY > -200) delayedLoopY();
                    }), 2);
                };
            }
            return;
        }
        smoothRotate(element, rotationAngle, duration) {
            let startAngle = 0;
            let startTime = null;
            function animateRotate(timestamp) {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const currentAngle = easeInOutCubic(progress, startAngle, rotationAngle, duration);
                element.style.transform = `rotate(${currentAngle}deg)`;
                if (progress < duration) requestAnimationFrame(animateRotate);
            }
            requestAnimationFrame(animateRotate);
            function easeInOutCubic(t, b, c, d) {
                t /= d / 2;
                if (t < 1) return c / 2 * t * t * t + b;
                t -= 2;
                return c / 2 * (t * t * t + 2) + b;
            }
        }
        clickCarHtml() {
            this.carHtml.addEventListener("click", (() => {
                for (let index = 0; index < window.cars.length; index++) {
                    const element = window.cars[index];
                    if (element == this) return;
                }
                window.cars.push(this);
                this.carHtml.querySelector(".count").innerHTML = window.cars.length;
                if (window.cars.length == 3) window.start();
            }));
        }
    }
    const js_Car = Car;
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
            U.pitch = .85;
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
    window.createTestWindow = () => {
        window.cars = [];
        let intersectionCenter = document.createElement("div");
        intersectionCenter.classList.add("intersectionCenter");
        document.querySelector(".intersection").appendChild(intersectionCenter);
        new js_Car(intersectionCenter, "./img/tests/cars/y-car.png", 100, 200, 90);
        new js_Car(intersectionCenter, "./img/tests/cars/y-car.png", 400, 200, 90);
        new js_Car(intersectionCenter, "./img/tests/cars/y-car.png", 500, 500);
    };
    window.start = () => {
        for (let index = 0; index < window.cars.length; index++) setTimeout((() => {
            const element = window.cars[index];
            console.log(element);
            element.move();
        }), 1300 * index);
    };
    menuInit();
})();