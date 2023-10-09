import { ImageList } from "@mui/material";
import ImageListItem from "@mui/material/ImageListItem";
import { Image } from "antd";
import React, { useEffect, useState } from "react";
import { galleryImages } from "../../constants/gallery";

const Gallery = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, []);

  let cols = 4;
  if (width < 800) {
    cols = 2;
  }
  if (width < 1200) {
    cols = 2;
  } else if (width < 1024) {
    cols = 3;
  }

  return (
    <section>
      <div className="section_padding"></div>
      <div className="section_heading">
        <p className="is-size-2 has-text-weight-semibold blue_color has-text-centered mb-3">
          Gallery
        </p>
      </div>
      <div className="container">
        <ImageList cols={cols} className="Py-4">
          {galleryImages.map((item, key) => {
            let style = item.style || {};
            return (
              <ImageListItem
                rows={item.rows}
                cols={item.cols}
                key={key}
                className="gallery_image"
              >
                <Image
                  src={item.src}
                  alt={item.alt || "404 - Not Found"}
                  style={{ ...style }}
                />
              </ImageListItem>
            );
          })}
        </ImageList>
      </div>
      <div className="section_padding"></div>
    </section>
  );
};

export default Gallery;
