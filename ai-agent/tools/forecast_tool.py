import requests

FORECAST_API = "http://16.170.108.182:8001/forecast/all"

def get_forecast(product_name):

    try:
        response = requests.get(
            FORECAST_API,
            headers={"accept": "application/json"}
        )

        data = response.json()

        # find product
        for item in data:

            if product_name.lower() in item["name"].lower():

                forecast = item["predicted_requirement"]

                return f"Forecast demand for {item['name']} is {forecast}"

        return "Product not found in forecast list"

    except Exception as e:

        return "Forecast service error"