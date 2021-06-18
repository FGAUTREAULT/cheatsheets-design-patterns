package com.cheatsheets.design.patterns.factory;

import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class EmptyProduct extends AProduct {
    @Override
    public String computeOperation(int[] args) {
        String result = IntStream.of(args).mapToObj(i -> String.valueOf(i)).collect(Collectors.joining(", "));
        return String.format("Not product could be created with type %s and args %s", this.getType(), result);
    }
}
