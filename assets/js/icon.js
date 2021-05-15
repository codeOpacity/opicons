const
    textUno = document.querySelectorAll('.banner_text h2'),
    textDos = document.querySelectorAll('.changelog'),
    textTres = document.querySelectorAll('.banner_text p')
;
for (let i = 0; i < textUno.length; i++) {
    const textOne = textUno[i].innerHTML='OpIcons.';
}

for (let i = 0; i < textDos.length; i++) {
    const textTwo = textDos[i].innerHTML='[beta releases]';
}

for (let i = 0; i < textTres.length; i++) {
    const textThree = textTres[i].innerHTML='Premium designed icons for use in web apps. Support for SVG and web font. Completely open source, MIT licensed and built by the';
}

copy = document.querySelectorAll("small");
for (const span of copy) {
    span.onclick = function () {
        document.execCommand("copy");
    }

    span.addEventListener("copy", function (event) {
        event.preventDefault();
        if (event.clipboardData) {
            event.clipboardData.setData("text/plain", span.textContent);
            alert(event.clipboardData.getData("text"));
        }
    });
};

const Darktoggler = document.querySelector(".dark_switch");
Darktoggler.addEventListener("click",()=>{
    document.querySelector("body").classList.toggle("dark");
});
const topBtn = document.querySelector('.top_btn');
topBtn.addEventListener('click',()=>{
    scroll({
        top: 0,
        behavior: "smooth"
    });
});
document.onscroll =()=>{
this.scrollY>500? topBtn.style.display = 'block' :  topBtn.style.display = 'none';
}

//Find Search