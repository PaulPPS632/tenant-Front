export interface ProductoRequest {
    nombre: string;
    pn: string;
    descripcion: string;
    stock: number;
    precio: number;
    id_categoriamarca: number;
    id_subcategoria : number;
    garantia_cliente: number;
    garantia_total: number;
}

export interface ProductoResponse {
    id: string;
    nombre: string;
    pn: string;
    descripcion: string;
    stock: number;
    precio: number;
    marca: string;
    categoriamarca: string;
    garantia_cliente: number;
    garantia_total: number;
    cantidad: number;
    imageurl: string[];
}