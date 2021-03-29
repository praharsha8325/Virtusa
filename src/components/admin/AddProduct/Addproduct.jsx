import { useState, state, Component } from 'react'
import React from 'react'

class Addproduct extends Component {
    render() {
        return (
            <div   align = "center " id="addMobileBody"> 
            <form>
                <button style={{ backgroundColor: '#99FF99' }}><h3> ADD A NEW PRODUCT </h3></button><br/><br/>
                <input type="text" id="mobileName" placeholder="Product Name"  required/><br/><br/>
                <input type="number" id="mobilePrice" placeholder="Product Price" required/><br/><br/>
                <input type="text" id="mobileDescription" placeholder="Product Description" required/><br/><br/>
                <input type="text" id="mobileImageURL" placeholder="Image URL" required/><br/><br/>
                <input type="text" id="mobileQuantity" placeholder="Product" required/><br/><br/>
                <input style={{ backgroundColor: '#99FF99' }} type="submit" id="addMobileButton"  value="ADD"/> <br/>
                </form>
            </div>
        )
    }
    
}

export default Addproduct
