import { useProducts } from '../product.store'
import { ProductItem } from './product-item'

export const ProductList = () => {
    const products = useProducts()
    
    return (
        <ul>
            {products.map(p => (
                <ProductItem p={p} key={p.id} />
            ))}
        </ul>
    )
}
