import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { actionCreators } from '../state';
import { useAction } from '../hooks/useActions';


const RepositoriesList:React.FC = () => {
const [term, setTerm] = useState('');
// const dispatch = useDispatch();

const {searchRepositories} = useAction();

const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // dispatch(actionCreators.searchRepositories(term) as any);

    searchRepositories(term)
}

  return (
  <div>
    <form onSubmit={onSubmit}>
      <input type="text" value={term} onChange={(e) => setTerm(e.target.value)} />
      <button>Search</button>
    </form>
  </div>
 )
}

export default RepositoriesList;