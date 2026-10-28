import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const update = () => setVisible(window.scrollY > 700);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return visible ? (
    <a className="back-to-top" href="#home" aria-label="Back to top">
      <FiArrowUp />
    </a>
  ) : null;
}
