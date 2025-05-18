from flask import Flask, render_template, jsonify

app = Flask(__name__)

@app.route("/")
def corretor():
    dados = {
        "nome": "João Corretor",
        "email": "joaocorretor@email.com",
        "imoveis": ["Apartamento no Centro", "Casa com Quintal", "Cobertura Luxuosa"]
    }
    return render_template("corretor.html", dados=dados)

@app.route("/imoveis", methods=["GET"])
def listar_imoveis():
    imoveis = ["Apartamento no Centro", "Casa com Quintal", "Cobertura Luxuosa"]
    return jsonify(imoveis)

if __name__ == "__main__":
    app.run(debug=True)
