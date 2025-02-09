"use client"
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import {
  NextButton,
  PrevButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons'

const TWEEN_FACTOR_BASE = 0.2

type PropType = {
  slides: string[]
  options?: EmblaOptionsType
}

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])


  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
    tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
      return slideNode.querySelector('.embla__parallax__layer') as HTMLElement
    })
  }, [])

  const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
    tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
  }, [])

  const tweenParallax = useCallback(
    (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
      const engine = emblaApi.internalEngine()
      const scrollProgress = emblaApi.scrollProgress()
      const slidesInView = emblaApi.slidesInView()
      const isScrollEvent = eventName === 'scroll'

      emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
        let diffToTarget = scrollSnap - scrollProgress
        const slidesInSnap = engine.slideRegistry[snapIndex]

        slidesInSnap.forEach((slideIndex) => {
          if (isScrollEvent && !slidesInView.includes(slideIndex)) return

          if (engine.options.loop) {
            engine.slideLooper.loopPoints.forEach((loopItem) => {
              const target = loopItem.target()

              if (slideIndex === loopItem.index && target !== 0) {
                const sign = Math.sign(target)

                if (sign === -1) {
                  diffToTarget = scrollSnap - (1 + scrollProgress)
                }
                if (sign === 1) {
                  diffToTarget = scrollSnap + (1 - scrollProgress)
                }
              }
            })
          }

          const translate = diffToTarget * (-1 * tweenFactor.current) * 100
          const tweenNode = tweenNodes.current[slideIndex]
          tweenNode.style.transform = `translateX(${translate}%)`
        })
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return

    setTweenNodes(emblaApi)
    setTweenFactor(emblaApi)
    tweenParallax(emblaApi)

    emblaApi
      .on('reInit', setTweenNodes)
      .on('reInit', setTweenFactor)
      .on('reInit', tweenParallax)
      .on('scroll', tweenParallax)
      .on('slideFocus', tweenParallax)
  }, [emblaApi, tweenParallax])

  const [isLandscape, setIsLandscape] = useState<boolean | null>(null);
    const [isMobile, setIsMobile] = useState<boolean>(false); // Nuevo estado para identificar si es móvil
    
      useEffect(() => {
        if (typeof window !== "undefined") {
          const checkIfMobile = window.innerWidth <= 900; // Definir un límite para dispositivos móviles
          setIsMobile(checkIfMobile); // Actualizar el estado según el tamaño de la ventana
    
          setIsLandscape(window.innerWidth > window.innerHeight);
          
          const handleResize = () => {
            setIsMobile(window.innerWidth <= 900); // Verificar en cada redimensionado si es móvil
            setIsLandscape(window.innerWidth > window.innerHeight);
          };
    
          window.addEventListener("resize", handleResize);
          return () => window.removeEventListener("resize", handleResize);
        }
      }, []);
    
      if (isLandscape === null) return null;

  return (
    <div className="embla flex flex-row">
      <div className="embla__controls">
          <div className={`embla__buttons ${(isMobile && !isLandscape) ? "hidden" : "grid"}`}>
            <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          </div>
        </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className={`embla__container ${(isMobile && isLandscape) ? "h-[200px] w-[90%]" : (isMobile) ? "h-[400px] w-full" :"h-[400px] w-[80%]"}`}>
          {slides.map((item, index) => (
            <div className={`embla__slide flex-none ${(isMobile && isLandscape) ? "w-1/2" : (isMobile) ? "w-[70%]" : "w-1/2"}`} key={index}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <img
                    className="embla__slide__img embla__parallax__img"
                    src={`${item}`}
                    alt="Your alt text"
                  />
                  <div className="absolute bottom-0 left-0 p-4">
                    <FontAwesomeIcon icon={faCirclePlus} size="2x" style={{ color: "#ffc404"}}/>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="embla__controls">
        <div className={`embla__buttons ${(isMobile && !isLandscape) ? "hidden" : "grid"}`}>
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </div>
  )
}

export default EmblaCarousel
