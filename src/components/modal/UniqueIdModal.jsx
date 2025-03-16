import React, { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import { FaRegCopy } from "react-icons/fa";

const UniqueIdDialog = ({ openDailog, closeOpenDailog, uniqueId }) => {
  const [copied, setCopied] = useState(false);
  

  const handleCopy = async () => {
   await navigator.clipboard.writeText(uniqueId).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        closeOpenDailog();
      }, 8000); // Reset after 8 seconds
    });
  };

  return (
    <React.Fragment>
      <Dialog
        open={openDailog}
        onClose={closeOpenDailog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          className="bg-[#300354] text-white"
        >
          {"Copy this Unique Id to Check your Application Status"}
        </DialogTitle>
        <DialogContent
          sx={{ height: "100px", textAlign: "center" }}
          className="bg-[#300354] flex items-center justify-center gap-2"
        >
          <input
            type="text"
            readOnly
            value={uniqueId}
            className="outline-none border-none h-fit p-2 bg-transparent text-white"
          />
          <FaRegCopy
            className="text-white text-2xl cursor-pointer"
            onClick={handleCopy}
          />
          {copied && <span className="text-green-400 text-sm">Copied!</span>}
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default UniqueIdDialog;
