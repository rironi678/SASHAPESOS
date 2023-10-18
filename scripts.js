const e = document.querySelector("[data-menu-button]")
    , t = document.querySelector("[data-menu]")
    , n = document.querySelector("#page");
    e.addEventListener("click", (()=>{
        const i = "true" === e.getAttribute("aria-expanded") || !1;
        if (e.classList.toggle("is-open"),
        e.setAttribute("aria-expanded", !i),
        t.classList.toggle("is-open"),
        i)
            n.classList.remove("no-scroll"),
            setTimeout((()=>{
                o()
            }
            ), 50);
        else {
            const e = document.getElementById("header");
            n.classList.add("no-scroll"),
            e.classList.remove("header--no-transparency")
        }
    }
    ));
    document.querySelector(".mob-menu__link").addEventListener("click", (()=>{
        n.classList.remove("no-scroll")
    }
    ));
    document.querySelector(".logo").addEventListener("click", (()=>{
        $("html, body").animate({
            scrollTop: 0
        }, 1e3)
    }
    ))
