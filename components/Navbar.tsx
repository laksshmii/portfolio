'use client';
import { useState, useEffect, useRef } from 'react';
import { Group, Text, Burger, Container, Drawer, Stack, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { motion } from 'framer-motion';
import { 
  IconHome, 
  IconUser, 
  IconCode, 
  IconBriefcase, 
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconSun,
  IconMoon
} from '@tabler/icons-react';
import { useDisclosure } from '@mantine/hooks';

const navItems = [
  { label: 'Home', href: '#home', icon: IconHome },
  { label: 'About', href: '#about', icon: IconUser },
  { label: 'Experience', href: '#experience', icon: IconBriefcase },
  { label: 'Skills', href: '#skills', icon: IconCode },
  { label: 'Projects', href: '#projects', icon: IconBriefcase },
  { label: 'Contact', href: '#contact', icon: IconMail },
];

export function Navigation() {
  const [active, setActive] = useState('#home');
  const [scrolled, setScrolled] = useState(false);
  const [opened, { toggle, close }] = useDisclosure(false);
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActive(`#${current}`);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setActive(href);
    close();
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backdropFilter: 'blur(20px)',
          backgroundColor: colorScheme === 'dark' 
            ? 'rgba(15, 23, 42, 0.9)' 
            : 'rgba(248, 250, 252, 0.9)',
          borderBottom: scrolled 
            ? `1px solid ${colorScheme === 'dark' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)'}`
            : 'none',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Container size="lg">
          <Group justify="space-between" py="md">
            {/* Animated Logo */}
            <motion.div 
              whileHover={{ scale: 1.1, rotate: [0, -10, 10, 0] }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <Text 
                fw={700} 
                size="xl" 
                style={{ 
                  cursor: 'pointer',
                  background: 'linear-gradient(135deg, var(--mantine-color-indigo-6), var(--mantine-color-cyan-6))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  letterSpacing: '-0.02em'
                }}
                onClick={() => handleNavClick('#home')}
              >
                LV
              </Text>
            </motion.div>

            {/* Desktop Navigation */}
            <Group gap="lg" visibleFrom="md">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ y: 0, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ transition: 'all 0.3s ease' }}
                >
                  <Text
                    component="a"
                    href={item.href}
                    fw={600}
                    size="sm"
                    style={{
                      cursor: 'pointer',
                      padding: '8px 16px',
                      borderRadius: '8px',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      color: active === item.href 
                        ? 'white' 
                        : colorScheme === 'dark' 
                          ? 'var(--mantine-color-slate-3)' 
                          : 'var(--mantine-color-slate-7)',
                      background: active === item.href 
                        ? colorScheme === 'dark'
                          ? 'var(--mantine-color-violet-9)'
                          : 'var(--mantine-color-violet-0)'
                        : 'transparent',
                      fontWeight: active === item.href ? 600 : 500,
                    }}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                  >
                    {item.label}
                  </Text>
                </motion.div>
              ))}
            </Group>

            {/* Theme Toggle & Social Icons */}
            <Group gap="xs" visibleFrom="sm">
              <motion.div 
                whileHover={{ scale: 1.2, rotate: 180 }} 
                whileTap={{ scale: 0.8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ActionIcon
                  variant="light"
                  size="lg"
                  onClick={() => toggleColorScheme()}
                  aria-label="Toggle color scheme"
                >
                  {colorScheme === 'dark' ? <IconSun size={20} /> : <IconMoon size={20} />}
                </ActionIcon>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.15, y: -2 }} 
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ActionIcon
                  variant="light"
                  size="lg"
                  component="a"
                  href="https://github.com"
                  target="_blank"
                >
                  <IconBrandGithub size={20} />
                </ActionIcon>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.15, y: -2 }} 
                whileTap={{ scale: 0.85 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ActionIcon
                  variant="light"
                  size="lg"
                  component="a"
                  href="https://linkedin.com"
                  target="_blank"
                >
                  <IconBrandLinkedin size={20} />
                </ActionIcon>
              </motion.div>
            </Group>

            {/* Mobile Menu Button */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="md"
                color="var(--mantine-color-gray-6)"
                size="sm"
              />
            </motion.div>
          </Group>
        </Container>
      </motion.header>

      {/* Mobile Navigation Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        size="300px"
        withCloseButton={false}
        styles={{
          content: {
            backgroundColor: colorScheme === 'dark' ? 'var(--mantine-color-gray-9)' : 'var(--mantine-color-white)',
          },
        }}
      >
        <Stack gap="lg" p="xl">
          {/* Close Button */}
          <Group justify="end">
            <motion.div whileHover={{ scale: 1.1, rotate: 90 }} whileTap={{ scale: 0.9 }}>
              <ActionIcon
                variant="light"
                color="gray"
                onClick={close}
                size="lg"
              >
                <Text size="xl">×</Text>
              </ActionIcon>
            </motion.div>
          </Group>

          {/* Navigation Items */}
          {navItems.map((item, index) => (
            <motion.div
              key={item.href}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ x: 10, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Group
                onClick={() => handleNavClick(item.href)}
                style={{
                  padding: '16px 20px',
                  borderRadius: '16px',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  color: active === item.href 
                    ? 'var(--mantine-color-violet-6)' 
                    : colorScheme === 'dark' 
                      ? 'var(--mantine-color-gray-3)' 
                      : 'var(--mantine-color-gray-7)',
                  background: active === item.href 
                    ? colorScheme === 'dark'
                      ? 'var(--mantine-color-violet-9)'
                      : 'var(--mantine-color-violet-0)'
                    : colorScheme === 'dark'
                      ? 'var(--mantine-color-gray-8)'
                      : 'var(--mantine-color-gray-1)',
                }}
              >
                <item.icon 
                  size={22} 
                  color={active === item.href 
                    ? 'var(--mantine-color-violet-6)' 
                    : colorScheme === 'dark' 
                      ? 'var(--mantine-color-gray-4)' 
                      : 'var(--mantine-color-gray-6)'} 
                />
                <Text fw={600} size="lg">{item.label}</Text>
              </Group>
            </motion.div>
          ))}

          {/* Theme Toggle & Social Icons - Mobile */}
          <Group justify="center" mt="xl" gap="lg">
            <motion.div 
              whileHover={{ scale: 1.3, rotate: 180 }} 
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ActionIcon
                variant="light"
                size="xl"
                onClick={() => toggleColorScheme()}
              >
                {colorScheme === 'dark' ? <IconSun size={24} /> : <IconMoon size={24} />}
              </ActionIcon>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.3, y: -5 }} 
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ActionIcon
                variant="light"
                size="xl"
                component="a"
                href="https://github.com"
                target="_blank"
              >
                <IconBrandGithub size={24} />
              </ActionIcon>
            </motion.div>
            <motion.div 
              whileHover={{ scale: 1.3, y: -5 }} 
              whileTap={{ scale: 0.8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ActionIcon
                variant="light"
                size="xl"
                component="a"
                href="https://linkedin.com"
                target="_blank"
              >
                <IconBrandLinkedin size={24} />
              </ActionIcon>
            </motion.div>
          </Group>
        </Stack>
      </Drawer>

      {/* Spacer to prevent content from being hidden behind fixed header */}
      <div style={{ height: '80px' }} />
    </>
  );
}