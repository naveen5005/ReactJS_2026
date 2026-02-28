import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddProduct, handleDeleteProduct, handleUpdateProduct } from '../store/action'

class Products extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        user: {
          id: '',
          prodName:'',
          prodDes: ''
        },
        isEdit : null
      }
    }

    handleChange = (e) => {
      // const newUser = {...this.state.user};
      // newUser[e.target.name] = e.target.value;
      this.setState(prev =>({
        user:{
          ...prev.user,
        [e.target.name] : e.target.value
        }
      }));  
    }
    handleEdit = (prod) => {
      this.setState({isEdit:prod.id,user:{...prod}})
    }
    clearFormValues = () => {
      this.setState({user :{
          id: '',
          prodName:'',
          prodDes: ''
      }})
    }
    handleAdd = () => {
      const {products} = this.props
      const nextId = products[products.length-1].id+1;
      const newUser = {...this.state.user,id:nextId};
      this.props.dispatch(handleAddProduct(newUser));
      this.clearFormValues();
    }
    handleUpdate = () => {
      this.props.dispatch(handleUpdateProduct(this.state.user));
      this.setState({isEdit:null})
      this.clearFormValues();
    }
    handleDelete = (prod) => {
      this.props.dispatch(handleDeleteProduct(prod))
    }
  render() {
    const {products} = this.props;
    const {prodName,prodDes} = this.state.user;
    return (
      <div>
        <form>
          <label>Product Name : </label>
          <input type="text" name="prodName" value={prodName} onChange={this.handleChange} /> <br />
          <label>Product Description : </label>
          <input type="text" name="prodDes" value={prodDes} onChange={this.handleChange}/> <br />
          {
            this.state.isEdit === null ? <button type="button" onClick={this.handleAdd}>Add</button>
            : <button type="button" onClick={this.handleUpdate}>Update</button>
          }
        </form> <br /><br />
        <table border={1}> 
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Product Description</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map((prod)=>(
                <tr key={prod.id}>
                  <td>{prod.id}</td>
                  <td>{prod.prodName}</td>
                  <td>{prod.prodDes}</td>
                  <td>
                    <button type="button" onClick={()=>this.handleEdit(prod)}>edit</button>
                  </td>
                  <td>
                    <button type="button" onClick={()=>this.handleDelete(prod)}>delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state){
    return {
        products: state.productDetails.products
    }
}    
export default connect(mapStateToProps)(Products)