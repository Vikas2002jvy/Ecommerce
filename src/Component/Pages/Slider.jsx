import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

const Slider = () => {
    return (
        <Carousel autoPlay={true} interval={1000} infiniteloop={true} showArrows={false} showStatus={false} showIndicators={false} showThumbs={false}>
            <div>
                <img src="https://cdn.pixabay.com/photo/2016/11/22/21/57/apparel-1850804_1280.jpg" />
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2019/03/09/21/30/downtown-4045036_1280.jpg" />
                
            </div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2020/03/12/07/55/city-4924252_1280.jpg" />
            </div>
        </Carousel>
    )
}

export default Slider
