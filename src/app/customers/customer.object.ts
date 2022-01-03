
export interface Customer{
    id: number;
    name: string;
  age: number;
  imageUrl: string;
  description: string;
  gender:string;
}

export const CUSTOMERS: Customer[] = [
    { id: 1,
    name: 'Solomon', 
    imageUrl: "/../../assets/aa.png",  
    age: 9,        
    description:"id 1",
    gender:'Male'
    },  { id: 2,
        name: 'Abel', 
        imageUrl: "/../../assets/aa.png",  
        age: 50,        
        description:"id 2",
        gender:'Male'
        },
        { id: 3,
            name: 'Hirut', 
            imageUrl: "/../../assets/aa.png",  
            age: 10,  
            gender:'Female',      
            description:"id 4"
            }
];
