window.onload = () => {
    const 
        project = document.querySelector('.main-form-slider-project'),
        projectWidth = project.offsetWidth,
        pic = document.querySelector('.main-form-slider-project__pic'),
        pin = document.querySelector('.main-form-slider-project__pin');

    const levels = [0, 18.5, 47.7, 98];

    const textarea = document.querySelector('textarea');

    // функция установки автоматической высоты textarea в зависимости от его содержимого
    const setHeightTextArea = () => {
        // сбросим значение высоты textarea
        textarea.style.height = '';
        // новая высота textarea = полной высоте с учетом прокрутки
        textarea.style.height = textarea.scrollHeight + 'px';
    }

    setHeightTextArea();

    // обработаем набор текста в элементе textarea
    textarea.addEventListener('input', setHeightTextArea);

    // обработка высоты с учетом ресайза страницы
    window.addEventListener('resize', setHeightTextArea);
    
    // console.log(projectWidth);

    const filter = (pos) => {
        for (let i = 1; i < 4; i++) {
            if (levels[i-1] < pos && pos < levels[i]) {
                // console.log(levels[i-1] - pos, levels[i] - pos);
                if (Math.abs(levels[i-1] - pos) < Math.abs(levels[i] - pos)) {
                    return pin.style.left = levels[i-1] + '%';
                } else if (Math.abs(levels[i-1] - pos) > Math.abs(levels[i] - pos)) {
                    return pin.style.left = levels[i] + '%';
                }
            }
        }
        // console.log(1);
        
    }
    
    if (pin) {
        pin.style.left = '47.7%';
        pic.addEventListener('click', (e) => {
            let pos = Math.round((e.layerX / projectWidth) * 100);
            pin.style.left = `${e.layerX-7}px`;
            setTimeout(() => {
                for (let i = 1; i < 4; i++) {
                    if (levels[i-1] < pos && pos < levels[i]) {
                        // console.log(levels[i-1] - pos, levels[i] - pos);
                        if (Math.abs(levels[i-1] - pos) < Math.abs(levels[i] - pos)) {
                            pin.style.left = levels[i-1] + '%';
                        } else if (Math.abs(levels[i-1] - pos) > Math.abs(levels[i] - pos)) {
                            pin.style.left = levels[i] + '%';
                        }
                    }
                }
            }, 512);
        });
    }

    
}