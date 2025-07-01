window.addEventListener('scroll', () => {
  const navbar = document.getElementById("navbar");
  if (navbar) { // Verifica se o navbar não é nulo
    if (window.scrollY > 0) {
      // verifica se a classe de navbar não é scrolled:
      if(!navbar.classList.contains("scrolled")){
        navbar.classList.add("scrolled");
      }
    } else {
      // verifica se a classe de navbar é scrolled:
      if(navbar.classList.contains("scrolled")){
      navbar.classList.remove("scrolled");
      }
    }
  }
});


    // Função para rolar até a seção específica
  export const handleScroll = (sectionId) => {
    const navbar = document.getElementById("navbar");
    const section = document.getElementById(sectionId);
    if (section) {
      if(navbar){
        navbar.classList.add("scrolled");
      }

      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
// funcionalidades.tsx
export const initScrollAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fadeInUp");
        entry.target.classList.remove("imgsec2");

      }
    });
  });

  const animatableElements = document.querySelectorAll(".animatable");
  animatableElements.forEach((element) => {
    observer.observe(element);
  });

  // Retorna uma função de cleanup para remover os observadores quando necessário
  return () => {
    animatableElements.forEach((element) => {
      observer.unobserve(element);
    });
  };
};


  window.addEventListener("load", () => {
    const section = document.getElementById("root");
    if (section){
      section.scrollIntoView({ behavior: 'smooth' });
    }
  });
  