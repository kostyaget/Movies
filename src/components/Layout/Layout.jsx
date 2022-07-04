import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Container from 'components/Container';
import Logo from 'components/Logo';
import Navigation from 'components/Navigation';
import Loader from 'components/Loader';
import { AppHeader, AppBar, MainSection } from './Layout.styled';

export default function Layout() {
  return (
    <>
      <AppHeader>
        <Container>
          <AppBar>
            <Logo />
            <Navigation />
          </AppBar>
        </Container>
      </AppHeader>
      <Container>
        <MainSection>
          <Suspense fallback={<Loader />}>
            <Outlet />
            <Toaster position="top-right" reverseOrder={false} />
          </Suspense>
        </MainSection>
      </Container>
    </>
  );
}
