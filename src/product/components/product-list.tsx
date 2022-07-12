import { useEffect } from 'react'
import { fetchProducts, useProducts } from '../product.store'
import { ProductItem } from './product-item'

export const ProductList = () => {
    const products = useProducts()

    useEffect(() => {
        fetchProducts()
    }, [])

    return (
        <ul>
            {products.map(p => (
                <ProductItem p={p} key={p.id} />
            ))}
        </ul>
    )
}
