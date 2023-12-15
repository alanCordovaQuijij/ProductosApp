import { createContext, useEffect, useState } from "react";
import { Producto, ProductsResponse } from "../interfaces/appInterfaces";
import cafeApi from "../api/cafeApi";

type ProductsContextProps = {
    products: Producto[];
    loadProducts: () => Promise<void>;
    addProduct: (categoryId: string, productName: string) => Promise<void>;
    updateProduct: (categoryId: string, productName: string) => Promise<void>;
    deleteProduct: (categoryId: string, productName: string) => Promise<void>;
    loadProductById: (id:string) => Promise<Producto>;
    uploadImage: (data: any, id: string)=> Promise<void>;
}



export const ProductsContext = createContext({} as ProductsContextProps);


export const ProductsProvider = ({children} : any) => {

    const [products, setProducts] = useState<Producto[]>([]);

    useEffect(() => {
       loadProducts();
    }, [])
    


    const loadProducts = async () => {
        const resp = await cafeApi.get<ProductsResponse>('/productos?limite=50');
        //setProducts([...products, ...resp.data.productos]);
        setProducts([ ...resp.data.productos]);

        //console.log('Lista Productos:', JSON.stringify(resp.data.productos));
    };

    const addProduct = async (categoryId: string, productName: string) => {

    };

    const updateProduct = async (categoryId: string, productName: string) => {

    };

    const deleteProduct = async (categoryId: string, productName: string) => {

    };

    const loadProductById = async (id: string) : Promise<Producto> => {
        const resp = await cafeApi.get<Producto>(`productos/${id}`);
        return resp.data
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