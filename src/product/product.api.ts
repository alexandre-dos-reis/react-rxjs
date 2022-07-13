import { Product } from 'src/product/product.type'

export const callApiProducts = async (): Promise<Product[]> => {
    return await fetch('/products.json')
        .then(res => res.json())
        .then(data => data)
}

export const updateApiProduct = async (product: Product): Promise<Product> => {
    return new Promise<Product>(() => {})
}

export const deleteApiProduct = async (product: Product): Promise<boolean> => {
    return new Promise<boolean>(() => {})
}
