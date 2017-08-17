if (!('boxShadow' in document.body.style)) {
    document.body.setAttribute('class', 'noBoxShadow');
}

document.body.addEventListener("click", function(e) {
    var target = e.target;
    if (target.tagName === "INPUT" &&
        target.getAttribute('class').indexOf('liga') === -1) {
        target.select();
    }
});

(function() {
    var fontSize = document.getElementById('fontSize'),
        testDrive = document.getElementById('testDrive'),
        testText = document.getElementById('testText');
    function updateTest() {
        testText.value = testText.value.toLowerCase()
        testDrive.innerHTML = testText.value || String.fromCharCode(160);
        if (window.brLiga) {
            window.brLiga(testDrive);
        }
    }
    function updateSize() {
        testDrive.style.fontSize = fontSize.value + 'px';
    }
    fontSize.addEventListener('change', updateSize, false);
    testText.addEventListener('input', updateTest, false);
    testText.addEventListener('change', updateTest, false);
    updateSize();
}());


(function ($) {
    $(".input-group-btn > .btn").on("click", function () {

        var _email = $("input.form-control").val();
        console.log(_email)
        apostle.domainkey = "9986ddd42de84ef1efe674085dfee93dca87e299";
        apostle.deliver("welcome", {email: _email});
    })


})(jQuery)