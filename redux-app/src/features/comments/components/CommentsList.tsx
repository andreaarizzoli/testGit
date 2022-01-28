import { useEffect } from "react";
import styled from "styled-components";
import { useCommentState } from "../useCommentState";
import CommentItem from "./CommentItem";
import { Spinner, SpinnerSize } from "@fluentui/react/lib/Spinner";
import { Stack } from "@fluentui/react/lib/Stack";
import { PrimaryButton } from "@fluentui/react/lib/Button";
import { Label } from "@fluentui/react/lib/Label";

export const CommentsList = () => {
  const { data, status, error, fetchData } = useCommentState();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (status) {
    return (
      <Stack>
        <Stack.Item align="center">
          <Spinner label="Loading" size={SpinnerSize.large} />
        </Stack.Item>
      </Stack>
    );
  }
  if (error) {
    return (
      <Stack>
        <Label>Errore</Label>
        <PrimaryButton
          text="Carica dati"
          onClick={fetchData}
          allowDisabledFocus
        />
      </Stack>
    );
  }

  return (
    <Stack>
      <h1>Lista dei commenti:</h1>
      <br />
      <Stack horizontal wrap horizontalAlign="space-around">
        {data.map((comment) => {
          return (
            <CommentItem key={comment.id} comment={comment}>
              <button>test</button>
              <label>Kikko</label>
            </CommentItem>
          );
        })}
      </Stack>
    </Stack>
  );
};

export default CommentsList;
