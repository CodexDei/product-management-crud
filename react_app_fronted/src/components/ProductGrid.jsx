import PropTypes from "prop-types";
import { ProductDetail } from "./ProductDetail";

export const ProductGrid = ({
  products = [],
  handlerProductSelected,
  handlerRemove,
}) => {
  return (
    <div className="products-table-wrapper">
      <table className="products-table">
        <thead>
          <tr>
            <th>Producto</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th className="text-center">Editar</th>
            <th className="text-center">Eliminar</th>
          </tr>
        </thead>

        <tbody>
          {products
            .filter((product) => product != null)
            .map((product) => (
              <ProductDetail
                product={product}
                key={product.id}
                handlerProductSelected={handlerProductSelected}
                handlerRemove={handlerRemove}
              />
            ))}
        </tbody>
      </table>
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.array.isRequired,
  handlerProductSelected: PropTypes.func.isRequired,
  handlerRemove: PropTypes.func.isRequired,
};
