import { useProducts, fetchProducts, emptyProducts } from '../product.store'

export const ProductHeader = () => {
    const products = useProducts()
    return (
        <>
            <div>Total : {products.length}</div>
            <div>Total sold : {products.filter(p => p.isSold === true).length}</div>
            <button onClick={() => fetchProducts()}>Fetch products</button>
            <button onClick={() => emptyProducts()}>Empty products</button>
        </>
    )
}
