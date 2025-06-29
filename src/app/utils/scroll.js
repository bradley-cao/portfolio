/**
 * Smooth scroll to a section with offset for fixed navigation
 * @param {string} sectionId - The ID of the section to scroll to (without #)
 * @param {number} offset - Additional offset from the top (default: 80px for navigation)
 */
export const scrollToSection = (sectionId, offset = 80) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });
  }
};

/**
 * Smooth scroll to top of page
 */
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
