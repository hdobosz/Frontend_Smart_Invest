import React from 'react'

type Props = {
    text: string;
};

export const TextBox = (props: Props) => {
  return (
    <div>{props.text}</div>
  )
}
