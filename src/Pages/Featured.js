import React, {Component} from 'react';
import { Text, View, StyleSheet,TouchableOpacity, ScrollView, Button, SafeAreaView} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as addedWeather from '../Redux/Actions';
import Icon from 'react-native-vector-icons/Ionicons';  
import {getWeather} from '../Services/Api'
import {Overlay} from 'react-native-elements';


class Featured extends Component {

  
  constructor () {
    super();
    this.state = {
      data:[],
      visible: false,
     
    };
  }

  weather(city){
    getWeather(city).then((response) => {this.setState({data : JSON.stringify(response)});})
    .catch((error) => {
      console.error(error);
    });
    this.toggleOverlay()
  }
   
  toggleOverlay = () => {
    this.setState({ visible: !this.state.visible})
  }


  render(){
    

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        {
          this.props.weather.featured.map((weather, index) => (
            <View style={styles.view} key={ weather }>
              <TouchableOpacity
                style={styles.button}
                onPress={() => this.weather(weather)
                }
              >

                <Text
                  style={styles.text}
                >
                  { `${ weather }` }
                </Text>
              
              </TouchableOpacity>
           
            <TouchableOpacity
            style={styles.touchableOpacity}
            >
              <Icon name="star" color={'#ff2b2a'} size={40}/>
            </TouchableOpacity>
            </View>
           
          ))
        }
        <Overlay  isVisible={this.state.visible} onBackdropPress={()=>this.toggleOverlay()}>
          <View style={styles.overlayView}>
            <Text style={styles.textWeather}> Voici les données Météo ! : </Text>
            <Text>  {this.state.data} : </Text>
            
          </View>
         
        </Overlay>

        </ScrollView>

      </SafeAreaView>
      

      
                 
    );
  }
  
}


             
  

const styles = StyleSheet.create({
   container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#2a7ffd',
    
  },
  view : {
    flexDirection: "row",
    alignItems : 'center',
    justifyContent : 'space-between',
    padding : 2,
    marginLeft : 30
  },
  button : {
    height : '100%',
    width : '45%',
    backgroundColor :"#ffcc25",
    alignItems: "center",
    padding : 10,
    borderRadius: 10,
    borderWidth: 1,
    
  },
  touchableOpacity : {
    marginRight : 60
  },
  overlayView : {
    alignItems : 'center',
    justifyContent : 'center'
  },
  text : {
    color : 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
   textWeather : {
    fontWeight: 'bold',
    fontSize: 20,
  }
    
});



const mapStateToProps = state => ({
  weather: state.weather,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(addedWeather, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Featured);
