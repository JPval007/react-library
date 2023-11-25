import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  //This is used to implement the new logic in this part
  const { data: platforms } = usePlatforms();
  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  //Constant to store the genre
  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  //Makes things bold on mouse hover
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading marginY={5} fontSize="5xl" as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
