import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppFooter() {
  const year = new Date().getFullYear();
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>All rights reserved, {year}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#3E4A59',
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});
