import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity,TextInput } from 'react-native';

export default function Calc() {
  const [input, setInput] = useState('');
// if (value === 'C') {
    //   setInput('');
    // } else if (value === '=') { 
    //     const result = eval(input);
    //     setInput(result.toString());
    // } else {
    //   setInput((prev) => prev + value);
    // }
    // const [text,setText] = useState(0)

    const [result,setResult] = useState('')
   
  const handlePress = (value) => {
      switch (value) {
        case 'C': 
          setInput(''); 
          break;
        case '+':
          
        case '-':
        case '*':
        case '/':
          setInput((prev) => prev + value); 
          break;
        default:
          setInput((prev) => prev + value); 
        break;
      }
    };


    // const automaticCalc = () =>{
    //   try {
    //     calculateValue(input)
    //   } catch (error) {
    //     console.log(error);
        
    //   }
    // }
 
   

    
    const calculateValue = (value) => {
      // switch (value) {
      //   case '=': 
          
            const result = eval(input); 
            setResult(result.toString()); 
        //   break;
        // default:
        //   console.log('Invalid operation'); 
        //   break;
      // }
    };
    
    
  useEffect(()=>{
   try {
   if(input){
    const result = eval(input); 
    setResult(result.toString()); 
   }else{
    setResult('')
   }
   } catch (error) {
    console.log(error);
   }
  },[input])
   
   

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>
      <TextInput  style={styles.display} value={input}></TextInput>
      <TextInput  style={styles.display} value={result}></TextInput>
     
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('-')}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('*')}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('C')}>
          <Text style={styles.buttonText}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => calculateValue('=')}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('/')}>
          <Text style={styles.buttonText}>/</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'orange',
    marginHorizontal: 100,
    marginVertical: 20,
    borderRadius: 20,
  },
  title: {
    fontSize: 40,
    marginBottom: 20,
    fontWeight: '600',
  },
  display: {
    fontSize: 48,
    marginBottom: 10,
    textAlign: 'right',
    width: '100%',
    padding: 10,
    backgroundColor: 'gray',
    borderRadius:25,
    shadowOpacity:90,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 10,
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: '500',
  },
});