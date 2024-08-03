import React from "react";
import Modal from "../Modal/Modal";
import TextLoading from "../TextLoading/TextLoading";

export default function CoinsModal({
  isOpen,
  isLoading,
  onClose,
  points
}: {
  isOpen: boolean;
  isLoading?: boolean;
  onClose: any;
  points:number
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      {isLoading ? (
        <TextLoading />
      ) : (
        <div className="flex flex-col text-center justify-center items-center">
          <h6 className="text-[1.5rem]">Kudos🎉</h6>
          <p className="text-[1.8rem] font-[600]">{points}</p>
          <p>Apes Redeemed</p>
        </div>
      )}
    </Modal>
  );
}
