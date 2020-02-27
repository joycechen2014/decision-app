console.log('app is running!');

//jsx - JavaScript XML
var template  = (
<div>
<h1> Decisicion App</h1>
 <p>This is some info</p>
 <ol>
     <li>item one</li>
     <li>item two</li>
 </ol>
 </div>
);

//create a templateTwo var JSX expression
//div 
//  h1 -> Jinfeng Chen
//  p -> age:34
//  p ->location : Dublin
//  render templateTow instead of template
var name = 'jenny';
var templateTwo = (<div>
    <h1>{name}</h1>
    <p>Age:34</p>
    <p>Location: Dublin</p>
    </div>);
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo,appRoot);