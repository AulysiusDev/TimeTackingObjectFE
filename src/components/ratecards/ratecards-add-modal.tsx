import { Modal, ModalContent, ModalFooterButtons } from "monday-ui-react-core";
import React from "react";
import { usePeople } from "../../context/people-context";
import RatecardsAddModalContent from "./ratecards-add-modal-content";

const PeopleAddModal: React.FC = () => {
  const { showAddRatecardsModal, setShowAddRatecardsModal } = usePeople();
  return (
    <Modal
      show={showAddRatecardsModal}
      onClose={() => setShowAddRatecardsModal(false)}
      title={"Create rate card"}
    >
      <ModalContent>
        <RatecardsAddModalContent />
      </ModalContent>
      <ModalFooterButtons
        onPrimaryButtonClick={() => setShowAddRatecardsModal(false)}
        onSecondaryButtonClick={() => setShowAddRatecardsModal(false)}
        primaryButtonText="Confirm"
        secondaryButtonText="Cancel"
      />
    </Modal>
  );
};
export default PeopleAddModal;
