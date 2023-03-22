const logoMain = document.querySelector('.service__logo__main');
const divs = logoMain.querySelectorAll('div');
divs.forEach(element => {
    element.addEventListener('click', (event) => {
        divs.forEach(async (divoriginal) => {
            const alterarItem = divoriginal.querySelector('div')
            if (alterarItem !== null) {
                if (alterarItem.classList.contains('service__profission')) {
                    alterarItem.classList.remove('service__profission')
                }
                alterarItem.classList.add('rotated')
                alterarItem.classList.remove('not-rotated')
                divoriginal.style.width = '20%'
            }
        });
        const alterar = element.querySelector('div')
        if (alterar !== null) {
            if (alterar.classList.contains('rotated')) {
                alterar.classList.remove('rotated')
                alterar.classList.add('not-rotated')
            }
            alterar.classList.add('service__profission')
            element.style.width = '40%'
        }
    });
});
