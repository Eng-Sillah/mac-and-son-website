// navlinks.tsx
import Link from "next/link";

interface NavLinksProps {
  isMenuOpen: boolean;
  closeMenu: () => void;
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

export default function NavLinks({ isMenuOpen, closeMenu }: NavLinksProps) {
  return (
    <>
      {links.map(link => (
        <Link key={link.path} href={link.path} onClick={closeMenu}>
          <a>{link.title}</a>
        </Link>
      ))}
    </>
  );
}
