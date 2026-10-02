import { useEffect, useState } from "react";
import { create, findAll, remove, update } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import PropTypes from "prop-types";
import { ProductForm } from "./ProductForm";
import "./ProductApp.css";

export const ProductApp = ({ title }) => {
  const [products, setProducts] = useState([]);

  const [productSelected, setProductSelected] = useState({
    id: 0,
    name: "",
    description: "",
    price: "",
  });

  const getProducts = async () => {
    const result = await findAll();

    if (result?.data?._embedded?.products) {
      setProducts(result.data._embedded.products);
    } else {
      setProducts([]);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handlerAddProduct = async (product) => {
    if (product.id > 0) {
      const response = await update(product);

      if (response?.data) {
        setProducts((products) =>
          products.map((prod) =>
            prod.id === response.data.id ? { ...response.data } : prod,
          ),
        );
      }
    } else {
      const response = await create(product);

      if (response?.data) {
        setProducts([...products, { ...response.data }]);
      }
    }
  };

  const handlerRemoveProduct = async (id) => {
    await remove(id);

    setProducts((products) => products.filter((product) => product.id !== id));
  };

  const handlerProductSelected = (product) => {
    setProductSelected({ ...product });
  };

  return (
    <main className="app-container">
      <div className="container">
        {/* HEADER PRINCIPAL */}
        <header className="app-header mb-4">
          <div className="app-header-content">
            <span className="app-header-label">SISTEMA DE GESTIÓN</span>

            <h1>{title}</h1>

            <p>Gestión moderna y eficiente de productos</p>
          </div>
        </header>

        <div className="row g-4">
          {/* FORMULARIO */}
          <div className="col-12 col-lg-5">
            <section className="app-card">
              <div className="section-heading">
                <span className="section-eyebrow">GESTIÓN</span>

                <h2 className="card-title">
                  {productSelected.id > 0
                    ? "Actualizar producto"
                    : "Nuevo producto"}
                </h2>

                <div className="heading-line"></div>

                <p className="card-description">
                  Introduce la información del producto que deseas administrar.
                </p>
              </div>

              <ProductForm
                handlerAdd={handlerAddProduct}
                productSelected={productSelected}
              />
            </section>

            {/* VERSÍCULO */}
            <aside className="bible-card">
              <div className="bible-icon">“</div>

              <blockquote>
                “Clama a mí, y yo te responderé, y te enseñaré cosas grandes y
                ocultas que tú no conoces”
              </blockquote>

              <cite>
                <a
                  href="https://www.bible.com/es/bible/149/JER.33.3"
                  target="_blank"
                  rel="noreferrer"
                >
                  Jeremías 33:3
                </a>
              </cite>
            </aside>
          </div>

          {/* PRODUCTOS */}
          <div className="col-12 col-lg-7">
            <section className="app-card">
              <div className="products-heading">
                <div className="section-heading">
                  <span className="section-eyebrow">INVENTARIO</span>

                  <h2 className="card-title mb-0">Productos</h2>

                  <div className="heading-line"></div>
                </div>

                <span className="products-count">
                  {products.length}{" "}
                  {products.length === 1 ? "producto" : "productos"}
                </span>
              </div>

              <p className="card-description products-description">
                Productos registrados actualmente en el sistema.
              </p>

              {products.length > 0 ? (
                <ProductGrid
                  products={products}
                  handlerRemove={handlerRemoveProduct}
                  handlerProductSelected={handlerProductSelected}
                />
              ) : (
                <div className="empty-state">
                  <strong>No hay productos</strong>

                  <span>
                    Todavía no existen productos registrados en el sistema.
                  </span>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

ProductApp.propTypes = {
  title: PropTypes.string.isRequired,
};
