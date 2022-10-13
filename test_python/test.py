import requests

payload = {'login': 'testPython'}

response = requests.post('http://localhost:5000/api/account', data = payload)
