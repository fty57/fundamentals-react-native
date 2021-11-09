import React from 'react'
import { Divider, Image} from 'react-native-elements';

export default CryptoDivider => {
  <Divider orientation="horizontal" />;

  <Divider orientation="vertical" width={5} />;

  <Divider inset={true} insetType="middle" />;

  return (
    <Divider>
      <Image
        source={{ uri: 'https://cdn.wallpapersafari.com/28/71/L4NmYV.png' }}
        style={{width: 350, height: 350 }}
      />

    </Divider>
  )

}


