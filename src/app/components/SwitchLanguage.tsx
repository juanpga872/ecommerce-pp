import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

const SwitchLanguage = () => {
  const { i18n } = useTranslation();
  const router = useRouter();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = event.target.value;
    i18n.changeLanguage(newLang);
    Cookies.set('i18next', newLang);
    router.refresh(); 
  };

  return (
    <select name="select-language" onChange={handleChange} defaultValue={i18n.language}>
      <option value="en">English</option>
      <option value="es">Spanish</option>
    </select>
  );
};

export default SwitchLanguage;



