import { Pencil } from "lucide-react"
import JournalForm from "./JournalForm"
import React, { useState, useEffect } from "react"
import { useUpdateDocumentMutation } from "@/services/firestoreApi"
import { useToast } from "@/hooks/use-toast"
import { useSelector } from "react-redux"

const EditJournal = ({ journal }) => {
  const [open, setOpen] = useState(false)
  const [updateJournal, { isError, isSuccess, error }] = useUpdateDocumentMutation()
  const { toast } = useToast()
  const user = useSelector((state) => state?.authReducer?.user)

  console.log("Error: ", error )

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Journal Entry Edited",
        description: "Your journal entry has been successfully updated.",
        className: "bg-yellow-500 text-white border border-yellow-500",
      })
      setOpen(false)
    }

    if (isError) {
      toast({
        title: "Error",
        description: "There was an issue while updating the journal entry.",
        className: "bg-red-500 text-white border border-red-700",
      })
    }
  }, [isSuccess, isError, toast])

  return (
    <React.Fragment>
      {open && (
        <JournalForm
          isJournalFormOpen={open}
          setIsJournalFormOpen={() => setOpen(false)}
          initialValues={{ ...journal }}
          title="Edit Journal"
          onSubmitForm={(values) => {
            updateJournal({
              collectionName: "journal",
              docId: journal.id,
              updatedData: values,
              userId: user.userId
            })
          }}
        />
      )}
      <Pencil
        className="hover:cursor-pointer"
        onClick={() => setOpen(true)}
        color="#10B981"
      />
    </React.Fragment>
  )
}

export default EditJournal
