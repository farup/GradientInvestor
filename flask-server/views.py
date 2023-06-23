from flask import Blueprint, request, jsonify
from apiCall import get_market_status, get_stock, get_stock_fin, historical
import json

views = Blueprint(__name__, "views")


@views.route("/market")
def market():
    data = get_market_status()
    print("hallo")
    print(data)
    return get_market_status()


@views.route("/stock")
def stock():
    data = get_stock('aapl')
    print(data)
    return data


@views.route("/stock_fin")
def stock_fin():
    data = get_stock_fin('aapl')
    return data


@views.route("/profile/")
def progile():
    args = request.args
    name = args.get("name")
    return f"Velkommen {name}"


@views.route("/hist")
def hist():
    return historical("5d")


@views.route("/json")
def get_json():
    return jsonify([
        {
            'name': 'tim', 'coolness': 0
        },
        {
            'name': 'terje', 'coolness': 10
        }

    ])
