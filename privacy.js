// ============================================
// Privacy Policy Screen — MILO
// ============================================

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';

import AppHeader from '../src/components/common/AppHeader';
import colors from '../src/utils/colors';

const LAST_UPDATED = '2 October 2026';
const CONTACT_EMAIL = 'support@milo.app';
const COMPANY_NAME = 'MILO';

export default function PrivacyPolicyScreen() {
  const router = useRouter();

  const Section = ({ title, children }) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionBody}>{children}</View>
    </View>
  );

  const Paragraph = ({ children }) => (
    <Text style={styles.paragraph}>{children}</Text>
  );

  const Bullet = ({ children }) => (
    <View style={styles.bulletRow}>
      <Text style={styles.bulletDot}>•</Text>
      <Text style={styles.bulletText}>{children}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <AppHeader title="Privacy Policy" showBack />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.iconCircle}>
            <Ionicons name="shield-checkmark" size={32} color={colors.primary} />
          </View>
          <Text style={styles.title}>Privacy Policy</Text>
          <Text style={styles.subtitle}>
            Last updated: {LAST_UPDATED}
          </Text>
        </View>

        {/* Intro */}
        <View style={styles.introCard}>
          <Ionicons name="information-circle" size={18} color={colors.info} />
          <Text style={styles.introText}>
            Your privacy matters to us. This policy explains what data we
            collect, how we use it, and the rights you have over your personal
            information.
          </Text>
        </View>

        {/* 1. Introduction */}
        <Section title="1. Introduction">
          <Paragraph>
            {COMPANY_NAME} ("we", "us", "our") operates the {COMPANY_NAME}{' '}
            mobile application (the "App"). This Privacy Policy describes how we
            collect, use, disclose, and protect your information when you use
            our App.
          </Paragraph>
          <Paragraph>
            By using the App, you agree to the collection and use of information
            in accordance with this policy.
          </Paragraph>
        </Section>

        {/* 2. Information We Collect */}
        <Section title="2. Information We Collect">
          <Paragraph>
            <Text style={styles.bold}>a) Information You Provide:</Text>
          </Paragraph>
          <Bullet>Phone number (for account verification via OTP)</Bullet>
          <Bullet>Name, email address, and profile photo</Bullet>
          <Bullet>Bio, city, and preferences you enter</Bullet>
          <Bullet>Messages, images, and media you send in chats</Bullet>
          <Bullet>Payment information (processed securely by Razorpay)</Bullet>

          <Paragraph>
            <Text style={styles.bold}>b) Information Collected Automatically:</Text>
          </Paragraph>
          <Bullet>Device information (model, OS version, unique IDs)</Bullet>
          <Bullet>IP address and approximate location</Bullet>
          <Bullet>App usage data and crash reports</Bullet>
          <Bullet>Online status and last-seen timestamps</Bullet>

          <Paragraph>
            <Text style={styles.bold}>c) Permissions We Request:</Text>
          </Paragraph>
          <Bullet>Camera — for video calls and profile photos</Bullet>
          <Bullet>Microphone — for voice and video calls</Bullet>
          <Bullet>Photos/Gallery — to upload images</Bullet>
          <Bullet>Notifications — for chat and call alerts</Bullet>
        </Section>

        {/* 3. How We Use Your Information */}
        <Section title="3. How We Use Your Information">
          <Paragraph>We use the information we collect to:</Paragraph>
          <Bullet>Create and manage your account</Bullet>
          <Bullet>Enable chat, voice calls, and video calls</Bullet>
          <Bullet>Process coin purchases and payments</Bullet>
          <Bullet>Show your profile to other users</Bullet>
          <Bullet>Prevent fraud, abuse, and illegal activity</Bullet>
          <Bullet>Improve app performance and user experience</Bullet>
          <Bullet>Send important notifications about your account</Bullet>
        </Section>

        {/* 4. Sharing Your Information */}
        <Section title="4. How We Share Your Information">
          <Paragraph>
            We do <Text style={styles.bold}>not sell</Text> your personal data.
            We may share it with:
          </Paragraph>
          <Bullet>
            <Text style={styles.bold}>Other Users:</Text> Your name, photo, bio,
            and online status are visible to other users.
          </Bullet>
          <Bullet>
            <Text style={styles.bold}>Payment Processors:</Text> Razorpay
            processes payments; we never store your card details.
          </Bullet>
          <Bullet>
            <Text style={styles.bold}>Service Providers:</Text> Firebase (for
            authentication), cloud hosting providers, and analytics services.
          </Bullet>
          <Bullet>
            <Text style={styles.bold}>Legal Authorities:</Text> When required by
            law or to protect user safety.
          </Bullet>
        </Section>

        {/* 5. Data Security */}
        <Section title="5. Data Security">
          <Paragraph>
            We use industry-standard encryption (HTTPS/TLS) to protect your data
            during transmission. Passwords and authentication tokens are stored
            securely using encrypted storage.
          </Paragraph>
          <Paragraph>
            However, no method of transmission over the internet is 100% secure.
            We cannot guarantee absolute security.
          </Paragraph>
        </Section>

        {/* 6. Data Retention */}
        <Section title="6. Data Retention">
          <Paragraph>
            We retain your personal data as long as your account is active. When
            you delete your account:
          </Paragraph>
          <Bullet>Profile and personal info are removed within 30 days</Bullet>
          <Bullet>Chat messages are anonymized or deleted</Bullet>
          <Bullet>Payment records are kept for 7 years (legal requirement)</Bullet>
        </Section>

        {/* 7. Children's Privacy */}
        <Section title="7. Children's Privacy">
          <Paragraph>
            Our App is <Text style={styles.bold}>not intended for users under 18 years</Text>{' '}
            of age. We do not knowingly collect data from children. If we become
            aware that a child under 18 has provided personal information, we
            will delete it immediately.
          </Paragraph>
        </Section>

        {/* 8. Your Rights */}
        <Section title="8. Your Rights">
          <Paragraph>You have the right to:</Paragraph>
          <Bullet>Access the personal data we hold about you</Bullet>
          <Bullet>Correct inaccurate or incomplete information</Bullet>
          <Bullet>Request deletion of your account and data</Bullet>
          <Bullet>Opt-out of marketing communications</Bullet>
          <Bullet>Block or report other users</Bullet>
          <Bullet>Withdraw consent at any time</Bullet>
        </Section>

        {/* 9. Blocking & Safety */}
        <Section title="9. Blocking & Safety">
          <Paragraph>
            You can block any user from your profile. Blocked users cannot:
          </Paragraph>
          <Bullet>Send you messages</Bullet>
          <Bullet>Call you (voice or video)</Bullet>
          <Bullet>View your profile</Bullet>
          <Paragraph>
            You can also report users for inappropriate behavior. Reports are
            reviewed within 24 hours.
          </Paragraph>
        </Section>

        {/* 10. Cookies & Tracking */}
        <Section title="10. Cookies & Analytics">
          <Paragraph>
            The App may use analytics tools (like Firebase Analytics) to
            understand how users interact with the App. This data is anonymous
            and used only to improve our services.
          </Paragraph>
        </Section>

        {/* 11. Third-Party Links */}
        <Section title="11. Third-Party Services">
          <Paragraph>
            The App uses the following third-party services, each with its own
            privacy policy:
          </Paragraph>
          <Bullet>Firebase (Google) — Authentication</Bullet>
          <Bullet>Razorpay — Payment processing</Bullet>
          <Bullet>Expo — App framework</Bullet>
        </Section>

        {/* 12. Changes */}
        <Section title="12. Changes to This Policy">
          <Paragraph>
            We may update this Privacy Policy from time to time. We will notify
            you of significant changes through the App or by email. Continued
            use of the App after changes means you accept the updated policy.
          </Paragraph>
        </Section>

        {/* 13. Contact */}
        <Section title="13. Contact Us">
          <Paragraph>
            If you have questions about this Privacy Policy or your data,
            contact us at:
          </Paragraph>

          <TouchableOpacity
            onPress={() => Linking.openURL(`mailto:${CONTACT_EMAIL}`)}
            style={styles.contactBtn}
            activeOpacity={0.8}
          >
            <Ionicons name="mail-outline" size={18} color={colors.primary} />
            <Text style={styles.contactEmail}>{CONTACT_EMAIL}</Text>
          </TouchableOpacity>
        </Section>

        {/* Footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            © {new Date().getFullYear()} {COMPANY_NAME}. All rights reserved.
          </Text>
        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: colors.background },
  content: { paddingHorizontal: 20, paddingTop: 16, paddingBottom: 40 },

  // Header
  header: { alignItems: 'center', marginBottom: 24 },
  iconCircle: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: colors.primaryBg,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },
  title: {
    fontSize: 24,
    fontWeight: '900',
    color: colors.text,
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    color: colors.textLight,
    fontWeight: '600',
  },

  // Intro
  introCard: {
    flexDirection: 'row',
    gap: 10,
    padding: 14,
    backgroundColor: colors.infoBg,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.info + '30',
    marginBottom: 24,
  },
  introText: {
    flex: 1,
    fontSize: 13,
    color: colors.textSecondary,
    lineHeight: 19,
    fontWeight: '500',
  },

  // Sections
  section: { marginBottom: 24 },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: colors.text,
    marginBottom: 10,
    letterSpacing: -0.2,
  },
  sectionBody: { gap: 8 },
  paragraph: {
    fontSize: 13.5,
    color: colors.textSecondary,
    lineHeight: 21,
    fontWeight: '500',
  },
  bold: { fontWeight: '800', color: colors.text },

  // Bullets
  bulletRow: { flexDirection: 'row', gap: 8, paddingLeft: 4 },
  bulletDot: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '900',
    lineHeight: 20,
  },
  bulletText: {
    flex: 1,
    fontSize: 13.5,
    color: colors.textSecondary,
    lineHeight: 20,
    fontWeight: '500',
  },

  // Contact
  contactBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: colors.primaryBg,
    borderRadius: 12,
    marginTop: 8,
    alignSelf: 'flex-start',
  },
  contactEmail: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.primary,
  },

  // Footer
  footer: {
    alignItems: 'center',
    marginTop: 24,
    paddingTop: 24,
    borderTopWidth: 1,
    borderTopColor: colors.borderLight,
  },
  footerText: {
    fontSize: 11,
    color: colors.textLight,
    fontWeight: '500',
  },
});