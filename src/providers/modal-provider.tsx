"use client";
import AppliedJobModal from "@/components/organism/AppliedJobModal";
import React, { useEffect, useState } from "react";

type Props = {};

const ModalProvider = (props: Props) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <>
      <AppliedJobModal />
    </>
  );
};

export default ModalProvider;
