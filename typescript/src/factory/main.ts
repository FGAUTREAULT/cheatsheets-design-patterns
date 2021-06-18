import {Product, ProductFactory} from './product.service';

export function show(): void {
  const a: Product = ProductFactory.createProduct('A');
  const b: Product = ProductFactory.createProduct('B');

  console.log(a.operation());
  console.log(b.operation());
}

show();
