import { useEffect, useRef, useState } from "react";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { useLocation } from "react-router-dom";
const navLinks = [
  ["home", "Home"],
  ["about", "About"],
  ["skills", "Skills"],
  ["experience", "Experience"],
  ["project", "Projects"],
  ["ai-focus", "AI Focus"],
  ["contact", "Contact"],
];
export default function Navbar() {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  const toggle = useRef(null);
  const header = useRef(null);
  useEffect(() => {
    const update = () => {
      const current = navLinks
        .filter(
          ([id]) =>
            (document.getElementById(id)?.getBoundingClientRect().top ??
              Infinity) <= 160,
        )
        .at(-1);
      if (current) setActive(current[0]);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  useEffect(() => {
    if (!isOpen) return;
    const close = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggle.current?.focus();
      }
    };
    const outside = (event) => {
      if (!header.current?.contains(event.target)) setIsOpen(false);
    };
    document.addEventListener("keydown", close);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", close);
      document.removeEventListener("pointerdown", outside);
    };
  }, [isOpen]);
  return (
    <header className="site-header" ref={header}>
      <div className="container nav-inner">
        <a className="brand" href="/#home" aria-label="Manoj Kumar, home">
          <span className="brand-mark">
            m<span>.</span>
          </span>
          <span>
            manoj<span className="brand-dot">.dev</span>
          </span>
        </a>
        <button
          ref={toggle}
          type="button"
          className="menu-toggle"
          aria-expanded={isOpen}
          aria-controls="main-nav"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={isOpen ? "nav-links is-open" : "nav-links"}
        >
          {navLinks.map(([id, label]) => (
            <a
              key={id}
              href={"/#" + id}
              aria-current={
                (
                  pathname.startsWith("/project/")
                    ? id === "project"
                    : active === id
                )
                  ? "location"
                  : undefined
              }
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
        <a className="nav-contact" href="/#contact">
          Let&apos;s talk <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
