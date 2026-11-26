import React from 'react'; 
import { 
View, 
  Text, 
  StyleSheet, 
  Pressable, 
  Alert, 
} from 'react-native'; 
 
export default function App() { 
  const handlePress = () => { 
    Alert.alert( 
      'Mobile Warehouse', 
      'Project berhasil dijalankan!' 
    ); 
  }; 
 
  return ( 
    <View style={styles.container}> 
      <Text style={styles.icon}>      </Text> 
 
      <Text style={styles.title}> 
        Mobile Warehouse 
      </Text> 
 
      <Text style={styles.subtitle}> 
        Management System 
      </Text> 
 
      <Text style={styles.description}> 
        Aplikasi mobile untuk membantu pengelolaan 
        data dan aktivitas gudang. 
      </Text> 
 
      <Pressable 
        style={styles.button} 
        onPress={handlePress} 
      > 
        <Text style={styles.buttonText}> 
          Mulai Aplikasi 
        </Text> 
      </Pressable> 
 
      <Text style={styles.footer}> 
        Modul 1 — Project Initialization 
      </Text> 
    </View> 
  ); 
} 
 
const styles = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: '#f4f7fb', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 24, 
  }, 
 
  icon: { 
    fontSize: 64, 
    marginBottom: 16, 
  }, 
 
  title: { 
    fontSize: 28, 
    fontWeight: '800', 
    color: '#17324d', 
    textAlign: 'center', 
  }, 
 
  subtitle: { 
    fontSize: 17, 
    fontWeight: '600', 
    color: '#2878b5', 
    marginTop: 4, 
  }, 
 
  description: { 
    fontSize: 14, 
    lineHeight: 22, 
    color: '#5f6b76', 
    textAlign: 'center', 
    marginTop: 18, 
    marginBottom: 28, 
  }, 
 
  button: { 
    width: '100%', 
    height: 52, 
    borderRadius: 12, 
    backgroundColor: '#1769aa', 
    alignItems: 'center', 
    justifyContent: 'center', 
  }, 
 
  buttonText: { 
    color: '#ffffff', 
    fontSize: 15, 
    fontWeight: '800', 
  }, 
 
  footer: { 
    marginTop: 24, 
    fontSize: 12, 
    color: '#8a949e', 
  }, 
});