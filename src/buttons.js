import "./styles.css"

function Buttons({ handleFrom }) {
    
  // Buttons get their own `handleClick` function
  // which extracts the colour from the button's dataset
  // and then calls `handleFrom` with that from
  function handleClickFrom(i) {
    const { from } = i.target.dataset;
    handleFrom(from);
  }

  
  // Button components get text, from,
  // and the `handleClick` function as props
  return (
    <div>
      <Button
        text="von Frankfurt"
        from="Frankfurt Hbf"
        handleClick={handleClickFrom}
      />
      <Button
        text="nach Frankfurt"
        to="Frankfurt Hbf"
        handleClick={handleClickFrom}
      />
    </div>
  );

}

function Button({ text, from, to, handleClick }) {
  return (
    <button
      data-from={from}
      data-to={to}
      onClick={handleClick}
      class="btn"
    >{text}</button>
  );
}

export default Buttons;