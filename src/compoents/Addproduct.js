import React from 'react'
import axios from "axios";

class Addproduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: 0,
            name: '',
            productdetails: '',
            quantity: 0,
            price: 0,
            category: "",
            productnameError: '',
            productdetailsError: '',
            productpriceError: '',
            productquantityError: '',
            productcategoryError: '',
            buttonStatus: true,
        }
    }
    addProduct=()=>{
        let productRequestBody = {
            "name": this.state.name,
            "productdetails": this.state.productdetails,
            "quantity": this.state.quantity,
            "price": this.state.price,
            "category": this.state.category
        }
        axios.post('http://localhost:3000/productdetails/', productRequestBody)
                .then(response=>{
                    console.log(response);
                   
                    this.props.history.push('/')
                }, error=>{
                    console.error(error);
                })
    }

    checkValidation(event) {
        console.log(event)
        let productnameError= ''
         let   productdetailsError= ''
          let  productpriceError= ''
          let  productquantityError= ''
          let  productcategoryError= ''
        if (event==='productname' && this.state.name === '') {
            productnameError = 'Product Name  Required'
        }
        else if (event==='productdetails' && (this.state.productdetails === '' || this.state.productdetails.length<10)) {
            productdetailsError='Product details  Required or Product details must above 10 word '
        }
        else if (event==='productprice' && this.state.price === '') {
            productpriceError='Product price  Required'
        } 
        else if (event==='productquantity' && this.state.quantity === '') {
            productquantityError='Product quantity  Required'
        } 
        else if (event==='productcategory' && (this.state.category === '' ||  this.state.category === 'Select option')) {
            productcategoryError='Product category  Required'
        }
        //check for other conditions!
        if (productnameError|| productdetailsError||  productpriceError|| productquantityError ||  productcategoryError) {
           
            this.setState({
                productnameError: productnameError,
                productdetailsError: productdetailsError,
                productpriceError:productpriceError,
                productquantityError:productquantityError,
                productcategoryError:productcategoryError,
                buttonStatus:true
            })

            return false
        }
        this.setState({
            productnameError: '',
            productdetailsError: '',
            productpriceError: '',
            productquantityError: '',
            productcategoryError: '',
            buttonStatus:false
        })
        return true

    }



    getblurName =(event)=>{
        console.log(event.target.value)
        this.setState({ name: event.target.value })
        this.checkValidation('productname');
    }

    getblurproductdetails =(event)=>{
        console.log(event.target.value)
        this.setState({ productdetails: event.target.value })
        this.checkValidation('productdetails');
    }
    getblurPrice =(event)=>{
        console.log(event.target.value)
        this.setState({ price: event.target.value })
        this.checkValidation('productprice');
    }
    getblurquantity =(event)=>{
        console.log(event.target.value)
        this.setState({ quantity: event.target.value })
        this.checkValidation('productquantity');
    }
    getblurcategory =(event)=>{
        console.log(event.target.value)
        this.setState({ category: event.target.value })
        this.checkValidation('productcategory');
    }




    getName = (event) => {
        console.log(event.target.value)
        this.setState({ name: event.target.value })
    }
    getproductdetails = (event) => {   
        console.log(event.target.value)
        this.setState({ productdetails: event.target.value })
    }
    getPrice = (event) => {     
        console.log(event.target.value)
        this.setState({ price: event.target.value })
    }
    getquantity = (event) => {
      
        console.log(event.target.value)
        this.setState({ quantity: event.target.value })
    }
    getcategory = (event) => {
    
        console.log(event.target.value)
        this.setState({ category: event.target.value })
    }
    render() {
        return (
            <form className="form" >
                <h2 >Add Product</h2>
                <br></br>
                <p>Product name</p>
                <input className="input" type="text" id="productname" onChange={this.getName} onBlur={this.getblurName}></input>
                <p className="error">{this.state.productnameError}</p>
                
                <p>Product Description</p>
                <textarea id="productdetails" onChange={this.getproductdetails} value={this.state.productdetails} onBlur={this.getblurproductdetails}> </textarea><br></br>
                <p className="error">{this.state.productdetailsError}</p>

                <p>Price</p>
                <input type="number" className="input" id="productprice" onChange={this.getPrice} onBlur={this.getblurPrice}></input>
                <p className="error">{this.state.productpriceError}</p>

                <p>Quantity</p>
                <input type="number" className="input" id="productquantity" onChange={this.getquantity} onBlur={this.getblurquantity}></input>
                <p className="error">{this.state.productquantityError}</p>

                <p>Categorey</p>
                <select id="productquantity"  className="input" onChange={this.getcategory}  onBlur={this.getblurcategory}>
                    <option id="productcategory">Select option</option>
                    <option id="productcategory">Televison</option>
                    <option id="productcategory">Mobile </option>
                    <option id="productcategory">Furniture</option>
                    <option id="productcategory">Computer Accessories</option>
                </select><br></br>
                <p className="error">{this.state.productcategoryError}</p>

                <button type="button" className="button" onClick={this.addProduct}  disabled={this.state.buttonStatus}>Add</button>
            </form>

        );
    }
}

export default Addproduct;