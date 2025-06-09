import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import HorizontalList from '../../components/HorizontalList';
import { songs, genres, playlists } from '../../data/songs';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.welcomeSection}>
            <Text style={styles.greeting}>Good morning</Text>
            <Text style={styles.username}>John Doe</Text>
          </View>
          <Image
            source={{
              uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
            }}
            style={styles.avatar}
          />
        </View>

        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Your Daily Mix</Text>
          <Text style={styles.heroSubtitle}>Based on your recent listening</Text>
        </View>

        <HorizontalList title="Recently Played" items={songs} type="song" />
        <HorizontalList title="Browse Genres" items={genres} type="genre" />
        <HorizontalList title="Your Playlists" items={playlists} type="playlist" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  welcomeSection: {
    flex: 1,
  },
  greeting: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  heroSection: {
    padding: 16,
    backgroundColor: '#ff3b30',
    margin: 16,
    borderRadius: 16,
  },
  heroTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
  },
});