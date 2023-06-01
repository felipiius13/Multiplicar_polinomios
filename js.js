class Polinomio{
    constructor(lista) {

        // MAIOR TERMO

        var maior = 0
        for(var j = 0; j < lista.length; j++){
            if(lista[j].potencia_de_x > maior){
                maior = lista[j].potencia_de_x
            }
        }
        
        // SIMPLIFICA

        var cont = 0
        var polinomiosimplificado = []
        var numero1 = 0
        while(cont <= maior){
            for(var j = 0; j < lista.length; j++) {
                if(lista[j].potencia_de_x == cont){
                    numero1 += lista[j].numero
                }
            }
            var novo_termo = new TermoDePolinomio(numero1, cont)
            polinomiosimplificado.push(novo_termo)
            cont += 1
            numero1 = 0
        }
 
        // AJUSTA

        var polinomioajustado = []
        var polinomioajustado_invertido = []
        var cont = 0
        while(polinomioajustado.length < polinomiosimplificado.length){
            for(var j = 0; j < polinomiosimplificado.length; j++) {
                if(polinomiosimplificado[j].potencia_de_x == cont) {
                    var novo_termo = new TermoDePolinomio(polinomiosimplificado[j].numero, polinomiosimplificado[j].potencia_de_x)
                    polinomioajustado.push(novo_termo)
                }
            }
            cont += 1
        }
        for(var j = polinomioajustado.length-1; j > -1; j --){
            polinomioajustado_invertido.push(polinomioajustado[j])
        }

        this.lista = polinomioajustado_invertido

    }
    multiplicacao(polinomio_par) {
        var polinomioo1 = this
        var polinomioo2 = polinomio_par
        var novo_polinomio = []
        for(var j = 0; j < polinomioo1.lista.length; j++){
            for(var k = 0; k < polinomioo2.lista.length; k++){
                var novo_termo = new TermoDePolinomio(
                    (polinomioo1.lista[j].numero * polinomioo2.lista[k].numero),
                    (polinomioo1.lista[j].potencia_de_x + polinomioo2.lista[k].potencia_de_x)
                )
                novo_polinomio.push(novo_termo)
            }
        }
        return new Polinomio(novo_polinomio)
    }
    print() {
        var resul = ""
        for(var j = 0; j < this.lista.length; j++){
            if(j != this.lista.length-1){
                if(this.lista[j+1].numero < 0) {
                    if(this.lista[j+1].print() != ""){
                        resul += (this.lista[j].print() + " - ")
                    }
                }
                else {
                    if(this.lista[j+1].print() != ""){
                        resul += (this.lista[j].print() + " - ")
                    }
                }
            } else {
                if(this.lista[j].print() != ""){
                    resul += (this.lista[j].print() + " - ")
                }
            }

        }
        console.log(resul)
    }
    print_retornavel() {
        var resul = ""
        for(var j = 0; j < this.lista.length; j++){
            if(j != this.lista.length-1){
                if(this.lista[j+1].numero < 0) {
                    if(this.lista[j+1].print() != ""){
                        resul += (this.lista[j].print() + " - ")
                    }
                    else {
                        resul += (this.lista[j].print())
                    }
                }
                else {
                    if(this.lista[j+1].print() != ""){
                        resul += (this.lista[j].print() + " + ")
                    }
                    else {
                        resul += (this.lista[j].print())
                    }
                }
            } else {
                resul += (this.lista[j].print())
                
            }

        }
        return (resul)
    }
    maior_termo(){
        var maior = 0
        for(var j = 0; j < this.lista.length; j++){
            if(this.lista[j].potencia_de_x > maior){
                maior = this.lista[j].potencia_de_x
            }
        }
        return maior
    }
    
     
}
class TermoDePolinomio{
    constructor(numero, potencia_de_x){
        this.numero = numero
        this.potencia_de_x = potencia_de_x
    }
    print(){
        if(this.numero < 0){
            if(this.numero == 0 && this.potencia_de_x == 0){
                var aux = -this.numero
                return ""
            } else if(this.numero == 1 && this.potencia_de_x == 0){
                var aux = -this.numero
                return "" + aux
            } else if(this.numero == 0 && this.potencia_de_x == 1){
                var aux = -this.numero
                return ""
            } else if(this.numero == 1 && this.potencia_de_x == 1){
                var aux = -this.numero
                return "x"
            } else if(this.potencia_de_x == 0){
                var aux = -this.numero
                return "" + aux
            } else if(this.potencia_de_x == 1){
                var aux = -this.numero
                return "" + aux +"x"
            } else if(this.numero == 0){
                var aux = -this.numero
                return ""
            } else if(this.numero == 1){
                var aux = -this.numero
                return "x^" + this.potencia_de_x
            } else {
                var aux = -this.numero
                return this.numero + "x^" + this.potencia_de_x
            }
            
        } else {
            if(this.numero == 0 && this.potencia_de_x == 0){
                var aux = this.numero
                return ""
            } else if(this.numero == 1 && this.potencia_de_x == 0){
                var aux = this.numero
                return "" + aux
            } else if(this.numero == 0 && this.potencia_de_x == 1){
                var aux = this.numero
                return ""
            } else if(this.numero == 1 && this.potencia_de_x == 1){
                var aux = this.numero
                return "x"
            } else if(this.potencia_de_x == 0){
                var aux = this.numero
                return "" + aux
            } else if(this.potencia_de_x == 1){
                var aux = this.numero
                return "" + aux +"x"
            } else if(this.numero == 0){
                var aux = this.numero
                return ""
            } else if(this.numero == 1){
                var aux = this.numero
                return "x^" + this.potencia_de_x
            } else {
                var aux = this.numero
                return this.numero + "x^" + this.potencia_de_x
            }
        }
    }
}

