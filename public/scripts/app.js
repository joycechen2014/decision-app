'use strict';

console.log('app is running!');

//jsx - JavaScript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' Decisicion App'
    ),
    React.createElement(
        'p',
        null,
        'This is some info'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'item one'
        ),
        React.createElement(
            'li',
            null,
            'item two'
        )
    )
);

//create a templateTwo var JSX expression
//div 
//  h1 -> Jinfeng Chen
//  p -> age:34
//  p ->location : Dublin
//  render templateTow instead of template
var name = 'jenny';
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        name
    ),
    React.createElement(
        'p',
        null,
        'Age:34'
    ),
    React.createElement(
        'p',
        null,
        'Location: Dublin'
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
