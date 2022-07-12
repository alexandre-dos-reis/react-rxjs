import { ChangeEvent, FormEvent, useState } from 'react'
import { addProduct } from 'src/product/product.store'
import { NewProduct, Product } from 'src/product/product.type'

export const ProductAdd = () => {
    const emptyProduct: NewProduct = {
        title: '',
        category: '',
        description: '',
        image: '',
        price: 0,
        isSold: false,
        rating: {
            count: 0,
            rate: 0,
        },
    }

    const [product, setProduct] = useState(emptyProduct)

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        addProduct(product)
        setProduct(emptyProduct)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input name="title" type="text" value={product.title} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    )
}
