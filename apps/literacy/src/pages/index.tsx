import Link from "next/link";
import {useRouter} from "next/router";
import {useStore} from "~/store";

const Home = () => {
  const router = useRouter();
  const {wordList, initGame} = useStore(state => ({
    wordList: state.wordList,
    initGame: state.initGame
  }));

  const onStart = () => {
    initGame();
    router.push("/game");
  };

  return (
    <div className="alert shadow-lg">
      {wordList.words.length ? (
        <button type="button" className="btn btn-primary btn-block btn-lg" onClick={onStart}>
          Start
        </button>
      ) : (
        <Link href="/word-list" passHref>
          <a className="btn btn-secondary btn-block btn-lg" href="dummy">
            Add words to start
          </a>
        </Link>
      )}
    </div>
  );
};

export default Home;
