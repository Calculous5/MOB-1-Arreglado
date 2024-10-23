import { Text, SafeAreaView, StyleSheet, TouchableOpacity, View, Alert, Image } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';

const App = () => {
  const items = ['Cine', 'Dormir', 'Tennis'];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.logo} source={require('./snoopy.jpg')} />
      </View>

      <View style={styles.cardContainer}>
        <Card style={styles.card}>
          <View style={styles.cardContent}>
            <Text style={styles.cardText}>Snoopy and Peanuts</Text>
            <TouchableOpacity style={styles.button} onPress={() => Alert.alert('Like')}>
              <Text style={styles.buttonText}>Like</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.subText}>Una amistad verdadera</Text>

          <AssetExample items={items} />
        </Card>
      </View>

      <Separator />
    </SafeAreaView>
  );
};

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 0,
    backgroundColor: '#ff69b4', 
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 30, 
  },
  cardContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  card: {
    padding: 20,
    backgroundColor: '#fff',    
    borderRadius: 20,            
    width: '100%', 
  },
  cardContent: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
  },
  cardText: {
    fontSize: 18,              
    fontWeight: 'bold',        
  },
  subText: {
    fontSize: 15,             
    textAlign: 'center',       
    marginTop: 5,             
  },
  button: {
    backgroundColor: '#dda0dd', 
    paddingVertical: 10,      
    paddingHorizontal: 20,    
    borderRadius: 20,            
    alignItems: 'center',      
  },
  buttonText: {
    color: '#fff',           
    fontSize: 16,              
    fontWeight: 'bold',        
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#ff69b4',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  logo: {
    height: 350, 
    width: 300,  
    borderRadius: 20,
  },
});

export default App; 


