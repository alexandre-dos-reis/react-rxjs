import { ChangeEvent, useState, MouseEvent, FormEvent } from 'react'
import { updateProduct } from '../product.store'
import { Product } from '../product.type'

interface ProductEditProps {
    p: Product
    toggleEdit: () => void
}

export const ProductEdit = ({ p, toggleEdit }: ProductEditProps) => {
    const [product, setProduct] = useState<Product>(p)

    const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        toggleEdit()
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setProduct(p => ({
            ...p,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        updateProduct(product)
        toggleEdit()
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" name="title" value={product.title} onChange={handleChange} />
            <button type="submit">Update</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>
    )
}
