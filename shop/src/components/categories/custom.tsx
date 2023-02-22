import type { Category } from '@/types';
import {ReactChild, ReactFragment, ReactPortal} from 'react';
import {useRouter} from "next/router";
import styles from './customSidebar.module.css'


interface StickySidebarListCategoriesProps {
  notFound: boolean;
  loading: boolean;
  categories: Category[];
  className?: string;
}

const CustomSidebarCategory: React.FC<StickySidebarListCategoriesProps> = ({notFound,categories,loading, className}) => {
    const router = useRouter();
    function onClick(item: string) {
        const active = router?.query?.category;
        const { pathname, query } = router;
        router.push({
          pathname,
          query: { ...query, category: item },
        });
    }

  return (
      <aside
          className={`hidden h-full bg-light lg:sticky lg:top-22 xl:block xl:w-72 ${className}`}
      >
        <ul className={styles.custom_sidebar}>
            <h3>Product categories</h3>
          {
            categories.map((category, index) => (
                <>
                    <li onClick={() => onClick(category.slug)}>{category.name}</li>
                    {
                        category.children.map((child: {
                            slug: string;
                            name: string }) => (
                                <li onClick={() => {
                                    onClick(child.slug);
                                }}>{child.name}</li>
                        ))
                    }
                </>


          ))
        }
      </ul>
    </aside>
  );
};

export default CustomSidebarCategory;
