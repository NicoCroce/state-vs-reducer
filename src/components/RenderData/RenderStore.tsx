import { useStore } from "../../context/store/useStore";

const RenderStore = () => {
  //Get the full stored state.
  const { store } = useStore();
  return <pre>{JSON.stringify(store, null, 2)}</pre>;
};

export default RenderStore;
