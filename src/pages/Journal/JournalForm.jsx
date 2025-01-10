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
  DialogFooter,
} from "@/components/ui/dialog"
import Select from "react-select"
import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { useAddDocumentMutation } from "@/services/firestoreApi"
import moment from "moment"
import { Timestamp } from "firebase/firestore"
import { INDICES_AND_FOREX } from "../constant"
import { Loader2 } from "lucide-react"

const validationSchema = Yup.object({
  instrument: Yup.string().required("Pairs are required"),
  reason: Yup.string().required("Reason for entry is required"),
  tradeType: Yup.string().required("Trade type is required"),
})

const JournalForm = ({
  onSubmitForm,
  isJournalFormOpen = false,
  setIsJournalFormOpen,
  title,
  initialValues = {
    instrument: "",
    reason: "",
    tradeResult: "",
    tradeResult: "",
    amount: "",
  }},
) => {
  const formik = useFormik({
    initialValues: {
    ...initialValues,
      image: null,
    },
    validationSchema,
    onSubmit: (values) => {
      const firebaseTimestamp = Timestamp.now()
      const date = firebaseTimestamp.toDate()
      onSubmitForm({ createdAt: moment(date).format("DD MMM YYYY"), ...values })
      setOpen(false)
    },
  })

  const handleChange = (selectedOption) => {
    formik.setFieldValue(
      "instrument",
      selectedOption ? selectedOption.value : ""
    )
  }

  const selectedOption = INDICES_AND_FOREX.find(
    (option) => option.value === formik.values.instrument
  )

  const [
    addJournal,
    { data: journal, isLoading: isJournalLoading, error: errorJournal },
  ] = useAddDocumentMutation()
  console.log("This is error: ", errorJournal)

  const [open, setOpen] = useState(false)
  return (
    <Dialog open={isJournalFormOpen} onOpenChange={setIsJournalFormOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-tn_blue_50">{title}</DialogTitle>
        </DialogHeader>
        <form onSubmit={formik.handleSubmit}>
          <div className="mt-2">
            <div className="mb-4">
              <Label className="mb-2 block">Pairs</Label>
              <Select
                value={selectedOption }
                name="instrument"
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
            <Button className="bg-gray-400 text-white hover:bg-gray-500" onClick={setIsJournalFormOpen}>
              Cancel
            </Button>
            <Button type="submit" disabled={isJournalLoading}>
              {isJournalLoading && <Loader2 className="animate-spin" />}
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default JournalForm
