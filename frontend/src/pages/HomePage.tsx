import landingPage from "../assets/landing.png";
import appDowloadImage from "../assets/appDownload.png";
const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="big-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">Delicious food is waiting for you...Order now</h1>
        <span className="text-x1">Food is just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
          <img src={landingPage}/>
          <div className="flex flex-col items-center justify-center gap-4 text-center">
              <span className="font-bold text-3xl tracking-tighter">
                Order takeaway even faster
              </span>
              <span>
                Download the Akasa Food App for faster ordering and personalised recommendations
              </span>
              <img src={appDowloadImage}/>
          </div>
      </div>
    </div>
  )
}

export default HomePage;