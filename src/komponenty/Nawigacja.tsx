import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface NavItem {
  path: string;
  label: string;
}

export const Nawigacja = () => {
  const { t } = useTranslation();

  const menuItems: NavItem[] = [
    { path: '/#oNas', label: t('nawiPasek.oNas') },
    { path: '/#naszeGry', label: 'Nasze Gry' },
    { path: '/#kontakt', label: 'Kontakt' },
    { path: '/#media', label: 'Media' },
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