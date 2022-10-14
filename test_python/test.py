import requests

payload = {'login': 'testPython'}
payload2 = {'login': 'testPython', 'subscribers': ['hui']}

# response = requests.post('http://localhost:5000/api/account', data = payload)
response2 = requests.post('http://localhost:5000/api/subscribers', data = payload2)
