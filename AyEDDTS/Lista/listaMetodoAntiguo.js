//Cambio de valor de un valor de la lista O(1)
//Busqueda de lista O(n)

// const lista = [];


class Lista {
    length = 0;

    push(item) {
        this[this.length] = item;
        this.length++;
        return this.length;
    }

    pop() {
        if (this.length == 0) {
            return undefined;
        }
        let item = this[this.length - 1]
        delete this[this.length - 1];
        this.length--;
        return item;
    }
}

const lista = new Lista();
lista.push("a");
console.log(lista[0], lista.length)

lista.push("b")
console.log(lista[1], lista.length);

console.log(lista.pop(), lista.length);