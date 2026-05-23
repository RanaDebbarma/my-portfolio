import Wrapper from "@/components/ui/Wrapper"

const about = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-4 p-2">
        <h3 className="tracking-widest uppercase font-bold">About</h3>
        <div className="space-y-2">
          <h1 className="text-3xl font-bold headline-font">A self-taught builder with a practical frontend mindset.</h1>
          <p>The portfolio is shaped around Rana&apos;s resume details, but presented as a richer story: strong responsive layout instincts, hands-on UI work, and a clear path toward full-stack engineering.</p>
        </div>
      </div>
      <Wrapper className="p-6 space-y-4">
        <h4 className="tracking-widest uppercase text-sm text-muted">Working style</h4>
        <p className="font-bold">Rana approaches frontend work with a clean UI mindset: responsive layout first, clear hierarchy second, and interaction only where it improves the experience.</p>
        <p>The focus is on building interfaces that feel polished, readable, and usable across devices, while steadily growing into stronger Next.js and full-stack capabilities.</p>
      </Wrapper>

    </div>
  )
}
export default about