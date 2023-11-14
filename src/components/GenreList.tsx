import useGenres, { Genre } from "../hooks/useGenres";
import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import getCroppedUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export default function GenreList({ selectedGenre, onSelectGenre }: Props) {
  const { data, isLoading, error } = useGenres();

  if (error) {
    return null;
  }

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={"5px"}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedUrl(genre.image_background)}
            />
            <Button
              onClick={() => onSelectGenre(genre)}
              fontSize={"lg"}
              variant="link"
              fontWeight={genre.id == selectedGenre?.id ? "bold" : "normal"}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
