type OfferGalleryProps = {
    images: string[];
};

export default function OfferGalleryComponent({images}: OfferGalleryProps): JSX.Element {
  return(
    <div className="offer__gallery">
      {images.map((src) => (
        <div className="offer__image-wrapper" key={src.slice(0,6)}>
          <img className="offer__image" src={src} alt="Photo studio"/>
        </div>
      ))}
    </div>
  );
}
