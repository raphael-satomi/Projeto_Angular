export interface Product{
    id?: number
    name: string
    price: number | null
    file?: any
    description?: string
    categories?: Array<[]>
}
