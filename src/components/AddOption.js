 import React from 'react'

export default class AddOption extends React.Component {
    state = {
        error:undefined
    }
    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.state = {
            error:undefined
        }
     }
     submit=(e) => {
        e.preventDefault();
        const option = e.target.elements.opt.value.trim();
        const error = this.props.handleAddOptions(option);

        this.setState (() =>({
                 error : error
        }));

        if(!error) {
            e.target.elements.opt.value =' ';
        }
        

    };
    render() {
        return (
            <div>
            {this.state.error && <p className= "add-option-error">{this.state.error}</p>}
             <form className="add-option" onSubmit = {this.submit }>
             <input className="add-option_input" type = "text" name = "opt"/>
             <button  className="button">Add Option</button>
             </form>
            </div>
        );
    }
}