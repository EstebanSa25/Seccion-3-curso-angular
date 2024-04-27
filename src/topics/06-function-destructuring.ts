export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0,
};

const Tablet: Product = {
    description: 'Ipad Air',
    price: 250.0,
};

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export const taxCalculation = ({
    tax,
    products,
}: TaxCalculationOptions): [number, number] => {
    let total: number = 0;
    products.forEach(({ price }: Product) => {
        total += price;
    });
    return [total, total * tax];
};

const shoppingCart: Product[] = [phone, Tablet];
const tax: number = 0.15;

const [total, taxAmount] = taxCalculation({ tax, products: shoppingCart });
// console.log(`Total: ${total}`);
// console.log(`Tax: ${taxAmount}`);
