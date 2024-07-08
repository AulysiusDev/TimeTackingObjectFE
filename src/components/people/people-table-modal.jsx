import React from "react";
import { Modal, ModalContent, ModalFooterButtons } from "monday-ui-react-core";
import "../../styles/people/people-table-modal.scss";
import PeopleTableModalContents from "./people-table-modal-contents";
import { usePeople } from "../../context/people-context";

export default function PeopleTableModal({ person }) {
  const { showPeopleModal, setShowPeopleModal } = usePeople();
  return (
    <Modal
      show={showPeopleModal}
      onClose={() => setShowPeopleModal(false)}
      title={`${person.name}'s rate card`}
    >
      <ModalContent>
        <PeopleTableModalContents person={person} />
      </ModalContent>
      <ModalFooterButtons
        onPrimaryButtonClick={() => setShowPeopleModal(false)}
        onSecondaryButtonClick={() => setShowPeopleModal(false)}
        primaryButtonText="Confirm"
        secondaryButtonText="Cancel"
      />
    </Modal>
  );
}
