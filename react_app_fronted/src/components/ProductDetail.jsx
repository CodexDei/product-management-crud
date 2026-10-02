import PropTypes from "prop-types";

export const ProductDetail = ({
  handlerProductSelected,
  handlerRemove,
  product = {},
}) => {
  const formattedPrice = Number(product.price).toLocaleString("es-CO", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <tr>
      {/* PRODUCTO */}
      <td>
        <div className="product-name-cell">
          <span className="product-indicator"></span>

          <strong>{product.name}</strong>
        </div>
      </td>

      {/* PRECIO */}
      <td>
        <span className="price">${formattedPrice}</span>
      </td>

      {/* DESCRIPCIÓN */}
      <td>
        <span className="product-description">{product.description}</span>
      </td>

      {/* EDITAR */}
      <td className="text-center">
        <button
          type="button"
          className="btn-action btn-update"
          onClick={() => handlerProductSelected(product)}
          aria-label={`Editar ${product.name}`}
        >
          <span className="button-icon">✎</span>
          Editar
        </button>
      </td>

      {/* ELIMINAR */}
      <td className="text-center">
        <button
          type="button"
          className="btn-action btn-delete"
          onClick={() => handlerRemove(product.id)}
          aria-label={`Eliminar ${product.name}`}
        >
          <span className="button-icon">×</span>
          Eliminar
        </button>
      </td>
    </tr>
  );
};

ProductDetail.propTypes = {
  product: PropTypes.object.isRequired,
  handlerRemove: PropTypes.func.isRequired,
  handlerProductSelected: PropTypes.func.isRequired,
};
