import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    id: 1,
    // altText: 'Slide hola',
    // caption: 'Slide 1'
  },
  {
    id: 2,
    src: 'https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/04ca4e50-7e71-431a-8141-055aea56bdaf_rw_600.jpg?h=c1df49ec10fed217376249d37f6b0de6'
  },
  {
    id: 3,
    src: 'https://pro2-bar-s3-cdn-cf6.myportfolio.com/d808e60d-8745-44ff-9a04-0f8acfd145ff/78203b70-caf8-47fd-a338-67e7739dfbec_rw_600.jpg?h=c3467b4db2fa6ea87f1cae73cd7ff8ed'
  },
  {
    id: 4,
    altText: 'slide 4',
    caption: 'slide 4'
  },
  {
    id: 5,
    altText: 'slide 5',
    caption: 'slide 5',
  }
];

const Example = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={item}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
              {/* <img src={props.foto} alt={item.altText}/> */}
              <img src={props.foto} alt={item.altText} />
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>

      
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >

        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default Example;