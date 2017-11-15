(function () {

    const valueInput = document.querySelector('#sample-block__progress-value');
    const animateInput = document.querySelector('#sample-block__progress-animate');
    const hideInput = document.querySelector('#sample-block__progress-hide');

    const progress = 
        progressDonut('.sample-block__progress')
            .init()
            .setValue(valueInput.value)
            .updateState({
                visibility: hideInput.checked ? 'hidden' : 'normal',
                animated: animateInput.checked
            });

    valueInput.addEventListener('input', event => {
        if (event.target.value > 100) {
            valueInput.value = 100;
        } else if (event.target.value < 0) {
            valueInput.value = 0;
        }

        progress.setValue(event.target.value);
    });

    animateInput.addEventListener('change', _ => progress.updateState({ animated: animateInput.checked }));

    hideInput.addEventListener('change', _ => progress.updateState({ visibility: hideInput.checked ? 'hidden' : 'normal' }));

})();