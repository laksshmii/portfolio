'use client';
import { Container, Title, Text, Timeline, Badge, Group, useMantineColorScheme, Stack, Box } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconBriefcase, IconCalendar, IconMapPin } from '@tabler/icons-react';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Tender Software India Private Limited',
    location: 'Puducherry',
    period: '09/2025 - Present',
    description: 'A global software company delivering innovative digital solutions and technology services across the US, UK, Europe, Australia, and India.',
    technologies: ['Next.js', 'Redux-Saga', 'JavaScript', 'Mantine UI', 'Tailwind CSS'],
    achievements: [
      'Building responsive, high-performance interfaces using Next.js, Redux-Saga, and modern UI frameworks',
      'Implemented Next.js middleware to enhance security headers and protect client–server communication',
      'Collaborated with cross-functional teams via Trello for sprint tracking, feature planning, and code reviews',
      'Gained strong real-time experience in Redux-Saga, API optimization, and server-side rendering (SSR)',
      'Contributed to reusable UI components, dashboard modules, and optimized API workflows'
    ]
  },
  {
    title: 'Junior Engineer',
    company: 'HEPL',
    location: 'Cuddalore',
    period: '07/2022 - 08/2025',
    description: 'A company focusing on delivering innovative software solutions. Developed responsive web applications using React.js, JavaScript, HTML, and CSS to deliver seamless user experiences.',
    technologies: ['React.js', 'JavaScript', 'Material-UI', 'PHP', 'Laravel', 'HTML', 'CSS'],
    achievements: [
      'Developed responsive web applications using React.js, JavaScript, HTML, and CSS',
      'Collaborated with cross-functional teams to design and implement scalable, maintainable solutions',
      'Designed efficient database schemas to optimize data storage and retrieval',
      'Fixed critical bugs and enhanced application performance, improving user experience by 28%',
      'Created custom Material-UI components and UI interfaces to enhance user interaction'
    ]
  }
];

export function Experience() {
  const { colorScheme } = useMantineColorScheme();
  
  return (
    <section
      id="experience"
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
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <Badge variant="light" color="purple" size="lg" mb="md">
            Career Journey
          </Badge>
          <Title
            order={2}
            size="2rem"
            fw={700}
            mb="md"
            c={colorScheme === 'dark' ? 'slate.1' : 'slate.9'}
          >
            Professional Experience
          </Title>
          <Text
            size="lg"
            c={colorScheme === 'dark' ? 'slate.4' : 'slate.6'}
            maw={600}
            mx="auto"
          >
            My journey from Junior Engineer to Software Engineer, building scalable applications and innovative solutions.
          </Text>
        </motion.div>

        <Timeline active={experiences.length} bulletSize={24} lineWidth={2} color="indigo">
          {experiences.map((exp, index) => (
            <Timeline.Item
              key={index}
              bullet={<IconBriefcase size={12} />}
              title={
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  whileHover={{ x: 8, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Box
                    p="xl"
                    style={{
                      background: colorScheme === 'dark' 
                        ? 'rgba(255, 255, 255, 0.05)' 
                        : 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '16px',
                      border: `1px solid ${colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                      marginBottom: '2rem',
                      cursor: 'pointer',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: colorScheme === 'dark' 
                        ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
                        : '0 8px 32px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Stack gap="md">
                      <Group justify="space-between" align="flex-start">
                        <div>
                          <Title order={3} size="lg" mb={4}>
                            {exp.title}
                          </Title>
                          <Text fw={600} c="indigo" size="md">
                            {exp.company}
                          </Text>
                        </div>
                        <Badge variant="light" color="cyan" size="sm">
                          {exp.period}
                        </Badge>
                      </Group>
                      
                      <Group gap="xs">
                        <IconMapPin size={16} />
                        <Text size="sm" c="dimmed">{exp.location}</Text>
                      </Group>
                      
                      <Text size="sm" style={{ lineHeight: 1.6 }}>
                        {exp.description}
                      </Text>
                      
                      <div>
                        <Text size="sm" fw={600} mb="xs">Key Achievements:</Text>
                        <Stack gap={4}>
                          {exp.achievements.map((achievement, i) => (
                            <Text key={i} size="sm" c="dimmed">
                              • {achievement}
                            </Text>
                          ))}
                        </Stack>
                      </div>
                      
                      <Group gap="xs">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="dot" size="sm" color="slate">
                            {tech}
                          </Badge>
                        ))}
                      </Group>
                    </Stack>
                  </Box>
                </motion.div>
              }
            />
          ))}
        </Timeline>
      </Container>
    </section>
  );
}