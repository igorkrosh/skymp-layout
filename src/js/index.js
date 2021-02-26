$(document).ready(Core);

function Core()
{
    Animate();
    SetSkyrimBg()
}

function Animate() // Фукнция отрисовки анимации на сцене 
{
    requestAnimationFrame(Animate);

    let mainX = $('.bg__clouds.main').css('background-position-x');
    mainX = parseFloat(mainX);
    mainX += 0.2;
    $('.bg__clouds.main').css('background-position-x', `${mainX}%`)

    let secondX = $('.bg__clouds.second').css('background-position-x');
    secondX = parseFloat(secondX);
    secondX += 0.1;
    $('.bg__clouds.second').css('background-position-x', `${secondX}%`)
}

function SetSkyrimBg()
{
    let firstLayer = $('section.first__scroll .bg__scene .first__layer');
    let secondLayer = $('section.first__scroll .bg__scene .second__layer');
    let thirdLayer = $('section.first__scroll .bg__scene .third__layer');

    $(window).on('scroll', function () {
        let value = window.scrollY;

        firstLayer.css('top', `${value * 0.5}px`);
        secondLayer.css('top', `${value * 0.3}px`);
        thirdLayer.css('top', `${value * 0.1}px`);
    })
}
