import CustomHR from "@/components/ui/CustomTags"

const contact = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Introduction */}
      <div className="space-y-2 p-4 bg-">
        <h3 className="tracking-widest uppercase font-semibold font-sans text-muted">Contact</h3>
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-3xl lg:text-4xl font-bold headline-font">{}</h1>
          <p>{}</p>
        </div>
      </div>
      <CustomHR />
    </div>
  )
}
export default contact