import { useEffect, useState } from "react";

const BackToTop = ({
  topRef,
}: {
  topRef: React.RefObject<HTMLDivElement | null>; // This a prop created to receive the ref from the layout
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 10) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: "smooth" }); // If the ref is not null, scroll to the top smoothly
    }
  };
  return (
    <>
      {visible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            right: 20,
            bottom: 20,
            padding: "8px 12px",
            borderRadius: 4,
            zIndex: 1000,
          }}
          aria-label="Back to top"
        >
          ↑ BACK TO TOP
        </button>
      )}
    </>
  );
};

export default BackToTop;
