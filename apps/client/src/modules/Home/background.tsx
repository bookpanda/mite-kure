export function Background(): JSX.Element {
  return (
    <video
      autoPlay
      loop
      muted
      style={{
        position: "fixed",
        minWidth: "100%",
        minHeight: "100%",
        objectFit: "cover",
        filter: "opacity(0.7)",
        zIndex: -1,
      }}
    >
      <source src="./mite_kure.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
  );
}
