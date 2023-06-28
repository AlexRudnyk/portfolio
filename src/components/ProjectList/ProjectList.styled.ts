import styled from "styled-components";

export const ProjectContainer = styled.ul`
  padding-top: 100px;
  display: flex;
  gap: 50px;
  flex-wrap: wrap;
`;

export const ProjectListItem = styled.li`
  flex-basis: calc((100% - 2 * 50px) / 3);
`;
