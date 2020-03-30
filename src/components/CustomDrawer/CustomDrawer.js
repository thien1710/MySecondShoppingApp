import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';




// function LoginJSX() {
//     return (
//         <View style={styles.loginContainer}>
//             <Text style={styles.username}>Nguyen Tran Nhat Thien</Text>
//             <View>
//                 <TouchableOpacity style={styles.btnSignInStyle}

//                 >
//                     <Text style={styles.btnTextSignIn}>Order History</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.btnSignInStyle}>
//                     <Text style={styles.btnTextSignIn}>Change Info</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.btnSignInStyle}>
//                     <Text style={styles.btnTextSignIn}>Sign out</Text>
//                 </TouchableOpacity>
//             </View>
//             <View />
//         </View>
//     )
// }

// function LogoutJSX() {
//     return (
//         <View style={{ flex: 1 }}>
//             <TouchableOpacity style={styles.btnStyle}
//             // onPress={() => this.props.navigation.navigate('Authentication')}
//             >
//                 <Text style={styles.btnText}>Sign In</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// function Greeting(props) {
//     const isLoggedIn = props.isLoggedIn;
//     if (isLoggedIn) {
//         return <LoginJSX />;
//     }
//     return <LogoutJSX />;
// }
// const CustomDrawer = props => (
//     <ScrollView style={{ backgroundColor: '#34B089' }}>
//         <View style={styles.container}>
//             <Image source={require('../../media/temp/profile.png')}
//                 style={{ width: 100, height: 100 }} />
//             <LoginJSX />
//             {/* <DrawerItems {...props} /> */}
//         </View>
//     </ScrollView>
// );

// export default CustomDrawer;

export default class CustomDrawer extends Component {
    constructor(props) {
        super(props);
        this.state = { isLogedIn: false };
    }
    render(props) {

        const LoginJSX = (
            <View style={styles.loginContainer}>
                <Text style={styles.username}>Nguyen Tran Nhat Thien</Text>
                <View>
                    <TouchableOpacity style={styles.btnSignInStyle}

                    >
                        <Text style={styles.btnTextSignIn}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSignInStyle}>
                        <Text style={styles.btnTextSignIn}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnSignInStyle}>
                        <Text style={styles.btnTextSignIn}>Sign out</Text>
                    </TouchableOpacity>
                </View>
                <View />
            </View>

        );

        const LogoutJSX = (
            <View style={{ flex: 1 }}>
                <TouchableOpacity style={styles.btnStyle}
                // onPress={() => this.props.navigation.navigate('Authentication')}
                >
                    <Text style={styles.btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );

        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? LoginJSX : LogoutJSX;

        return (
            <ScrollView style={{ backgroundColor: '#34B089' }}>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.navigate('Authentication');
                        }}>
                        <Text>Navigate to Item screen</Text>
                    </TouchableOpacity>
                    <Image source={require('../../media/temp/profile.png')}
                        style={{ width: 100, height: 100 }} />
                    {/* <Greeting isLoggedIn={this.state.isLogedIn} /> */}
                    {mainJSX}
                    {/* <DrawerItems {...props} /> */}
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center'
    },
    profile: {
        width: 120,
        height: 120,
        // borderRadius: 60,
        marginVertical: 30
    },
    btnStyle: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 70
    },
    btnText: {
        color: '#34B089',
        fontSize: 20
    },
    btnSignInStyle: {
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 5,
        width: 200,
        marginBottom: 10,
        justifyContent: 'center',
        paddingLeft: 10
    },
    btnTextSignIn: {
        color: '#34B089',
        fontSize: 15
    },
    loginContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    username: {
        color: '#fff',
        // fontFamily: 'Avenir', 
        fontSize: 20
    }
});
