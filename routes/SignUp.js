import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

class SignUpScreen extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <StatusBar
               backgroundColor="#FDB934"
               barStyle="light-content"
            />
            <View style={styles.header}>
               <Text style={styles.text_header}>Bienvenue !</Text>
            </View>
            <Animatable.View
                  animation="fadeInUpBig"
               style={styles.footer}
            >
               <Text style={styles.text_footer}>Email</Text>
               <View style={styles.action}>
                  <FontAwesome
                     name="user-o"
                     color="#05375a"
                     size={20}
                  />
                  <TextInput
                     placeholder="Votre email"
                     style={styles.textInput}
                     autoCapitalize="none"
                  />
                  <Animatable.View
                     animation="bounceIn"
                  >
                     <Feather
                        name="check-circle"
                        color="green"
                        size={20}
                     />
                  </Animatable.View>
               </View>
               <Text style={[styles.text_footer, { marginTop: 35 }]}>Mot de passe</Text>
               <View style={styles.action}>
                  <FontAwesome
                     name="lock"
                     color="#05375a"
                     size={20}
                  />
                  <TextInput
                     placeholder="Votre mot de passe"
                     style={styles.textInput}
                     autoCapitalize="none"
                  />
               <Feather
                  name="eye-off"
                  color="grey"
                  size={20}
               />
               </View>
               <Text style={[styles.text_footer, { marginTop: 35 }]}>Confirmation mot de passe</Text>
               <View style={styles.action}>
                  <FontAwesome
                     name="lock"
                     color="#05375a"
                     size={20}
                  />
                  <TextInput
                     placeholder="Confirmation mot de passe"
                     style={styles.textInput}
                     autoCapitalize="none"
                  />
                  <TouchableOpacity
                  >
                     <Feather
                        name="eye-off"
                        color="grey"
                        size={20}
                     />
                  </TouchableOpacity>
               </View>
               <View style={styles.button}>
                  <TouchableOpacity
                     style={[styles.signIn, {backgroundColor:"#FDB934"}]}
                     onPress={() => {
                        this.props.navigation.navigate("Account");
                     }}
                  >
                     <Text style={styles.textSign}>S'inscrire</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                     style={[styles.signIn, {
                        borderColor:"#FDB934",
                        borderWidth: 1,
                        marginTop: 15
                     }]}
                     onPress={() => {
                        this.props.navigation.navigate("SignIn")
                     }}
                  >
                     <Text style={[styles.textSign, {color:"#FDB934"}]}>Se connecter</Text>
                  </TouchableOpacity>
               </View>
            </Animatable.View>
         </View>
      );
   }
}

export default SignUpScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1, 
      backgroundColor: '#FDB934'
   },
   header: {
      flex: 1,
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
   },
   footer: {
      flex: 3,
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
   },
   text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
   },
   text_footer: {
      color: '#05375a',
      fontSize: 18
   },
   action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
   },
   actionError: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#FF0000',
      paddingBottom: 5
   },
   textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
   },
   errorMsg: {
      color: '#FF0000',
      fontSize: 14,
   },
   button: {
      alignItems: 'center',
      marginTop: 50
   },
   signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
   },
   textSign: {
      fontSize: 18,
      fontWeight: 'bold',
      color: "#fff"
   }
});