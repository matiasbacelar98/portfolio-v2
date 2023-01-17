import { useRouter } from 'next/router';

export const useCurrentLocale = () => {
  const router = useRouter();
  const currentLocale = router.locale;

  const changeLocale = (locale: string) => {
    router.push(`${router.asPath}`, '', {
      locale: locale,
    });
  };

  return { currentLocale, changeLocale };
};
