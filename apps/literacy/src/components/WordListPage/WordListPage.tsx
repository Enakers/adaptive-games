import SavedWordLists from "./SavedWordLists";
import WordList from "./WordList";

const WordListPage = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-10">
    <WordList />
    <SavedWordLists />
  </div>
);

export default WordListPage;
