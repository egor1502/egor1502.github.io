'use strict';

/**
 * ProgressDonut plagin by Yegor Omelchenko
 * 
 * Get plugin wrapper on element by `cons progressWrapper progressDonut(selector)`
 * Initialize plugin by `progressWrapper.init([options])`
 * 
 * Progress Donut wrapper methods:
 * 
 * init([options])
 * destroy()
 * setValue(value)
 * updateState([state])
 * getState()
 * setOptions(options)
 * 
 */

(function progressDonutPlugin () {

    /**
     * 
     * @param {Object} options Options for the progress donut
     * @returns {Object} ProgressDonut instance
     */
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

    /**
     * Destroy the Progress Donut element
     */
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

    /**
     * 
     * @param {Object} options Options for the progress donut:
     *                         progressDonutClasses - add custom class to progress donut root
     *                         progressDonutTrackClasses - add custom class to progress donut track
     *                         progressDonutFillClasses - add custom class to progress donut fill
     *                         animationLoopDuration - configure speed of the progress donut animation
     */
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

    /**
     * 
     * @param {Object} state - Use { visibility: 'normal' or 'hidden', animated: boolean} to configure the progress donut state
     */
    function updateState (state = this.node.dataset.state) {
        if (!this.node.dataset.state && !this.initialization) {
            throw new Error('The element have no initialized progress donut.');
        } else if (!this.initialization) {
            state = Object.assign(JSON.parse(this.node.dataset.state), state);
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

    /**
     * Get the progress donut state
     */
    function getState () {
        if (!this.node.dataset.state) {
            throw new Error('The element have no initialized progress donut.');
        }

        return JSON.parse(this.node.dataset.state);
    }

    /**
     * 
     * @param {Number|String} value - Set the value of the progress donut
     */
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