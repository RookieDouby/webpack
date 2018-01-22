// import _ from 'lodash';
import './style.css';
import Print from './print';
import {cube} from './math';

function component() {
    var element = document.createElement('pre');

    element.innerHTML =  [
        'Hello Webpack!',
        '5 cubed equals to ' + cube(5)
    ].join('\n\n');

    return element;
}

document.body.appendChild(component());

if(module.hot) {
    module.hot.accept('./print.js', () => {
        console.log("Accepted the updated printInfo module");
        print();
    });
}