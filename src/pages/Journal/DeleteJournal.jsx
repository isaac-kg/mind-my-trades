import { Trash2 } from "lucide-react"
import { Fragment, useState } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { useDeleteDocumentMutation } from "@/services/firestoreApi"

const DeleteJournal = ({ id }) => {
  const [openDelete, setOpenDelete] = useState(false)
  const [
    deleteJournal,
    { error: errorJournalDelete, success: successJournalDelete, isLoading },
  ] = useDeleteDocumentMutation()

  return (
    <Fragment>
      <AlertDialog open={openDelete}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              <Trash2
                className="mx-auto text-center h-12"
                size={200}
                color="#EF4444"
              />
            </AlertDialogTitle>
            <AlertDialogDescription>
              <div className="text-center my-4">
                Are you should you want to delete journal entry?
              </div>
              {errorJournalDelete}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="bg-gray-400 text-white"
              onClick={() => {
                if (!isLoading) setOpenDelete(false)
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                deleteJournal({ collectionName: "journal", id })
              }}
              className="bg-red-500 hover:bg-red-600 ml-8"
            >
              {isLoading ? "Deleting" : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Trash2
        className="hover:cursor-pointer"
        onClick={() => setOpenDelete(true)}
        color="#EF4444"
      />
    </Fragment>
  )
}

export default DeleteJournal
