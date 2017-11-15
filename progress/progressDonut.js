'use strict';

(function progressDonutPlugin () {

    function init (options = {}) {
        if (this.node.dataset.state) {
            console.error('The progress donut already initialized.');
            return this;
        }

        const progressDonutTemplate = `
            <svg class="progress-donut" viewBox="0 0 220 220">
                <circle class="progress-donut__track" cx="110" cy="110" r="100"></circle>
                <circle class="progress-donut__fill" cx="110" cy="110" r="100"></circle>
            </svg>
        `;
        this.node.innerHTML = progressDonutTemplate;

        this.progressDonut = this.node.querySelector('.progress-donut');
        this.progressDonutFill = this.node.querySelector('.progress-donut__fill');
        this.progressDonutTrack = this.node.querySelector('.progress-donut__track');

        this.node.dataset.fullDashOffset = parseInt(getComputedStyle(this.progressDonutFill).strokeDashoffset);
        this.initialization = true;
        this.updateState({
            visibility: 'normal',
            animated: false
        });
        this.setOptions(options);
        this.initialization = false;        

        return this;
    }

    function destroy () {
        if (!this.node.dataset.state) {
            throw new Error('The element have no initialized progress donut.');
        }
        
        this.node.innerHTML = '';
        delete this.node.dataset.fullDashOffset;
        delete this.node.dataset.state;
        delete this.node.dataset.value;
        return true;
    }

    function setOptions (options) {
        if (!this.node.dataset.state) {
            throw new Error('The element have no initialized progress donut.');
        }

        if (options.progressDonutClasses) {
            this.progressDonut.setAttribute('class', `progress-donut ${options.progressDonutClasses.join(' ')}`);
            this.updateState();
        }

        if (options.progressDonutTrackClasses) {
            this.progressDonutTrack.setAttribute('class', `progress-donut__track ${options.progressDonutTrackClasses.join(' ')}`);
        }

        if (options.progressDonutFillClasses) {
            this.progressDonutFill.setAttribute('class', `progress-donut__fill ${options.progressDonutFillClasses.join(' ')}`);
        }

        if (options.animationLoopDuration) {
            this.progressDonut.style.animationDuration = `${options.animationLoopDuration}ms`;
        }

        return this;
    }

    function updateState (state = this.node.dataset.state) {
        if (!this.node.dataset.state && !this.initialization) {
            throw new Error('The element have no initialized progress donut.');
        }

        if (state.visibility === 'hidden') {
            this.progressDonut.classList.add('progress-donut_hidden');
        } else {
            this.progressDonut.classList.remove('progress-donut_hidden');
        }

        if (state.animated) {
            this.progressDonut.classList.add('progress-donut_animated');
        } else {
            this.progressDonut.classList.remove('progress-donut_animated');
        }
        
        this.node.dataset.state = JSON.stringify(state);

        return this;
    }

    function getState () {
        if (!this.node.dataset.state) {
            throw new Error('The element have no initialized progress donut.');
        }

        return JSON.parse(this.node.dataset.state);
    }

    function setValue (value) {
        if (!this.node.dataset.state) {
            throw new Error('The element have no initialized progress donut.');
        }

        this.node.dataset.value = this.progressDonutFill.style.strokeDashoffset = (100 - value) * 0.01 * this.node.dataset.fullDashOffset;
        return this;
    }

    function _progressDonutWrapper (selector) {
        this.node = document.querySelector(selector);
    }

    _progressDonutWrapper.prototype = {
        init,
        destroy,
        setValue,
        updateState,
        getState,
        setOptions
    };

    window.progressDonut = function progressDonutWrapper (selector) {
        return new _progressDonutWrapper(selector);
    };

})();