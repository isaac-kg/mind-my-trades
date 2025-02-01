import { useGetDocumentsQuery } from "@/services/firestoreApi"
import AddJournal from "./AddJournal"
import DeleteJournal from "./DeleteJournal"
import EditJournal from "./EditJournal"
import ViewJournal from "./ViewJournal"
import { Toaster } from "@/components/ui/toaster"
import { useSelector } from "react-redux"

const Journal = () => {
  const user = useSelector((state) => state?.authReducer?.user)
  const {
    error,
    data: journalData = [],
    isLoading,
  } = useGetDocumentsQuery({ collectionName: "journal", userId: user.userId })

  return (
    <div>
      <div className="mb-8">
        <AddJournal />
      </div>
      {}

      {isLoading
        ? [1, 2, 3, 4, 5].map((value) => (
            <div
              key={value}
              className="p-8 rounded-md bg-slate-200 mt-4 animate-pulse"
            ></div>
          ))
        : journalData.map((journal) => (
            <div
              key={journal.id}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-4 p-4 rounded-md bg-tn_gray_50 mt-4"
            >
              <div>{journal.createdAt}</div>
              <div>{journal.instrument}</div>
              <div className="capitalize">{journal.tradeType}</div>
              <div className="capitalize">
                {journal.tradeResult || "Pending"}
              </div>
              <div className="flex gap-4">
                <DeleteJournal id={journal.id} />
                <EditJournal journal={journal} />
                <ViewJournal journal={journal} />
              </div>
            </div>
          ))}
      <Toaster />
    </div>
  )
}

export default Journal
