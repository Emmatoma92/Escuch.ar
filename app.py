from flask import Flask
from flask import url_for
from flask import render_template
from flask import request
import csv

app = Flask(__name__)

class Usuario:
    def __init__(self, nombre, mail, contrasena, gustos) -> None:
        self.nombre = nombre
        self.mail = mail
        self.contrasena = contrasena
        self.gustos = gustos

    def write(self):
        return ({"nombre": self.nombre,
                "mail": self.mail,
                "contrasena": self.contrasena,
                "gustos": self.gustos})

@app.route("/")
def index():
    return render_template('index.html')

@app.route("/disco/<disco>")
def disco(disco=None):
    url = disco
    return render_template(url)

@app.post("/registro-exitoso")
def registrar_usuario():
    if request.method == "POST":
        nombre = request.form['nombre']
        mail = request.form['email']
        contrasena = request.form['contraseña']
        gustos = request.form['genprefer']

        usuario = Usuario(nombre, mail, contrasena, gustos)

    usuario_datos = usuario.write()

    with open('./csv/usuarios.csv', 'a', newline='') as csvfile:
        writer = csv.writer(csvfile)
        writer.writerow([usuario_datos['nombre'], 
                         usuario_datos['mail'], 
                         usuario_datos['contrasena'], 
                         usuario_datos['gustos']])

        csvfile.close()

    return render_template('registrarse.html')


@app.route("/registrarse", methods=['POST', 'GET'])
def registrarse():
    return render_template('registrarse.html')


@app.route("/resenas")
def resenas():
    return render_template('resenas.html')

@app.route("/discos")
def discos():
    return render_template('discos.html')