import React, {Component, useRef} from 'react';
import { Text, View, StyleSheet,TouchableOpacity, ScrollView, Button, SafeAreaView, Animated, ImageBackground} from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as addedWeather from '../Redux/Actions';
import Icon from 'react-native-vector-icons/Ionicons';  
import {getWeather} from '../Services/Api';
import {Overlay} from 'react-native-elements';
import LottieView from 'lottie-react-native';
import * as star from '../assets/star.json';

class List extends Component {

  
  constructor () {
    super();
    this.state = {
      data:[],
      visible: false,
      //progress: new Animated.Value(0),
      progress : []
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
      <ImageBackground blurRadius={2} style={styles.image} imageStyle={{opacity:0.6}} source={require('../assets/img/sun.jpeg')} >
        <ScrollView style={styles.scrollView}>
        {
          this.props.weather.all_weather.map((weather, index) => (
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
             onPress={() =>{
              let progress = this.state.progress
              progress[index]=new Animated.Value(0)
              this.setState({progress : progress})
              console.log(index)
              Animated.timing(this.state.progress[index], {
              toValue: 1,
              duration: 2000,
              useNativeDriver: true,
              }).start()

              setTimeout(() => {
                progress = this.state.progress
                progress[index]=new Animated.Value(0)
                this.props.actions.addedWeather(index)
              },1500);
              }
                
              }
            >
              <Icon name="star-outline" color={'#424242'} size={40}/>
              <LottieView source={star} progress={this.state.progress[index]} />
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
      </ImageBackground>
      </SafeAreaView>
      

      
                 
    );
  }
  
}


             
  

const styles = StyleSheet.create({
   container: {
    flex: 1,
  },
  scrollView: {
    //backgroundColor: '#2a7ffd',
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent : 'center',
    alignItems : 'center',
    
    
  },
  view : {
    flexDirection: "row",
    alignItems : 'center',
    justifyContent : 'space-between',
    padding : 2,
    marginLeft : 20
  },
  button : {
    height : '100%',
    width : '60%',
    //backgroundColor :"#ffff",
    alignItems: "center",
    padding : 10,
    borderRadius: 10,
    //borderWidth: 0.5,
    elevation: 5
    
  },
  touchableOpacity : {
    marginRight : 60
  },
  overlayView : {
    alignItems : 'center',
    justifyContent : 'center'
  },
  text : {
    color : 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  textWeather : {
    fontWeight: 'bold',
    fontSize: 20,
  },
  lottie : {
    height : '10%',
    width : '10%',
  }
    
});



const mapStateToProps = state => ({
  weather: state.weather,
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(addedWeather, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);
