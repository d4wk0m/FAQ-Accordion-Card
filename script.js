var button = document.getElementsByClassName("button");



for (i = 0; i < button.length; i++) {
    button[i].addEventListener("click", function() {
    document.querySelectorAll('.button').forEach((item) => {
        item.style.fontWeight = null;
        item.style.color = null;
        })
    document.querySelectorAll(".titleimg").forEach((item) => {
        item.style.transform = null;
    })
    var faq = this.nextElementSibling;
    if (faq.style.height === "42px") {
        faq.style.height = "0px";
        this.style.fontWeight = null;
        this.style.color = null;
        var img = this.children;
        img[0].style.transform = "rotate(null)";
        } 
    else {
    document.querySelectorAll('.faq').forEach((item) => {
        item.style.height = "0px";
        })
    faq.style.height = "42px";
    this.style.fontWeight = "700";
    this.style.color = "hsl(237, 12%, 33%)";
    var img = this.children;
    img[0].style.transform = "rotate(180deg)";
    }
    });
}
