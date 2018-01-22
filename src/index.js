import _ from 'lodash';
import './style.css';
import Print from './print';

function element() {
    var element = document.createElement('div');
    var btn = document.createElement('button');

    element.innerHTML = _.join(['Hello','Webpack'],' ');
    btn.innerHTML = 'Click me and check the console';

    btn.onclick = Print;

    element.appendChild(btn);

    return element;
}

document.body.appendChild(element());

if(module.hot) {
    module.hot.accept('./print.js', () => {
        console.log("Accepted the updated printInfo module");
        print();
    });
}