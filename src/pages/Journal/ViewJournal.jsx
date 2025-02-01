import React, { useState } from "react"
import { Eye } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

const ViewJournal = ({ journal }) => {
  console.log("This is journal : ", journal)
  const [open, setOpen] = useState(false)

  return (
    <React.Fragment>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-tn_blue_50">View Journal</DialogTitle>
          </DialogHeader>
          <div>
            <p className="mt-2">
              <span className="font-medium">Created At:</span>{" "}
              {journal.createdAt}{" "}
            </p>
            <p className="mt-2">
              <span className="font-medium">Pairs: </span> {journal.instrument}{" "}
            </p>
            <p className="mt-2">
              <span className="font-medium">Reason for entry:</span>
            </p>
            <p>{journal.reason}</p>
            <p className="mt-2">
              <span className="font-medium">Trade Type:</span>
              <span className="capitalize"> {journal.tradeType}</span>
            </p>
            <p className="mt-2">
              <span className="font-medium">Trade Result:</span>
              <span className="capitalize"> {journal.tradeResult}</span>
            </p>
            <p className="mt-2">
              <span className="font-medium">Amount:</span> {journal.amount}{" "}
            </p>
          </div>
          <DialogFooter>
            <Button
              className="bg-gray-400 text-white hover:bg-gray-500"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Eye
        className="hover:cursor-pointer"
        onClick={() => setOpen(true)}
        color="#3B82F6"
      />
    </React.Fragment>
  )
}

export default ViewJournal
