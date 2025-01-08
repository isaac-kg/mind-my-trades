import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Select from "react-select"
import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Eye, Pencil, Trash2 } from "lucide-react"
import {
  useAddDocumentMutation,
  useDeleteDocumentMutation,
  useGetDocumentsQuery,
} from "@/services/firestoreApi"
import moment from "moment";
import { Timestamp } from "firebase/firestore"
import { INDICES_AND_FOREX } from "./constant"

const validationSchema = Yup.object({
  instrument: Yup.string().required("Pairs are required"),
  reason: Yup.string().required("Reason for entry is required"),
})

const TradingPlan = () => {
  const formik = useFormik({
    initialValues: {
      instrument: "",
      reason: "",
      tradeType: "",
      tradeResult: "",
      amount: "",
      image: null,
    },
    validationSchema,
    onSubmit: (values) => {
      const firebaseTimestamp = Timestamp.now(); // Example timestamp
      const date = firebaseTimestamp.toDate();
      addJournal({ collectionName: "journal", data: { createdAt: moment(date).format("DD MMM YYYY"), ...values  } })
      setOpen(false)
    },
  })



  const handleChange = (selectedOption) => {
    formik.setFieldValue(
      "instrument",
      selectedOption ? selectedOption.value : ""
    )
  }

  const handleFileChange = (e) => {
    formik.setFieldValue("image", e.target.files[0])
  }

  const selectedOption = INDICES_AND_FOREX.find(
    (option) => option.value === formik.values.selectedOption
  )

  const { error, data: journalData = [] } = useGetDocumentsQuery("journal")
  console.log("Data: ", journalData )

  const [
    addJournal,
    { data: journal, isLoading: isJournalLoading, error: errorJournal },
  ] = useAddDocumentMutation()
  console.log("This is error: ", errorJournal)

  const [deleteJournal, {error: errorJournalDelete, success: successJournalDelete}] = useDeleteDocumentMutation();
  console.log("Delete Journal: ", errorJournalDelete)
  console.log("Success Journal: ", successJournalDelete)

  const [open, setOpen] = useState(false)
  const journalModal = () => {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger>
          <Button onClick={() => setOpen(true)}>Add Journal</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-tn_blue_50">Add Journal</DialogTitle>
          </DialogHeader>
          <form onSubmit={formik.handleSubmit}>
            <div className="mt-2">
              <div className="mb-4">
                <Label className="mb-2 block">Pairs</Label>
                <Select
                  value={selectedOption}
                  onChange={handleChange}
                  options={INDICES_AND_FOREX}
                  theme={(theme) => ({
                    ...theme,
                    borderRadius: 4,
                    colors: {
                      ...theme.colors,
                      primary25: "#7A44C7",
                      primary: "#5E31B0",
                    },
                  })}
                  getOptionLabel={(e) => e.value}
                  getOptionValue={(e) => e.value}
                />
                {formik.errors.instrument &&
                  formik.touched.instrument && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.instrument}
                    </div>
                  )}
              </div>

              <div className="mb-4">
                <Label className="mb-2 block">Reasons for entry</Label>
                <Textarea
                  name="reason"
                  value={formik.values.reason}
                  onChange={formik.handleChange}
                />
                {formik.errors.reason && formik.touched.reason && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.reason}
                  </div>
                )}
              </div>

              <div className="mb-4">
                <Label className="mb-2 block">Trade type</Label>
                <RadioGroup
                  name="tradeType"
                  value={formik.values.tradeType} 
                  onValueChange={value => formik.setFieldValue("tradeType", value)}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="buy" id="option-one" />
                    <Label htmlFor="option-one">Buy</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="sell" id="option-two" />
                    <Label htmlFor="option-two">Sell</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mb-4">
                <Label className="mb-2 block">Upload image</Label>
                <Input type="file" name="image" onChange={handleFileChange} />
              </div>

              <div className="mb-4">
                <Label className="mb-2 block">Trade result</Label>
                <RadioGroup
                  name="tradeResult"
                  value={formik.values.tradeResult}
                  onValueChange={value => formik.setFieldValue("tradeResult", value)}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="win" id="option-win" />
                    <Label htmlFor="option-win">Win</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="loss" id="option-loss" />
                    <Label htmlFor="option-loss">Loss</Label>
                  </div>
                </RadioGroup>
              </div>

              <div className="mb-4">
                <Label className="mb-2 block">Amount</Label>
                <Input
                  type="number"
                  name="amount"
                  value={formik.values.amount}
                  onChange={formik.handleChange}
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    )
  }

  const tabs = () => {
    return (
      <div>
        <Tabs defaultValue="all" className="w-full]">
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="buy">Buy</TabsTrigger>
            <TabsTrigger value="sell">Sell</TabsTrigger>
            <TabsTrigger value="win">Win</TabsTrigger>
            <TabsTrigger value="loss">Loss</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
    )
  }

  return (
    <div>
      {journalModal()}
      <div className="mt-8">{tabs()}</div>
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
            {" "}
            <Pencil
              className="hover:cursor-pointer"
              onClick={() => console.log("Im clicked>>>")}
              color="#3B82F6"
            />{" "}
            <Trash2
              className="hover:cursor-pointer"
              onClick={() => deleteJournal({ collectionName: "journal", id: journal.id})}
              color="#EF4444"
            />
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

export default TradingPlan
