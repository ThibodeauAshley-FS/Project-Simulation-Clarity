import { useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Link} from 'react-router-dom'
import Products from './components/Products'
import Payment from './components/Payment'


function App() {
  //Initial Product list
  const [products, setProducts] = useState ([
    {
      id: 1,
      name: 'Product Name',
      description:'Product description',
      price: 25.00,
      quanity: 2

    },
    {
      id: 2,
      name: 'Product Name' ,
      description: 'Product description',
      price: 30.00,
      quanity:1
    
    }
    
    ])
  //Subtotal
  function subTotal({products}){

    const prices = products.map((product) => product.price * product.quanity);
    const sum = prices.length > 0 ? (prices.reduce((total, amount) => total + amount)) : (0)
    return(
      (Math.round(sum * 100) / 100).toFixed(2)
    )

  }
    
//update quanity
const updateQuant = (product) => {
  console.log();
}

  // Add Product on Continue
  const addProduct = () => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const name = 'Product Name' ;
    const description = 'Product description';
    const price = 25.00;
    const quanity = 1;
    const newProduct = {id, name, description, price, quanity};
    setProducts([...products, newProduct])
  }
  //Delete Product on Trash Can
  const deleteProduct = (id) => {
    setProducts(products.filter((products) => products.id !== id))
  }




  return (
    <Router>
    <div className='container'>
    <Route
    path='/'
    exact
    render={(props) => (
      <div className='row'>
      <div className='col-xs-8'>
        <div className='panel panel-info'>
        <div className='panel-heading'>
          <div className='panel-title'>
          <div className='row'>
            <div className='col-xs-6'>
            <h5><span className='glyphicon glyphicon-shopping-cart'></span> Shopping Cart</h5>
            </div>
            <div className='col-xs-6'>
            <button  type='button' className='btn btn-primary btn-sm btn-block' onClick={addProduct}>
              <span className='glyphicon glyphicon-share-alt'></span> Continue shopping
            </button>
            </div>
          </div>
          </div>
        </div>
        <div className='panel-body'>
            {products.length > 0 ? (<Products products= {products} onDelete={deleteProduct} updateQuant={updateQuant}/>) : ('Your Shopping Cart is Empty')}
          <div className='row'>
          <div className='text-center'>
            <div className='col-xs-9'>
            <h6 className='text-right'>Added items?</h6>
            </div>
            <div className='col-xs-3'>
            <button type='button' className='btn btn-default btn-sm btn-block' >
              Update cart
            </button>
            </div>
          </div>
          </div>
        </div>
        <div className='panel-footer'>
          <div className='row text-center'>
          <div className='col-xs-9'>
            <h4 className='text-right'>Total <strong>${subTotal({products})}</strong></h4>
          </div>
          <div className='col-xs-3'>
           
            <Link to='/Payment' type='button' link={products} className='btn btn-success btn-block'>
            Checkout
            </Link>
          </div>
          </div>
        </div>
        </div>
      </div>
      </div>
                    )}/>
    <Route path='/Payment' component={Payment}  />
    </div>
    </Router>
  );
}

export default App;