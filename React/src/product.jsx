import React, { Component } from 'react';
// Class Component
class Product extends Component {
    state={
        Name:this.props.Name,
        Count:1,
        logoUrl:"logo192.png",
        Choices:["Super","More Sause","No Cheese","Small size"]
    }
    getClasses(){
        return (this.state.Count===0||this.state.Count>10)? 'badge bg-warning m-2': 'badge bg-primary m-2'
    }
    ClickHandler = (num)=>{    //  arrow function is used to unbind this
      this.setState({Count:this.state.Count+num});
     }  
        render (){
        return ( 
        <div>
            {this.props.children}
            <img src={this.state.logoUrl}></img>
            <span className='m-2' style={{color:"red",
                fontSize:"20px",
            }}>{this.state.Name}</span>
            <span className={this.getClasses()}>{this.state.Count}</span>
            <button onClick={()=>{
                this.ClickHandler(1);
            }} className='btn btn-primary btn-sm'>Inc</button>
            {this.state.Choices.length===0 && <h4>No Choices Available</h4>}  {/*Here if cities array is empty it will return last true val*/}
            <ul>
               { this.state.Choices.map(city=>(
                <li key={city}>{city}</li>
               ))}
            </ul>
        </div>
    );
    }
}
// in class component styles are created as objects like line 13.
// classes names be stored in variables
// attributes and values are stored in state function
// as react compare the  virtual DOM with Real Dom so we need to add a key to each element in our list
// as it is known we cannot call the function inside onClick or onEvent so we can create a function inside the onClick
// and inside it call the function with the wanted arguments see line 24 



// Function Component
/*const Product = ()=>{
    return (<h1>Hello From first react Product !</h1>)
}*/
export default Product;