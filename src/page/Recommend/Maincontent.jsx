import React, { useState } from "react";
import ContactDetails from "../../components/Recommended/ContactDetails";
import AttractionInfo from "../../components/Recommended/AttractionInfo";
import party from "../../assets/party.jpg";
import candles from "../../assets/candles.jpg";
import festival from "../../assets/festival.jpg";

const Maincontent = () => {
  const [imgPreview, setImgPreview] = useState(party);

  const handleOnClick = (img) => {
    setImgPreview(img);
  };

  const imgs = [candles,festival];
  return (
    <div className="md:w-[70%] grid gap-4">
      <div className="h-[300px] md:h-[500px] overflow-hidden rounded-lg">
        <img className="h-auto w-full object-center " src={imgPreview} alt="" />
      </div>
      <div class="grid grid-cols-5 gap-4">
        {imgs.map((item, i) => {
          return (
            <div key={i}>
              <img
                onClick={() => setImgPreview(item)}
                className="h-auto max-w-full rounded-lg cursor-pointer"
                src={item}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <AttractionInfo />
      <ContactDetails />
    </div>
  );
};

export default Maincontent;
