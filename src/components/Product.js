import {useState} from 'react'

const Product = ({product, onDelete, updateQuant}) => {
/*     const UpdateQuant = ({ updateQuant }) =>
    {
        const[name, setName]= useState(product.name)
        const[description, setDescription]=useState(product.description)
        const [quanity, setQuanity] = useState(product.quanity)
    } */
    const [quanity, setQuanity] = useState(product.quanity)
    return (
        <>
            <div className='row'>
            <div className='col-xs-2'><img className='img-responsive' alt='productimg' src='http://placehold.it/100x70'/>
            </div>
            <div className='col-xs-4'>
                <h4 className='product-name'><strong>{product.name}</strong></h4><h4><small>{product.description}</small></h4>
            </div>
            <div className='col-xs-6'>
                <div className='col-xs-6 text-right'>
                    <h6><strong>${product.price} <span className='text-muted'>x</span></strong></h6>
                </div>
                <div className='col-xs-4'>
                    <input 
                        type='text'  
                        className='form-control input-sm' 
                        value={quanity}
                        onChange={(e) => setQuanity(e.target.value)}
                    />
                </div>
                <div className='col-xs-2'>
                    <button type='button' className='btn btn-link btn-xs' onClick={() => onDelete(product.id)}>
                        <span className='glyphicon glyphicon-trash'> </span>
                    </button>
                </div>
            </div>
            </div>
            <hr/>
            
        </>
    )
}

export default Product
