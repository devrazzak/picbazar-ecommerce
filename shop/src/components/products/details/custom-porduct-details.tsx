import Spinner from '@/components/ui/loaders/spinner/spinner';
import dynamic from 'next/dynamic';
import { useTranslation } from 'next-i18next';
import Details from './details';
import ShortDetails from './short-details';
import { stickyShortDetailsAtom } from '@/store/sticky-short-details-atom';
import { useAtom } from 'jotai';
import { AttributesProvider } from './attributes.context';
import { useProduct } from '@/framework/product';

const RelatedProducts = dynamic(() => import('./related-products'));
interface ProductPopupProps {
  productSlug: string;
}
const CustomProductDetails: React.FC<ProductPopupProps> = ({ productSlug }) => {
  const { t } = useTranslation('common');
  const [showStickyShortDetails] = useAtom(stickyShortDetailsAtom);
  const { product, isLoading } = useProduct({ slug: productSlug });

  const productItem:any = product;

  const { id, related_products } = product ?? {};

  if (isLoading || !product)
    return (
      <div className="relative flex items-center justify-center w-96 h-96 bg-light">
        <Spinner text={t('common:text-loading')} />
      </div>
    );
  return (
    <AttributesProvider>
      <article className="bg-light w-full max-w-6xl xl:min-w-[1152px] relative z-[51] md:rounded-xl">
        <Details product={productItem} backBtn={false} isModal={true} />
      </article>
    </AttributesProvider>
  );
};

export default CustomProductDetails;
