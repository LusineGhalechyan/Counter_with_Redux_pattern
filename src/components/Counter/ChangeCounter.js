import React from "react";
import { Button } from "react-bootstrap";
import {
  INCREASE_COUNT,
  DECREASE_COUNT,
  SAVE_SELECT_VALUE,
} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Counter.module.scss";

const ChangeCounter = () => {
  const dispatch = useDispatch();
  const disabled = useSelector((state) => state.disabled);
  const count = useSelector(
    (state) => state.selections[state.selections.length - 1]
  );

  const select = (
    <select
      onChange={(e) => dispatch(SAVE_SELECT_VALUE(Number(e.target.value)))}
      className={`${styles.selectChangeCounter} mr-3 `}
    >
      <option value="0">Counts</option>
      <option value="1">one</option>
      <option value="5">five</option>
      <option value="10">ten</option>
    </select>
  );

  return (
    <>
      {select}
      <Button
        variant="outline-dark"
        className="mb-3 mr-3"
        disabled={!count && disabled}
        onClick={() => dispatch(INCREASE_COUNT())}
      >
        Increment
      </Button>

      <Button
        variant="outline-dark"
        className="mb-3 mr-3"
        disabled={!count && disabled}
        onClick={() => dispatch(DECREASE_COUNT())}
      >
        Decrement
      </Button>
    </>
  );
};

export default ChangeCounter;
