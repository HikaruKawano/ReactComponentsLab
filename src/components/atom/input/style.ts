import styled from 'styled-components';
import Colors from '../../color/colors';

interface props {
    width?: string;
    height?: string;
}

export const StyledInputContainer = styled.div<props>`
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 50%;

`;

export const StyleInput = styled.input<props>`

    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1.3rem;
    color: #fff;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;
    
    &::placeholder {
    color: transparent;
    }
  
    &:focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
    }

    &:focus ~ .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #11998e;
    font-weight: 700;
    }

    /* reset input */
    &:required, &WS:invalid {
    box-shadow: none;
    }

`;

export const StyledLabel = styled.label<props>`
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #9b9b9b;
`;
