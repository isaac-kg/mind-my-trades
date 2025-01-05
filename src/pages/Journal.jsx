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

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Select from "react-select"
import { useState } from "react"
import { useFormik } from "formik"
import * as Yup from "yup"
import { Eye, Pencil, Trash2 } from "lucide-react"

const validationSchema = Yup.object({
  selectedOption: Yup.string().required("Pairs are required"),
  reasons: Yup.string().required("Reason for entry is required"),
})

const TradingPlan = () => {
  const formik = useFormik({
    initialValues: {
      selectedOption: "",
      reasons: "",
      tradeType: "option-one",
      tradeResult: "option-win",
      amount: "",
      image: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values: ", values)
      setOpen(false)
    },
  })

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ]

  const handleChange = (selectedOption) => {
    formik.setFieldValue(
      "selectedOption",
      selectedOption ? selectedOption.value : ""
    ) // Store only the string value of the selected option
  }

  const handleFileChange = (e) => {
    formik.setFieldValue("image", e.target.files[0])
  }

  const selectedOption = options.find(
    (option) => option.value === formik.values.selectedOption
  )

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
                  options={options}
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
                {formik.errors.selectedOption &&
                  formik.touched.selectedOption && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.selectedOption}
                    </div>
                  )}
              </div>

              <div className="mb-4">
                <Label className="mb-2 block">Reasons for entry</Label>
                <Textarea
                  name="reasons"
                  value={formik.values.reasons}
                  onChange={formik.handleChange}
                />
                {formik.errors.reasons && formik.touched.reasons && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.reasons}
                  </div>
                )}
              </div>

              <div className="mb-4">
                <Label className="mb-2 block">Trade type</Label>
                <RadioGroup
                  name="tradeType"
                  value={formik.values.tradeType}
                  onChange={formik.handleChange}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-one" id="option-one" />
                    <Label htmlFor="option-one">Buy</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-two" id="option-two" />
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
                  onChange={formik.handleChange}
                  className="flex flex-wrap gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-win" id="option-win" />
                    <Label htmlFor="option-win">Win</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="option-loss" id="option-loss" />
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
      {[1, 2, 3, 4, 5, 6, 7].map((number) => (
        <div
          key={number}
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-4 p-4 rounded-md bg-tn_gray_50 mt-4"
        >
          <div>15 March 2025</div>
          <div>US30</div>
          <div>Buy</div>
          {/*Pending*/}
          <div>Trade Result</div>
          <div className="flex gap-4">
            {" "}
            <Pencil className="hover:cursor-pointer" onClick={() => console.log("Im clicked>>>")} color="#3B82F6" />{" "}
            <Trash2 className="hover:cursor-pointer" onClick={() => console.log("Im clicked>>>")} color="#EF4444" />
            <Eye className="hover:cursor-pointer" onClick={() => console.log("Im clicked>>>")} color="#10B981" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default TradingPlan
