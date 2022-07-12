import React, { ChangeEvent, useState, MouseEvent, FormEvent } from 'react'
import { updateProduct } from '../product.store'
import { Product } from '../product.type'

interface ProductEditProps {
    p: Product
    setIsEditing: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProductEdit = ({ p, setIsEditing }: ProductEditProps) => {
    const [product, setProduct] = useState<Product>(p)

    const handleCancel = (e: MouseEvent<HTMLButtonElement>) => {
        setIsEditing(state => !state)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value,
        })
    }

    const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        updateProduct(product)
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text" value={product.title} onChange={handleChange} />
            <button type="submit">Update</button>
            <button onClick={handleCancel}>Cancel</button>
        </form>
    )
}
