package com.cheatsheets.design.patterns.factory;

public class ProductFactory {
    public static AProduct createProduct(final String type, final int[] args) {
        AProduct product = new EmptyProduct();
        if ("A".equals(type)) {
            product = new ConcreteProductA();
        } else if ("B".equals(type)) {
            product = new ConcreteProductB();
        }
        product.setType(type);
        product.setResult(product.computeOperation(args));
        return product;
    }
}
