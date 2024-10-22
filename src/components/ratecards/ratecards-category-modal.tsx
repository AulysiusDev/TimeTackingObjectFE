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
    ratecardCategories,
    processStoredData
  } = useTheme();
  const [errorMessage, setErrorMessage] = useState("");

  const [newRatecardCategory, setNewRatecardCategory] = useState<string>("");
  const [newCategories, setNewCategories] = useState<string[]>([]);
  const [deleteCategories, setDeleteCategories] = useState<string[]>([]);

  const handleOnClose = useCallback(() => {
    setNewCategories([]);
    setErrorMessage("")
    setNewRatecardCategory("");
    setShowRatecardCategoryModal(false);
    setDeleteCategories([]);
  }, []);

console.log({ratecardCategories})

  const handleSaveRatecardCategory = useCallback(async () => {
    // Get stringified array of existing categories - delete categories + new categories
      const ratecardCategoryValue = JSON.stringify([ ...Object.keys(ratecardCategories[ratecardCategory].value).filter((cat) => !deleteCategories.includes(cat)), ...newCategories]);
      let storeResponse: Response<StorageResponse>;
      let categories : string[] = []

      if(ratecardCategories[ratecardCategory]?.version){
        const options = {previous_version: ratecardCategories[ratecardCategory]?.version};
        storeResponse = await monday.storage.setItem(ratecardCategory, ratecardCategoryValue, options);
      } else {
        storeResponse = await monday.storage.setItem(ratecardCategory, ratecardCategoryValue);
      }

      processStoredData(ratecardCategory)
      
      if (!storeResponse.data.success) {
        // Error storing data
        setErrorMessage(storeResponse.data.error.status === 409 ? "This data has been updated please review the new data and try again." : "Unknown error updating storage, please reload the app and try again.");
        // Clear delete categories in case item has been deleted already
        setDeleteCategories([])
      }else{
        handleOnClose()
      }

  }, [newRatecardCategory, ratecardCategory, deleteCategories, newCategories]);
console.log({newCategories})
  return (
    <Modal
      show={showRatecardCategoryModal}
      onClose={handleOnClose}
      title={`Manage ${ratecardCategory}s`}
      contentSpacing
      zIndex={111111}
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
        onPrimaryButtonClick={handleSaveRatecardCategory}
        onSecondaryButtonClick={handleOnClose}
        primaryButtonText={`Save`}
        secondaryButtonText="Cancel"
      />
    </Modal>
  );
};
export default RatecardsCategoryModal;
