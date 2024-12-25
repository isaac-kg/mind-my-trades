import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Select from 'react-select';
import { useState } from "react"

const TradingPlan = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

 const [selectedOption, setSelectedOption] = useState()
  const handleChange = (value) =>{
    console.log("This is value: ", value)
    setSelectedOption(value)
  }

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
                    primary25: '#7A44C7',
                    primary: '#5E31B0',
                  },
                })}
              />
            </div>

            <div className="mb-4">
              <Label className="mb-2 block">Reasons for entry</Label>
              <Textarea></Textarea>
            </div>

            <div className="mb-4">
              <Label className="mb-2 block">Trade type</Label>
              <RadioGroup
                defaultValue="option-one"
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
              <Input type="file" />
            </div>

            <div className="mb-4">
              <Label className="mb-2 block">Trade result</Label>
              <RadioGroup
                defaultValue="option-one"
                className="flex flex-wrap gap-4"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-win" id="option-win" />
                  <Label htmlFor="option-one">Win</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-loss" id="option-loss" />
                  <Label htmlFor="option-two">Loss</Label>
                </div>
              </RadioGroup>
            </div>
            <div className="mb-4">
              <Label className="mb-2 block">Amount</Label>
              <Input />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setOpen(false)}>Save changes</Button>
          </DialogFooter>
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
      {[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7].map((number) => (
        <div key={number} className="w-rull p-4 rounded-md bg-tn_gray_50 mt-4">
          Lorem, ipsum.
        </div>
      ))}
    </div>
  )
}

export default TradingPlan
