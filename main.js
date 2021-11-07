let Main_links = document.getElementsByClassName("main-link");
let Secondary_lists = document.getElementsByClassName("secondary-list");
let NavLinks = document.getElementById("main-list-links");

Array.from(Main_links).forEach((link,index) => {

    link.addEventListener('click',()=>{
        Secondary_lists[index].classList.toggle("visible");
        for(let i=0;i<Main_links.length;i++){
            if(i!=index)
                Secondary_lists[i].classList.remove("visible");
        }
    });
});

let Hamburger = document.getElementById("hamburger");
Hamburger.addEventListener('click',()=>{
    let TopHeader = document.getElementById("top-header");
    TopHeader.classList.toggle("top-header-nav-visible");
    NavLinks.classList.toggle("visible");
});