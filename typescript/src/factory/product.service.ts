export interface IProduct {
  operation(args: Number[]): String;
}

export type PRODUCT_TYPE = 'A' | 'B' | 'EMPTY';

export abstract class AProduct implements IProduct {
  private _type: PRODUCT_TYPE = 'EMPTY';
  private _result: String = '';

  public get type(): PRODUCT_TYPE {
    return this._type;
  }
  public set type(value: PRODUCT_TYPE) {
    this._type = value;
  }
  public get result(): String {
    return this._result;
  }
  public set result(value: String) {
    this._result = value;
  }
  abstract operation(args: Number[]): String;
}

export class EmptyProduct extends AProduct {
  operation = (args: Number[]) => {
    return `Not product could be created with type ${
      this.result
    } and args ${args.join(', ')}`;
  };
}

export class ConcreteProductA extends AProduct {
  operation = (args: Number[]) => {
    return `Method of ConcreteProductA ran with args ${args.join(', ')}`;
  };
}

export class ConcreteProductB extends AProduct {
  operation = (args: Number[]) => {
    return `Method of ConcreteProductB ran with args ${args.join(', ')}`;
  };
}

/**
 * Factory is not only a way the create objects but to run also a define construction pattern
 */
export class ProductFactory {
  public static createProduct(type: PRODUCT_TYPE, args: Number[]): AProduct {
    let product = new EmptyProduct();
    if (type === 'A') {
      product = new ConcreteProductA();
    } else if (type === 'B') {
      product = new ConcreteProductB();
    }
    product.type = type;
    product.result = product.operation(args);
    return product;
  }
}
