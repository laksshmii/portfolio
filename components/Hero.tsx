'use client';
import { Container, Title, Text, Button, Group, Avatar, useMantineColorScheme, Stack, Badge, Divider } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconDownload, IconArrowRight, IconMail, IconMapPin, IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';

export function Hero() {
  const { colorScheme } = useMantineColorScheme();
  
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '2rem 0',
        backgroundColor: colorScheme === 'dark' 
          ? 'transparent' 
          : 'var(--mantine-color-gray-0)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Elegant Grid Pattern - Full viewport */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundImage: colorScheme === 'dark'
            ? `linear-gradient(rgba(168, 85, 247, 0.03) 1px, transparent 1px),
               linear-gradient(90deg, rgba(168, 85, 247, 0.03) 1px, transparent 1px)`
            : `linear-gradient(rgba(168, 85, 247, 0.02) 1px, transparent 1px),
               linear-gradient(90deg, rgba(168, 85, 247, 0.02) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: 0.4,
          zIndex: -1,
        }}
      />

      {/* Floating Bubbles - Extended to viewport edges */}
      {[
        { size: 120, top: '15%', left: '3%', delay: 0, color: 'violet' },
        { size: 80, top: '70%', left: '5%', delay: 2, color: 'cyan' },
        { size: 100, top: '25%', right: '3%', delay: 1, color: 'cyan' },
        { size: 60, top: '80%', right: '5%', delay: 3, color: 'violet' },
        { size: 90, top: '45%', left: '1%', delay: 1.5, color: 'violet' },
        { size: 70, top: '55%', right: '1%', delay: 2.5, color: 'cyan' },
      ].map((bubble, index) => (
        <motion.div
          key={`bubble-${index}`}
          style={{
            position: 'fixed',
            [bubble.left ? 'left' : 'right']: bubble.left || bubble.right,
            top: bubble.top,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            background: colorScheme === 'dark'
              ? `radial-gradient(circle, rgba(${bubble.color === 'violet' ? '168, 85, 247' : '6, 182, 212'}, 0.15), transparent 70%)`
              : `radial-gradient(circle, rgba(${bubble.color === 'violet' ? '168, 85, 247' : '6, 182, 212'}, 0.08), transparent 70%)`,
            borderRadius: '50%',
            filter: 'blur(20px)',
            zIndex: 0,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6 + bubble.delay,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: bubble.delay,
          }}
        />
      ))}

      {/* Geometric Shapes - Extended to viewport edges */}
      {[
        { size: 60, top: '20%', left: '8%', delay: 0, shape: 'circle' },
        { size: 40, top: '60%', left: '2%', delay: 2, shape: 'square' },
        { size: 80, top: '40%', right: '4%', delay: 1, shape: 'triangle' },
        { size: 50, top: '75%', right: '12%', delay: 3, shape: 'square' },
        { size: 45, top: '35%', left: '1%', delay: 1.5, shape: 'circle' },
        { size: 55, top: '85%', right: '2%', delay: 2.5, shape: 'triangle' },
      ].map((shape, index) => (
        <motion.div
          key={`shape-${index}`}
          style={{
            position: 'fixed',
            [shape.left ? 'left' : 'right']: shape.left || shape.right,
            top: shape.top,
            width: `${shape.size}px`,
            height: `${shape.size}px`,
            background: colorScheme === 'dark'
              ? 'linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(6, 182, 212, 0.1))'
              : 'linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(6, 182, 212, 0.05))',
            border: `1px solid ${colorScheme === 'dark' 
              ? 'rgba(168, 85, 247, 0.2)' 
              : 'rgba(168, 85, 247, 0.1)'}`,
            borderRadius: shape.shape === 'circle' ? '50%' : shape.shape === 'square' ? '12px' : '0',
            clipPath: shape.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
            zIndex: 0,
          }}
          animate={{
            rotate: [0, 360],
            y: [0, -15, 0],
          }}
          transition={{
            rotate: { duration: 20, repeat: Infinity, ease: 'linear' },
            y: { duration: 4 + shape.delay, repeat: Infinity, ease: 'easeInOut', delay: shape.delay },
          }}
        />
      ))}

      {/* Floating Dots - Extended across viewport */}
      {Array.from({ length: 8 }).map((_, index) => (
        <motion.div
          key={`dot-${index}`}
          style={{
            position: 'fixed',
            left: `${5 + (index % 4) * 22}%`,
            top: `${25 + Math.floor(index / 4) * 50}%`,
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: colorScheme === 'dark'
              ? 'rgba(168, 85, 247, 0.4)'
              : 'rgba(168, 85, 247, 0.3)',
            zIndex: 0,
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: index * 0.5,
            ease: 'easeInOut',
          }}
        />
      ))}

      <Container size="lg" style={{ position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Group align="flex-start" gap="xl">
            {/* Left Column - Avatar & Contact */}
            <Stack align="center" style={{ flex: '0 0 300px' }}>
              <Avatar
                src="/kayal.jpeg"
                size={200}
                radius="md"
                style={{
                  border: `3px solid ${colorScheme === 'dark' ? 'var(--mantine-color-violet-4)' : 'var(--mantine-color-violet-6)'}`,
                }}
              />
              
              <Badge variant="light" color="cyan" size="lg">
                Available for Work
              </Badge>
              
              <Group gap="xs">
                <IconMapPin size={16} />
                <Text size="sm" c="dimmed">Cuddalore, Tamil Nadu</Text>
              </Group>
              
              <Group>
                <Button
                  variant="light"
                  size="xs"
                  component="a"
                  href="https://github.com/laksshmii"
                  target="_blank"
                  leftSection={<IconBrandGithub size={16} />}
                >
                  GitHub
                </Button>
                <Button
                  variant="light"
                  size="xs"
                  component="a"
                  href="https://www.linkedin.com/in/lakshmi-v-0633b4206/"
                  target="_blank"
                  leftSection={<IconBrandLinkedin size={16} />}
                >
                  LinkedIn
                </Button>
              </Group>
            </Stack>
            
            {/* Right Column - Main Content */}
            <Stack style={{ flex: 1 }}>
              <div>
                <Title
                  order={1}
                  size="2.5rem"
                  fw={700}
                  mb={4}
                  style={{
                    background: 'linear-gradient(135deg, var(--mantine-color-indigo-6), var(--mantine-color-cyan-6))',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Lakshmi Vengatesan
                </Title>
                
                <Title
                  order={2}
                  size="1.2rem"
                  fw={500}
                  c={colorScheme === 'dark' ? 'slate.4' : 'slate.7'}
                  mb="lg"
                >
                  FullStack Developer | Front-End Engineer
                </Title>
              </div>
              
              <Text
                size="lg"
                c={colorScheme === 'dark' ? 'slate.3' : 'slate.7'}
                style={{ lineHeight: 1.6 }}
                mb="lg"
              >
                Full-stack web developer with 3 years of experience building scalable, user-centric web applications. 
                Proficient in React.js and Material-UI for creating responsive UIs, and in Java Spring Boot for 
                developing robust backend systems.
              </Text>
              
              <Divider mb="lg" />
              
              {/* Skills Preview */}
              <div>
                <Text fw={600} mb="sm">Core Technologies</Text>
                <Group gap="xs" mb="lg">
                  {['React.js', 'Material-UI', 'JavaScript', 'PHP', 'Laravel', 'Java'].map((tech) => (
                    <Badge key={tech} variant="dot" color="indigo" size="sm">
                      {tech}
                    </Badge>
                  ))}
                </Group>
              </div>
              
              {/* Action Buttons */}
              <Group>
                <Button
                  size="md"
                  rightSection={<IconArrowRight size={18} />}
                  onClick={() => {
                    const element = document.getElementById('projects');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  View Projects
                </Button>
                
                <Button
                  size="md"
                  variant="outline"
                  leftSection={<IconMail size={18} />}
                  onClick={() => {
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Me
                </Button>
                
                <Button
                  size="md"
                  variant="light"
                  leftSection={<IconDownload size={18} />}
                >
                  Resume
                </Button>
              </Group>
              
              {/* Quick Stats */}
              <Group mt="lg">
                {[
                  { label: 'Projects', value: '25+' },
                  { label: 'Experience', value: '3+ Years' },
                  { label: 'Happy Clients', value: '15+' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <Text fw={700} size="lg" c="indigo">
                      {stat.value}
                    </Text>
                    <Text size="xs" c="dimmed">
                      {stat.label}
                    </Text>
                  </div>
                ))}
              </Group>
            </Stack>
          </Group>
        </motion.div>
      </Container>
    </section>
  );
}