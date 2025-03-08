
import { Link } from 'expo-router';
import { Text, View } from 'react-native';

export default function Index() {
  return (
    <View className='flex-1 items-center justify-center'
      >
      <Text className=" text-2xl font-bold font-rubikMedium">
        Welcome to Real State App
      </Text>
      <Link href={'/SignIn'}>Sign In</Link>
      <Link href={'/explore'}>Explore</Link>
      <Link href={'/profile'}>Profile</Link>
      <Link
        href={{
          pathname: '/properties/[id]',
          params: { id: '2' },
        }}>
        View user
      </Link>
    </View>
  );
}
