import usePrice from '@/lib/use-price';
import { AddToCart } from '@/components/products/add-to-cart/add-to-cart';
import { useTranslation } from 'next-i18next';
import { useModalAction } from '@/components/ui/modal/modal.context';
import { productPlaceholder } from '@/lib/placeholders';
import styles from  './custom-product.module.css'

type CustomProps = {
  product: any;
  className?: string;
};

const Custom: React.FC<CustomProps> = ({ product, className }) => {
  const { t } = useTranslation('common');
  const { name, image, quantity, product_type } = product ?? {};
  const { price, basePrice } = usePrice({
    amount: product.sale_price ? product.sale_price : product.price!,
    baseAmount: product.price,
  });

  const { openModal } = useModalAction();

  function handleProductQuickView() {
    return openModal('CUSTOM_PRODUCT_DETAILS', product.slug);
  }
  return (
     <div className={styles.custom_product_card}>
         <div className={styles.custom_product_image} onClick={handleProductQuickView}>
            <img src={image?.original ?? productPlaceholder} alt={name}/>
         </div>
         <div className={styles.custom_product_title}>
             <h3>{name}</h3>
         </div>
         <div className={styles.custom_product_price}>
             <span>{price}</span>
             {basePrice && (
              <del className="text-xs text-muted ltr:ml-2 rtl:mr-2 md:text-sm">
                {basePrice}
              </del>
            )}
         </div>
          <div className="custom_product_card_btn">
              {Number(quantity) > 0 && (
                  <AddToCart variant="custom" data={product} />
              )}
          </div>
     </div>

  );
};

export default Custom;
