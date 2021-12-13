import '../../styles/Movies.css'
import React from 'react';

class sliderPelis extends React.Component{
    render() {return(
        <div>
            <div class="wrapper">
                <div class="slider" id="slider">
                    <ul class="slides">
                        <li class="slide" id="slide1">
                            <a href="#">
                            <img src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1639276465/300_pelicula_vix0v9.jpg" alt="photo 1"/>
                            </a>
                        </li>
                        <li class="slide" id="slide2">
                            <a href="#">
                            <img src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1639276479/Batman_ziecok.jpg" alt="photo 2"/>
                            </a>
                        </li>
                        <li class="slide" id="slide3">
                            <a href="#">
                            <img src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1639276524/Los_vengadores_pcmbp4.jpg" alt="photo 3"/>
                            </a>
                        </li>
                        <li class="slide" id="slide4">
                            <a href="#">
                            <img src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1639286093/santo_grial_gpiswc.jpg" alt="photo 4"/>
                            </a>
                        </li>
                        <li class="slide" id="slide5">
                            <a href="#">
                            <img src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1639285734/narutoPelicula_dzunl9.jpg" alt="photo 5"/>
                            </a>
                        </li>
                        <li class="slide">
                            <a href="#">
                            <img src="https://res.cloudinary.com/dxnn5sbsz/image/upload/v1639276465/300_pelicula_vix0v9.jpg" alt="photo 1"/>
                            </a>
                        </li>
                    </ul>
                    <ul class="slider-controler">
                        <li><a href="#slide1">1</a></li>
                        <li><a href="#slide2">2</a></li>
                        <li><a href="#slide3">3</a></li>
                        <li><a href="#slide4">4</a></li>
                        <li><a href="#slide5">5</a></li>
                    </ul>
                </div>
            </div>

        </div>
    )
    }
}

export default sliderPelis;