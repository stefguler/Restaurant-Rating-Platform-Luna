import styled from "styled-components";


export const Select = styled.select`

  /* styling */
  display: inline-block;
  font: inherit;
  height: 3.6rem;
  padding: 0.5rem 3.5rem 0.5rem 1rem;

  /* reset */
  margin: 0;      
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-appearance: none;
  -moz-appearance: none;

/* arrows */
  background-image:
    linear-gradient(45deg, transparent 50%, white 50%),
    linear-gradient(135deg, white 50%, transparent 50%),
    linear-gradient(to right, #EBEBEB, #EBEBEB);
  background-position:
    calc(100% - 20px) calc(1em + 6px),
    calc(100% - 15px) calc(1em + 6px),
    100% 0;
  background-size:
    5px 5px,
    5px 5px,
    2.5em 3em;
  background-repeat: no-repeat;

:focus {
  background-image:
    linear-gradient(45deg, white 50%, transparent 50%),
    linear-gradient(135deg, transparent 50%, white 50%),
    linear-gradient(to right, #E47D31, #E47D31);
  background-position:
    calc(100% - 15px) 1em,
    calc(100% - 20px) 1em,
    100% 0;
  background-size:
    5px 5px,
    5px 5px,
    2.5em 3em;
  background-repeat: no-repeat;
  border-color: grey;
  outline: 0;
}

`