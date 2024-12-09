document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".about, .features, .cta");
  
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
          section.classList.add("visible");
        }
      });
    };
  
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
  });
  