/**
 * Digital Portfolio CNS - Nguyễn Thị Thu Thanh
 * Class: VNU1001_E252050
 * Interactive Tab Navigation & Page Adjustments
 */

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('.nav-item');
  const sections = document.querySelectorAll('.section');

  // Tab switching logic
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      // Get target section ID
      const targetId = item.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // Remove active class from all nav items
        navItems.forEach(nav => nav.classList.remove('active'));
        // Add active class to current nav item
        item.classList.add('active');

        // Hide all sections with fade-out
        sections.forEach(sec => {
          sec.classList.remove('active');
        });

        // Show target section
        targetSection.classList.add('active');

        // Smooth scroll main content to top
        const mainContent = document.querySelector('.main-content');
        if (mainContent) {
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Handle URL hashes on page load
  const hash = window.location.hash;
  if (hash) {
    const targetItem = document.querySelector(`.nav-item[href="${hash}"]`);
    if (targetItem) {
      targetItem.click();
    }
  }
});
