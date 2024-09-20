import React, { ChangeEvent, useCallback } from "react";
import "../../styles/ratecards/ratecards-category-modal.scss";
import { useTheme } from "../../context/theme-context";
import { Delete, Add, CloseSmall } from "monday-ui-react-core/icons";

interface RatecardsCategoryModalContentProps {
  errorMessage: string;
  setNewRatecardCategory: React.Dispatch<React.SetStateAction<string>>;
  newCategories: string[];
  setNewCategories: React.Dispatch<React.SetStateAction<string[]>>;
  newRatecardCategory: string;
  setDeleteCategories: React.Dispatch<React.SetStateAction<string[]>>;
  deleteCategories: string[];
}

const RatecardsCategoryModalContent: React.FC<
  RatecardsCategoryModalContentProps
> = ({
  errorMessage,
  setNewRatecardCategory,
  newCategories,
  setNewCategories,
  newRatecardCategory,
  deleteCategories,
  setDeleteCategories,
}) => {
  const { addRatecardCategory, ratecardCategories } = useTheme();

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    e.preventDefault();
    setNewRatecardCategory(e.target.value);
  }, []);

  const handleClickAdd = useCallback(() => {
    setNewCategories((prev) => [...prev, newRatecardCategory]);
    setNewRatecardCategory("");
  }, [newRatecardCategory]);

  const handleClickDelete = useCallback((category: string) => {
    setDeleteCategories((prev) => {
      if (!prev.includes(category)) {
        return [...prev, category];
      } else {
        return [...prev];
      }
    });
  }, []);
  console.log({ deleteCategories });
  const handleClickUndo = useCallback((category: string) => {
    setDeleteCategories((prev) => prev.filter((cat) => cat !== category));
  }, []);

  return (
    <div className="ratecards-category-modal__container">
      <div className="ratecards-category-modal__inputs-cont">
        <h2 className="ratecards-category-modal__error">{errorMessage}</h2>

        <ul className="ratecards-category-modal__list">
          {ratecardCategories[addRatecardCategory].map((category: string) => (
            <li
              className="ratecards-category-modal__list-item"
              style={{
                textDecoration: deleteCategories.includes(category)
                  ? "line-through"
                  : "",
              }}
            >
              {category}
              {!deleteCategories.includes(category) ? (
                <Delete
                  className="ratecards-category-modal__delete-icon"
                  onClick={() => handleClickDelete(category)}
                />
              ) : (
                <CloseSmall
                  className="ratecards-category-modal__undo-icon"
                  onClick={() => handleClickUndo(category)}
                />
              )}
            </li>
          ))}
        </ul>
        <ul className="ratecards-category-modal__list">
          {newCategories.map((newCategory) => (
            <li className="ratecards-category-modal__list-item">
              {newCategory}
            </li>
          ))}
        </ul>
        <div className="ratecards-category-modal__text-input-cont">
          <input
            type="text"
            className="ratecards-category-modal__text-input"
            onChange={handleChange}
            value={newRatecardCategory}
          />
          <h3
            className="ratecards-category-modal__add-text"
            onClick={handleClickAdd}
          >
            Add {addRatecardCategory}{" "}
            <Add className="ratecards-category-modal__add-icon" />
          </h3>
        </div>
      </div>
    </div>
  );
};
export default RatecardsCategoryModalContent;
