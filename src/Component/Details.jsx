import React from 'react'
import { AiOutlineArrowLeft} from 'react-icons/ai'
import { AiFillStar} from 'react-icons/ai'
import { AiOutlineStar} from 'react-icons/ai'
import { cartItems } from '../redux/ecom'
const Details = ({productDetails}) => {

  return (
    <div className=''>
         <div className="card__title">
        <div className="icon">
          <a href="#"><AiOutlineArrowLeft/></a>
        </div>
        <h3>New Product</h3>
      </div>
      <div className="card__body">
        <div className="half">
          <div className="featured_text">
            <h1>{productDetails.title}</h1>
            {/* <p className="sub">Office Chair</p> */}
            <p className="price">{productDetails.price}</p>
            <p className='mrp'>{productDetails.mrp}</p>
          </div>
          <div className="image">
            <img src={productDetails.thumbnail} alt="" />
          </div>
        </div>
        <div className="half">
          <div className="description">
            <p>{productDetails.description}</p>
          </div>
          <span className="stock">In stock</span>
          <div className="reviews">
            <ul className="stars">
              <li>< AiFillStar/></li>
              <li>< AiFillStar/></li>
              <li>< AiFillStar/></li>
              <li>< AiFillStar/></li>
              <li><AiOutlineStar/></li>
            </ul>
            <span>(64 reviews)</span>
          </div>
        </div>
      </div>
      <div className="card__footer">
        <div className="recommend">
          <p>Recommended by</p>
          <h3>Abhira</h3>
        </div>
        <div className='details-button'>
            <button type='button'>Buy Now</button>
        </div>
        <div className="action">
          <button type="button">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default Details