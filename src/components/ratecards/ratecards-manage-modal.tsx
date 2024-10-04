import { Modal, ModalContent, ModalFooterButtons } from "monday-ui-react-core";
import React, { useCallback } from "react";
import { useTheme } from "../../context/theme-context";
import "../../styles/ratecards/ratecards-manage-modal.scss";
import RatecardsManageModalContent from "./ratecards-manage-modal-content";
import { createRatecards, sendDeleteRatecards } from "../../utils/api";
import { formatRatecards } from "../../utils/helpers";
import toast from "react-hot-toast";
import { StoredRatecard } from "../../types";

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
  } = useTheme();

  const handleClose = useCallback(() => {
    setDeleteRatecards([]);
    setShowRatecardsManageModal(false);
    setNewRatecards([]);
  }, []);

  const handleSaveRatecardSettings = useCallback(async () => {
    console.log({ deleteRatecards });
    if (deleteRatecards && deleteRatecards.length) {
      // Handle responses
      const deleteRateCardsRes = await sendDeleteRatecards(deleteRatecards);
      console.log({ deleteRateCardsRes });
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
    console.log({ newRatecards });
    if (newRatecards && newRatecards.length) {
      const formattedRatecards = formatRatecards(
        newRatecards,
        parseInt(context.user.id)
      );
      const createRatecardsRes = await createRatecards(formattedRatecards);
      console.log({ createRatecardsRes });
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

  return (
    <Modal
      show={showRatecardsManageModal}
      className="ratecards-manage-modal__container"
      width={"1024px"}
      title={"Manage default ratecards"}
      onClose={handleClose}
      contentSpacing
    >
      <ModalContent>
        <RatecardsManageModalContent />
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
