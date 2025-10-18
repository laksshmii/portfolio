'use client';
import { Container, Title, Text, Button, Group, Badge, useMantineColorScheme, Stack, Box, Anchor } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconExternalLink, IconBrandGithub, IconCode, IconUsers, IconStar } from '@tabler/icons-react';

const projects = [
  {
    title: 'Planning Beats – DJ & Event Management',
    description: 'A multi-role event management and booking system. Built dynamic dashboards, invoice and payment modules, customized templates, and branding settings. Integrated Apple Music and Spotify APIs for live music and playlist management.',
    technologies: ['Next.js', 'Redux-Saga', 'JavaScript', 'Mantine UI'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    stats: { users: '800+', stars: 35, commits: 220 }
  },
  {
    title: 'Budgie-HRMS Product',
    description: 'A comprehensive HR management platform. Led a team of developers and HR professionals to design and implement customized modules for employee data management, onboarding processes, leave management, settings and payroll functionalities.',
    technologies: ['React.js', 'RTK', 'MUI', 'Webpack', 'CSS', 'Formik'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    stats: { users: '500+', stars: 25, commits: 180 }
  },
  {
    title: 'Dynamic Form Builder',
    description: 'A tool for users to create forms easily with various customization options. Developed drag-and-drop functionality with Formik and Yup for real-time validation, conditional rendering and role-based input visibility.',
    technologies: ['React.js', 'RTK', 'MUI', 'Formik', 'Yup'],
    liveUrl: '#',
    githubUrl: '#',
    featured: true,
    stats: { users: '300+', stars: 18, commits: 95 }
  },
  {
    title: 'Budgie(2.4)',
    description: 'Enhanced version of the form builder with improved UI/UX using Ant Design. Implemented advanced conditional rendering and dependency-based fields with role-based access control.',
    technologies: ['React.js', 'Ant Design', 'Redux', 'CSS'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    stats: { users: '400+', stars: 22, commits: 120 }
  },
  {
    title: 'Dairy Daily',
    description: 'An application to manage and visualize dairy product details. Developed modules to manage master data and product details with interactive graphical views for data visualization.',
    technologies: ['PHP', 'Laravel', 'Bootstrap', 'CSS', 'JavaScript'],
    liveUrl: '#',
    githubUrl: '#',
    featured: false,
    stats: { users: '200+', stars: 12, commits: 75 }
  }
];

export function Projects() {
  const { colorScheme } = useMantineColorScheme();
  
  return (
    <section
      id="projects"
      style={{
        padding: '80px 0',
        backgroundColor: colorScheme === 'dark' 
          ? 'transparent' 
          : 'var(--mantine-color-slate-0)',
        position: 'relative',
      }}
    >
      <Container size="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <Text
            size="sm"
            fw={600}
            c="indigo"
            tt="uppercase"
            ls={1}
            mb="xs"
          >
            Portfolio Showcase
          </Text>
          <Title
            order={2}
            size="2.5rem"
            fw={700}
            mb="md"
            c={colorScheme === 'dark' ? 'slate.1' : 'slate.9'}
          >
            Featured Projects
          </Title>
        </motion.div>

        <Stack gap="xl">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box
                p="xl"
                style={{
                  background: colorScheme === 'dark' 
                    ? 'rgba(255, 255, 255, 0.02)' 
                    : 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '24px',
                  border: `1px solid ${colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  position: 'relative',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {project.featured && (
                  <Badge
                    variant="gradient"
                    gradient={{ from: 'indigo', to: 'purple' }}
                    leftSection={<IconStar size={12} />}
                    style={{
                      position: 'absolute',
                      top: '1rem',
                      right: '1rem',
                    }}
                  >
                    Featured
                  </Badge>
                )}

                <Group align="flex-start" gap="xl">
                  <Box style={{ flex: 1 }}>
                    <Stack gap="md">
                      <div>
                        <Title order={3} size="xl" mb="xs">
                          {project.title}
                        </Title>
                        <Text c="dimmed" style={{ lineHeight: 1.6 }}>
                          {project.description}
                        </Text>
                      </div>

                      <Group gap="xs">
                        {project.technologies.map(tech => (
                          <Badge key={tech} variant="light" color="cyan" size="sm">
                            {tech}
                          </Badge>
                        ))}
                      </Group>

                      <Group gap="xl">
                        <Group gap="xs">
                          <IconUsers size={16} />
                          <Text size="sm" c="dimmed">{project.stats.users} users</Text>
                        </Group>
                        <Group gap="xs">
                          <IconStar size={16} />
                          <Text size="sm" c="dimmed">{project.stats.stars} stars</Text>
                        </Group>
                        <Group gap="xs">
                          <IconCode size={16} />
                          <Text size="sm" c="dimmed">{project.stats.commits} commits</Text>
                        </Group>
                      </Group>

                      <Group>
                        <Button
                          leftSection={<IconExternalLink size={16} />}
                          component={Anchor}
                          href={project.liveUrl}
                          target="_blank"
                        >
                          Live Demo
                        </Button>
                        <Button
                          variant="outline"
                          leftSection={<IconBrandGithub size={16} />}
                          component={Anchor}
                          href={project.githubUrl}
                          target="_blank"
                        >
                          Source Code
                        </Button>
                      </Group>
                    </Stack>
                  </Box>

                  <Box
                    style={{
                      width: '200px',
                      height: '120px',
                      background: colorScheme === 'dark'
                        ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2))'
                        : 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${colorScheme === 'dark' ? 'rgba(99, 102, 241, 0.3)' : 'rgba(99, 102, 241, 0.2)'}`,
                    }}
                  >
                    <Text size="sm" c="dimmed" ta="center">
                      Project Preview
                    </Text>
                  </Box>
                </Group>
              </Box>
            </motion.div>
          ))}
        </Stack>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Box
            mt={50}
            p="xl"
            style={{
              background: colorScheme === 'dark' 
                ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(6, 182, 212, 0.1))' 
                : 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(6, 182, 212, 0.05))',
              borderRadius: '20px',
              border: `1px solid ${colorScheme === 'dark' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)'}`,
              textAlign: 'center',
            }}
          >
            <Title order={3} mb="md">
              More Projects on GitHub
            </Title>
            <Text c="dimmed" mb="lg" maw={500} mx="auto">
              These are my key projects showcasing full-stack development skills. Check out my GitHub for more projects and contributions.
            </Text>
            <Button
              leftSection={<IconBrandGithub size={18} />}
              component={Anchor}
              href="https://github.com/laksshmii"
              target="_blank"
            >
              View All Projects
            </Button>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
}