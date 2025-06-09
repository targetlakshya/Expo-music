import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SongCard from '../../components/SongCard';
import { favoriteSongs } from '../../data/songs';
import { useRouter } from 'expo-router';

export default function LibraryScreen() {
  const router = useRouter();

  const handleSongPress = (song) => {
    router.push('/player');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Library</Text>
        <Text style={styles.subtitle}>Your Favorite Songs</Text>
      </View>
      <ScrollView style={styles.songList}>
        {favoriteSongs.map((song) => (
          <SongCard
            key={song.id}
            title={song.title}
            artist={song.artist}
            coverUrl={song.coverUrl}
            onPress={() => handleSongPress(song)}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    padding: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    marginBottom: 16,
  },
  songList: {
    flex: 1,
    paddingHorizontal: 16,
  },
});