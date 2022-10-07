import QuoteList from "../components/quotes/QuoteList";

const RANDOM_QUOTES = [
  { id: "q1", author: "Lukas", text: "Learning react is fun !" },
  { id: "q2", author: "SMB", text: "Comparasion is thief of the joy !" },
  { id: "q3", author: "SMB2", text: "Creating is  expanding !" },
];

const AllQuotes = () => {
  return <QuoteList quotes={RANDOM_QUOTES} />;
};

export default AllQuotes;
