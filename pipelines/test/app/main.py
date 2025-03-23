from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return "Hello, World!"

@app.route('/process_job', methods=['POST'])
def process_job():
    data = request.get_json()
    print(data)
    #with open('./log.txt', 'a') as log_file:
    #    log_file.write(f"{data}\n")
    return jsonify({"status": "success", "received": data}), 200

if __name__ == '__main__':
    app.run(debug=True)
