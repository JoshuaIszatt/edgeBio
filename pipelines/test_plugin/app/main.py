from config import app
import routes

if __name__ == '__main__':
    print(f"URL: http://{app.config['HOST']}:{app.config['PORT']}")
    app.run(host=app.config['HOST'], port=int(app.config['PORT']))
