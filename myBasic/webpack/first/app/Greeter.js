// Greeter.js只包括一个用来返回包含问候信息的html元素的函数。
var configText = require('./config.json');
// import styles = './Greeter.css';


module.exports = function(){
	var greet = document.createElement('div');
	greet.textContent = configText.text;
	return greet;
}









