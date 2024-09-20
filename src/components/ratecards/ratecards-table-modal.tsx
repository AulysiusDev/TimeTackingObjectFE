import React from "react";
import { Modal, ModalContent, ModalFooterButtons } from "monday-ui-react-core";
import "../../styles/ratecards/ratecards-table-modal.scss";
import RatecardsTableModalContents from "./ratecards-table-modal-contents";
import { usePeople } from "../../context/people-context";

const RatecardsTableModal: React.FC = ({ person }: any) => {
  const { showRatecardsModal, setShowRatecardsModal } = usePeople();
  return (
    <Modal
      show={showRatecardsModal}
      onClose={() => setShowRatecardsModal(false)}
      title={`${person.name}'s rate card`}
    >
      <ModalContent>
        <RatecardsTableModalContents person={person} />
      </ModalContent>
      <ModalFooterButtons
        onPrimaryButtonClick={() => setShowRatecardsModal(false)}
        onSecondaryButtonClick={() => setShowRatecardsModal(false)}
        primaryButtonText="Confirm"
        secondaryButtonText="Cancel"
      />
    </Modal>
  );
};
export default RatecardsTableModal;
