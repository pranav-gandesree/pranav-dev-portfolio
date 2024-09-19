import { Button } from "@/components/ui/button"

export default function ProfileSection() {
  return (
    <>
    <div className="min-h-screen flex border border-white bg-black text-white p-8 md:p-8 lg:p-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-2/3 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hello, I'm Pranav Gandesree.
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              I'm a certified expert in IoT and Web Development, helping busy people like you be more organized and productive.
            </p>
            <p className="text-lg md:text-xl text-gray-400 mb-8">
              I design and optimize solutions to be clutter-free, so you can focus on what's important and get things done. 
            </p>
            <Button size="lg" className="text-lg">
              Book a call
            </Button>
          </div>
          </div>

          </div>

    </>

  )

}
