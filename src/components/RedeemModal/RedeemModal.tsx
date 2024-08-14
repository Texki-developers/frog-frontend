import React from "react";
import Modal from "../Modal/Modal";

export default function RedeemModal({
  isOpen,
  isLoading,
  onClose,
  redeemCode,
  setRedeemCode,
  handleRedeem
}: {
  isOpen: boolean;
  isLoading?: boolean;
  onClose: any;
  redeemCode: any;
  setRedeemCode: any;
  handleRedeem: any;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-[100%] flex flex-col gap-4">
        <input
          type="text"
          placeholder="ABC001"
          className="bg-red font-[600] w-[100%] text-[1rem] text-center outline-none border-b-2"
          onChange={(e) => setRedeemCode(e.target.value)}
        />
        <button
          className={`btn-common btn-solid w-[100%] ${
            !redeemCode || redeemCode === ""
              ? "opacity-30 cursor-not-allowed"
              : ""
          }`}
          onClick={handleRedeem}
        >
          Redeem Code
        </button>
      </div>
    </Modal>
  );
}
