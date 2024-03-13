import React, { useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import Title from "./Title";

const ContactDetails = () => {
  const [iframeHtml, setIframeHtml] = useState(
    `<iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2507.4591248418765!2d-1.3148888234064455!3d51.0630741717157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTHCsDAzJzQ3LjEiTiAxwrAxOCc0NC4zIlc!5e0!3m2!1sen!2s!4v1710335746156!5m2!1sen!2s" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  const renderIframe = () => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(iframeHtml, "text/html");
    const iframeElement = doc.querySelector("iframe");

    if (iframeElement) {
      // Modify the style attribute using a function
      iframeElement.setAttribute(
        "style",
        "border: 0; width: 100%; height: 300px;"
      );

      // Convert the modified HTML back to string
      return new XMLSerializer().serializeToString(doc);
    } else {
      return null;
    }
  };
  return (
    <div className="gap-4 border-2 border-gray-300 py-4 mb-8">
      <div className="flex gap-4 border-b-2 border-gray-300 px-4 pb-4">
        <IoLocationOutline className="w-8 h-8" />

        <Title name="Contact Details" />
      </div>
      <div className="flex flex-col md:flex-row gap-8 px-4 pt-5 text-left">
        <div dangerouslySetInnerHTML={{ __html: renderIframe() }} />{" "}
        <div className="mb-8">
          <p className="text-left text-gray-500">General Admission</p>
          <p className="text-left text-gray-500">Adult £12.50</p>
          <p className="text-left text-gray-500">Child (5-15) £8.50</p>
          <p className="text-left text-gray-500">
            Family (up to 5 people, 2 adults max.) £39.50
          </p>
          <p className="text-left text-gray-500">Concession £10.00</p>
          <p className="text-left text-gray-500 mb-8">Art Fund Member £6.25</p>
          <a
            href="#"
            class="text-white bg-black hover:bg-[#222] transition ease-in-out duration-150 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
