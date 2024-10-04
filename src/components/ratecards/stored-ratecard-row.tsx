import React, { useCallback, useMemo } from "react";
import { StoredRatecard } from "../../types";
import { days } from "../../utils/data";
import { CloseSmall, Delete } from "monday-ui-react-core/icons";
import { useTheme } from "../../context/theme-context";

interface StoredRatecardRowProps {
  ratecard: StoredRatecard;
}

const StoredRatecardRow: React.FC<StoredRatecardRowProps> = ({ ratecard }) => {
  const { deleteRatecards, setDeleteRatecards } = useTheme();
  const formattedRatecard = useMemo(() => {
    return {
      role:
        ratecard.role &&
        ratecard.role.slice(0, 1).toUpperCase() + ratecard.role.slice(1),
      rate: ratecard.rate,
      department:
        ratecard.department &&
        ratecard.department.slice(0, 1).toUpperCase() +
          ratecard.department.slice(1),
      currency: ratecard.currency && ratecard.currency.toUpperCase(),
      startTime: ratecard.startTime,
      endTime: ratecard.endTime,
      days: ratecard.days.map((day, i) => days[i].slice(0, 2)).join(",  "),
    };
  }, [ratecard]);
  const handleClickDelete = useCallback(() => {
    setDeleteRatecards((prev: StoredRatecard[]) => {
      if (prev.some((rc) => rc.id === ratecard.id)) {
        return prev.filter((rc) => rc.id !== ratecard.id);
      } else {
        return [...prev, ratecard];
      }
    });
  }, [ratecard, deleteRatecards]);

  return (
    <tr className="ratecards-manage-modal-content__row-cont">
      {Object.values(formattedRatecard).map((value: string, i) => {
        return (
          <td
            key={i}
            className="ratecards-manage-modal-content__body-cont"
            style={{
              textDecorationLine: deleteRatecards.some(
                (rc) => rc.id === ratecard.id
              )
                ? "line-through"
                : "",
            }}
          >
            {value}
          </td>
        );
      })}
      {deleteRatecards.some((rc) => rc.id === ratecard.id) ? (
        <CloseSmall
          onClick={handleClickDelete}
          className="ratecards-manage-modal-content__delete-icon icon close-icon"
        />
      ) : (
        <Delete
          className="ratecards-manage-modal-content__delete-icon icon"
          onClick={handleClickDelete}
        />
      )}
    </tr>
  );
};

export default StoredRatecardRow;
