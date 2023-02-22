import styles from './static/CourseCard.module.css'
import Link from 'next/link'

const CourseCard = (props) => {


    return(
        <div className={styles.single_course_card}>
            <div className="thumb">
                <Link href="/">
                    <img className={styles.img} src={props.product.image.thumbnail} alt="hello" />
                </Link>

            </div>
            <div className="content">
                <div className="content-top">
                    <h3 className="title">
                        <Link href="/">{props.product.name}</Link>
                    </h3>
                    <div className="mentor-name">
                        <Link href="/">
                            <p>Md Abdur Razzak</p>
                        </Link>
                        <span className="lecture"></span>

                    </div>
                </div>
                <div className="c-f">
                    <div className="price">
                        ${props.product.price}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CourseCard;
