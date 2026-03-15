def check_inventory(product):

    inventory = {
        "gloves": 120,
        "masks": 300,
        "syringes": 80
    }

    stock = inventory.get(product.lower(),"0")

    return f"{product} stock level is {stock}"