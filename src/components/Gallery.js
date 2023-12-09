import React from 'react';

const Gallery = () => (
  <div>
    <div className="container mx-auto p-4">
      <h3 className="text-center my-4">Our Gallery</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover" data-mdb-ripple="true" data-mdb-ripple-color="dark">
          <img width={500} height={300} src="https://i.postimg.cc/3JWTBStm/DSC-6179.jpg" className="w-full transition duration-300 ease-linear align-middle" alt="" />
          <div>
            <div className="hover-overlay">
              <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out"> </div>
            </div>
          </div>
        </div>
        <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover" data-mdb-ripple="true" data-mdb-ripple-color="dark">
          <img width={500} height={300} src="https://i.postimg.cc/3JWTBStm/DSC-6179.jpg" className="w-full transition duration-300 ease-linear align-middle" alt="" />
          <div>
            <div className="hover-overlay">
              <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out"> </div>
            </div>
          </div>
        </div>
        <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover" data-mdb-ripple="true" data-mdb-ripple-color="dark">
          <img width={500} height={300} src="https://i.postimg.cc/3JWTBStm/DSC-6179.jpg" className="w-full transition duration-300 ease-linear align-middle" alt="" />
          <div>
            <div className="hover-overlay">
              <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out"> </div>
            </div>
          </div>
        </div>
        <div className="zoom shadow-lg rounded-lg relative overflow-hidden bg-no-repeat bg-cover" data-mdb-ripple="true" data-mdb-ripple-color="dark">
          <img width={500} height={300} src="https://i.postimg.cc/3JWTBStm/DSC-6179.jpg" className="w-full transition duration-300 ease-linear align-middle" alt="" />
          <div>
            <div className="hover-overlay">
              <div className="mask absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
