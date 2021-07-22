import Product from './Product'

const Products = ({ products, onDelete, updateQuant }) => {
//list array of inidividual products
    return (
        <>
            {products.map((product) => (
                <Product key={product.id} product={product}  onDelete={onDelete}/>
            ) )}
            
        </>
    )
}

export default Products
