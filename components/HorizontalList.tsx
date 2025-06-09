import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HorizontalList({ title, items, type = 'song' }) {
  const renderItem = (item) => {
    if (type === 'genre') {
      return (
        <TouchableOpacity key={item.id} style={styles.genreItem}>
          <Image source={{ uri: item.coverUrl }} style={styles.genreImage} />
          <Text style={styles.genreTitle}>{item.title}</Text>
        </TouchableOpacity>
      );
    }

    if (type === 'playlist') {
      return (
        <TouchableOpacity key={item.id} style={styles.playlistItem}>
          <Image source={{ uri: item.coverUrl }} style={styles.playlistCover} />
          <Text style={styles.playlistTitle}>{item.title}</Text>
          <Text style={styles.playlistSubtitle}>{item.songCount} songs</Text>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity key={item.id} style={styles.songItem}>
        <Image source={{ uri: item.coverUrl }} style={styles.songCover} />
        <Text style={styles.songTitle}>{item.title}</Text>
        <Text style={styles.songArtist}>{item.artist}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}>
        {items.map(renderItem)}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000',
  },
  seeAll: {
    fontSize: 14,
    color: '#ff3b30',
  },
  scrollContent: {
    paddingHorizontal: 12,
  },
  songItem: {
    width: 140,
    marginHorizontal: 4,
  },
  songCover: {
    width: 140,
    height: 140,
    borderRadius: 8,
    marginBottom: 8,
  },
  songTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  songArtist: {
    fontSize: 12,
    color: '#666',
  },
  genreItem: {
    width: 100,
    marginHorizontal: 4,
  },
  genreImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
  },
  genreTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    textAlign: 'center',
  },
  playlistItem: {
    width: 160,
    marginHorizontal: 4,
  },
  playlistCover: {
    width: 160,
    height: 160,
    borderRadius: 8,
    marginBottom: 8,
  },
  playlistTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 4,
  },
  playlistSubtitle: {
    fontSize: 12,
    color: '#666',
  },
});