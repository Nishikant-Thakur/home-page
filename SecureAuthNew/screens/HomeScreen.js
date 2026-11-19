
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const ACCENT = '#00E5FF';
const VIOLET = '#7C4DFF';

const features = [
  {
    icon: 'key-outline',
    title: 'Password Auth',
    desc: 'Something you KNOW',
  },
  {
    icon: 'document-text-outline',
    title: 'Document OCR',
    desc: 'Identity you HOLD',
  },
  {
    icon: 'scan-outline',
    title: 'Face Recognition',
    desc: 'Something you ARE',
  },
];

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={['#0B1220', '#101B33', '#170F2E']}
      style={styles.root}
    >
      <StatusBar barStyle="light-content" />

      <SafeAreaView style={styles.safe}>
        <ScrollView
          contentContainerStyle={styles.scroll}
          showsVerticalScrollIndicator={false}
        >

          <View style={styles.brandRow}>
            <LinearGradient
              colors={[ACCENT, VIOLET]}
              style={styles.logo}
            >
              <Ionicons
                name="shield-checkmark"
                size={30}
                color="#fff"
              />
            </LinearGradient>

            <View>
              <Text style={styles.brand}>SecureAuth</Text>
              <Text style={styles.tagline}>
                Smart Multi-Factor Authentication
              </Text>
            </View>
          </View>

          <View style={styles.hero}>
            <Text style={styles.heroTitle}>
              Verify who you are,{'\n'}
              in every possible way.
            </Text>

            <Text style={styles.heroSub}>
              Password + Identity Document (OCR) +
              Face Recognition — one secure,
              layered sign-in experience.
            </Text>
          </View>

          <View style={styles.grid}>
            {features.map((item, index) => (
              <View style={styles.card} key={index}>
                <View style={styles.cardIcon}>
                  <Ionicons
                    name={item.icon}
                    size={25}
                    color={ACCENT}
                  />
                </View>

                <Text style={styles.cardTitle}>
                  {item.title}
                </Text>

                <Text style={styles.cardDesc}>
                  {item.desc}
                </Text>
              </View>
            ))}
          </View>

          <TouchableOpacity
            style={styles.primaryBtn}
            onPress={() =>
              Alert.alert('SecureAuth', 'Registration coming soon!')
            }
          >
            <LinearGradient
              colors={[ACCENT, VIOLET]}
              style={styles.primaryBg}
            >
              <Text style={styles.primaryText}>Get Started</Text>
              <Ionicons name="arrow-forward" size={20} color="#fff" />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.ghostBtn}
            onPress={() =>
              Alert.alert('SecureAuth', 'Login coming soon!')
            }
          >
            <Text style={styles.ghostText}>
              I already have an account — Sign in
            </Text>
          </TouchableOpacity>

          <Text style={styles.footer}>
            SecureAuth · A modular authentication system
          </Text>

        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  safe: { flex: 1 },

  scroll: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 40,
  },

  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },

  logo: {
    width: 52,
    height: 52,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },

  brand: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
  },

  tagline: {
    color: '#8FA3C8',
    fontSize: 11,
    marginTop: 3,
  },

  hero: { marginTop: 40 },

  heroTitle: {
    color: '#fff',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 39,
  },

  heroSub: {
    color: '#B8C6E2',
    fontSize: 15,
    lineHeight: 23,
    marginTop: 14,
  },

  grid: {
    marginTop: 30,
    gap: 14,
  },

  card: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    borderRadius: 18,
    padding: 18,
  },

  cardIcon: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: 'rgba(0,229,255,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
  },

  cardTitle: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },

  cardDesc: {
    color: '#8FA3C8',
    fontSize: 13,
    marginTop: 5,
  },

  primaryBtn: {
    marginTop: 32,
    borderRadius: 16,
    overflow: 'hidden',
  },

  primaryBg: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    gap: 10,
  },

  primaryText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  ghostBtn: {
    marginTop: 20,
    alignItems: 'center',
    paddingVertical: 8,
  },

  ghostText: {
    color: ACCENT,
    fontSize: 14,
    fontWeight: '600',
  },

  footer: {
    textAlign: 'center',
    color: '#5A6E94',
    fontSize: 12,
    marginTop: 35,
  },
});
