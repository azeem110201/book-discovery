import styled from '@emotion/styled';
import React from 'react';
import StatusReport from "ui-bookdiscoveryv2-42/dist/HeroCard40";

const CardBody = styled("div")({
    display: "flex",
    flexDirection: "row",
    gap: "30px",
    marginTop: 64,
  });

type Props = {
    count: number;
    booksToRead: number;
}

const StatusStats = (props: Props) => {
  return (
    <CardBody>
          <StatusReport 
          //@ts-ignore
          overrides={{ "CURRENTLY READING": { children: "CURRENTLY READING" }, "26": { children: props.count } }} />
          <StatusReport 
          //@ts-ignore
          overrides={{ "CURRENTLY READING": { children: "BOOKS TO READ" }, "26": { children: props.booksToRead } }} />
          <StatusReport 
          //@ts-ignore
          overrides={{ "CURRENTLY READING": { children: "BOOKS READ" }, "26": { children: 5 } }} />
          <StatusReport 
          //@ts-ignore
          overrides={{ "CURRENTLY READING": { children: "TARGET PER YEAR" }, "26": { children: "100" } }} />
    </CardBody>
  )
}

export default StatusStats