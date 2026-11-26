import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Alert,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function App() {

  const handlePress = () => {
    Alert.alert(
      'Selamat Datang di pocakyst',
      'Halo Siti Aisyah! Aplikasi pocakyst berhasil dijalankan.',
      [
        {
          text: 'OK',
          style: 'default',
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#FFF5FA"
      />

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        {/* Logo Aplikasi */}
        <View style={styles.logo}>
          <Text style={styles.logoText}>P</Text>
        </View>

        {/* Nama Aplikasi */}
        <Text style={styles.title}>
          pocakyst
        </Text>

        <Text style={styles.subtitle}>
          Warehouse Management System
        </Text>

        <Text style={styles.description}>
          Aplikasi mobile untuk membantu
          pengelolaan data dan aktivitas gudang
          agar lebih mudah dan terorganisir.
        </Text>

        {/* Identitas Mahasiswa */}
        <View style={styles.profile}>
          <Text style={styles.profileTitle}>
            IDENTITAS MAHASISWA
          </Text>

          <Text style={styles.name}>
            Siti Aisyah
          </Text>

          <Text style={styles.info}>
            NIM: 202413003
          </Text>

          <Text style={styles.info}>
            Program Studi: Sistem Informasi
          </Text>
        </View>

        {/* Gudang Simulasi */}
        <View style={styles.warehouse}>
          <Text style={styles.label}>
            GUDANG SIMULASI
          </Text>

          <Text style={styles.warehouseName}>
            Pocakyst Warehouse
          </Text>

          <Text style={styles.info}>
            Pusat Persediaan dan Logistik
          </Text>
        </View>

        {/* Statistik Gudang */}
        <Text style={styles.sectionTitle}>
          Statistik Gudang
        </Text>

        <View style={styles.stats}>

          <View style={styles.statBox}>
            <Text style={styles.number}>
              120
            </Text>

            <Text style={styles.statText}>
              Barang Aktif
            </Text>
          </View>

          <View style={styles.statBox}>
            <Text style={styles.numberBlue}>
              18
            </Text>

            <Text style={styles.statText}>
              Kategori
            </Text>
          </View>

        </View>

        {/* Tombol Mulai Aplikasi */}
        <Pressable
          style={styles.button}
          onPress={handlePress}
        >
          <Text style={styles.buttonText}>
            Mulai Aplikasi
          </Text>
        </Pressable>

        {/* Footer */}
        <Text style={styles.footer}>
          Modul 1 - Project Initialization
        </Text>

        <Text style={styles.footerName}>
          pocakyst © 2026
        </Text>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF5FA',
  },

  content: {
    padding: 24,
    alignItems: 'center',
    paddingBottom: 35,
  },

  logo: {
    width: 75,
    height: 75,
    borderRadius: 25,
    backgroundColor: '#F6B8D2',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },

  logoText: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#87385D',
  },

  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#C05C8C',
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#398CC5',
    marginTop: 5,
  },

  description: {
    fontSize: 13,
    lineHeight: 22,
    color: '#718096',
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 25,
  },

  profile: {
    width: '100%',
    backgroundColor: '#FCE5EF',
    padding: 18,
    borderRadius: 18,
    marginBottom: 15,
  },

  profileTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#C05C8C',
    letterSpacing: 1,
    marginBottom: 10,
  },

  name: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#87385D',
    marginBottom: 5,
  },

  info: {
    fontSize: 12,
    color: '#718096',
    marginTop: 5,
  },

  warehouse: {
    width: '100%',
    backgroundColor: '#DCEEFF',
    padding: 18,
    borderRadius: 18,
    marginBottom: 22,
  },

  label: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#398CC5',
    letterSpacing: 1,
  },

  warehouseName: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#263B59',
    marginTop: 8,
  },

  sectionTitle: {
    alignSelf: 'flex-start',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#263B59',
    marginBottom: 12,
  },

  stats: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  statBox: {
    width: '48%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 20,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E8EDF5',
  },

  number: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#C05C8C',
  },

  numberBlue: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#398CC5',
  },

  statText: {
    fontSize: 12,
    color: '#718096',
    marginTop: 5,
  },

  button: {
    width: '100%',
    height: 54,
    borderRadius: 15,
    backgroundColor: '#398CC5',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

  footer: {
    marginTop: 22,
    fontSize: 11,
    color: '#8A949E',
  },

  footerName: {
    marginTop: 5,
    fontSize: 10,
    color: '#C05C8C',
  },

});