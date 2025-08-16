export default function setSmoothScroll(){

  const handleClick = (e) => {
        const anchor = e.target.closest('a[href^="#"]');
        if (anchor) {
          const id = anchor.getAttribute('href').slice(1);
          const el = document.getElementById(id);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: "smooth" });
          }
        }
      };
      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);
}
