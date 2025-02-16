import "../CSS/header.css";
import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import imgSlideOne from "../images/home (22).png";
import imgSlideTwo from "../images/home (24).png";
import imgHome23 from "../images/home (23).png";

function Header(){
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [imgSlideOne, imgSlideTwo];

    const handleLeftClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleRightClick = () => {
        setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    const myIcons = useRef(null);
    function clickIconLeft(){
        if(myIcons.current){
            const leftIcons = myIcons.current.querySelector(".icons #icon-left");
            const rightIcons = myIcons.current.querySelector(".icons #icon-right");
            console.log(leftIcons);
            console.log(rightIcons);
                leftIcons.classList.add("active");
                rightIcons.classList.remove("active");
        }
    }
    function clickIconRight(){
        if(myIcons.current){
            const leftIcons = myIcons.current.querySelector(".icons #icon-left");
            const rightIcons = myIcons.current.querySelector(".icons #icon-right");
            console.log(leftIcons);
            console.log(rightIcons);
            leftIcons.classList.remove("active");
            rightIcons.classList.add("active");
        }
    }
    const allLeftClickIcon = () => {
        handleLeftClick();
        clickIconLeft();
    }
    const allRightClickIcon = () => {
        handleRightClick();
        clickIconRight();
    }
    return(
        <div className="header">
            <div className="container">
                <div className="text-content">
                    <p className="p-one">a style in every hang</p>
                    <div className="paragraphs">
                        <p>extensive product range caters to various sectors of the clothing industry, including babywear, kid's wear, teenage wear, lingerie,men's and women's wear.</p>
                    </div>
                </div>
                <div className="icons" ref={myIcons}>
                        <FontAwesomeIcon onClick={allLeftClickIcon} id="icon-left" className="icon-left" icon={faArrowLeft} />
                        <FontAwesomeIcon onClick={allRightClickIcon} id="icon-right" className="icon-right active" icon={faArrowRight} />
                </div>
            </div>
            <div className="images-slider">
                <div className="all-images">
                {images.map((image, index) => (
                    <img
                        key={index}
                        className={activeIndex === index ? 'active' : ''}
                        src={image}
                        alt={`imgSlider${index + 1}`}
                    />
                ))}
            </div>
            </div>
            <div className="about-us">
                <div className="about-content">
                    <h3>about us ?</h3>
                    <div className="p-one-content">
                            <p>
                                united hanger company is proud to serve as a trusted partner to clothing manufacturers across the middle east and europe.
                            </p>
                            <p>
                                we are committed to excellence in every aspect of our business, and we look forward to bringing your clothing creations to life with our premium hanger solution.
                            </p>
                    </div>
                </div>
                <div className="img-about">
                    <img src= { imgHome23 } alt="img-about"/>
                </div>
            </div>
            <div className="about-mobile">
                <div className="container">
                    <h3>about us ?</h3>
                    <p>united hanger company is proud to serve as a trusted partner to clothing manufacturers across the middle east and europe.</p>
                    <p className="p-two"> we are committed to excellence in every aspect of our business, and we look forward to bringing your clothing creations to life with our premium hanger solution.</p>
                </div>
            </div>
        </div>
    )
}
export default Header;