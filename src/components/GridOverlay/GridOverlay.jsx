import "./GridOverlay.scss";

const GridOverlay = () => {
  return (
    <div className="grid-overlay" aria-hidden="true">
      {[...Array(9)].map((_, index) => (
        <div
          key={index}
          className={`grid-overlay__line ${index === 8 ? "has-crosshair" : ""}`}
        >
          {index === 8 && (
            <>
              <div className="grid-overlay__crosshair-h-line" />
              <div className="grid-overlay__crosshair-circle" />
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default GridOverlay;
