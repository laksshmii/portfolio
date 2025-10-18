'use client';
import { Container, Title, Text, TextInput, Textarea, Button, Group, useMantineColorScheme, Stack, Box, Anchor } from '@mantine/core';
import { motion } from 'framer-motion';
import { IconSend, IconMail, IconPhone, IconMapPin, IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconClock, IconMessageCircle } from '@tabler/icons-react';

const contactMethods = [
  {
    icon: IconMail,
    title: 'Email',
    value: 'lakshmiv290900@gmail.com',
    description: 'Send me an email anytime',
    action: 'mailto:lakshmiv290900@gmail.com',
    color: 'indigo'
  },
  {
    icon: IconPhone,
    title: 'Phone',
    value: '+91 9344071767',
    description: 'Call me during business hours',
    action: 'tel:+919344071767',
    color: 'cyan'
  },
  {
    icon: IconMapPin,
    title: 'Location',
    value: 'Cuddalore, Tamil Nadu',
    description: 'Available for remote work',
    action: '#',
    color: 'purple'
  }
];

const socialLinks = [
  { icon: IconBrandGithub, label: 'GitHub', url: 'https://github.com/laksshmii', color: 'slate' },
  { icon: IconBrandLinkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/lakshmi-v-0633b4206/', color: 'indigo' },
  { icon: IconBrandTwitter, label: 'Twitter', url: 'https://twitter.com', color: 'cyan' },
];

export function Contact() {
  const { colorScheme } = useMantineColorScheme();
  
  return (
    <section
      id="contact"
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
            Get In Touch
          </Text>
          <Title
            order={2}
            size="2.5rem"
            fw={700}
            mb="md"
            c={colorScheme === 'dark' ? 'slate.1' : 'slate.9'}
          >
            Let's Create Something Amazing
          </Title>
          <Text
            size="lg"
            c={colorScheme === 'dark' ? 'slate.4' : 'slate.6'}
            maw={600}
            mx="auto"
          >
            Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.
          </Text>
        </motion.div>

        <Stack gap="xl">
          {/* Contact Methods */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Box
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
                marginBottom: '3rem',
              }}
            >
              {contactMethods.map((method, index) => (
                <motion.div
                  key={method.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ y: -12, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <Box
                    component={Anchor}
                    href={method.action}
                    p="xl"
                    style={{
                      background: colorScheme === 'dark' 
                        ? 'rgba(255, 255, 255, 0.03)' 
                        : 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(20px)',
                      borderRadius: '20px',
                      border: `1px solid ${colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                      textDecoration: 'none',
                      color: 'inherit',
                      display: 'block',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      boxShadow: colorScheme === 'dark' 
                        ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
                        : '0 8px 32px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <Stack gap="md" align="center" ta="center">
                      <Box
                        style={{
                          width: '60px',
                          height: '60px',
                          borderRadius: '50%',
                          background: `var(--mantine-color-${method.color}-1)`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <method.icon
                          size={24}
                          color={`var(--mantine-color-${method.color}-6)`}
                        />
                      </Box>
                      <div>
                        <Title order={4} mb="xs">{method.title}</Title>
                        <Text fw={600} mb="xs">{method.value}</Text>
                        <Text size="sm" c="dimmed">{method.description}</Text>
                      </div>
                    </Stack>
                  </Box>
                </motion.div>
              ))}
            </Box>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Box
              maw={600}
              mx="auto"
              p="xl"
              style={{
                background: colorScheme === 'dark' 
                  ? 'rgba(255, 255, 255, 0.02)' 
                  : 'rgba(255, 255, 255, 0.8)',
                backdropFilter: 'blur(20px)',
                borderRadius: '24px',
                border: `1px solid ${colorScheme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
                transition: 'all 0.3s ease',
                boxShadow: colorScheme === 'dark' 
                  ? '0 8px 32px rgba(0, 0, 0, 0.3)' 
                  : '0 8px 32px rgba(0, 0, 0, 0.1)',
              }}
            >
              <Group mb="lg" align="center">
                <IconMessageCircle size={24} color="var(--mantine-color-indigo-6)" />
                <Title order={3}>Send a Message</Title>
              </Group>
              
              <form>
                <Stack gap="md">
                  <Group grow>
                    <TextInput 
                      placeholder="First Name" 
                      required 
                      size="md"
                    />
                    <TextInput 
                      placeholder="Last Name" 
                      required 
                      size="md"
                    />
                  </Group>
                  
                  <TextInput 
                    placeholder="Email Address" 
                    required 
                    size="md"
                    type="email"
                  />
                  
                  <TextInput 
                    placeholder="Subject" 
                    required 
                    size="md"
                  />
                  
                  <Textarea 
                    placeholder="Tell me about your project..." 
                    rows={6} 
                    required 
                    size="md"
                  />
                  
                  <Button
                    type="submit"
                    size="lg"
                    fullWidth
                    rightSection={<IconSend size={18} />}
                  >
                    Send Message
                  </Button>
                </Stack>
              </form>
            </Box>
          </motion.div>

          {/* Social Links & Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Stack gap="xl" align="center">
              <Group>
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={social.label}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="light"
                      color={social.color}
                      leftSection={<social.icon size={18} />}
                      component={Anchor}
                      href={social.url}
                      target="_blank"
                    >
                      {social.label}
                    </Button>
                  </motion.div>
                ))}
              </Group>

              <Box
                p="lg"
                style={{
                  background: colorScheme === 'dark' 
                    ? 'rgba(99, 102, 241, 0.1)' 
                    : 'rgba(99, 102, 241, 0.05)',
                  borderRadius: '16px',
                  border: `1px solid ${colorScheme === 'dark' ? 'rgba(99, 102, 241, 0.2)' : 'rgba(99, 102, 241, 0.1)'}`,
                  textAlign: 'center',
                }}
              >
                <Group justify="center" mb="sm">
                  <IconClock size={20} />
                  <Text fw={600}>Response Time</Text>
                </Group>
                <Text c="dimmed">
                  I typically respond within 24 hours. For urgent matters, feel free to call directly.
                </Text>
              </Box>
            </Stack>
          </motion.div>
        </Stack>
      </Container>
    </section>
  );
}