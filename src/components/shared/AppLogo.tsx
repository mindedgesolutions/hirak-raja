import Image from 'next/image';

const AppLogo = ({ width, height }: { width?: number; height?: number }) => {
  const appTitle = process.env.NEXT_APP_TITLE || `Windows Ventures`;
  const logoWidth = width ?? 60;
  const logoHeight = height ?? 60;

  return (
    <Image
      src="/logo.png"
      alt={appTitle}
      width={logoWidth}
      height={logoHeight}
    />
  );
};
export default AppLogo;
