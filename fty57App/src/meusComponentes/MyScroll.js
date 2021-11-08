import React from 'react'
import { ScrollView, Image, Text, View} from 'react-native'

export default MyScroll => {

     const logo = {
          uri: 'https://tb.sb-cd.com/t/10042114/1/0/w:1280/t2-enh/derpixon-mime-and-dash.jpg',
          width: 64,
          height: 64
     };


     return (
          <View>
               <ScrollView>
                    <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
                    <Image source={logo} />
                    <Image source={logo} />
                    <Image source={logo} />
                    <Image source={logo} />
                    <Image source={logo} />
                    <Text style={{ fontSize: 96 }}>If you like</Text>
                    <Image source={logo} />
                    <Image source={logo} />
                    <Image source={logo} />
                    <Image source={logo} />
                    <Image source={logo} />
                    <Text style={{ fontSize: 96 }}>Scrolling down</Text>
                    <Image source={logo} />
                    <Image source={logo} />
                    <Image source={logo} />
                    <Image source={logo} />
                    <Image source={logo} />
                    <Text style={{ fontSize: 96 }}>What's the best</Text>
                    <Image source={logo} />
                    <Image source={logo} />
                    <Image source={logo} />
                    <Image source={logo} />
                    <Image source={logo} />
                    <Text style={{ fontSize: 96 }}>Framework around?</Text>
                    <Image source={logo} />
                    <Image source={logo} />
                    <Image source={logo} />
                    <Image source={logo} />
                    <Image source={logo} />
                    <Text style={{ fontSize: 80 }}>React Native</Text>
               </ScrollView>

          </View>


     )
}
