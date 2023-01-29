const EventComponent = () => {

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event)
  }

  return (
    <div>
      {/* Hover on function and copy type */}
      <input onChange={onChange}/>
      <div draggable onDragStart={onDragStart}>Drag Me !</div>
    </div>
  )
}

export default EventComponent; 