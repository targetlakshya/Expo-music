import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Settings, Heart, Clock, Download } from 'lucide-react-native';

export default function ProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <View style={styles.headerTop}>
            <Text style={styles.title}>Profile</Text>
            <TouchableOpacity>
              <Settings size={24} color="#000" />
            </TouchableOpacity>
          </View>
          
          <View style={styles.profileInfo}>
            <Image
              source={{
                uri: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=200&h=200&fit=crop',
              }}
              style={styles.profileImage}
            />
            <Text style={styles.name}>John Doe</Text>
            <Text style={styles.email}>john.doe@example.com</Text>
          </View>

          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>247</Text>
              <Text style={styles.statLabel}>Following</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>1,523</Text>
              <Text style={styles.statLabel}>Followers</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>450</Text>
              <Text style={styles.statLabel}>Playlists</Text>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <TouchableOpacity style={styles.menuItem}>
            <Heart size={24} color="#ff3b30" />
            <Text style={styles.menuText}>Liked Songs</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Clock size={24} color="#ff3b30" />
            <Text style={styles.menuText}>Recently Played</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <Download size={24} color="#ff3b30" />
            <Text style={styles.menuText}>Downloaded Music</Text>
          </TouchableOpacity>
        </View>
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
    padding: 16,
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  profileInfo: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  stats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 24,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  section: {
    padding: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
  },
  menuText: {
    fontSize: 16,
    color: '#000',
    marginLeft: 16,
  },
});