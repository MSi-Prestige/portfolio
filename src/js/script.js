"use strict";
$(document).ready(function () {
    function valideForms(form) {
        $(form).validate(
            {
                rules: {
                    name: {
                        required: true,
                        minlength: 2
                    },
                    email: {
                        required: true,
                        email: true,
                    },
                    checkbox: {
                        required: true,
                        checkbox: false,
                    }
                },
                messages: {
                    name: {
                        required: "Пожалуйста, введите свое имя",
                        minlength: jQuery.validator.format("Введите {0} символа!")
                    },
                    email: {
                        required: "Пожалуйста, введите свою почту",
                        email: "Неправильно введен адрес почты"
                    },
                    checkbox: {
                        required: "Подтвердите согласие",
                    }
                }
            });
    }

    valideForms("#contactForm");

    $("#checkbox").on("click", function () {
        if ($(this).is(':checked')) {
            alert("Подтвердите согласие");
        } else {
            alert("unchecked");
        }
    });


    $("#contactForm").submit(function (e) {
        e.preventDefault();
        if (!$(this).valid()) {
            return;
        }
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function () {
            $(this).find("input").val("");
            $("form").trigger("reset");
        });
        return false;
    });
});


const hamburger = document.querySelector(".hamburger"),
    menu = document.querySelector(".menu"),
    closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
    menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
    menu.classList.remove("active");
});

// TODO: Line orange % ------------------------------------------------------------------------
const counters = document.querySelectorAll(".calc__percent"),
    lines = document.querySelectorAll(".calc__line_undr span");

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
});




