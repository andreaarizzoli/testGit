import { Spinner, SpinnerSize } from "@fluentui/react/lib/Spinner";
import { IStackProps, Stack } from "@fluentui/react/lib/Stack";
import React, { useEffect } from "react";
import styled from "styled-components";
import { Album } from "../albums.slice";
import { useAlbumState } from "../useAlbumsState";
import { Card } from "./Card";

export const Albums = () => {
  const rowProps: IStackProps = { horizontal: true, verticalAlign: "center" };

  const tokens = {
    sectionStack: {
      childrenGap: 10,
    },
    spinnerStack: {
      childrenGap: 20,
    },
  };

  const { fetchAlbums, loading, hasError, albumData } = useAlbumState();

  const Cardcontainer = styled.div`
    margin: 20px auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 60%;

    @media (max-width: 820px) {
      width: 90%;
      margin: 0 5% 30px 5%;
    }
  `;

  useEffect(() => {
    fetchAlbums();
  }, [fetchAlbums]);

  const Loading = {
    margin: "40px auto",
    width: "100px",
    fontSize: "40px",
  };

  if (loading) {
    return (
      <Stack {...rowProps} tokens={tokens.spinnerStack} style={Loading}>
        <Spinner size={SpinnerSize.large} />
      </Stack>
    );
  }
  if (hasError) {
    return <h1>Pagina di errore</h1>;
  } else {
    return (
      <Cardcontainer>
        <Card album={albumData[0]}>children</Card>
        {albumData.map((album: Album) => {
          return <Card key={album.id} album={album}> <a href="/Maurizio">VAI</a></Card>;
        })}
      </Cardcontainer>
    );
  }
};
