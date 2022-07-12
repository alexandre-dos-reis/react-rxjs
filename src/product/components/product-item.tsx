import React, { useState } from 'react'
import { deleteProduct, toggleIsSoldProduct } from '../product.store'
import { Product } from '../product.type'
import { ProductAdd } from './product-add'
import { ProductEdit } from './product-edit'

interface ProductItemProps {
    p: Product
}

export const ProductItem = ({ p }: ProductItemProps) => {
    const [isEditing, setIsEditing] = useState(false)

    const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setIsEditing(!isEditing)
    }

    return (
        <li className="grid">
            {isEditing ? (
                <>
                    <ProductEdit p={p} setIsEditing={setIsEditing}/>
                </>
            ) : (
                <article>
                    <header>
                        <h2>{p.title}</h2>
                        <p>{p.description}</p>
                        <img
                            src={p.image}
                            alt={p.title}
                            style={{
                                width: '150px',
                            }}
                        />
                    </header>
                    <footer className="grid">
                        <fieldset>
                            <legend>Is sold ?</legend>
                            <input
                                type="checkbox"
                                role="switch"
                                onChange={() => toggleIsSoldProduct(p)}
                            />
                        </fieldset>
                        <button onClick={handleEdit}>Edit</button>
                        <button onClick={() => deleteProduct(p)}>Delete</button>
                    </footer>
                </article>
            )}
        </li>
    )
}
