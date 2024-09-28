import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Container, Button } from '@mui/material';
import { Home as HomeIcon, Person as PersonIcon, Code as CodeIcon, Description as CVIcon } from '@mui/icons-material';

const Header = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { name: 'About', path: '/about', icon: <PersonIcon /> },
    { name: 'Projects', path: '/projects', icon: <CodeIcon /> },
    { name: 'CV', path: '/cv', icon: <CVIcon /> },
  ];

  return (
    <AppBar position="static" color="default" elevation={0} className="bg-white border-b">
      <Container maxWidth="lg">
        <Toolbar className="justify-between">
          <Link to="/" className="text-xl font-bold text-gray-800 no-underline">
            Jabin Chen
          </Link>
          <nav>
            <ul className="flex space-x-2">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Button
                    component={Link}
                    to={item.path}
                    startIcon={item.icon}
                    className={`text-sm ${
                      location.pathname === item.path
                        ? 'bg-gray-100 text-gray-900'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    {item.name}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;