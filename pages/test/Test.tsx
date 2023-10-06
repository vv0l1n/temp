import {Box, Button} from '@react-native-material/core';
import {Alert} from 'react-native';

type Props = {};

export const Test = ({}: Props) => {
  return (
    <Box>
      <Button
        title={'test'}
        onPress={() => {
          console.log('onClick');
        }}
      />
      <Button
        title={'test'}
        onPress={() => {
          console.log('onClick');
        }}
      />
      {Alert.alert(
        'test',
        'test 2',
        [
          {
            text: 'test',
          },
        ],
        {
          cancelable: true,
        },
      )}
    </Box>
  );
};
