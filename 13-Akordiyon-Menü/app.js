var buton = document.getElementsByClassName("akordiyon");
var ok = document.getElementsByClassName("fa-chevron-down")

for (var i = 0; i < buton.length; i++) {
    buton[i].onclick = function() {
        this.lastElementChild.classList.toggle("fa-chevron-up");
        var panel = this.nextElementSibling;

        console.log(panel)
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}