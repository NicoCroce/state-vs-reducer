import { useContextState } from "../../context/state/useContextState";

const Card = () => {
  // Get state and action from hook.
  const { text, userName, changeText, changeUserName } = useContextState();

  return (
    <article className="card-container">
      <h3>Change stored information</h3>
      <div>
        <input
          type="text"
          placeholder="Write here"
          value={text}
          onChange={({ target }) => changeText(target.value)} // Update state.
        />
        <input
          type="text"
          placeholder="Write here"
          value={userName}
          onChange={({ target }) => changeUserName(target.value)} // Update state.
        />
      </div>
    </article>
  );
};

export default Card;
