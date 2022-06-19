const temperatures = [
    { degrees: 69, isRecordTemp: false },
    { degrees: 82, isRecordTemp: true },
    { degrees: 73, isRecordTemp: false },
    { degrees: 64, isRecordTemp: false }
  ];
  
  const newTemps = temperatures.map(temperature => 
  temperature.degrees > 70 ? { ...temperature, isHigh: true } : temperature 
  );
  
  newTemps.forEach(temperature => {
     if (temperature.isHigh) {
       console.log(`Temperature ${temperature.degrees} was a record high last week!`);  
     }
  })