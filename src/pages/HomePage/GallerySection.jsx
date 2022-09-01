import styled from "styled-components";
import Gallery from "react-photo-gallery";
import { useCallback } from "react";
import { useState } from "react";
import { photos } from "../../utils/data";
import Carousel, { Modal, ModalGateway } from "react-images";
import Title from "../../components/Title";
import { Reveal } from "react-awesome-reveal";
import { fadeInUp } from "../../utils/styles";
import { DEVICE } from "../../utils/device";

const StyledGallery = styled.div`
  max-width: 1400px;
  margin: auto;
  padding: 0px 15px;
  padding-top: 70px;

  @media ${DEVICE.tablet} {
    padding-top: 150px;
  }
`;

const GallerySection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <StyledGallery>
      <Reveal keyframes={fadeInUp} delay={600} duration={600}>
        <Title sub="CAPTURE THE MOMENT" title="GALLERY" />
      </Reveal>
      <Gallery photos={photos} onClick={openLightbox} />
      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={photos.map((x) => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title,
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </StyledGallery>
  );
};

export default GallerySection;
