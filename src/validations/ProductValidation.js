const ProductValidation = (values) => {
  const errors = {};

  if (!values.name || values.name === "") {
    errors.name = "Name Product is required";
  }
  if (!values.qty || values.qty === "") {
    errors.qty = "Quantity Product is required";
  }
  if (!values.image || values.image === "") {
    errors.image = "Image Product is required";
  }
  if (!values.expiredAt || values.expiredAt === "") {
    errors.expiredAt = "Name Product is required";
  }

  return errors;
};

export default ProductValidation;
