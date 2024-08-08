import { findCustomerAttribute } from "lib/utils/common";
import { customerAttributesIds } from "lib/utils/constants";

export const attributesValue = (customerAttributes?: []) => {
  const title = findCustomerAttribute(
    customerAttributes,
    customerAttributesIds?.customerTitle
  );
  const dateOfBirth = findCustomerAttribute(
    customerAttributes,
    customerAttributesIds?.customerDateOfBirth
  );
  const currentGov = findCustomerAttribute(
    customerAttributes,
    customerAttributesIds?.customerGovernorate
  );
  const city = findCustomerAttribute(
    customerAttributes,
    customerAttributesIds?.customerCity
  );
  const postalCode = findCustomerAttribute(
    customerAttributes,
    customerAttributesIds?.customerPostalCode
  );
  const newsletterSubscription = findCustomerAttribute(
    customerAttributes,
    customerAttributesIds?.customerNewsletterSubscription
  );

  const values = {
    title: title?.attribute_value,
    currentDob: dateOfBirth?.attribute_value,
    currentGov: currentGov?.attribute_value,
    currentCity: city?.attribute_value,
    currentPostalCode: postalCode?.attribute_value,
    isNewsletterSubscribed: newsletterSubscription?.attribute_value
  };

  return values;
};
