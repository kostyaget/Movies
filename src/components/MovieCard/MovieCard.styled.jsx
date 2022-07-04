import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieItem = styled.li`
  overflow: hidden;
  color: #ffffff;
  background: rgb(131,58,180);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
    0px 1px 1px 0px rgba(237, 70, 47, 0.14),
    0px 2px 1px -1px rgba(237, 70, 47, 0.12);
border-radius: 30px 30px 30px 30px / 25px 25px 25px 25px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  :hover {
    transform: scale(1.03);
  }
`;

export const MovieLink = styled(Link)`
  display: flex;
`;

export const MovieImg = styled.img`
  width: 186.66px;
  height: 280px;
  object-fit: contain;
`;

export const InfoWrapper = styled.div`
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

export const MovieName = styled.h3`
  width: 172px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  line-height: 26px;
`;

export const MovieRelease = styled.span`
  font-size: 16px;
  text-align: center;
`;

export const MovieRating = styled.span`
  font-size: 16px;
  text-align: center;
`;

export const VoteNum = styled.div`
  font-weight: 600;
`;
