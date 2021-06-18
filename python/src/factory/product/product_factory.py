from __future__ import annotations
from abc import ABC, abstractmethod
import functools

"""Follow PEP 8, sometimes spelled PEP8 or PEP-8. It is a document that provides guidelines and best practices on how to write Python code. 
It was written in 2001 by Guido van Rossum, Barry Warsaw, and Nick Coghlan. 
The primary focus of PEP 8 is to improve the readability and consistency of Python code.
https://www.python.org/dev/peps/pep-0008/
"""


class ProductFactory(ABC):
    """The Creator class declares the factory method that is supposed to return an
    object of a Product class. The Creator's subclasses usually provide the
    implementation of this method.
    """

    def some_operation(type, args) -> Product:
        """Also note that, despite its name, the Creator's primary responsibility
        is not creating products. Usually, it contains some core business logic
        that relies on Product objects, returned by the factory method.
        Subclasses can indirectly change that business logic by overriding the
        factory method and returning a different type of product from it.
        """

        if type == "1":
            product = ConcreteProduct1(args)
        elif type == "2":
            product = ConcreteProduct2(args)
        elif type == "3":
            product = ConcreteProduct2(args)

        # Now, use the product.
        result = product.operation()
        print(
            f"Creator: The same creator's code has just worked for {product.__class__.__name__} with operation result {result}"
        )
        product.set_result(result)

        return product


class Product(ABC):
    """The Product interface declares the operations that all concrete products
    must implement.
    """

    def __init__(self, args):
        self._args = args
        pass

    @abstractmethod
    def operation(self) -> str:
        pass

    def get_result(self):
        return self.__result

    def set_result(self, result):
        self.__result = result
        pass


"""Concrete Products provide various implementations of the Product interface.
"""


class ConcreteProduct1(Product):
    def operation(self) -> str:
        print(f"ConcreteProduct1: Calculating the sum of arguments...")
        return sum(self._args)


class ConcreteProduct2(Product):
    def operation(self) -> str:
        print(f"ConcreteProduct2: Calculating the substraction of arguments...")
        return functools.reduce(lambda a, b: a - b, self._args)


class ConcreteProduct3(Product):
    def operation(self) -> str:
        print(f"ConcreteProduct3: Calculating the minimum odd number from arguments...")
        return min(filter(lambda x: x % 2 != 0, self._args))
