const logoMain = document.querySelector('.service__logo__main');
const divs = logoMain.querySelectorAll('div');
divs.forEach(element => {
    element.addEventListener('click', (event) => {
        divs.forEach(async (divoriginal) => {
            const alterarItem = divoriginal.querySelector('div')
            if (alterarItem !== null) {
                divoriginal.style.width = '20%'
                setTimeout(() => {
                    if (alterarItem.classList.contains('service__profission')) {
                        alterarItem.classList.remove('service__profission')
                    }
                    alterarItem.classList.add('rotated')
                    alterarItem.classList.remove('not-rotated')
                }, 100)

            }
        });
        const alterar = element.querySelector('div')
        if (alterar !== null) {
            element.style.width = '40%'
            setTimeout(() => {
                if (alterar.classList.contains('rotated')) {
                    alterar.classList.remove('rotated')
                    alterar.classList.add('not-rotated')
                }
                alterar.classList.add('service__profission')
            }, 100)
        }
    });
});
