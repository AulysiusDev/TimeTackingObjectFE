import { Modal, ModalContent, ModalFooterButtons } from "monday-ui-react-core";
import React from "react";
import PeopleAddModalContent from "./people-add-modal-content";
import { usePeople } from "../../context/people-context";

export default function PeopleAddModal() {
  const { showAddPeopleModal, setShowAddPeopleModal } = usePeople();
  return (
    <Modal
      show={showAddPeopleModal}
      onClose={() => setShowAddPeopleModal(false)}
      title={"Create rate card"}
    >
      <ModalContent>
        <PeopleAddModalContent />
      </ModalContent>
      <ModalFooterButtons
        onPrimaryButtonClick={() => setShowAddPeopleModal(false)}
        onSecondaryButtonClick={() => setShowAddPeopleModal(false)}
        primaryButtonText="Confirm"
        secondaryButtonText="Cancel"
      />
    </Modal>
  );
}
