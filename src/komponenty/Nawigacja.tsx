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
    { path: '/#naszeGry', label: t('nawiPasek.naszeGry') },
    { path: '/#kontakt', label: t('nawiPasek.kontakt') },
    { path: '/#media', label: t('nawiPasek.media') },
    { path: '/wesprzyjnas', label: t('nawiPasek.wesprzyj') },
    { path: '/praca', label: t('nawiPasek.praca') },
    { path: '/regulamin', label: t('nawiPasek.regulamin') }
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