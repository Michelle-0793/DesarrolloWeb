import React from 'react';
import '../Styles/HomeContent.css';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css'; 

// Importación de las img de los logos
import Logo1 from '../Img/Logo_1.png';
import Logo2 from '../Img/Logo_2.png';
import Logo3 from '../Img/Logo_3.png';
import Logo4 from '../Img/Logo_4.png';
import Logo5 from '../Img/Logo_5.png';

// Elementos del carrusel usando las imágenes importadas
const items = [
  <img src={Logo1} alt="Logo 1" className="CarouselImg" />,
  <img src={Logo2} alt="Logo 2" className="CarouselImg" />,
  <img src={Logo3} alt="Logo 3" className="CarouselImg" />,
  <img src={Logo4} alt="Logo 4" className="CarouselImg" />,
  <img src={Logo5} alt="Logo 5" className="CarouselImg" />,
];

const responsive = {
  0: { items: 1 },
  600: { items: 2 },
  1024: { items: 3 },
  1300: { items: 5,
    itemsFit: 'contain',
  } // Muestra 5 elementos a la vez para pantallas más grandes
};

function HomeContent() {
  return (
    <div className="divContenido">
      <div className="ImgPortada">
        <div className="TextoPortada">
          <h1>Transformando ideas en <br />diseños extraordinarios</h1>
        </div>
      </div>

      {/* Carrusel de logos */}
      <div className="divCarrucel">
        <AliceCarousel
          mouseTracking
          items={items}
          responsive={responsive}
          infinite
          autoPlay
          autoPlayInterval={3000}
          disableButtonsControls
        />
      </div>
    </div>
  );
}

export default HomeContent;

