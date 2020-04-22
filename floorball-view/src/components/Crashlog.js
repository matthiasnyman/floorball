//import React from 'react';

const CrashLog = (err, file, line) => {
  const data= {
    "Date": new Date(),
    "DebugMode": 0,
    "Info": err,
    "File": file,
    "Line": line
  }
  console.log('Crash körs')

  localStorage.setItem('myCat', JSON.stringify(data));
}

export default CrashLog;