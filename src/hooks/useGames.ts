import Game from "../interfaces/Game";
import Genre from "../interfaces/Genre";
import useData from "./useData";

const useGames = (selectedGenre: Genre | null) =>
  useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);

export default useGames;
