import React, { useEffect} from 'react'; 
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import RickAndMorty from './components/RickAndMorty'
// import { useDispatch } from 'react-redux';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useCharActions } from './hooks/actionCreator';

const App = () => {
  console.log('start')
  // const {characters, isLoading} = useTypedSelector((state) => state.characters);
  // // const characters = useSelector(state => state.characters.characters);
  // // const loading = useSelector(state =>  state.characters.isLoading)
  // const { fetchCharacters } = useCharActions();

  // console.log(characters)

  // useEffect(() => {
  //   fetchCharacters()
  //   // fetch('https://rickandmortyapi.com/api/character').then(response => {
  //   //   if (response.ok){
  //   //       return response.json();
  //   //   }
  //   //   throw response;
  //   //   }).then(data => {
  //   //     dispatch(fetchCharacters(data.results))
  //   //     console.log("data", data)
  //   //   })

  // }, [fetchCharacters])

  return (
    <div className="App">
      <span>sdfgh</span>
        {/* <Routes>
          {isLoading ? <Route path="/" element={<RickAndMorty data={characters} loading={isLoading}/> } />  : "" }
          <Route path="/card/:id" element={<Card data={characters} />} />
        </Routes> */}
    </div>  
  );
}

export default App;
