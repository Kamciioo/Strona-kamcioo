const email = document.getElementById("email-address");
email.addEventListener("click", function() {
    const emailValue = email.textContent.trim();
    const tempInput = document.createElement("input");
    tempInput.setAttribute("value", "neksosscontact@gmail.com");
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    const copiedText = document.createElement("span");
    copiedText.textContent = "Copied!";
    copiedText.style.color = "#9b0eed";
    copiedText.style.fontSize = "15px";
    copiedText.style.fontWeight = "300";
    copiedText.style.position = "absolute";
    copiedText.style.top = "calc(100% + 20px)";
    copiedText.style.left = "50%";
    copiedText.style.transform = "translateX(-50%)";
    copiedText.style.textShadow = "0px 0px 5px #000";
    email.style.position = "relative";
    email.appendChild(copiedText);
    setTimeout(function() {
        fadeOut(copiedText);
    }, 4000);
});
function fadeOut(element) {
    let opacity = 1;
    const timer = setInterval(function() {
        if (opacity <= 0.1) {
            clearInterval(timer);
            element.style.display = "none";
        }
        element.style.opacity = opacity;
        opacity -= 0.1;
    }, 50);
}
$('.typing').each(function() {
    $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>"));
});
setTimeout(function() {
    $('.typing').addClass('active');
    $('.typing').find('.letter').each(function(i) {
        var $this = $(this);
        setTimeout(function() {
            $this.addClass('show');
        }, 50 * i);
    });
}, 1000);
