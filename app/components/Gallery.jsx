"use client";

const Gallery = () => {
  return (
    <div>
      <div className="my-20">
        <h2 className="text-5xl text-center font-bold">Gallery</h2>
        <p className="text-center text-gray-700 mt-2">Have a sneek pick of what IDK looks like</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <div className="space-y-2">
          <img
            className="w-full h-auto object-cover"
            src="/images/3.jpg"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover"
            src="/images/10.jpg"
            alt="Image Description"
          />
          
        </div>
        <div className="space-y-2">
          <img
            className="w-full h-auto object-cover"
            src="/images/12.jpg"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover"
            src="/images/8.jpg"
            alt="Image Description"
          />
        </div>
        <div className="space-y-2">
          <img
            className="w-full h-auto object-cover"
            src="/images/3.jpg"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover"
            src="/images/6.jpg"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover"
            src="/images/7.jpg"
            alt="Image Description"
          />
        </div>
        <div className="space-y-2">
          <img
            className="w-full h-auto object-cover"
            src="/images/4.jpg"
            alt="Image Description"
          />
          <img
            className="w-full h-auto object-cover"
            src="/images/12.jpg"
            alt="Image Description"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
