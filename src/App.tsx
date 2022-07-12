import { ProductAdd, ProductHeader, ProductList } from './product/components'

function App() {
    return (
        <>
            <div>
                <ProductHeader />
                <ProductAdd />
            </div>
            <ProductList />
        </>
    )
}

export default App
