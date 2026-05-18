export function initScrollEffects() {
  const animatedElements = document.querySelectorAll(
    '.section-title, .why-highlight, .why-copy, .skill-card, .learning-bubble, ' +
    '.project-panel, .testimonial-card, .contact-copy, .contact-info, .contact-form'
  );

  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('scroll-visible');
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

  animatedElements.forEach(el => {
    el.classList.add('scroll-hidden');
    fadeObserver.observe(el);
  });

  const skillCards = document.querySelectorAll('.skill-card');
  skillCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.03}s`;
  });

  const testimonials = document.querySelectorAll('.testimonial-card');
  testimonials.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
  });

  // ============================================
  // ACTIVE NAVIGATION HIGHLIGHTING - VERBESSERT
  // ============================================

  const sections = [
    { id: 'why-title', navSelector: '.desktop-nav a[href="#why-title"], .mobile-link[href="#why-title"]', order: 1 },
    { id: 'skills-title', navSelector: '.desktop-nav a[href="#skills-title"], .mobile-link[href="#skills-title"]', order: 2 },
    { id: 'projects-title', navSelector: '.desktop-nav a[href="#projects-title"], .mobile-link[href="#projects-title"]', order: 3 },
    { id: 'contact-title', navSelector: '.desktop-nav a[href="#contact-title"], .mobile-link[href="#contact-title"]', order: 4 }
  ];

  const heroSection = document.querySelector('.hero');

  // Zentrale Funktion zum Aktualisieren der aktiven Navigation
  function updateActiveNavLink() {
    const scrollPosition = window.scrollY + 150;
    const heroBottom = heroSection?.offsetHeight || 600;

    // Hero-Bereich: Kein Link aktiv
    if (scrollPosition < heroBottom - 100) {
      removeAllActiveClasses();
      return;
    }

    // Finde die aktuell sichtbare Sektion (priorisiere die, die am meisten im Viewport ist)
    let bestSection = null;
    let maxVisibility = 0;

    for (const section of sections) {
      const element = document.getElementById(section.id);
      if (element) {
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Berechne wie viel der Sektion im Viewport sichtbar ist
        const visibleTop = Math.max(0, rect.top);
        const visibleBottom = Math.min(viewportHeight, rect.bottom);
        const visibleHeight = Math.max(0, visibleBottom - visibleTop);
        const visibility = visibleHeight / element.offsetHeight;
        
        if (visibility > maxVisibility) {
          maxVisibility = visibility;
          bestSection = section;
        }
      }
    }

    if (bestSection) {
      setActiveLinks(bestSection.navSelector);
    } else {
      // Fallback: Nach Scrollposition
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;
          
          if (scrollPosition >= offsetTop - 100 && scrollPosition < offsetBottom - 50) {
            setActiveLinks(section.navSelector);
            return;
          }
        }
      }
      
      // Ganz unten: Contact aktivieren
      const scrollBottom = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      if (scrollBottom >= pageHeight - 200) {
        setActiveLinks('.desktop-nav a[href="#contact-title"], .mobile-link[href="#contact-title"]');
      }
    }
  }

  // Hilfsfunktionen
  function removeAllActiveClasses() {
    document.querySelectorAll('.desktop-nav a, .mobile-link').forEach(link => {
      link.classList.remove('active');
    });
  }

  function setActiveLinks(selector) {
    removeAllActiveClasses();
    document.querySelectorAll(selector).forEach(link => {
      link.classList.add('active');
    });
  }

  // ============================================
  // NAVIGATION KLICK - SOFORTIGE AKTIVIERUNG
  // ============================================
  
  function setupNavigationClickHandlers() {
    document.querySelectorAll('.desktop-nav a, .mobile-link').forEach(link => {
      // Entferne alte Listener (vermeidet Duplikate)
      const newLink = link.cloneNode(true);
      link.parentNode.replaceChild(newLink, link);
      
      newLink.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetId = href.substring(1);
          const targetElement = document.getElementById(targetId);
          
          if (targetElement) {
            // Sofort den geklickten Link aktivieren
            removeAllActiveClasses();
            this.classList.add('active');
            
            // Hole den korrekten Offset für das Scrollen
            const isMobile = window.innerWidth <= 991;
            const offset = isMobile ? 70 : 104;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;
            
            // Sanft scrollen
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            
            // Aktualisiere URL
            history.pushState(null, null, href);
            
            // Nach dem Scrollen die Navigation nochmal korrigieren
            // Mehrere Timeouts für verschiedene Szenarien
            setTimeout(() => {
              updateActiveNavLink();
            }, 100);
            setTimeout(() => {
              updateActiveNavLink();
            }, 300);
            setTimeout(() => {
              updateActiveNavLink();
            }, 600);
          }
        }
      });
    });
  }

  // Throttled Scroll Handler
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(() => {
        updateActiveNavLink();
        ticking = false;
      });
      ticking = true;
    }
  }

  window.addEventListener('scroll', onScroll);
  window.addEventListener('resize', () => updateActiveNavLink());
  
  // Navigation Click Handler setup
  setupNavigationClickHandlers();
  
  // Initial ausführen
  setTimeout(() => {
    updateActiveNavLink();
  }, 100);
  
  // Auch bei Hash-Change (z.B. beim Seitenload mit # im Link) aktualisieren
  window.addEventListener('hashchange', () => {
    setTimeout(() => {
      updateActiveNavLink();
    }, 100);
  });
}