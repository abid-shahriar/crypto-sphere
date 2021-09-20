import styled from 'styled-components';
import { Footer, Sidebar } from '../components';

interface RootLayoutProps {
  children?: any;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Container>
      <Sidebar />
      <Main>
        {children}
        <Footer />
      </Main>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-grow: 1;
`;
const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  background-color: whitesmoke;
  margin-left: var(--sidebar-width);

  @media (max-width: 1250px) {
    margin-left: 15px;
  }

  & > *:first-child {
    flex-grow: 1;
    padding: 1rem;
    animation: fadeIN 100ms ease-in;
    padding-bottom: 4rem;
  }

  @keyframes fadeIN {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
