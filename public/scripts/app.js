'use strict';

console.log('app is running!');
//create app object title/subtitle
//user title/subtitle in the template
//render template


// if statements
// ternary operators
// logical and operator

//only render the subtitle (and p tag) if subtitle exist 

var app = {
    title: 'Indesicion APP',
    subtitle: 'Let the computer make the choice for you',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = ' ';
        renderDecisonApp();
    }
};

var reset = function reset() {
    app.options = [];
    renderDecisonApp();
};
//jsx - JavaScript XML


var appRoot = document.getElementById('app');

// Create render function that rednders the nes jsx
// Call it right away
// Call it after options array added to

var renderDecisonApp = function renderDecisonApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'p',
            null,
            app.subtitle && app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options.' : 'No option'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    ' ',
                    option,
                    ' '
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Options'
            ),
            React.createElement(
                'button',
                { onClick: reset },
                'Reset'
            )
        )
    );
    ReactDOM.render(template, appRoot);
};
renderDecisonApp();
