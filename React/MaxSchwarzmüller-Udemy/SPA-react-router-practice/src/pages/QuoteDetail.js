import { useParams, Route, Link, useRouteMatch } from 'react-router-dom';
import HighlightedQuote from '../components/quotes/HighlightedQuote';
import Comments from '../components/comments/Comments';

const RANDOM_QUOTES = [
  { id: 'q1', author: 'Lukas', text: 'Learning react is fun !' },
  { id: 'q2', author: 'SMB', text: 'Comparasion is thief of the joy !' },
  { id: 'q3', author: 'SMB2', text: 'Creating is  expanding !' },
];

const QuoteDetail = props => {
  const params = useParams();
  const quote = RANDOM_QUOTES.find(quote => quote.id === params.quoteId);

  const match = useRouteMatch();

  console.log(match);

  if (!quote) {
    return <p>No quote found</p>;
  }

  return (
    <section>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className='centered'>
          <Link className='btn--flat' to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>

      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </section>
  );
};

export default QuoteDetail;
