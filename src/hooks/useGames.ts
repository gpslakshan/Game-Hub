import { useState, useEffect } from "react";
import FetchGamesResponse from "../interfaces/FetchGamesResponse";
import Game from "../interfaces/Game";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGamesResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort(); // clean-up function
  }, []);

  return { games, error };
};

export default useGames;
