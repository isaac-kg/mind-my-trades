import * as Yup from "yup"
import { Eye, Pencil, Trash2 } from "lucide-react"
import {
  useDeleteDocumentMutation,
  useGetDocumentsQuery,
} from "@/services/firestoreApi"
import AddJournal from "./AddJournal"
import DeleteJournal from "./DeleteJournal"
import EditJournal from "./EditJournal"

const Journal = () => {

  const { error, data: journalData = [] } = useGetDocumentsQuery("journal")
  const [deleteJournal, {error: errorJournalDelete, success: successJournalDelete}] = useDeleteDocumentMutation();

  return (
    <div>
      <div className="mb-8">
        <AddJournal />
      </div>
      {journalData.map((journal) => (
        <div
          key={journal.id}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-4 p-4 rounded-md bg-tn_gray_50 mt-4"
        >
          <div>{journal.createdAt}</div>
          <div>{journal.instrument}</div>
          <div className="capitalize">{journal.tradeType}</div>
          <div  className="capitalize">{journal.tradeResult || "Pending"}</div>
          <div className="flex gap-4">
            <DeleteJournal id={journal.id} />
            <EditJournal journal={journal} />
            <Eye
              className="hover:cursor-pointer"
              onClick={() => console.log("Im clicked>>>")}
              color="#10B981"
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Journal
