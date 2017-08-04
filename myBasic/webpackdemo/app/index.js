import _ from 'lodash';

function component(argument) {
	var element = document.createElement('div');

	element.innerHTML = _.join(['hello','webpack'], ' ');

	return element;
}

document.body.appendChild(component());