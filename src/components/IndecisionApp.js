import React from 'react';
import AddOption from './AddOption.js';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import OptionModal from './OptionModal.js';

export default class IndecisionApp extends React.Component {
       state = {
        options : [],
        selectedOption:undefined
       }

    handleDeleteSelected=() => {
        this.setState(() => ({selectedOption:undefined}));
    };


    handleDeleteOptions=()=> {
        this.setState (()=> ({options : [] }));
    };

    handleDeleteOption=(optionToremove) => {
        this.setState((prevState) => ({
          options: prevState.options.filter((option) => {
              return optionToremove !== option;
          })
        }));
    };

    handlePickOptions=() =>{
       const randomNum = Math.floor(Math.random() * this.state.options.length);
       const option = this.state.options[randomNum];
       //alert(option);
       this.setState(() =>( {selectedOption : option}));
    };

    handleAddOptions=(option)=> {   
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
    };

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

    render() {
        const title = 'Indecision!!!!';
        const subtitle = 'Put your life  in the hands of computers!!!';
        return (
            <div className="container">
               <Header title = {title} subtitle = {subtitle}/>
               <div>
               <Action 
               hasOptions={this.state.options.length > 0}
               handlePickOptions ={this.handlePickOptions}
             />
             <div className="widget">
             <Options opts = {this.state.options}
             handleDeleteOptions={this.handleDeleteOptions}
             handleDeleteOption={this.handleDeleteOption}
             />
             <AddOption 
             handleAddOptions = {this.handleAddOptions}
             />
             
             </div>

            </div>

               <OptionModal 
               selectedOption={this.state.selectedOption}
               handleDeleteSelected={this.handleDeleteSelected}
               />
            </div>
        )

    }


}