var termo1 = new TermoDePolinomio(3, 4)
var termo2 = new TermoDePolinomio(5, 3)
var termo3 = new TermoDePolinomio(12, 2)
var termo4 = new TermoDePolinomio(1, 1)
var termo5 = new TermoDePolinomio(-1, 0)
var termo6 = new TermoDePolinomio(4, 3)
var termo7 = new TermoDePolinomio(11, 0)

var polinomio1 = new Polinomio([termo1, termo2, termo3, termo4, termo5])
var polinomio2 = new Polinomio([termo6, termo7])
var polinomio3 = polinomio1.multiplicacao(polinomio2)

//polinomio1.print()
//polinomio2.print()
//polinomio3.print()






btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    btn.setAttribute("disabled", "")
    var maior_termo_do_primeiro_polinomio = document.getElementById("maior_termo_do_primeiro_polinomio").value
    var maior_termo_do_segundo_polinomio = document.getElementById("maior_termo_do_segundo_polinomio").value
    var body = document.querySelector('body')

    var p = document.createElement('p')
    p.appendChild(document.createTextNode("Digite os valores dos termos do primeiro polinomio:"))
    body.appendChild(p)

    for(var j = 0; j < parseInt(maior_termo_do_primeiro_polinomio) + 1 ; j ++){
        var input = document.createElement('input')
        var aux = parseInt(maior_termo_do_primeiro_polinomio) - j
        input.setAttribute("id", "input1" +  "x^" + aux)
        input.setAttribute("placeholder", "x^" + aux)
        input.style.width = "25px"
        //console.log(input)
        var span = document.createElement('span')
        span.appendChild(document.createTextNode(" + "))
        body.appendChild(input)
        if(j != maior_termo_do_primeiro_polinomio) {
            body.appendChild(span)
        }
    }

    var p2 = document.createElement('p')
    p2.appendChild(document.createTextNode("Digite os valores dos termos do segundo polinomio:"))
    body.appendChild(p2)

    for(var j = 0; j < parseInt(maior_termo_do_segundo_polinomio) + 1 ; j ++){
        var input = document.createElement('input')
        var aux = parseInt(maior_termo_do_segundo_polinomio) - j
        input.setAttribute("id", "input2" +  "x^" + aux)
        input.setAttribute("placeholder", "x^" + aux)
        input.style.width = "25px"
        //console.log(input)
        var span = document.createElement('span')
        span.appendChild(document.createTextNode(" + "))
        body.appendChild(input)
        if(j != maior_termo_do_segundo_polinomio ) {
            body.appendChild(span)
        }
    }

    var btn2 = document.createElement("button")
    btn2.appendChild(document.createTextNode("Multiplicar"))
    btn2.setAttribute("id", "btn2")
    var br = document.createElement("br")
    body.appendChild(br)
    var br2 = document.createElement("br")
    body.appendChild(br2)
    body.appendChild(btn2)

    btn2.addEventListener("click", function(){
        var lista_1 = []
        for(var j = 0; j < parseInt(maior_termo_do_primeiro_polinomio) + 1; j++){
            var aux =  parseInt(maior_termo_do_primeiro_polinomio) - j
            var in1 = document.getElementById("input1x^"+aux).value
            var termo_1 = new TermoDePolinomio(parseInt(in1), aux)
            lista_1.push(termo_1)
        }
        var poli_1 = new Polinomio(lista_1)

        var lista_2 = []
        for(var j = 0; j < parseInt(maior_termo_do_segundo_polinomio) + 1; j++){
            var aux =  parseInt(maior_termo_do_segundo_polinomio) - j
            var in2 = document.getElementById("input2x^"+aux).value
            var termo_2 = new TermoDePolinomio(parseInt(in2), aux)
            lista_2.push(termo_2)
        }
        var poli_2 = new Polinomio(lista_2)

        var poli_3 = poli_1.multiplicacao(poli_2)



        var resul = document.createElement('p')

        body.appendChild(resul)

        resul.textContent = "Resultado: " + poli_3.print_retornavel()

        btn2.setAttribute("disabled", "");
    })
})
