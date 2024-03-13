import React, { useState } from "react";
import ContactDetails from "../../components/Recommended/ContactDetails";
import AttractionInfo from "../../components/Recommended/AttractionInfo";

const Maincontent = () => {
  const [imgPreview, setImgPreview] = useState(
    "https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg"
  );

  const handleOnClick = (img) => {
    setImgPreview(img);
  };
  return (
    <div className="md:w-[70%] grid gap-4">
      <div className="h-[300px] md:h-[500px] overflow-hidden rounded-lg">
        <img className="h-auto w-full object-center " src={imgPreview} alt="" />
      </div>
      <div class="grid grid-cols-5 gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            onClick={() =>
              handleOnClick(
                "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
              )
            }
            className="h-auto max-w-full rounded-lg cursor-pointer"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg"
            alt=""
          />
        </div>
      </div>
      <AttractionInfo />
      <ContactDetails />
    </div>
  );
};

export default Maincontent;
