import React,{Component} from "react";
import Cad from "./Cad";
import infoQimma from "./infoQimma";
import infoTamiuoz from "./infoTamiuoz";
import infoReciver from "./ReciverInfo";

import './App.css'
import Topic from "./Topic";
class Products extends Component{
    constructor(){
        super();
        this.state={
            infoQ: infoQimma,
            infoT: infoTamiuoz,
            InfoR: infoReciver
        }
    }
    mapping(x){
        const items=x.map(item => <Cad 
            image={process.env.PUBLIC_URL + item.image}
            description={item.description}
            price={item.price}
            ref={item.ref}
        />)
        return items
    }
    render(){
        return(
            <div className="products">
    <hr style={{ border: 'none', height: '2px', backgroundColor: '#333', marginBottom: '20px' }} />
          <Topic name="تجديد باقات قمه " />
    
<div style={{display:'flex', flexWrap:'wrap' }} className="container ">
{this.mapping(this.state.infoQ)}</div>
<hr style={{ border: 'none', height: '2px', backgroundColor: '#333', marginBottom: '20px' }} />

<Topic name="تجديد اشتراك التميز " />

<div style={{display:'flex', flexWrap:'wrap' }} className="container ">
{this.mapping(this.state.infoT)}</div>
<hr style={{ border: 'none', height: '2px', backgroundColor: '#333', marginBottom: '20px' }} />

<Topic name="رسيفرات بي ان  " />

<div style={{display:'flex', flexWrap:'wrap' }} className="container ">
{this.mapping(this.state.InfoR)}</div>
</div>
        );
    }
}
export default Products
 