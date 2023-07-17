import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import { useRouter } from 'expo-router';

import styles from './popularjobs.style';
import { SIZES, COLORS } from '../../../constants';
import PopularJobCard from '../../common/cards/popular/PopularJobCard';
import useFetch from '../../../hook/useFetch';

const Popularjobs = () => {
  const router = useRouter();

  const { loading, data, error, refetch } = useFetch({
    endpoint: 'search',
    query: {
      query: 'Python developer in Texas, USA',
      page: '1',
      num_pages: '1',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {loading ? (
          <ActivityIndicator size={'large'} color={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong...</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
