interface ChildProps {
  color: string;
  onClick: () => void;
}


export const Child = ({ color, onClick}: ChildProps ) => {
  return <div>{color}
  <button onClick={onClick}>Click me</button></div>
}

//Droga do okreslenia ze to komponent funkcyjny dla TSa  React.FuctionalComponent<ChildProps>

export const ChildAsFC: React.FC<ChildProps> = ({color, onClick}) => {
  return <div>{color}
  <button onClick={onClick}>Click me</button></div>
}