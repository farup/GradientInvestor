from flask import Blueprint, request, jsonify
from apiCall import get_market_status, get_stock, get_stock_fin, historical_close
import json

views = Blueprint(__name__, "views")


@views.route("/market")
def market():
    data = get_market_status()
    print("hallo")
    print(data)
    return get_market_status()

# http://localhost:5000/stock?ticker=GOOGL


@views.route("/stock", methods=['GET'])
def stock():
    ticker = request.args.get('ticker')
    print("-------------------------------", ticker)
    data = get_stock(ticker)
    print(data)
    return data


@views.route("/historical",  methods=["GET"])
def historical():
    ticker = request.args.get('ticker')
    period = request.args.get('periode')
    return historical_close(ticker, period)


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
