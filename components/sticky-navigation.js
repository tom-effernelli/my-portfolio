"use client";
import { useState, useEffect } from "react";
import NavigationBarHomeSelected from "./navigation-bar-home-selected";
import NavigationBarAboutSelected from "./navigation-bar-about-selected";
import NavigationBarContactSelected from "./navigation-bar-contact-selected";
import NavigationBarDevSelected from "./navigation-bar-dev-selected";
import NavigationBarArtsSelected from "./navigation-bar-arts-selected";

const StickyNavigation = ({ currentPage = "home" }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Trouve l'élément header principal par son id
      let headerElement = document.getElementById('header');
      
      // Fallback: chercher par d'autres moyens si l'id n'est pas trouvé
      if (!headerElement) {
        // Chercher par le texte "TOM EFFERNELLI" et remonter au conteneur parent
        const elements = document.querySelectorAll('b');
        for (let element of elements) {
          if (element.textContent.includes('TOM EFFERNELLI')) {
            headerElement = element.closest('div[id="header"]') || element.closest('div');
            break;
          }
        }
      }
      
      if (headerElement) {
        const rect = headerElement.getBoundingClientRect();
        // Le header est visible si son bas est au-dessus du haut de l'écran
        const isVisible = rect.bottom > 0;
        setIsHeaderVisible(isVisible);
      } else {
        // Si on ne trouve pas le header, on considère qu'il est visible
        setIsHeaderVisible(true);
      }
    };

    // Attendre que le DOM soit complètement chargé avec plusieurs tentatives
    const checkForHeader = () => {
      const headerElement = document.getElementById('header');
      if (headerElement) {
        handleScroll();
      } else {
        setTimeout(checkForHeader, 100);
      }
    };

    // Démarrer la vérification
    const timeoutId = setTimeout(checkForHeader, 50);

    // Écouter le scroll
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage]);

  // Ne pas afficher la barre sticky si le header principal est visible
  if (isHeaderVisible) {
    return null;
  }

  // Rendre le composant de navigation approprié selon la page
  const renderNavigationComponent = () => {
    switch (currentPage) {
      case "home":
        return <NavigationBarHomeSelected className="fixed top-0 left-0 w-full z-50" />;
      case "about":
        return <NavigationBarAboutSelected className="fixed top-0 left-0 w-full z-50" />;
      case "contact":
        return <NavigationBarContactSelected className="fixed top-0 left-0 w-full z-50" />;
      case "dev":
        return <NavigationBarDevSelected className="fixed top-0 left-0 w-full z-50" />;
      case "arts":
        return <NavigationBarArtsSelected className="fixed top-0 left-0 w-full z-50" />;
      default:
        return <NavigationBarHomeSelected className="fixed top-0 left-0 w-full z-50" />;
    }
  };

  return renderNavigationComponent();
};

export default StickyNavigation;
