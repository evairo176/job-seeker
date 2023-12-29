"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useModal } from "@/hooks/use-modal-store";

type Props = {};

const AppliedJobModal = (props: Props) => {
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "job";

  const handleClose = () => {
    onClose();
  };
  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AppliedJobModal;
