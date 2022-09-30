import * as React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import StepIndicator from 'react-native-step-indicator';

const stepIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: '#fe7013',
  separatorFinishedColor: '#fe7013',
  separatorUnFinishedColor: '#aaaaaa',
  stepIndicatorFinishedColor: '#fe7013',
  stepIndicatorUnFinishedColor: '#aaaaaa',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 15,
  currentStepLabelColor: '#fe7013',
};

const steps = [
  {
    title: 'Cliente',
  },
  {
    title: 'Introduction',
  },
  {
    title: 'Chapter 1',
  },
  {
    title: 'Chapter 2',
  },
  {
    title: 'Chapter 3',
  },
  {
    title: 'About',
  },
]

interface Props{
  currentPage: number;
  onStepPress: (position:number) => void;
}

const Steps: React.FC<Props>  = ({currentPage, onStepPress}) => {
  return (
    <View style={styles.container}>
      <StepIndicator
        customStyles={stepIndicatorStyles}
        stepCount={6}
        direction="horizontal"
        currentPosition={currentPage}
        onPress={(position: number) => onStepPress(position)}
        labels={steps.map((item) => item.title)}
      />
    </View>
  );
} 

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
});

export default Steps;