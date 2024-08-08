import {
  ChangeEventHandler,
  ReactComponentElement,
  RefObject,
  FC,
  Key,
} from "react";

export type InputType = {
  key?: Key;
  readOnly?: boolean;
  role?: string;
  ref?: any;
  name?: string;
  value?: string;
  defaultValue?: string;
  type?: string;
  placeHolder?: string;
  className?: string;
  style?: object;
  label?: string;
  labelClassName?: string;
  error?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: ChangeEventHandler<HTMLInputElement>;
  showLabel?: boolean;
  pattern?: string;
  handleSubmit?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef?: any;
  inputIcon?: any;
  onImageClick?: Function;
  onMouseOver?: Function;
  onClick?: Function;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputContainerClass?: string;
  divInputClass?: string;
  inputIconClassName?: string;
  wrapperStyle?: { [key: string]: string | number };
  bottomLabel?: string;
  errorDivClassName?: string;
  countryCodeClassname?: string;
  isCountryCode?: boolean;
  isLoading?: boolean;
  setFieldValue?: Function;
};
