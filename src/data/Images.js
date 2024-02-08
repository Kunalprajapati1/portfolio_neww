import React from 'react';
import Fade from 'react-reveal/Fade';

const Images = ({ isHovered }) => {
  const commonImageProps = `rounded-xl md:shadow-xl hover:opacity-70 transition ease-in-out md:shadow-yellow w-full h-full top-0 md:w-[170px] md:h-[350px] bg-blend-overlay ${isHovered && 'grayscale'}`;

  return (
    <div className="mt-8 mb-8 text-center md:ml-20">
      <h2 className="text-yellow-500 text-4xl font-bold mb-4 md:text-5xl">The Design of NEED4NEEDapk</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        {/* Images with Fade Effects */}
        {Array.from({ length: 8 }).map((_, index) => (
          <Fade key={index} left={(index % 2 === 0)} right={(index % 2 !== 0)}>
            <div className="transition ease-in-out mb-4">
              <img
                src={require(`../assets/design/n4n${index + 1}.jpg`)}
                className={commonImageProps}
                alt={`Image ${index + 1}`}
              />
            </div>
          </Fade>
        ))}

        {/* New Heading and Image for Calculator App */}
        <h2 className="text-yellow-500 text-2xl font-bold mb-4 md:text-5xl">Design of Calculator</h2>

        <Fade left>
          <div className="transition ease-in-out mb-4">
            <img
              src={require('../assets/design/cal1.jpg')}
              className={commonImageProps}
              alt="Calculator Image 1"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Images;
