import Profile from "./profile/Profile"


function App() {
  const fullName= "taha khiari"
  const  bio= 'I am a 25 years old curently studying a training about full stack js'
  const profession= 'full time student at gomycode'
  const imagesrc='src'
  const handleName=()=>{
    alert(`Hello ${fullName}`) 
  }
    return (
    <div className="App">
 <Profile fullName={fullName}  bio={bio}  profession={profession} imagesrc={imagesrc}   handleName={handleName} />
    </div>
  );
}

export default App;
