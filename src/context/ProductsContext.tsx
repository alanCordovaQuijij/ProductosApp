import { createContext, useState } from "react";
import { Producto } from "../interfaces/appInterfaces";

type ProductsContextProps = {
    products: Producto[];
    loadProducts: () => Promise<void>;
    addProduct: (categoryId: string, productName: string) => Promise<void>;
    updateProduct: (categoryId: string, productName: string) => Promise<void>;
    deleteProduct: (categoryId: string, productName: string) => Promise<void>;
    loadProductById: (categoryId: string, productName: string) => Promise<Producto>;
    uploadImage: (data: any, id: string)=> Promise<void>;
}



export const ProductsContext = createContext({} as ProductsContextProps);


export const ProductsProvider = ({children} : any) => {

    const [products, setProducts] = useState<Producto[]>([]);

    const loadProducts = async () => {

    };

    const addProduct = async (categoryId: string, productName: string) => {

    };

    const updateProduct = async (categoryId: string, productName: string) => {

    };

    const deleteProduct = async (categoryId: string, productName: string) => {

    };

    const loadProductById =async (categoryId: string, productName: string) => {
        throw new Error ('No implementado')
    };

    const uploadImage = async (data: any, id: string)=> {

    };

    return(
        <ProductsContext.Provider value={{
            products,
            loadProducts,
            addProduct,
            updateProduct,
            deleteProduct,
            loadProductById,
            uploadImage 
        }}

        >
            {children}
        </ProductsContext.Provider>
    )

}