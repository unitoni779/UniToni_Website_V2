import React from 'react';
import './Carousel.css';
import { items } from './Data';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

class Carousel extends React.Component {
    constructor() {
        super();
        this.state = {
            leftCard: 0,
            activeIndex: 0,
            rightCard: 0,
            arrayLength: items.length
        };
        this.activatePreviousSlide = this.activatePreviousSlide.bind(this);
        this.activateNextSlide = this.activateNextSlide.bind(this);
    }

    componentDidMount() {
        items.forEach((item, index) => {
            if (item.status === 'active') {
                this.setState({
                    leftCard: (index - 1 + items.length) % items.length,
                    activeIndex: index,
                    rightCard: (index + 1) % items.length,
                });
            }
        });
    }

    activatePreviousSlide() {
        this.setState(prevState => ({
            leftCard: (prevState.leftCard - 1 + prevState.arrayLength) % prevState.arrayLength,
            activeIndex: (prevState.activeIndex - 1 + prevState.arrayLength) % prevState.arrayLength,
            rightCard: prevState.activeIndex,
        }));
    }

    activateNextSlide() {
        this.setState(prevState => ({
            leftCard: prevState.activeIndex,
            activeIndex: (prevState.activeIndex + 1) % prevState.arrayLength,
            rightCard: (prevState.rightCard + 1) % prevState.arrayLength,
        }));
    }

    render() {
        const { leftCard, activeIndex, rightCard, arrayLength } = this.state;

        return (
            <div className="carousel-container">
                <h2 className="text-center text-4xl font-bold text-gray-900 mb-0" style={{ color: "#112d42" }}>
                    What differentiates us?
                </h2>
                <div className="cards" >
                    <div className="card leftCard" >
                        {/* <img className="avatars" src={items[leftCard].image} alt="avatar"></img> */}
                        <div className="text">
                            <h3 className="name text-white">{items[leftCard].name}</h3>
                            <i className="position text-white mt-5" >{items[leftCard].position}</i>
                            <p className="testimony text-white mt-5 ">{items[rightCard].quote}</p>
                            <p className="testimony text-white mt-5 ">{items[leftCard].quote}</p>
                        </div>
                    </div>
                    <div className="card active">
                        {/* <img className="avatars" src={items[activeIndex].image} alt="avatar"></img> */}
                        <div className="text text-white">
                            <h3 className="name text-white">{items[activeIndex].name}</h3>
                            <i className="position text-white">{items[activeIndex].position}</i>
                            <p className="testimony text-white mt-5">{items[activeIndex].quote}</p>
                        </div>
                        <div className="arrow-container">
                            <BiChevronLeft className="arrow-icon" onClick={this.activatePreviousSlide} />
                            <BiChevronRight className="arrow-icon" onClick={this.activateNextSlide} />
                        </div>
                    </div>
                    <div className="card rightCard">
                        {/* <img className="avatars" src={items[rightCard].image} alt="avatar"></img> */}
                        <div className="text text-white">
                            <h3 className="name text-white">{items[rightCard].name}</h3>
                            <i className="position text-white">{items[rightCard].position}</i>
                            <p className="testimony text-white mt-5">{items[rightCard].quote}</p>
                        </div>
                    </div>
                </div>
                <div className="tracker">
                    {Array.from({ length: arrayLength }).map((_, index) => (
                        <div key={index} className={index === activeIndex ? 'active-circle' : 'inactive-circle'}></div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Carousel;
