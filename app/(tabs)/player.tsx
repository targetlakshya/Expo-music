import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Play, SkipBack, SkipForward, Shuffle, Share2, ChevronDown } from 'lucide-react-native';

export default function PlayerScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ChevronDown size={24} color="#000" />
        </TouchableOpacity>
      
        <TouchableOpacity>
          <Share2 size={20} color="#000" />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <Image
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/en/8/81/The_Weeknd_-_Die_for_You.png',
          }}
          style={styles.albumCover}
        />
        
        <View style={styles.songInfo}>
          <Text style={styles.title}>Die For You</Text>
          <Text style={styles.artist}>The Weekend & Ariana Grande</Text>
        </View>

        <View style={styles.progressContainer}>
          <View style={styles.progressBar}>
            <View style={styles.progress} />
            <View style={styles.progressDot} />
          </View>
          <View style={styles.timeInfo}>
            <Text style={styles.time}>0:00</Text>
            <Text style={styles.time}>3:35</Text>
          </View>
        </View>

        <View style={styles.controls}>
          <TouchableOpacity style={styles.controlButton}>
            <Shuffle size={20} color="#666" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <SkipBack size={28} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.playButton}>
            <Play size={24} color="#fff" fill="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <SkipForward size={28} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.controlButton}>
            <Share2 size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.deviceInfo}>
          <Image 
            source={{uri: 'https://developer.apple.com/accessories/Accessory-Design-Guidelines.pdf/images/airpods-pro.png'}}
            style={styles.deviceIcon}
          />
          <Text style={styles.deviceText}>AirPods Pro</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  headerTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  albumCover: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
    marginBottom: 32,
  },
  songInfo: {
    width: '100%',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 8,
  },
  artist: {
    fontSize: 16,
    color: '#666',
  },
  progressContainer: {
    width: '100%',
    marginBottom: 32,
  },
  progressBar: {
    width: '100%',
    height: 4,
    backgroundColor: '#eee',
    borderRadius: 2,
    marginBottom: 8,
    position: 'relative',
  },
  progress: {
    width: '20%',
    height: '100%',
    backgroundColor: '#ff3b30',
    borderRadius: 2,
  },
  progressDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#ff3b30',
    position: 'absolute',
    top: -4,
    left: '20%',
    marginLeft: -6,
  },
  timeInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    color: '#666',
    fontSize: 12,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 32,
  },
  controlButton: {
    padding: 8,
  },
  playButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#ff3b30',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deviceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  deviceIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  deviceText: {
    fontSize: 14,
    color: '#666',
  },
});