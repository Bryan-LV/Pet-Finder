import styled from 'styled-components'

const white = '#fafafa';
const black = '#292929';

export const Title = styled.h2`
  color: ${props => props.textColor || black};
  margin:0;
  margin:10px 0;
  text-align: ${props => props.align || 'initial'};
`
export const Underline = styled.div`
  width:80%;
  margin:5px auto;
  max-width:90px;
  background-color: ${props => props.color || '#292929'};
  height:4px;
`
export const Input = styled.input`
  width:80%;
  max-width:350px;
  padding:8px 10px;
  border-radius:4px;
  border:1px solid #eee;
  margin:10px 0;
`

export const Button = styled.button`
  width:100%;
  max-width:120px;
  background-color: ${props =>  props.backgroundColor || 'white' };
  color: ${props => props.textColor || black };
  padding:12px 22px;
  margin:0 10px 10px;
  border:none;
  border-radius:6px;
  box-shadow: ${props => props.boxShadow || 'none'};
  place-self:flex-end;
  cursor:pointer;
`

export const Card = styled.div`
  width: 97%;
  max-width:300px;
  margin: 20px auto 30px;
  border-radius:4px;
  box-shadow:2px 3px 14px rgba(0,0,0,0.6);
  display:flex;
  flex-flow:column nowrap;
  align-items:center;
  justify-content:flex-start;
`

export const CardTop = styled.div`
  width:100%;
  border-top-left-radius:4px;
  border-top-right-radius:4px;
`

export const CardBottom = styled.div`
  width:100%;
  padding: 15px 20px;
`

export const Description = styled.p`
  line-height:1.4;
  padding: ${props => props.padding || '0px'};
  color: ${props => props.textColor || 'inital'};
  text-shadow:${props => props.textShadow || 'none'};
  text-align: ${props => props.align || 'initial'};
`

export const Italics = styled.p`
  font-style:italic;
`