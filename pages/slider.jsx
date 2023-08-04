import OwlCarousel from './carousel';

export default function Slider() {
    return (
        <OwlCarousel
            responsive={Responsive}
        >
            <div className="item">
                <h4>1</h4>
            </div>
            <div className="item">
                <h4>2</h4>
            </div>
            <div className="item">
                <h4>3</h4>
            </div>
        </OwlCarousel>
    )
}

const Responsive = {
    0: {
        items:15,
        margin:5
    },
    768: {
        items:2.5,
        margin:10
    },
    1024: {
        items:3.5,
        margin:20
    },
}