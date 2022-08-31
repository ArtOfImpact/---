const collapseFrames = [
    { opacity: '0' },
    { opacity: '0.5' },
    { opacity: '1' }
]

const buttonFrames = [
    { opacity: '1' },
    { opacity: '0.5' },
    { opacity: '0' },
]
const buttonEffect = {
    duration: 500,
    easing: "ease",
    fill: "both",
}
const timingEffect = {
    duration: 500,
    easing: "ease",
    fill: "both",
}

// Элементы

const collapsible = document.querySelector(".collapsible")
collapsible.setAttribute('style', 'width: 1180px;margin: auto;border: 1px solid black;');

const collapsibleButton = document.querySelector('.collapsible__button')
collapsibleButton.setAttribute('style', 'height: 50px;display: flex;align-items: center;margin: 10px;');

const buttonVisible = document.querySelector(".collapsible__action--visible")
buttonVisible.setAttribute('style', 'position:absolute;font-size: 18px;height: 50px;display: flex;align-items: center;padding: 0px 20px;');

const buttonHidden = document.querySelector(".collapsible__action--hidden")
buttonHidden.setAttribute('style', 'font-size: 18px;height: 50px;display: flex;align-items: center;padding: 0px 20px;');

const collapse = document.querySelector('.collapsible__content')
collapse.setAttribute('style', 'margin: 10px; padding: 10px; border: 1px solid black; text-align:center;background-color: #ebebeb;font-size: 24px;color: darkred;');

// Анимация 

const animation = collapse.animate(collapseFrames, timingEffect);

const visibleAnimation = buttonVisible.animate(buttonFrames, buttonEffect)
const hiddenAnimation = buttonHidden.animate(buttonFrames, buttonEffect)

hiddenAnimation.pause()
animation.pause()

// Событие 

document.querySelector(".collapsible__button").addEventListener("click", () => {
    if (animation.playState === "paused") {
        hiddenAnimation.play()
        visibleAnimation.reverse()
        animation.play();
    } else {
        if (animation.playbackRate === 1) {
            visibleAnimation.reverse()
            hiddenAnimation.reverse()
            animation.reverse();
        } else {
            hiddenAnimation.reverse()
            visibleAnimation.reverse()
            animation.reverse();
        }
    }
});
