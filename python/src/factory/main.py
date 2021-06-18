from product.product_factory import ProductFactory


def hello(name):
    return "Happy testing! " + name


if __name__ == "__main__":
    input = [2, 2, 7, 4, 3, 5, 8]

    print("App: Launched with the ConcreteCreator1.")
    product1 = ProductFactory.some_operation("1", input)
    print(f"App: ConcreteProduct1 result is indeed {product1.get_result()}")
    print("\n")

    print("App: Launched with the ConcreteCreator2.")
    product2 = ProductFactory.some_operation("2", input)
    print(f"App: ConcreteProduct2 result is indeed {product2.get_result()}")
    print("\n")

    print("App: Launched with the ConcreteCreator3.")
    product3 = ProductFactory.some_operation("3", input)
    print(f"App: ConcreteProduct3 result is indeed {product3.get_result()}")
    print("\n")
