import {  ImageSet, Link, Menu } from "@bloomreach/spa-sdk";
import { BrandSidebarProps, ImageType } from "lib/types/common";
export interface MobileHeaderProps {
  menuData?:
    | {
        navTitle?: string;
        titleUrl?: string;
        navArr?: { title?: string; catArr?: LinkPropsType[] }[];
      }[]
    | [];
  siteLogo?: ImageType;
  headerDiv?: any;
  arabicSiteLogo?: ImageType;
  siteLogoUrl?: string;
  headerId?: string;
  brandSideBar?: BrandSidebarProps | {};
  setOpenSearchDialog?: (val: boolean) => void;
  storeLocatorData?: any;
  isLoadingMenu?: boolean;
  siteLogoHeight?: string | number;
  className?: string;
  navMenu?: Menu;
  brandImage?: ImageSet;
  brandLink?: string;
  showSideBar?: boolean;
}
export interface MenuProps {
  active?: Boolean;
  closeMenu?: Function;
  menuData?: any;
  siteLogo?: any;
  headerId?: string;
  brandSideBar?: BrandSidebarProps | {};
  setSidebarChild?: Function;
  handleAccountSidebar?: Function;
  storeLocatorData?: any;
  isLoadingMenu?: boolean;
}

type LinkPropsType = {
  name?: string;
  url?: string;
};

export interface LinksProps {
  navTitle?: string;
  titleUrl?: string;
  navArr?: { title?: string; catArr?: LinkPropsType[] }[];
}

export interface DropdownDataProps {
  dropdownData?: {
    title?: string;
    catArr?: LinkPropsType[];
  }[];
  categoryLinks?: [];
  mainMenuName?: string;
  url?: string;
}

export interface MobileSubMenuProps {
  active?: Boolean;
  closeMenu?: Function;
  closeSubMenu?: Function;
  subMenuData?: DropdownDataProps;
  menuTitle?: string;
}

export type OptionProps = {
  label?: string;
  img?: string;
  value?: string;
  langTitle?: string;
};

export interface SelectProps {
  options?: OptionProps[];
  onChange?: Function;
  defaultValue?: string;
  iconWidth?: string | number;
}
