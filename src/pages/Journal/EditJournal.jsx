import { Pencil } from "lucide-react"
import JournalForm from "./JournalForm"
import React, { useState } from "react"
import { useUpdateDocumentMutation } from "@/services/firestoreApi"

const EditJournal = ({ journal }) => {
  const [open, setOpen] = useState(false)
  useUpdateDocumentMutation

  const [updateJournal, { error, success, isLoading }] =
    useUpdateDocumentMutation()

  return (
    <React.Fragment>
      {open && (
        <JournalForm
          isJournalFormOpen={open}
          setIsJournalFormOpen={() => setOpen(false)}
          initialValues={{ ...journal }}
          title="Edit Journal"
          onSubmitForm={(values) => {
            updateJournal({ collectionName: "journal",docId: journal.id, updatedData: values });
            setOpen(false)
          }}
        />
      )}
      <Pencil
        className="hover:cursor-pointer"
        onClick={() => setOpen(true)}
        color="#3B82F6"
      />
    </React.Fragment>
  )
}

export default EditJournal
