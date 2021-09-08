import React from 'react';
import { View } from 'react-native';
import { Header, Image } from 'react-native-elements';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen'

class HeaderComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <View>
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
                    centerComponent={<Image source={{ uri: 'https://www.programmableweb.com/sites/default/files/TMDb.jpg' }} style={{width:wp(20),height:hp(7)}} />}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    containerStyle={{
                        backgroundColor: '#032541',
                        justifyContent:'space-around',
                        alignItems:'center'
                    }}
                />
            </View>
        );
    }
}

export default HeaderComp;