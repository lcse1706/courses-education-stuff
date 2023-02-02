import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { actionCreators } from '../state';
import { useAction } from '../hooks/useActions';
// import { useSelector } from 'react-redux';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList:React.FC = () => {
const [term, setTerm] = useState('');
// const dispatch = useDispatch();
const {searchRepositories} = useAction();

//Aby ts dobrze okreslil typ, musielismy exportowac typ z reducers/index.ts, nastepnie wyeksportowac go ze state/index.ts, na koncu stworzyc hooks/useTypedSelector.ts

const {data, error, loading} = useTypedSelector((state) => state.repositories)


const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // dispatch(actionCreators.searchRepositories(term) as any);

    searchRepositories(term);
}

  return (
  <div>
    <form onSubmit={onSubmit}>
      <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
      <button>Search</button>
    </form>
    {error && <h3>{error}</h3>}
    {loading && <h3>Loading...</h3>}
    {!error && !loading && 
    data.map(item => <div key={item}>{item}</div>)}
  </div>
 )
}

export default RepositoriesList;