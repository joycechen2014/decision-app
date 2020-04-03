console.log('app is running!');
//create app object title/subtitle
//user title/subtitle in the template
//render template


// if statements
// ternary operators
// logical and operator

//only render the subtitle (and p tag) if subtitle exist 

const app = {
    title : 'Indesicion APP',
    subtitle : 'Let the computer make the choice for you',
    options:[]
};


const onFormSubmit = (e) =>{
   e.preventDefault();
   const option = e.target.elements.option.value;
   if(option) {
       app.options.push(option);
       e.target.elements.option.value = ' ';
       renderDecisonApp();
   }
   
};


const reset =() => {
      app.options = [];
      renderDecisonApp();
}
//jsx - JavaScript XML

const makdeDecision =  () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');


// Create render function that rednders the nes jsx
// Call it right away
// Call it after options array added to

const renderDecisonApp = () => {
    const template  = (
        <div>
            <h1>{app.title}</h1>
            <p>{app.subtitle && app.subtitle}</p>
            <p>{app.options.length > 0? 'Here are your options.':'No option'}</p>
            <button onClick = {reset}>Reset</button>
            <button disabled = {app.options.length === 0} onClick = {makdeDecision}>What should I do </button>
            <p>{app.options.length}</p>
            <ol>
              {
                  app.options.map((option) => <li key = {option}> {option} </li>)
              }
           </ol>  
            

            <form onSubmit={onFormSubmit}>
               <input type = "text" name = "option"/>
               <button>Add Options</button>
               
            </form>
         </div>
        );
        ReactDOM.render(template,appRoot);
};
renderDecisonApp();

