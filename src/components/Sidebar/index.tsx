import styled from 'styled-components';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { RiCoinsFill, RiExchangeDollarFill } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import { GiTwoCoins } from 'react-icons/gi';
import { IoNewspaperOutline } from 'react-icons/io5';

import { Typography } from '..';

const menuItems = [
  { name: 'home', link: '/', icon: <AiOutlineHome size='2.5rem' style={{ marginTop: '-6px' }} /> },
  { name: 'currencies', link: '/currencies', icon: <GiTwoCoins size='2.5rem' /> },
  { name: 'exchanges', link: '/exchanges', icon: <RiExchangeDollarFill size='2.5rem' /> },
  { name: 'news', link: '/news', icon: <IoNewspaperOutline size='2.5rem' /> }
];

export default function Sidebar() {
  const { pathname } = useRouter();

  return (
    <Container>
      <AppName>
        <RiCoinsFill color='white' size='4rem' />
        <Typography textAlign='center' variant='title' color='var(--clr-white)' fontFamily='var(--font-secondary)' padding='0 0 0 10px'>
          CryptoSphere
        </Typography>
      </AppName>

      <Menu>
        {menuItems.map((item, idx) => (
          <Link href={item.link} key={idx} passHref>
            <MenuItem className={pathname === item.link ? 'active' : ''}>
              {item.icon}
              <Typography textTransform='capitalize' fontFamily='var(--font-secondary)' fontSize='2rem' padding='0 0 0 10px'>
                {item.name}
              </Typography>
            </MenuItem>
          </Link>
        ))}
      </Menu>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--bg-primary);
  padding: 2rem;
  width: var(--sidebar-width);
  position: fixed;
  top: 0;
  left: 0;
  min-height: 100vh;
`;
const AppName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Menu = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 6rem;
`;
const MenuItem = styled('a')`
  display: flex;
  align-items: center;
  padding: 1rem 0;
  transition: 150ms;

  :hover {
    color: var(--clr-blue);
  }

  &.active {
    color: var(--clr-blue);
  }
`;
