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
import Select from "react-select"
import { useState, useEffect } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useAddDocumentMutation } from "@/services/firestoreApi"
import moment from "moment"
import { Timestamp } from "firebase/firestore"
import { INDICES_AND_FOREX } from "../constant"
import { Loader2 } from "lucide-react"
import { useToast } from "@/hooks/use-toast"
import { useSelector } from "react-redux"

const validationSchema = Yup.object({
  instrument: Yup.string().required("Pairs are required"),
  reason: Yup.string().required("Reason for entry is required"),
  tradeType: Yup.string().required("Trade type is required"),
})

const AddJournal = () => {

  const user = useSelector((state) => state?.authReducer?.user)

  const [open, setOpen] = useState(false)
  const { toast } = useToast()

  const [
    addJournal,
    { data: journal, isLoading: isJournalLoading, isError, isSuccess, error },
  ] = useAddDocumentMutation()

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
      const firebaseTimestamp = Timestamp.now()
      const date = firebaseTimestamp.toDate()

      addJournal({
        collectionName: "journal",
        data: { createdAt: moment(date).format("DD MMM YYYY"), ...values },
        userId: user.userId
      })
    },
  })

  console.log("This is error: ", error)

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Journal Entry Added",
        description: "Your new journal entry has been successfully added.",
        className: "bg-blue-500 text-white",
      })

      setOpen(false)
    }

    if (isError) {
      toast({
        title: "Error",
        description: "There was an issue adding the journal entry.",
        className: "bg-red-500 text-white",
      })

    }
  }, [isSuccess, isError, toast])

  const handleChange = (selectedOption) => {
    formik.setFieldValue(
      "instrument",
      selectedOption ? selectedOption.value : ""
    )
  }

  const selectedOption = INDICES_AND_FOREX.find(
    (option) => option.value === formik.values.instrument
  )

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
              {formik.errors.instrument && formik.touched.instrument && (
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
                onValueChange={(value) =>
                  formik.setFieldValue("tradeType", value)
                }
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
              {formik.errors.tradeType && formik.touched.tradeType && (
                <div className="text-red-500 text-sm mt-1">
                  {formik.errors.tradeType}
                </div>
              )}
            </div>

            <div className="mb-4">
              <Label className="mb-2 block">Trade result</Label>
              <RadioGroup
                name="tradeResult"
                value={formik.values.tradeResult}
                onValueChange={(value) =>
                  formik.setFieldValue("tradeResult", value)
                }
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
            <Button type="submit" disabled={isJournalLoading}>
              {isJournalLoading && <Loader2 className="animate-spin" />}
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default AddJournal
