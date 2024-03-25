import { useStore } from "../../context/store/useStore";

const CardStore = () => {
  // Get store and action from hook.
  const { changeText, userName, text, changeUserName } = useStore();

  return (
    <article className="card-container">
      <h3>Change stored information</h3>
      <div>
        <input
          type="text"
          placeholder="Change text..."
          value={text}
          onChange={({ target: { value } }) => changeText(value)} // Update state.
        />
        <input
          type="text"
          placeholder="Change userName..."
          value={userName}
          onChange={({ target: { value } }) => changeUserName(value)} // Update state.
        />
      </div>
    </article>
  );
};

export default CardStore;
