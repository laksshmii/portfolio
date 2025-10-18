'use client';
import { Container, Title, Text, Group, useMantineColorScheme, Stack, Box, Avatar, Divider } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconCode, IconRocket, IconHeart, IconTarget, IconBrain, IconUsers } from '@tabler/icons-react';

const personalInfo = [
  { label: 'Location', value: 'Cuddalore, Tamil Nadu', icon: '📍' },
  { label: 'Experience', value: '3+ Years', icon: '💼' },
  { label: 'Projects', value: '25+ Completed', icon: '🚀' },
  { label: 'Clients', value: '15+ Happy', icon: '😊' },
];

const values = [
  {
    icon: IconCode,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time'
  },
  {
    icon: IconRocket,
    title: 'Innovation',
    description: 'Always exploring new technologies and creative solutions'
  },
  {
    icon: IconHeart,
    title: 'Passion',
    description: 'Genuinely love what I do and it shows in my work'
  },
  {
    icon: IconTarget,
    title: 'Results',
    description: 'Focused on delivering real value and measurable outcomes'
  },
  {
    icon: IconBrain,
    title: 'Learning',
    description: 'Continuous growth mindset and staying current with trends'
  },
  {
    icon: IconUsers,
    title: 'Collaboration',
    description: 'Strong team player with excellent communication skills'
  }
];

export function About() {
  const { colorScheme } = useMantineColorScheme();
  
  return (
    <section
      id="about"
      style={{
        padding: '80px 0',
        backgroundColor: colorScheme === 'dark' 
          ? 'transparent' 
          : 'var(--mantine-color-slate-1)',
        position: 'relative',
      }}
    >
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Group align="flex-start" gap="xl">
            {/* Left Column - Personal Info */}
            <Box style={{ flex: '0 0 300px' }}>
              <Stack gap="xl">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Box
                    p="xl"
                    ta="center"
                    style={{
                      background: colorScheme === 'dark' 
                        ? 'rgba(255, 255, 255, 0.03)' 
                        : 'rgba(255, 255, 255, 0.7)',
                      borderRadius: '20px',
                      border: `1px solid ${colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                      boxShadow: colorScheme === 'dark' 
                        ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
                        : '0 8px 32px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Avatar
                      src="/kayal.jpeg"
                      size={120}
                      mx="auto"
                      mb="md"
                      style={{
                        border: `3px solid ${colorScheme === 'dark' ? 'var(--mantine-color-indigo-4)' : 'var(--mantine-color-indigo-6)'}`,
                      }}
                    />
                    <Title order={3} mb="xs">Lakshmi Vengatesan</Title>
                    <Text c="indigo" fw={600} mb="md">FullStack Developer | Front-End Engineer</Text>
                    
                    <Divider mb="md" />
                    
                    <Stack gap="md">
                      {personalInfo.map((info, index) => (
                        <motion.div
                          key={info.label}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          whileHover={{ x: 5 }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          viewport={{ once: true }}
                        >
                          <Group gap="sm">
                            <Text size="lg">{info.icon}</Text>
                            <Box>
                              <Text size="sm" c="dimmed">{info.label}</Text>
                              <Text fw={600}>{info.value}</Text>
                            </Box>
                          </Group>
                        </motion.div>
                      ))}
                    </Stack>
                  </Box>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Box
                    p="lg"
                    style={{
                      background: colorScheme === 'dark' 
                        ? 'rgba(99, 102, 241, 0.1)' 
                        : 'rgba(99, 102, 241, 0.05)',
                      borderRadius: '16px',
                      border: `1px solid ${colorScheme === 'dark' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)'}`,
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                  >
                    <Title order={4} mb="md" ta="center">📍 Address</Title>
                    <Text ta="center" mb="xs" fw={600}>Cuddalore, Tamil Nadu</Text>
                    <Text ta="center" size="sm" c="dimmed" mb="md">India 607001</Text>
                    <Text ta="center" size="xs" c="dimmed">
                      Available for remote work worldwide
                    </Text>
                  </Box>
                </motion.div>
              </Stack>
            </Box>

            {/* Right Column - Main Content */}
            <Box style={{ flex: 1 }}>
              <Stack gap="xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Text
                    size="sm"
                    fw={600}
                    c="indigo"
                    tt="uppercase"
                    mb="xs"
                  >
                    About Me
                  </Text>
                  <Title
                    order={2}
                    size="2rem"
                    fw={700}
                    mb="lg"
                    c={colorScheme === 'dark' ? 'slate.1' : 'slate.9'}
                  >
                    Passionate Developer & Problem Solver
                  </Title>
                  
                  <Stack gap="md">
                    <Text size="lg" style={{ lineHeight: 1.7 }}>
                      Full-stack web developer with 3 years of experience building scalable, 
                      user-centric web applications. Proficient in React.js and Material-UI for 
                      creating responsive UIs, and in Java Spring Boot for developing robust backend systems.
                    </Text>
                    
                    <Text size="lg" style={{ lineHeight: 1.7 }}>
                      Adept at integrating frontend and back-end components to deliver seamless, 
                      high-performance solutions. Known for creative problem-solving, attention to detail, 
                      and a strong drive for delivering quality software.
                    </Text>
                    
                    <Text size="lg" style={{ lineHeight: 1.7 }}>
                      Currently working at HEPL, focusing on innovative software solutions and 
                      continuously learning new technologies to enhance development capabilities.
                    </Text>
                  </Stack>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Title order={3} mb="lg">What I Value</Title>
                  <Box
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                      gap: '1rem',
                    }}
                  >
                    {values.map((value, index) => (
                      <motion.div
                        key={value.title}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        whileHover={{ y: -8, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <Box
                          p="md"
                          style={{
                            background: colorScheme === 'dark' 
                              ? 'rgba(255, 255, 255, 0.03)' 
                              : 'rgba(255, 255, 255, 0.6)',
                            borderRadius: '12px',
                            border: `1px solid ${colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                            boxShadow: colorScheme === 'dark' 
                              ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
                              : '0 8px 32px rgba(0, 0, 0, 0.1)',
                            height: '100%',
                            cursor: 'pointer',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                          }}
                        >
                          <value.icon
                            size={24}
                            color={colorScheme === 'dark' ? 'var(--mantine-color-indigo-4)' : 'var(--mantine-color-indigo-6)'}
                            style={{ marginBottom: '0.5rem' }}
                          />
                          <Text fw={600} mb="xs">{value.title}</Text>
                          <Text size="sm" c="dimmed" style={{ lineHeight: 1.5 }}>
                            {value.description}
                          </Text>
                        </Box>
                      </motion.div>
                    ))}
                  </Box>
                </motion.div>
              </Stack>
            </Box>
          </Group>
        </motion.div>
      </Container>
    </section>
  );
}