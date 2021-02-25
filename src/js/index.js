$(document).ready(Core);

function Core()
{
    Animate();
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