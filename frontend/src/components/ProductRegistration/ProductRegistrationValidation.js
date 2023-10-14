function ProductRegistrationValidation(formData) {
  let errors = {};

  const nameRegex = /^[A-Za-z]+( [A-Za-z]+)*$/; // Allows alphabets and spaces, but not leading/trailing spaces
  const qualityRegex = /^(10|[1-9])$/; // Allows numbers from 1 to 10
  const priceRegex = /^\d+$/; // Allows only numbers (no decimals)

  if (!formData.product_name) {
    errors.product_name = "প্রোডাক্টের নাম আবশ্যক";
  } else if (!nameRegex.test(formData.product_name)) {
    errors.product_name = "প্রোডাক্টের নাম কেবল বর্ণানুক্রমে হতে পারে";
  }

  if (!formData.product_description) {
    errors.product_description = "প্রোডাক্টের বর্ণনা আবশ্যক";
  } else if (!nameRegex.test(formData.product_description)) {
    errors.product_description = "প্রোডাক্টের বর্ণনা কেবল বর্ণানুক্রমে হতে পারে";
  }

  if (!formData.product_quality) {
    errors.product_quality = "প্রোডাক্টের কোয়ালিটি আবশ্যক";
  } else if (!qualityRegex.test(formData.product_quality)) {
    errors.product_quality = "প্রোডাক্টের কোয়ালিটি 1 থেকে 10 এর মধ্যে হতে হবে";
  }

  if (!formData.product_type) {
    errors.product_type = "প্রোডাক্টের ধরণ আবশ্যক";
  }

  if (!formData.product_price) {
    errors.product_price = "প্রোডাক্টের মূল্য আবশ্যক";
  } else if (!priceRegex.test(formData.product_price)) {
    errors.product_price = "প্রোডাক্টের মূল্য কেবল সংখ্যা হতে পারে";
  }

  return errors;
}

export default ProductRegistrationValidation;
