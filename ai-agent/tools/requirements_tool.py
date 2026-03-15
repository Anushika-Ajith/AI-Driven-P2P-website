import requests

REQ_API = "http://16.170.108.182:8001/forecast/requirements"

def get_requirements(product_name):

    try:
        response = requests.get(
            REQ_API,
            headers={"accept": "application/json"}
        )

        data = response.json()

        for item in data:

            if product_name.lower() in item["name"].lower():

                return (
                    f"{item['name']} needs procurement.\n"
                    f"Forecast usage: {item['forecasted_usage']}\n"
                    f"Current stock: {item['current_stock']}\n"
                    f"Required to purchase: {item['required_to_purchase']}"
                )

        return "No purchase requirement found"

    except:

        return "Requirement API error"