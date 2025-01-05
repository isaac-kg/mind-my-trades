import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const NotFound = () => {
  const navigate = useNavigate()
  return (
    <div className="h-screen flex">
      <div className="m-auto text-center">
        <p className="text-8xl text-tn_blue_50">404</p>
        <div className="my-6">
          <p className="text-2xl mb-2">Looks like this page doesn't exist!</p>
          <p>Go back to home and continue exploring</p>
        </div>
        <Button onClick={navigate("/")}>Back To Home</Button>
      </div>
    </div>
  )
}

export default NotFound
