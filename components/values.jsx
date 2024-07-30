import React from "react";

export default function Values() {
  let [value, setValue] = React.useState("");

  function handleClicked(e) {
    // setValue(value + e.target.value);
    setValue((prev) => {
      return prev + e.target.value;
    });
  }

  return (
    <>
      <h1>{value}</h1>

      <div className="input_grid">
        <input
          id="clr"
          type="button"
          value="CLEAR"
          onClick={(e) => setValue("")}
        />
        <input
          onClick={handleClicked}
          type="button"
          value={0}
          id="num0"
          className="input_values"
        />
        <input
          onClick={handleClicked}
          type="button"
          value={1}
          id="num1"
          className="input_values"
        />
        <input
          onClick={handleClicked}
          type="button"
          value={2}
          id="num2"
          className="input_values"
        />
        <input
          onClick={handleClicked}
          type="button"
          value={3}
          id="num3"
          className="input_values"
        />
        <input
          onClick={handleClicked}
          type="button"
          value={4}
          id="num4"
          className="input_values"
        />
        <input
          onClick={handleClicked}
          type="button"
          value={5}
          id="num5"
          className="input_values"
        />
        <input
          onClick={handleClicked}
          type="button"
          value={6}
          id="num6"
          className="input_values"
        />
        <input
          onClick={handleClicked}
          type="button"
          value={7}
          id="num7"
          className="input_values"
        />
        <input
          onClick={handleClicked}
          type="button"
          value={8}
          id="num8"
          className="input_values"
        />
        <input
          onClick={handleClicked}
          type="button"
          value={"*"}
          id="multi"
          className="input_values"
        />
        <input
          onClick={handleClicked}
          type="button"
          value={"+"}
          id="add"
          className="input_values"
        />
        <input
          onClick={handleClicked}
          type="button"
          value={"-"}
          id="num-"
          className="input_values"
        />
        <input
          onClick={handleClicked}
          type="button"
          value={"%"}
          id="Modulus"
          className="input_values"
        />
        <input
          onClick={handleClicked}
          type="button"
          value={"/"}
          id="Division"
          className="input_values"
        />
        <input
          onClick={handleClicked}
          type="button"
          value={"-"}
          id="Division"
          className="input_values"
        />

        <input
          id="equal"
          type="button"
          value="="
          className="input_values"
          onClick={(e) => setValue(eval(value))}
        />
      </div>
    </>
  );
}
