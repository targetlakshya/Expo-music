import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Play } from 'lucide-react-native';

export default function SongCard({ title, artist, coverUrl, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={{ uri: coverUrl }} style={styles.cover} />
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
      <Play size={24} color="#ff3b30" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cover: {
    width: 56,
    height: 56,
    borderRadius: 4,
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  artist: {
    fontSize: 14,
    color: '#666',
  },
});