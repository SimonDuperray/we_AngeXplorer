import React from 'react';
import { 
   View, 
   Text, 
   StyleSheet, 
   TouchableOpacity,
   Image,
   ScrollView,
} from 'react-native';
import * as Animatable from "react-native-animatable";
import ralliement from "../assets/ralliement.jpg";

class TextScreen extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <View style={styles.header}>
               <Text style={styles.brandHeader}>Angerxplorer</Text>
               <Text style={styles.textHeader}>Place du Ralliement</Text>
               <TouchableOpacity
                  onPress={() => {
                     this.props.navigation.navigate("SignIn")
                  }}
                  style={{
                     borderWidth: 1,
                     borderColor: "orange",
                     backgroundColor: 'orange',
                     paddingVertical: 5,
                     paddingHorizontal: 10,
                     borderRadius: 10,
                     width: 130,
                     textAlign: "center",
                     marginTop: 15,
                     shadowColor: "#000",
                     shadowOffset: {
                        width: 0,
                        height: 4,
                     },
                     shadowOpacity: 0.32,
                     shadowRadius: 5.46,
                     elevation: 9,
                  }}
               >
                  <Text
                     style={{
                        fontWeight: 'bold',
                        color: "#fff"
                     }}
                  >
                     Mon compte
                  </Text>
               </TouchableOpacity>
            </View>
            <Animatable.View 
                  animation="fadeInUpBig"
               style={styles.footer}
            >
               <ScrollView>     
                  {/* <Image source={ralliement} style={{ aspectRatio: 2/3, height: 150, borderRadius: 5, marginBottom: 30 }} /> */}
                  <Text style={{ marginBottom: 20 }}>
                     Vous êtes déjà tous passés devant le 8 place du Ralliement, mais saviez-vous que ce fut à cet endroit que les Angevins découvrirent le cinéma?
                  </Text>
                  <Text>
                     En 1870, le cafetier Armand Gasnault passe commande auprès d’Alexandre Aïvas, architecte de renom, pour qu’il lui dessine les plans de ce qui deviendra, après deux ans de travaux, le Café Gasnault. Il devient rapidement une référence en termes d’animation, accueillant de nombreux artistes, et parfois même des orchestres entiers.
                     C’est dans cette dynamique que Gasnault organise, en 1896, soit seulement quelques mois après la première démonstration des frères Lumières, la première séance de cinéma donnée à Angers.
                     Ce lieu d’effervescence populaire a été converti en bureaux après les années 1950, mais il restera une référence dans l’histoire du divertissement à Angers.
                  </Text>
               </ScrollView>
            </Animatable.View>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#FDB934',
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
     paddingVertical: 20
   },
   brandHeader: {
     color: '#fff',
     fontWeight: 'bold',
     fontSize: 30
   },
   textHeader: {
     color: '#fff',
     fontSize: 20,
     fontStyle: 'italic'
   },
   accountRedirectionText: {
     color: '#fff',
     fontSize: 15,
     textDecorationStyle: 'solid',
     textDecorationColor: '#fff',
     textDecorationLine: 'underline',
     fontWeight: 'bold',
   },
});
 

export default TextScreen;