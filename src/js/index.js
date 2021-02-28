$(document).ready(Core);

function Core()
{
    Animate();
    SetSkyrimBg();
    SetCardSwitcher();
}

function Animate() // Фукнция отрисовки анимации на сцене 
{
    requestAnimationFrame(Animate);
    
    let mainX = $('.bg__clouds.main').css('background-position-x');
    mainX = parseFloat(mainX);
    mainX += 0.2 * $(window).width() / 1920;
    $('.bg__clouds.main').css('background-position-x', `${mainX}%`)

    let secondX = $('.bg__clouds.second').css('background-position-x');
    secondX = parseFloat(secondX);
    secondX += 0.1  * $(window).width() / 1920;
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

function SetCardSwitcher()
{
    $('.btn__card__switch').on('click', function(e) {
        e.preventDefault();
        if ($(this).hasClass('active'))
        {
            return;
        }

        $('.btn__card__switch').removeClass('active');
        $(this).addClass('active');

        let targetCard = $(this).attr('target');

        SwitchCard(targetCard)
    })
}

function SwitchCard(target)
{
    
    $('.card.active').animate({
        opacity: 0
    }, 500, function() {
        $('.card.active').removeClass('active');

        $(`[card-name="${target}"]`).css('opacity', 0);
        $(`[card-name="${target}"]`).addClass('active');
        
        let cardHeight = $(`[card-name="${target}"]`)[0].clientHeight;
        $(`[card-name="${target}"]`).closest('.card__viewer').css('height', `${cardHeight}px`)

        $(`[card-name="${target}"]`).animate({
            opacity: 1
        }, 500)
    })
}
