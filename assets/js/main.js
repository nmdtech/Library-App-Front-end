document.addEventListener("DOMContentLoaded", function () {

    if (document.querySelector(".navbar")) {
        const navbar = document.querySelector(".navbar");
        const body = document.body;
        body.style.paddingTop = navbar.offsetHeight + "px";
    }


    if (document.querySelector("#addNewBook")) {
        const langSelect = document.getElementById("book_lang");
        const sinhalaLangWrapper = document.getElementById("book_name_s_wrapper");

        function toggleSinhalaField() {
            if (langSelect.value === "si") {
                new bootstrap.Collapse(sinhalaLangWrapper, {
                    show: true
                });
            } else {
                new bootstrap.Collapse(sinhalaLangWrapper, {
                    hide: true
                });
            }
        }

        toggleSinhalaField();

        langSelect.addEventListener("change", toggleSinhalaField);
    }

    if (document.getElementById("bk_search_lnk")) {

        const wrapper = document.getElementById("main-content");
        const overlay = document.querySelector('.form-overlay');
        const formWrap = document.querySelector("#searchBook");

        document.getElementById("bk_search_lnk").addEventListener("click", (e) => {
            e.preventDefault();
            document.getElementById('bk_search').focus();
        });

        document.getElementById("bk_search").addEventListener("focus", () => {
            wrapper.classList.add("overlay-visible");
            formWrap.classList.replace("position-relative", "p-sticky");
        });

        overlay.addEventListener('click', () => {
            wrapper.classList.remove('overlay-visible');
            formWrap.classList.replace("p-sticky", "position-relative");
        });
    }

});
