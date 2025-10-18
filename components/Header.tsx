'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Group, 
  Burger, 
  Text, 
  useMantineTheme,
  Container 
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

// Create a simple header component
const CustomHeader = ({ children, ...props }: any) => (
  <header 
    style={{ 
      height: 70, 
      padding: '0 1rem', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      backgroundColor: 'white', 
      borderBottom: '1px solid #e0e0e0', 
      zIndex: 1000 
    }} 
    {...props}
  >
    {children}
  </header>
);

const Header = () => {
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <CustomHeader>
      <Container size="lg" style={{ width: '100%' }}>
        <Group justify="space-between" style={{ height: '100%', width: '100%' }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Text 
              size="xl" 
              fw={700} 
              variant="gradient" 
              gradient={{ from: 'blue', to: 'purple' }}
            >
              DevPortfolio
            </Text>
          </motion.div>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Group gap="xl">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  style={{ textDecoration: 'none' }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Text 
                    c="gray.7" 
                    fw={500}
                    style={{ 
                      cursor: 'pointer',
                      transition: 'color 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = theme.colors.blue[6];
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = theme.colors.gray[7];
                    }}
                  >
                    {item.name}
                  </Text>
                </motion.a>
              ))}
            </Group>
          )}

          {/* Mobile Burger Menu */}
          {isMobile && (
            <motion.div whileTap={{ scale: 0.9 }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
              />
            </motion.div>
          )}
        </Group>
      </Container>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobile && opened && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed',
              top: 70,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'white',
              zIndex: 1000,
              padding: '1rem'
            }}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: theme.radius.md,
                    cursor: 'pointer',
                    marginBottom: '0.5rem',
                    transition: 'background-color 0.2s'
                  }}
                  onClick={() => setOpened(false)}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setOpened(false);
                    }
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = theme.colors.blue[0];
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  tabIndex={0}
                  role="button"
                >
                  <a 
                    href={item.href} 
                    style={{ 
                      textDecoration: 'none', 
                      color: 'inherit',
                      display: 'block'
                    }}
                  >
                    <Text fw={500}>{item.name}</Text>
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </CustomHeader>
  );
};

export default Header;