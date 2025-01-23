import '/js/bootstrap/bootstrap.min.js';  // Funcionalidades de Bootstrap
import {productos} from '../../data/productos.js'
class ProductsComponent extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = /*html*/ `
      <style>
        @import url('/css/bootstrap/bootstrap.min.css');
      </style>
      <div class="container mt-4">
      <div class="card">
          <div class="card-body">
              <form">
                  <div class="mb-3">
                      <label for="nombre" class="form-label">Nombre</label>
                      <input type="text" id="nombre" class="form-control" placeholder="Nombre del producto">
                  </div>
                  <div class="mb-3">
                      <label for="codProducto" class="form-label">Codigo Producto</label>
                      <input type="text" id="codProducto" class="form-control" placeholder="Ingrese el codigo del producto">
                  </div>
                  <div class="row">
                      <div class="col-md-6 mb-3">
                          <label for="valorUnidad" class="form-label">Valor unidad</label>
                          <input type="text" id="valorUnidad" class="form-control" placeholder="Valor por unidad">
                      </div>
                      <div class="col-md-6 mb-3">
                          <label for="cantidad" class="form-label">Cantidad</label>
                          <input type="text" id="cantidad" class="form-control" placeholder="Cantidad">
                      </div>
                  </div>
                  <button type="button" class="btn btn-success col-12 btn-lg">+</button>
              </form>
          </div>
      </div>
  </div>
    `;
    }
    connectedCallback() {

    }
  }
  
  customElements.define('products-component', ProductsComponent);