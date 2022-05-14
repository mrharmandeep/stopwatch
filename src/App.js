import React,{useState} from "react";
import './App.css';
import Display from "./components/display";
import Button from "./components/button";

function App() {
  const[time,setTime]=useState({ms:0,s:0,m:0,h:0});
  const [inter, setInter] = useState();
  const [status, setStatus] = useState(0);
  let updatedMs=time.ms,updatedS=time.s,updatedM=time.m,updatedH=time.h;

  const start=()=>{
    run();
    setInter(setInterval(run,10));
    setStatus(1);
  }


  const run=()=>{
    if(updatedM===60){
      updatedH++;
      updatedM=0;
    }
    if(updatedS===60){
      updatedM++;
      updatedS=0;
    }
    if(updatedMs===100){
      updatedS++;
      updatedMs=0;
    }

    updatedMs++;
    
    return setTime({ms:updatedMs,s:updatedS,m:updatedM,h:updatedH})
  }

  const stop=()=>{
    clearInterval(inter);
    setStatus(2);
  }

  const reset=()=>{
    clearInterval(inter);
    setTime({ms:0,s:0,m:0,h:0});
    setStatus(0);
  }

  const resume = () => start();

  return (
    <div className="App">
     <header>Stopwatch</header>
     <Display time={time} />
     <Button start={start} status={status} stop={stop} reset={reset} resume={resume}/>

    </div>
  );
}

export default App;
