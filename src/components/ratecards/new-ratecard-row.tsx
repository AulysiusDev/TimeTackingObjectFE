import React, { useCallback, useMemo } from "react";
import "../../styles/ratecards/ratecards-manage-modal.scss";
import { NewRatecard } from "../../types";
import { Delete } from "monday-ui-react-core/icons";
import { useTheme } from "../../context/theme-context";
import { days } from "../../utils/data";

interface NewRatecardRowProps {
  ratecard: NewRatecard;
  index: number;
}

const NewRatecardRow: React.FC<NewRatecardRowProps> = ({ ratecard, index }) => {
  const { setNewRatecards } = useTheme();

  const handleDeleteNewRatecard = useCallback(
    () =>
      setNewRatecards((prev: NewRatecard[]) =>
        prev.filter((_, i) => i !== index)
      ),
    []
  );
  const formattedRateCard: Record<string, string | number[]> = useMemo(() => {
    if (!ratecard) return {};
    else {
      return Object.entries(ratecard).reduce((acc, [key, value]) => {
        if (typeof value === "object" && value !== null && "value" in value) {
          acc[key] = value.value;
        } else {
          acc[key] = value;
        }
        return acc;
      }, {});
    }
  }, [ratecard]);

  return (
    <article className="new-ratecard-row__container">
      <Delete
        className="new-ratecard-row__delete-icon icon"
        onClick={handleDeleteNewRatecard}
      />
      {Object.entries(formattedRateCard).map(([key, value], i) => {
        return (
          <div className={`new-ratecard-row__info-cont ${i}`} key={i}>
            <h2>{key && key.slice(0, 1).toUpperCase() + key.slice(1)}</h2>
            <h3>
              {value && typeof value === "string"
                ? value.slice(0, 1).toUpperCase() + value.slice(1)
                : Array.isArray(value) && value.length
                ? value
                    .map((dayIndex: number) => days[dayIndex].slice(0, 2))
                    .join(", ")
                : !value || (Array.isArray(value) && !value.length)
                ? "_"
                : value}
            </h3>
          </div>
        );
      })}
    </article>
  );
};

export default NewRatecardRow;
