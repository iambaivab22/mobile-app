import {useState} from 'react';
import {
  View,
  Text,
  Image,
  Button,
  Modal,
  ActivityIndicator,
  Alert,
} from 'react-native';
import Greet from './greet';
const logoImg = require('./assets/necklace.jpeg');

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={{backgroundColor: 'red', flex: 1, padding: 60}}>
      <Greet name="baivab"></Greet>

      {/* <Image
        source={{uri: 'https://picsum.photos/id/1/200/300'}}
        style={{height: 400, height: 400}}></Image>

      <Image
        source={{uri: 'https://picsum.photos/id/3/200/300'}}
        style={{height: 400, height: 400}}></Image> */}

      <Button
        title="save"
        onPress={() => setIsModalVisible(true)}
        color="midnightblue"
      />

      {/* <ActivityIndicator size="large" color="white" animating /> */}

      <Button title="Alert 2" onPress={() => Alert.alert('invalid data')} />
      <Button
        title="Alert 3"
        onPress={() => Alert.alert('invalid data', 'hi hello')}
      />

      <Button
        title="Alert 4"
        onPress={() =>
          Alert.alert('invalid data', 'hi hello last', [
            {
              text: 'cancel',
              onPress: () => {
                console.log('cancel pressed');
              },
            },
            {
              text: 'OK',
              onPress: () => {
                console.log('ok pressed');
              },
            },
          ])
        }
      />
      <Modal
        visible={isModalVisible}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => {
          setIsModalVisible(false);
        }}>
        <View style={{backgroundColor: 'blue', flex: 1, padding: 60}}>
          <Text>Modal Content</Text>

          <Button
            title="close mdoal"
            onPress={() => setIsModalVisible(false)}
            color="midnightblue"
          />
        </View>
      </Modal>
      {/* <View style={{width: 200, height: 200, backgroundColor: 'blue'}}></View>
      <View style={{width: 200, height: 200, backgroundColor: 'green'}}></View> */}
    </View>
  );
}
