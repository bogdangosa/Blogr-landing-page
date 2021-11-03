let Main_links = document.getElementsByClassName("main-link");
let Secondary_lists = document.getElementsByClassName("secondary-list");

Array.from(Main_links).forEach((link,index) => {

    link.addEventListener('click',()=>{
        Secondary_lists[index].classList.toggle("visible");
        console.log(Secondary_lists[index].classList);
    });
});