import {AProduct, ProductFactory} from './product.service';

export function show(): void {
  const args: Number[] = [1, 2, 3, 4, 5];
  const a: AProduct = ProductFactory.createProduct('A', args);
  const b: AProduct = ProductFactory.createProduct('B', args);

  console.log(a.result);
  console.log(b.result);
}

show();
