import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Container, Button, IconButton, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home as HomeIcon, Person as PersonIcon, Code as CodeIcon, Description as CVIcon, Menu as MenuIcon } from '@mui/icons-material';

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/', icon: <HomeIcon /> },
    { name: 'Projects', path: '/projects', icon: <CodeIcon /> },
    { name: 'CV', path: '/cv', icon: <CVIcon /> },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="overflow-hidden">
      <List className="w-full max-w-full">
        {navItems.map((item) => (
          <ListItemButton
            key={item.name}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
            onClick={handleDrawerToggle}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        ))}
      </List>
    </div>
  );

  return (
    <AppBar position="static" color="default" elevation={0} className="bg-white border-b">
      <Container maxWidth="lg">
        <Toolbar className="justify-between">
          <Link to="/" className="text-xl font-bold text-gray-800 no-underline">
            Jabin Chen
          </Link>
          <nav className="hidden md:block">
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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className="md:hidden"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        {drawer}
      </Drawer>
    </AppBar>
  );
};

export default Header;