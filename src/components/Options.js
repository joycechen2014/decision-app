import React from 'react';
import Option from './Option.js';

const Options =(props)=> (
        <div>
        <div className ="widget-header">
            <h3 className="widget-header_title">Your Options</h3>
            <button className="button button--link"
             onClick = {props.handleDeleteOptions}>Remove All</button>
        </div>

          {props.opts.length === 0 && <p className="widget_content">Please add an option to get started!</p>}
           {
            props.opts.map((opt,index) => (
                <Option 
                    key={opt} 
                    optionsText={opt}
                    count = {index + 1}
                    handleDeleteOption = {props.handleDeleteOption}
                />
                ))
           }
        </div>
        );

export default Options;