import styled from "styled-components";

export const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 5px;
  background-color: #0c2530;
  border-radius: 20px;
  padding: 10px;
  cursor: pointer;
`;

export const CardTitle = styled.h2`
  font-size: 24px;
  color: #a6afb8;
`;

export const CardImage = styled.img`
  width: 250px;
  max-height: 200px;
  object-fit: contain;
  border-radius: 20px;
`;
