export const ColorInput = (props) => {
  const setColor = props.setColor;
  return (
    <div>
      <label>色を選択してください</label>
      <input type="color" onChange={(event) => setColor(event.target.value)} />
      　
    </div>
  );
};
