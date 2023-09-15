import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const HeaderListItem = styled(Link)`
  color: #f9f9f9;
  font-size: 24px;
  text-decoration: none;
`;
