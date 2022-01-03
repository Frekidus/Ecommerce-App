
export interface Product{
    id: number;
    name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export const PRODUCTS: Product[] = [
    { id: 1,
    name: 'Nike', 
    imageUrl: "/../../assets/a.jfif",  
    price: 9,        
    description:"id 1"
    },  { id: 2,
        name: 'Puma', 
        imageUrl: "/../../assets/a.jfif",  
        price: 50,        
        description:"id 2"
        },
        { id: 3,
            name: 'Skechers', 
            imageUrl: "/../../assets/a.jfif",  
            price: 10,        
            description:"id"
            }
];
