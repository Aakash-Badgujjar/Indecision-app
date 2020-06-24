import React from 'react';

export default class Addoption extends React.Component {
     state= {error:undefined};

    
    handleaddoption = (e) =>{
        e.preventDefault();

        const option=e.target.elements.option.value.trim(  );
        const error =this.props.handleaddoption(option);
        this.setState(() => ({error}));

        if(!error){

            e.target.elements.option.value='';
        }
        
    };
    render(){
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
               <form className="add-option" onSubmit={this.handleaddoption}>
                   <input className="add-option__input" type="text" name="option" />
                   <button className="button">Add Option</button>
               </form>
            </div>
        );
    }
}
