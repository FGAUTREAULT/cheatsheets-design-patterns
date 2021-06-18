package com.cheatsheets.design.patterns.factory;

import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class ConcreteProductB extends AProduct {

    @Override
    public String computeOperation(int[] args) {
        String result = IntStream.of(args).mapToObj(i -> String.valueOf(i)).collect(Collectors.joining(", "));
        return String.format("Method of ConcreteProductB ran with args %s", result);
    }

}
