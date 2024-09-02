import React, { Component } from 'react';
import Product from './product'
class ShoppingCart extends Component{
    state={
        Products:[
            {Name:"Burger" , id:1,count:3},
            {Name:"Pizza" , id:2,count:5},
            {Name:"HotDog", id:3,count:6},
            {Name:"IceCream", id:4,count:2}
        ]
    }
    render(){
       return( 
        <>
       <h1>Shopping Cart</h1>
      { this.state.Products.map(prod=>(
        <Product key={prod.id} Name={prod.Name} > <h3>{prod.id}</h3> </Product>
      ))}
       </>
    )
    }
}
export default ShoppingCart;

// we use <> </> as the parent or root tag and put our components inside it
// we can pass data to called tag by setting the attribute and then data
// it will be stored in tag_file.props.attrName

// also we can pass children tags and don't write it self closed.
// the whole children tags will be passed into .props.children