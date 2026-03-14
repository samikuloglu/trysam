import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';
import SamWidget from '@/components/SamWidget/SamWidget';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
      <SamWidget />
    </>
  );
}
