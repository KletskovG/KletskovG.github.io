window.onload = function () {
    // ---------
    // MENU
    // --------
    let Toggle     = document.querySelector('.toggle');
    let Menu       = document.querySelector('.menu');
    Toggle.addEventListener('click', function () {
        this.classList.toggle('toggle-hidden');
        Menu.classList.toggle('menu-hidden');
    })

    // -------
    // FORM
    // ---------
    let SendBtn    = document.querySelector('.hero__btn .button');
    let Modal      = document.querySelector('.modalwindow');
    let ModalClose = document.querySelector('.modalwindow__close');

    SendBtn.addEventListener('click', function () { 
        Modal.style.display = 'block';
    });

    ModalClose.addEventListener('click', function () {
        Modal.style.display = 'none';
    });

    Modal.addEventListener('click', function (e) {
        if(e.target != Modal){
            this.style.display = 'none';
        }
    });

    // --------
    // SCROLLS
    // -------
    let Tools = document.getElementById('tools');
    let ToolsPos = Tools.getBoundingClientRect();
    ToolsPos = ToolsPos.top + pageYOffset;
    let ToolsLink = document.querySelector('a[href="#tools"]');

    ToolsLink.addEventListener('click', function (e) {
        let scrolling = pageYOffset;
        let timer;
        e.preventDefault();
        if(scrolling < ToolsPos){
            ScrollDown();
        }

        function ScrollDown() {
            if(scrolling < ToolsPos){
                window.scrollTo(0,scrolling);
                scrolling += 30;
                window.scrollTo(0,scrolling);
                timer = setTimeout(() => {
                    ScrollDown();
                }, 30);
            } else {
                clearTimeout(timer);
                window.scrollTo(0,ToolsPos);
            }
        }
    });

    let Services = document.getElementById('services');
    let ServicesPos = Services.getBoundingClientRect();
    ServicesPos = ServicesPos.top + pageYOffset;
    let ServicesLink = document.querySelector('a[href="#services"]');

    ServicesLink.addEventListener('click', function (e) {
        let scrolling = pageYOffset;
        let timer;
        e.preventDefault();
        if (scrolling < ServicesPos) {
            ScrollDown();
        }

        function ScrollDown() {
            if (scrolling < ServicesPos) {
                window.scrollTo(0, scrolling);
                scrolling += 50;
                window.scrollTo(0, scrolling);
                timer = setTimeout(() => {
                    ScrollDown();
                }, 35);
            } else {
                clearTimeout(timer);
                window.scrollTo(0, ServicesPos);
            }
        }
    });

    let Contact = document.getElementById('contacts');
    let ContactPos = Contact.getBoundingClientRect();
    ContactPos = ContactPos.top + pageYOffset;
    let ContactLink = document.querySelector('a[href="#contacts"]');

    ContactLink.addEventListener('click', function (e) {
        let scrolling = pageYOffset;
        let timer;
        e.preventDefault();
        if (scrolling < ContactPos) {
            ScrollDown();
        }

        function ScrollDown() {
            if (scrolling < ContactPos) {
                window.scrollTo(0, scrolling);
                scrolling += 60;
                window.scrollTo(0, scrolling);
                timer = setTimeout(() => {
                    ScrollDown();
                }, 20);
            } else {
                clearTimeout(timer);
                window.scrollTo(0, ContactPos);
            }
        }
    })
};