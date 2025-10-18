'use client';
import { Container, Title, Text, Progress, Group, useMantineColorScheme, Stack, Box, RingProgress, Center } from '@mantine/core';
import { motion } from 'framer-motion';

const skillsData = [
  { name: 'React.js', level: 95, color: 'indigo', category: 'Frontend', emoji: '⚛️' },
  { name: 'Next.js', level: 92, color: 'indigo', category: 'Frontend', emoji: '🚀' },
  { name: 'JavaScript', level: 90, color: 'yellow', category: 'Frontend', emoji: '🟨' },
  { name: 'HTML/CSS', level: 88, color: 'orange', category: 'Frontend', emoji: '🌐' },
  { name: 'Redux Saga', level: 85, color: 'violet', category: 'Frontend', emoji: '🔄' },
  { name: 'Material-UI', level: 88, color: 'blue', category: 'Frontend', emoji: '🎨' },
  { name: 'Tailwind CSS', level: 85, color: 'cyan', category: 'Frontend', emoji: '💨' },
  { name: 'Bootstrap', level: 82, color: 'purple', category: 'Frontend', emoji: '📱' },
  { name: 'PHP', level: 85, color: 'purple', category: 'Backend', emoji: '🐘' },
  { name: 'Laravel', level: 82, color: 'red', category: 'Backend', emoji: '🔥' },
  { name: 'Java', level: 80, color: 'orange', category: 'Backend', emoji: '☕' },
  { name: 'SQL', level: 85, color: 'cyan', category: 'Database', emoji: '🗄️' },
  { name: 'RESTful APIs', level: 88, color: 'green', category: 'Backend', emoji: '🔗' },
  { name: 'Git & GitHub', level: 90, color: 'gray', category: 'Tools', emoji: '📂' },
  { name: 'Webpack', level: 78, color: 'blue', category: 'Tools', emoji: '📦' },
  { name: 'jQuery', level: 75, color: 'blue', category: 'Frontend', emoji: '💙' },
];

const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'APIs'];

export function Skills() {
  const { colorScheme } = useMantineColorScheme();
  
  return (
    <section
      id="skills"
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
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <Text
            size="sm"
            fw={600}
            c="indigo"
            tt="uppercase"
            mb="xs"
          >
            Technical Expertise
          </Text>
          <Title
            order={2}
            size="2.5rem"
            fw={700}
            mb="md"
            c={colorScheme === 'dark' ? 'slate.1' : 'slate.9'}
          >
            Skills & Technologies
          </Title>
        </motion.div>

        <Group justify="center" mb="xl">
          {categories.map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box
                p="md"
                style={{
                  background: colorScheme === 'dark' 
                    ? 'rgba(99, 102, 241, 0.1)' 
                    : 'rgba(99, 102, 241, 0.05)',
                  borderRadius: '12px',
                  border: `1px solid ${colorScheme === 'dark' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)'}`,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                <Text size="sm" fw={600} ta="center">
                  {category}
                </Text>
              </Box>
            </motion.div>
          ))}
        </Group>

        <Box
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {skillsData.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Box
                p="lg"
                style={{
                  background: colorScheme === 'dark' 
                    ? 'rgba(255, 255, 255, 0.03)' 
                    : 'rgba(255, 255, 255, 0.6)',
                  borderRadius: '16px',
                  border: `1px solid ${colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                  boxShadow: colorScheme === 'dark' 
                    ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
                    : '0 8px 32px rgba(0, 0, 0, 0.1)',
                  textAlign: 'center',
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <RingProgress
                  size={80}
                  thickness={8}
                  sections={[{ value: skill.level, color: skill.color }]}
                  label={
                    <Center>
                      <Text size="sm" fw={700}>
                        {skill.level}%
                      </Text>
                    </Center>
                  }
                  mx="auto"
                  mb="md"
                />
                <Text size="lg" mb="xs">
                  {skill.emoji}
                </Text>
                <Text fw={600} size="md" mb="xs">
                  {skill.name}
                </Text>
                <Text size="xs" c="dimmed">
                  {skill.category}
                </Text>
              </Box>
            </motion.div>
          ))}
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <Box
            mt={50}
            p="xl"
            style={{
              background: colorScheme === 'dark' 
                ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))' 
                : 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(168, 85, 247, 0.05))',
              borderRadius: '20px',
              border: `1px solid ${colorScheme === 'dark' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)'}`,
              textAlign: 'center',
              transition: 'all 0.3s ease',
            }}
          >
            <Title order={3} mb="md">
              Always Learning
            </Title>
            <Text c="dimmed" maw={500} mx="auto">
              Technology evolves rapidly, and I'm committed to continuous learning. 
              Currently exploring advanced Next.js features, Redux-Saga patterns, and modern UI frameworks.
            </Text>
          </Box>
        </motion.div>
      </Container>
    </section>
  );
}