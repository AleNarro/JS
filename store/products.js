//const producto1 = {
    //nombre: "celular",
    //precio: 100000,
    //stock: 2
    //};

//producto1.id = "id123";
//producto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp";

//console.log(producto1)
//console.log("El producto es " + producto1.nombre)


class Product {
    #supplier;
    constructor(id, title, price, stock, images, onsale, supplier, colors, description) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.stock = stock;
      this.images = images;
      this.onsale = onsale;
      this.#supplier = supplier;
      this.colors = colors;
      this.description = description;
    }
    get getSupplier() {
        return this.#supplier;
        }
    set setSupplier(newName) {
        this.#supplier = newName;
        }
    
    //sellUnits(units) {
        //this.stock = this.stock - units
        //console.log("Se acaban de vender " +this.stock + " Ipads")
        //}
  }
    

  const prod1 = new Product('00000', 'Laptop', 1500.00, 4, ["imagen1","imagen2","imagen3"], true, 'HP', ["Gris","Negro","Blanco"], 'Descripcion');
  const prod2 = new Product('00001', 'Celuar', 570.00, 8, ["imagen4","imagen5","imagen6"], true, 'IPHONE', ["Gris","Negro","Blanco"], 'Descripcion');
  const prod3 = new Product('00002', 'Reloj', 50.00, 2, ["imagen7","imagen8"], true, 'ROLEX', ["Gris","Negro","Blanco"], 'Descripcion');
  const prod4 = new Product('00003', 'Calculadora', 12.00, 5, ["imagen9","imagen10"], true, 'SION', ["Gris","Negro","Blanco"], 'Descripcion');
  const prod5 = new Product('00004', 'Ipad', 800.00, 20, ["imagen11","imagen12"], true, 'APPLE', ["Gris","Negro","Blanco"], 'Descripcion');
  const prod6 = new Product('00005', 'Ipad+', 1000.00, 50, ["imagen13","imagen14"], true, 'APPLE', ["Gris","Negro","Blanco"], 'Descripcion');
  const prod7 = new Product('00006', 'Impresora', 300.00, 10, ["imagen15","imagen16"], true, 'HP', ["Gris","Negro","Blanco"], 'Descripcion');

  const products = [prod1, prod2, prod3, prod4, prod5, prod6, prod7];
  
  console.log(products);
  products.unshift(prod6);
  products.push(prod7);
  console.log(products);
  products.shift();
  products.pop();
  console.log(products);
  console.log(products[2]);
  console.log(products[products.length-1]);

  //prod4.setSupplier= 'CADE';

  //console.log(prod1);
  //console.log(prod2);
  //console.log(prod3);
  //console.log(prod4);
  //console.log(prod5);

  //console.log(prod2.title);
  //console.log(prod3.onsale);
  //console.log(prod4.getSupplier);
  //prod5.sellUnits(10)
  //prod5.sellUnits(5)
  //console.log("Quedan " + prod5.stock + " Ipads disponibles")


