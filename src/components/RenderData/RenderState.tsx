import { useContextState } from "../../context/state/useContextState";

const RenderState = () => {
  // Get the full stored state
  const { state } = useContextState();
  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};

export default RenderState;
