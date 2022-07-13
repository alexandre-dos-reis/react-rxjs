import { useObservableState } from 'observable-hooks'
import { useEffect, useState } from 'react'
import { BehaviorSubject, findIndex } from 'rxjs'
import { NewProduct, Product } from 'src/product/product.type'
import { callApiProducts } from './product.api'

const products$ = new BehaviorSubject<Product[]>([])

export const fetchProducts = (): void => {
    callApiProducts().then(px => products$.next(products$.getValue().concat(px)))
}

export const emptyProducts = (): void => {
    products$.next([])
}

export const addProduct = (newProduct: NewProduct): void => {
    const product: Product = {
        ...newProduct,
        id: Date.now(),
    }
    products$.next([...products$.value, product])
}

export const updateProduct = (product: Product): void => {
    products$.next(products$.value.map(p => (p.id === product.id ? product : p)))
}

export const deleteProduct = (product: Product): void => {
    products$.next(products$.value.filter(p => p.id !== product.id))
}

export const toggleIsSoldProduct = (product: Product): void => {
    products$.next(
        products$.value.map(p =>
            p.id === product.id ? { ...product, isSold: !product.isSold } : p
        )
    )
}

export const useProducts = () => useObservableState(products$)
