var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

var checkboxElective = document.getElementById('elective');
var linesElective = document.querySelectorAll('.elective');

checkboxElective.addEventListener('change', function () {
    if (checkboxElective.checked) {
        linesElective.forEach(function(line) {
            line.classList.add('grey-color');
        })
    } else {
        linesElective.forEach(function(line) {
            line.classList.remove('grey-color');
        })
    }
});

var checkboxCompulsory = document.getElementById('compulsory');
var linesCompulsory = document.querySelectorAll('.compulsory');

checkboxCompulsory.addEventListener('change', function () {
    if (checkboxCompulsory.checked) {
        linesCompulsory.forEach(function(line) {
            line.classList.add('grey-color');
        })
    } else {
        linesCompulsory.forEach(function(line) {
            line.classList.remove('grey-color');
        })
    }
});
