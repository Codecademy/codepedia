import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { loadMap } from "./thunks/loadMap";
import { RouteComponentProps } from "@reach/router";
import { fontBase } from "@codecademy/gamut-styles";
import styled from "@emotion/styled";
import { IEntry } from "./models/entry";
import { DevView } from "./scenes/Dev";
import { Hub } from "./scenes/Hub";
import { Entry } from "./scenes/Entry";

const StyledApp = styled.div`
  font-family: ${fontBase};
`;
export const App: React.FC<RouteComponentProps> = () => {
  const [entry, setEntry] = useState<IEntry>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadMap());
  }, []);

  return (
    <StyledApp>
      {entry ? (
        <Entry entry={entry} path="/" onBack={() => setEntry(undefined)} />
      ) : (
        <Hub path="/" default onEntrySelect={setEntry} />
      )}
    </StyledApp>
  );
};
