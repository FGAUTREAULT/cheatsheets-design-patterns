export interface Product {
  operation(param?: any): void;
}

export class DefaultProduct implements Product {
  private _type: String = '';
  private _result: String = '';
  public get type(): String {
    return this._type;
  }
  public set type(value: String) {
    this._type = value;
  }
  public get result(): String {
    return this._result;
  }
  public set result(value: String) {
    this._result = value;
  }
  operation = (param?: any) => {
    return 'Method of ConcreteProductA';
  };
}

export class ConcreteProductA extends DefaultProduct {
  operation = (param?: any) => {
    return 'Method of ConcreteProductA';
  };
}

export class ConcreteProductB implements Product {
  operation = (param?: any) => {
    return 'Method of ConcreteProductB';
  };
}

export class ProductFactory {
  public static createProduct(type: string): Product {
    if (type === 'A') {
      return new ConcreteProductA();
    } else if (type === 'B') {
      return new ConcreteProductB();
    }
    return new DefaultProduct();
  }
}
