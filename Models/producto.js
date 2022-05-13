class Producto {
    static contadorProducto =0;

    _id;
    _nombre;
    _precio;
    _description;
    _horario;
    _imagen;
    _count;
    _basePrecio;

    constructor(nombre, precio, basePrecio,horario, imagen, count,description ) {
        this._id = ++Producto.contadorProducto;
        this._nombre = nombre;
        this._precio = precio;
        this._horario = horario;
        this._imagen = imagen;
        this._count = count;
        this._basePrecio = basePrecio;
        this._description = description;
    }

    get description() {
        return this._description;
    }

    set description(value) {
        this._description = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(value) {
        this._nombre = value;
    }

    get precio() {
        return this._precio;
    }

    set precio(value) {
        this._precio = value;
    }

    get horario() {
        return this._horario;
    }

    set horario(value) {
        this._horario = value;
    }

    get imagen() {
        return this._imagen;
    }

    set imagen(value) {
        this._imagen = value;
    }

    get count() {
        return this._count;
    }

    set count(value) {
        this._count = value;
    }

    get basePrecio() {
        return this._basePrecio;
    }

    set basePrecio(value) {
        this._basePrecio = value;
    }
}

export  {Producto};