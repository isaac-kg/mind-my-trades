import { useNavigate } from "react-router-dom"
import { auth } from "../../firebase-config"
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { useDispatch, useSelector } from "react-redux"
import { addUserInformation } from "@/store/auth/auth.action"
import { Button } from "./ui/button"
import { Fragment, useState } from "react"
import { Loader2 } from "lucide-react"
import { toast } from "@/hooks/use-toast"

const Hero = () => {
  const navigate = useNavigate()
  const provider = new GoogleAuthProvider()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)

  const handleSignInClick = () => {
    setIsLoading(true)
    signInWithPopup(auth, provider)
      .then((result) => {
        dispatch(
          addUserInformation({
            username: result?.user?.displayName,
            emailAddress: result?.user?.email,
          })
        )
        navigate("/journaler/home")
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code
        const errorMessage = error.message
        toast({
          variant: "destructive",
          title: "Error",
          description: errorMessage,
        })
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const loginButton = (screenSize = "lg") => {
    return (
      <Button
        variant="secondary"
        className={`${
          screenSize === "sm" ? `hidden md:inline-flex lg:hidden` : ` `
        }`}
        onClick={handleSignInClick}
        disabled={isLoading}
      >
        {isLoading ? (
          <Fragment>
            <Loader2 className="animate-spin" />
            Google Sign In
          </Fragment>
        ) : (
          <Fragment>
            <img className="max-h-[24px]" src="/icons/google.svg" alt="" />
            Google Sign In
          </Fragment>
        )}
      </Button>
    )
  }

  return (
    <div className="lg:flex justify-center items-center h-screen relative">
      <div className="basis-3/4 h-full bg-tn_blue_50 px-6 lg:pl-32 flex flex-col">
        <div className="flex justify-between mt-6 gap-4 items-center">
          <div>
            <img className="max-h-[32px]" src="/icons/logo.svg" alt="" />
          </div>
          {loginButton("sm")}
        </div>
        <div className="z-10 my-auto">
          <p className="text-white text-4xl">
            Trading Journal for Consistent <br /> Growth.
          </p>
          <p className="text-white text-lg my-12">
            Journal your trades, uncover insights, and grow into <br /> a
            confident trader.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Button
              className="w-full sm:w-fit"
              variant="secondaryOutline"
              size="lg"
              onClick={handleSignInClick}
            >
              {isLoading ? (
                <Fragment>
                  <Loader2 className="animate-spin" />
                  Google Sign In
                </Fragment>
              ) : (
                <Fragment>
                  <img
                    className="max-h-[24px]"
                    src="/icons/google.svg"
                    alt=""
                  />
                  Google Sign In
                </Fragment>
              )}
            </Button>
          </div>
        </div>
      </div>
      <div className="hidden lg:flex basis-1/4 h-full bg-tn_gray_50 justify-end">
        <div className="pr-32 mt-6">{loginButton()}</div>
      </div>
      <div className="absolute right-0 hidden lg:block">
        <img className="max-h-[450px] lg:pr-32" src="/icons/phone.svg" alt="" />
      </div>
    </div>
  )
}

export default Hero
