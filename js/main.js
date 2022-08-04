$(function () {
    $('.menu_icon').on('click', function () {
        $('.menu_icon').toggleClass('open')
        $('.mobile_menu').toggleClass('open')
    })
    $('.mobile_menu a').on('click', function () {
        $('.menu_icon').toggleClass('open')
        $('.mobile_menu').toggleClass('open')
    })
})

