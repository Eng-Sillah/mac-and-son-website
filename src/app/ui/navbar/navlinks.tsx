// NavLinks.tsx
import Link from "next/link";
import styles from "./navlinks.module.css"; // Add your CSS module import

interface NavLinksProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const links = [
  {
    path: '/',
    title: 'Home'
  },
  {
    path: '/services',
    title: 'Services'
  },
  {
    path: '/about',
    title: 'About'
  },
  {
    path: '/projects',
    title: 'Projects'
  },
  {
    path: '/contact',
    title: 'Contact'
  },
];

const NavLinks: React.FC<NavLinksProps> = ({ isMenuOpen, toggleMenu }) => {
  return (
    <div className={`${styles.navLinks} ${isMenuOpen ? styles.showLinks : ""}`}>
      {links.map(link => (
        <Link key={link.path} href={link.path}>
          <a onClick={toggleMenu}>{link.title}</a>
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
