import { Modal, ModalContent, ModalFooterButtons } from "monday-ui-react-core";
import React, { useCallback, useState } from "react";
import { useTheme } from "../../context/theme-context";
import mondaySdk from "monday-sdk-js";
import { RatecardCategories, Response, StorageResponse } from "../../types";
import { safeParse } from "../../utils/helpers";
import RatecardsCategoryModalContent from "./ratecards-category-modal-content";

const monday = mondaySdk();

const RatecardsCategoryModal: React.FC = () => {
  const {
    showRatecardCategoryModal,
    setShowRatecardCategoryModal,
    ratecardCategory,
    setRatecardCategories,
  } = useTheme();
  const [errorMessage, setErrorMessage] = useState("");

  const [newRatecardCategory, setNewRatecardCategory] = useState<string>("");
  const [newCategories, setNewCategories] = useState<string[]>([]);
  const [deleteCategories, setDeleteCategories] = useState<string[]>([]);

  const handleOnClose = useCallback(() => {
    setNewCategories([]);
    setNewRatecardCategory("");
    setShowRatecardCategoryModal(false);
    setDeleteCategories([]);
  }, []);

  const handleRatecardCategory = useCallback(async () => {
    const storedCategories: Response<StorageResponse> =
      await monday.storage.getItem(ratecardCategory);
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
        categories = [
          ...categories.filter((cat) => !deleteCategories.includes(cat)),
          ...newCategories,
        ];
      } else {
        categories = [...newCategories];
      }
      const storeResponse = await monday.storage.setItem(
        ratecardCategory,
        JSON.stringify(categories)
      );
      if (storeResponse.errorMessage) {
        setErrorMessage(storeResponse.errorMessage);
      } else {
        console.log({ categories });
        setRatecardCategories((prev: RatecardCategories) => ({
          ...prev,
          [ratecardCategory]: categories.reduce((acc, category) => {
            acc[category] = false;
            return acc;
          }, {}),
        }));
      }
      setShowRatecardCategoryModal(false);
      setNewRatecardCategory("");
      setNewCategories([]);
      setDeleteCategories([]);
    }
  }, [newRatecardCategory, ratecardCategory, deleteCategories, newCategories]);

  return (
    <Modal
      show={showRatecardCategoryModal}
      onClose={handleOnClose}
      title={`Manage ${ratecardCategory}s`}
      contentSpacing
      zIndex={111111}
      unmountOnClose
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
        onPrimaryButtonClick={handleRatecardCategory}
        onSecondaryButtonClick={handleOnClose}
        primaryButtonText={`Save`}
        secondaryButtonText="Cancel"
      />
    </Modal>
  );
};
export default RatecardsCategoryModal;
