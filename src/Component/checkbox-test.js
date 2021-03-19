export default function CheckTest() {
  const clickHandler = e => {
    let isChecked;
    const checkboxName = e.target.name;
    const checkboxValue = e.target.checked;
    if (checkboxValue) {
      isChecked = 'Checked';
    } else {
      isChecked = 'UnChecked';
    }
    console.log(checkboxName + ' - ' + isChecked);
  };
  return (
    <div className="App">
      <h1>Hello</h1>
      <input onClick={e => clickHandler(e)} type="checkbox" value="1" name="checkbox1" />
      <input onClick={e => clickHandler(e)} type="checkbox" value="2" name="checkbox2" />
      <input onClick={e => clickHandler(e)} type="checkbox" value="3" name="checkbox3" />
      <input onClick={e => clickHandler(e)} type="checkbox" value="4" name="checkbox4" />
    </div>
  );
}
