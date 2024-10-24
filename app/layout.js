import MainHeader from '@/Components/MainHeader/MainHeader';
import './globals.css';
import MainHeaderBg from '@/Components/MainHeader/MainHeaderBg';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBg />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
