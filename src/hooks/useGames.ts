import Game from "../interfaces/Game";
import useData from "./useData";

const useGames = () => useData<Game>("/games");

export default useGames;
