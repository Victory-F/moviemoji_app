import styled from "styled-components";
import { Movie } from "../../../types/gameTypes";

export const MovieCard = ({ movie }: { movie: Movie }) => {
  return (
    <CardWrapper>
      <MovieName>{movie.name}</MovieName>
      <MovieImage src={movie.poster} />
    </CardWrapper>
  );
};

const MovieName = styled.h1`
  margin: 0;
  font-size: 1.5vw;
`;

const MovieImage = styled.img`
  max-height: 10vw;
  max-width: 10vw;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-width: 15vw;
  max-height: 15vw;
`;
