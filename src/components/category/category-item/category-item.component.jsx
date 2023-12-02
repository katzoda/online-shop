
import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
    const { title, imageUrl } = category;
    return (
        <div className="category-container">
            {/* appending additional CSS that's dynamic - I can do it in React by passing it as a style object */}
            <div className="background-image" style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            {/* <img className="backgrounG-image" alt='fashion-card' src={`${imageUrl}`} /> */}
            <div className="category-body-container">
                <h2>{title}</h2>
                <p>Shop Now</p>
            </div>
        </div>
    )
}
export default CategoryItem;