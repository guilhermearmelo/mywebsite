import React from 'react';

const Intro = () => {
    return (
        <div>
            <header class="bg-white black-80 tc pv4 avenir">
                <h1 class="mt2 mb0 baskerville i fw1 f1">Guilherme Melo</h1>
                <h2 class="mt2 mb0 f6 fw4 ttu tracked">Web Developer</h2>
                <nav class="bt bb tc mw7 center mt4">
                    <a class="f6 f5-l link bg-animate black-80 hover-bg-lightest-blue dib pa3 ph4-l" href="/">Home</a>
                    <a class="f6 f5-l link bg-animate black-80 hover-bg-light-green dib pa3 ph4-l" href="/portfolio">Portfolio</a>
                    <a class="f6 f5-l link bg-animate black-80 hover-bg-light-blue dib pa3 ph4-l" href="/shop">Tecnologies</a>
                    <a class="f6 f5-l link bg-animate black-80 hover-bg-light-yellow dib pa3 ph4-l" href="/contact">Contact</a>
                </nav>
            </header>
        </div>
    );
}

export default Intro;