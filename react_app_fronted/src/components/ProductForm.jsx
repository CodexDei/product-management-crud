import { useEffect, useState } from "react";

const initialDataForm = {
  id: 0,
  name: "",
  description: "",
  price: "",
};

// eslint-disable-next-line react/prop-types
export const ProductForm = ({ productSelected, handlerAdd }) => {
  const [form, setForm] = useState(initialDataForm);

  const { id, name, description, price } = form;

  useEffect(() => {
    setForm(productSelected);
  }, [productSelected]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name || !description || !price) {
      alert("Debe completar los datos del formulario!");
      return;
    }

    handlerAdd(form);
    setForm(initialDataForm);
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      {/* NOMBRE */}

      <div className="form-field mb-4">
        <label htmlFor="name" className="form-label-custom">
          Nombre del producto
        </label>

        <input
          id="name"
          type="text"
          placeholder="Ej. Vitamina A"
          className="app-input"
          name="name"
          value={name}
          onChange={(event) =>
            setForm({
              ...form,
              name: event.target.value,
            })
          }
        />
      </div>

      {/* DESCRIPCIÓN */}

      <div className="form-field mb-4">
        <label htmlFor="description" className="form-label-custom">
          Descripción
        </label>

        <input
          id="description"
          type="text"
          placeholder="Descripción del producto"
          className="app-input"
          name="description"
          value={description}
          onChange={(event) =>
            setForm({
              ...form,
              description: event.target.value,
            })
          }
        />
      </div>

      {/* PRECIO */}

      <div className="form-field mb-4">
        <label htmlFor="price" className="form-label-custom">
          Precio
        </label>

        <div className="price-input-wrapper">
          <span className="currency-symbol">$</span>

          <input
            id="price"
            type="number"
            step="0.01"
            min="0"
            placeholder="Ej. 500.00"
            className="app-input price-input"
            name="price"
            value={price}
            onChange={(event) =>
              setForm({
                ...form,
                price: event.target.value,
              })
            }
          />
        </div>
      </div>

      {/* BOTÓN */}

      <div className="form-submit">
        <button type="submit" className="btn-create">
          {id > 0 ? "Actualizar producto" : "Crear producto"}
        </button>
      </div>
    </form>
  );
};
