import { Link } from 'react-router-dom';

interface NavItem {
  path: string;
  label: string;
}

export const Nawigacja = () => {
  const menuItems: NavItem[] = [
    { path: '/#oNas', label: 'O Nas' },
    { path: '/#naszeGry', label: 'Nasze Gry' },
    { path: '/#kontakt', label: 'Kontakt' },
    { path: '/#media', label: 'Media Społecznościowe' },
    { path: '/wesprzyjnas', label: 'Wesprzyj Nas!' },
    { path: '/praca', label: 'Praca' },
    { path: '/regulamin', label: 'Regulamin' }
  ];

  return (
    <nav>
      {menuItems.map(item => (
        <Link key={item.path} to={item.path}>
          <div className="przyciskNaglowka">{item.label}</div>
        </Link>
      ))}
    </nav>
  );
};