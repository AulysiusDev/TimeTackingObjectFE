import { Modal, ModalContent, ModalFooterButtons } from "monday-ui-react-core";
import React, { useCallback, useState } from "react";
import { useTheme } from "../../context/theme-context";
import mondaySdk from "monday-sdk-js";
import { Response, StorageResponse } from "../../types";
import { safeParse } from "../../utils/helpers";
import RatecardsCategoryModalContent from "./ratecards-category-modal-content";

const monday = mondaySdk();

const RatecardsCategoryModal: React.FC = () => {
  const {
    showAddRatecardCategoryModal,
    setShowAddRatecardCategoryModal,
    addRatecardCategory,
    setRatecardCategories,
  } = useTheme();
  const [errorMessage, setErrorMessage] = useState("");

  const [newRatecardCategory, setNewRatecardCategory] = useState<string>("");
  const [newCategories, setNewCategories] = useState<string[]>([]);
  const [deleteCategories, setDeleteCategories] = useState<string[]>([]);

  const handleOnClose = useCallback(() => {
    setNewCategories([]);
    setNewRatecardCategory("");
    setShowAddRatecardCategoryModal(false);
    setDeleteCategories([]);
  }, []);

  const handleAddRatecardCategory = useCallback(async () => {
    const storedCategories: Response<StorageResponse> =
      await monday.storage.getItem(addRatecardCategory);
    if (!storedCategories.data.success) {
      setErrorMessage(
        (storedCategories.data?.error as string) ||
          "Unknown error saving ratecard data"
      );
    } else {
      let categories: StorageResponse | string[] = safeParse(
        storedCategories.data.value
      );
      if (Array.isArray(categories)) {
        console.log({ deleteCategories });
        console.log({ newCategories });
        categories = [
          ...categories.filter((cat) => !deleteCategories.includes(cat)),
          ...newCategories,
        ];
      } else {
        categories = [...newCategories];
      }
      console.log({ categories });
      const storeResponse = await monday.storage.setItem(
        addRatecardCategory,
        JSON.stringify(categories)
      );
      if (storeResponse.errorMessage) {
        setErrorMessage(storeResponse.errorMessage);
      } else {
        setRatecardCategories((prev: string[]) => ({
          ...prev,
          [addRatecardCategory]: categories,
        }));
      }
      setShowAddRatecardCategoryModal(false);
      setNewRatecardCategory("");
      setNewCategories([]);
      setDeleteCategories([]);
    }
  }, [
    newRatecardCategory,
    addRatecardCategory,
    deleteCategories,
    newCategories,
  ]);

  return (
    <Modal
      show={showAddRatecardCategoryModal}
      onClose={handleOnClose}
      title={`Manage ${addRatecardCategory}s`}
      contentSpacing
    >
      <ModalContent>
        <RatecardsCategoryModalContent
          errorMessage={errorMessage}
          setNewRatecardCategory={setNewRatecardCategory}
          newCategories={newCategories}
          setNewCategories={setNewCategories}
          newRatecardCategory={newRatecardCategory}
          deleteCategories={deleteCategories}
          setDeleteCategories={setDeleteCategories}
        />
      </ModalContent>
      <ModalFooterButtons
        onPrimaryButtonClick={handleAddRatecardCategory}
        onSecondaryButtonClick={handleOnClose}
        primaryButtonText={`Save`}
        secondaryButtonText="Cancel"
      />
    </Modal>
  );
};
export default RatecardsCategoryModal;
