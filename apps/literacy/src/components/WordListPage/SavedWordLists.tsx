import {signIn, useSession} from "next-auth/react";
import {KeyboardEvent, useState} from "react";
import {toast} from "react-toastify";
import {useStore} from "~/store";

const SavedWordLists = () => {
  const {status} = useSession();
  const {wordLists, saveWordList, updateWordList, deleteWordList, loadWordList} = useStore(
    state => ({
      wordLists: state.wordLists,
      saveWordList: state.saveWordList,
      updateWordList: state.updateWordList,
      deleteWordList: state.deleteWordList,
      loadWordList: state.loadWordList
    })
  );
  const [name, setName] = useState("");

  const handleSubmit = async (e?: KeyboardEvent<HTMLInputElement>) => {
    if ((e && e.code !== "Enter") || !name) return;

    try {
      await saveWordList(name);
    } catch (error: any) {
      toast.error(error.message);
    }

    setName("");
  };

  if (status === "unauthenticated") {
    return (
      <div>
        <div className="alert shadow-lg">
          <button
            type="button"
            className="btn btn-primary btn-block btn-lg"
            onClick={() => signIn("google")}
          >
            Login to save word lists
          </button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <label className="label flex flex-col items-start" htmlFor="word-list-name-input">
        <span className="label-text">Save list</span>
        <div>
          <input
            className="input input-bordered"
            id="word-list-name-input"
            value={name}
            onChange={e => setName(e.target.value)}
            onKeyUp={handleSubmit}
            placeholder="add word list name to save..."
          />
          <button
            className="btn btn-primary my-auto"
            type="button"
            disabled={!name}
            onClick={() => handleSubmit()}
          >
            Save
          </button>
        </div>
      </label>

      <div>
        {wordLists.map(wl => (
          <div className="alert shadow-lg my-6" key={wl.name}>
            <span>{wl.name}</span>

            <button type="button" className="btn btn-success" onClick={() => loadWordList(wl)}>
              Load
            </button>

            <button
              type="button"
              onClick={() => updateWordList(wl.name)}
              className="btn btn-secondary"
            >
              Update
            </button>

            <button type="button" onClick={() => deleteWordList(wl.name)} className="btn btn-error">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedWordLists;
