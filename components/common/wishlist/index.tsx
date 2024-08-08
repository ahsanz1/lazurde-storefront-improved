import React, { FC, useState, useEffect, useContext, useCallback } from "react";
import { FilledStar, Heart } from "components/icons";
import FillHeart from "components/icons/FillHeart";
import { AppContext } from "lib/context";
import RegisterModal from "components/common/register-popup";
import useTranslation from "next-translate/useTranslation";
import { useWishlist } from "lib/utils/wishlist";
import { useCustomer } from "lib/middleware-apis/customers";
interface WishListProps {
  authToken?: string | "";
  itemId?: number | string;
  className?: string | "";
  sku?: string;
}

const WishList: FC<WishListProps> = ({
  sku = "",
  itemId = 1,
  className = "",
}): JSX.Element => {
  const { t } = useTranslation("common");
  const [active, setActive] = useState(false);
  const { setInstaWishlistStyle } = useContext(AppContext);
  const [wishListItemId, setWishListItemId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { useCustomerByEmail } = useCustomer();
  const { data: customerData } = useCustomerByEmail();
  const isUserLoggedIn = customerData?.entityId > 0 ? true : false;

  const {
    createWishlistMutation,
    removeWishlistMutation,
    useGetWishlist,
    useGetWishlistID,
  } = useWishlist();
  const { data: storedWishlistId }: any = useGetWishlistID();
  const { data: storedWishlistData }: any = useGetWishlist();
  const getWishListEntityIdForProduct = (storedWishlistData: any) => {
    const isSelected = storedWishlistData?.find(
      (item: any) => item?.node?.productEntityId == itemId
    );
    if (isSelected) {
      setWishListItemId(isSelected?.node?.entityId);
      setActive(isSelected !== undefined);
    }
  };

  useEffect(() => {
    getWishListEntityIdForProduct(storedWishlistData);

    return () => setActive(false);
  }, [storedWishlistData]);

  const onCloseModal = () => {
    setIsModalOpen(false);
    setInstaWishlistStyle(false);
  };
  return (
    <React.Fragment key={itemId}>
      {!active ? (
        <div
          className={className}
          onClick={() => {
            if (isUserLoggedIn) {
              createWishlistMutation.mutate({
                wishlist_id: storedWishlistId,
                itemId: itemId,
                customerId: customerData?.entityId,
              });
            } else {
              setIsModalOpen(true);
              setInstaWishlistStyle(true);
            }
          }}
          role="button"
        >
          <Heart fill="black" stroke="black" />
        </div>
      ) : (
        <div
          className={className}
          onClick={() => {
            if (isUserLoggedIn) {
              removeWishlistMutation.mutate({
                itemId: wishListItemId,
                customerId: customerData?.entityId,
              });
            } else {
              setIsModalOpen(true);
              setInstaWishlistStyle(true);
            }
          }}
          role="buttonTwo"
        >
          {isUserLoggedIn ? (
            <FillHeart />
          ) : (
            <Heart fill="black" stroke="black" />
          )}
        </div>
      )}
      {isModalOpen ? (
        <RegisterModal
          isOpen={isModalOpen}
          onClose={onCloseModal}
          modalText={t("registerModalText")}
          modalWidth="600px"
          modalHeight="400px"
        />
      ) : null}
    </React.Fragment>
  );
};
export default WishList;
