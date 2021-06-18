package com.cheatsheets.design.patterns;

import com.cheatsheets.design.patterns.factory.AProduct;
import com.cheatsheets.design.patterns.factory.ProductFactory;

/**
 * Hello world!
 *
 */
public class App {
    public static void main(String[] args) {
        int[] inputs = new int[] { 1, 2, 3, 4, 5 };
        AProduct a = ProductFactory.createProduct("A", inputs);
        AProduct b = ProductFactory.createProduct("B", inputs);

        System.out.println(a.getResult());
        System.out.println(b.getResult());
    }
}
