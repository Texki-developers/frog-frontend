import React from "react";
import Modal from "../Modal/Modal";
import TextLoading from "../TextLoading/TextLoading";

export default function CoinsModal({
  isOpen,
  isLoading,
  onClose,
}: {
  isOpen: boolean;
  isLoading?: boolean;
  onClose: any;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {isLoading ? (
        <TextLoading />
      ) : (
        <div className="flex flex-col text-center justify-center items-center">
          <h6 className="text-[1.5rem]">Kudos🎉</h6>
          <p className="text-[1.8rem] font-[600]">10332</p>
          <p>Apes Redeemed</p>
        </div>
      )}
    </Modal>
  );
}
