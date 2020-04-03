class IndecisionApp extends React.Component {
    constructor(props) {
       super(props);
       this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
       this.handlePickOptions = this.handlePickOptions.bind(this);
       this.handleAddOptions = this.handleAddOptions.bind(this);
       this.handleDeleteOption = this.handleDeleteOption.bind(this);
       this.state = {
        options : []
       }

    }

    componentDidMount(){
        const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        if(options) {
            this.setState(() => ({options}));
        }
        
    }

    componentDidUpdate(prevProps,prevState) {
        try{
            if(prevState.options.length !== this.state.options.length) {
                const json = JSON.stringify(this.state.options);
                localStorage.setItem('options',json);
            }
        }catch(e) {

        }

    }

    handleDeleteOptions() {
        this.setState (()=> ({options : [] }));
    }

    handleDeleteOption(optionToremove) {
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => {
              return optionToremove !== option;
          })
        }));
    }

    handlePickOptions() {
       const randomNum = Math.floor(Math.random() * this.state.options.length);
       const option = this.state.options[randomNum];
       alert(option);
    }

    handleAddOptions(option) {   
        if(!option) {
            return "Please enter valid input!";
        }else if(this.state.options.indexOf(option) > -1) {
            return "Already exist!";
        }  
        
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
        // this.setState((prevState) => {
        //     return {
        //         options: prevState.options.concat(option)
        //     };
        //  });
    }
    render() {
        const title = 'Indecision';
        const subtitle = 'Put your life  in the hands of computers';
        return (
            <div>
               <Header title = {title} subtitle = {subtitle}/>
               <Action 
                 hasOptions={this.state.options.length > 0}
                 handlePickOptions ={this.handlePickOptions}
               />
               <Options opts = {this.state.options}
               handleDeleteOptions={this.handleDeleteOptions}
               handleDeleteOption={this.handleDeleteOption}
               />
               <AddOption 
               handleAddOptions = {this.handleAddOptions}
               />
            </div>
        )

    }


}

class Header extends React.Component {
     render() {
         return (
             <div>
             <h1>{this.props.title}</h1>
             <h2>{this.props.subtitle}</h2>
             </div>
         );
     }
}


const Action =(props) =>{
    return (
        <div>
           <button 
             disabled = {!props.hasOptions}
             onClick = {props.handlePickOptions}
           > What should I do?
           </button>
        </div>
    );
};


// Add remove button

const Options =(props)=>{
    return (
        <div>
          <button onClick = {props.handleDeleteOptions}>removal</button>
          {props.opts.length === 0 && <p>Please add an option to get started!</p>}
           {
            props.opts.map((opt) => (
                <Option 
                    key={opt} 
                    optionsText={opt}
                    handleDeleteOption = {props.handleDeleteOption}
                />
                ))
           }
        </div>
        );
};



const Option = (props)=>{
    return (
        <div>
           {props.optionsText}
           <button onClick={e =>{
            props.handleDeleteOption(props.optionsText)
           }}>remove</button>
        </div>

     );
};


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {
            error:undefined
        }
     }
     submit(e) {
        e.preventDefault();
        const option = e.target.elements.opt.value.trim();
        const error = this.props.handleAddOptions(option);

        this.setState (() =>({
                 error : error
        }));

        if(!error) {
            e.target.elements.opt.value =' ';
        }
        

    }
    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>}
             <form onSubmit = {this.submit }>
             <input type = "text" name = "opt"/>
             <button >submit</button>
             </form>
            </div>
        );
    }
}

// const User = (props)=>{
//     return (
//         <div>
//         <p>name:{props.name}</p>
//         <p>age:{props.age}</p>
//         </div>
//     );  
// };

ReactDOM.render(<IndecisionApp />,document.getElementById('app'));