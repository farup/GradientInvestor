from datetime import datetime, date
import pandas as pd
import pandas_datareader as pdr
import yfinance as yf
import time

start_date = pd.to_datetime('2022-01-01')
end_date = pd.to_datetime('2022-12-31')


def get_market_status():
    time.sleep(1)
    market = yf.Ticker('^GSPC')  # ^GSPC represents the S&P 500 index
    data = market.history(period='1d')
    data.to_csv('market.csv', index=False)
    last_close = data['Close'][-1]
    current_price = data['Close'][-1]

    if current_price > last_close:
        return 'Market is up'
    elif current_price < last_close:
        return 'Market is down'
    else:
        return 'Market is unchanged'


def get_stock(ticker):
    time.sleep(1)
    stock = yf.Ticker(ticker)  # ^GSPC represents the S&P 500 index
    return stock.info


def get_stock_fin(ticker):
    time.sleep(1)
    info = yf.Ticker(ticker)  # ^GSPC represents the S&P 500 index
    return info.financials


def read_csv(filename):
    data = pd.read_csv(filename)
    return data.to_json()
# Call the function to get the market status
# status = get_market_status()


def historical_close(ticker, period):
    stock = yf.Ticker(ticker)
    hist = stock.history(period=period)
    return hist["Close"].to_json()
