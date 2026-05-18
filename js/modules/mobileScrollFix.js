export function initMobileScrollFix() {
  const allNavLinks = document.querySelectorAll('.mobile-link, .scroll-down, .scroll-up');
  
  function getScrollOffset() {
    const isMobile = window.innerWidth <= 991;
    if (isMobile) {
      return 70;
    } else {
      const navStrip = document.querySelector('.nav-strip');
      return navStrip?.offsetHeight || 104;
    }
  }
  
  allNavLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href && href.startsWith('#')) {
      link.addEventListener('click', (e) => {
        const targetId = href.substring(1);
        if (!targetId) return;
        
        if (targetId === 'top' || targetId === '') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          history.pushState(null, null, '#top');
          return;
        }
        
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          const offset = getScrollOffset();
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
          history.pushState(null, null, href);
        }
      });
    }
  });
}