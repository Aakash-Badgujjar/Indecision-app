import React from 'react';
import Addoption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class Indecisionapp extends React.Component{
state ={
    options:[],
    selectedOption:undefined
};

    

handledeleteoptions =() =>{
  
    this.setState(() => ({options:[]}));
};

handledeleteoption =(optiontoremove) =>{
this.setState((prevState) => ({
    options: prevState.options.filter((option) =>   optiontoremove !== option  )
}));
};

handleClearSelectedOption = () => {
    this.setState(() => ({selectedOption:undefined}));
}

handlepick =() =>{
    const randomnum=Math.floor(Math.random()*this.state.options.length);
 const option=this.state.options[randomnum];
 this.setState(() => ({
  selectedOption:option
 }));

};
handleaddoption =(option) =>
{
    if (!option) {
        return 'Enter valid value';
    }
    else if(this.state.options.indexOf(option)>-1){
        return 'this option already exists';
    }

    this.setState((prevState) => ({
        options: prevState.options.concat(option)
    }));
};

componentDidMount(){
    try{

        const json=localStorage.getItem('options');
        const options=JSON.parse(json);
        if(options){
            this.setState(() => ({options:options}));

        }
    }catch(e){

    

}

}
componentDidUpdate(prevProps , prevState){
    if(prevState.options.length !==this.state.options.length){
      const json=JSON.stringify(this.state.options);
      localStorage.setItem('options',json);

    }
    
}
componentWillUnmount(){
    console.log('unmount');  
}

  render(){
  const title = 'Indecision';
  const subtitle = 'Put your life in the hands of a computer';
  

    return (
      <div>
        <Header title={title} subtitle={subtitle} />

        <div className="container">

        <Action hasoptions={this.state.options.length>0}
        handlepick={this.handlepick}
        />
        <div className="widget">
        <Options options={this.state.options}
        handledeleteoptions={this.handledeleteoptions}
        handledeleteoption={this.handledeleteoption}
        />
        <Addoption
        handleaddoption={this.handleaddoption}
        />

        </div>
        
        </div>
       
        <OptionModal selectedOption={this.state.selectedOption}
        handleClearSelectedOption={this.handleClearSelectedOption}
         />
     </div>
    );
}
    
}
