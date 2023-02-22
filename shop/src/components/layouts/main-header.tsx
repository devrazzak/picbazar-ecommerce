import Link from "@/components/ui/link";
import styles from './custom-main.module.css'
import CartCounterIconButton from "@/components/cart/cart-counter-icon-button";

export default function MainHeader() {
    return (
        <div className={styles.header_area}>
            <div className={styles.container}>
                <div className={styles.header_content}>
                    <div className={styles.logo}>
                    <h2>Logo</h2>
                </div>
                <div className={styles.menu}>
                    <nav>
                        <ul>
                            <li>
                                <Link href="/">
                                   Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/shop/furniture">
                                   Shop
                                </Link>
                            </li>
                            <li>
                                <Link href="/news">
                                    News
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <CartCounterIconButton/>
                            </li>
                        </ul>
                    </nav>
                </div>
                </div>
            </div>
        </div>
    )
}