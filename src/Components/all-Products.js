import "../CSS/all-Products.css";
import productimgone from "../images/products (1).png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from "react-router-dom";
import catalogImgOne from "../images/Cataloge-images-7__4_-removebg-preview.png";
import catalogImgTwo from "../images/Cataloge-images-7__5_-removebg-preview.png";
import catalogImgThree from "../images/Cataloge-images-7__6_-removebg-preview.png";
import catalogImgFour from "../images/Cataloge-images-7__7_-removebg-preview.png";
function AllProducts(){
    const navigate = useNavigate();

    const goToProduct = () => {
        navigate("/product")
    }
    return(
        <div className="all-Products">
            <img className="background-products" src= {productimgone} alt="img-product-one"/>
            <div className="content-products">
                <div className="col-product">
                    <div className="col-image">
                        <img src= {catalogImgOne} alt="img-product"/>
                    </div>
                <div className="product-text">
                    <h5 className="heading-one">m 26 h</h5>
                        <div className="all-Raw">
                            <span>raw material:</span>
                            <p>pp,abs,hips,ps,pete,ac</p>
                        </div>
                    <div className="icon-product">
                        <h5>MORE DETAILES</h5>
                        <div>
                            <FontAwesomeIcon
                            onClick={goToProduct}
                            className="icon-right"icon={faArrowRight}/>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-product">
                    <div className="col-image">
                        <img src= {catalogImgTwo} alt="img-product"/>
                    </div>
                <div className="product-text">
                    <h5 className="heading-one">m 30 h</h5>
                        <div className="all-Raw">
                            <span>raw material:</span>
                            <p>pp,abs,hips,ps,pete,ac</p>
                        </div>
                    <div className="icon-product">
                        <h5>MORE DETAILES</h5>
                        <div>
                            <FontAwesomeIcon 
                            onClick={goToProduct}
                            className="icon-right" icon={faArrowRight}/>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-product">
                    <div className="col-image">
                        <img src= {catalogImgThree} alt="img-product"/>
                    </div>
                <div className="product-text">
                    <h5 className="heading-one">m 36 h</h5>
                        <div className="all-Raw">
                            <span>raw material:</span>
                            <p>pp,abs,hips,ps,pete,ac</p>
                        </div>
                    <div className="icon-product">
                        <h5>MORE DETAILES</h5>
                        <div>
                            <FontAwesomeIcon
                            onClick={goToProduct}
                            className="icon-right" icon={faArrowRight}/>
                        </div>
                    </div>
                </div>
                </div>
                <div className="col-product">
                    <div className="col-image">
                        <img src= {catalogImgFour} alt="img-product"/>
                    </div>
                <div className="product-text">
                    <h5 className="heading-one">m 42 h</h5>
                        <div className="all-Raw">
                            <span>raw material:</span>
                            <p>pp,abs,hips,ps,pete,ac</p>
                        </div>
                    <div className="icon-product">
                        <h5>MORE DETAILES</h5>
                        <div>
                            <FontAwesomeIcon
                            onClick={goToProduct}
                            className="icon-right" icon={faArrowRight}/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
export default AllProducts;