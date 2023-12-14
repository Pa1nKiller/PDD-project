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
    class Car {
        constructor(direction = "default", intersectionCenter, path, x, y, deg, id, povorot, all) {
            this.path = path;
            this.carHtml = document.createElement("div");
            this.carImg = document.createElement("img");
            this.count = document.createElement("span");
            this.all = all;
            this.deg = deg;
            this.id = id;
            this.direction = direction;
            this.povorot = povorot;
            this.povorotnik = document.createElement("div");
            this.povorotnik.classList.add("povorotnik");
            this.dublpovorotnik = document.createElement("div");
            this.dublpovorotnik.classList.add("dublpovorotnik");
            if (this.povorot == "right") {
                this.povorotnik.classList.add("right");
                this.dublpovorotnik.classList.add("right");
            } else if (this.povorot == "left") {
                this.dublpovorotnik.classList.add("left");
                this.povorotnik.classList.add("left");
            }
            this.carImg.src = this.path;
            this.carHtml.appendChild(this.povorotnik);
            this.carHtml.appendChild(this.dublpovorotnik);
            this.carHtml.appendChild(this.carImg);
            this.carHtml.appendChild(this.count);
            this.count.classList.add("count");
            this.carHtml.classList.add("car");
            this.carHtml.style.top = y + "px";
            this.carHtml.style.left = x + "px";
            this.carHtml.style.rotate = this.deg + "deg";
            document.querySelector(".intersection").appendChild(this.carHtml);
            let intersection = document.querySelector(".intersection");
            intersection = window.getComputedStyle(intersection);
            this.intersectionWidth = this.removePX(intersection.getPropertyValue("width")) + 60;
            this.intersectionHeight = this.removePX(intersection.getPropertyValue("height")) + 60;
            let style = window.getComputedStyle(this.carHtml);
            this.carY = this.removePX(style.getPropertyValue("top"));
            this.carX = this.removePX(style.getPropertyValue("left"));
            this.intersectionCenter = window.getComputedStyle(intersectionCenter);
            Number();
            this.Il = this.removePX(this.intersectionCenter.getPropertyValue("left"));
            this.It = this.removePX(this.intersectionCenter.getPropertyValue("top"));
            this.Iw = this.removePX(this.intersectionCenter.getPropertyValue("width"));
            this.Ih = this.removePX(this.intersectionCenter.getPropertyValue("height"));
            this.border = document.createElement("div");
            this.border.classList.add("border");
            this.carHtml.appendChild(this.border);
            this.points();
            this.clickCarHtml();
        }
        points() {
            let center = document.createElement("div");
            this.centerPointY = this.It + this.Ih / 2;
            this.centerPointX = this.Il + this.Iw / 2;
            center.classList.add("centerPoint");
            center.style.top = this.centerPointY + "px";
            center.style.left = this.centerPointX + "px";
            document.querySelector(".intersection").appendChild(center);
        }
        removePX(str) {
            return Number(str.substring(0, str.length - 2));
        }
        move() {
            if (this.direction === "stop") return;
            this.moveDeg();
        }
        smoothRotate(element, rotationAngle, duration) {
            let startAngle = Number(this.carHtml.style.rotate.substring(0, this.carHtml.style.rotate.length - 3));
            let startTime = null;
            let animateRotate = timestamp => {
                if (!startTime) startTime = timestamp;
                const progress = timestamp - startTime;
                const currentAngle = easeInOutCubic(progress, startAngle, rotationAngle, duration);
                if (this.direction == "stop") {
                    if (this.isCrash()) {
                        this.povorotnik.remove("right");
                        this.dublpovorotnik.remove("right");
                        this.povorotnik.remove("left");
                        this.dublpovorotnik.remove("left");
                        let tl = document.createElement("div");
                        tl.classList.add("povorotniks-tleft");
                        let tr = document.createElement("div");
                        tr.classList.add("povorotniks-tright");
                        let bl = document.createElement("div");
                        bl.classList.add("povorotniks-bleft");
                        let br = document.createElement("div");
                        br.classList.add("povorotniks-bright");
                        this.carHtml.appendChild(tl);
                        this.carHtml.appendChild(tr);
                        this.carHtml.appendChild(bl);
                        this.carHtml.appendChild(br);
                    }
                    return;
                }
                if (currentAngle + 1 > startAngle + rotationAngle && currentAngle - 1 < startAngle + rotationAngle) {
                    this.direction = "default";
                    this.deg = currentAngle;
                    if (this.povorot == "right") {
                        this.povorotnik.classList.remove("right");
                        this.dublpovorotnik.classList.remove("right");
                    } else if (this.povorot == "left") {
                        this.dublpovorotnik.classList.remove("left");
                        this.povorotnik.classList.remove("left");
                    }
                    this.moveDeg();
                    return;
                }
                element.style.rotate = `${currentAngle}deg`;
                if (progress < duration) requestAnimationFrame(animateRotate);
            };
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
                window.answer += this.id;
                this.carHtml.querySelector(".count").innerHTML = window.cars.length;
                if (window.cars.length == this.all) window.start();
            }));
        }
        moveDeg() {
            if (this.deg > 86 && this.deg < 93) this.plusX();
            if (this.deg > 176 && this.deg < 183) this.plusY();
            if (this.deg < -86 && this.deg > -93) this.minusX();
            if (this.deg > -6 && this.deg < 3) this.minusY();
            if (this.deg > 260 && this.deg < 280) this.minusX();
            if (this.deg < -170 && this.deg > -190) this.plusY();
        }
        isCrash() {
            for (let index = 0; index < window.cars.length; index++) {
                const element = window.cars[index];
                if (element == this) continue;
                let isOverlap = () => {
                    const car = this.border.getBoundingClientRect();
                    const carTwo = element.border.getBoundingClientRect();
                    if (car.left + car.width > carTwo.left && car.left < carTwo.left + carTwo.width && car.top + car.height > carTwo.top && car.top < carTwo.top + carTwo.height) return true; else return false;
                };
                if (isOverlap()) {
                    window.end();
                    return true;
                }
            }
        }
        stop() {
            this.direction = "stop";
        }
        plusX() {
            if (this.direction == "default") {
                let delayedLoop = () => {
                    setTimeout((() => {
                        this.carX++;
                        this.carHtml.style.left = this.carX + "px";
                        if (this.carX < this.intersectionWidth && this.direction != "stop") delayedLoop(); else if (this.isCrash()) {
                            this.povorotnik.remove("right");
                            this.dublpovorotnik.remove("right");
                            this.povorotnik.remove("left");
                            this.dublpovorotnik.remove("left");
                            let tl = document.createElement("div");
                            tl.classList.add("povorotniks-tleft");
                            let tr = document.createElement("div");
                            tr.classList.add("povorotniks-tright");
                            let bl = document.createElement("div");
                            bl.classList.add("povorotniks-bleft");
                            let br = document.createElement("div");
                            br.classList.add("povorotniks-bright");
                            this.carHtml.appendChild(tl);
                            this.carHtml.appendChild(tr);
                            this.carHtml.appendChild(bl);
                            this.carHtml.appendChild(br);
                        }
                        if (this.carX >= this.intersectionWidth) this.carHtml.style.display = "none";
                    }), 2);
                };
                delayedLoop();
            } else {
                let delayedLoop = () => {
                    setTimeout((() => {
                        this.carX++;
                        this.carHtml.style.left = this.carX + "px";
                        if (this.direction == "left") if (this.carX - 20 < this.centerPointX && this.direction != "stop") delayedLoop(); else this.smoothRotate(this.carHtml, -90, 1e3); else if (this.carX + 96 < this.centerPointX && this.direction != "stop") delayedLoop(); else this.smoothRotate(this.carHtml, 90, 1e3);
                    }), 2);
                };
                delayedLoop();
            }
        }
        plusY() {
            if (this.direction == "default") {
                let delayedLoop = () => {
                    setTimeout((() => {
                        this.carY++;
                        this.carHtml.style.top = this.carY + "px";
                        if (this.carY < this.intersectionHeight && this.direction != "stop") delayedLoop(); else if (this.isCrash()) {
                            this.povorotnik.remove("right");
                            this.dublpovorotnik.remove("right");
                            this.povorotnik.remove("left");
                            this.dublpovorotnik.remove("left");
                            let tl = document.createElement("div");
                            tl.classList.add("povorotniks-tleft");
                            let tr = document.createElement("div");
                            tr.classList.add("povorotniks-tright");
                            let bl = document.createElement("div");
                            bl.classList.add("povorotniks-bleft");
                            let br = document.createElement("div");
                            br.classList.add("povorotniks-bright");
                            this.carHtml.appendChild(tl);
                            this.carHtml.appendChild(tr);
                            this.carHtml.appendChild(bl);
                            this.carHtml.appendChild(br);
                        }
                        if (this.carY >= this.intersectionHeight) this.carHtml.style.display = "none";
                    }), 2);
                };
                delayedLoop();
            } else {
                let delayedLoop = () => {
                    setTimeout((() => {
                        this.carY++;
                        this.carHtml.style.top = this.carY + "px";
                        if (this.direction == "left") if (this.carY + 20 < this.centerPointY && this.direction != "stop") delayedLoop(); else this.smoothRotate(this.carHtml, -90, 1e3); else if (this.carY + 125 < this.centerPointY && this.direction != "stop") delayedLoop(); else this.smoothRotate(this.carHtml, 90, 1e3);
                    }), 2);
                };
                delayedLoop();
            }
        }
        minusX() {
            if (this.direction == "default") {
                let delayedLoop = () => {
                    setTimeout((() => {
                        this.carX--;
                        this.carHtml.style.left = this.carX + "px";
                        if (this.carX > -220 && this.direction != "stop") delayedLoop(); else if (this.isCrash()) {
                            this.povorotnik.remove("right");
                            this.dublpovorotnik.remove("right");
                            this.povorotnik.remove("left");
                            this.dublpovorotnik.remove("left");
                            let tl = document.createElement("div");
                            tl.classList.add("povorotniks-tleft");
                            let tr = document.createElement("div");
                            tr.classList.add("povorotniks-tright");
                            let bl = document.createElement("div");
                            bl.classList.add("povorotniks-bleft");
                            let br = document.createElement("div");
                            br.classList.add("povorotniks-bright");
                            this.carHtml.appendChild(tl);
                            this.carHtml.appendChild(tr);
                            this.carHtml.appendChild(bl);
                            this.carHtml.appendChild(br);
                        }
                        if (this.carX <= -220) this.carHtml.style.display = "none";
                    }), 2);
                };
                delayedLoop();
            } else {
                let delayedLoop = () => {
                    setTimeout((() => {
                        this.carX--;
                        this.carHtml.style.left = this.carX + "px";
                        if (this.direction == "left") if (this.carX + 96 > this.centerPointX && this.direction != "stop") delayedLoop(); else this.smoothRotate(this.carHtml, -90, 1e3); else if (this.carX - 30 > this.centerPointX && this.direction != "stop") delayedLoop(); else this.smoothRotate(this.carHtml, 90, 1e3);
                    }), 2);
                };
                delayedLoop();
            }
        }
        minusY() {
            if (this.direction == "default") {
                let delayedLoop = () => {
                    setTimeout((() => {
                        this.carY--;
                        this.carHtml.style.top = this.carY + "px";
                        if (this.carY > -220 && this.direction != "stop") delayedLoop(); else if (this.isCrash()) {
                            this.povorotnik.remove("right");
                            this.dublpovorotnik.remove("right");
                            this.povorotnik.remove("left");
                            this.dublpovorotnik.remove("left");
                            let tl = document.createElement("div");
                            tl.classList.add("povorotniks-tleft");
                            let tr = document.createElement("div");
                            tr.classList.add("povorotniks-tright");
                            let bl = document.createElement("div");
                            bl.classList.add("povorotniks-bleft");
                            let br = document.createElement("div");
                            br.classList.add("povorotniks-bright");
                            this.carHtml.appendChild(tl);
                            this.carHtml.appendChild(tr);
                            this.carHtml.appendChild(bl);
                            this.carHtml.appendChild(br);
                        }
                        if (this.carY <= -220) this.carHtml.style.display = "none";
                    }), 2);
                };
                delayedLoop();
            } else {
                let delayedLoop = () => {
                    setTimeout((() => {
                        this.carY--;
                        this.carHtml.style.top = this.carY + "px";
                        if (this.direction == "left") if (this.carY + 125 > this.centerPointY && this.direction != "stop") delayedLoop(); else this.smoothRotate(this.carHtml, -90, 1e3); else if (this.carY + 20 > this.centerPointY && this.direction != "stop") delayedLoop(); else this.smoothRotate(this.carHtml, 90, 1e3);
                    }), 2);
                };
                delayedLoop();
            }
        }
    }
    const _ar = Car;
    const adittionalDB_namespaceObject = JSON.parse('{"generalProvisions":{"general":{"title":"Общие положения","subtitle":["1. Дорога и Пешеходы","2. Правило правой руки","3. Светофоры и Знаки","4. Скорость и Дистанция","5. Алкоголь и Наркотики","6. Сотовые телефоны","7. Другие Участники Движения"],"img":["./img/theory/generalProvisions/1/1.jpg","./img/theory/generalProvisions/1/2.jpg","./img/theory/generalProvisions/1/3.jpg","./img/theory/generalProvisions/1/4.jpg","./img/theory/generalProvisions/1/5.jpg","./img/theory/generalProvisions/1/6.jpg","./img/theory/generalProvisions/1/7.jpg"],"text":[["Дорога - это не просто полоса асфальта. Это место, где каждый участник движения должен соблюдать правила и уважать друг друга.","Пешеходы - наши самые уязвимые участники. Помни, что они всегда имеют преимущество на пешеходных переходах."],["В большинстве стран движение на дороге праворульное. Это означает, что при пересечении других транспортных средств, уступай дорогу тем, кто едет справа."],["Подчиняйтесь светофорам и дорожным знакам. Они указывают, когда можно двигаться и когда нужно остановиться."],["Соблюдай разумную скорость и безопасное расстояние между автомобилями. Это позволяет избежать аварий."],["Никогда не управляй транспортным средством, находясь под воздействием алкоголя или наркотиков. Это опасно и незаконно."],["Перед использованием сотового телефона остановись в безопасном месте. Внимание на дороге — твоя первоочередная задача."],["Помни, что на дороге есть много разных участников, включая велосипедистов, мотоциклистов и пешеходов. Уважай их права и будь осторожен."]]},"generalTwo":{"title":"Общие обязанности водителей","subtitle":["1. Сосредоточенность и Безотвлекаемость","2. Скоростной Режим","3. Передача Приоритета","4. Наличие документов","5. Уступать Пешеходам"],"img":["./img/theory/generalProvisions/2/1.jpg",null,"./img/theory/generalProvisions/2/2.jpg","./img/theory/generalProvisions/2/3.jpg","./img/theory/generalProvisions/2/4.jpg"],"text":[["Внимание на дороге - главное правило. Избегайте отвлекающих действий, таких как разговоры по телефону."],["Уважайте ограничения скорости. Не превышайте их, чтобы обеспечить безопасность всех на дороге."],["Правильно уступайте дорогу согласно правилам. Помните о приоритетах."],["Водитель транспортного средства обязан иметь при себе удостоверение и по требованию сотрудников полиции передавать им, для проверки."],["Пешеходы всегда имеют преимущество на пешеходных переходах. Уступайте дорогу им."],["Перед использованием сотового телефона остановись в безопасном месте. Внимание на дороге — твоя первоочередная задача."],["Помни, что на дороге есть много разных участников, включая велосипедистов, мотоциклистов и пешеходов. Уважай их права и будь осторожен."]]},"generalThree":{"title":"Применение специальных сигналов","subtitle":["1. Специальные сигналы","2. Сирена и Мигающие Маячки","3. Уступите Дорогу","4. Будьте Осторожны"],"img":["./img/theory/generalProvisions/3/1.jpg","./img/theory/generalProvisions/3/2.jpg","./img/theory/generalProvisions/3/3.jpg","./img/theory/generalProvisions/3/4.jpg"],"text":[["Специальные сигналы - это средство, которое используется служебными и аварийными транспортными средствами для обозначения их приоритета на дороге."],["Специальные сигналы обычно включают сирену и мигающие маячки. Это предупреждает других участников движения о неотложности их задачи."],["Когда вы видите служебное аварийное транспортное средство с включенными специальными сигналами, вы должны уступить дорогу и пропустить его."],["Водители должны быть особенно осторожными, когда видят транспортное средство с включенными специальными сигналами. Это может быть связано с неотложной медицинской помощью, пожаром или другой аварией. Важно помнить, что специальные сигналы используются для обеспечения безопасности и сохранения жизней. Уступайте дорогу и будьте осторожными, когда видите транспортное средство с включенными специальными сигналами на дороге."]]}},"roadSigns":{"priority":{"title":"Знаки приоритета","subtitle":["1. Знак \\"Уступите дорогу\\"","2. Знак \\"Главная дорога\\"","3. Знак \\"Пешеходный переход\\"","4. Знак \\"Велосипедисты\\"","5. Знак \\"Железнодорожный переезд\\"","6. Знак \\"Однопроходная дорога\\"","7. Знак \\"Конец полосы\\"","8. Знак \\"Пересечение с трамвайными путями\\"","9. Знак \\"Преимущество встречного движения\\"","10. Знак \\"Двустороннее движение\\""],"img":["./img/theory/roadSigns/1/1.jpg","./img/theory/roadSigns/1/2.jpg","./img/theory/roadSigns/1/3.jpg","./img/theory/roadSigns/1/4.jpg","./img/theory/roadSigns/1/5.jpg","./img/theory/roadSigns/1/6.jpg","./img/theory/roadSigns/1/7.jpg","./img/theory/roadSigns/1/8.jpg","./img/theory/roadSigns/1/9.jpg","./img/theory/roadSigns/1/10.jpg"],"text":[["Знак \\"Уступите дорогу\\" указывает, что вы должны уступить дорогу другим участникам движения."],["Знак \\"Главная дорога\\" показывает, что вы находитесь на главной дороге и имеете приоритет перед въезжающими с боковых дорог."],["Знак \\"Пешеходный переход\\" указывает на место, где пешеходы имеют приоритет при пересечении дороги."],["Знак \\"Велосипедисты\\" предупреждает о наличии велосипедной дорожки и обязывает уступить дорогу велосипедистам."],["Знак \\"Железнодорожный переезд\\" указывает на приближение к железнодорожным путям и обязывает уступить дорогу поездам."],["Знак \\"Однопроходная дорога\\" указывает, что дорога однопроходная, и вы должны уступить дорогу встречным транспортным средствам."],["Знак \\"Конец полосы\\" указывает на конец участка средней полосы и переход во владение встречного направления."],["Знак \\"Пересечение с трамвайными путями\\" предупреждает о наличии трамвайных путей и обязывает уступить дорогу трамваям."],["Знак \\"Преимущество встречного движения\\" указывает на приоритет движения водителей по встречной полосе и обязывает уступить дорогу встречному движению."],["Знак \\"Двустороннее движение\\" показывает, что дорога двусторонняя и участники движения могут двигаться в обоих направлениях."]]},"forbidding":{"title":"Запрещающие знаки","subtitle":["1. Сосредоточенность и Безотвлекаемость","2. Скоростной Режим","3. Передача Приоритета","4. Наличие документов","5. Уступать Пешеходам"],"img":["./img/theory/roadSigns/2/1.jpg","./img/theory/roadSigns/2/2.jpg","./img/theory/roadSigns/2/3.jpg","./img/theory/roadSigns/2/4.jpg","./img/theory/roadSigns/2/5.jpg","./img/theory/roadSigns/2/6.jpg","./img/theory/roadSigns/2/7.jpg","./img/theory/roadSigns/2/8.jpg","./img/theory/roadSigns/2/9.jpg","./img/theory/roadSigns/2/10.jpg"],"text":[["Внимание на дороге - главное правило. Избегайте отвлекающих действий, таких как разговоры по телефону."],["Уважайте ограничения скорости. Не превышайте их, чтобы обеспечить безопасность всех на дороге."],["Правильно уступайте дорогу согласно правилам. Помните о приоритетах."],["Водитель транспортного средства обязан иметь при себе удостоверение и по требованию сотрудников полиции передавать им, для проверки."],["Пешеходы всегда имеют преимущество на пешеходных переходах. Уступайте дорогу им."],["Перед использованием сотового телефона остановись в безопасном месте. Внимание на дороге — твоя первоочередная задача."],["Помни, что на дороге есть много разных участников, включая велосипедистов, мотоциклистов и пешеходов. Уважай их права и будь осторожен."]]},"prescriptive":{"title":"Предписывающие знаки","subtitle":["1. Знак \\"Двигаться прямо\\"","2. Знак \\"Поворот направо\\"","3. Знак \\"Поворот налево\\"","4. Знак \\"Двигаться в обратном направлении\\"","5. Знак \\"Объезд препятствия справа\\""],"img":["./img/theory/roadSigns/3/1.jpg","./img/theory/roadSigns/3/2.jpg","./img/theory/roadSigns/3/3.jpg","./img/theory/roadSigns/3/4.jpg","./img/theory/roadSigns/3/5.jpg","./img/theory/roadSigns/3/6.jpg"],"text":[["Знак с изображением стрелки, указывающей вперед, предписывает двигаться прямо, не поворачивая."],["Знак с изображением стрелки, указывающей направо, предписывает совершить правый поворот."],["Знак с изображением стрелки, указывающей налево, предписывает совершить левый поворот."],["Знак с изображением двух стрелок, указывающих в разные стороны, предписывает двигаться в обратном направлении."],["Знак указывает, что объезд различного рода препятствий на проезжей части разрешается со стороны, указанной стрелкой."],["Знак указывает, что движение организовано по кругу в направлении стрелок."]]}},"light":{"signal":{"title":"Сигналы","subtitle":["","",""],"img":["","",""],"text":[["В светофорах применяются световые сигналы зеленого, желтого, красного и бело-лунного цвета."],["В зависимости от назначения сигналы светофора могут быть круглые, в виде стрелки (стрелок), силуэта пешехода или велосипеда и X-образные."],["Светофоры с круглыми сигналами могут иметь одну или две дополнительные секции с сигналами в виде зеленой стрелки (стрелок), которые располагаются на уровне зеленого круглого сигнала."]]}}}');
    const cross_namespaceObject = JSON.parse('{"1":{"width":"320px","height":"215px","left":"470px","top":"90px","textwidth":"400px","textheight":"200px","textleft":"10px","texttop":"500px","path":"./img/tests/intersections/cross1.jpg","all":3,"car":[{"id":2,"direction":"right","path":"./img/tests/cars/b-car.png","x":60,"y":180,"deg":90,"povorot":"right"},{"id":1,"direction":"right","path":"./img/tests/cars/w-car.png","x":280,"y":180,"deg":90,"povorot":"right"},{"id":3,"direction":"right","path":"./img/tests/cars/y-car.png","x":650,"y":360,"deg":0,"povorot":"right"}],"answers":[{"sequence":"123","text":"<span style=\'color:red;\'>Неверно!</span> Первая едет - белая, вторая - чёрная и последним проезжает - жёлтая, так как ей необходимо пропустить тех кто на главной или убедиться, что машины 100% поворачивают","textresult":"Первая едет - белая, вторая - чёрная и последним проезжает - жёлтая, так как ей необходимо пропустить тех кто на главной или убедиться, что машины 100% поворачивают."}]},"2":{"width":"320px","height":"215px","left":"470px","top":"283px","textwidth":"400px","textheight":"200px","textleft":"10px","texttop":"10px","path":"./img/tests/intersections/cross2.jpg","all":3,"car":[{"id":1,"direction":"default","path":"./img/tests/cars/y-car.png","x":340,"y":375,"deg":90,"povorot":"none"},{"id":2,"direction":"right","path":"./img/tests/cars/w-car.png","x":540,"y":110,"deg":180,"povorot":"right"},{"id":3,"direction":"left","path":"./img/tests/cars/b-car.png","x":650,"y":535,"deg":0,"povorot":"left"}],"answers":[{"sequence":"231","text":"<span style=\'color:red;\'>Неверно!</span> Первая едет - белая, вторая - чёрная и последним проезжает - жёлтая. Правило проезда перекрёстка - по помехе справа.","textresult":"Первая едет - белая, вторая - чёрная и последним проезжает - жёлтая. Правило проезда перекрёстка - по помехе справа."}]},"3":{"width":"135px","height":"50px","left":"515px","top":"410px","textwidth":"400px","textheight":"200px","textleft":"10px","texttop":"10px","path":"./img/tests/intersections/cross3.jpg","all":2,"car":[{"id":1,"direction":"right","path":"./img/tests/cars/r-car.png","x":540,"y":80,"deg":180,"povorot":"right"},{"id":2,"direction":"left","path":"./img/tests/cars/b-car.png","x":550,"y":495,"deg":0,"povorot":"left"}],"answers":[{"sequence":"12","text":"<span style=\'color:red;\'>Неверно!</span> Правило проезда - по помехе справа.","textresult":"Правило проезда - по помехе справа."}]},"count":3}');
    const justtest_namespaceObject = JSON.parse('{"1":{"width":"100%","height":"260px","left":"500px","top":"90px","text":"Что называется разрешённой максимальной массой транспортного средства?","answers":"Максимально допустимая для перевозки масса груза, установленная предприятием-изготовителем@ Масса снаряженного транспортного средства без учета массы водителя, пассажиров и груза, установленная предприятием-изготовителем@ Масса снаряженного транспортного средства с грузом, водителем и пассажирами, установленная предприятием-изготовителем в качестве максимально допустимой","correct":"3","correctText":"Разрешённая максимальная масса транспортного средства - масса снаряженного транспортного средства с грузом, водителем и пассажирами, установленная предприятием-изготовителем в качестве максимально допустимой"},"2":{"width":"100%","height":"260px","left":"500px","top":"90px","text":"В каких случаях водителю запрещается движение со скоростью более 50 км/ч?","answers":"При управлении мопедом@ При буксировке механического транспортного средства@ Если соответствующий запрет установлен дорожным знаком «Ограничение максимальной скорости»@ Во всех перечисленных случаях","correct":"4","correctText":"Водителю запрещается движение со скоростью более 50 км/ч: При управлении мопедом; При буксировке механического транспортного средства; Если соответствующий запрет установлен дорожным знаком «Ограничение максимальной скорости»"},"3":{"width":"100%","height":"260px","left":"500px","top":"90px","text":"Когда должна быть прекращена подача сигнала указателями поворота?","answers":"Непосредственно перед началом маневра@ Сразу после начала маневра@ Сразу после завершения маневра","correct":"3","correctText":"Подача сигнала указателями поворота должна быть прекращена сразу после завершения маневра"},"4":{"width":"100%","height":"260px","left":"500px","top":"90px","text":"Разрешается ли использовать для движения трамвайные пути встречного направления?","answers":"Разрешается@ Разрешается, если при этом не будут созданы помехи встречным транспортным средствам@ Разрешается только при объезде трамвая попутного направления@ Запрещается","correct":"4","correctText":"Использовать для движения трамвайные пути встречного направления запрещается"},"5":{"width":"100%","height":"260px","left":"500px","top":"90px","text":"Водители должны уступать дорогу другим участникам движения:","answers":"При выезде из жилой зоны@ При выезде с дворовой территории@ В обоих перечисленных случаях","correct":"3","correctText":"Водители должны уступать дорогу другим участникам движения: При выезде из жилой зоны, при выезде с дворовой территории"},"count":5}');
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
    window.ANSWER = [];
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
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
    let answerText = document.createElement("div");
    answerText.classList.add("answerText");
    let indexCar = 1;
    let indexJusttest = 1;
    let inxCar = getRandomInt(1, 4);
    let inxJusttest = 0;
    let dublicateIndexJusttext = [];
    let nextbtn = document.querySelector(".next");
    nextbtn.addEventListener("click", (() => {
        answerText.innerHTML = "";
        if (indexCar < 2) {
            indexCar++;
            let r = getRandomInt(1, 4);
            while (r == inxCar) r = getRandomInt(1, 4);
            inxCar = r;
            window.createTestWindowCars();
        } else if (indexJusttest <= 6) {
            if (indexJusttest > 1) addAnswerJustText();
            if (indexJusttest < 4) {
                dublicateIndexJusttext.push(inxCar);
                let r = getRandomInt(1, 6);
                while (dublicateIndexJusttext.includes(r)) r = getRandomInt(1, 6);
                inxJusttest = r;
                indexJusttest++;
                window.createTestWindowJusttest();
            } else window.createTestWindowResult();
        }
    }));
    function addAnswerJustText() {
        window.answer = document.querySelector('input[name="question"]:checked').value;
        if (Number(window.answer) + 1 == justtest_namespaceObject[inxJusttest].correct) window.ANSWER.push({
            text: "",
            is: true
        }); else window.ANSWER.push({
            text: justtest_namespaceObject[inxJusttest].correctText,
            is: false
        });
    }
    window.createTestWindowCars = () => {
        window.cars = [];
        nextbtn.disabled = true;
        let intersectionCenter = document.createElement("div");
        intersectionCenter.classList.add("intersectionCenter");
        intersectionCenter.style.cssText = `\n        width: ${cross_namespaceObject[inxCar].width};\n        height: ${cross_namespaceObject[inxCar].height};\n        top: ${cross_namespaceObject[inxCar].top};\n        left: ${cross_namespaceObject[inxCar].left};\n    `;
        answerText.style.cssText = `\n    width: ${cross_namespaceObject[inxCar].textwidth};\n    height: ${cross_namespaceObject[inxCar].textheight};\n    top: ${cross_namespaceObject[inxCar].texttop};\n    left: ${cross_namespaceObject[inxCar].textleft};\n`;
        window.answer = "";
        document.querySelector(".intersection").replaceChildren();
        let intersection = document.querySelector(".intersection").appendChild(intersectionCenter);
        intersection = document.querySelector(".intersection").appendChild(answerText);
        document.querySelector(".intersection").style.background = "url(" + cross_namespaceObject[inxCar].path + ")";
        for (let index = 0; index < cross_namespaceObject[inxCar].car.length; index++) {
            const car = cross_namespaceObject[inxCar].car[index];
            new _ar(car.direction, intersectionCenter, car.path, car.x, car.y, car.deg, car.id, car.povorot, cross_namespaceObject[inxCar].all);
        }
    };
    window.createTestWindowResult = () => {
        nextbtn.style.display = "none";
        let intersection = document.querySelector(".intersection");
        intersection.replaceChildren();
        intersection.style.background = "url()";
        let resultHTML = document.createElement("div");
        resultHTML.classList.add("result");
        intersection.appendChild(resultHTML);
        for (let index = 0; index < window.ANSWER.length; index++) if (window.ANSWER[index].is) resultHTML.innerHTML += `<span style="color:green;">${index + 1}</span>`; else resultHTML.innerHTML += `<span style="color:red;">${index + 1} -  ${ANSWER[index].text}</span>`;
    };
    window.createTestWindowJusttest = () => {
        nextbtn.disabled = true;
        window.answer = "";
        let question = document.createElement("div");
        question.classList.add("question");
        question.innerText = justtest_namespaceObject[inxJusttest].text;
        question.style.cssText = `\n        width: ${justtest_namespaceObject[inxJusttest].width};\n        height: ${justtest_namespaceObject[inxJusttest].height};\n        top: ${justtest_namespaceObject[inxJusttest].top};\n        left: ${justtest_namespaceObject[inxJusttest].left};\n    `;
        let intersection = document.querySelector(".intersection");
        intersection.replaceChildren();
        intersection.style.background = "url()";
        intersection.appendChild(question);
        let inpblock = document.createElement("div");
        let answersText = justtest_namespaceObject[inxJusttest].answers.split("@");
        for (let index = 0; index < answersText.length; index++) {
            const element = answersText[index];
            inpblock.innerHTML += `\n        <label for="question${index}"><div class="justtesttext">\n        <input type="radio" id="question${index}" name="question" value="${index}">\n        ${element}\n        </div></label>`;
        }
        intersection.appendChild(inpblock);
        let justtesttext = document.querySelectorAll("input");
        for (let index = 0; index < justtesttext.length; index++) {
            const element = justtesttext[index];
            element.addEventListener("click", (() => {
                nextbtn.disabled = false;
            }));
        }
    };
    window.start = () => {
        let answer = false;
        for (let index = 0; index < cross_namespaceObject[inxCar].answers.length; index++) {
            const sequence = cross_namespaceObject[inxCar].answers[index].sequence;
            if (window.answer == sequence) {
                answer = true;
                break;
            }
        }
        let inter = answer ? 3e3 : 200;
        if (!answer) {
            window.ANSWER.push({
                text: cross_namespaceObject[inxCar].answers[0].textresult,
                is: false
            });
            answerText.innerHTML = cross_namespaceObject[inxCar].answers[0].text;
        } else {
            window.ANSWER.push({
                text: "",
                is: true
            });
            answerText.innerHTML = "Верно!";
        }
        for (let index = 0; index < window.cars.length; index++) window.interval = setTimeout((() => {
            const element = window.cars[index];
            element.move();
            window.isin = setInterval((() => {
                element.isCrash();
            }), 100);
        }), inter * index);
        setTimeout((() => {
            nextbtn.disabled = false;
        }), inter * window.cars.length);
    };
    window.end = () => {
        clearInterval(window.interval);
        clearInterval(window.isin);
        for (let index = 0; index < window.cars.length; index++) {
            const element = window.cars[index];
            element.stop();
        }
        clearInterval(window.isin);
        clearInterval(window.interval);
        nextbtn.disabled = false;
    };
    menuInit();
})();