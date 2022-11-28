import styled from 'styled-components'

export const TagItem = styled.li``

export const TagButton = styled.button`
  color: #ffffff;
  border: 1px solid #f3aa4e;
  padding: 5px 14px 5px 14px;
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  margin-right: 15px;
  margin-bottom: 12px;
  border-radius: 25px;
  cursor: pointer;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
`
