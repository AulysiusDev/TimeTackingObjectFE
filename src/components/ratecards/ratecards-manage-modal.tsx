import { Modal, ModalContent, ModalFooterButtons } from "monday-ui-react-core";
import React, { useCallback } from "react";
import { useTheme } from "../../context/theme-context";
import "../../styles/ratecards/ratecards-manage-modal.scss";
import { createRatecards, sendDeleteRatecards } from "../../utils/api";
import { formatRatecards } from "../../utils/helpers";
import toast from "react-hot-toast";
import { StoredRatecard } from "../../types";
import RatecardsDefaultModalContent from "./ratecards-default-modal-content";
import RatecardsClientModalContent from "./ratecards-client-modal-content";
import RatecardsUserModalContent from "./ratecards-user-modal-content";

const RatecardsManageModal: React.FC = () => {
  const {
    showRatecardsManageModal,
    setShowRatecardsManageModal,
    newRatecards,
    context,
    setDeleteRatecards,
    setNewRatecards,
    deleteRatecards,
    setStoredRatecards,
    manageRatecardCategory,
  } = useTheme();

  const handleClose = useCallback(() => {
    setDeleteRatecards([]);
    setShowRatecardsManageModal(false);
    setNewRatecards([]);
  }, []);

  const handleSaveRatecardSettings = useCallback(async () => {
    if (deleteRatecards && deleteRatecards.length) {
      // Handle responses
      const deleteRateCardsRes = await sendDeleteRatecards(deleteRatecards);
      if (deleteRateCardsRes.status !== 200) {
        toast.error(
          "There was an error deleting ratecards, please reload the app and try again."
        );
      } else {
        setDeleteRatecards([]);
        setStoredRatecards((prev: StoredRatecard[]) =>
          prev.filter(
            (rc: StoredRatecard) => !deleteRateCardsRes.data.includes(rc.id)
          )
        );
      }
    }
    if (newRatecards && newRatecards.length) {
      const formattedRatecards = formatRatecards(
        newRatecards,
        parseInt(context.user.id)
      );
      const createRatecardsRes = await createRatecards(formattedRatecards);
      if (createRatecardsRes.status !== 201) {
        toast.error(
          "Error creating ratecards, please reload the ap and try again."
        );
      } else {
        setNewRatecards([]);
        setStoredRatecards((prev: StoredRatecard[]) => [
          ...prev,
          ...createRatecardsRes.data,
        ]);
      }
    }
    setShowRatecardsManageModal(false);
  }, [newRatecards, deleteRatecards]);
  console.log({ manageRatecardCategory });
  return (
    <Modal
      show={showRatecardsManageModal}
      className="ratecards-manage-modal__container"
      width={"1024px"}
      title={`Manage ${manageRatecardCategory} ratecards`}
      onClose={handleClose}
      contentSpacing
      unmountOnClose
    >
      <ModalContent>
        {manageRatecardCategory === "default" ? (
          <RatecardsDefaultModalContent />
        ) : manageRatecardCategory === "client" ? (
          <RatecardsClientModalContent />
        ) : (
          <RatecardsUserModalContent />
        )}
      </ModalContent>
      <ModalFooterButtons
        onPrimaryButtonClick={handleSaveRatecardSettings}
        onSecondaryButtonClick={handleClose}
        primaryButtonText={`Save`}
        secondaryButtonText="Cancel"
      />
    </Modal>
  );
};

export default RatecardsManageModal;
