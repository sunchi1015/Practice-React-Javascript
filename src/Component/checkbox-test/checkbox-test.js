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
      <label style={{ marginRight: '1rem' }}>CheckBox 1</label>
      <input onClick={e => clickHandler(e)} type="checkbox" value="1" name="checkbox1" />
      <br />
      <label style={{ marginRight: '1rem' }}>CheckBox 2</label>
      <input onClick={e => clickHandler(e)} type="checkbox" value="2" name="checkbox2" />
      <br />
      <label style={{ marginRight: '1rem' }}>CheckBox 3</label>
      <input onClick={e => clickHandler(e)} type="checkbox" value="3" name="checkbox3" />
      <br />
      <label style={{ marginRight: '1rem' }}>CheckBox 4</label>
      <input onClick={e => clickHandler(e)} type="checkbox" value="4" name="checkbox4" />
    </div>
  );
}
