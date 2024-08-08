export type optionProps = { label?: string; value?: string | number };

export type formHeadingPayload = {
  NickName?: string;
  Title?: string;
  FirstName?: string;
  LastName?: string;
  StreetAddress?: string;
  City?: string;
  Area?: string;
  Governorate?: string;
  Country?: string;
  PostalCode?: string;
  phoneNumber?: string;
};

export type addressBookHeadingProps = {
  add: string;
  edit: string;
  delete: string;
};

export interface NewAddressModalProps {
  addressMainData?: MainAddressProps;
  isOpen?: boolean;
  setIsOpen?: Function;
  isEditAddress?: boolean;
  createAddressPayload?: Function;
  updateAddress?: Function;
  deleteAddress?: Function;
  hideDefaultDelete?: boolean;
  className?: string;
  setIsLoading?: Function;
  isSubmittingForm?: boolean;
  refetchAttributes?: Function;
  isLoadingAttributes?: boolean;
  defaultAddress?: MainAddressProps;
  hasAddresses?: boolean;
}

export interface AddressPayload {
  id?: number;
  company?: string;
  first_name: string;
  last_name: string;
  address1: string;
  city: string;
  state_or_province: string;
  postal_code: string;
  country_code: string;
  phone: string;
  customer_id: number;
}

export interface UpdateAddressPayload {
  company?: string;
  id: number;
  first_name: string;
  last_name: string;
  address1: string;
  city: string;
  state_or_province: string;
  postal_code: string;
  country_code: string;
  phone: string;
}

export interface FormAddressPayload {
  id?: string | number;
  name?: string;
  nickName?: string;
  title?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  city?: string;
  governorate?: string;
  country?: string;
  postalCode?: string;
  phoneNumber?: string;
  isDefault?: string;
  checkbox?: string;
}

export interface MainAddressProps {
  id?: number;
  title?: string;
  address1?: string;
  address2?: string;
  address_type?: string;
  city?: string;
  company?: string;
  country?: string;
  country_code?: string;
  first_name?: string;
  last_name?: string;
  phone?: string;
  postal_code?: string;
  state_or_province?: string;
  isDefault?: string;
  attribute_value?: string;
}
