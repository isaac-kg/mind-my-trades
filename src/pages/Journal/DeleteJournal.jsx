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
import { useToast } from "@/hooks/use-toast"
import { useEffect } from "react"
import { useSelector } from "react-redux"

const DeleteJournal = ({ id }) => {
  const user = useSelector((state) => state?.authReducer?.user)
  const [openDelete, setOpenDelete] = useState(false)

  const [deleteJournal, { isError, isSuccess, isLoading }] =
    useDeleteDocumentMutation()

  const { toast } = useToast()

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Journal Entry Deleted",
        description: "The journal entry has been successfully deleted.",
        className: "bg-green-500 text-white",
      })
      setOpenDelete(false)
    }

    if (isError) {
      toast({
        title: "Error",
        description: "Something went wrong while deleting the journal entry.",
        className: "bg-red-500 text-white",
      })
    }
  }, [isSuccess, isError, toast])

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
                Are you sure you want to delete journal entry?
              </div>
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              className="bg-gray-400 text-white hover:bg-gray-500"
              onClick={() => {
                if (!isLoading) setOpenDelete(false)
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                deleteJournal({ collectionName: "journal", id, userId: user.userId })
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
