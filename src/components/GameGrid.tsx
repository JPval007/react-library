import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

export const GameGrid = () => {
  // This is my custom hook that does all the procedures
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};