<div class="elementor-swiper">
			<div class="elementor-main-swiper swiper swiper-initialized swiper-horizontal swiper-pointer-events">
				<div class="swiper-wrapper" id="swiper-wrapper-12a2453328c46a64" aria-live="off" style="cursor: grab; transition-duration: 0ms; transform: translate3d(-780px, 0px, 0px);"><div class="swiper-slide swiper-slide-duplicate" role="group" aria-label="16 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="15">
									<div class="elementor-carousel-image" role="img" aria-label="memorable travel group" style="background-image: url('https://digesit.com/wp-content/uploads/2024/09/memorable-travel-group.png')">

			
					</div>
								</div><div class="swiper-slide swiper-slide-duplicate" role="group" aria-label="17 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="16">
									<div class="elementor-carousel-image" role="img" aria-label="hergoz perlas" style="background-image: url('https://digesit.com/wp-content/uploads/2024/09/hergoz-perlas-e1726149109601.png')">

			
					</div>
								</div>
											<div class="swiper-slide" role="group" aria-label="1 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="0">
									<div class="elementor-carousel-image" role="img" aria-label="bodegasAM" style="background-image: url('https://digesit.com/wp-content/uploads/2024/07/bodegasAM.webp')">

			
					</div>
								</div>
											<div class="swiper-slide" role="group" aria-label="2 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="1">
									<div class="elementor-carousel-image" role="img" aria-label="kalalua" style="background-image: url('https://digesit.com/wp-content/uploads/2024/07/kalalua.webp')">

			
					</div>
								</div>
											<div class="swiper-slide" role="group" aria-label="3 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="2">
									<div class="elementor-carousel-image" role="img" aria-label="honor" style="background-image: url('https://digesit.com/wp-content/uploads/2024/09/honor-e1726148845590.png')">

			
					</div>
								</div>
											<div class="swiper-slide swiper-slide-prev" role="group" aria-label="4 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="3">
									<div class="elementor-carousel-image" role="img" aria-label="nicola" style="background-image: url('https://digesit.com/wp-content/uploads/2024/07/nicola.webp')">

			
					</div>
								</div>
											<div class="swiper-slide swiper-slide-active" role="group" aria-label="5 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="4">
									<div class="elementor-carousel-image" role="img" aria-label="tsl" style="background-image: url('https://digesit.com/wp-content/uploads/2024/07/tsl.webp')">

			
					</div>
								</div>
											<div class="swiper-slide swiper-slide-next" role="group" aria-label="6 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="5">
									<div class="elementor-carousel-image" role="img" aria-label="perfect" style="background-image: url('https://digesit.com/wp-content/uploads/2024/07/perfect.webp')">

			
					</div>
								</div>
											<div class="swiper-slide" role="group" aria-label="7 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="6">
									<div class="elementor-carousel-image" role="img" aria-label="huawei" style="background-image: url('https://digesit.com/wp-content/uploads/2024/09/huawei-e1726148863183.png')">

			
					</div>
								</div>
											<div class="swiper-slide" role="group" aria-label="8 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="7">
									<div class="elementor-carousel-image" role="img" aria-label="jaco" style="background-image: url('https://digesit.com/wp-content/uploads/2024/07/jaco.webp')">

			
					</div>
								</div>
											<div class="swiper-slide" role="group" aria-label="9 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="8">
									<div class="elementor-carousel-image" role="img" aria-label="stia" style="background-image: url('https://digesit.com/wp-content/uploads/2024/07/stia.webp')">

			
					</div>
								</div>
											<div class="swiper-slide" role="group" aria-label="10 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="9">
									<div class="elementor-carousel-image" role="img" aria-label="CC2" style="background-image: url('https://digesit.com/wp-content/uploads/2024/07/CC2.webp')">

			
					</div>
								</div>
											<div class="swiper-slide" role="group" aria-label="11 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="10">
									<div class="elementor-carousel-image" role="img" aria-label="yiré médica" style="background-image: url('https://digesit.com/wp-content/uploads/2024/09/yire-medica.png')">

			
					</div>
								</div>
											<div class="swiper-slide" role="group" aria-label="12 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="11">
									<div class="elementor-carousel-image" role="img" aria-label="biodry" style="background-image: url('https://digesit.com/wp-content/uploads/2024/09/biodry-e1726148941908.png')">

			
					</div>
								</div>
											<div class="swiper-slide" role="group" aria-label="13 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="12">
									<div class="elementor-carousel-image" role="img" aria-label="braco" style="background-image: url('https://digesit.com/wp-content/uploads/2024/09/braco-e1726148950795.png')">

			
					</div>
								</div>
											<div class="swiper-slide" role="group" aria-label="14 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="13">
									<div class="elementor-carousel-image" role="img" aria-label="garper" style="background-image: url('https://digesit.com/wp-content/uploads/2024/09/garper-e1726148969566.png')">

			
					</div>
								</div>
											<div class="swiper-slide" role="group" aria-label="15 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="14">
									<div class="elementor-carousel-image" role="img" aria-label="anerica dental" style="background-image: url('https://digesit.com/wp-content/uploads/2024/09/anerica-dental-e1726148931329.png')">

			
					</div>
								</div>
											<div class="swiper-slide" role="group" aria-label="16 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="15">
									<div class="elementor-carousel-image" role="img" aria-label="memorable travel group" style="background-image: url('https://digesit.com/wp-content/uploads/2024/09/memorable-travel-group.png')">

			
					</div>
								</div>
											<div class="swiper-slide" role="group" aria-label="17 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="16">
									<div class="elementor-carousel-image" role="img" aria-label="hergoz perlas" style="background-image: url('https://digesit.com/wp-content/uploads/2024/09/hergoz-perlas-e1726149109601.png')">

			
					</div>
								</div>
									<div class="swiper-slide swiper-slide-duplicate" role="group" aria-label="1 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="0">
									<div class="elementor-carousel-image" role="img" aria-label="bodegasAM" style="background-image: url('https://digesit.com/wp-content/uploads/2024/07/bodegasAM.webp')">

			
					</div>
								</div><div class="swiper-slide swiper-slide-duplicate" role="group" aria-label="2 / 17" style="width: 126px; margin-right: 4px;" data-swiper-slide-index="1">
									<div class="elementor-carousel-image" role="img" aria-label="kalalua" style="background-image: url('https://digesit.com/wp-content/uploads/2024/07/kalalua.webp')">

			
					</div>
								</div></div>
															<div class="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal"><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 1"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 2"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 3"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 4"></span><span class="swiper-pagination-bullet swiper-pagination-bullet-active" tabindex="0" role="button" aria-label="Go to slide 5" aria-current="true"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 6"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 7"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 8"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 9"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 10"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 11"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 12"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 13"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 14"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 15"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 16"></span><span class="swiper-pagination-bullet" tabindex="0" role="button" aria-label="Go to slide 17"></span></div>
																<div class="elementor-swiper-button elementor-swiper-button-prev" role="button" tabindex="0" aria-label="Previous slide" aria-controls="swiper-wrapper-12a2453328c46a64">
							<i aria-hidden="true" class="eicon-chevron-left"></i>							<span class="elementor-screen-only">Anterior</span>
						</div>
						<div class="elementor-swiper-button elementor-swiper-button-next" role="button" tabindex="0" aria-label="Next slide" aria-controls="swiper-wrapper-12a2453328c46a64">
							<i aria-hidden="true" class="eicon-chevron-right"></i>							<span class="elementor-screen-only">Siguiente</span>
						</div>
												<span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
		</div>