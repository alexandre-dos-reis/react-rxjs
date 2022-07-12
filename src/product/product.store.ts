import { useEffect, useState } from 'react'
import { BehaviorSubject, findIndex } from 'rxjs'
import { NewProduct, Product } from 'src/product/product.type'
import { callApiProducts } from './product.api'

let products: Product[] = []
const products$ = new BehaviorSubject<Product[]>(products)

export const fetchProducts = (): void => {
    callApiProducts().then(px => {
        products = px
        products$.next(products)
    })
}

export const useProducts = (): Product[] => {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        const sub = products$.subscribe(newProducts => setProducts([...newProducts]))
        return () => sub.unsubscribe()
    }, [])
    return products
}

export const addProduct = (product: NewProduct): void => {
    let maxId: number

    if (products.length === 0) {
        maxId = 0
    } else {
        maxId = Math.max.apply(
            null,
            products.map(p => p.id)
        )
    }
    products.push({
        ...product,
        id: maxId + 1,
    })
    products$.next(products)
}

export const updateProducts = (product: Product): void => {
    products[products.findIndex(p => p.id === product.id)] = product
    products$.next(products)
}

export const deleteProduct = (product: Product): void => {
    products.splice(
        products.findIndex(p => p.id === product.id),
        1
    )
    products$.next(products)
}

export const toggleIsSoldProduct = (product: Product): void => {
    products[products.findIndex(p => p.id === product.id)].isSold = !product.isSold
    products$.next(products)
}
